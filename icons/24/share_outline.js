!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build"));else if("function"==typeof define&&define.amd)define(["prop-types","react","svg-baker-runtime/browser-symbol","svg-sprite-loader/runtime/browser-sprite.build"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build")):r(e["prop-types"],e.react,e["svg-baker-runtime/browser-symbol"],e["svg-sprite-loader/runtime/browser-sprite.build"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e,r,t,o){return function(e){function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=117)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},117:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var r="Icon Icon--"+v+" Icon--"+d.id+" "+(e.className||"");return c.default.createElement("div",{className:r,style:n({width:C+"px",height:b+"px"},e.style),onClick:e.onClick},c.default.createElement("svg",{viewBox:d.viewBox,width:C,height:b,style:{display:"block"}},c.default.createElement("use",{xlinkHref:"#"+d.id,style:{fill:"currentColor",color:e.fill}})))}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),u=o(s),l=t(3),a=o(l),p=t(1),c=o(p),f=t(0),d=(o(f),new u.default({id:"share_outline_24",use:"share_outline_24-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" id="share_outline_24"><path d="M19,18.75 C19.2718875,18.75 19.5,18.4572502 19.5,18.0499878 L19.5,5.51000977 C19.5,5.28982441 19.448136,5.25 19,5.25 L18.8712181,5.25 C18.7684931,5.33768792 18.6483329,5.4559131 18.429669,5.68358439 C17.6337251,6.51231535 17.3880198,6.75462327 16.8393462,7.20480911 C15.061788,8.66329288 12.9773207,9.5 10.327563,9.5 L6.25,9.5 C5.25393376,9.5 4.5625,10.5371506 4.5625,12 C4.5625,13.4628494 5.25393376,14.5 6.25,14.5 L7.5,14.5 C7.76934829,14.5 8.01801282,14.6444331 8.15146758,14.8783954 C8.94967356,16.2777464 9.17239336,16.9339555 9.44132401,18.2183805 C9.48617054,18.4325696 9.5175882,18.5561816 9.55890557,18.6733063 C9.58547917,18.748636 9.61603367,18.8194927 9.65327652,18.8908428 C9.69808287,18.9466431 9.74355707,18.9949716 9.78954749,19.0365982 C9.98011924,19.2090877 10.1299049,19.25 10.327563,19.25 C10.5956577,19.25 10.7931904,19.1946118 10.919723,19.0224355 C11.2591551,18.5982316 11.1845159,17.4422066 10.7653298,15.4008632 L10.7036663,15.1005754 C10.64812,14.8300773 10.8223729,14.5657662 11.092871,14.5102199 C11.1259647,14.5034241 11.1596621,14.5 11.1934464,14.5 L11.5,14.5 C13.6645601,14.5 15.4208717,15.3454075 17.0195117,16.8244826 C17.2932353,17.0777341 17.5543936,17.3415723 17.8361658,17.6441431 C17.9968113,17.8166464 18.4756371,18.3463179 18.4605398,18.3298083 C18.6530623,18.5403399 18.7770295,18.6662543 18.8691169,18.743851 C18.8712253,18.7456276 18.914853,18.7476773 19,18.75 Z M6.25,16 C4.26689957,16 3.0625,14.1934006 3.0625,12 C3.0625,9.80659936 4.26689957,8 6.25,8 L10.327563,8 C12.6081506,8 14.3647938,7.29488177 15.8878813,6.04519089 C16.1001155,5.87105302 18.1372534,3.75 18.7400055,3.75 L19,3.75 C20.2029995,3.75 21,4.36198688 21,5.51000977 L21,18.0499878 C21,19.2152993 20.1937546,20.25 19,20.25 L18.7400055,20.25 C18.1007343,20.25 15.8336428,17.770839 16.000825,17.9255174 C14.9023926,16.9092385 13.7552392,16.2679731 12.4228666,16.0675694 C12.7810057,18.0542757 12.7581812,19.1255472 12.1112232,19.9330455 C11.6387405,20.5806814 11.0348947,20.75 10.327563,20.75 C9.79275526,20.75 9.29797992,20.6148577 8.78296111,20.1487061 C8.6550255,20.0329095 8.53484329,19.9007975 8.42321776,19.7521445 L8.36841852,19.6679666 C8.27745494,19.5053685 8.20447304,19.3427721 8.14434139,19.1723135 C8.07590478,18.9783123 8.03053553,18.7998082 7.97316042,18.525782 C7.75944048,17.5050458 7.59723038,16.9850322 7.0600206,16 L6.25,16 Z" /></symbol>'})),C=(a.default.add(d),d.viewBox.split(" ")[2]),b=d.viewBox.split(" ")[3],v=Math.max(C,b);i.displayName="icon-"+d.id,r.default=i},2:function(e,r){e.exports=t},3:function(e,r){e.exports=o}})});