!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build"));else if("function"==typeof define&&define.amd)define(["prop-types","react","svg-baker-runtime/browser-symbol","svg-sprite-loader/runtime/browser-sprite.build"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),require("svg-baker-runtime/browser-symbol"),require("svg-sprite-loader/runtime/browser-sprite.build")):r(e["prop-types"],e.react,e["svg-baker-runtime/browser-symbol"],e["svg-sprite-loader/runtime/browser-sprite.build"]);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(this,function(e,r,t,o){return function(e){function r(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=85)}({0:function(r,t){r.exports=e},1:function(e,t){e.exports=r},2:function(e,r){e.exports=t},3:function(e,r){e.exports=o},85:function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var r="Icon Icon--"+m+" Icon--"+f.id+" "+(e.className||"");return p.default.createElement("div",{className:r,style:n({width:d+"px",height:b+"px"},e.style),onClick:e.onClick},p.default.createElement("svg",{viewBox:f.viewBox,width:d,height:b,style:{display:"block"}},p.default.createElement("use",{xlinkHref:"#"+f.id,style:{fill:"currentColor",color:e.fill}})))}Object.defineProperty(r,"__esModule",{value:!0});var n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=t(2),u=o(s),l=t(3),C=o(l),a=t(1),p=o(a),c=t(0),f=(o(c),new u.default({id:"logo_instagram_24",use:"logo_instagram_24-usage",viewBox:"0 0 24 24",content:'<symbol viewBox="0 0 24 24" id="logo_instagram_24"><path d="M9,0.00282142857 C11.4435,0.00282142857 11.7498929,0.0131785714 12.7095,0.0569642857 C13.6671786,0.100678571 14.3211786,0.25275 14.8935,0.475178571 C15.4851429,0.705107143 15.9868929,1.01275 16.4870714,1.51292857 C16.98725,2.01310714 17.2948929,2.51485714 17.5248214,3.1065 C17.74725,3.67882143 17.8993214,4.33282143 17.9430357,5.2905 C17.9868214,6.25010714 17.9971786,6.5565 17.9971786,9 C17.9971786,11.4435 17.9868214,11.7498929 17.9430357,12.7095 C17.8993214,13.6671786 17.74725,14.3211786 17.5248214,14.8935 C17.2948929,15.4851429 16.98725,15.9868929 16.4870714,16.4870714 C15.9868929,16.98725 15.4851429,17.2948929 14.8935,17.5248214 C14.3211786,17.74725 13.6671786,17.8993214 12.7095,17.9430357 C11.7498929,17.9868214 11.4435,17.9971429 9,17.9971429 C6.5565,17.9971429 6.25014286,17.9868214 5.2905,17.9430357 C4.33282143,17.8993214 3.67882143,17.74725 3.1065,17.5248214 C2.51485714,17.2948929 2.01310714,16.98725 1.51292857,16.4870714 C1.01275,15.9868929 0.705107143,15.4851071 0.475178571,14.8935 C0.25275,14.3211786 0.100678571,13.6671786 0.0569642857,12.7095 C0.0131785714,11.7498929 0.00285714286,11.4435 0.00285714286,9 C0.00285714286,6.5565 0.0131785714,6.25010714 0.0569642857,5.2905 C0.100678571,4.33282143 0.25275,3.67882143 0.475178571,3.1065 C0.705107143,2.51485714 1.01275,2.01310714 1.51292857,1.51292857 C2.01310714,1.01275 2.51485714,0.705107143 3.1065,0.475178571 C3.67882143,0.25275 4.33282143,0.100678571 5.2905,0.0569642857 C6.25014286,0.0131785714 6.5565,0.00282142857 9,0.00282142857 Z M8.99603465,1.79603102 C6.65101198,1.79603102 6.37326697,1.80495568 5.44715976,1.84720834 C4.59091587,1.88628856 4.12589257,2.02936193 3.8164232,2.14960073 C3.40648175,2.30891976 3.11388556,2.4992659 2.80657764,2.80657382 C2.49926972,3.11388175 2.30892357,3.40647794 2.14963941,3.81638453 C2.02936574,4.12588875 1.88629238,4.59091205 1.84721215,5.44719081 C1.80495949,6.37326315 1.79603484,6.65100816 1.79603484,8.99603083 C1.79603484,11.3410535 1.80495949,11.6187985 1.84721215,12.5449057 C1.88629238,13.4011496 2.02936574,13.8661729 2.14963941,14.1756771 C2.30892357,14.5855837 2.49926972,14.8781799 2.80657764,15.1854878 C3.11388556,15.4927958 3.40648175,15.6831419 3.8164232,15.8424261 C4.12589257,15.9626997 4.59091587,16.1057731 5.44719463,16.1448533 C6.37312752,16.187106 6.65087253,16.1960306 8.99603465,16.1960306 C11.3411968,16.1960306 11.6189418,16.187106 12.5448747,16.1448533 C13.4011534,16.1057731 13.8661767,15.9626997 14.175681,15.8424261 C14.5855875,15.6831419 14.8781837,15.4927958 15.1854917,15.1854878 C15.4927996,14.8781799 15.6831457,14.5855837 15.8424299,14.1756771 C15.9627035,13.8661729 16.1057769,13.4011496 16.1448571,12.5448709 C16.1871098,11.6187985 16.1960345,11.3410535 16.1960345,8.99603083 C16.1960345,6.65100816 16.1871098,6.37326315 16.1448571,5.44715595 C16.1057769,4.59091205 15.9627035,4.12588875 15.8424299,3.81638453 C15.6831457,3.40647794 15.4927996,3.11388175 15.1854917,2.80657382 C14.8781837,2.4992659 14.5855875,2.30891976 14.175681,2.14960073 C13.8661767,2.02936193 13.4011534,1.88628856 12.5448747,1.84720834 C11.6188023,1.80495568 11.3410573,1.79603102 8.99603465,1.79603102 Z M8.99999905,4.20000267 C11.6509542,4.20000267 13.7999992,6.34904771 13.7999992,9.00000286 C13.7999992,11.650958 11.6509542,13.8000031 8.99999905,13.8000031 C6.34904389,13.8000031 4.19999886,11.650958 4.19999886,9.00000286 C4.19999886,6.34904771 6.34904389,4.20000267 8.99999905,4.20000267 Z M9,11.9990714 C10.6563214,11.9990714 11.9990714,10.6563214 11.9990714,9 C11.9990714,7.34367857 10.6563214,6.00092857 9,6.00092857 C7.34367857,6.00092857 6.00092857,7.34367857 6.00092857,9 C6.00092857,10.6563214 7.34367857,11.9990714 9,11.9990714 Z M14.8823571,4.19728571 C14.8823571,4.79357143 14.399,5.27696429 13.8027143,5.27696429 C13.2064286,5.27696429 12.7230357,4.79357143 12.7230357,4.19728571 C12.7230357,3.601 13.2064286,3.11764286 13.8027143,3.11764286 C14.399,3.11764286 14.8823571,3.601 14.8823571,4.19728571 Z" /></symbol>'})),d=(C.default.add(f),f.viewBox.split(" ")[2]),b=f.viewBox.split(" ")[3],m=Math.max(d,b);r.default=i}})});