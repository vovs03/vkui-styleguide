!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build"));else if("function"==typeof define&&define.amd)define(["prop-types","react","svg-baker-runtime/browser-symbol","svg-sprite-loader/runtime/browser-sprite.build"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build")):r(e["prop-types"],e.react,e["svg-baker-runtime/browser-symbol"],e["svg-sprite-loader/runtime/browser-sprite.build"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e,r,t,o){return function(e){function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=92)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},2:function(e,r){e.exports=t},3:function(e,r){e.exports=o},92:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var r="Icon Icon--"+y+" Icon--"+d.id+" "+(e.className||"");return c.default.createElement("div",{className:r,style:n({width:b+"px",height:v+"px"},e.style),onClick:e.onClick},c.default.createElement("svg",{viewBox:d.viewBox,width:b,height:v,style:{display:"block"}},c.default.createElement("use",{xlinkHref:"#"+d.id,style:{fill:"currentColor",color:e.fill}})))}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),u=o(s),l=t(3),a=o(l),p=t(1),c=o(p),f=t(0),d=(o(f),new u.default({id:"note_24",use:"note_24-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" id="note_24"><path d="M6,3 L18,3 C19.6568542,3 21,4.34314575 21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 Z M8,13 L16,13 C16.5522847,13 17,12.5522847 17,12 L17,12 C17,11.4477153 16.5522847,11 16,11 L8,11 C7.44771525,11 7,11.4477153 7,12 L7,12 C7,12.5522847 7.44771525,13 8,13 Z M8,9 L16,9 C16.5522847,9 17,8.55228475 17,8 L17,8 C17,7.44771525 16.5522847,7 16,7 L8,7 C7.44771525,7 7,7.44771525 7,8 L7,8 C7,8.55228475 7.44771525,9 8,9 Z M8,17 L13,17 C13.5522847,17 14,16.5522847 14,16 L14,16 C14,15.4477153 13.5522847,15 13,15 L8,15 C7.44771525,15 7,15.4477153 7,16 L7,16 C7,16.5522847 7.44771525,17 8,17 Z" /></symbol>'})),b=(a.default.add(d),d.viewBox.split(" ")[2]),v=d.viewBox.split(" ")[3],y=Math.max(b,v);i.displayName="icon-"+d.id,r.default=i}})});