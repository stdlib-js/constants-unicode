// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function a(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function t(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+a(n):a(n)+e,t&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,a,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(a=e.arg,s=parseInt(a,10),!isFinite(s)){if(!i(a))throw new Error("invalid integer. Value: "+a);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(a=(-s).toString(r),e.precision&&(a=t(a,e.precision,e.padRight)),a="-"+a):(a=s.toString(r),s||e.precision?e.precision&&(a=t(a,e.precision,e.padRight)):a="",e.sign&&(a=e.sign+a)),16===r&&(e.alternate&&(a="0x"+a),a=e.specifier===o.call(e.specifier)?o.call(a):n.call(a)),8===r&&e.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}var c=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,f=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function y(e){var r,a,t=parseFloat(e.arg);if(!isFinite(t)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+a);t=e.arg}switch(e.specifier){case"e":case"E":a=t.toExponential(e.precision);break;case"f":case"F":a=t.toFixed(e.precision);break;case"g":case"G":c(t)<1e-4?((r=e.precision)>0&&(r-=1),a=t.toExponential(r)):a=t.toPrecision(e.precision),e.alternate||(a=u.call(a,v,"$1e"),a=u.call(a,b,"e"),a=u.call(a,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=u.call(a,g,"e+0$1"),a=u.call(a,f,"e-0$1"),e.alternate&&(a=u.call(a,d,"$1."),a=u.call(a,h,"$1.e")),t>=0&&e.sign&&(a=e.sign+a),a=e.specifier===l.call(e.specifier)?l.call(a):p.call(a)}function m(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var _=String.fromCharCode,k=Array.isArray;function x(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,i,a,n,o,c,p,l,u,g,f,d,h;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,l=0;l<e.length;l++)if(a=e[l],"string"==typeof a)c+=a;else{if(r=void 0!==a.precision,!(a=E(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+a+"`.");for(a.mapping&&(p=a.mapping),i=a.flags,u=0;u<i.length;u++)switch(n=i.charAt(u)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[p],10),p+=1,x(a.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[p],10),p+=1,x(a.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[p],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=s(a);break;case"s":a.maxWidth=r?a.precision:-1,a.arg=String(a.arg);break;case"c":if(!x(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=x(o)?String(a.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=y(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=t(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=(g=a.arg,f=a.width,d=a.padRight,h=void 0,(h=f-g.length)<0?g:g=d?g+m(h):m(h)+g)),c+=a.arg||"",p+=1}return c}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function j(e){var r,i,a,t;for(i=[],t=0,a=A.exec(e);a;)(r=e.slice(t,A.lastIndex-a[0].length)).length&&i.push(r),i.push(V(a)),t=A.lastIndex,a=A.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function $(e){var r,i;if("string"!=typeof e)throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[j(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return S.apply(null,r)}var F=Object.prototype,I=F.toString,T=F.__defineGetter__,C=F.__defineSetter__,M=F.__lookupGetter__,P=F.__lookupSetter__;var R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var a,t,n,o;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===I.call(i))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((t="value"in i)&&(M.call(e,r)||P.call(e,r)?(a=e.__proto__,e.__proto__=F,delete e[r],e[r]=i.value,e.__proto__=a):e[r]=i.value),n="get"in i,o="set"in i,t&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&T&&T.call(e,r,i.get),o&&C&&C.call(e,r,i.set),e};function X(e,r,i){R(e,r,{configurable:!1,enumerable:!0,writable:!1,value:i})}var O=1114111,Z=65535,G={};X(G,"MAX",O),X(G,"MAX_BMP",65535);export{O as MAX,Z as MAX_BMP,G as default};
//# sourceMappingURL=mod.js.map
