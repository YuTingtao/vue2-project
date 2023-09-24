(function(){var e={9586:function(e,n,t){"use strict";t.r(n);var r=t(9824),o=t.n(r),i=t(5348),u=t.n(i),a=new(o())({id:"icon-case",use:"icon-case-usage",viewBox:"0 0 1024 1024",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="icon-case">\r\n    <path d="M49.971 346.317l441.959 255.18c6.553 3.892 13.926 5.735 21.504 5.735 7.372 0 14.745-1.843 21.299-5.734L976.69 346.317c13.312-7.783 21.504-21.504 21.504-37.069s-7.987-29.286-21.504-37.069L534.733 17c-13.107-7.578-29.696-7.578-42.803 0L49.97 272.178c-13.312 7.783-21.299 21.504-21.299 37.069s7.782 29.286 21.3 37.069zM513.23 63.693l425.165 245.555-425.165 245.35-425.165-245.35L513.229 63.693z" />\r\n    <path d="M954.163 496.64L513.23 751.206 72.499 496.64c-12.288-7.168-27.853-2.867-35.02 9.42-7.169 12.289-2.868 27.854 9.42 35.022l466.535 269.312 466.33-269.312c12.287-7.168 16.383-22.733 9.42-35.021-7.168-12.288-22.938-16.589-35.02-9.421z" />\r\n    <path d="M954.163 699.392L513.23 953.958 72.499 699.392c-12.288-7.168-27.853-2.867-35.02 9.42-7.169 12.289-2.868 27.854 9.42 35.022l466.535 269.312 466.33-269.312c12.287-7.168 16.383-22.733 9.42-35.021-7.168-12.288-22.938-16.589-35.02-9.421z" />\r\n</symbol>'});u().add(a);n["default"]=a},1958:function(e,n,t){"use strict";var r=t(144),o=function(){var e=this,n=e._self._c;return n("router-view")},i=[],u={data(){return{}}},a=u,s=t(1001),c=(0,s.Z)(a,o,i,!1,null,null,null),l=c.exports,d=t(1120),f=t(8062),p=t(4720),h=t.n(p),v=function(){var e=this,n=e._self._c;return n("svg",{staticClass:"svg-icon",attrs:{"aria-hidden":"true",width:e.size,height:e.size}},[n("use",{attrs:{"xlink:href":e.symbolId,rel:"external nofollow",fill:e.color}})])},m=[],g={name:"SvgIcon",props:{name:{type:String,required:!0},size:{type:[String,Number],default:"1em"},color:{type:String,default:"currentColor"}},computed:{symbolId(){return`#icon-${this.name}`}}},b=g,y=(0,s.Z)(b,v,m,!1,null,"96fe1d84",null),w=y.exports;r["default"].component("svg-icon",w);const k=t(2688),x=e=>e.keys().map(e);x(k);var M={mounted(e,n){e.src&&(e.onerror=()=>{e.src=n.value,e.onerror=null})},updated(e,n){e.src&&(e.onerror=()=>{e.src=n.value,e.onerror=null})}},O={inserted(e,n){const t=d.Z.currentRoute,r=f.Z.getters["flatMenus"];if("object"==typeof n.value){const{path:t,btn:o}=n.value;if(o){const n=r[t];n.some((e=>e.name==o))||e.parentNode.removeChild(e)}else r[t]||e.parentNode.removeChild(e)}else{const o=r[t.path];o.some((e=>e.name==n.value))||e.parentNode.removeChild(e)}}};function S(){r["default"].directive("error",M),r["default"].directive("permission",O)}var j=S,C=t(2543);j(),r["default"].use(h(),{size:"medium"}),r["default"].prototype.$bus=new r["default"],r["default"].config.productionTip=!1,r["default"].config.errorHandler=function(e,n,t){(0,C["default"])()},new r["default"]({router:d.Z,store:f.Z,render:e=>e(l)}).$mount("#app")},1120:function(e,n,t){"use strict";var r=t(144),o=t(8345),i=t(8062),u=t(4720),a=t(2543);r["default"].use(o.ZP);const s=[{path:"/",name:"layout",redirect:"/index",component:()=>Promise.all([t.e(766),t.e(225)]).then(t.bind(t,2430)),children:[{path:"/index",name:"index",component:()=>t.e(826).then(t.bind(t,8888)),meta:{}},{path:"/svgIcon",name:"svgIcon",component:()=>t.e(496).then(t.bind(t,7850)),meta:{}}]},{path:"/login",name:"login",component:()=>Promise.all([t.e(766),t.e(724)]).then(t.bind(t,6724))}],c=new o.ZP({routes:s,model:"hash",base:"/",scrollBehavior(e,n,t){return t||{x:0,y:0}}});c.beforeEach(((e,n,t)=>{const r=["/","/login",...Object.keys(i.Z.getters.flatMenus)],o=i.Z.getters.firstMenuPath;i.Z.state.token||"/login"===e.path?r.includes(e.path)?t():("/"!=e.path&&"/404"!=e.path&&u.Message.error("访问地址不存在"),t(o)):t("/login")})),c.onError((e=>{(0,a["default"])()})),n.Z=c},8062:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(144),o=t(629),i=t(5103);const u={namespaced:!0,state:()=>({data:[]}),getters:{},mutations:{},actions:{}};var a=u,s=[{title:"系统首页",path:"/index",name:"index",icon:"el-icon-house",hidden:0},{title:"使用案例",path:"",name:"",redirect:"/svgIcon",icon:"el-icon-magic-stick",hidden:0,children:[{title:"svg图标",path:"/svgIcon",name:"svgIcon",redirect:"",icon:"",hidden:0,buttons:[{name:"add"},{name:"edit"},{name:"delete"}]}]}];function c(e,n={}){return e.forEach((e=>{if(e.path&&(n[e.path]=e.buttons||[]),e.children&&e.children.length>0)return c(e.children,n)})),n}function l(e,n="/login"){return e&&(n=e.path,e.children&&e.children.length>0)?l(e.children[0],n):n}const d=new i.ZP({key:"vuex",storage:window.sessionStorage});r["default"].use(o.ZP);const f=new o.ZP.Store({state(){return{token:"",userInfo:{},userMenus:[]}},getters:{flatMenus:e=>c(e.userMenus),firstMenuPath(e){return l(e.userMenus[0])}},mutations:{setLogin(e,n){e.token=n.token,e.userInfo=n.userInfo},setLogout(e){e.token="",e.userInfo={}},setUserMenus(e,n){e.userMenus=n}},actions:{getUserMenus({commit:e}){e("setUserMenus",s)}},modules:{dataDic:a},plugins:[d.plugin]});var p=f},2543:function(e,n,t){"use strict";t.r(n);var r=t(4720);let o;function i(e){if(!o){o=!0,setTimeout((()=>{o=!1}),1e3);var n=new XMLHttpRequest;n.open("get","./version.json",!0),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var t=JSON.parse(n.responseText);e||t.version==sessionStorage.appVersion||r.MessageBox.alert("检测到版本有更新，请刷新页面","版本更新提示",{callback:()=>{location.reload(!0)}}),sessionStorage.appVersion=t.version}},n.send()}}n["default"]=i},2688:function(e,n,t){var r={"./case.svg":9586};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=2688}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+({225:"layout",496:"svgIcon",826:"index"}[e]||e)+"."+{225:"3abf457c",496:"788316c8",724:"4f989bd0",766:"f6a9c16f",826:"0da1d678"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+({225:"layout",496:"svgIcon"}[e]||e)+"."+{225:"ef290c48",496:"6c10116e",724:"3a9b2842"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue2-project:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var f=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var u=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=a,i.parentNode&&i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=u,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={225:1,496:1,724:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,s=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],s=r[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(s)var l=s(t)}for(n&&n(r);c<u.length;c++)i=u[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkvue2_project"]=self["webpackChunkvue2_project"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(1958)}));r=t.O(r)})();