(this.webpackJsonpgpl=this.webpackJsonpgpl||[]).push([[6],{279:function(t,n,e){"use strict";e.r(n);var r=e(85),o=e(65);var u=e(83),c=e(66);function i(t){return Object(o.a)(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(u.a)(t)||Object(c.a)()}var a=e(6),s=e(0),f=e(1),l=e(59),b={question:Object(s.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(12)]).then(e.bind(null,269))})),simonSays:Object(s.lazy)((function(){return Promise.all([e.e(0),e.e(8)]).then(e.bind(null,270))})),buttonClicks:Object(s.lazy)((function(){return e.e(7).then(e.bind(null,271))})),pokemonTrivia:Object(s.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(10)]).then(e.bind(null,272))})),qrScan:Object(s.lazy)((function(){return e.e(11).then(e.bind(null,274))})),redirect:function(t){return window.location.replace(t.url),null}};n.default=function(){var t=Object(f.g)().code,n=Object(f.f)(),e=i(Object(s.useMemo)((function(){return Object(l.c)(t)}),[t])),o=e[0],u=e.slice(1),c=b[o.type];return Object(a.jsx)(c,Object(r.a)(Object(r.a)({},o),{},{onDone:function(){var t=Object(l.d)(u);n.push("/".concat(t))}}))}},59:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"d",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"b",(function(){return l}));var r=e(84),o=e.n(r),u=function(t,n){var e=o.a.compareTwoStrings(n.toLowerCase(),t.toLowerCase());return console.log(e),e},c=function(t,n,e,r){return t.split("").map((function(t){var o=t.charCodeAt(0);if(o>=e&&o<=r){var u=o+n,c=r-e;return u>r?u-=c+1:u<e&&(u+=c+1),String.fromCharCode(u)}return t})).join("")},i=function(t){return s(JSON.stringify(t))},a=function(t){return JSON.parse(f(t))},s=function(t){return t=c(t,1,97,122),t=function(t){for(var n,e={},r=(t+"").split(""),o=[],u=r[0],c=256,i=1;i<r.length;i++)null!=e[u+(n=r[i])]?u+=n:(o.push(u.length>1?e[u]:u.charCodeAt(0)),e[u+n]=c,c++,u=n);o.push(u.length>1?e[u]:u.charCodeAt(0));for(var a=0;a<o.length;a++)o[a]=String.fromCharCode(o[a]);return o.join("")}(t=c(t,5,60,90)),t=encodeURIComponent(t)},f=function(t){return t=function(t){for(var n,e={},r=(t+"").split(""),o=r[0],u=o,c=[o],i=256,a=1;a<r.length;a++){var s=r[a].charCodeAt(0);n=s<256?r[a]:e[s]?e[s]:u+o,c.push(n),o=n.charAt(0),e[i]=u+o,i++,u=n}return c.join("")}(t=decodeURIComponent(t)),t=c(t,-5,60,90),t=c(t,-1,97,122)},l=function(t){var n=document.createElement("textarea");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}},64:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))},65:function(t,n,e){"use strict";function r(t){if(Array.isArray(t))return t}e.d(n,"a",(function(){return r}))},66:function(t,n,e){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}e.d(n,"a",(function(){return r}))},83:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}e.d(n,"a",(function(){return o}))},84:function(t,n){function e(t,n){if((t=t.replace(/\s+/g,""))===(n=n.replace(/\s+/g,"")))return 1;if(t.length<2||n.length<2)return 0;for(var e=new Map,r=0;r<t.length-1;r++){var o=t.substring(r,r+2),u=e.has(o)?e.get(o)+1:1;e.set(o,u)}for(var c=0,i=0;i<n.length-1;i++){var a=n.substring(i,i+2),s=e.has(a)?e.get(a):0;s>0&&(e.set(a,s-1),c++)}return 2*c/(t.length+n.length-2)}t.exports={compareTwoStrings:e,findBestMatch:function(t,n){if(!function(t,n){return"string"===typeof t&&(!!Array.isArray(n)&&(!!n.length&&!n.find((function(t){return"string"!==typeof t}))))}(t,n))throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");for(var r=[],o=0,u=0;u<n.length;u++){var c=n[u],i=e(t,c);r.push({target:c,rating:i}),i>r[o].rating&&(o=u)}var a=r[o];return{ratings:r,bestMatch:a,bestMatchIndex:o}}}},85:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(64);function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){Object(r.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}}}]);
//# sourceMappingURL=6.18598b49.chunk.js.map