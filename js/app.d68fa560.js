(function(t){function e(e){for(var a,s,c=e[0],i=e[1],l=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"335a":function(t,e,n){"use strict";n("362d")},"362d":function(t,e,n){},a1a3:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("v-main",[n("router-view")],1)],1)},o=[],s=(n("a1a3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",flat:"",color:"transparent"}},[n("v-toolbar-title",[t._v(t._s(this.$route.name))]),n("v-spacer"),n("v-btn",{attrs:{icon:"",small:"",target:"_blank",href:"https://www.linkedin.com/in/alexandre-cortez-43b400169/"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[n("title",{attrs:{id:"LinkedinIcoTitle"}},[t._v("LinkedIn logo")]),n("path",{attrs:{d:"M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"}})])]),n("v-btn",{attrs:{icon:"",small:"",target:"_blank",href:"https://github.com/CortezSMz"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z","clip-rule":"evenodd"}})])])],1)}),c=[],i=a["a"].extend({name:"Header",props:{routeName:String,viewport:Object},methods:{openMenu:function(){document.body.classList.add("-open-nav")},closeMenu:function(){document.body.classList.remove("-open-nav")}}}),l=i,u=n("2877"),d=n("6544"),p=n.n(d),f=n("40dc"),v=n("8336"),h=n("2fa4"),b=n("2a7f"),m=Object(u["a"])(l,s,c,!1,null,null,null),g=m.exports;p()(m,{VAppBar:f["a"],VBtn:v["a"],VSpacer:h["a"],VToolbarTitle:b["a"]});var y=a["a"].extend({components:{Header:g},name:"App"}),w=y,x=n("7496"),_=n("f6c4"),O=Object(u["a"])(w,r,o,!1,null,null,null),S=O.exports;p()(O,{VApp:x["a"],VMain:_["a"]});var j=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[t._v(" This website is a work in progress. Most of what you see here will probably change. "),n("v-col",{attrs:{cols:"10"}},[n("Intro")],1)],1)],1)},z=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"scene-intro",attrs:{id:"intro"}},[n("div",{staticClass:"static-container"},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.title()}}},[n("v-icon",[t._v("fa-play")])],1),n("div",{staticStyle:{width:"300px"}},[n("Ufo")],1),n("h1",{ref:"title"},[t._v("Alexandre Cortez")]),t._m(0)],1)])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(" Self-taught backend developer,"),n("br"),t._v(" Enjoys coding Typescript, Node.js and Python."),n("br")])])}],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{ref:"ufo",staticStyle:{"enable-background":"new -255 297 100 200"},attrs:{version:"1.1",id:"ufo",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"-255 297 100 200","xml:space":"preserve"}},[n("g",{attrs:{id:"ship"}},[n("g",{attrs:{id:"beam"}},[n("path",{attrs:{id:"light",d:"M-204.1,314.6l-50,179.1h100L-204.1,314.6z"}}),n("line",{attrs:{id:"suckLine",x1:"-205",y1:"489",x2:"-205",y2:"312.1"}})]),n("g",{attrs:{id:"fuselage"}},[n("g",{attrs:{id:"feets"}}),n("path",{attrs:{id:"inner",d:"M-209.9,318.3c3.3-2,8.6-2,11.8,0c3.3,2,3.3,5.3,0,7.3s-8.6,2-11.8,0\n\t\t\tC-213.3,323.5-213.3,320.3-209.9,318.3z"}}),n("path",{attrs:{id:"outer",d:"M-211.4,314.8c4-2.4,10.5-2.4,14.6,0c4,2.4,4,6.3,0,8.6c-4,2.4-10.5,2.4-14.6,0\n\t\t\tC-215.4,320.9-215.4,317-211.4,314.8z"}}),n("path",{attrs:{id:"pit",d:"M-204.1,309.6c3.6,0,6.4,2.9,6.4,6.4s-2.9,5.2-6.4,5.2s-6.4-1.6-6.4-5.2S-207.7,309.6-204.1,309.6z"}})])]),n("g",{attrs:{id:"et"}},[n("path",{attrs:{id:"body",d:"M-200.4,320.5c0.1-0.4,0.2-0.8,0.2-1.2v-3.2c0-2.1-1.7-3.9-3.9-3.9c-2.1,0-3.9,1.7-3.9,3.9v3.2\n\t\tc0,0.4,0.1,0.8,0.2,1.2c1,0.5,2.3,0.7,3.7,0.7C-202.7,321.3-201.4,321-200.4,320.5z"}}),n("g",{attrs:{id:"eye"}},[n("path",{attrs:{id:"iris",d:"M-204.1,314.9c1.1,0,1.9,0.9,1.9,1.9c0,1.1-0.9,1.9-1.9,1.9c-1.1,0-1.9-0.9-1.9-1.9\n\t\t\tS-205.2,314.9-204.1,314.9z"}}),n("path",{attrs:{id:"pupil",d:"M-204.1,316.1c0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6s-0.6-0.3-0.6-0.6\n\t\t\tS-204.4,316.1-204.1,316.1z"}})])]),n("linearGradient",{attrs:{id:"beam_1_",gradientUnits:"userSpaceOnUse",x1:"-1011.8405",y1:"1.6647",x2:"-1011.8405",y2:"2.6647",gradientTransform:"matrix(100 0 0 179.1 100980 16.5014)"}},[n("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.75"},attrs:{offset:"0"}}),n("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"1"}})],1)],1)},F=[],N=n("3835"),A=(n("ac1f"),n("5319"),n("a630"),n("3ca3"),n("1209"));function T(t){var e=Object(N["a"])(t.childNodes,2),n=e[0],a=e[1],r=Object(N["a"])(a.childNodes,2),o=(r[0],r[1]),s=Object(N["a"])(o.childNodes,2),c=s[0],i=s[1];A["a"].timeline({loop:!0,direction:"alternate"}).add({targets:c,baseFrequency:0,scale:1,easing:"easeInOutQuint",d:[{value:"M-204.1,314.9c1.1,0,1.9,0.9,1.9,1.9c0,1.1-0.9,1.9-1.9,1.9c-1.1,0-1.9-0.9-1.9-1.9 S-205.2,314.9-204.1,314.9z"},{value:"M-204.1,316.3c1.1,0,1.9,0.2,1.9,0.4c0,0.3-0.9,0.4-1.9,0.4c-1.1,0-1.9-0.2-1.9-0.4 S-205.2,316.3-204.1,316.3z"}]}).add({targets:i,baseFrequency:0,easing:"easeInOutQuint",d:[{value:"M-204.1,316.1c0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6s-0.6-0.3-0.6-0.6 S-204.4,316.1-204.1,316.1z"},{value:"M-204.1,316.6c0.4,0,0.6,0.1,0.6,0.1c0,0.1-0.3,0.1-0.6,0.1s-0.6-0.1-0.6-0.1 S-204.4,316.6-204.1,316.6z"}]},0),function t(){var e=A["a"].random(-.3,.3),n=A["a"].random(-.3,.3),a=A["a"].random(1,0);Object(A["a"])({targets:i,translateX:2*e,translateY:2*n,delay:a}),Object(A["a"])({targets:c,translateX:e,translateY:n,delay:a,complete:t})}();for(var l=Object(N["a"])(n.childNodes,2),u=(l[0],l[1]),d=Object(N["a"])(u.childNodes,2),p=d[0],f=d[1],v=A["a"].path(f),h=10,b=2500,m=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","circle");e.setAttributeNS(null,"cx","-255"),e.setAttributeNS(null,"cy","297"),e.setAttributeNS(null,"r","1"),e.setAttributeNS(null,"id","feets"),p.appendChild(e),setTimeout((function(){Object(A["a"])({loop:!0,duration:b,targets:e,translateX:v("x"),translateY:v("y"),easing:"linear",endDelay:-1,delay:0})}),b/h*t)},g=0;g<h;g++)m(g)}function $(t){t.innerHTML=t.textContent?t.textContent.replace(/\S/g,"<span class='letter'>$&</span>"):"",A["a"].timeline({loop:!1}).add({targets:[t,Array.from(t.children)],translateY:[0,-500],opacity:[1,0],easing:"easeInExpo",duration:1200,delay:function(t,e){return 100+30*e*-1}}).add({targets:[t,Array.from(t.children)],opacity:[0,1],translateY:[0,0]})}var E=a["a"].extend({name:"Ufo",mounted:function(){T(this.$refs.ufo)}}),H=E,I=(n("335a"),Object(u["a"])(H,V,F,!1,null,"b080b7a0",null)),P=I.exports,B=a["a"].extend({name:"Intro",components:{Ufo:P},methods:{title:function(){$(this.$refs.title)}}}),L=B,U=n("132d"),Y=Object(u["a"])(L,C,k,!1,null,null,null),X=Y.exports;p()(Y,{VBtn:v["a"],VIcon:U["a"]});var q=a["a"].extend({name:"Home",components:{Intro:X}}),J=q,Q=n("62ad"),D=n("a523"),G=n("0fd9"),R=Object(u["a"])(J,M,z,!1,null,null,null),K=R.exports;p()(R,{VCol:Q["a"],VContainer:D["a"],VRow:G["a"]}),a["a"].use(j["a"]);var W=[{path:"/",name:"Home",component:K}],Z=new j["a"]({mode:"history",base:"/",routes:W}),tt=Z,et=n("f309");a["a"].use(et["a"]);var nt=new et["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"fa"}});n("15f5"),n("5ed1"),n("ecee");a["a"].config.productionTip=!1,new a["a"]({router:tt,vuetify:nt,render:function(t){return t(S)}}).$mount("#app")}});
//# sourceMappingURL=app.d68fa560.js.map