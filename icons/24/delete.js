!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build"));else if("function"==typeof define&&define.amd)define(["prop-types","react","svg-baker-runtime/browser-symbol","svg-sprite-loader/runtime/browser-sprite.build"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build")):r(e["prop-types"],e.react,e["svg-baker-runtime/browser-symbol"],e["svg-sprite-loader/runtime/browser-sprite.build"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e,r,t,o){return function(e){function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=52)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},2:function(e,r){e.exports=t},3:function(e,r){e.exports=o},52:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var r="Icon Icon--"+y+" Icon--"+d.id+" "+(e.className||"");return c.default.createElement("div",{className:r,style:n({width:b+"px",height:v+"px"},e.style),onClick:e.onClick},c.default.createElement("svg",{viewBox:d.viewBox,width:b,height:v,style:{display:"block"}},c.default.createElement("use",{xlinkHref:"#"+d.id,style:{fill:"currentColor",color:e.fill}})))}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),u=o(s),l=t(3),a=o(l),p=t(1),c=o(p),f=t(0),d=(o(f),new u.default({id:"delete_24",use:"delete_24-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" id="delete_24"><path d="M8.5,21 L15.5,21 C16.8807119,21 18,19.8807119 18,18.5 L18,7 L6,7 L6,18.5 C6,19.8807119 7.11928813,21 8.5,21 Z M8.76756439,4 C9.11337381,3.40219863 9.75971764,3 10.5,3 L13.5,3 C14.2402824,3 14.8866262,3.40219863 15.2324356,4 L18,4 C18.5522847,4 19,4.44771525 19,5 L19,5.75 C19,5.88807119 18.8880712,6 18.75,6 L5.25,6 C5.11192881,6 5,5.88807119 5,5.75 L5,5 C5,4.44771525 5.44771525,4 6,4 L8.76756439,4 Z" /></symbol>'})),b=(a.default.add(d),d.viewBox.split(" ")[2]),v=d.viewBox.split(" ")[3],y=Math.max(b,v);i.displayName="icon-"+d.id,r.default=i}})});