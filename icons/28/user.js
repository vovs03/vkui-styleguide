!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build"));else if("function"==typeof define&&define.amd)define(["prop-types","react","svg-baker-runtime/browser-symbol","svg-sprite-loader/runtime/browser-sprite.build"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build")):r(e["prop-types"],e.react,e["svg-baker-runtime/browser-symbol"],e["svg-sprite-loader/runtime/browser-sprite.build"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e,r,t,o){return function(e){function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=193)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},193:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var r="Icon Icon--"+y+" Icon--"+d.id+" "+(e.className||"");return c.default.createElement("div",{className:r,style:n({width:b+"px",height:v+"px"},e.style),onClick:e.onClick},c.default.createElement("svg",{viewBox:d.viewBox,width:b,height:v,style:{display:"block"}},c.default.createElement("use",{xlinkHref:"#"+d.id,style:{fill:"currentColor",color:e.fill}})))}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),u=o(s),l=t(3),a=o(l),p=t(1),c=o(p),f=t(0),d=(o(f),new u.default({id:"user_28",use:"user_28-usage",viewBox:"0 0 28 28",content:'<symbol viewBox="0 0 28 28" id="user_28"><path d="M18.5,9 C18.5,6.51375 16.48625,4.5 14,4.5 C11.51375,4.5 9.5,6.51375 9.5,9 C9.5,11.48625 11.51375,13.5 14,13.5 C16.48625,13.5 18.5,11.48625 18.5,9 Z M5.5,20 C5.5,21.75 6,22 7,22 L21,22 C22,22 22.5,21.75 22.5,20 C22.5,16 17,15 14,15 C11,15 5.5,16 5.5,20 Z" /></symbol>'})),b=(a.default.add(d),d.viewBox.split(" ")[2]),v=d.viewBox.split(" ")[3],y=Math.max(b,v);i.displayName="icon-"+d.id,r.default=i},2:function(e,r){e.exports=t},3:function(e,r){e.exports=o}})});