(function(t){function s(s){for(var o,c,i=s[0],n=s[1],f=s[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);l&&l(s);while(d.length)d.shift()();return r.push.apply(r,f||[]),e()}function e(){for(var t,s=0;s<r.length;s++){for(var e=r[s],o=!0,i=1;i<e.length;i++){var n=e[i];0!==a[n]&&(o=!1)}o&&(r.splice(s--,1),t=c(c.s=e[0]))}return t}var o={},a={app:0},r=[];function c(s){if(o[s])return o[s].exports;var e=o[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=o,c.d=function(t,s,e){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var o in t)c.d(e,o,function(s){return t[s]}.bind(null,o));return e},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=s,i=i.slice();for(var f=0;f<i.length;f++)s(i[f]);var l=n;r.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("cd49")},4316:function(t,s,e){},"871a":function(t,s,e){"use strict";e("4316")},a1a3:function(t,s,e){},cd49:function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-app",[e("Background"),e("Header"),e("v-main",[e("router-view")],1)],1)},r=[],c=(e("a1a3"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div")}),i=[],n=e("5a89"),f=o["a"].extend({name:"Background",data:function(){return{particles:500,speed:20,dim:250,vertices:[0,0,0],scene:null,camera:null,renderer:null,starGeo:null,scrollY:0}},mounted:function(){this.init()},methods:{init:function(){this.scene=new n["i"],this.camera=new n["e"](90,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new n["j"],this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("scroll",this.onWindowScroll),this.renderer.autoClearColor=!1;for(var t=0;t<this.particles;t++){var s=8*this.dim*(Math.random()-.5),e=2*this.dim*(Math.random()-.5),o=-this.dim*Math.random();this.vertices.push(s,e,o)}this.starGeo=new n["a"],this.starGeo.setAttribute("position",new n["b"](this.vertices,3));var a=new n["h"]({color:16777215,size:.5,transparent:!0,depthTest:!1}),r=new n["g"](this.starGeo,a),c=new n["f"](1,1),i=new n["d"]({color:0,transparent:!0,opacity:.4}),f=new n["c"](c,i);f.material.renderOrder=-1,f.position.z=-.1,this.scene.add(f),this.scene.add(r),requestAnimationFrame(this.animate),this.animate()},animate:function(){this.starGeo.attributes.position.needsUpdate=!0;for(var t=this.starGeo.attributes.position.array,s=0;s<t.length;s+=3){var e=t[s+2];e>=0?(t[s]=8*this.dim*(Math.random()-.5),t[s+1]=2*this.dim*(Math.random()-.5),t[s+2]=-this.dim):t[s+2]+=-this.speed/t[s+2]}this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate)},onWindowResize:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},onWindowScroll:function(){var t=this;window.scrollY>this.scrollY&&(this.speed+=1e3),setTimeout((function(){t.speed=20})),this.scrollY=window.scrollY}}}),l=f,p=e("2877"),d=Object(p["a"])(l,c,i,!1,null,null,null),u=d.exports,h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-app-bar",{attrs:{app:"",flat:"",color:"transparent"}},[e("v-toolbar-title",[t._v(t._s(this.$route.name))]),e("v-spacer"),e("v-btn",{attrs:{icon:"",small:"",target:"_blank",href:"https://www.linkedin.com/in/alexandre-cortez-43b400169/"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[e("title",{attrs:{id:"LinkedinIcoTitle"}},[t._v("LinkedIn logo")]),e("path",{attrs:{fill:"#fff",d:"M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"}})])]),e("v-btn",{attrs:{icon:"",small:"",target:"_blank",href:"https://github.com/CortezSMz"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[e("path",{attrs:{fill:"#fff",d:"M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z"}})])])],1)},y=[],m=o["a"].extend({name:"Header",props:{routeName:String,viewport:Object},methods:{openMenu:function(){document.body.classList.add("-open-nav")},closeMenu:function(){document.body.classList.remove("-open-nav")}}}),v=m,w=e("6544"),b=e.n(w),g=e("40dc"),S=e("8336"),x=e("2fa4"),C=e("2a7f"),M=Object(p["a"])(v,h,y,!1,null,null,null),j=M.exports;b()(M,{VAppBar:g["a"],VBtn:S["a"],VSpacer:x["a"],VToolbarTitle:C["a"]});var _=o["a"].extend({name:"App",components:{Header:j,Background:u}}),z=_,O=e("7496"),k=e("f6c4"),$=Object(p["a"])(z,a,r,!1,null,null,null),T=$.exports;b()($,{VApp:O["a"],VMain:k["a"]});var V=e("8c4f"),I=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("Intro")],1),e("v-row",{attrs:{justify:"center"}},[e("Ipsum")],1),e("v-row",{attrs:{justify:"center"}},[e("Ipsum")],1),e("v-row",{attrs:{justify:"center"}},[e("Ipsum")],1),e("v-row",{attrs:{justify:"center"}},[e("Ipsum")],1),e("v-row",{attrs:{justify:"center"}},[e("Ipsum")],1),e("v-row",{attrs:{justify:"center"}},[e("Ipsum")],1)],1)},H=[],P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-col",{attrs:{cols:"10"}},[e("div",{attrs:{cols:"2"}},[e("Ufo",{ref:"ufo",staticStyle:{height:"500px"}})],1),e("div",{staticStyle:{float:"left"},attrs:{cols:"10"}},[e("h1",{ref:"nome",on:{click:t.nomeToUfo}},[t._v("Alexandre Cortez")]),e("p",{ref:"texto1",on:{click:t.text1ToUfo}},[t._v(" Self-taught developer that enjoys writing text files on free time. ")]),e("p",{ref:"texto2",on:{click:t.text2ToUfo}},[t._v(" This website is a work in progress. Most of what you see here will probably change. ")])])])},U=[],F=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("svg",{ref:"ufo",staticStyle:{"enable-background":"new -189 77.7 231.9 639.3"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"-189 77.7 231.9 639.3","xml:space":"preserve"}},[e("polygon",{staticClass:"st0",attrs:{id:"beam",points:"-150.2,659.4 -94,219.1 -57.2,219.1 0.3,659 "}}),e("g",{attrs:{id:"ship"}},[e("g",{attrs:{id:"borders"}},[e("path",{staticClass:"st5",attrs:{id:"border-path",d:"M-40.6,163.6c-0.9-0.2-1.7-0.3-2.6-0.4c-2.1-0.3-4.2-0.6-6.3-1c-7.8-1-15.6-1.4-23.4-1.4\n\t\th-1.6c-7.2,0-14.5,0.5-21.8,1.4c-3.1,0.4-6.1,0.8-9,1.4c-20.6,3.8-34.5,11.1-34.5,19.5c0,9.5,17.6,17.5,42.4,20.8\n\t\tc8.1,1.1,16.2,1.6,24.4,1.6s16.3-0.5,24.4-1.6c24.8-3.3,42.4-11.3,42.4-20.8C-6.1,174.8-20,167.5-40.6,163.6L-40.6,163.6z"}}),e("path",{staticClass:"st2",attrs:{id:"border",d:"M-32.9,159.8c-1.1-0.2-2.1-0.4-3.2-0.6c-2.6-0.5-5.2-0.9-7.9-1.2c-9.7-1.3-19.4-1.9-29.1-1.9h-2.1\n\t\tc-9,0.1-18,0.7-27,1.9c-3.9,0.5-7.6,1.1-11.2,1.9c-25.6,5.1-42.8,14.9-42.8,26.1c0,12.7,21.9,23.5,52.8,27.8\n\t\tc10,1.4,20.2,2.1,30.3,2.1s20.3-0.7,30.3-2.1c30.9-4.4,52.9-15.2,52.9-27.8C9.9,174.7-7.4,164.9-32.9,159.8z M-29.2,179.6\n\t\tc-4.9,7.6-22.7,13.3-43.9,13.3s-39-5.6-43.9-13.3c-0.6-1.1-0.9-2.2-1.1-3.3c0.1-1.4,0.3-2.8,0.6-4.1c3.7-8,21.1-14.1,42.4-14.4h1.9\n\t\tc16.9,0,31.6,3.6,39.4,8.9c2.2,1.3,3.9,3.2,5.1,5.5c0.2,1.3,0.4,2.7,0.6,4.1C-28.4,177.4-28.7,178.6-29.2,179.6z"}})]),e("g",{attrs:{id:"decals"}},[e("circle",{staticClass:"st3",attrs:{id:"decal",cx:"-71.2",cy:"175.3",r:"5"}}),e("path",{staticClass:"st3",attrs:{id:"decal",d:"M-71.7,172.1v6.5c0,0.3,0.2,0.5,0.5,0.5l0,0c0.3,0,0.5-0.2,0.5-0.5v-6.5c0-0.3-0.2-0.5-0.5-0.5\n\t\t\tl0,0C-71.5,171.5-71.7,171.8-71.7,172.1z"}}),e("circle",{staticClass:"st3",attrs:{id:"decal",cx:"-71.2",cy:"175.3",r:"5"}}),e("path",{staticClass:"st3",attrs:{id:"decal",d:"M-71.7,172.1v6.5c0,0.3,0.2,0.5,0.5,0.5l0,0c0.3,0,0.5-0.2,0.5-0.5v-6.5c0-0.3-0.2-0.5-0.5-0.5\n\t\t\tl0,0C-71.5,171.5-71.7,171.8-71.7,172.1z"}}),e("circle",{staticClass:"st3",attrs:{id:"decal",cx:"-71.2",cy:"175.3",r:"5"}}),e("path",{staticClass:"st3",attrs:{id:"decal",d:"M-71.7,172.1v6.5c0,0.3,0.2,0.5,0.5,0.5l0,0c0.3,0,0.5-0.2,0.5-0.5v-6.5c0-0.3-0.2-0.5-0.5-0.5\n\t\t\tl0,0C-71.5,171.5-71.7,171.8-71.7,172.1z"}}),e("circle",{staticClass:"st3",attrs:{id:"decal",cx:"-71.2",cy:"175.3",r:"5"}}),e("path",{staticClass:"st3",attrs:{id:"decal",d:"M-71.7,172.1v6.5c0,0.3,0.2,0.5,0.5,0.5l0,0c0.3,0,0.5-0.2,0.5-0.5v-6.5c0-0.3-0.2-0.5-0.5-0.5\n\t\t\tl0,0C-71.5,171.5-71.7,171.8-71.7,172.1z"}})]),e("path",{staticClass:"st1",attrs:{id:"bottom",d:"M-105.3,213.3c17.2,15.6,43.4,15.6,60.6,0c-10,1.4-20.2,2.1-30.3,2.1\n\t\tC-85.1,215.4-95.3,214.7-105.3,213.3z"}}),e("path",{staticClass:"st4",attrs:{id:"inner-pit",d:"M-33.9,166.7c-7.8-5.3-22.5-8.9-39.4-8.9h-1.9c-21.3,0.3-38.7,6.4-42.4,14.4\n\t\tc-0.3,1.3-0.5,2.7-0.6,4.1c0.2,1.1,0.5,2.2,1.1,3.3c4.9,7.7,22.7,13.3,43.9,13.3s39-5.7,43.9-13.3c0.5-1,0.9-2.2,1.1-3.3\n\t\tc-0.2-1.4-0.4-2.8-0.6-4.1C-29.9,169.9-31.7,168-33.9,166.7z"}})]),e("g",{attrs:{id:"cat"}},[e("path",{staticClass:"st6",attrs:{id:"antenna",d:"M-71.2,141.6c1.1-0.2,1.8-1.3,1.5-2.4c-0.2-1.1-1.3-1.8-2.4-1.5s-1.8,1.3-1.5,2.4\n\t\tc0.2,0.8,0.8,1.4,1.5,1.5v7.3h0.9V141.6z"}}),e("path",{staticClass:"st6",attrs:{id:"body",d:"M-90,191.6c5.2,0.8,10.9,1.3,16.8,1.3c5.2,0,10.2-0.3,14.8-0.9c-0.5-2.2-1.8-4.6-3-6.9\n\t\tc-2.2-4-6.3-6.6-10.9-6.7l0,0c-3.2-0.1-6.3,1.1-8.6,3.2C-84.2,184.6-88.3,188.6-90,191.6"}}),e("path",{staticClass:"st6",attrs:{id:"tail",d:"M-91.2,191.4c-4.7-1.5-8.2-6.7-9-9.8c-0.4-1.2-0.2-2.4,0.6-3.4c0.7-0.6,0.7-1.7,0.1-2.4\n\t\ts-1.7-0.7-2.4-0.1l-0.1,0.1c-1.7,1.8-2.3,4.3-1.5,6.7c0.6,2.6,2.3,5.1,4.5,7.2C-96.6,190.4-93.9,190.9-91.2,191.4"}}),e("path",{staticClass:"st6",attrs:{id:"head",d:"M-61.2,178.7c1.7,0.6,3.2,1.4,4.6,2.5v-5l3,1.7c-0.6-1-1.1-2.1-1.4-3.2c0-0.7,4.6,1,4.6,1\n\t\tc-3.4-2-3.2-9.9-3.2-9.9h-0.1c0-0.5,0.1-1,0.1-1.5c0-1.3-0.2-2.7-0.5-4c5-5.1,3.4-12.6,3.4-12.6c-3.6-0.3-7.2,0.5-10.3,2.4\n\t\tc-2.9-2.1-6.4-3.2-10-3.2h-1.1c-3.3,0.1-6.5,1.2-9.2,3.2c-3.1-1.9-6.7-2.7-10.3-2.4c0,0-1.5,7.5,3.4,12.6c-0.3,1.3-0.5,2.7-0.5,4\n\t\tc0,0.5,0,1,0.1,1.5h-0.1c0,0,0.3,7.9-3.2,9.9c0,0,4.5-1.7,4.5-1c-0.3,1.1-0.8,2.2-1.4,3.2l3-1.7v5c1-0.6,2-1.1,3.1-1.6l2.6-1.4\n\t\tl1.5,1.2c3.8,2.9,8.9,3.4,13.2,1.3l2.3-1.1"}}),e("g",{attrs:{id:"pupil"}},[e("circle",{staticClass:"st7",attrs:{id:"left",cx:"-63.2",cy:"163",r:"4.3"}}),e("circle",{staticClass:"st7",attrs:{id:"right",cx:"-78.1",cy:"163",r:"4.3"}})]),e("g",{attrs:{id:"iris"}},[e("circle",{staticClass:"st8",attrs:{id:"left",cx:"-63.2",cy:"163",r:"1.1"}}),e("circle",{staticClass:"st8",attrs:{id:"right",cx:"-78.1",cy:"163",r:"1.1"}})])]),e("linearGradient",{attrs:{id:"beamGradient",gradientUnits:"userSpaceOnUse",x1:"-74.05",y1:"670.3651",x2:"-74.05",y2:"215"}},[e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.025"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.05"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.075"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.1"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.125"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.15"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.175"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.2"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.225"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.25"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.275"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.3"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.325"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.35"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.375"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.4"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.425"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.45"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.475"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.5"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.525"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.55"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.575"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.6"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.625"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.65"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.675"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.7"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.725"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.75"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.775"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.8"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.825"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.85"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.875"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.9"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.925"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.95"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.975"}}),e("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"1"}})],1),e("path",{staticClass:"st9",attrs:{id:"cockpit",d:"M-29.4,169.2c-6.3-24.2-30.9-38.7-55.1-32.4c-15.9,4.1-28.3,16.5-32.4,32.4\n\tc-0.9,1.6-1.4,3.5-1.4,5.3v0.5c0,0,0,0.3,0,0.4c0,0.4,0,0.9,0.1,1.3c0.2,1,0.6,2,1.2,2.8c2.7,4,9.2,7.5,18.1,9.9\n\tc7.3,2,16.2,3.2,25.8,3.2c5.2,0,10.2-0.3,14.8-0.9c14.1-1.8,24.9-6.3,29.1-12.2c0.6-0.9,1-1.8,1.2-2.8c0.1-0.5,0.2-0.9,0.2-1.4\n\tc0-0.1,0-0.3,0-0.4s0-0.3,0-0.5l0,0C-28,172.6-28.5,170.8-29.4,169.2z"}})],1)},q=[],E=e("3835"),L=(e("ac1f"),e("5319"),e("fb6a"),e("a630"),e("3ca3"),e("cffa")),A=e("dafb"),B=e("9d0b");function N(t){A["a"].create(t);var s=Object(E["a"])(t.childNodes,4),e=(s[0],s[1]),o=s[2],a=s[3],r=Object(E["a"])(e.childNodes,2),c=r[0],i=r[1],n=Object(E["a"])(c.childNodes,1),f=n[0];L["a"].to(i.childNodes,{motionPath:{path:f,align:f,alignOrigin:[.5,.5],autoRotate:!0},duration:4,ease:"linear",stagger:{amount:3.6,repeat:-1}}),L["a"].to(a.childNodes,{repeat:-1,ease:"linear",attr:{offset:"-=0.05"}});var l=Object(E["a"])(o.childNodes,6);l[0],l[1],l[2],l[3],l[4],l[5]}function G(t,s){s.innerHTML=s.textContent?s.textContent.replace(/\S/g,"<span class='letter'>$&</span>"):"";var e=Array.from(t.childNodes).slice(1,2)[0],o=s.childNodes;o=Array.from(o).reverse(),L["a"].timeline();for(var a=o.length-1;a>=0;a--)if(o[a]instanceof Element){var r=B["a"].getRelativePosition(o[a],e,[.5,.5],[.5,1.01]);L["a"].timeline().to(o[a],{x:"+="+r.x,y:"+="+r.y,ease:"easeInOut",duration:.1*a,scale:.2}).to(o[a],{opacity:0}).to(o[a],{x:0,y:0,scale:1}).to(o[a],{opacity:1})}}L["a"].registerPlugin(A["a"],B["a"]);var W=o["a"].extend({name:"Ufo",mounted:function(){N(this.$refs.ufo)}}),R=W,Y=(e("871a"),Object(p["a"])(R,F,q,!1,null,"5c4bc6f0",null)),D=Y.exports,J=o["a"].extend({name:"Intro",components:{Ufo:D},methods:{nomeToUfo:function(){G(this.$refs.ufo.$el,this.$refs.nome)},text1ToUfo:function(){G(this.$refs.ufo.$el,this.$refs.texto1)},text2ToUfo:function(){G(this.$refs.ufo.$el,this.$refs.texto2)}}}),Q=J,K=e("62ad"),X=Object(p["a"])(Q,P,U,!1,null,null,null),Z=X.exports;b()(X,{VCol:K["a"]});var tt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-col",{attrs:{cols:"10"}},[e("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo risus id nunc cursus hendrerit. Nam bibendum sodales nisi, et faucibus mauris venenatis in. Sed rhoncus ornare scelerisque. Pellentesque sollicitudin elit porta libero suscipit, ultricies elementum ligula euismod. Donec id vulputate tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lacinia neque. Duis rutrum neque quis risus rutrum fermentum. Ut ut quam eu massa pulvinar malesuada. Cras ac nibh urna. In tincidunt diam non felis interdum placerat. Quisque sagittis diam in enim posuere scelerisque. ")])])},st=[],et=o["a"].extend({name:"Skills"}),ot=et,at=Object(p["a"])(ot,tt,st,!1,null,null,null),rt=at.exports;b()(at,{VCol:K["a"]});var ct=o["a"].extend({name:"Home",components:{Intro:Z,Ipsum:rt}}),it=ct,nt=e("a523"),ft=e("0fd9"),lt=Object(p["a"])(it,I,H,!1,null,null,null),pt=lt.exports;b()(lt,{VContainer:nt["a"],VRow:ft["a"]}),o["a"].use(V["a"]);var dt=[{path:"/",name:"Home",component:pt}],ut=new V["a"]({mode:"history",base:"/",routes:dt}),ht=ut,yt=e("f309");o["a"].use(yt["a"]);var mt=new yt["a"]({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:"#007BFF",secondary:"#ffffff",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"fa"}});e("15f5"),e("5ed1"),e("ecee");o["a"].config.productionTip=!1,new o["a"]({router:ht,vuetify:mt,render:function(t){return t(T)}}).$mount("#app")}});
//# sourceMappingURL=app.e25f4130.js.map