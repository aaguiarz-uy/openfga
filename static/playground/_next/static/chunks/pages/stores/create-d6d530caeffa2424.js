(("undefined"!==typeof self?self:this).webpackChunk_N_E=("undefined"!==typeof self?self:this).webpackChunk_N_E||[]).push([[807],{13421:function(e,t){"use strict";t.Q=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},i=t||{},a=e.split(";"),s=i.decode||n,c=0;c<a.length;c++){var u=a[c],p=u.indexOf("=");if(!(p<0)){var l=u.substring(0,p).trim();if(void 0==r[l]){var d=u.substring(p+1,u.length).trim();'"'===d[0]&&(d=d.slice(1,-1)),r[l]=o(d,s)}}}return r},t.q=function(e,t,n){var o=n||{},a=o.encode||r;if("function"!==typeof a)throw new TypeError("option encode is invalid");if(!i.test(e))throw new TypeError("argument name is invalid");var s=a(t);if(s&&!i.test(s))throw new TypeError("argument val is invalid");var c=e+"="+s;if(null!=o.maxAge){var u=o.maxAge-0;if(isNaN(u)||!isFinite(u))throw new TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(u)}if(o.domain){if(!i.test(o.domain))throw new TypeError("option domain is invalid");c+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw new TypeError("option path is invalid");c+="; Path="+o.path}if(o.expires){if("function"!==typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");c+="; Expires="+o.expires.toUTCString()}o.httpOnly&&(c+="; HttpOnly");o.secure&&(c+="; Secure");if(o.sameSite){switch("string"===typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"strict":c+="; SameSite=Strict";break;case"none":c+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return c};var n=decodeURIComponent,r=encodeURIComponent,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function o(e,t){try{return t(e)}catch(n){return e}}},73629:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stores/create",function(){return n(76166)}])},88257:function(e,t,n){"use strict";n.d(t,{aV:function(){return s},u_:function(){return a}});var r=n(97324);n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){var e,t,n=(e=["\n  ","\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return o=function(){return n},n}var a=(0,r.styled)("div")((function(e){var t,n=e.theme,r=e.width,o=e.disabledPaddingTop,a=e.closable;return i(t={},n.breakpoints.down("md"),{height:"100%",paddingTop:"40px",paddingLeft:"10px",paddingRight:"10px",'[data-cosmos-key="icon"]':{top:"17px !important",right:"0px !important"}}),i(t,'[data-cosmos-key="paragraph"], [data-cosmos-key="heading"]',{border:0}),i(t,"position","relative"),i(t,"width","100%"),i(t,"maxWidth","".concat(r||430,"px")),i(t,"display","inline-block"),i(t,"margin","40px 16px"),i(t,"backgroundColor",n.palette.other.bg),i(t,"borderRadius","5px"),i(t,"color",n.palette.neutral.white),i(t,"marginTop","auto"),i(t,"marginBottom","auto"),i(t,"padding","40px"),i(t,"paddingTop",o?"0":"60px"),i(t,"h1",{fontWeight:"500",fontSize:"22px",color:n.palette.neutral.white}),i(t,' & > [data-cosmos-key="icon"]',{position:"absolute",top:"20px",right:"20px",cursor:"pointer",svg:{width:"18px",height:"18px"},display:a?"inherit":"none"}),i(t,'& > [data-cosmos-key="form.field.content"]',{p:{fontSize:"13px",color:n.palette.neutral[80],letterSpacing:0,lineHeight:"20px"}}),t})),s=((0,r.styled)("div")(o(),(function(e){return e.centered&&"\n      text-align: center;\n    "})),(0,r.styled)("div")((function(e){var t=e.theme;return i({position:"fixed",top:"0px",left:"0px",bottom:"0px",right:"0px","z-index":"20",display:"flex",justifyContent:"center",background:e.transparent?"transparent":"rgb(0, 0, 0, 0.5)"},t.breakpoints.down("md"),{backgroundColor:t.palette.other.bg})})))},76166:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(52322),i=n(2784),o=n(44694),a=n(88257),s=n(75969),c=n(40781),u=n(5632),p=n(19034),l=n.n(p),d=n(76635),f=n.n(d),h=n(74833),g=n(97324);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=(0,g.styled)("div")((function(e){var t=e.theme;return{width:"100%",paddingBottom:"20px",h2:{textAlign:"center",marginTop:"24px",marginBottom:"0.75em",fontSize:"22px",color:"#ffffff",letterSpacing:0,userSelect:"none"},"& > p":{textAlign:"center",fontWeight:"auto",fontSize:"16px",color:t.palette.neutral[30],letterSpacing:0,minHeight:"80px",lineHeight:"25px",userSelect:"none"},'[data-cosmos-key="form.field"] label':{color:t.palette.neutral[30],textAlign:"center"},input:{backgroundColor:t.palette.background.default,borderColor:t.palette.neutral[700],color:t.palette.neutral[100]},"input: hover":{borderColor:"rgb(3, 134, 227)"},"input: focus":{borderColor:"rgb(3, 143, 227)",boxShadow:"0px 0px 0 1px #0386e3"}}})),y=((0,g.styled)("div")((function(e){var t=e.height;return{height:"".concat(t||180,"px"),padding:0,margin:0,display:"flex",alignItems:"center",justifyContent:"center",img:{height:"100px",maxWidth:"250px",objectFit:"contain"}}})),(0,g.styled)("div")((function(e){return{textAlign:e.centered?"center":"inherit"}}))),v=((0,g.styled)("div")((function(e){return m({textAlign:"center",position:"absolute",top:"-64px",left:0,width:"50px",right:0,margin:"auto"},e.theme.breakpoints.down("md"),{top:"40px"})})),(0,g.styled)("div")((function(e){var t,n=e.theme;return m(t={display:"grid",gridGap:"24px"},n.breakpoints.down("md"),{display:"grid",minHeight:"100%",gridTemplateRows:"40px 1fr auto",gridTemplateColumns:"100%",gridTemplateAreas:"header content footer"}),m(t,"Text",m({},n.breakpoints.down("md"),{gridArea:"content",alignSelf:"center"})),m(t,"Footer",m({},n.breakpoints.down("md"),{gridArea:"footer"})),t}))),b=n(48738);var w=function(e){if(!(0,b.Z)(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)};function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){s=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=function(){var e=k(i.useState(""),2),t=e[0],n=e[1],a=k(i.useState(!0),2),p=a[0],d=a[1],g=k(i.useState(!1),2),m=g[0],S=g[1],C=new s.Z,j=(0,u.useRouter)(),O=function(e){var t=C.get("localStores")||"",n=new c.e0(t);if(n.exists(e))S(!0);else{var r,i=j.query.id;i&&(r=i,(0,b.Z)(r)&&4===w(r))?n.add(e,i):n.add(e),C.set("localStores",n.serialize(),{path:"/",expires:l()().add(10,"years").toDate()}),j.push("/sandbox/?store=".concat(e))}},T=function(e){return!f().isEmpty(e)&&RegExp("^[A-Za-z0-9][-A-Za-z0-9]*$","u").test(e)};return(0,r.jsxs)(v,{children:[m&&(0,r.jsxs)(o.Alert,{icon:"danger",dismissAfterSeconds:5,appearance:"danger",title:"",dismissible:!1,onDismiss:function(){S(!1)},children:["The store ",(0,r.jsxs)("strong",{children:[t," "]})," already exists."]}),(0,r.jsxs)(o.Form,{onSubmit:function(e){e.preventDefault(),T(t)?O(t):d(!0)},children:[(0,r.jsxs)(x,{children:[(0,r.jsx)(o.Heading,{size:2,children:"Create store"}),(0,r.jsx)(o.TextInput,{onChange:function(e){var t=e.target.value;n(t),T(t)?d(!1):d(!0)},hasError:p,placeholder:"Store name (only letters, numbers and '-')"})]}),(0,r.jsx)(y,{centered:!0,children:(0,r.jsxs)(o.StackLayout,{distribution:"center",children:[(0,r.jsx)(h.m,{onClick:function(){j.push("/sandbox/")},variant:"text",type:"button",children:"Cancel"}),(0,r.jsx)(h.m,{disabled:p,variant:"contained",color:"primary",type:"submit",children:"Create"})]})})]})]})},j=function(){return(0,r.jsx)(a.aV,{transparent:!0,children:(0,r.jsxs)(a.u_,{closable:!1,width:470,disabledPaddingTop:!0,children:[(0,r.jsx)(o.Icon,{name:"close",color:"#B2B2B2",size:20}),(0,r.jsx)(C,{})]})})},O=function(){return(0,r.jsx)("div",{style:{height:"100%"},suppressHydrationWarning:!0,children:(0,r.jsx)(j,{})})}},5632:function(e,t,n){e.exports=n(92203)},75969:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(13421);function i(e,t){void 0===t&&(t={});var n=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return"undefined"===typeof t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(r){}return e}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},a=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"===typeof e?r.Q(e,t):"object"===typeof e&&null!==e?e:{}}(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=r.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),i(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var r in this.cookies)n[r]=i(this.cookies[r],e);return n},e.prototype.set=function(e,t,n){var i;"object"===typeof t&&(t=JSON.stringify(t)),this.cookies=o(o({},this.cookies),((i={})[e]=t,i)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.q(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=o(o({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=o({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.q(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}()}},function(e){e.O(0,[661,774,888,179],(function(){return t=73629,e(e.s=t);var t}));var t=e.O();_N_E=t}]);