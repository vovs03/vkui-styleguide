!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build"));else if("function"==typeof define&&define.amd)define(["prop-types","react","svg-baker-runtime/browser-symbol","svg-sprite-loader/runtime/browser-sprite.build"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build")):r(e["prop-types"],e.react,e["svg-baker-runtime/browser-symbol"],e["svg-sprite-loader/runtime/browser-sprite.build"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e,r,t,o){return function(e){function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=59)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},2:function(e,r){e.exports=t},3:function(e,r){e.exports=o},59:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){var r="Icon Icon--"+y+" Icon--"+d.id+" "+(e.className||"");return c.default.createElement("div",{className:r,style:i({width:b+"px",height:v+"px"},e.style),onClick:e.onClick},c.default.createElement("svg",{viewBox:d.viewBox,width:b,height:v,style:{display:"block"}},c.default.createElement("use",{xlinkHref:"#"+d.id,style:{fill:"currentColor",color:e.fill}})))}Object.defineProperty(r,"__esModule",{value:!0});var i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),u=o(s),l=t(3),p=o(l),a=t(1),c=o(a),f=t(0),d=(o(f),new u.default({id:"dropdown_24",use:"dropdown_24-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" id="dropdown_24"><path d="M12,14.1982917 L6.6401844,9.73177872 C6.2159075,9.37821464 5.5853428,9.4355387 5.23177872,9.8598156 C4.87821464,10.2840925 4.9355387,10.9146572 5.3598156,11.2682213 L11.3598156,16.2682213 C11.7306616,16.5772596 12.2693384,16.5772596 12.6401844,16.2682213 L18.6401844,11.2682213 C19.0644613,10.9146572 19.1217854,10.2840925 18.7682213,9.8598156 C18.4146572,9.4355387 17.7840925,9.37821464 17.3598156,9.73177872 L12,14.1982917 Z" /></symbol>'})),b=(p.default.add(d),d.viewBox.split(" ")[2]),v=d.viewBox.split(" ")[3],y=Math.max(b,v);r.default=n}})});