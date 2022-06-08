package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
	"testing"
	"time"

	"github.com/cenkalti/backoff/v4"
	"github.com/kelseyhightower/envconfig"
	"github.com/openfga/openfga/mocks"
	"github.com/openfga/openfga/pkg/logger"
	"github.com/stretchr/testify/require"
	"golang.org/x/sync/errgroup"
)

type authTest struct {
	_name         string
	authHeader    string
	expectedError string
}

const (
	openFgaServerURL = "http://localhost:8080"
)

func processEnv(t *testing.T, env map[string]string) svcConfig {
	for key, value := range env {
		os.Setenv(key, value)
	}

	var config svcConfig
	if err := envconfig.Process("OPENFGA", &config); err != nil {
		t.Fatalf("failed to process server config: %v", err)
	}

	return config
}

func TestBuildServerWithNoAuth(t *testing.T) {
	noopLogger := logger.NewNoopLogger()

	config := processEnv(t, map[string]string{})

	service, err := buildService(config, noopLogger)
	require.NoError(t, err, "Failed to build server and/or datastore")

	defer service.authenticator.Close()
}

func TestBuildServerWithPresharedKeyAuthenticationFailsIfZeroKeys(t *testing.T) {
	noopLogger := logger.NewNoopLogger()

	config := processEnv(t, map[string]string{
		"OPENFGA_AUTH_METHOD":         "preshared",
		"OPENFGA_AUTH_PRESHARED_KEYS": "",
	})

	_, err := buildService(config, noopLogger)
	if err == nil {
		t.Fatal("Expected to fail with error")
	}

	expectedError := "invalid auth configuration, please specify at least one key"
	if !strings.Contains(err.Error(), expectedError) {
		t.Fatalf("Expected to fail with error %v but got %v", expectedError, err.Error())
	}
}

func TestBuildServerWithPresharedKeyAuthentication(t *testing.T) {
	noopLogger := logger.NewNoopLogger()
	ctx := context.Background()

	config := processEnv(t, map[string]string{
		"OPENFGA_AUTH_METHOD":         "preshared",
		"OPENFGA_AUTH_PRESHARED_KEYS": "KEYONE,KEYTWO",
	})

	service, err := buildService(config, noopLogger)
	require.NoError(t, err, "Failed to build server and/or datastore")

	g, ctx := errgroup.WithContext(ctx)

	g.Go(func() error {
		return service.openFgaServer.Run(ctx)
	})

	defer service.authenticator.Close()
	ensureServiceUp(t)

	tests := []authTest{{
		_name:         "Header with incorrect key fails",
		authHeader:    "Bearer incorrectkey",
		expectedError: "unauthorized",
	}, {
		_name:         "Missing header fails",
		authHeader:    "",
		expectedError: "missing bearer token",
	}, {
		_name:         "Correct key one succeeds",
		authHeader:    "Bearer KEYONE",
		expectedError: "",
	}, {
		_name:         "Correct key two succeeds",
		authHeader:    "Bearer KEYTWO",
		expectedError: "",
	}}

	for _, test := range tests {
		t.Run(test._name, func(t *testing.T) {
			payload := strings.NewReader(`{"name": "some-store-name"}`)
			req, err := http.NewRequest("POST", fmt.Sprintf("%s/stores", openFgaServerURL), payload)
			require.NoError(t, err, "Failed to construct request")
			req.Header.Set("content-type", "application/json")
			req.Header.Set("authorization", test.authHeader)
			retryClient := http.Client{}
			res, err := retryClient.Do(req)
			require.NoError(t, err, "Failed to execute request")

			defer res.Body.Close()
			body, err := ioutil.ReadAll(res.Body)
			require.NoError(t, err, "Failed to read response")

			stringBody := string(body)

			if test.expectedError == "" && strings.Contains(stringBody, "code") {
				t.Fatalf("Expected no error but got %v", stringBody)
			}

			if !strings.Contains(stringBody, test.expectedError) && test.expectedError != "" {
				t.Fatalf("Expected %v to contain %v", stringBody, test.expectedError)
			}
		})
	}

	service.openFgaServer.Close()
}

func TestBuildServerWithOidcAuthentication(t *testing.T) {
	noopLogger := logger.NewNoopLogger()
	ctx := context.Background()

	const localOIDCServerURL = "http://localhost:8083"

	config := processEnv(t, map[string]string{
		"OPENFGA_AUTH_METHOD":        "oidc",
		"OPENFGA_AUTH_OIDC_ISSUER":   localOIDCServerURL,
		"OPENFGA_AUTH_OIDC_AUDIENCE": openFgaServerURL,
	})

	trustedIssuerServer, err := mocks.NewMockOidcServer(localOIDCServerURL)
	if err != nil {
		t.Fatal(err)
	}

	service, err := buildService(config, noopLogger)
	if err != nil {
		t.Fatalf("Failed to build server and/or datastore: %v", err)
	}

	g, ctx := errgroup.WithContext(ctx)

	g.Go(func() error {
		return service.openFgaServer.Run(ctx)
	})

	defer service.authenticator.Close()
	ensureServiceUp(t)

	trustedToken, err := trustedIssuerServer.GetToken(openFgaServerURL, "some-user")
	if err != nil {
		t.Fatal(err)
	}

	tests := []authTest{{
		_name:         "Header with invalid token fails",
		authHeader:    "Bearer incorrecttoken",
		expectedError: "error parsing token",
	}, {
		_name:         "Missing header fails",
		authHeader:    "",
		expectedError: "missing bearer token",
	}, {
		_name:         "Correct token succeeds",
		authHeader:    "Bearer " + trustedToken,
		expectedError: "",
	}}

	for _, test := range tests {
		t.Run(test._name, func(t *testing.T) {
			payload := strings.NewReader(`{"name": "some-store-name"}`)
			req, err := http.NewRequest("POST", fmt.Sprintf("%s/stores", openFgaServerURL), payload)
			require.NoError(t, err, "Failed to construct request")
			req.Header.Set("content-type", "application/json")
			req.Header.Set("authorization", test.authHeader)
			retryClient := http.Client{}
			res, err := retryClient.Do(req)
			require.NoError(t, err, "Failed to execute request")

			defer res.Body.Close()
			body, err := ioutil.ReadAll(res.Body)
			require.NoError(t, err, "Failed to read response")

			stringBody := string(body)
			if test.expectedError == "" && strings.Contains(stringBody, "code") {
				t.Fatalf("Expected no error but got %v", stringBody)
			}

			if !strings.Contains(stringBody, test.expectedError) && test.expectedError != "" {
				t.Fatalf("Expected %v to contain %v", stringBody, test.expectedError)
			}
		})
	}

	service.openFgaServer.Close()
}

func ensureServiceUp(t testing.TB) {
	t.Helper()

	defer t.Log("service is now up")

	backoffPolicy := backoff.NewExponentialBackOff()
	backoffPolicy.MaxElapsedTime = 2 * time.Second

	err := backoff.Retry(
		func() error {
			resp, err := http.Get(fmt.Sprintf("%s/healthz", openFgaServerURL))
			if err != nil {
				return err
			}
			defer resp.Body.Close()

			if resp.StatusCode != http.StatusOK {
				return fmt.Errorf("waiting for OK status")
			}

			return nil
		},
		backoffPolicy,
	)
	require.NoError(t, err)
}
