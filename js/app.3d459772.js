(function(t){function e(e){for(var a,r,n=e[0],c=e[1],l=e[2],p=0,d=[];p<n.length;p++)r=n[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var f=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"236d":function(t,e,s){},"2a68":function(t,e,s){},a1a3:function(t,e,s){},a5f6:function(t,e,s){},ac25:function(t,e,s){"use strict";s("236d")},cd49:function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("ac1f"),s("00b4");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("Background"),s("Header"),s("v-main",[s("router-view")],1)],1)},i=[],r=(s("a1a3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")}),n=[],c=s("5a89"),l=s("8992"),f=a["a"].extend({name:"Background",data:function(){return{particles:500,speed:20,dim:250,vertices:[0,0,0],scene:null,camera:null,renderer:null,starGeo:null,scrollY:0,gui:null,starPoints:null}},mounted:function(){this.init()},methods:{init:function(){this.scene=new c["i"],this.camera=new c["e"](90,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new c["j"],this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("scroll",this.onWindowScroll),window.addEventListener("mousemove",this.onMouseMove),this.renderer.autoClearColor=!1;for(var t=0;t<this.particles;t++){var e=3*this.dim*(Math.random()-.5),s=3*this.dim*(Math.random()-.5),a=-this.dim*Math.random();this.vertices.push(e,s,a)}this.starGeo=new c["a"],this.starGeo.setAttribute("position",new c["b"](this.vertices,3));var o=new c["h"]({color:16777215,size:.5,transparent:!0,depthTest:!1});this.starPoints=new c["g"](this.starGeo,o);var i=new c["f"](1,1),r=new c["d"]({color:0,transparent:!0,opacity:.4}),n=new c["c"](i,r);n.material.renderOrder=-1,n.position.z=-.1,this.scene.add(n),this.scene.add(this.starPoints),requestAnimationFrame(this.animate),this.animate()},animate:function(){var t;this.starPoints.rotation.z+=5e-4,this.starGeo.attributes.position.needsUpdate=!0;for(var e=this.starGeo.attributes.position.array,s=0;s<e.length;s+=3){var a=e[s+2];a>=0?(e[s]=3*this.dim*(Math.random()-.5),e[s+1]=3*this.dim*(Math.random()-.5),e[s+2]=-this.dim):e[s+2]+=-this.speed/e[s+2]}null===(t=this.gui)||void 0===t||t.updateDisplay(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate)},setupControls:function(){this.gui||(this.gui=new l["a"]);var t=this.gui.addFolder("Camera position");t.add(this.camera.position,"x",-1e3,1e3),t.add(this.camera.position,"y",-1e3,1e3),t.add(this.camera.position,"z",-1e3,1e3),t.open();var e=this.gui.addFolder("Camera rotation");e.add(this.camera.rotation,"x",-1e3,1e3),e.add(this.camera.rotation,"y",-1e3,1e3),e.add(this.camera.rotation,"z",-1e3,1e3),e.open();var s=this.gui.addFolder("Particles");s.add(this,"speed",-1e3,1e3),s.open()},onMouseMove:function(t){this.camera.rotation.y=(t.clientX-window.innerWidth/2)/2e4,this.camera.rotation.x=(t.clientY-window.innerHeight/2)/2e4},onWindowResize:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},onWindowScroll:function(){var t=this,e=800;if(window.scrollY>this.scrollY){var s=Math.min(e,10*(window.scrollY-this.scrollY));this.speed+=s,this.starPoints.rotation.z+=.005}this.speed>e&&(this.speed=e),setTimeout((function(){t.speed=20}),10),this.scrollY=window.scrollY}}}),p=f,d=s("2877"),u=Object(d["a"])(p,r,n,!1,null,null,null),h=u.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-bar",{attrs:{app:"",flat:"",color:"transparent"}},[s("v-toolbar-title",[t._v(t._s(this.$route.name))]),s("v-spacer"),s("v-btn",{staticClass:"header button",attrs:{icon:"",small:"",target:"_blank",href:"https://www.linkedin.com/in/alexandre-cortez-43b400169/"}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[s("title",{attrs:{id:"LinkedinIcoTitle"}},[t._v("LinkedIn profile")]),s("path",{attrs:{fill:"#fff",d:"M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"}})])]),s("v-btn",{staticClass:"header button",attrs:{icon:"",small:"",target:"_blank",href:"https://github.com/CortezSMz"}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[s("title",{attrs:{id:"LinkedinIcoTitle"}},[t._v("GitHub profile")]),s("path",{attrs:{fill:"#fff",d:"M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z"}})])])],1)},y=[],v=(s("a5f6"),a["a"].extend({name:"Header",props:{routeName:String,viewport:Object},methods:{openMenu:function(){document.body.classList.add("-open-nav")},closeMenu:function(){document.body.classList.remove("-open-nav")}}})),g=v,w=s("6544"),b=s.n(w),C=s("40dc"),x=s("8336"),S=s("2fa4"),M=s("2a7f"),O=Object(d["a"])(g,m,y,!1,null,null,null),j=O.exports;b()(O,{VAppBar:C["a"],VBtn:x["a"],VSpacer:S["a"],VToolbarTitle:M["a"]});var _=a["a"].extend({name:"App",components:{Header:j,Background:h}}),z=_,T=s("7496"),P=s("f6c4"),E=Object(d["a"])(z,o,i,!1,null,null,null),H=E.exports;b()(E,{VApp:T["a"],VMain:P["a"]});var k=s("8c4f"),$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{attrs:{justify:"center"}},[s("Intro")],1),s("v-row",{attrs:{justify:"center"}},[s("Ipsum")],1)],1)},L=[],N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{ref:"main",attrs:{cols:"10"}},[s("Ufo",{ref:"ufo"}),s("div",{ref:"text",staticClass:"content"},[s("h1",[t._v("Alexandre Cortez")]),s("p",[t._v("Self-taught developer that enjoys writing text files on free time.")]),s("p",[t._v(" This website is a work in progress. Most of what you see here will probably change. ")])])],1)},V=[],F=(s("2a68"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{ref:"ufo",staticStyle:{"enable-background":"new -189 77.7 231.9 639.3"},attrs:{version:"1.1",id:"ufo",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"-189 77.7 231.9 639.3","xml:space":"preserve"}},[s("polygon",{staticClass:"st0",attrs:{id:"beam",points:"-94.2,150 -94,220 -57.2,220 -57,150"}}),s("g",{attrs:{id:"ship"}},[s("g",{attrs:{id:"borders"}},[s("path",{staticClass:"st5",attrs:{id:"border-path",d:"M-40.6,163.6c-0.9-0.2-1.7-0.3-2.6-0.4c-2.1-0.3-4.2-0.6-6.3-1c-7.8-1-15.6-1.4-23.4-1.4\n\t\th-1.6c-7.2,0-14.5,0.5-21.8,1.4c-3.1,0.4-6.1,0.8-9,1.4c-20.6,3.8-34.5,11.1-34.5,19.5c0,9.5,17.6,17.5,42.4,20.8\n\t\tc8.1,1.1,16.2,1.6,24.4,1.6s16.3-0.5,24.4-1.6c24.8-3.3,42.4-11.3,42.4-20.8C-6.1,174.8-20,167.5-40.6,163.6L-40.6,163.6z"}}),s("path",{staticClass:"st2",attrs:{id:"border",d:"M-32.9,159.8c-1.1-0.2-2.1-0.4-3.2-0.6c-2.6-0.5-5.2-0.9-7.9-1.2c-9.7-1.3-19.4-1.9-29.1-1.9h-2.1\n\t\tc-9,0.1-18,0.7-27,1.9c-3.9,0.5-7.6,1.1-11.2,1.9c-25.6,5.1-42.8,14.9-42.8,26.1c0,12.7,21.9,23.5,52.8,27.8\n\t\tc10,1.4,20.2,2.1,30.3,2.1s20.3-0.7,30.3-2.1c30.9-4.4,52.9-15.2,52.9-27.8C9.9,174.7-7.4,164.9-32.9,159.8z M-29.2,179.6\n\t\tc-4.9,7.6-22.7,13.3-43.9,13.3s-39-5.6-43.9-13.3c-0.6-1.1-0.9-2.2-1.1-3.3c0.1-1.4,0.3-2.8,0.6-4.1c3.7-8,21.1-14.1,42.4-14.4h1.9\n\t\tc16.9,0,31.6,3.6,39.4,8.9c2.2,1.3,3.9,3.2,5.1,5.5c0.2,1.3,0.4,2.7,0.6,4.1C-28.4,177.4-28.7,178.6-29.2,179.6z"}})]),s("g",{attrs:{id:"decals"}},[s("circle",{staticClass:"st3",attrs:{id:"decal",cx:"-71.2",cy:"175.3",r:"5"}}),s("path",{staticClass:"st3",attrs:{id:"decal",d:"M-71.7,172.1v6.5c0,0.3,0.2,0.5,0.5,0.5l0,0c0.3,0,0.5-0.2,0.5-0.5v-6.5c0-0.3-0.2-0.5-0.5-0.5\n\t\t\tl0,0C-71.5,171.5-71.7,171.8-71.7,172.1z"}}),s("circle",{staticClass:"st3",attrs:{id:"decal",cx:"-71.2",cy:"175.3",r:"5"}}),s("path",{staticClass:"st3",attrs:{id:"decal",d:"M-71.7,172.1v6.5c0,0.3,0.2,0.5,0.5,0.5l0,0c0.3,0,0.5-0.2,0.5-0.5v-6.5c0-0.3-0.2-0.5-0.5-0.5\n\t\t\tl0,0C-71.5,171.5-71.7,171.8-71.7,172.1z"}}),s("circle",{staticClass:"st3",attrs:{id:"decal",cx:"-71.2",cy:"175.3",r:"5"}}),s("path",{staticClass:"st3",attrs:{id:"decal",d:"M-71.7,172.1v6.5c0,0.3,0.2,0.5,0.5,0.5l0,0c0.3,0,0.5-0.2,0.5-0.5v-6.5c0-0.3-0.2-0.5-0.5-0.5\n\t\t\tl0,0C-71.5,171.5-71.7,171.8-71.7,172.1z"}}),s("circle",{staticClass:"st3",attrs:{id:"decal",cx:"-71.2",cy:"175.3",r:"5"}}),s("path",{staticClass:"st3",attrs:{id:"decal",d:"M-71.7,172.1v6.5c0,0.3,0.2,0.5,0.5,0.5l0,0c0.3,0,0.5-0.2,0.5-0.5v-6.5c0-0.3-0.2-0.5-0.5-0.5\n\t\t\tl0,0C-71.5,171.5-71.7,171.8-71.7,172.1z"}})]),s("path",{staticClass:"st1",attrs:{id:"bottom",d:"M-105.3,213.3c17.2,15.6,43.4,15.6,60.6,0c-10,1.4-20.2,2.1-30.3,2.1\n\t\tC-85.1,215.4-95.3,214.7-105.3,213.3z"}}),s("path",{staticClass:"st4",attrs:{id:"inner-pit",d:"M-33.9,166.7c-7.8-5.3-22.5-8.9-39.4-8.9h-1.9c-21.3,0.3-38.7,6.4-42.4,14.4\n\t\tc-0.3,1.3-0.5,2.7-0.6,4.1c0.2,1.1,0.5,2.2,1.1,3.3c4.9,7.7,22.7,13.3,43.9,13.3s39-5.7,43.9-13.3c0.5-1,0.9-2.2,1.1-3.3\n\t\tc-0.2-1.4-0.4-2.8-0.6-4.1C-29.9,169.9-31.7,168-33.9,166.7z"}})]),s("g",{attrs:{id:"cat"}},[s("path",{staticClass:"st6",attrs:{id:"antenna",d:"M-71.2,141.6c1.1-0.2,1.8-1.3,1.5-2.4c-0.2-1.1-1.3-1.8-2.4-1.5s-1.8,1.3-1.5,2.4\n\t\tc0.2,0.8,0.8,1.4,1.5,1.5v7.3h0.9V141.6z"}}),s("path",{staticClass:"st6",attrs:{id:"body",d:"M-90,191.6c5.2,0.8,10.9,1.3,16.8,1.3c5.2,0,10.2-0.3,14.8-0.9c-0.5-2.2-1.8-4.6-3-6.9\n\t\tc-2.2-4-6.3-6.6-10.9-6.7l0,0c-3.2-0.1-6.3,1.1-8.6,3.2C-84.2,184.6-88.3,188.6-90,191.6"}}),s("path",{staticClass:"st6",attrs:{id:"tail",d:"M-91.2,191.4c-4.7-1.5-8.2-6.7-9-9.8c-0.4-1.2-0.2-2.4,0.6-3.4c0.7-0.6,0.7-1.7,0.1-2.4\n\t\ts-1.7-0.7-2.4-0.1l-0.1,0.1c-1.7,1.8-2.3,4.3-1.5,6.7c0.6,2.6,2.3,5.1,4.5,7.2C-96.6,190.4-93.9,190.9-91.2,191.4"}}),s("path",{staticClass:"st6",attrs:{id:"head",d:"M-61.2,178.7c1.7,0.6,3.2,1.4,4.6,2.5v-5l3,1.7c-0.6-1-1.1-2.1-1.4-3.2c0-0.7,4.6,1,4.6,1\n\t\tc-3.4-2-3.2-9.9-3.2-9.9h-0.1c0-0.5,0.1-1,0.1-1.5c0-1.3-0.2-2.7-0.5-4c5-5.1,3.4-12.6,3.4-12.6c-3.6-0.3-7.2,0.5-10.3,2.4\n\t\tc-2.9-2.1-6.4-3.2-10-3.2h-1.1c-3.3,0.1-6.5,1.2-9.2,3.2c-3.1-1.9-6.7-2.7-10.3-2.4c0,0-1.5,7.5,3.4,12.6c-0.3,1.3-0.5,2.7-0.5,4\n\t\tc0,0.5,0,1,0.1,1.5h-0.1c0,0,0.3,7.9-3.2,9.9c0,0,4.5-1.7,4.5-1c-0.3,1.1-0.8,2.2-1.4,3.2l3-1.7v5c1-0.6,2-1.1,3.1-1.6l2.6-1.4\n\t\tl1.5,1.2c3.8,2.9,8.9,3.4,13.2,1.3l2.3-1.1"}}),s("g",{attrs:{id:"pupil"}},[s("circle",{staticClass:"st7",attrs:{id:"left",cx:"-63.2",cy:"163",r:"4.3"}}),s("circle",{staticClass:"st7",attrs:{id:"right",cx:"-78.1",cy:"163",r:"4.3"}})]),s("g",{attrs:{id:"iris"}},[s("circle",{staticClass:"st8",attrs:{id:"left",cx:"-63.2",cy:"163",r:"1.1"}}),s("circle",{staticClass:"st8",attrs:{id:"right",cx:"-78.1",cy:"163",r:"1.1"}})])]),s("linearGradient",{attrs:{id:"beamGradient",gradientUnits:"userSpaceOnUse",x1:"-74.05",y1:"650",x2:"-74.05",y2:"210"}},[s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.025"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.05"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.075"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.1"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.125"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.15"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.175"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.2"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.225"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.25"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.275"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.3"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.325"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.35"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.375"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.4"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.425"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.45"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.475"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.5"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.525"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.55"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.575"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.6"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.625"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.65"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.675"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.7"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.725"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.75"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.775"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.8"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.825"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.85"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.875"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.9"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.925"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"0.95"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0.5"},attrs:{offset:"0.975"}}),s("stop",{staticStyle:{"stop-color":"#00ffff","stop-opacity":"0"},attrs:{offset:"1"}})],1),s("path",{staticClass:"st9",attrs:{id:"cockpit",d:"M-29.4,169.2c-6.3-24.2-30.9-38.7-55.1-32.4c-15.9,4.1-28.3,16.5-32.4,32.4\n\tc-0.9,1.6-1.4,3.5-1.4,5.3v0.5c0,0,0,0.3,0,0.4c0,0.4,0,0.9,0.1,1.3c0.2,1,0.6,2,1.2,2.8c2.7,4,9.2,7.5,18.1,9.9\n\tc7.3,2,16.2,3.2,25.8,3.2c5.2,0,10.2-0.3,14.8-0.9c14.1-1.8,24.9-6.3,29.1-12.2c0.6-0.9,1-1.8,1.2-2.8c0.1-0.5,0.2-0.9,0.2-1.4\n\tc0-0.1,0-0.3,0-0.4s0-0.3,0-0.5l0,0C-28,172.6-28.5,170.8-29.4,169.2z"}})],1)}),I=[],A=s("3835"),q=s("cffa"),B=s("9d0b");function W(t){var e=Object(A["a"])(t.childNodes,4),s=(e[0],e[1]),a=e[2],o=e[3],i=Object(A["a"])(s.childNodes,2),r=i[0],n=i[1],c=Object(A["a"])(r.childNodes,1),l=c[0];q["a"].to(n.childNodes,{motionPath:{path:l,align:l,alignOrigin:[.5,.5],autoRotate:!0},duration:4,ease:"linear",stagger:{amount:3.6,repeat:-1}}),q["a"].to(o.childNodes,{repeat:-1,ease:"linear",attr:{offset:"-=0.05"}}),q["a"].timeline({repeat:-1,yoyo:!0,defaults:{duration:1}}).to(t,{transformOrigin:"50% 0%",rotateZ:-3,ease:"linear"}).to(t,{transformOrigin:"50% 0%",rotateZ:3,ease:"linear"});var f=Object(A["a"])(a.childNodes,6);f[0],f[1],f[2],f[3],f[4],f[5]}q["a"].registerPlugin(B["a"]);var G=a["a"].extend({name:"Ufo",mounted:function(){W(this.$refs.ufo)}}),Y=G,U=(s("ac25"),Object(d["a"])(Y,F,I,!1,null,"5301bc5c",null)),R=U.exports,D=(s("fb6a"),s("a630"),s("3ca3"),s("1dac")),J=s("2909"),X=s("b85c"),Z=s("d4ec"),K=s("bee2"),Q=(s("5319"),s("4de4"),s("d3b7"),s("caad"),s("25f0"),function(){function t(e){Object(Z["a"])(this,t),this.childTextElements=[],this.element=e,this.childTextElements=this.findChildTextElements(e),this.words=this.splitWords(this.childTextElements),this.chars=this.splitChars(this.words)}return Object(K["a"])(t,[{key:"splitChars",value:function(t){var e,s=[],a=Object(X["a"])(t);try{for(a.s();!(e=a.n()).done;){var o=e.value;o.innerHTML=o.textContent?o.textContent.replace(/\s/g,"<span class='space'>$&</span>").replace(/\S/g,"<span class='letter'>$&</span>"):"",s.push.apply(s,Object(J["a"])(o.childNodes))}}catch(i){a.e(i)}finally{a.f()}return s}},{key:"splitWords",value:function(t){var e,s=[],a=Object(X["a"])(t);try{for(a.s();!(e=a.n()).done;){var o=e.value;o.innerHTML=o.textContent?o.textContent.replace(/\S+/g,"<span class='word'>$&</span>"):"",s.push.apply(s,Object(J["a"])(o.childNodes))}}catch(i){a.e(i)}finally{a.f()}return s.filter((function(t){return" "!==t.textContent}))}},{key:"findChildTextElements",value:function(t){var e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=["[object HTMLHeadingElement]","[object HTMLParagraphElement]","[object HTMLSpanElement]","[object HTMLAnchorElement]","[object HTMLLIElement]","[object HTMLHeadingElement]","[object HTMLTableCellElement]"],o=Object(X["a"])(t.childNodes);try{for(o.s();!(e=o.n()).done;){var i=e.value;a.includes(i.toString())?s.push(i):i.childNodes&&this.findChildTextElements(i,s)}}catch(r){o.e(r)}finally{o.f()}return s}}]),t}());function tt(){var t=this.$refs.text,e=new Q(t);q["a"].timeline().add(et(e)).add(st.bind(this)(e))}function et(t){return q["a"].timeline().from(t.chars,{transformOrigin:"500% -100%",scale:0,duration:2,delay:q["a"].utils.random(1,3),stagger:{each:.05,from:"random"},ease:"power3.easeInOut"})}function st(t){var e=this.$refs,s=e.ufo,a=e.main;return q["a"].timeline({scrollTrigger:{trigger:a.parentNode,start:"+=10% center",end:"95% center",scrub:!0}}).fromTo(s.$el,{scale:0,opacity:.5},{duration:20,motionPath:{path:"M 188.009 2.328 C 200.233 107.101 172.293 251.455 70.43 188.591 C -31.433 125.727 -19.112 273.174 96.624 241.56 C 222.352 207.217 437.718 235.739 4.074 359.721",offsetX:a.parentNode.offsetWidth/4,offsetY:a.parentNode.offsetHeight/6*-1},scale:1,opacity:1}).to(Array.from(s.$el.childNodes).slice(0,1),{attr:{points:"-150.2,450 -94,220 -57.2,220 0.3,450"},duration:5},"-=10").to(this.$root.$data.isMobile()?t.words:t.chars,{x:function(t,e){return"+="+B["a"].getRelativePosition(e,s.$el,[.5,.5],[.5,.25]).x},y:function(t,e){return"+="+B["a"].getRelativePosition(e,s.$el,[.5,.5],[.5,.25]).y},stagger:{each:1,from:"random"},ease:"easeInOut",duration:100,scale:0,opacity:.5}).to(Array.from(s.$el.childNodes).slice(0,1),{attr:{points:"-94.2,150 -94,220 -57.2,220 -57,150"},duration:5},"-=10").to([s.$el],{motionPath:{path:"M 97.814 136.364 C 97.814 136.364 620.829 150.748 405.639 252.589 C 190.449 354.43 444.189 42.002 444.189 42.002",align:"self"},scale:0,opacity:0,duration:10})}q["a"].registerPlugin(D["a"],B["a"]);var at=a["a"].extend({name:"Intro",components:{Ufo:R},mounted:function(){tt.bind(this)()}}),ot=at,it=s("62ad"),rt=Object(d["a"])(ot,N,V,!1,null,null,null),nt=rt.exports;b()(rt,{VCol:it["a"]});var ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{ref:"main",attrs:{cols:"10"}},[s("div",{ref:"text"},[s("h1",[t._v("Lorem Ipsum")]),s("h2",[t._v(' "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." ')]),s("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate, risus eget convallis consectetur, risus est dictum urna, quis volutpat erat justo vitae arcu. Nunc eget mauris nec risus fermentum imperdiet at sit amet tellus. Maecenas congue ac tellus non accumsan. Aenean id quam non felis gravida tincidunt. Cras in enim urna. Vestibulum tempor, turpis vel scelerisque vulputate, ante massa posuere ipsum, sed pulvinar sapien mi et diam. Donec vitae mauris mauris. Morbi ex nibh, convallis eget nibh vitae, scelerisque hendrerit sapien. Ut congue sit amet leo quis eleifend. ")])])])},lt=[];function ft(){var t=this.$refs,e=t.text,s=t.main,a=new Q(e);return q["a"].timeline({scrollTrigger:{trigger:s.parentNode,start:"+=5% center",end:"90% center",scrub:!0}}).from(a.chars,{transformOrigin:"500% -100%",scale:0,stagger:{each:.05,from:"random"},ease:"power3.easeInOut"}).to(a.chars,{transformOrigin:"5000% -100%",scale:10,stagger:{each:.05,from:"random"},ease:"power3.easeInOut"})}q["a"].registerPlugin(D["a"],B["a"]);var pt=a["a"].extend({name:"Skills",mounted:function(){ft.bind(this)()}}),dt=pt,ut=Object(d["a"])(dt,ct,lt,!1,null,null,null),ht=ut.exports;b()(ut,{VCol:it["a"]});var mt=a["a"].extend({name:"Home",components:{Intro:nt,Ipsum:ht},created:function(){window.addEventListener("beforeunload",(function(){return window.scroll(0,0)}))}}),yt=mt,vt=s("a523"),gt=s("0fd9"),wt=Object(d["a"])(yt,$,L,!1,null,null,null),bt=wt.exports;b()(wt,{VContainer:vt["a"],VRow:gt["a"]}),a["a"].use(k["a"]);var Ct=[{path:"/",name:"Home",component:bt}],xt=new k["a"]({mode:"history",base:"/",routes:Ct}),St=xt,Mt=s("f309");a["a"].use(Mt["a"]);var Ot=new Mt["a"]({theme:{dark:!0,options:{customProperties:!0},themes:{dark:{primary:"#007BFF",secondary:"#ffffff",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"fa"}});s("15f5"),s("5ed1"),s("ecee");a["a"].config.productionTip=!1,new a["a"]({data:{isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},router:St,vuetify:Ot,render:function(t){return t(H)}}).$mount("#app")}});
//# sourceMappingURL=app.3d459772.js.map