(function(){var e={9586:function(e,t,n){"use strict";n.r(t);var r=n(9824),o=n.n(r),i=n(5348),u=n.n(i),a=new(o())({id:"icon-case",use:"icon-case-usage",viewBox:"0 0 1024 1024",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="icon-case">\r\n    <path d="M49.971 346.317l441.959 255.18c6.553 3.892 13.926 5.735 21.504 5.735 7.372 0 14.745-1.843 21.299-5.734L976.69 346.317c13.312-7.783 21.504-21.504 21.504-37.069s-7.987-29.286-21.504-37.069L534.733 17c-13.107-7.578-29.696-7.578-42.803 0L49.97 272.178c-13.312 7.783-21.299 21.504-21.299 37.069s7.782 29.286 21.3 37.069zM513.23 63.693l425.165 245.555-425.165 245.35-425.165-245.35L513.229 63.693z" />\r\n    <path d="M954.163 496.64L513.23 751.206 72.499 496.64c-12.288-7.168-27.853-2.867-35.02 9.42-7.169 12.289-2.868 27.854 9.42 35.022l466.535 269.312 466.33-269.312c12.287-7.168 16.383-22.733 9.42-35.021-7.168-12.288-22.938-16.589-35.02-9.421z" />\r\n    <path d="M954.163 699.392L513.23 953.958 72.499 699.392c-12.288-7.168-27.853-2.867-35.02 9.42-7.169 12.289-2.868 27.854 9.42 35.022l466.535 269.312 466.33-269.312c12.287-7.168 16.383-22.733 9.42-35.021-7.168-12.288-22.938-16.589-35.02-9.421z" />\r\n</symbol>'});u().add(a);t["default"]=a},6894:function(e,t,n){"use strict";n.r(t);var r=n(9824),o=n.n(r),i=n(5348),u=n.n(i),a=new(o())({id:"icon-case2",use:"icon-case2-usage",viewBox:"0 0 1024 1024",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="icon-case2">\r\n    <path d="M49.971 346.317l441.959 255.18c6.553 3.892 13.926 5.735 21.504 5.735 7.372 0 14.745-1.843 21.299-5.734L976.69 346.317c13.312-7.783 21.504-21.504 21.504-37.069s-7.987-29.286-21.504-37.069L534.733 17c-13.107-7.578-29.696-7.578-42.803 0L49.97 272.178c-13.312 7.783-21.299 21.504-21.299 37.069s7.782 29.286 21.3 37.069zM513.23 63.693l425.165 245.555-425.165 245.35-425.165-245.35L513.229 63.693z" />\r\n    <path d="M954.163 496.64L513.23 751.206 72.499 496.64c-12.288-7.168-27.853-2.867-35.02 9.42-7.169 12.289-2.868 27.854 9.42 35.022l466.535 269.312 466.33-269.312c12.287-7.168 16.383-22.733 9.42-35.021-7.168-12.288-22.938-16.589-35.02-9.421z" />\r\n    <path d="M954.163 699.392L513.23 953.958 72.499 699.392c-12.288-7.168-27.853-2.867-35.02 9.42-7.169 12.289-2.868 27.854 9.42 35.022l466.535 269.312 466.33-269.312c12.287-7.168 16.383-22.733 9.42-35.021-7.168-12.288-22.938-16.589-35.02-9.421z" />\r\n</symbol>'});u().add(a);t["default"]=a},8157:function(e,t,n){"use strict";var r=n(144),o=function(){var e=this,t=e._self._c;return t("router-view")},i=[],u={data(){return{}},computed:{menuPaths(){return["/","/login",...this.$store.getters.menuPaths]},firstMenuPath(){return this.$store.getters.firstMenuPath}},watch:{"$route.path"(e){this.menuPaths.includes(e)||("/index"!=e&&this.$message.error("暂无权限访问"),this.$router.replace(this.firstMenuPath))}}},a=u,c=n(1001),s=(0,c.Z)(a,o,i,!1,null,null,null),l=s.exports,d=n(1120),f=n(796),h=n(4720),p=n.n(h),m=function(){var e=this,t=e._self._c;return t("svg",{staticClass:"svg-icon",attrs:{"aria-hidden":"true",width:e.size,height:e.size}},[t("use",{attrs:{"xlink:href":e.symbolId,rel:"external nofollow",fill:e.color}})])},v=[],g={name:"SvgIcon",props:{name:{type:String,required:!0},size:{type:[String,Number],default:"1em"},color:{type:String,default:"currentColor"}},computed:{symbolId(){return`#icon-${this.name}`}}},b=g,y=(0,c.Z)(b,m,v,!1,null,"96fe1d84",null),w=y.exports;r["default"].component("svg-icon",w);const k=n(2688),x=e=>e.keys().map(e);x(k),r["default"].use(p(),{size:"medium"}),r["default"].prototype.$bus=new r["default"],r["default"].config.productionTip=!1,new r["default"]({router:d.Z,store:f.Z,render:e=>e(l)}).$mount("#app")},1120:function(e,t,n){"use strict";var r=n(144),o=n(8345),i=n(796);r["default"].use(o.ZP);const u=[{path:"/",name:"layout",redirect:"/index",component:()=>n.e(225).then(n.bind(n,2709)),children:[{path:"/index",name:"index",component:()=>n.e(826).then(n.bind(n,6075)),meta:{}},{path:"/svgIcon",name:"svgIcon",component:()=>n.e(496).then(n.bind(n,5931)),meta:{}}]},{path:"/login",name:"login",component:()=>n.e(524).then(n.bind(n,5524))}],a=new o.ZP({routes:u,model:"hash",base:"/",scrollBehavior(e,t,n){return n||{x:0,y:0}}});a.beforeEach(((e,t,n)=>{i.Z.state.token||"/login"==e.path?n():n("/login")})),t["Z"]=a},796:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});n(7658);var r=n(144),o=n(629),i=n(5103);const u={namespaced:!0,state:()=>({data:[]}),getters:{},mutations:{},actions:{}};var a=u,c=[{id:1e3,title:"系统首页",path:"/index",name:"index",icon:"el-icon-house",hidden:0},{id:2e3,title:"使用案例",path:"",name:"",redirect:"/svgIcon",icon:"el-icon-magic-stick",hidden:0,children:[{id:2001,title:"svg图标",path:"/svgIcon",name:"svgIcon",redirect:"",icon:"",hidden:0}]}];const s=new i.ZP({key:"vuex",storage:window.sessionStorage});r["default"].use(o.ZP);const l=new o.ZP.Store({state(){return{token:"",userInfo:{},menus:[]}},getters:{menuPaths(e){return d(e.menus)},firstMenuPath(e){let t="/login";if(e.menus.length>0){let n=e.menus[0];t=n.redirect||n.path,n.children&&n.children.length>0&&(t=n.children[0].redirect||n.children[0].path)}return t}},mutations:{setLogin(e,t){e.token=t.token,e.userInfo=t.userInfo},setLogout(e){e.token="",e.userInfo={}},setMenus(e,t){e.menus=t}},actions:{getMenus({commit:e}){e("setMenus",c)}},modules:{dataDic:a},plugins:[s.plugin]});function d(e,t=[]){return e.forEach((e=>{e.path&&t.push(e.path),e.children&&e.children.length>0&&d(e.children,t)})),t}var f=l},2688:function(e,t,n){var r={"./case.svg":9586,"./useCase/case2.svg":6894};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=2688}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({225:"layout",496:"svgIcon",826:"index"}[e]||e)+"."+{225:"9b62f9ac",496:"528b8a26",524:"eba75b40",826:"5c7d940d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(225===e?"layout":e)+"."+{225:"1c614a80",524:"f3811338"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue2-project:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={225:1,524:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(t&&t(r);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkvue2_project"]=self["webpackChunkvue2_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8157)}));r=n.O(r)})();