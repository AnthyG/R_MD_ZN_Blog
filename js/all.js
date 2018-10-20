

/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/lib/autosize.min.js ---- */


/*!
	Autosize 3.0.20
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),s="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(s)&&(s=0),l()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function o(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function r(){var t=e.style.height,n=o(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="auto";var i=e.scrollHeight+s;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=i+"px",u=e.clientWidth,n.forEach(function(e){e.node.scrollTop=e.scrollTop}),void(r&&(document.documentElement.scrollTop=r)))}function l(){r();var t=Math.round(parseFloat(e.style.height)),o=window.getComputedStyle(e,null),i=Math.round(parseFloat(o.height));if(i!==t?"visible"!==o.overflowY&&(n("visible"),r(),i=Math.round(parseFloat(window.getComputedStyle(e,null).height))):"hidden"!==o.overflowY&&(n("hidden"),r(),i=Math.round(parseFloat(window.getComputedStyle(e,null).height))),a!==i){a=i;var l=d("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var s=null,u=e.clientWidth,a=null,p=function(){e.clientWidth!==u&&l()},c=function(t){window.removeEventListener("resize",p,!1),e.removeEventListener("input",l,!1),e.removeEventListener("keyup",l,!1),e.removeEventListener("autosize:destroy",c,!1),e.removeEventListener("autosize:update",l,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),i.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",c,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",l,!1),window.addEventListener("resize",p,!1),e.addEventListener("input",l,!1),e.addEventListener("autosize:update",l,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",i.set(e,{destroy:c,update:l}),t()}}function o(e){var t=i.get(e);t&&t.destroy()}function r(e){var t=i.get(e);t&&t.update()}var i="function"==typeof Map?new Map:function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){e.indexOf(n)===-1&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}}(),d=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(l=function(e){return e},l.destroy=function(e){return e},l.update=function(e){return e}):(l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},l.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e}),t.exports=l});


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/lib/buefy.js ---- */


(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Buefy=e():t.Buefy=e()})(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=192)}([function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),i){var c=Object.create(s.computed||null);Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}}),s.computed=c}return{esModule:r,exports:o,options:s}}},function(t,e,n){var i=n(32)("wks"),r=n(22),o=n(4).Symbol,a="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=a&&o[t]||(a?o:r)("Symbol."+t))}).store=i},function(t,e,n){t.exports={default:n(109),__esModule:!0}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var i=n(12),r=n(48),o=n(35),a=Object.defineProperty;e.f=n(9)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){"use strict";var i=n(149),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var i=this,r={defaultContentElement:null,defaultIconPack:"mdi",defaultSnackbarDuration:3500,defaultToastDuration:2e3,defaultTooltipType:"is-primary",defaultTooltipAnimated:!1,defaultInputAutocomplete:"on"};e.b=r;var o=function(t){i.config=t}},function(t,e,n){"use strict";e.__esModule=!0;var i=n(101),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t,e,n){return e in t?(0,r.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){t.exports=!n(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(49),r=n(26);t.exports=function(t){return i(r(t))}},function(t,e,n){var i=n(20);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var i=n(5),r=n(19);t.exports=n(9)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports={default:n(107),__esModule:!0}},function(t,e,n){var i=n(4),r=n(3),o=n(46),a=n(13),s=function(t,e,n){var c,u,l,f=t&s.F,d=t&s.G,p=t&s.S,h=t&s.P,v=t&s.B,m=t&s.W,y=d?r:r[e]||(r[e]={}),g=y.prototype,b=d?i:p?i[e]:(i[e]||{}).prototype;d&&(n=e);for(c in n)(u=!f&&b&&void 0!==b[c])&&c in y||(l=u?b[c]:n[c],y[c]=d&&"function"!=typeof b[c]?n[c]:v&&u?o(l,i):m&&b[c]==l?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?o(Function.call,l):l,h&&((y.virtual||(y.virtual={}))[c]=l,t&s.R&&g&&!g[c]&&a(g,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports={}},function(t,e,n){var i=n(53),r=n(27);t.exports=Object.keys||function(t){return i(t,r)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){"use strict";(function(t){function n(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function r(t){return!0===t}function o(t){return!1===t}function a(t){return"string"==typeof t||"number"==typeof t}function s(t){return null!==t&&"object"==typeof t}function c(t){return"[object Object]"===Kn.call(t)}function u(t){return"[object RegExp]"===Kn.call(t)}function l(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function f(t){var e=parseFloat(t);return isNaN(e)?t:e}function d(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}function p(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function h(t,e){return Jn.call(t,e)}function v(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}function m(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function y(t,e){e=e||0;for(var n=t.length-e,i=new Array(n);n--;)i[n]=t[n+e];return i}function g(t,e){for(var n in e)t[n]=e[n];return t}function b(t){for(var e={},n=0;n<t.length;n++)t[n]&&g(e,t[n]);return e}function _(){}function w(t,e){var n=s(t),i=s(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function x(t,e){for(var n=0;n<t.length;n++)if(w(t[n],e))return n;return-1}function C(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function k(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function $(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}function A(t){if(!ci.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}function S(t,e,n){if(ai.errorHandler)ai.errorHandler.call(null,t,e,n);else{if(!fi||"undefined"==typeof console)throw t;console.error(t)}}function O(t){return"function"==typeof t&&/native code/.test(t.toString())}function E(t){Oi.target&&Ei.push(Oi.target),Oi.target=t}function P(){Oi.target=Ei.pop()}function T(t,e){t.__proto__=e}function j(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];$(t,o,e[o])}}function V(t,e){if(s(t)){var n;return h(t,"__ob__")&&t.__ob__ instanceof Ii?n=t.__ob__:Vi.shouldConvert&&!Ci()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ii(t)),e&&n&&n.vmCount++,n}}function I(t,e,n,i){var r=new Oi,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,s=o&&o.set,c=V(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return Oi.target&&(r.depend(),c&&c.dep.depend(),Array.isArray(e)&&D(e)),e},set:function(e){var i=a?a.call(t):n;e===i||e!==e&&i!==i||(s?s.call(t,e):n=e,c=V(e),r.notify())}})}}function M(t,e,n){if(Array.isArray(t)&&"number"==typeof e)return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(h(t,e))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(I(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function R(t,e){if(Array.isArray(t)&&"number"==typeof e)return void t.splice(e,1);var n=t.__ob__;t._isVue||n&&n.vmCount||h(t,e)&&(delete t[e],n&&n.dep.notify())}function D(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&D(e)}function N(t,e){if(!e)return t;for(var n,i,r,o=Object.keys(e),a=0;a<o.length;a++)n=o[a],i=t[n],r=e[n],h(t,n)?c(i)&&c(r)&&N(i,r):M(t,n,r);return t}function B(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function F(t,e){var n=Object.create(t||null);return e?g(n,e):n}function L(t){var e=t.props;if(e){var n,i,r,o={};if(Array.isArray(e))for(n=e.length;n--;)"string"==typeof(i=e[n])&&(r=Qn(i),o[r]={type:null});else if(c(e))for(var a in e)i=e[a],r=Qn(a),o[r]=c(i)?i:{type:i};t.props=o}}function z(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"==typeof i&&(e[n]={bind:i,update:i})}}function H(t,e,n){function i(i){var r=Mi[i]||Ri;c[i]=r(t[i],e[i],n,i)}"function"==typeof e&&(e=e.options),L(e),z(e);var r=e.extends;if(r&&(t=H(t,r,n)),e.mixins)for(var o=0,a=e.mixins.length;o<a;o++)t=H(t,e.mixins[o],n);var s,c={};for(s in t)i(s);for(s in e)h(t,s)||i(s);return c}function q(t,e,n,i){if("string"==typeof n){var r=t[e];if(h(r,n))return r[n];var o=Qn(n);if(h(r,o))return r[o];var a=Zn(o);if(h(r,a))return r[a];return r[n]||r[o]||r[a]}}function U(t,e,n,i){var r=e[t],o=!h(n,t),a=n[t];if(K(Boolean,r.type)&&(o&&!h(r,"default")?a=!1:K(String,r.type)||""!==a&&a!==ti(t)||(a=!0)),void 0===a){a=G(i,r,t);var s=Vi.shouldConvert;Vi.shouldConvert=!0,V(a),Vi.shouldConvert=s}return a}function G(t,e,n){if(h(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"==typeof i&&"Function"!==W(e.type)?i.call(t):i}}function W(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function K(t,e){if(!Array.isArray(e))return W(e)===W(t);for(var n=0,i=e.length;n<i;n++)if(W(e[n])===W(t))return!0;return!1}function J(t){return new Di(void 0,void 0,void 0,String(t))}function Y(t){var e=new Di(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Q(t){for(var e=t.length,n=new Array(e),i=0;i<e;i++)n[i]=Y(t[i]);return n}function Z(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var i=0;i<n.length;i++)n[i].apply(null,t)}return e.fns=t,e}function X(t,e,i,r,o){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=Li(a),n(s)||(n(c)?(n(s.fns)&&(s=t[a]=Z(s)),i(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)n(t[a])&&(u=Li(a),r(u.name,e[a],u.capture))}function tt(t,e,o){function a(){o.apply(this,arguments),p(s.fns,a)}var s,c=t[e];n(c)?s=Z([a]):i(c.fns)&&r(c.merged)?(s=c,s.fns.push(a)):s=Z([c,a]),s.merged=!0,t[e]=s}function et(t,e,r){var o=e.options.props;if(!n(o)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in o){var l=ti(u);nt(a,c,u,l,!0)||nt(a,s,u,l,!1)}return a}}function nt(t,e,n,r,o){if(i(e)){if(h(e,n))return t[n]=e[n],o||delete e[n],!0;if(h(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function it(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function rt(t){return a(t)?[J(t)]:Array.isArray(t)?at(t):void 0}function ot(t){return i(t)&&i(t.text)&&o(t.isComment)}function at(t,e){var o,s,c,u=[];for(o=0;o<t.length;o++)s=t[o],n(s)||"boolean"==typeof s||(c=u[u.length-1],Array.isArray(s)?u.push.apply(u,at(s,(e||"")+"_"+o)):a(s)?ot(c)?c.text+=String(s):""!==s&&u.push(J(s)):ot(s)&&ot(c)?u[u.length-1]=J(c.text+s.text):(r(t._isVList)&&i(s.tag)&&n(s.key)&&i(e)&&(s.key="__vlist"+e+"_"+o+"__"),u.push(s)));return u}function st(t,e){return s(t)?e.extend(t):t}function ct(t,e,o){if(r(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(r(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var a=t.contexts=[o],c=!0,u=function(){for(var t=0,e=a.length;t<e;t++)a[t].$forceUpdate()},l=C(function(n){t.resolved=st(n,e),c||u()}),f=C(function(e){i(t.errorComp)&&(t.error=!0,u())}),d=t(l,f);return s(d)&&("function"==typeof d.then?n(t.resolved)&&d.then(l,f):i(d.component)&&"function"==typeof d.component.then&&(d.component.then(l,f),i(d.error)&&(t.errorComp=st(d.error,e)),i(d.loading)&&(t.loadingComp=st(d.loading,e),0===d.delay?t.loading=!0:setTimeout(function(){n(t.resolved)&&n(t.error)&&(t.loading=!0,u())},d.delay||200)),i(d.timeout)&&setTimeout(function(){n(t.resolved)&&f(null)},d.timeout))),c=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(o)}function ut(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function lt(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&pt(t,e)}function ft(t,e,n){n?Bi.$once(t,e):Bi.$on(t,e)}function dt(t,e){Bi.$off(t,e)}function pt(t,e,n){Bi=t,X(e,n||{},ft,dt,t)}function ht(t,e){var n={};if(!t)return n;for(var i=[],r=0,o=t.length;r<o;r++){var a=t[r];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)i.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return i.every(vt)||(n.default=i),n}function vt(t){return t.isComment||" "===t.text}function mt(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?mt(t[n],e):e[t[n].key]=t[n].fn;return e}function yt(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function gt(t,e,n){t.$el=e,t.$options.render||(t.$options.render=Fi),Ct(t,"beforeMount");var i;return i=function(){t._update(t._render(),n)},t._watcher=new Yi(t,i,_),n=!1,null==t.$vnode&&(t._isMounted=!0,Ct(t,"mounted")),t}function bt(t,e,n,i,r){var o=!!(r||t.$options._renderChildren||i.data.scopedSlots||t.$scopedSlots!==si);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=r,e&&t.$options.props){Vi.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=U(u,t.$options.props,e,t)}Vi.shouldConvert=!0,t.$options.propsData=e}if(n){var l=t.$options._parentListeners;t.$options._parentListeners=n,pt(t,n,l)}o&&(t.$slots=ht(r,i.context),t.$forceUpdate())}function _t(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function wt(t,e){if(e){if(t._directInactive=!1,_t(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)wt(t.$children[n]);Ct(t,"activated")}}function xt(t,e){if(!(e&&(t._directInactive=!0,_t(t))||t._inactive)){t._inactive=!0;for(var n=0;n<t.$children.length;n++)xt(t.$children[n]);Ct(t,"deactivated")}}function Ct(t,e){var n=t.$options[e];if(n)for(var i=0,r=n.length;i<r;i++)try{n[i].call(t)}catch(n){S(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}function kt(){Ki=Hi.length=qi.length=0,Ui={},Gi=Wi=!1}function $t(){Wi=!0;var t,e;for(Hi.sort(function(t,e){return t.id-e.id}),Ki=0;Ki<Hi.length;Ki++)t=Hi[Ki],e=t.id,Ui[e]=null,t.run();var n=qi.slice(),i=Hi.slice();kt(),Ot(n),At(i),ki&&ai.devtools&&ki.emit("flush")}function At(t){for(var e=t.length;e--;){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&Ct(i,"updated")}}function St(t){t._inactive=!1,qi.push(t)}function Ot(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,wt(t[e],!0)}function Et(t){var e=t.id;if(null==Ui[e]){if(Ui[e]=!0,Wi){for(var n=Hi.length-1;n>Ki&&Hi[n].id>t.id;)n--;Hi.splice(n+1,0,t)}else Hi.push(t);Gi||(Gi=!0,Ai($t))}}function Pt(t){Qi.clear(),Tt(t,Qi)}function Tt(t,e){var n,i,r=Array.isArray(t);if((r||s(t))&&Object.isExtensible(t)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r)for(n=t.length;n--;)Tt(t[n],e);else for(i=Object.keys(t),n=i.length;n--;)Tt(t[i[n]],e)}}function jt(t,e,n){Zi.get=function(){return this[e][n]},Zi.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Zi)}function Vt(t){t._watchers=[];var e=t.$options;e.props&&It(t,e.props),e.methods&&Ft(t,e.methods),e.data?Mt(t):V(t._data={},!0),e.computed&&Dt(t,e.computed),e.watch&&Lt(t,e.watch)}function It(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;Vi.shouldConvert=o;for(var a in e)(function(o){r.push(o);var a=U(o,e,n,t);I(i,o,a),o in t||jt(t,"_props",o)})(a);Vi.shouldConvert=!0}function Mt(t){var e=t.$options.data;e=t._data="function"==typeof e?Rt(e,t):e||{},c(e)||(e={});for(var n=Object.keys(e),i=t.$options.props,r=n.length;r--;)i&&h(i,n[r])||k(n[r])||jt(t,"_data",n[r]);V(e,!0)}function Rt(t,e){try{return t.call(e)}catch(t){return S(t,e,"data()"),{}}}function Dt(t,e){var n=t._computedWatchers=Object.create(null);for(var i in e){var r=e[i],o="function"==typeof r?r:r.get;n[i]=new Yi(t,o,_,Xi),i in t||Nt(t,i,r)}}function Nt(t,e,n){"function"==typeof n?(Zi.get=Bt(e),Zi.set=_):(Zi.get=n.get?!1!==n.cache?Bt(e):n.get:_,Zi.set=n.set?n.set:_),Object.defineProperty(t,e,Zi)}function Bt(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Oi.target&&e.depend(),e.value}}function Ft(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?_:m(e[n],t)}function Lt(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)zt(t,n,i[r]);else zt(t,n,i)}}function zt(t,e,n){var i;c(n)&&(i=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,i)}function Ht(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}function qt(t){var e=Ut(t.$options.inject,t);e&&Object.keys(e).forEach(function(n){I(t,n,e[n])})}function Ut(t,e){if(t){for(var n=Array.isArray(t),i=Object.create(null),r=n?t:$i?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++)for(var a=r[o],s=n?a:t[a],c=e;c;){if(c._provided&&s in c._provided){i[a]=c._provided[s];break}c=c.$parent}return i}}function Gt(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=U(c,s,e||{});else i(n.attrs)&&Wt(a,n.attrs),i(n.props)&&Wt(a,n.props);var u=Object.create(r),l=function(t,e,n,i){return Xt(u,t,e,n,i,!0)},f=t.options.render.call(null,l,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:Ut(t.options.inject,r),slots:function(){return ht(o,r)}});return f instanceof Di&&(f.functionalContext=r,f.functionalOptions=t.options,n.slot&&((f.data||(f.data={})).slot=n.slot)),f}function Wt(t,e){for(var n in e)t[Qn(n)]=e[n]}function Kt(t,e,o,a,c){if(!n(t)){var u=o.$options._base;if(s(t)&&(t=u.extend(t)),"function"==typeof t&&(!n(t.cid)||void 0!==(t=ct(t,u,o)))){pe(t),e=e||{},i(e.model)&&Zt(t.options,e);var l=et(e,t,c);if(r(t.options.functional))return Gt(t,l,e,o,a);var f=e.on;e.on=e.nativeOn,r(t.options.abstract)&&(e={}),Yt(e);var d=t.options.name||c;return new Di("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,o,{Ctor:t,propsData:l,listeners:f,tag:c,children:a})}}}function Jt(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function Yt(t){t.hook||(t.hook={});for(var e=0;e<er.length;e++){var n=er[e],i=t.hook[n],r=tr[n];t.hook[n]=i?Qt(r,i):r}}function Qt(t,e){return function(n,i,r,o){t(n,i,r,o),e(n,i,r,o)}}function Zt(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}function Xt(t,e,n,i,o,s){return(Array.isArray(n)||a(n))&&(o=i,i=n,n=void 0),r(s)&&(o=ir),te(t,e,n,i,o)}function te(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Fi();if(!e)return Fi();Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===ir?r=rt(r):o===nr&&(r=it(r));var a,s;if("string"==typeof e){var c;s=ai.getTagNamespace(e),a=ai.isReservedTag(e)?new Di(ai.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=q(t.$options,"components",e))?Kt(c,n,t,r,e):new Di(e,n,r,void 0,void 0,t)}else a=Kt(e,n,t,r);return i(a)?(s&&ee(a,s),a):Fi()}function ee(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var r=0,o=t.children.length;r<o;r++){var a=t.children[r];i(a.tag)&&n(a.ns)&&ee(a,e)}}function ne(t,e){var n,r,o,a,c;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"==typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(s(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)c=a[r],n[r]=e(t[c],c,r);return i(n)&&(n._isVList=!0),n}function ie(t,e,n,i){var r=this.$scopedSlots[t];if(r)return n=n||{},i&&g(n,i),r(n)||e;var o=this.$slots[t];return o||e}function re(t){return q(this.$options,"filters",t,!0)||ni}function oe(t,e,n){var i=ai.keyCodes[e]||n;return Array.isArray(i)?-1===i.indexOf(t):i!==t}function ae(t,e,n,i){if(n)if(s(n)){Array.isArray(n)&&(n=b(n));var r;for(var o in n){if("class"===o||"style"===o)r=t;else{var a=t.attrs&&t.attrs.type;r=i||ai.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}o in r||(r[o]=n[o])}}else;return t}function se(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Q(n):Y(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),ue(n,"__static__"+t,!1),n)}function ce(t,e,n){return ue(t,"__once__"+e+(n?"_"+n:""),!0),t}function ue(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!=typeof t[i]&&le(t[i],e+"_"+i,n);else le(t,e,n)}function le(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function fe(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=ht(t.$options._renderChildren,n),t.$scopedSlots=si,t._c=function(e,n,i,r){return Xt(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return Xt(t,e,n,i,r,!0)}}function de(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pe(t){var e=t.options;if(t.super){var n=pe(t.super);if(n!==t.superOptions){t.superOptions=n;var i=he(t);i&&g(t.extendOptions,i),e=t.options=H(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function he(t){var e,n=t.options,i=t.extendOptions,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=ve(n[o],i[o],r[o]));return e}function ve(t,e,n){if(Array.isArray(t)){var i=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var r=0;r<t.length;r++)(e.indexOf(t[r])>=0||n.indexOf(t[r])<0)&&i.push(t[r]);return i}return t}function me(t){this._init(t)}function ye(t){t.use=function(t){if(t.installed)return this;var e=y(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):"function"==typeof t&&t.apply(null,e),t.installed=!0,this}}function ge(t){t.mixin=function(t){return this.options=H(this.options,t),this}}function be(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=H(n.options,t),a.super=n,a.options.props&&_e(a),a.options.computed&&we(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,ri.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=g({},a.options),r[i]=a,a}}function _e(t){var e=t.options.props;for(var n in e)jt(t.prototype,"_props",n)}function we(t){var e=t.options.computed;for(var n in e)Nt(t.prototype,n,e[n])}function xe(t){ri.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Ce(t){return t&&(t.Ctor.options.name||t.tag)}function ke(t,e){return"string"==typeof t?t.split(",").indexOf(e)>-1:!!u(t)&&t.test(e)}function $e(t,e,n){for(var i in t){var r=t[i];if(r){var o=Ce(r.componentOptions);o&&!n(o)&&(r!==e&&Ae(r),t[i]=null)}}}function Ae(t){t&&t.componentInstance.$destroy()}function Se(t){for(var e=t.data,n=t,r=t;i(r.componentInstance);)r=r.componentInstance._vnode,r.data&&(e=Oe(r.data,e));for(;i(n=n.parent);)n.data&&(e=Oe(e,n.data));return Ee(e)}function Oe(t,e){return{staticClass:Pe(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Ee(t){var e=t.class,n=t.staticClass;return i(n)||i(e)?Pe(n,Te(e)):""}function Pe(t,e){return t?e?t+" "+e:t:e||""}function Te(t){if(n(t))return"";if("string"==typeof t)return t;var e="";if(Array.isArray(t)){for(var r,o=0,a=t.length;o<a;o++)i(t[o])&&i(r=Te(t[o]))&&""!==r&&(e+=r+" ");return e.slice(0,-1)}if(s(t)){for(var c in t)t[c]&&(e+=c+" ");return e.slice(0,-1)}return e}function je(t){return wr(t)?"svg":"math"===t?"math":void 0}function Ve(t){if(!fi)return!0;if(xr(t))return!1;if(t=t.toLowerCase(),null!=Cr[t])return Cr[t];var e=document.createElement(t);return t.indexOf("-")>-1?Cr[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Cr[t]=/HTMLUnknownElement/.test(e.toString())}function Ie(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Me(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)}function Re(t,e){return document.createElementNS(br[t],e)}function De(t){return document.createTextNode(t)}function Ne(t){return document.createComment(t)}function Be(t,e,n){t.insertBefore(e,n)}function Fe(t,e){t.removeChild(e)}function Le(t,e){t.appendChild(e)}function ze(t){return t.parentNode}function He(t){return t.nextSibling}function qe(t){return t.tagName}function Ue(t,e){t.textContent=e}function Ge(t,e,n){t.setAttribute(e,n)}function We(t,e){var n=t.data.ref;if(n){var i=t.context,r=t.componentInstance||t.elm,o=i.$refs;e?Array.isArray(o[n])?p(o[n],r):o[n]===r&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])&&o[n].indexOf(r)<0?o[n].push(r):o[n]=[r]:o[n]=r}}function Ke(t,e){return t.key===e.key&&t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&Je(t,e)}function Je(t,e){if("input"!==t.tag)return!0;var n;return(i(n=t.data)&&i(n=n.attrs)&&n.type)===(i(n=e.data)&&i(n=n.attrs)&&n.type)}function Ye(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Qe(t,e){(t.data.directives||e.data.directives)&&Ze(t,e)}function Ze(t,e){var n,i,r,o=t===Ar,a=e===Ar,s=Xe(t.data.directives,t.context),c=Xe(e.data.directives,e.context),u=[],l=[];for(n in c)i=s[n],r=c[n],i?(r.oldValue=i.value,en(r,"update",e,t),r.def&&r.def.componentUpdated&&l.push(r)):(en(r,"bind",e,t),r.def&&r.def.inserted&&u.push(r));if(u.length){var f=function(){for(var n=0;n<u.length;n++)en(u[n],"inserted",e,t)};o?tt(e.data.hook||(e.data.hook={}),"insert",f):f()}if(l.length&&tt(e.data.hook||(e.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)en(l[n],"componentUpdated",e,t)}),!o)for(n in s)c[n]||en(s[n],"unbind",t,t,a)}function Xe(t,e){var n=Object.create(null);if(!t)return n;var i,r;for(i=0;i<t.length;i++)r=t[i],r.modifiers||(r.modifiers=Er),n[tn(r)]=r,r.def=q(e.$options,"directives",r.name,!0);return n}function tn(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function en(t,e,n,i,r){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,i,r)}catch(i){S(i,n.context,"directive "+t.name+" "+e+" hook")}}function nn(t,e){if(!n(t.data.attrs)||!n(e.data.attrs)){var r,o,a=e.elm,s=t.data.attrs||{},c=e.data.attrs||{};i(c.__ob__)&&(c=e.data.attrs=g({},c));for(r in c)o=c[r],s[r]!==o&&rn(a,r,o);hi&&c.value!==s.value&&rn(a,"value",c.value);for(r in s)n(c[r])&&(mr(r)?a.removeAttributeNS(vr,yr(r)):pr(r)||a.removeAttribute(r))}}function rn(t,e,n){hr(e)?gr(n)?t.removeAttribute(e):t.setAttribute(e,e):pr(e)?t.setAttribute(e,gr(n)||"false"===n?"false":"true"):mr(e)?gr(n)?t.removeAttributeNS(vr,yr(e)):t.setAttributeNS(vr,e,n):gr(n)?t.removeAttribute(e):t.setAttribute(e,n)}function on(t,e){var r=e.elm,o=e.data,a=t.data;if(!(n(o.staticClass)&&n(o.class)&&(n(a)||n(a.staticClass)&&n(a.class)))){var s=Se(e),c=r._transitionClasses;i(c)&&(s=Pe(s,Te(c))),s!==r._prevClass&&(r.setAttribute("class",s),r._prevClass=s)}}function an(t){var e;i(t[Vr])&&(e=pi?"change":"input",t[e]=[].concat(t[Vr],t[e]||[]),delete t[Vr]),i(t[Ir])&&(e=gi?"click":"change",t[e]=[].concat(t[Ir],t[e]||[]),delete t[Ir])}function sn(t,e,n,i,r){if(n){var o=e,a=cr;e=function(n){null!==(1===arguments.length?o(n):o.apply(null,arguments))&&cn(t,e,i,a)}}cr.addEventListener(t,e,bi?{capture:i,passive:r}:i)}function cn(t,e,n,i){(i||cr).removeEventListener(t,e,n)}function un(t,e){if(!n(t.data.on)||!n(e.data.on)){var i=e.data.on||{},r=t.data.on||{};cr=e.elm,an(i),X(i,r,sn,cn,e.context)}}function ln(t,e){if(!n(t.data.domProps)||!n(e.data.domProps)){var r,o,a=e.elm,s=t.data.domProps||{},c=e.data.domProps||{};i(c.__ob__)&&(c=e.data.domProps=g({},c));for(r in s)n(c[r])&&(a[r]="");for(r in c)if(o=c[r],"textContent"!==r&&"innerHTML"!==r||(e.children&&(e.children.length=0),o!==s[r]))if("value"===r){a._value=o;var u=n(o)?"":String(o);fn(a,e,u)&&(a.value=u)}else a[r]=o}}function fn(t,e,n){return!t.composing&&("option"===e.tag||dn(t,n)||pn(t,n))}function dn(t,e){return document.activeElement!==t&&t.value!==e}function pn(t,e){var n=t.value,r=t._vModifiers;return i(r)&&r.number||"number"===t.type?f(n)!==f(e):i(r)&&r.trim?n.trim()!==e.trim():n!==e}function hn(t){var e=vn(t.style);return t.staticStyle?g(t.staticStyle,e):e}function vn(t){return Array.isArray(t)?b(t):"string"==typeof t?Dr(t):t}function mn(t,e){var n,i={};if(e)for(var r=t;r.componentInstance;)r=r.componentInstance._vnode,r.data&&(n=hn(r.data))&&g(i,n);(n=hn(t.data))&&g(i,n);for(var o=t;o=o.parent;)o.data&&(n=hn(o.data))&&g(i,n);return i}function yn(t,e){var r=e.data,o=t.data;if(!(n(r.staticStyle)&&n(r.style)&&n(o.staticStyle)&&n(o.style))){var a,s,c=e.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,d=vn(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?g({},d):d;var p=mn(e,!0);for(s in f)n(p[s])&&Fr(c,s,"");for(s in p)(a=p[s])!==f[s]&&Fr(c,s,null==a?"":a)}}function gn(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function bn(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e);else{for(var n=" "+(t.getAttribute("class")||"")+" ",i=" "+e+" ";n.indexOf(i)>=0;)n=n.replace(i," ");t.setAttribute("class",n.trim())}}function _n(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&g(e,qr(t.name||"v")),g(e,t),e}return"string"==typeof t?qr(t):void 0}}function wn(t){Zr(function(){Zr(t)})}function xn(t,e){(t._transitionClasses||(t._transitionClasses=[])).push(e),gn(t,e)}function Cn(t,e){t._transitionClasses&&p(t._transitionClasses,e),bn(t,e)}function kn(t,e,n){var i=$n(t,e),r=i.type,o=i.timeout,a=i.propCount;if(!r)return n();var s=r===Gr?Jr:Qr,c=0,u=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),t.addEventListener(s,l)}function $n(t,e){var n,i=window.getComputedStyle(t),r=i[Kr+"Delay"].split(", "),o=i[Kr+"Duration"].split(", "),a=An(r,o),s=i[Yr+"Delay"].split(", "),c=i[Yr+"Duration"].split(", "),u=An(s,c),l=0,f=0;return e===Gr?a>0&&(n=Gr,l=a,f=o.length):e===Wr?u>0&&(n=Wr,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?Gr:Wr:null,f=n?n===Gr?o.length:c.length:0),{type:n,timeout:l,propCount:f,hasTransform:n===Gr&&Xr.test(i[Kr+"Property"])}}function An(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return Sn(e)+Sn(t[n])}))}function Sn(t){return 1e3*Number(t.slice(0,-1))}function On(t,e){var r=t.elm;i(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());var o=_n(t.data.transition);if(!n(o)&&!i(r._enterCb)&&1===r.nodeType){for(var a=o.css,c=o.type,u=o.enterClass,l=o.enterToClass,d=o.enterActiveClass,p=o.appearClass,h=o.appearToClass,v=o.appearActiveClass,m=o.beforeEnter,y=o.enter,g=o.afterEnter,b=o.enterCancelled,_=o.beforeAppear,w=o.appear,x=o.afterAppear,k=o.appearCancelled,$=o.duration,A=zi,S=zi.$vnode;S&&S.parent;)S=S.parent,A=S.context;var O=!A._isMounted||!t.isRootInsert;if(!O||w||""===w){var E=O&&p?p:u,P=O&&v?v:d,T=O&&h?h:l,j=O?_||m:m,V=O&&"function"==typeof w?w:y,I=O?x||g:g,M=O?k||b:b,R=f(s($)?$.enter:$),D=!1!==a&&!hi,N=Tn(V),B=r._enterCb=C(function(){D&&(Cn(r,T),Cn(r,P)),B.cancelled?(D&&Cn(r,E),M&&M(r)):I&&I(r),r._enterCb=null});t.data.show||tt(t.data.hook||(t.data.hook={}),"insert",function(){var e=r.parentNode,n=e&&e._pending&&e._pending[t.key];n&&n.tag===t.tag&&n.elm._leaveCb&&n.elm._leaveCb(),V&&V(r,B)}),j&&j(r),D&&(xn(r,E),xn(r,P),wn(function(){xn(r,T),Cn(r,E),B.cancelled||N||(Pn(R)?setTimeout(B,R):kn(r,c,B))})),t.data.show&&(e&&e(),V&&V(r,B)),D||N||B()}}}function En(t,e){function r(){k.cancelled||(t.data.show||((o.parentNode._pending||(o.parentNode._pending={}))[t.key]=t),h&&h(o),_&&(xn(o,l),xn(o,p),wn(function(){xn(o,d),Cn(o,l),k.cancelled||w||(Pn(x)?setTimeout(k,x):kn(o,u,k))})),v&&v(o,k),_||w||k())}var o=t.elm;i(o._enterCb)&&(o._enterCb.cancelled=!0,o._enterCb());var a=_n(t.data.transition);if(n(a))return e();if(!i(o._leaveCb)&&1===o.nodeType){var c=a.css,u=a.type,l=a.leaveClass,d=a.leaveToClass,p=a.leaveActiveClass,h=a.beforeLeave,v=a.leave,m=a.afterLeave,y=a.leaveCancelled,g=a.delayLeave,b=a.duration,_=!1!==c&&!hi,w=Tn(v),x=f(s(b)?b.leave:b),k=o._leaveCb=C(function(){o.parentNode&&o.parentNode._pending&&(o.parentNode._pending[t.key]=null),_&&(Cn(o,d),Cn(o,p)),k.cancelled?(_&&Cn(o,l),y&&y(o)):(e(),m&&m(o)),o._leaveCb=null});g?g(r):r()}}function Pn(t){return"number"==typeof t&&!isNaN(t)}function Tn(t){if(n(t))return!1;var e=t.fns;return i(e)?Tn(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function jn(t,e){!0!==e.data.show&&On(e)}function Vn(t,e,n){var i=e.value,r=t.multiple;if(!r||Array.isArray(i)){for(var o,a,s=0,c=t.options.length;s<c;s++)if(a=t.options[s],r)o=x(i,Mn(a))>-1,a.selected!==o&&(a.selected=o);else if(w(Mn(a),i))return void(t.selectedIndex!==s&&(t.selectedIndex=s));r||(t.selectedIndex=-1)}}function In(t,e){for(var n=0,i=e.length;n<i;n++)if(w(Mn(e[n]),t))return!1;return!0}function Mn(t){return"_value"in t?t._value:t.value}function Rn(t){t.target.composing=!0}function Dn(t){t.target.composing&&(t.target.composing=!1,Nn(t.target,"input"))}function Nn(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Bn(t){return!t.componentInstance||t.data&&t.data.transition?t:Bn(t.componentInstance._vnode)}function Fn(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Fn(ut(e.children)):t}function Ln(t){var e={},n=t.$options;for(var i in n.propsData)e[i]=t[i];var r=n._parentListeners;for(var o in r)e[Qn(o)]=r[o];return e}function zn(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Hn(t){for(;t=t.parent;)if(t.data.transition)return!0}function qn(t,e){return e.key===t.key&&e.tag===t.tag}function Un(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Gn(t){t.data.newPos=t.elm.getBoundingClientRect()}function Wn(t){var e=t.data.pos,n=t.data.newPos,i=e.left-n.left,r=e.top-n.top;if(i||r){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+i+"px,"+r+"px)",o.transitionDuration="0s"}}var Kn=Object.prototype.toString,Jn=(d("slot,component",!0),Object.prototype.hasOwnProperty),Yn=/-(\w)/g,Qn=v(function(t){return t.replace(Yn,function(t,e){return e?e.toUpperCase():""})}),Zn=v(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),Xn=/([^-])([A-Z])/g,ti=v(function(t){return t.replace(Xn,"$1-$2").replace(Xn,"$1-$2").toLowerCase()}),ei=function(){return!1},ni=function(t){return t},ii="data-server-rendered",ri=["component","directive","filter"],oi=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],ai={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:ei,isReservedAttr:ei,isUnknownElement:ei,getTagNamespace:_,parsePlatformTagName:ni,mustUseProp:ei,_lifecycleHooks:oi},si=Object.freeze({}),ci=/[^\w.$]/,ui=_,li="__proto__"in{},fi="undefined"!=typeof window,di=fi&&window.navigator.userAgent.toLowerCase(),pi=di&&/msie|trident/.test(di),hi=di&&di.indexOf("msie 9.0")>0,vi=di&&di.indexOf("edge/")>0,mi=di&&di.indexOf("android")>0,yi=di&&/iphone|ipad|ipod|ios/.test(di),gi=di&&/chrome\/\d+/.test(di)&&!vi,bi=!1;if(fi)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){bi=!0}}),window.addEventListener("test-passive",null,_i)}catch(t){}var wi,xi,Ci=function(){return void 0===wi&&(wi=!fi&&void 0!==t&&"server"===t.process.env.VUE_ENV),wi},ki=fi&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,$i="undefined"!=typeof Symbol&&O(Symbol)&&"undefined"!=typeof Reflect&&O(Reflect.ownKeys),Ai=function(){function t(){i=!1;var t=n.slice(0);n.length=0;for(var e=0;e<t.length;e++)t[e]()}var e,n=[],i=!1;if("undefined"!=typeof Promise&&O(Promise)){var r=Promise.resolve(),o=function(t){console.error(t)};e=function(){r.then(t).catch(o),yi&&setTimeout(_)}}else if("undefined"==typeof MutationObserver||!O(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())e=function(){setTimeout(t,0)};else{var a=1,s=new MutationObserver(t),c=document.createTextNode(String(a));s.observe(c,{characterData:!0}),e=function(){a=(a+1)%2,c.data=String(a)}}return function(t,r){var o;if(n.push(function(){if(t)try{t.call(r)}catch(t){S(t,r,"nextTick")}else o&&o(r)}),i||(i=!0,e()),!t&&"undefined"!=typeof Promise)return new Promise(function(t,e){o=t})}}();xi="undefined"!=typeof Set&&O(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var Si=0,Oi=function(){this.id=Si++,this.subs=[]};Oi.prototype.addSub=function(t){this.subs.push(t)},Oi.prototype.removeSub=function(t){p(this.subs,t)},Oi.prototype.depend=function(){Oi.target&&Oi.target.addDep(this)},Oi.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},Oi.target=null;var Ei=[],Pi=Array.prototype,Ti=Object.create(Pi);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=Pi[t];$(Ti,t,function(){for(var n=arguments,i=arguments.length,r=new Array(i);i--;)r[i]=n[i];var o,a=e.apply(this,r),s=this.__ob__;switch(t){case"push":case"unshift":o=r;break;case"splice":o=r.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var ji=Object.getOwnPropertyNames(Ti),Vi={shouldConvert:!0,isSettingProps:!1},Ii=function(t){if(this.value=t,this.dep=new Oi,this.vmCount=0,$(t,"__ob__",this),Array.isArray(t)){(li?T:j)(t,Ti,ji),this.observeArray(t)}else this.walk(t)};Ii.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)I(t,e[n],t[e[n]])},Ii.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)V(t[e])};var Mi=ai.optionMergeStrategies;Mi.data=function(t,e,n){return n?t||e?function(){var i="function"==typeof e?e.call(n):e,r="function"==typeof t?t.call(n):void 0;return i?N(i,r):r}:void 0:e?"function"!=typeof e?t:t?function(){return N(e.call(this),t.call(this))}:e:t},oi.forEach(function(t){Mi[t]=B}),ri.forEach(function(t){Mi[t+"s"]=F}),Mi.watch=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n={};g(n,t);for(var i in e){var r=n[i],o=e[i];r&&!Array.isArray(r)&&(r=[r]),n[i]=r?r.concat(o):[o]}return n},Mi.props=Mi.methods=Mi.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return g(n,t),g(n,e),n};var Ri=function(t,e){return void 0===e?t:e},Di=function(t,e,n,i,r,o,a){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},Ni={child:{}};Ni.child.get=function(){return this.componentInstance},Object.defineProperties(Di.prototype,Ni);var Bi,Fi=function(){var t=new Di;return t.text="",t.isComment=!0,t},Li=v(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}}),zi=null,Hi=[],qi=[],Ui={},Gi=!1,Wi=!1,Ki=0,Ji=0,Yi=function(t,e,n,i){this.vm=t,t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ji,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new xi,this.newDepIds=new xi,this.expression="","function"==typeof e?this.getter=e:(this.getter=A(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Yi.prototype.get=function(){E(this);var t,e=this.vm;if(this.user)try{t=this.getter.call(e,e)}catch(t){S(t,e,'getter for watcher "'+this.expression+'"')}else t=this.getter.call(e,e);return this.deep&&Pt(t),P(),this.cleanupDeps(),t},Yi.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Yi.prototype.cleanupDeps=function(){for(var t=this,e=this.deps.length;e--;){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},Yi.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Et(this)},Yi.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||s(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){S(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Yi.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Yi.prototype.depend=function(){for(var t=this,e=this.deps.length;e--;)t.deps[e].depend()},Yi.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||p(this.vm._watchers,this);for(var e=this.deps.length;e--;)t.deps[e].removeSub(t);this.active=!1}};var Qi=new xi,Zi={enumerable:!0,configurable:!0,get:_,set:_},Xi={lazy:!0},tr={init:function(t,e,n,i){if(!t.componentInstance||t.componentInstance._isDestroyed){(t.componentInstance=Jt(t,zi,n,i)).$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var r=t;tr.prepatch(r,r)}},prepatch:function(t,e){var n=e.componentOptions;bt(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Ct(n,"mounted")),t.data.keepAlive&&(e._isMounted?St(n):wt(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?xt(e,!0):e.$destroy())}},er=Object.keys(tr),nr=1,ir=2,rr=0;(function(t){t.prototype._init=function(t){var e=this;e._uid=rr++;e._isVue=!0,t&&t._isComponent?de(e,t):e.$options=H(pe(e.constructor),t||{},e),e._renderProxy=e,e._self=e,yt(e),lt(e),fe(e),Ct(e,"beforeCreate"),qt(e),Vt(e),Ht(e),Ct(e,"created"),e.$options.el&&e.$mount(e.$options.el)}})(me),function(t){var e={};e.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=M,t.prototype.$delete=R,t.prototype.$watch=function(t,e,n){var i=this;n=n||{},n.user=!0;var r=new Yi(i,t,e,n);return n.immediate&&e.call(i,r.value),function(){r.teardown()}}}(me),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this,r=this;if(Array.isArray(t))for(var o=0,a=t.length;o<a;o++)i.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){function n(){i.$off(t,n),e.apply(i,arguments)}var i=this;return n.fn=e,i.$on(t,n),i},t.prototype.$off=function(t,e){var n=this,i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return i}var a=i._events[t];if(!a)return i;if(1===arguments.length)return i._events[t]=null,i;for(var s,c=a.length;c--;)if((s=a[c])===e||s.fn===e){a.splice(c,1);break}return i},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?y(n):n;for(var i=y(arguments,1),r=0,o=n.length;r<o;r++)n[r].apply(e,i)}return e}}(me),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&Ct(n,"beforeUpdate");var i=n.$el,r=n._vnode,o=zi;zi=n,n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),zi=o,i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ct(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||p(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ct(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$options._parentElm=t.$options._refElm=null}}}(me),function(t){t.prototype.$nextTick=function(t){return Ai(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,i=e.staticRenderFns,r=e._parentVnode;if(t._isMounted)for(var o in t.$slots)t.$slots[o]=Q(t.$slots[o]);t.$scopedSlots=r&&r.data.scopedSlots||si,i&&!t._staticTrees&&(t._staticTrees=[]),t.$vnode=r;var a;try{a=n.call(t._renderProxy,t.$createElement)}catch(e){S(e,t,"render function"),a=t._vnode}return a instanceof Di||(a=Fi()),a.parent=r,a},t.prototype._o=ce,t.prototype._n=f,t.prototype._s=l,t.prototype._l=ne,t.prototype._t=ie,t.prototype._q=w,t.prototype._i=x,t.prototype._m=se,t.prototype._f=re,t.prototype._k=oe,t.prototype._b=ae,t.prototype._v=J,t.prototype._e=Fi,t.prototype._u=mt}(me);var or=[String,RegExp],ar={name:"keep-alive",abstract:!0,props:{include:or,exclude:or},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)Ae(t.cache[e])},watch:{include:function(t){$e(this.cache,this._vnode,function(e){return ke(t,e)})},exclude:function(t){$e(this.cache,this._vnode,function(e){return!ke(t,e)})}},render:function(){var t=ut(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Ce(e);if(n&&(this.include&&!ke(this.include,n)||this.exclude&&ke(this.exclude,n)))return t;var i=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[i]?t.componentInstance=this.cache[i].componentInstance:this.cache[i]=t,t.data.keepAlive=!0}return t}},sr={KeepAlive:ar};(function(t){var e={};e.get=function(){return ai},Object.defineProperty(t,"config",e),t.util={warn:ui,extend:g,mergeOptions:H,defineReactive:I},t.set=M,t.delete=R,t.nextTick=Ai,t.options=Object.create(null),ri.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,g(t.options.components,sr),ye(t),ge(t),be(t),xe(t)})(me),Object.defineProperty(me.prototype,"$isServer",{get:Ci}),Object.defineProperty(me.prototype,"$ssrContext",{get:function(){return this.$vnode.ssrContext}}),me.version="2.3.4";var cr,ur,lr=d("style,class"),fr=d("input,textarea,option,select"),dr=function(t,e,n){return"value"===n&&fr(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},pr=d("contenteditable,draggable,spellcheck"),hr=d("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),vr="http://www.w3.org/1999/xlink",mr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},yr=function(t){return mr(t)?t.slice(6,t.length):""},gr=function(t){return null==t||!1===t},br={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},_r=d("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),wr=d("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),xr=function(t){return _r(t)||wr(t)},Cr=Object.create(null),kr=Object.freeze({createElement:Me,createElementNS:Re,createTextNode:De,createComment:Ne,insertBefore:Be,removeChild:Fe,appendChild:Le,parentNode:ze,nextSibling:He,tagName:qe,setTextContent:Ue,setAttribute:Ge}),$r={create:function(t,e){We(e)},update:function(t,e){t.data.ref!==e.data.ref&&(We(t,!0),We(e))},destroy:function(t){We(t,!0)}},Ar=new Di("",{},[]),Sr=["create","activate","update","remove","destroy"],Or={create:Qe,update:Qe,destroy:function(t){Qe(t,Ar)}},Er=Object.create(null),Pr=[$r,Or],Tr={create:nn,update:nn},jr={create:on,update:on},Vr="__r",Ir="__c",Mr={create:un,update:un},Rr={create:ln,update:ln},Dr=v(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}),Nr=/^--/,Br=/\s*!important$/,Fr=function(t,e,n){if(Nr.test(e))t.style.setProperty(e,n);else if(Br.test(n))t.style.setProperty(e,n.replace(Br,""),"important");else{var i=zr(e);if(Array.isArray(n))for(var r=0,o=n.length;r<o;r++)t.style[i]=n[r];else t.style[i]=n}},Lr=["Webkit","Moz","ms"],zr=v(function(t){if(ur=ur||document.createElement("div"),"filter"!==(t=Qn(t))&&t in ur.style)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Lr.length;n++){var i=Lr[n]+e;if(i in ur.style)return i}}),Hr={create:yn,update:yn},qr=v(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Ur=fi&&!hi,Gr="transition",Wr="animation",Kr="transition",Jr="transitionend",Yr="animation",Qr="animationend";Ur&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Kr="WebkitTransition",Jr="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Yr="WebkitAnimation",Qr="webkitAnimationEnd"));var Zr=fi&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,Xr=/\b(transform|all)(,|$)/,to=fi?{create:jn,activate:jn,remove:function(t,e){!0!==t.data.show?En(t,e):e()}}:{},eo=[Tr,jr,Mr,Rr,Hr,to],no=eo.concat(Pr),io=function(t){function e(t){return new Di(P.tagName(t).toLowerCase(),{},[],void 0,t)}function o(t,e){function n(){0==--n.listeners&&s(t)}return n.listeners=e,n}function s(t){var e=P.parentNode(t);i(e)&&P.removeChild(e,t)}function c(t,e,n,o,a){if(t.isRootInsert=!a,!u(t,e,n,o)){var s=t.data,c=t.children,l=t.tag;i(l)?(t.elm=t.ns?P.createElementNS(t.ns,l):P.createElement(l,t),y(t),h(t,c,e),i(s)&&m(t,e),p(n,t.elm,o)):r(t.isComment)?(t.elm=P.createComment(t.text),p(n,t.elm,o)):(t.elm=P.createTextNode(t.text),p(n,t.elm,o))}}function u(t,e,n,o){var a=t.data;if(i(a)){var s=i(t.componentInstance)&&a.keepAlive;if(i(a=a.hook)&&i(a=a.init)&&a(t,!1,n,o),i(t.componentInstance))return l(t,e),r(s)&&f(t,e,n,o),!0}}function l(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,v(t)?(m(t,e),y(t)):(We(t),e.push(t))}function f(t,e,n,r){for(var o,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,i(o=a.data)&&i(o=o.transition)){for(o=0;o<O.activate.length;++o)O.activate[o](Ar,a);e.push(a);break}p(n,t.elm,r)}function p(t,e,n){i(t)&&(i(n)?n.parentNode===t&&P.insertBefore(t,e,n):P.appendChild(t,e))}function h(t,e,n){if(Array.isArray(e))for(var i=0;i<e.length;++i)c(e[i],n,t.elm,null,!0);else a(t.text)&&P.appendChild(t.elm,P.createTextNode(t.text))}function v(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return i(t.tag)}function m(t,e){for(var n=0;n<O.create.length;++n)O.create[n](Ar,t);A=t.data.hook,i(A)&&(i(A.create)&&A.create(Ar,t),i(A.insert)&&e.push(t))}function y(t){for(var e,n=t;n;)i(e=n.context)&&i(e=e.$options._scopeId)&&P.setAttribute(t.elm,e,""),n=n.parent;i(e=zi)&&e!==t.context&&i(e=e.$options._scopeId)&&P.setAttribute(t.elm,e,"")}function g(t,e,n,i,r,o){for(;i<=r;++i)c(n[i],o,t,e)}function b(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<O.destroy.length;++e)O.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)b(t.children[n])}function _(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(w(o),b(o)):s(o.elm))}}function w(t,e){if(i(e)||i(t.data)){var n,r=O.remove.length+1;for(i(e)?e.listeners+=r:e=o(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&w(n,e),n=0;n<O.remove.length;++n)O.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else s(t.elm)}function x(t,e,r,o,a){for(var s,u,l,f,d=0,p=0,h=e.length-1,v=e[0],m=e[h],y=r.length-1,b=r[0],w=r[y],x=!a;d<=h&&p<=y;)n(v)?v=e[++d]:n(m)?m=e[--h]:Ke(v,b)?(C(v,b,o),v=e[++d],b=r[++p]):Ke(m,w)?(C(m,w,o),m=e[--h],w=r[--y]):Ke(v,w)?(C(v,w,o),x&&P.insertBefore(t,v.elm,P.nextSibling(m.elm)),v=e[++d],w=r[--y]):Ke(m,b)?(C(m,b,o),x&&P.insertBefore(t,m.elm,v.elm),m=e[--h],b=r[++p]):(n(s)&&(s=Ye(e,d,h)),u=i(b.key)?s[b.key]:null,n(u)?(c(b,o,t,v.elm),b=r[++p]):(l=e[u],Ke(l,b)?(C(l,b,o),e[u]=void 0,x&&P.insertBefore(t,b.elm,v.elm),b=r[++p]):(c(b,o,t,v.elm),b=r[++p])));d>h?(f=n(r[y+1])?null:r[y+1].elm,g(t,f,r,p,y,o)):p>y&&_(t,e,d,h)}function C(t,e,o,a){if(t!==e){if(r(e.isStatic)&&r(t.isStatic)&&e.key===t.key&&(r(e.isCloned)||r(e.isOnce)))return e.elm=t.elm,void(e.componentInstance=t.componentInstance);var s,c=e.data;i(c)&&i(s=c.hook)&&i(s=s.prepatch)&&s(t,e);var u=e.elm=t.elm,l=t.children,f=e.children;if(i(c)&&v(e)){for(s=0;s<O.update.length;++s)O.update[s](t,e);i(s=c.hook)&&i(s=s.update)&&s(t,e)}n(e.text)?i(l)&&i(f)?l!==f&&x(u,l,f,o,a):i(f)?(i(t.text)&&P.setTextContent(u,""),g(u,null,f,0,f.length-1,o)):i(l)?_(u,l,0,l.length-1):i(t.text)&&P.setTextContent(u,""):t.text!==e.text&&P.setTextContent(u,e.text),i(c)&&i(s=c.hook)&&i(s=s.postpatch)&&s(t,e)}}function k(t,e,n){if(r(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var o=0;o<e.length;++o)e[o].data.hook.insert(e[o])}function $(t,e,n){e.elm=t;var r=e.tag,o=e.data,a=e.children;if(i(o)&&(i(A=o.hook)&&i(A=A.init)&&A(e,!0),i(A=e.componentInstance)))return l(e,n),!0;if(i(r)){if(i(a))if(t.hasChildNodes()){for(var s=!0,c=t.firstChild,u=0;u<a.length;u++){if(!c||!$(c,a[u],n)){s=!1;break}c=c.nextSibling}if(!s||c)return!1}else h(e,a,n);if(i(o))for(var f in o)if(!T(f)){m(e,n);break}}else t.data!==e.text&&(t.data=e.text);return!0}var A,S,O={},E=t.modules,P=t.nodeOps;for(A=0;A<Sr.length;++A)for(O[Sr[A]]=[],S=0;S<E.length;++S)i(E[S][Sr[A]])&&O[Sr[A]].push(E[S][Sr[A]]);var T=d("attrs,style,class,staticClass,staticStyle,key");return function(t,o,a,s,u,l){if(n(o))return void(i(t)&&b(t));var f=!1,d=[];if(n(t))f=!0,c(o,d,u,l);else{var p=i(t.nodeType);if(!p&&Ke(t,o))C(t,o,d,s);else{if(p){if(1===t.nodeType&&t.hasAttribute(ii)&&(t.removeAttribute(ii),a=!0),r(a)&&$(t,o,d))return k(o,d,!0),t;t=e(t)}var h=t.elm,m=P.parentNode(h);if(c(o,d,h._leaveCb?null:m,P.nextSibling(h)),i(o.parent)){for(var y=o.parent;y;)y.elm=o.elm,y=y.parent;if(v(o))for(var g=0;g<O.create.length;++g)O.create[g](Ar,o.parent)}i(m)?_(m,[t],0,0):i(t.tag)&&b(t)}}return k(o,d,f),o.elm}}({nodeOps:kr,modules:no});hi&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Nn(t,"input")});var ro={inserted:function(t,e,n){if("select"===n.tag){var i=function(){Vn(t,e,n.context)};i(),(pi||vi)&&setTimeout(i,0)}else"textarea"!==n.tag&&"text"!==t.type&&"password"!==t.type||(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("change",Dn),mi||(t.addEventListener("compositionstart",Rn),t.addEventListener("compositionend",Dn)),hi&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Vn(t,e,n.context);(t.multiple?e.value.some(function(e){return In(e,t.options)}):e.value!==e.oldValue&&In(e.value,t.options))&&Nn(t,"change")}}},oo={bind:function(t,e,n){var i=e.value;n=Bn(n);var r=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;i&&r&&!hi?(n.data.show=!0,On(n,function(){t.style.display=o})):t.style.display=i?o:"none"},update:function(t,e,n){var i=e.value;i!==e.oldValue&&(n=Bn(n),n.data&&n.data.transition&&!hi?(n.data.show=!0,i?On(n,function(){t.style.display=t.__vOriginalDisplay}):En(n,function(){t.style.display="none"})):t.style.display=i?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,i,r){r||(t.style.display=t.__vOriginalDisplay)}},ao={model:ro,show:oo},so={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},co={name:"transition",props:so,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(function(t){return t.tag}),n.length)){var i=this.mode,r=n[0];if(Hn(this.$vnode))return r;var o=Fn(r);if(!o)return r;if(this._leaving)return zn(t,r);var s="__transition-"+this._uid+"-";o.key=null==o.key?s+o.tag:a(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var c=(o.data||(o.data={})).transition=Ln(this),u=this._vnode,l=Fn(u);if(o.data.directives&&o.data.directives.some(function(t){return"show"===t.name})&&(o.data.show=!0),l&&l.data&&!qn(o,l)){var f=l&&(l.data.transition=g({},c));if("out-in"===i)return this._leaving=!0,tt(f,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),zn(t,r);if("in-out"===i){var d,p=function(){d()};tt(c,"afterEnter",p),tt(c,"enterCancelled",p),tt(f,"delayLeave",function(t){d=t})}}return r}}},uo=g({tag:String,moveClass:String},so);delete uo.mode;var lo={props:uo,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],o=this.children=[],a=Ln(this),s=0;s<r.length;s++){var c=r[s];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a;else;}if(i){for(var u=[],l=[],f=0;f<i.length;f++){var d=i[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";if(t.length&&this.hasMove(t[0].elm,e)){t.forEach(Un),t.forEach(Gn),t.forEach(Wn);var n=document.body;n.offsetHeight;t.forEach(function(t){if(t.data.moved){var n=t.elm,i=n.style;xn(n,e),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(Jr,n._moveCb=function t(i){i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(Jr,t),n._moveCb=null,Cn(n,e))})}})}},methods:{hasMove:function(t,e){if(!Ur)return!1;if(null!=this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){bn(n,t)}),gn(n,e),n.style.display="none",this.$el.appendChild(n);var i=$n(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}},fo={Transition:co,TransitionGroup:lo};me.config.mustUseProp=dr,me.config.isReservedTag=xr,me.config.isReservedAttr=lr,me.config.getTagNamespace=je,me.config.isUnknownElement=Ve,g(me.options.directives,ao),g(me.options.components,fo),me.prototype.__patch__=fi?io:_,me.prototype.$mount=function(t,e){return t=t&&fi?Ie(t):void 0,gt(this,t,e)},setTimeout(function(){ai.devtools&&ki&&ki.emit("init",me)},0),e.a=me}).call(e,n(59))},function(t,e,n){"use strict";e.a={props:{size:String,expanded:Boolean,loading:Boolean,icon:String,iconPack:String,autocomplete:String,required:Boolean,disabled:Boolean,max:[Number,String],maxlength:[Number,String],min:[Number,String],minlength:[Number,String],name:String,pattern:String,placeholder:String,readonly:Boolean,step:[Number,String],rows:[Number,String]},data:function(){return{isValid:!0}},computed:{parentField:function(){return this.$parent.$data._isField?this.$parent:this.$parent.$data._isAutocomplete&&this.$parent.$parent.$data._isField?this.$parent.$parent:null},statusType:function(){if(this.parentField)return this.parentField.newType}},methods:{focus:function(){var t=this;void 0!==this.$refs[this.$data._elementRef]&&("select"===this.$data._elementRef||this.$data._isAutocomplete?this.$nextTick(function(){return t.$refs[t.$data._elementRef].focus()}):this.$nextTick(function(){return t.$refs[t.$data._elementRef].select()}))},checkHtml5Validity:function(){if(void 0!==this.$refs[this.$data._elementRef]){var t=null,e=null,n=!0;return this.$refs[this.$data._elementRef].checkValidity()||(t="is-danger",e=this.$refs[this.$data._elementRef].validationMessage,n=!1),this.isValid=n,this.parentField&&(this.parentField.type||(this.parentField.newType=t),this.parentField.message||(this.parentField.newMessage=e)),this.isValid}}}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=!0},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var i=n(5).f,r=n(10),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},function(t,e,n){var i=n(32)("keys"),r=n(22);t.exports=function(t){return i[t]||(i[t]=r(t))}},function(t,e,n){var i=n(4),r=i["__core-js_shared__"]||(i["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(26);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(20);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var i=n(4),r=n(3),o=n(28),a=n(37),s=n(5).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=o?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)})}},function(t,e,n){e.f=n(1)},function(t,e,n){"use strict";var i=n(131)(!0);n(50)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var i=n(143),r=n.n(i),o=n(144),a=n.n(o);n.d(e,"a",function(){return r.a}),n.d(e,"b",function(){return a.a})},function(t,e,n){"use strict";var i=n(150),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";var i=n(154),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";var i=n(8),r=n.n(i),o=n(6);e.a={components:r()({},o.a.name,o.a),props:{active:{type:Boolean,default:!0},title:String,closable:{type:Boolean,default:!0},type:String,hasIcon:Boolean},data:function(){return{isActive:this.active}},watch:{active:function(t){this.isActive=t}},computed:{icon:function(){switch(this.type){case"is-info":return"info";case"is-success":return"check_circle";case"is-warning":return"warning";case"is-danger":return"error";default:return null}}},methods:{close:function(){this.isActive=!1,this.$emit("close"),this.$emit("update:active",!1)}}}},function(t,e,n){"use strict";var i=n(7);e.a={props:{type:{type:String,default:"is-dark"},message:String,duration:Number,position:{type:String,default:"is-top",validator:function(t){return["is-top-right","is-top","is-top-left","is-bottom-right","is-bottom","is-bottom-left"].indexOf(t)>-1}},container:String},data:function(){return{isActive:!1,parent:null,newContainer:this.container||i.b.defaultContentElement}},computed:{transition:function(){switch(this.position){case"is-top-right":case"is-top":case"is-top-left":return{enter:"fadeInDown",leave:"fadeOutUp"};case"is-bottom-right":case"is-bottom":case"is-bottom-left":return{enter:"fadeInUp",leave:"fadeOutDown"}}}},methods:{hasChild:function(t){return null!==t&&t.childElementCount>0},close:function(){var t=this;clearTimeout(this.timer),this.isActive=!1,setTimeout(function(){t.$destroy(),t.$el.remove()},150)},show:function(){var t=this;if(this.hasChild(this.parent))return void setTimeout(function(){return t.show()},250);this.insertEl(),this.isActive=!0,this.timer=setTimeout(function(){return t.close()},this.newDuration)},init:function(){var t=void 0;t=document.querySelector(".notices");var e=null!==document.querySelector(this.newContainer)?document.querySelector(this.newContainer):document.body;t||(t=document.createElement("div")),this.parent=t,this.newContainer&&(t.style.position="absolute"),e.appendChild(t)}},beforeMount:function(){this.init()},mounted:function(){this.show()}}},function(t,e,n){"use strict";function i(t,e){return e.split(".").reduce(function(t,e){return t[e]},t)}e.a=i},function(t,e,n){t.exports={default:n(106),__esModule:!0}},function(t,e,n){var i=n(111);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var i=n(20),r=n(4).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e,n){t.exports=!n(9)&&!n(16)(function(){return 7!=Object.defineProperty(n(47)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var i=n(28),r=n(15),o=n(54),a=n(13),s=n(10),c=n(17),u=n(121),l=n(30),f=n(130),d=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,v,m,y,g){u(n,e,v);var b,_,w,x=function(t){if(!p&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},C=e+" Iterator",k="values"==m,$=!1,A=t.prototype,S=A[d]||A["@@iterator"]||m&&A[m],O=S||x(m),E=m?k?x("entries"):O:void 0,P="Array"==e?A.entries||S:S;if(P&&(w=f(P.call(new t)))!==Object.prototype&&(l(w,C,!0),i||s(w,d)||a(w,d,h)),k&&S&&"values"!==S.name&&($=!0,O=function(){return S.call(this)}),i&&!g||!p&&!$&&A[d]||a(A,d,O),c[e]=O,c[C]=h,m)if(b={values:k?O:x("values"),keys:y?O:x("keys"),entries:E},g)for(_ in b)_ in A||o(A,_,b[_]);else r(r.P+r.F*(p||$),e,b);return b}},function(t,e,n){var i=n(12),r=n(127),o=n(27),a=n(31)("IE_PROTO"),s=function(){},c=function(){var t,e=n(47)("iframe"),i=o.length;for(e.style.display="none",n(117).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;i--;)delete c.prototype[o[i]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=i(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:r(n,e)}},function(t,e,n){var i=n(53),r=n(27).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},function(t,e,n){var i=n(10),r=n(11),o=n(113)(!1),a=n(31)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),c=0,u=[];for(n in s)n!=a&&i(s,n)&&u.push(n);for(;e.length>c;)i(s,n=e[c++])&&(~o(u,n)||u.push(n));return u}},function(t,e,n){t.exports=n(13)},function(t,e,n){var i=n(33),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(114),r=n(1)("iterator"),o=n(17);t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},function(t,e,n){n(135);for(var i=n(4),r=n(13),o=n(17),a=n(1)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var u=s[c],l=i[u],f=l&&l.prototype;f&&!f[a]&&r(f,a,u),o[u]=o.Array}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),r=n.n(i),o=n(39),a=n(87),s=n(92),c=n(96),u=n(97),l=n(85),f=n(88),d=n(6),p=n(40),h=n(89),v=n(91),m=n(41),y=n(93),g=n(95),b=n(99),_=n(86),w=n(90),x=n(94),C=n(98),k=n(7);n.d(e,"Dialog",function(){return _.a}),n.d(e,"ModalProgrammatic",function(){return w.b}),n.d(e,"Snackbar",function(){return x.a}),n.d(e,"Toast",function(){return C.a});var $={Autocomplete:l.a,Checkbox:o.a,CheckboxGroup:o.b,Dropdown:a.a,DropdownOption:a.b,Field:f.a,Icon:d.a,Input:p.a,Message:h.a,Modal:w.a,Notification:v.a,Pagination:m.a,Radio:s.a,RadioButton:s.b,RadioGroup:s.c,Select:y.a,Switch:g.a,Table:c.a,TableColumn:c.b,Tabs:u.a,TabItem:u.b,Tooltip:b.a};$.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.i(k.a)(r()(k.b,e));for(var i in $){var o=$[i];o&&"install"!==i&&t.component(o.name,o)}t.prototype.$snackbar=x.a,t.prototype.$modal=w.b,t.prototype.$toast=C.a,t.prototype.$dialog=_.a},e.default=$},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(104),r=n.n(i),o=n(45),a=n.n(o),s=n(8),c=n.n(s),u=n(44),l=n(24),f=n(40);e.default={name:"bAutocomplete",mixins:[l.a],components:c()({},f.a.name,f.a),props:{value:String,data:Array,field:{type:String,default:"value"},maxResults:{type:[Number,String],default:6},keepFirst:Boolean,hasCustomTemplate:Boolean},data:function(){return{selected:null,hovered:null,isActive:!1,newValue:this.value,isListInViewportVertically:!0,_isAutocomplete:!0,_elementRef:"input"}},computed:{whiteList:function(){var t=[];if(t.push(this.$refs.input),t.push(this.$refs.dropdown),void 0!==this.$refs.dropdown){var e=this.$refs.dropdown.querySelectorAll("*"),n=!0,i=!1,r=void 0;try{for(var o,s=a()(e);!(n=(o=s.next()).done);n=!0){var c=o.value;t.push(c)}}catch(t){i=!0,r=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw r}}}return t},visibleData:function(){return this.data.length<=this.maxResults?this.data:this.data.slice(0,this.maxResults)}},watch:{isActive:function(t){var e=this;t?this.calcDropdownInViewportVertical():(this.$nextTick(function(){return e.setHovered(null)}),setTimeout(function(){e.calcDropdownInViewportVertical()},100))},newValue:function(t){var e=this;this.$emit("input",t),this.getValue(this.selected)!==t&&this.setSelected(null,!1),this.keepFirst&&this.visibleData.length&&this.$nextTick(function(){e.hovered!==e.visibleData[0]&&e.setHovered(e.visibleData[0])}),this.isActive=!!t},value:function(t){this.newValue=t,!this.isValid&&this.$refs.input.checkHtml5Validity()}},methods:{setHovered:function(t){void 0!==t&&(this.hovered=t)},setSelected:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];void 0!==t&&(this.selected=t,this.$emit("select",this.selected),null!==this.selected&&(this.newValue=this.getValue(this.selected),this.$emit("input",this.getValue(this.selected))),n&&this.$nextTick(function(){e.isActive=!1}))},enterPressed:function(){null!==this.hovered&&this.setSelected(this.hovered)},clickedOutside:function(t){this.whiteList.indexOf(t.target)<0&&(this.isActive=!1)},getValue:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){var i="object"===(void 0===t?"undefined":r()(t))?n.i(u.a)(t,this.field):t,o=new RegExp("("+this.newValue+")","gi");return e?i.replace(o,"<b>$1</b>"):i}},calcDropdownInViewportVertical:function(){var t=this;this.$nextTick(function(){var e=t.$refs.dropdown.getBoundingClientRect();t.isListInViewportVertically=e.top>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)})},keyArrows:function(t){var e="down"===t?1:-1;if(this.isActive){var n=this.visibleData.indexOf(this.hovered)+e;n=n>this.visibleData.length-1?0:n,n=n<0?this.visibleData.length-1:n,this.setHovered(this.visibleData[n])}else this.isActive=!0},focused:function(t){this.$emit("focus",t),this.getValue(this.selected)===this.newValue&&this.$refs.input.focus()},blur:function(t){this.$emit("blur",t),this.$refs.input.checkHtml5Validity()}},created:function(){void 0!==window&&(document.addEventListener("click",this.clickedOutside),window.addEventListener("resize",this.calcDropdownInViewportVertical))},beforeDestroy:function(){void 0!==window&&(document.removeEventListener("click",this.clickedOutside),window.removeEventListener("resize",this.calcDropdownInViewportVertical))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=n.n(i);e.default={name:"bCheckbox",props:{value:[String,Number,Boolean,Object,Array,r.a,Function],disabled:Boolean,name:String,checked:Boolean,nosync:Boolean,trueValue:{type:[String,Number,Boolean,Object,Array,r.a,Function],default:!0},falseValue:{type:[String,Number,Boolean,Object,Array,r.a,Function],default:!1},customValue:[String,Number,Boolean,Object,Array,r.a,Function]},data:function(){return{newValue:this.value||this.checked}},watch:{value:function(t){this.newValue=t},newValue:function(t){if(this.nosync)return void(this.newValue=this.value);this.$emit("input",t),this.$parent.isCheckboxGroup&&this.$parent.updateValue()}},methods:{updateValue:function(t,e){this.newValue=t,this.$emit("change",t,e)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"bCheckboxGroup",props:{value:Array},data:function(){return{checkedList:[],isCheckboxGroup:!0}},watch:{value:function(){this.initChecked()}},methods:{updateValue:function(){var t=this;this.checkedList=[],this.$children.forEach(function(e){e.newValue&&t.checkedList.push(e.customValue)}),this.$emit("input",this.checkedList),this.$emit("change",this.checkedList)},initChecked:function(){var t=this;this.$children.forEach(function(e){t.value&&t.value.indexOf(e.customValue)>=0?e.newValue=!0:e.newValue=!1})}},mounted:function(){this.initChecked()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),r=n.n(i),o=n(6);e.default={components:r()({},o.a.name,o.a),props:{title:String,message:String,hasIcon:Boolean,type:{type:String,default:"is-primary"},confirmText:{type:String,default:"OK"},cancelText:{type:String,default:"Cancel"},animation:{type:String,default:"zoom-out"},canCancel:{type:Boolean,default:!0},hasInput:Boolean,inputPlaceholder:String,inputName:String,inputMaxlength:[Number,String],onConfirm:{type:Function,default:function(){}},onCancel:{type:Function,default:function(){}}},data:function(){return{isActive:!1,prompt:"",validationMessage:""}},computed:{icon:function(){switch(this.type){case"is-info":return"info";case"is-success":return"check_circle";case"is-warning":return"warning";case"is-danger":return"error";default:return null}}},watch:{isActive:function(){if("undefined"!=typeof window){var t=this.isActive?"add":"remove";document.documentElement.classList[t]("is-clipped")}}},methods:{confirm:function(){var t=this;if(void 0!==this.$refs.input&&!this.$refs.input.checkValidity())return this.validationMessage=this.$refs.input.validationMessage,void this.$nextTick(function(){return t.$refs.input.select()});this.onConfirm(this.prompt),this.close()},cancel:function(){this.canCancel&&(this.onCancel(),this.close())},close:function(){var t=this;this.isActive=!1,setTimeout(function(){t.$destroy(),t.$el.remove()},150)},keyPress:function(t){27===t.keyCode&&this.cancel()}},created:function(){"undefined"!=typeof window&&document.addEventListener("keyup",this.keyPress)},beforeMount:function(){document.body.appendChild(this.$el)},mounted:function(){var t=this;this.isActive=!0,this.$nextTick(function(){t.hasInput?t.$refs.input.focus():t.$refs.confirmButton.focus()})},beforeDestroy:function(){"undefined"!=typeof window&&document.removeEventListener("keyup",this.keyPress)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(45),r=n.n(i),o=n(2),a=n.n(o);e.default={name:"bDropdown",props:{value:{type:[String,Number,Boolean,Object,Array,a.a,Function],default:null},narrowed:Boolean,disabled:Boolean,position:{type:String,default:"is-bottom-right",validator:function(t){return["is-top-right","is-top-left","is-bottom-right","is-bottom-left"].indexOf(t)>-1}}},data:function(){return{selected:this.value,isActive:!1,_isDropdown:!0}},watch:{value:function(t){this.selectOption(t)},isActive:function(t){this.$emit("active-change",t)}},computed:{whiteList:function(){var t=[];if(t.push(this.$refs.dropdown),t.push(this.$refs.trigger),void 0!==this.$refs.dropdown){var e=this.$refs.dropdown.querySelectorAll("*"),n=!0,i=!1,o=void 0;try{for(var a,s=r()(e);!(n=(a=s.next()).done);n=!0){var c=a.value;t.push(c)}}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}}if(void 0!==this.$refs.trigger){var u=this.$refs.trigger.querySelectorAll("*"),l=!0,f=!1,d=void 0;try{for(var p,h=r()(u);!(l=(p=h.next()).done);l=!0){var v=p.value;t.push(v)}}catch(t){f=!0,d=t}finally{try{!l&&h.return&&h.return()}finally{if(f)throw d}}}return t}},methods:{selectOption:function(t){this.selected=t,this.$emit("input",t),this.$emit("change",t),this.isActive=!1},clickedOutside:function(t){this.whiteList.indexOf(t.target)<0&&(this.isActive=!1)},toggle:function(){this.disabled||(this.isActive=!this.isActive)}},created:function(){"undefined"!=typeof window&&document.addEventListener("click",this.clickedOutside)},beforeDestroy:function(){"undefined"!=typeof window&&document.removeEventListener("click",this.clickedOutside)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=n.n(i);e.default={name:"bDropdownOption",props:{value:{type:[String,Number,Boolean,Object,Array,r.a,Function],default:null},separator:Boolean,disabled:Boolean,subheader:Boolean,hasLink:Boolean},computed:{isClickable:function(){return!this.separator&&!this.disabled&&!this.subheader}},methods:{selectOption:function(){this.isClickable&&(this.$parent.$parent.selectOption(this.value),this.$emit("click"))}},created:function(){if(!this.$parent.$parent.$data._isDropdown)throw this.$destroy(),new Error("You should wrap bDropdownOption on a bDropdown")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"bField",props:{type:String,label:String,message:String,grouped:Boolean,position:String,expanded:Boolean},data:function(){return{newType:this.type,newMessage:this.message,_isField:!0}},watch:{type:function(t){this.newType=t},message:function(t){this.newMessage=t}},computed:{addonsPosition:function(){if(void 0!==this.position){var t=this.position.split("-");if(!(t.length<1))return this.position?"has-addons-"+t[1]:void 0}},fieldType:function(){return this.grouped?"is-grouped":void 0!==this.$slots.default&&this.$slots.default.length>1?"has-addons":void 0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7);e.default={name:"bIcon",props:{type:String,pack:String,icon:String,both:Boolean,size:String},data:function(){return{newPack:this.pack||i.b.defaultIconPack}},computed:{newIcon:function(){return this.both?"mdi"===this.newPack?this.icon:this.equivalentIconOf(this.icon):this.icon}},methods:{equivalentIconOf:function(t){switch(t){case"done":return"check";case"info":return"info-circle";case"check_circle":return"check-circle";case"warning":return"exclamation-triangle";case"error":return"exclamation-circle";case"arrow_upward":return"arrow-up";case"chevron_right":return"angle-right";case"chevron_left":return"angle-left";case"keyboard_arrow_down":return"angle-down";case"visibility":return"eye";case"visibility_off":return"eye-slash";case"arrow_drop_down":return"caret-down";default:return null}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),r=n.n(i),o=n(6),a=n(7),s=n(24);e.default={name:"bInput",mixins:[s.a],components:r()({},o.a.name,o.a),props:{value:[Number,String],type:{type:String,default:"text"},passwordReveal:Boolean},data:function(){return{newValue:this.value,newType:this.type,newAutocomplete:this.autocomplete||a.b.defaultInputAutocomplete,isPasswordVisible:!1,_elementRef:"textarea"===this.type?"textarea":"input"}},computed:{hasIconRight:function(){return this.passwordReveal||this.loading||this.statusType},iconPosition:function(){return this.icon&&this.hasIconRight?"has-icons-left has-icons-right":!this.icon&&this.hasIconRight?"has-icons-right":this.icon?"has-icons-left":void 0},statusTypeIcon:function(){switch(this.statusType){case"is-success":return"done";case"is-danger":return"error";case"is-info":return"info";case"is-warning":return"warning"}},hasMessage:function(){return this.$parent.$data._isField&&this.$parent.newMessage},passwordVisibleIcon:function(){return this.isPasswordVisible?"visibility_off":"visibility"},valueLength:function(){return this.newValue?this.newValue.length:0}},watch:{value:function(t){this.newValue=t,!this.isValid&&this.checkHtml5Validity()}},methods:{input:function(t){var e=t.target.value;this.newValue=e,this.$emit("input",e),!this.isValid&&this.checkHtml5Validity()},togglePasswordVisibility:function(){var t=this;this.isPasswordVisible=!this.isPasswordVisible,this.newType=this.isPasswordVisible?"text":"password",this.$nextTick(function(){t.$refs.input.focus()})},blur:function(t){this.$emit("blur",t),this.checkHtml5Validity()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(42);e.default={name:"bMessage",mixins:[i.a]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"bModal",props:{active:Boolean,component:Object,content:String,programmatic:Boolean,props:Object,width:{type:[String,Number],default:960},hasModalCard:Boolean,animation:{type:String,default:"zoom-out"},canCancel:{type:Boolean,default:!0},onCancel:{type:Function,default:function(){}}},data:function(){return{isActive:this.active||!1,newWidth:"number"==typeof this.width?this.width+"px":this.width}},watch:{active:function(t){this.isActive=t},isActive:function(){if("undefined"!=typeof window){var t=this.isActive?"add":"remove";document.documentElement.classList[t]("is-clipped")}}},methods:{cancel:function(){this.canCancel&&this.close()},close:function(){var t=this;this.onCancel.apply(null,arguments),this.$emit("close"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout(function(){t.$destroy(),t.$el.remove()},150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},created:function(){"undefined"!=typeof window&&document.addEventListener("keyup",this.keyPress)},beforeMount:function(){this.programmatic&&document.body.appendChild(this.$el)},mounted:function(){this.programmatic&&(this.isActive=!0)},beforeDestroy:function(){"undefined"!=typeof window&&document.removeEventListener("keyup",this.keyPress)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(42);e.default={name:"bNotification",mixins:[i.a]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),r=n.n(i),o=n(6);e.default={name:"bPagination",components:r()({},o.a.name,o.a),props:{total:[Number,String],perPage:{type:[Number,String],default:20},current:{type:[Number,String],default:1},size:String,simple:Boolean,order:String},computed:{pageCount:function(){return Math.ceil(this.total/this.perPage)},firstItem:function(){var t=this.current*this.perPage-this.perPage+1;return t>=0?t:0},hasPrev:function(){return this.current>1},hasFirst:function(){return this.current>=3},hasFirstEllipsis:function(){return this.current>=4},hasLast:function(){return this.current<=this.pageCount-2},hasLastEllipsis:function(){return this.current<this.pageCount-2&&this.current<=this.pageCount-3},hasNext:function(){return this.current<this.pageCount},pagesInRange:function(){var t=this;if(!this.simple){for(var e=Math.max(1,this.current-1),n=Math.min(this.current+1,this.pageCount),i=[],r=e;r<=n;r++)(function(e){i.push({number:e,isCurrent:t.current===e,click:function(){t.$emit("change",e),t.$emit("update:current",e)}})})(r);return i}}},watch:{pageCount:function(t){this.current>t&&this.last()}},methods:{prev:function(){this.$emit("change",this.current-1),this.$emit("update:current",this.current-1)},first:function(){this.$emit("change",1),this.$emit("update:current",1)},last:function(){this.$emit("change",this.pageCount),this.$emit("update:current",this.pageCount)},next:function(){this.$emit("change",this.current+1),this.$emit("update:current",this.current+1)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=n.n(i);e.default={name:"bRadio",props:{value:[String,Number,Boolean,Object,Array,r.a,Function],disabled:Boolean,name:String},data:function(){return{isChecked:!1}},methods:{changed:function(t){this.$parent.updateValue(this.value,t)}},created:function(){if(!this.$parent.$data._isRadioGroup)throw this.$destroy(),new Error("You should wrap bRadio on a bRadioGroup")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=n.n(i);e.default={name:"bRadioButton",props:{value:[String,Number,Boolean,Object,Array,r.a,Function],type:{type:String,default:"is-primary"},disabled:Boolean,name:String},data:function(){return{size:null,isChecked:!1,_isRadioButton:!0}},methods:{changed:function(t){this.$parent.updateValue(this.value,t)}},created:function(){if(!this.$parent.$data._isRadioGroup)throw this.$destroy(),new Error("You should wrap bRadioButton on a bRadioGroup")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=n.n(i);e.default={name:"bRadioGroup",props:{value:[String,Number,Boolean,Object,Array,r.a,Function],buttonSize:String},data:function(){return{_isRadioGroup:!0,_isRadioButtonGroup:!1}},watch:{value:function(){this.initChecked()}},methods:{updateValue:function(t,e){this.$emit("change",t,e),this.$emit("input",t)},initChecked:function(){var t=this;this.$children.forEach(function(e){e.size=t.buttonSize,t.$data._isRadioButtonGroup=e.$data._isRadioButton,e.isChecked=t.value===e.value})}},mounted:function(){this.initChecked()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=n.n(i),o=n(24);e.default={name:"bSelect",mixins:[o.a],props:{value:{type:[String,Number,Boolean,Object,Array,r.a,Function],default:null}},data:function(){return{selected:this.value,_elementRef:"select"}},watch:{value:function(t){this.selected=t,!this.isValid&&this.checkHtml5Validity()},selected:function(t){this.$emit("input",t),this.$emit("change",t),!this.isValid&&this.checkHtml5Validity()}},methods:{blur:function(t){this.$emit("blur",t),this.checkHtml5Validity()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),r=n(43);e.default={mixins:[r.a],props:{actionText:{type:String,default:"OK"},onAction:{type:Function,default:function(){}}},data:function(){return{newDuration:this.duration||i.b.defaultSnackbarDuration}},methods:{insertEl:function(){this.parent.className="",this.parent.classList.add("notices",this.position),this.parent.appendChild(this.$el)},action:function(){this.onAction(),this.close()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"bSwitch",props:{value:Boolean,disabled:Boolean,name:String,checked:Boolean,size:String},data:function(){return{newValue:this.value||this.checked,isMouseDown:!1}},watch:{value:function(t){this.newValue=t},newValue:function(t){this.$emit("input",t)}},methods:{updateValue:function(t,e){this.newValue=t,this.$emit("change",t,e)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=n(103),o=n.n(r),a=n(8),s=n.n(a),c=n(44),u=n(41),l=n(6),f=n(39);e.default={name:"bTable",components:(i={},s()(i,u.a.name,u.a),s()(i,l.a.name,l.a),s()(i,f.a.name,f.a),i),props:{data:{type:Array,default:[]},bordered:Boolean,striped:Boolean,narrowed:Boolean,loading:Boolean,checkable:Boolean,selected:Object,checkedRows:{type:Array,default:function(){return[]}},mobileCards:{type:Boolean,default:!0},defaultSort:[String,Array],paginated:Boolean,perPage:{type:[Number,String],default:20},paginationSimple:Boolean,backendSorting:Boolean,rowClass:{type:Function,default:function(){return""}}},data:function(){return{columns:[],newData:this.data,newCheckedRows:[].concat(o()(this.checkedRows)),currentSortColumn:{},isAsc:!0,mobileSort:{},currentPage:1,_isTable:!0}},watch:{data:function(t){this.newData=t,this.backendSorting||this.sort(this.currentSortColumn,!0)},mobileSort:function(t){this.currentSortColumn!==t&&this.sort(t)},currentSortColumn:function(t){this.mobileSort=t},checkedRows:function(t){this.newCheckedRows=[].concat(o()(t))}},computed:{visibleData:function(){if(!this.paginated)return this.newData;var t=this.currentPage,e=this.perPage;if(this.newData.length<=e)return this.newData;var n=(t-1)*e,i=parseInt(n,10)+parseInt(e,10);return this.newData.slice(n,i)},isAllChecked:function(){var t=this;return!this.visibleData.some(function(e){return t.checkedRows.indexOf(e)<0})},hasSortableColumns:function(){return this.columns.some(function(t){return t.sortable})}},methods:{sortBy:function(t,e,i,r){return i&&"function"==typeof i?[].concat(o()(t)).sort(i):[].concat(o()(t)).sort(function(t,i){var o=n.i(c.a)(t,e),a=n.i(c.a)(i,e);return o||0===o?a||0===a?o===a?0:(o="string"==typeof o?o.toUpperCase():o,a="string"==typeof a?a.toUpperCase():a,r?o>a?1:-1:o>a?-1:1):-1:1})},sort:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&t.sortable&&(e||(this.isAsc=t===this.currentSortColumn?!this.isAsc:this.isAsc=!0),this.backendSorting||(this.newData=this.sortBy(this.newData,t.field,t.customSort,this.isAsc)),this.currentSortColumn=t,this.$emit("sort",t.field,this.isAsc?"asc":"desc"))},isRowChecked:function(t){return this.checkedRows.indexOf(t)>=0},removeCheckedRow:function(t){var e=this.newCheckedRows.indexOf(t);e>=0&&this.newCheckedRows.splice(e,1)},checkAll:function(){var t=this,e=this.isAllChecked;this.visibleData.forEach(function(n){t.removeCheckedRow(n),e||t.newCheckedRows.push(n)}),this.$emit("check",this.newCheckedRows),this.$emit("check-all",this.newCheckedRows),this.$emit("update:checkedRows",this.newCheckedRows)},checkRow:function(t){this.isRowChecked(t)?this.removeCheckedRow(t):this.newCheckedRows.push(t),this.$emit("check",this.newCheckedRows,t),this.$emit("update:checkedRows",this.newCheckedRows)},selectRow:function(t,e){this.$emit("click",t),this.selected!==t&&(this.$emit("select",t,this.selected),this.$emit("update:selected",t))},pageChanged:function(t){this.currentPage=t>0?t:1,this.$emit("page-change",this.currentPage)},initSort:function(){var t=this;if(this.defaultSort){var e=Array.isArray(this.defaultSort)?this.defaultSort[0]:this.defaultSort,n=this.defaultSort[1]||"";this.columns.forEach(function(i){i.field===e&&(t.isAsc="desc"!==n.toLowerCase(),t.sort(i,!0))})}}},mounted:function(){this.initSort()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"bTableColumn",props:{label:{type:String,required:!0},field:String,width:[Number,String],numeric:Boolean,sortable:Boolean,visible:{type:Boolean,default:!0},customSort:Function},created:function(){var t=this;if(!this.$parent.$data._isTable)throw this.$destroy(),new Error("You should wrap bTableColumn on a bTable");!this.$parent.columns.some(function(e){return e.label===t.label})&&this.$parent.columns.push(this.$props)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"bTabItem",props:{label:String,icon:String,iconPack:String},data:function(){return{isActive:!1,transitionName:null}},methods:{activate:function(t,e){this.$parent.animated?this.transitionName=e<t?"slide-next":"slide-prev":this.transitionName=null,this.isActive=!0},deactivate:function(t,e){this.$parent.animated?this.transitionName=e<t?"slide-next":"slide-prev":this.transitionName=null,this.isActive=!1}},created:function(){if(!this.$parent.$data._isTabs)throw this.$destroy(),new Error("You should wrap bTabItem on a bTabs");this.$parent.tabItems.push(this)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),r=n.n(i),o=n(6);e.default={name:"bTabs",components:r()({},o.a.name,o.a),props:{value:[String,Number],expanded:Boolean,type:String,size:String,position:String,animated:{type:Boolean,default:!0}},data:function(){return{newValue:this.value||0,tabItems:[],contentHeight:0,_isTabs:!0}},watch:{value:function(t){this.changeTab(this.newValue,t),this.newValue=t},tabItems:function(){this.tabItems.length&&(this.tabItems[this.newValue].isActive=!0)}},methods:{changeTab:function(t,e){t!==e&&(this.tabItems[t].deactivate(t,e),this.tabItems[e].activate(t,e))},tabClick:function(t){this.$emit("input",t),this.$emit("change",t),this.changeTab(this.newValue,t),this.newValue=t}},mounted:function(){this.tabItems.length&&(this.tabItems[this.newValue].isActive=!0)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),r=n(43);e.default={mixins:[r.a],data:function(){return{newDuration:this.duration||i.b.defaultToastDuration}},methods:{insertEl:function(){this.parent.className="",this.parent.classList.add("notices","is-toast",this.position),this.parent.appendChild(this.$el)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7);e.default={name:"bTooltip",props:{type:String,label:String,position:{type:String,default:"is-top",validator:function(t){return["is-top","is-bottom","is-left","is-right"].indexOf(t)>-1}},always:Boolean,animated:Boolean,square:Boolean,dashed:Boolean,multilined:Boolean,size:{type:String,default:"is-medium"}},data:function(){return{newType:this.type||i.b.defaultTooltipType,newAnimated:this.animated||i.b.defaultTooltipAnimated}}}},function(t,e,n){"use strict";var i=n(142),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";function i(t){return new(a.a.extend(c.a))({el:document.createElement("div"),propsData:t})}var r=n(14),o=n.n(r),a=n(23),s=n(145),c=n.n(s);e.a={alert:function(t){var e=void 0;"string"==typeof t&&(e=t);var n={canCancel:!1,message:e};return i(o()(n,t))},confirm:function(t){var e={};return i(o()(e,t))},prompt:function(t){var e={hasInput:!0,confirmText:"Done"};return i(o()(e,t))}}},function(t,e,n){"use strict";var i=n(146),r=n.n(i),o=n(147),a=n.n(o);n.d(e,"a",function(){return r.a}),n.d(e,"b",function(){return a.a})},function(t,e,n){"use strict";var i=n(148),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";var i=n(151),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";var i=n(14),r=n.n(i),o=n(23),a=n(152),s=n.n(a);n.d(e,"a",function(){return s.a}),e.b={open:function(t){var e=void 0;"string"==typeof t&&(e=t);var n={programmatic:!0,content:e},i=r()(n,t);return new(o.a.extend(s.a))({el:document.createElement("div"),propsData:i})}}},function(t,e,n){"use strict";var i=n(153),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";var i=n(155),r=n.n(i),o=n(157),a=n.n(o),s=n(156),c=n.n(s);n.d(e,"a",function(){return r.a}),n.d(e,"c",function(){return a.a}),n.d(e,"b",function(){return c.a})},function(t,e,n){"use strict";var i=n(158),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";var i=n(14),r=n.n(i),o=n(23),a=n(159),s=n.n(a);e.a={open:function(t){var e=void 0;"string"==typeof t&&(e=t);var n={type:"is-success",position:"is-bottom-right",message:e},i=r()(n,t);return new(o.a.extend(s.a))({el:document.createElement("div"),propsData:i})}}},function(t,e,n){"use strict";var i=n(160),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";var i=n(161),r=n.n(i),o=n(162),a=n.n(o);n.d(e,"a",function(){return r.a}),n.d(e,"b",function(){return a.a})},function(t,e,n){"use strict";var i=n(164),r=n.n(i),o=n(163),a=n.n(o);n.d(e,"a",function(){return r.a}),n.d(e,"b",function(){return a.a})},function(t,e,n){"use strict";var i=n(14),r=n.n(i),o=n(23),a=n(165),s=n.n(a);e.a={open:function(t){var e=void 0;"string"==typeof t&&(e=t);var n={message:e},i=r()(n,t);return new(o.a.extend(s.a))({el:document.createElement("div"),propsData:i})}}},function(t,e,n){"use strict";var i=n(166),r=n.n(i);e.a=r.a},function(t,e,n){t.exports={default:n(105),__esModule:!0}},function(t,e,n){t.exports={default:n(108),__esModule:!0}},function(t,e,n){t.exports={default:n(110),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0;var i=n(100),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r.default)(t)}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(102),o=i(r),a=n(2),s=i(a),c="function"==typeof s.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":typeof t};e.default="function"==typeof s.default&&"symbol"===c(o.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":void 0===t?"undefined":c(t)}},function(t,e,n){n(38),n(134),t.exports=n(3).Array.from},function(t,e,n){n(57),n(38),t.exports=n(133)},function(t,e,n){n(136),t.exports=n(3).Object.assign},function(t,e,n){n(137);var i=n(3).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},function(t,e,n){n(139),n(138),n(140),n(141),t.exports=n(3).Symbol},function(t,e,n){n(38),n(57),t.exports=n(37).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var i=n(11),r=n(55),o=n(132);t.exports=function(t){return function(e,n,a){var s,c=i(e),u=r(c.length),l=o(a,u);if(t&&n!=n){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var i=n(25),r=n(1)("toStringTag"),o="Arguments"==i(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),r))?n:o?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){"use strict";var i=n(5),r=n(19);t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},function(t,e,n){var i=n(18),r=n(29),o=n(21);t.exports=function(t){var e=i(t),n=r.f;if(n)for(var a,s=n(t),c=o.f,u=0;s.length>u;)c.call(t,a=s[u++])&&e.push(a);return e}},function(t,e,n){t.exports=n(4).document&&document.documentElement},function(t,e,n){var i=n(17),r=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},function(t,e,n){var i=n(25);t.exports=Array.isArray||function(t){return"Array"==i(t)}},function(t,e,n){var i=n(12);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},function(t,e,n){"use strict";var i=n(51),r=n(19),o=n(30),a={};n(13)(a,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(a,{next:r(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var i=n(1)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],a=o[i]();a.next=function(){return{done:n=!0}},o[i]=function(){return a},t(o)}catch(t){}return n}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var i=n(18),r=n(11);t.exports=function(t,e){for(var n,o=r(t),a=i(o),s=a.length,c=0;s>c;)if(o[n=a[c++]]===e)return n}},function(t,e,n){var i=n(22)("meta"),r=n(20),o=n(10),a=n(5).f,s=0,c=Object.isExtensible||function(){return!0},u=!n(16)(function(){return c(Object.preventExtensions({}))}),l=function(t){a(t,i,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,i)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[i].i},d=function(t,e){if(!o(t,i)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[i].w},p=function(t){return u&&h.NEED&&c(t)&&!o(t,i)&&l(t),t},h=t.exports={KEY:i,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},function(t,e,n){"use strict";var i=n(18),r=n(29),o=n(21),a=n(34),s=n(49),c=Object.assign;t.exports=!c||n(16)(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=i})?function(t,e){for(var n=a(t),c=arguments.length,u=1,l=r.f,f=o.f;c>u;)for(var d,p=s(arguments[u++]),h=l?i(p).concat(l(p)):i(p),v=h.length,m=0;v>m;)f.call(p,d=h[m++])&&(n[d]=p[d]);return n}:c},function(t,e,n){var i=n(5),r=n(12),o=n(18);t.exports=n(9)?Object.defineProperties:function(t,e){r(t);for(var n,a=o(e),s=a.length,c=0;s>c;)i.f(t,n=a[c++],e[n]);return t}},function(t,e,n){var i=n(21),r=n(19),o=n(11),a=n(35),s=n(10),c=n(48),u=Object.getOwnPropertyDescriptor;e.f=n(9)?u:function(t,e){if(t=o(t),e=a(e,!0),c)try{return u(t,e)}catch(t){}if(s(t,e))return r(!i.f.call(t,e),t[e])}},function(t,e,n){var i=n(11),r=n(52).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(t){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):r(i(t))}},function(t,e,n){var i=n(10),r=n(34),o=n(31)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var i=n(33),r=n(26);t.exports=function(t){return function(e,n){var o,a,s=String(r(e)),c=i(n),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},function(t,e,n){var i=n(33),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(12),r=n(56);t.exports=n(3).getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},function(t,e,n){"use strict";var i=n(46),r=n(15),o=n(34),a=n(120),s=n(118),c=n(55),u=n(115),l=n(56);r(r.S+r.F*!n(122)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,f,d=o(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,g=l(d);if(m&&(v=i(v,h>2?arguments[2]:void 0,2)),void 0==g||p==Array&&s(g))for(e=c(d.length),n=new p(e);e>y;y++)u(n,y,m?v(d[y],y):d[y]);else for(f=g.call(d),n=new p;!(r=f.next()).done;y++)u(n,y,m?a(f,v,[r.value,y],!0):r.value);return n.length=y,n}})},function(t,e,n){"use strict";var i=n(112),r=n(123),o=n(17),a=n(11);t.exports=n(50)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},function(t,e,n){var i=n(15);i(i.S+i.F,"Object",{assign:n(126)})},function(t,e,n){var i=n(15);i(i.S+i.F*!n(9),"Object",{defineProperty:n(5).f})},function(t,e){},function(t,e,n){"use strict";var i=n(4),r=n(10),o=n(9),a=n(15),s=n(54),c=n(125).KEY,u=n(16),l=n(32),f=n(30),d=n(22),p=n(1),h=n(37),v=n(36),m=n(124),y=n(116),g=n(119),b=n(12),_=n(11),w=n(35),x=n(19),C=n(51),k=n(129),$=n(128),A=n(5),S=n(18),O=$.f,E=A.f,P=k.f,T=i.Symbol,j=i.JSON,V=j&&j.stringify,I=p("_hidden"),M=p("toPrimitive"),R={}.propertyIsEnumerable,D=l("symbol-registry"),N=l("symbols"),B=l("op-symbols"),F=Object.prototype,L="function"==typeof T,z=i.QObject,H=!z||!z.prototype||!z.prototype.findChild,q=o&&u(function(){return 7!=C(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var i=O(F,e);i&&delete F[e],E(t,e,n),i&&t!==F&&E(F,e,i)}:E,U=function(t){var e=N[t]=C(T.prototype);return e._k=t,e},G=L&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},W=function(t,e,n){return t===F&&W(B,e,n),b(t),e=w(e,!0),b(n),r(N,e)?(n.enumerable?(r(t,I)&&t[I][e]&&(t[I][e]=!1),n=C(n,{enumerable:x(0,!1)})):(r(t,I)||E(t,I,x(1,{})),t[I][e]=!0),q(t,e,n)):E(t,e,n)},K=function(t,e){b(t);for(var n,i=y(e=_(e)),r=0,o=i.length;o>r;)W(t,n=i[r++],e[n]);return t},J=function(t,e){return void 0===e?C(t):K(C(t),e)},Y=function(t){var e=R.call(this,t=w(t,!0));return!(this===F&&r(N,t)&&!r(B,t))&&(!(e||!r(this,t)||!r(N,t)||r(this,I)&&this[I][t])||e)},Q=function(t,e){if(t=_(t),e=w(e,!0),t!==F||!r(N,e)||r(B,e)){var n=O(t,e);return!n||!r(N,e)||r(t,I)&&t[I][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=P(_(t)),i=[],o=0;n.length>o;)r(N,e=n[o++])||e==I||e==c||i.push(e);return i},X=function(t){for(var e,n=t===F,i=P(n?B:_(t)),o=[],a=0;i.length>a;)!r(N,e=i[a++])||n&&!r(F,e)||o.push(N[e]);return o};L||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===F&&e.call(B,n),r(this,I)&&r(this[I],t)&&(this[I][t]=!1),q(this,t,x(1,n))};return o&&H&&q(F,t,{configurable:!0,set:e}),U(t)},s(T.prototype,"toString",function(){return this._k}),$.f=Q,A.f=W,n(52).f=k.f=Z,n(21).f=Y,n(29).f=X,o&&!n(28)&&s(F,"propertyIsEnumerable",Y,!0),h.f=function(t){return U(p(t))}),a(a.G+a.W+a.F*!L,{Symbol:T});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)p(tt[et++]);for(var tt=S(p.store),et=0;tt.length>et;)v(tt[et++]);a(a.S+a.F*!L,"Symbol",{for:function(t){return r(D,t+="")?D[t]:D[t]=T(t)},keyFor:function(t){if(G(t))return m(D,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){H=!0},useSimple:function(){H=!1}}),a(a.S+a.F*!L,"Object",{create:J,defineProperty:W,defineProperties:K,getOwnPropertyDescriptor:Q,getOwnPropertyNames:Z,getOwnPropertySymbols:X}),j&&a(a.S+a.F*(!L||u(function(){var t=T();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!G(t)){for(var e,n,i=[t],r=1;arguments.length>r;)i.push(arguments[r++]);return e=i[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!G(e))return e}),i[1]=e,V.apply(j,i)}}}),T.prototype[M]||n(13)(T.prototype,M,T.prototype.valueOf),f(T,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)},function(t,e,n){n(36)("asyncIterator")},function(t,e,n){n(36)("observable")},function(t,e,n){var i=n(0)(n(60),n(186),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(61),n(179),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(62),n(191),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(63),n(177),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(64),n(171),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(65),n(187),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(66),n(181),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(67),n(180),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(68),n(188),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(69),n(175),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(70),n(190),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(71),n(183),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(72),n(168),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(73),n(182),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(74),n(170),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(75),n(184),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(76),n(173),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(77),n(185),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(78),n(174),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(79),n(178),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(80),n(176),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(81),n(169),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(82),n(189),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(83),n(167),null,null);t.exports=i.exports},function(t,e,n){var i=n(0)(n(84),n(172),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":t.transition.enter,"leave-active-class":t.transition.leave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"toast",class:t.type},[n("div",{domProps:{innerHTML:t._s(t.message)}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination",class:[t.order,t.size,{"is-simple":t.simple}]},[n("a",{staticClass:"pagination-previous",class:{"is-disabled":!t.hasPrev},on:{click:t.prev}},[n("b-icon",{attrs:{icon:"chevron_left",both:""}})],1),t._v(" "),n("a",{staticClass:"pagination-next",class:{"is-disabled":!t.hasNext},on:{click:t.next}},[n("b-icon",{attrs:{icon:"chevron_right",both:""}})],1),t._v(" "),t.simple?t._e():n("ul",{staticClass:"pagination-list"},[t.hasFirst?n("li",[n("a",{staticClass:"pagination-link",on:{click:t.first}},[t._v("1")])]):t._e(),t._v(" "),t.hasFirstEllipsis?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("â€¦")])]):t._e(),t._v(" "),t._l(t.pagesInRange,function(e){return n("li",{key:e.number},[n("a",{staticClass:"pagination-link",class:{"is-current":e.isCurrent},on:{click:e.click}},[t._v("\n                "+t._s(e.number)+"\n            ")])])}),t._v(" "),t.hasLastEllipsis?n("li",[n("span",{staticClass:"pagination-ellipsis"},[t._v("â€¦")])]):t._e(),t._v(" "),t.hasLast?n("li",[n("a",{staticClass:"pagination-link",on:{click:t.last}},[t._v(t._s(t.pageCount))])]):t._e()],2),t._v(" "),t.simple?n("small",{staticClass:"info"},[t._v("\n        "+t._s(t.firstItem)+"-"+t._s(t.current*t.perPage)+" / "+t._s(t.total)+"\n    ")]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transitionName}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"tab-item"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"control"},[n("button",{staticClass:"radio button",class:[t.isChecked?t.type:null,t.size],attrs:{type:"button",disabled:t.disabled},on:{click:t.changed}},[t._t("default"),t._v(" "),n("input",{attrs:{type:"radio",disabled:t.disabled,name:t.name},domProps:{checked:t.isChecked,value:t.value}})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"dropdown",class:{"is-disabled":t.disabled}},[n("a",{ref:"trigger",staticClass:"trigger",attrs:{role:"button"},on:{click:t.toggle}},[t._t("trigger")],2),t._v(" "),n("transition-group",{attrs:{name:"fade"}},[t.isActive?n("div",{key:"bg",staticClass:"background is-hidden-desktop"}):t._e(),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],key:"dropdown",ref:"dropdown",staticClass:"box",class:["is-dropdown",t.position,{"is-narrow":t.narrowed}]},[n("ul",[t._t("default")],2)])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"tooltip",class:[t.newType,t.position,t.size,{"is-square":t.square,"is-animated":t.newAnimated,"is-always":t.always,"is-multiline":t.multilined,"is-dashed":t.dashed}],attrs:{"data-label":t.label}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control",class:{"is-expanded":t.expanded,"has-icons-left":t.icon}},[n("span",{staticClass:"select",class:[t.size,t.statusType,{"is-fullwidth":t.expanded,"is-loading":t.loading,"is-empty":null===t.selected}]},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],ref:"select",attrs:{disabled:t.disabled,readonly:t.readonly,name:t.name,required:t.required},on:{focus:function(e){t.$emit("focus",e)},blur:t.blur,change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?n:n[0]}}},[t.placeholder?n("option",{attrs:{selected:"",disabled:"",hidden:""},domProps:{value:null}},[t._v("\n                "+t._s(t.placeholder)+"\n            ")]):t._e(),t._v(" "),t._t("default")],2)]),t._v(" "),t.icon?n("b-icon",{staticClass:"is-left",attrs:{icon:t.icon,pack:t.iconPack,size:t.size}}):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{ref:"label",staticClass:"switch",class:[t.size,{"is-disabled":t.disabled}],attrs:{disabled:t.disabled,tabindex:!t.disabled&&0},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13)&&t._k(e.keyCode,"space",32))return null;e.preventDefault(),t.updateValue(!t.newValue,e)},mousedown:function(e){t.isMouseDown=!0},mouseup:function(e){t.isMouseDown=!1},mouseout:function(e){t.isMouseDown=!1},blur:function(e){t.isMouseDown=!1}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newValue,expression:"newValue"}],attrs:{type:"checkbox",name:t.name,disabled:t.disabled},domProps:{checked:Array.isArray(t.newValue)?t._i(t.newValue,null)>-1:t.newValue},on:{change:function(e){t.updateValue(t.newValue,e)},__c:function(e){var n=t.newValue,i=e.target,r=!!i.checked;if(Array.isArray(n)){var o=t._i(n,null);r?o<0&&(t.newValue=n.concat(null)):o>-1&&(t.newValue=n.slice(0,o).concat(n.slice(o+1)))}else t.newValue=r}}}),t._v(" "),n("span",{staticClass:"check",class:{"is-elastic":t.isMouseDown}}),t._v(" "),n("span",{staticClass:"control-label"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.isActive?n("article",{staticClass:"message",class:t.type},[t.title?n("header",{staticClass:"message-header"},[n("p",[t._v(t._s(t.title))]),t._v(" "),t.closable?n("button",{staticClass:"delete",attrs:{type:"button"},on:{click:t.close}}):t._e()]):t._e(),t._v(" "),n("section",{staticClass:"message-body"},[n("div",{staticClass:"media"},[t.icon&&t.hasIcon?n("div",{staticClass:"media-left"},[n("b-icon",{class:t.type,attrs:{icon:t.icon,both:"",size:"is-large"}})],1):t._e(),t._v(" "),n("div",{staticClass:"media-content"},[t._t("default")],2)])])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("td",{class:{"has-text-right":t.numeric},attrs:{"data-label":t.label}},[n("span",[t._t("default")],2)]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.animation}},[t.isActive?n("div",{staticClass:"dialog modal is-active"},[n("div",{staticClass:"modal-background",on:{click:t.cancel}}),t._v(" "),n("div",{staticClass:"modal-card animation-content"},[t.title?n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),n("section",{staticClass:"modal-card-body",class:{"is-titleless":!t.title,"is-flex":t.hasIcon}},[n("div",{staticClass:"media"},[t.icon&&t.hasIcon?n("div",{staticClass:"media-left"},[n("b-icon",{class:t.type,attrs:{icon:t.icon,both:"",size:"is-large custom-icon"}})],1):t._e(),t._v(" "),n("div",{staticClass:"media-content"},[n("p",{domProps:{innerHTML:t._s(t.message)}}),t._v(" "),t.hasInput?n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.prompt,expression:"prompt"}],ref:"input",staticClass:"input",class:{"is-danger":t.validationMessage},attrs:{required:"",placeholder:t.inputPlaceholder,maxlength:t.inputMaxlength,name:t.inputName},domProps:{value:t.prompt},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.confirm(e)},input:function(e){e.target.composing||(t.prompt=e.target.value)}}})]),t._v(" "),n("p",{staticClass:"help is-danger"},[t._v(t._s(t.validationMessage))])]):t._e()])])]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[t.canCancel?n("button",{ref:"cancelButton",staticClass:"button is-light",on:{click:t.cancel}},[t._v("\n                    "+t._s(t.cancelText)+"\n                ")]):t._e(),t._v(" "),n("button",{ref:"confirmButton",staticClass:"button",class:t.type,on:{click:t.confirm}},[t._v("\n                    "+t._s(t.confirmText)+"\n                ")])])])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-table",class:{"is-loading":t.loading}},[t.mobileCards&&t.hasSortableColumns?n("div",{staticClass:"field  is-hidden-tablet"},[t.mobileCards&&t.hasSortableColumns?n("div",{staticClass:"field is-hidden-tablet has-addons"},[n("b-select",{attrs:{expanded:""},model:{value:t.mobileSort,callback:function(e){t.mobileSort=e},expression:"mobileSort"}},t._l(t.columns,function(e,i){return e.sortable?n("option",{key:i,domProps:{value:e}},[t._v("\n                    "+t._s(e.label)+"\n                ")]):t._e()})),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button is-primary",on:{click:function(e){t.sort(t.mobileSort)}}},[n("b-icon",{class:{"is-desc":!t.isAsc,"is-visible":t.currentSortColumn===t.mobileSort},attrs:{icon:"arrow_upward",both:"",size:"is-small"}})],1)])],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"table-wrapper"},[n("table",{staticClass:"table",class:{"is-bordered":t.bordered,"is-striped":t.striped,"is-narrow":t.narrowed,"has-mobile-cards":t.mobileCards}},[n("thead",[n("tr",[t.checkable?n("th",{staticClass:"checkbox-cell"},[n("b-checkbox",{attrs:{value:t.isAllChecked,nosync:""},on:{change:t.checkAll}})],1):t._e(),t._v(" "),t._l(t.columns,function(e,i){return e.visible?n("th",{key:i,class:{"is-current-sort":t.currentSortColumn===e,"is-sortable":e.sortable},style:{width:e.width+"px"},on:{click:function(n){n.stopPropagation(),t.sort(e)}}},[n("div",{staticClass:"th-wrap",class:{"is-numeric":e.numeric}},[t._v("\n                            "+t._s(e.label)+"\n                            "),n("b-icon",{class:{"is-desc":!t.isAsc,"is-visible":t.currentSortColumn===e},attrs:{icon:"arrow_upward",both:"",size:"is-small"}})],1)]):t._e()})],2)]),t._v(" "),t.visibleData.length?n("tbody",t._l(t.visibleData,function(e,i){return n("tr",{key:i,class:[t.rowClass(e,i),{"is-selected":e===t.selected,"is-checked":t.isRowChecked(e)}],on:{click:function(n){t.selectRow(e)},dblclick:function(n){t.$emit("dblclick",e)}}},[t.checkable?n("td",{staticClass:"checkbox-cell"},[n("b-checkbox",{attrs:{value:t.isRowChecked(e),nosync:""},on:{change:function(n){t.checkRow(e)}}})],1):t._e(),t._v(" "),t._t("default",null,{row:e,index:i})],2)})):n("tbody",[n("tr",{staticClass:"is-empty"},[n("td",{attrs:{colspan:t.checkable?t.columns.length+1:t.columns.length}},[t._t("empty")],2)])])])]),t._v(" "),t.checkable||t.paginated?n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[t.checkable&&this.checkedRows.length>0?n("div",{staticClass:"level-item"},[n("p",[t._v("("+t._s(this.checkedRows.length)+")")])]):t._e()]),t._v(" "),n("div",{staticClass:"level-right"},[t.paginated?n("div",{staticClass:"level-item"},[n("b-pagination",{attrs:{total:t.newData.length,"per-page":t.perPage,simple:t.paginationSimple,current:t.currentPage},on:{change:t.pageChanged}})],1):t._e()])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{ref:"label",staticClass:"checkbox",class:{"is-disabled":t.disabled},attrs:{disabled:t.disabled,tabindex:!t.disabled&&0},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13)&&t._k(e.keyCode,"space",32))return null;e.preventDefault(),t.updateValue(!t.newValue,e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newValue,expression:"newValue"}],attrs:{type:"checkbox",disabled:t.disabled,name:t.name,"true-value":t.trueValue,"false-value":t.falseValue},domProps:{checked:Array.isArray(t.newValue)?t._i(t.newValue,null)>-1:t._q(t.newValue,t.trueValue)},on:{change:function(e){t.updateValue(t.newValue,e)},__c:function(e){var n=t.newValue,i=e.target,r=i.checked?t.trueValue:t.falseValue;if(Array.isArray(n)){var o=t._i(n,null);r?o<0&&(t.newValue=n.concat(null)):o>-1&&(t.newValue=n.slice(0,o).concat(n.slice(o+1)))}else t.newValue=r}}}),t._v(" "),n("span",{staticClass:"check"}),t._v(" "),n("span",{staticClass:"control-label"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon",class:[t.type,t.size]},[n("i",{class:[t.newPack,"fa"===t.newPack?"fa-"+t.newIcon:null]},[t._v(t._s("mdi"===t.newPack?t.newIcon:null))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field",class:[t.fieldType,t.addonsPosition,{"is-expanded":t.expanded}]},[t.label?n("label",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),t._v(" "),t._t("default"),t._v(" "),t.newMessage?n("p",{staticClass:"help",class:t.newType},[t._v(t._s(t.newMessage))]):t._e()],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{ref:"label",staticClass:"radio",class:{"is-disabled":t.disabled},attrs:{disabled:t.disabled,tabindex:!t.disabled&&0},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13)&&t._k(e.keyCode,"space",32))return null;e.preventDefault(),t.$parent.updateValue(t.value)}}},[n("input",{attrs:{type:"radio",disabled:t.disabled,name:t.name},domProps:{checked:t.isChecked,value:t.value},on:{change:t.changed}}),t._v(" "),n("span",{staticClass:"check"}),t._v(" "),n("span",{staticClass:"control-label"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.isActive?n("article",{staticClass:"notification",class:t.type},[t.closable?n("button",{staticClass:"delete",attrs:{type:"button"},on:{click:t.close}}):t._e(),t._v(" "),n("div",{staticClass:"media"},[t.icon&&t.hasIcon?n("div",{staticClass:"media-left"},[n("b-icon",{attrs:{icon:t.icon,both:"",size:"is-large"}})],1):t._e(),t._v(" "),n("div",{staticClass:"media-content"},[t._t("default")],2)])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"radio-group",class:{"field has-addons":t.$data._isRadioButtonGroup}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":t.transition.enter,"leave-active-class":t.transition.leave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"snackbar"},[n("p",{staticClass:"text"},[t._v(t._s(t.message))]),t._v(" "),t.actionText?n("div",{staticClass:"action",class:t.type,on:{click:t.action}},[n("button",{staticClass:"button is-dark"},[t._v(t._s(t.actionText))])]):t._e()])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"autocomplete control",class:t.size},[n("b-input",{ref:"input",attrs:{size:t.size,expanded:t.expanded,loading:t.loading,icon:t.icon,"icon-pack":t.iconPack,name:t.name,placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly,maxlength:t.maxlength,minlength:t.minlength,required:t.required,min:t.min,max:t.max,step:t.step,pattern:t.pattern,autocomplete:"off"},on:{change:function(e){t.$emit("change",t.newValue)},focus:t.focused,blur:t.blur},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;e.preventDefault(),t.isActive=!1},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;e.preventDefault(),t.enterPressed(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38))return null;e.preventDefault(),t.keyArrows("up")},function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40))return null;e.preventDefault(),t.keyArrows("down")}]},model:{value:t.newValue,callback:function(e){t.newValue=e},expression:"newValue"}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.isActive&&t.visibleData.length>0,expression:"isActive && visibleData.length > 0"}],ref:"dropdown",staticClass:"box",class:{"is-opened-top":!t.isListInViewportVertically}},[n("ul",[t._l(t.visibleData,function(e,i){return n("li",{key:i,staticClass:"option",class:{"is-hovered":e===t.hovered},on:{click:function(n){t.setSelected(e)}}},[t.hasCustomTemplate?t._t("default",null,{option:e,index:i}):n("span",{domProps:{innerHTML:t._s(t.getValue(e,!0))}})],2)}),t._v(" "),t.data.length>t.maxResults?n("li",{staticClass:"option is-disabled"},[t._v("â€¦")]):t._e()],2)])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{staticClass:"option",class:{"is-subheader":t.subheader,"is-disabled":t.disabled,"is-separator":t.separator,"is-selected":null!==t.value&&t.value===t.$parent.$parent.selected,"has-link":t.hasLink},on:{click:t.selectOption}},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control",class:[t.iconPosition,{"is-expanded":t.expanded,"is-loading":t.loading,"is-clearfix":!t.hasMessage}]},["textarea"!==t.type?n("input",{ref:"input",staticClass:"input",class:[t.statusType,t.size],attrs:{type:t.newType,name:t.name,placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly,maxlength:t.maxlength,minlength:t.minlength,autocomplete:t.newAutocomplete,required:t.required,min:t.min,max:t.max,step:t.step,pattern:t.pattern},domProps:{value:t.newValue},on:{input:t.input,blur:t.blur,focus:function(e){t.$emit("focus",e)},change:function(e){t.$emit("change",t.newValue)}}}):n("textarea",{ref:"textarea",staticClass:"textarea",class:[t.statusType,t.size],attrs:{name:t.name,placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly,required:t.required,maxlength:t.maxlength,minlength:t.minlength,rows:t.rows},domProps:{value:t.newValue},on:{input:t.input,blur:t.blur,focus:function(e){t.$emit("focus",e)},change:function(e){t.$emit("change",t.newValue)}}}),t._v(" "),t.icon?n("b-icon",{staticClass:"is-left",attrs:{icon:t.icon,pack:t.iconPack,size:t.size}}):t._e(),t._v(" "),t.loading||!t.passwordReveal&&!t.statusType?t._e():n("b-icon",{staticClass:"is-right",class:[t.passwordReveal?null:t.statusType,{"is-primary is-clickable":t.passwordReveal}],attrs:{icon:t.passwordReveal?t.passwordVisibleIcon:t.statusTypeIcon,size:t.size,both:""},nativeOn:{click:function(e){t.togglePasswordVisibility(e)}}}),t._v(" "),t.maxlength?n("small",{staticClass:"help counter"},[t._v(t._s(t.valueLength)+" / "+t._s(t.maxlength))]):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-tabs"},[n("nav",{staticClass:"tabs",class:[t.type,t.size,t.position,{"is-fullwidth":t.expanded}]},[n("ul",t._l(t.tabItems,function(e,i){return n("li",{key:i,class:{"is-active":t.newValue===i}},[n("a",{on:{click:function(e){t.tabClick(i)}}},[e.icon?n("b-icon",{attrs:{icon:e.icon,pack:e.iconPack,size:t.size}}):t._e(),t._v(" "),n("span",[t._v(t._s(e.label))])],1)])}))]),t._v(" "),n("section",{staticClass:"tab-content"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.animation}},[t.isActive?n("div",{staticClass:"modal is-active"},[n("div",{staticClass:"modal-background",on:{click:t.cancel}}),t._v(" "),n("div",{staticClass:"animation-content",class:{"modal-content":!t.hasModalCard},style:{maxWidth:t.newWidth}},[t.component?n(t.component,t._b({tag:"component",on:{close:t.close}},"component",t.props)):t.content?n("div",{domProps:{innerHTML:t._s(t.content)}}):t._t("default")],2),t._v(" "),t.canCancel?n("button",{staticClass:"modal-close is-large",on:{click:t.cancel}}):t._e()]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"checkbox-group"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e,n){t.exports=n(58)}])});
//# sourceMappingURL=index.js.map


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/lib/highlight.pack.js ---- */


/*! highlight.js v9.10.0 | BSD3 License | git.io/hljslicense */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/[&<>]/gm,function(e){return j[e]})}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function a(e){return k.test(e)}function i(e){var n,t,r,i,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",t=B.exec(o))return w(t[1])?t[1]:"no-highlight";for(o=o.split(/\s+/),n=0,r=o.length;r>n;n++)if(i=o[n],a(i)||w(i))return i}function o(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function u(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function c(e,r,a){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}l+="<"+t(e)+E.map.call(e.attributes,r).join("")+">"}function u(e){l+="</"+t(e)+">"}function c(e){("start"===e.event?o:u)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=i();if(l+=n(a.substring(s,g[0].offset)),s=g[0].offset,g===e){f.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g===e&&g.length&&g[0].offset===s);f.reverse().forEach(o)}else"start"===g[0].event?f.push(g[0].node):f.pop(),c(g.splice(0,1)[0])}return l+n(a.substr(s))}function s(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(n){return o(e,{v:null},n)})),e.cached_variants||e.eW&&[o(e)]||[e]}function l(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?u("keyword",a.k):x(a.k).forEach(function(e){u(e,a.k[e])}),a.k=o}a.lR=t(a.l||/\w+/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]),a.c=Array.prototype.concat.apply([],a.c.map(function(e){return s("self"===e?a:e)})),a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var c=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=c.length?t(c.join("|"),!0):{exec:function(){return null}}}}r(e)}function f(e,t,a,i){function o(e,n){var t,a;for(t=0,a=n.c.length;a>t;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function c(e,n){return!a&&r(n.iR,e)}function s(e,n){var t=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?"":I.classPrefix,i='<span class="'+a,o=t?"":C;return i+=e+'">',i+n+o}function h(){var e,t,r,a;if(!E.k)return n(k);for(a="",t=0,E.lR.lastIndex=0,r=E.lR.exec(k);r;)a+=n(k.substring(t,r.index)),e=s(E,r),e?(B+=e[1],a+=p(e[0],n(r[0]))):a+=n(r[0]),t=E.lR.lastIndex,r=E.lR.exec(k);return a+n(k.substr(t))}function d(){var e="string"==typeof E.sL;if(e&&!L[E.sL])return n(k);var t=e?f(E.sL,k,!0,x[E.sL]):g(k,E.sL.length?E.sL:void 0);return E.r>0&&(B+=t.r),e&&(x[E.sL]=t.top),p(t.language,t.value,!1,!0)}function b(){y+=null!=E.sL?d():h(),k=""}function v(e){y+=e.cN?p(e.cN,"",!0):"",E=Object.create(e,{parent:{value:E}})}function m(e,n){if(k+=e,null==n)return b(),0;var t=o(n,E);if(t)return t.skip?k+=n:(t.eB&&(k+=n),b(),t.rB||t.eB||(k=n)),v(t,n),t.rB?0:n.length;var r=u(E,n);if(r){var a=E;a.skip?k+=n:(a.rE||a.eE||(k+=n),b(),a.eE&&(k=n));do E.cN&&(y+=C),E.skip||(B+=E.r),E=E.parent;while(E!==r.parent);return r.starts&&v(r.starts,""),a.rE?0:n.length}if(c(n,E))throw new Error('Illegal lexeme "'+n+'" for mode "'+(E.cN||"<unnamed>")+'"');return k+=n,n.length||1}var N=w(e);if(!N)throw new Error('Unknown language: "'+e+'"');l(N);var R,E=i||N,x={},y="";for(R=E;R!==N;R=R.parent)R.cN&&(y=p(R.cN,"",!0)+y);var k="",B=0;try{for(var M,j,O=0;;){if(E.t.lastIndex=O,M=E.t.exec(t),!M)break;j=m(t.substring(O,M.index),M[0]),O=M.index+j}for(m(t.substr(O)),R=E;R.parent;R=R.parent)R.cN&&(y+=C);return{r:B,value:y,language:e,top:E}}catch(T){if(T.message&&-1!==T.message.indexOf("Illegal"))return{r:0,value:n(t)};throw T}}function g(e,t){t=t||I.languages||x(L);var r={r:0,value:n(e)},a=r;return t.filter(w).forEach(function(n){var t=f(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function p(e){return I.tabReplace||I.useBR?e.replace(M,function(e,n){return I.useBR&&"\n"===e?"<br>":I.tabReplace?n.replace(/\t/g,I.tabReplace):""}):e}function h(e,n,t){var r=n?y[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function d(e){var n,t,r,o,s,l=i(e);a(l)||(I.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,s=n.textContent,r=l?f(l,s,!0):g(s),t=u(n),t.length&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","div"),o.innerHTML=r.value,r.value=c(t,u(o),s)),r.value=p(r.value),e.innerHTML=r.value,e.className=h(e.className,l,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function b(e){I=o(I,e)}function v(){if(!v.called){v.called=!0;var e=document.querySelectorAll("pre code");E.forEach.call(e,d)}}function m(){addEventListener("DOMContentLoaded",v,!1),addEventListener("load",v,!1)}function N(n,t){var r=L[n]=t(e);r.aliases&&r.aliases.forEach(function(e){y[e]=n})}function R(){return x(L)}function w(e){return e=(e||"").toLowerCase(),L[e]||L[y[e]]}var E=[],x=Object.keys,L={},y={},k=/^(no-?highlight|plain|text)$/i,B=/\blang(?:uage)?-([\w-]+)\b/i,M=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",I={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},j={"&":"&amp;","<":"&lt;",">":"&gt;"};return e.highlight=f,e.highlightAuto=g,e.fixMarkup=p,e.highlightBlock=d,e.configure=b,e.initHighlighting=v,e.initHighlightingOnLoad=m,e.registerLanguage=N,e.listLanguages=R,e.getLanguage=w,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e});hljs.registerLanguage("xml",function(s){var e="[A-Za-z0-9\\._:-]+",t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:e,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},s.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}});hljs.registerLanguage("lua",function(e){var t="\\[=*\\[",a="\\]=*\\]",r={b:t,e:a,c:["self"]},n=[e.C("--(?!"+t+")","$"),e.C("--"+t,a,{c:[r],r:10})];return{l:e.UIR,k:{literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstringmodule next pairs pcall print rawequal rawget rawset require select setfenvsetmetatable tonumber tostring type unpack xpcall arg selfcoroutine resume yield status wrap create running debug getupvaluedebug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenvio lines write close flush open output type read stderr stdin input stdout popen tmpfilemath, log, max, acos, huge, ldexp, pi, cos, tanh, pow, deg, tan, cosh, sinh, random, randomseed, frexp, ceil, floor, rad, abs, sqrt, modf, asin, min, mod, fmod, log10, atan2, exp, sin, atanos, exit, setlocale, date, getenv, difftime, remove, time, clock, tmpname, rename, execute, package, preload, loadlib, loaded, loaders, cpath, config path, seeallstring, sub, upper, len, gfind, rep, find, match, char, dump, gmatch, reverse, byte, format, gsub, lowertable, setn, insert, getn, foreachi, maxn, foreach, concat, sort, remove"},c:n.concat([{cN:"function",bK:"function",e:"\\)",c:[e.inherit(e.TM,{b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{cN:"params",b:"\\(",eW:!0,c:n}].concat(n)},e.CNM,e.ASM,e.QSM,{cN:"string",b:t,e:a,c:[r],r:5}])}});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:c,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}});hljs.registerLanguage("makefile",function(e){var a={cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]};return{aliases:["mk","mak"],c:[e.HCM,{b:/^\w+\s*\W*=/,rB:!0,r:0,starts:{e:/\s*\W*=/,eE:!0,starts:{e:/$/,r:0,c:[a]}}},{cN:"section",b:/^[\w]+:\s*$/},{cN:"meta",b:/^\.PHONY:/,e:/$/,k:{"meta-keyword":".PHONY"},l:/[\.\w]+/},{b:/^\t+/,e:/$/,r:0,c:[e.QSM,a]}]}});hljs.registerLanguage("nginx",function(e){var r={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},b={eW:!0,l:"[a-z/_]+",k:{literal:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,r],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[r]},{cN:"regexp",c:[e.BE,r],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},r]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s+{",rB:!0,e:"{",c:[{cN:"section",b:e.UIR}],r:0},{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"attribute",b:e.UIR,starts:b}],r:0}],i:"[^\\s\\}]"}});hljs.registerLanguage("scss",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",i={cN:"variable",b:"(\\$"+t+")\\b"},r={cN:"number",b:"#[0-9A-Fa-f]+"};({cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{eW:!0,eE:!0,c:[r,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"meta",b:"!important"}]}});return{cI:!0,i:"[=/|']",c:[e.CLCM,e.CBCM,{cN:"selector-id",b:"\\#[A-Za-z0-9_-]+",r:0},{cN:"selector-class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"selector-attr",b:"\\[",e:"\\]",i:"$"},{cN:"selector-tag",b:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",r:0},{b:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{b:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},i,{cN:"attribute",b:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",i:"[^\\s]"},{b:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{b:":",e:";",c:[i,r,e.CSSNM,e.QSM,e.ASM,{cN:"meta",b:"!important"}]},{b:"@",e:"[{;]",k:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",c:[i,e.QSM,e.ASM,r,e.CSSNM,{b:"\\s[A-Za-z0-9_.-]+",r:0}]}]}});hljs.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"section",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"quote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"^```w*s*$",e:"^```s*$"},{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"string",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"symbol",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:/^\[[^\n]+\]:/,rB:!0,c:[{cN:"symbol",b:/\[/,e:/\]/,eB:!0,eE:!0},{cN:"link",b:/:\s*/,e:/$/,eB:!0}]}]}});hljs.registerLanguage("diff",function(e){return{aliases:["patch"],c:[{cN:"meta",r:10,v:[{b:/^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"comment",v:[{b:/Index: /,e:/$/},{b:/={3,}/,e:/$/},{b:/^\-{3}/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+{3}/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"addition",b:"^\\!",e:"$"}]}});hljs.registerLanguage("php",function(e){var c={b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},i={cN:"meta",b:/<\?(php)?|\?>/},t={cN:"string",c:[e.BE,i],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},a={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.HCM,e.C("//","$",{c:[i]}),e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},i,{cN:"keyword",b:/\$this\b/},c,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,t,a]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},t,a]}});hljs.registerLanguage("bash",function(e){var t={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)}/}]},s={cN:"string",b:/"/,e:/"/,c:[e.BE,t,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},a={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\._]+/,k:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"meta",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,s,a,t]}});hljs.registerLanguage("json",function(e){var i={literal:"true false null"},n=[e.QSM,e.CNM],r={e:",",eW:!0,eE:!0,c:n,k:i},t={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(r,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(r)],i:"\\S"};return n.splice(n.length,0,t,c),{c:n,k:i,i:"\\S"}});hljs.registerLanguage("perl",function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t},s={b:"->{",e:"}"},n={v:[{b:/\$\d/},{b:/[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},{b:/[\$%@][^\s\w{]/,r:0}]},i=[e.BE,r,n],o=[n,e.HCM,e.C("^\\=\\w","\\=cut",{eW:!0}),s,{cN:"string",c:i,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[e.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[e.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"function",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",eE:!0,r:5,c:[e.TM]},{b:"-\\w\\b",r:0},{b:"^__DATA__$",e:"^__END__$",sL:"mojolicious",c:[{b:"^@@.*",e:"$",cN:"comment"}]}];return r.c=o,s.c=o,{aliases:["pl","pm"],l:/[\w\.]+/,k:t,c:o}});hljs.registerLanguage("apache",function(e){var r={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"section",b:"</?",e:">"},{cN:"attribute",b:/\w+/,r:0,k:{nomarkup:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"meta",b:"\\s\\[",e:"\\]$"},{cN:"variable",b:"[\\$%]\\{",e:"\\}",c:["self",r]},r,e.QSM]}}],i:/\S/}});hljs.registerLanguage("typescript",function(e){var r={keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"};return{aliases:["ts"],k:r,c:[{cN:"meta",b:/^\s*['"]use strict['"]/},e.ASM,e.QSM,{cN:"string",b:"`",e:"`",c:[e.BE,{cN:"subst",b:"\\$\\{",e:"\\}"}]},e.CLCM,e.CBCM,{cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+e.IR+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:e.IR},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:r,c:["self",e.CLCM,e.CBCM]}]}]}],r:0},{cN:"function",b:"function",e:/[\{;]/,eE:!0,k:r,c:["self",e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:r,c:[e.CLCM,e.CBCM],i:/["'\(]/}],i:/%/,r:0},{bK:"constructor",e:/\{/,eE:!0,c:["self",{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:r,c:[e.CLCM,e.CBCM],i:/["'\(]/}]},{b:/module\./,k:{built_in:"module"},r:0},{bK:"module",e:/\{/,eE:!0},{bK:"interface",e:/\{/,eE:!0,k:"interface extends"},{b:/\$[(.]/},{b:"\\."+e.IR,r:0},{cN:"meta",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("ruby",function(e){var b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},c={cN:"doctag",b:"@[A-Za-z]+"},a={b:"#<",e:">"},s=[e.C("#","$",{c:[c]}),e.C("^\\=begin","^\\=end",{c:[c],r:10}),e.C("^__END__","\\n$")],n={cN:"subst",b:"#\\{",e:"}",k:r},t={cN:"string",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{b:/<<(-?)\w+$/,e:/^\s*\w+$/}]},i={cN:"params",b:"\\(",e:"\\)",endsParent:!0,k:r},d=[t,a,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{b:"<\\s*",c:[{b:"("+e.IR+"::)?"+e.IR}]}].concat(s)},{cN:"function",bK:"def",e:"$|;",c:[e.inherit(e.TM,{b:b}),i].concat(s)},{b:e.IR+"::"},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":(?!\\s)",c:[t,{b:b}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{cN:"params",b:/\|/,e:/\|/,k:r},{b:"("+e.RSR+"|unless)\\s*",c:[a,{cN:"regexp",c:[e.BE,n],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(s),r:0}].concat(s);n.c=d,i.c=d;var l="[>?]>",o="[\\w#]+\\(\\w+\\):\\d+:\\d+>",u="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",w=[{b:/^\s*=>/,starts:{e:"$",c:d}},{cN:"meta",b:"^("+l+"|"+o+"|"+u+")",starts:{e:"$",c:d}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,i:/\/\*/,c:s.concat(w).concat(d)}});hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,c,a,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:s}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});hljs.registerLanguage("cpp",function(t){var e={cN:"keyword",b:"\\b[a-z\\d_]*_t\\b"},r={cN:"string",v:[{b:'(u8?|U)?L?"',e:'"',i:"\\n",c:[t.BE]},{b:'(u8?|U)?R"',e:'"',c:[t.BE]},{b:"'\\\\?.",e:"'",i:"."}]},s={cN:"number",v:[{b:"\\b(0b[01']+)"},{b:"\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{b:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],r:0},i={cN:"meta",b:/#\s*[a-z]+\b/,e:/$/,k:{"meta-keyword":"if else elif endif define undef warning error line pragma ifdef ifndef include"},c:[{b:/\\\n/,r:0},t.inherit(r,{cN:"meta-string"}),{cN:"meta-string",b:/<[^\n>]*>/,e:/$/,i:"\\n"},t.CLCM,t.CBCM]},a=t.IR+"\\s*\\(",c={keyword:"int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return",built_in:"std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",literal:"true false nullptr NULL"},n=[e,t.CLCM,t.CBCM,s,r];return{aliases:["c","cc","h","c++","h++","hpp"],k:c,i:"</",c:n.concat([i,{b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:c,c:["self",e]},{b:t.IR+"::",k:c},{v:[{b:/=/,e:/;/},{b:/\(/,e:/\)/},{bK:"new throw return else",e:/;/}],k:c,c:n.concat([{b:/\(/,e:/\)/,k:c,c:n.concat(["self"]),r:0}]),r:0},{cN:"function",b:"("+t.IR+"[\\*&\\s]+)+"+a,rB:!0,e:/[{;=]/,eE:!0,k:c,i:/[^\w\s\*&]/,c:[{b:a,rB:!0,c:[t.TM],r:0},{cN:"params",b:/\(/,e:/\)/,k:c,r:0,c:[t.CLCM,t.CBCM,r,s,e]},t.CLCM,t.CBCM,i]}]),exports:{preprocessor:i,strings:r,k:c}}});hljs.registerLanguage("objectivec",function(e){var t={cN:"built_in",b:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},_={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},i=/[a-zA-Z@][a-zA-Z0-9_]*/,n="@interface @class @protocol @implementation";return{aliases:["mm","objc","obj-c"],k:_,l:i,i:"</",c:[t,e.CLCM,e.CBCM,e.CNM,e.QSM,{cN:"string",v:[{b:'@"',e:'"',i:"\\n",c:[e.BE]},{b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"}]},{cN:"meta",b:"#",e:"$",c:[{cN:"meta-string",v:[{b:'"',e:'"'},{b:"<",e:">"}]}]},{cN:"class",b:"("+n.split(" ").join("|")+")\\b",e:"({|$)",eE:!0,k:n,l:i,c:[e.UTM]},{b:"\\."+e.UIR,r:0}]}});hljs.registerLanguage("http",function(e){var t="HTTP/[0-9\\.]+";return{aliases:["https"],i:"\\S",c:[{b:"^"+t,e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{b:"^[A-Z]+ (.*?) "+t+"$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0},{b:t},{cN:"keyword",b:"[A-Z]+"}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{e:"$",r:0}},{b:"\\n\\n",starts:{sL:[],eW:!0}}]}});hljs.registerLanguage("python",function(e){var r={keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},b={cN:"meta",b:/^(>>>|\.\.\.) /},c={cN:"subst",b:/\{/,e:/\}/,k:r,i:/#/},a={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[b],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[b],r:10},{b:/(fr|rf|f)'''/,e:/'''/,c:[b,c]},{b:/(fr|rf|f)"""/,e:/"""/,c:[b,c]},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},{b:/(fr|rf|f)'/,e:/'/,c:[c]},{b:/(fr|rf|f)"/,e:/"/,c:[c]},e.ASM,e.QSM]},s={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},i={cN:"params",b:/\(/,e:/\)/,c:["self",b,s,a]};return c.c=[a,s,b],{aliases:["py","gyp"],k:r,i:/(<\/|->|\?)|=>/,c:[b,s,a,e.HCM,{v:[{cN:"function",bK:"def"},{cN:"class",bK:"class"}],e:/:/,i:/[${=;\n,]/,c:[e.UTM,i,{b:/->/,eW:!0,k:"None"}]},{cN:"meta",b:/^[\t ]*@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("ini",function(e){var b={cN:"string",c:[e.BE],v:[{b:"'''",e:"'''",r:10},{b:'"""',e:'"""',r:10},{b:'"',e:'"'},{b:"'",e:"'"}]};return{aliases:["toml"],cI:!0,i:/\S/,c:[e.C(";","$"),e.HCM,{cN:"section",b:/^\s*\[+/,e:/\]+/},{b:/^[a-z0-9\[\]_-]+\s*=\s*/,e:"$",rB:!0,c:[{cN:"attr",b:/[a-z0-9\[\]_-]+/},{b:/=/,eW:!0,r:0,c:[{cN:"literal",b:/\bon|off|true|false|yes|no\b/},{cN:"variable",v:[{b:/\$[\w\d"][\w\d_]*/},{b:/\$\{(.*?)}/}]},b,{cN:"number",b:/([\+\-]+)?[\d]+_[\d_]+/},e.NM]}]}]}});hljs.registerLanguage("java",function(e){var a="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",t=a+"(<"+a+"(\\s*,\\s*"+a+")*>)?",r="false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",s="\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",c={cN:"number",b:s,r:0};return{aliases:["jsp"],k:r,i:/<\/|#/,c:[e.C("/\\*\\*","\\*/",{r:0,c:[{b:/\w+@/,r:0},{cN:"doctag",b:"@[A-Za-z]+"}]}),e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:"class",bK:"class interface",e:/[{;=]/,eE:!0,k:"class interface",i:/[:"\[\]]/,c:[{bK:"extends implements"},e.UTM]},{bK:"new throw return else",r:0},{cN:"function",b:"("+t+"\\s+)+"+e.UIR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:r,c:[{b:e.UIR+"\\s*\\(",rB:!0,r:0,c:[e.UTM]},{cN:"params",b:/\(/,e:/\)/,k:r,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},c,{cN:"meta",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("dos",function(e){var r=e.C(/^\s*@?rem\b/,/$/,{r:10}),t={cN:"symbol",b:"^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",r:0};return{aliases:["bat","cmd"],cI:!0,i:/\/\*/,k:{keyword:"if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",built_in:"prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del"},c:[{cN:"variable",b:/%%[^ ]|%[^ ]+?%|![^ ]+?!/},{cN:"function",b:t.b,e:"goto:eof",c:[e.inherit(e.TM,{b:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),r]},{cN:"number",b:"\\b\\d+",r:0},r]}});hljs.registerLanguage("coffeescript",function(e){var c={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},n="[A-Za-z$_][0-9A-Za-z$_]*",r={cN:"subst",b:/#\{/,e:/}/,k:c},i=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,r]},{b:/"/,e:/"/,c:[e.BE,r]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[r,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{b:"@"+n},{sL:"javascript",eB:!0,eE:!0,v:[{b:"```",e:"```"},{b:"`",e:"`"}]}];r.c=i;var s=e.inherit(e.TM,{b:n}),t="(\\(.*\\))?\\s*\\B[-=]>",o={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:c,c:["self"].concat(i)}]};return{aliases:["coffee","cson","iced"],k:c,i:/\/\*/,c:i.concat([e.C("###","###"),e.HCM,{cN:"function",b:"^\\s*"+n+"\\s*=\\s*"+t,e:"[-=]>",rB:!0,c:[s,o]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:t,e:"[-=]>",rB:!0,c:[o]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[s]},s]},{b:n+":",e:":",rB:!0,rE:!0,r:0}])}});hljs.registerLanguage("less",function(e){var r="[\\w-]+",t="("+r+"|@{"+r+"})",a=[],c=[],s=function(e){return{cN:"string",b:"~?"+e+".*?"+e}},b=function(e,r,t){return{cN:e,b:r,r:t}},n={b:"\\(",e:"\\)",c:c,r:0};c.push(e.CLCM,e.CBCM,s("'"),s('"'),e.CSSNM,{b:"(url|data-uri)\\(",starts:{cN:"string",e:"[\\)\\n]",eE:!0}},b("number","#[0-9A-Fa-f]+\\b"),n,b("variable","@@?"+r,10),b("variable","@{"+r+"}"),b("built_in","~?`[^`]*?`"),{cN:"attribute",b:r+"\\s*:",e:":",rB:!0,eE:!0},{cN:"meta",b:"!important"});var i=c.concat({b:"{",e:"}",c:a}),o={bK:"when",eW:!0,c:[{bK:"and not"}].concat(c)},u={b:t+"\\s*:",rB:!0,e:"[;}]",r:0,c:[{cN:"attribute",b:t,e:":",eE:!0,starts:{eW:!0,i:"[<=$]",r:0,c:c}}]},l={cN:"keyword",b:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{e:"[;{}]",rE:!0,c:c,r:0}},C={cN:"variable",v:[{b:"@"+r+"\\s*:",r:15},{b:"@"+r}],starts:{e:"[;}]",rE:!0,c:i}},p={v:[{b:"[\\.#:&\\[>]",e:"[;{}]"},{b:t,e:"{"}],rB:!0,rE:!0,i:"[<='$\"]",r:0,c:[e.CLCM,e.CBCM,o,b("keyword","all\\b"),b("variable","@{"+r+"}"),b("selector-tag",t+"%?",0),b("selector-id","#"+t),b("selector-class","\\."+t,0),b("selector-tag","&",0),{cN:"selector-attr",b:"\\[",e:"\\]"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"\\(",e:"\\)",c:i},{b:"!important"}]};return a.push(e.CLCM,e.CBCM,l,C,u,p),{cI:!0,i:"[=>'/<($\"]",c:a}});hljs.registerLanguage("cs",function(e){var i={keyword:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while nameof add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",literal:"null false true"},r={cN:"string",b:'@"',e:'"',c:[{b:'""'}]},t=e.inherit(r,{i:/\n/}),a={cN:"subst",b:"{",e:"}",k:i},n=e.inherit(a,{i:/\n/}),c={cN:"string",b:/\$"/,e:'"',i:/\n/,c:[{b:"{{"},{b:"}}"},e.BE,n]},s={cN:"string",b:/\$@"/,e:'"',c:[{b:"{{"},{b:"}}"},{b:'""'},a]},o=e.inherit(s,{i:/\n/,c:[{b:"{{"},{b:"}}"},{b:'""'},n]});a.c=[s,c,r,e.ASM,e.QSM,e.CNM,e.CBCM],n.c=[o,c,t,e.ASM,e.QSM,e.CNM,e.inherit(e.CBCM,{i:/\n/})];var l={v:[s,c,r,e.ASM,e.QSM]},b=e.IR+"(<"+e.IR+"(\\s*,\\s*"+e.IR+")*>)?(\\[\\])?";return{aliases:["csharp"],k:i,i:/::/,c:[e.C("///","$",{rB:!0,c:[{cN:"doctag",v:[{b:"///",r:0},{b:"<!--|-->"},{b:"</?",e:">"}]}]}),e.CLCM,e.CBCM,{cN:"meta",b:"#",e:"$",k:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},l,e.CNM,{bK:"class interface",e:/[{;=]/,i:/[^\s:]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"namespace",e:/[{;=]/,i:/[^\s:]/,c:[e.inherit(e.TM,{b:"[a-zA-Z](\\.?\\w)*"}),e.CLCM,e.CBCM]},{bK:"new return throw await",r:0},{cN:"function",b:"("+b+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:i,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM],r:0},{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,k:i,r:0,c:[l,e.CNM,e.CBCM]},e.CLCM,e.CBCM]}]}});hljs.registerLanguage("vbscript",function(e){return{aliases:["vbs"],cI:!0,k:{keyword:"call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",built_in:"lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err",literal:"true false null nothing empty"},i:"//",c:[e.inherit(e.QSM,{c:[{b:'""'}]}),e.C(/'/,/$/,{r:0}),e.CNM]}});hljs.registerLanguage("sql",function(e){var t=e.C("--","$");return{cI:!0,i:/[<>{}*#]/,c:[{bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",e:/;/,eW:!0,l:/[\w\.]+/,k:{keyword:"abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}});hljs.registerLanguage("vim",function(e){return{l:/[!#@\w]+/,k:{keyword:"N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",built_in:"synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp"},i:/;/,c:[e.NM,e.ASM,{cN:"string",b:/"(\\"|\n\\|[^"\n])*"/},e.C('"',"$"),{cN:"variable",b:/[bwtglsav]:[\w\d_]*/},{cN:"function",bK:"function function!",e:"$",r:0,c:[e.TM,{cN:"params",b:"\\(",e:"\\)"}]},{cN:"symbol",b:/<[\w-]+>/}]}});hljs.registerLanguage("yaml",function(e){var b="true false yes no null",a="^[ \\-]*",r="[a-zA-Z_][\\w\\-]*",t={cN:"attr",v:[{b:a+r+":"},{b:a+'"'+r+'":'},{b:a+"'"+r+"':"}]},c={cN:"template-variable",v:[{b:"{{",e:"}}"},{b:"%{",e:"}"}]},l={cN:"string",r:0,v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/\S+/}],c:[e.BE,c]};return{cI:!0,aliases:["yml","YAML","yaml"],c:[t,{cN:"meta",b:"^---s*$",r:10},{cN:"string",b:"[\\|>] *$",rE:!0,c:l.c,e:t.v[0].b},{b:"<%[%=-]?",e:"[%-]?%>",sL:"ruby",eB:!0,eE:!0,r:0},{cN:"type",b:"!!"+e.UIR},{cN:"meta",b:"&"+e.UIR+"$"},{cN:"meta",b:"\\*"+e.UIR+"$"},{cN:"bullet",b:"^ *-",r:0},e.HCM,{bK:b,k:{literal:b}},e.CNM,l]}});


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/lib/jquery.min.js ---- */


!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e,t){t=t||ne;var n=t.createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}function r(e){var t=!!e&&"length"in e&&e.length,n=ge.type(e);return"function"!==n&&!ge.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function i(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function o(e,t,n){return ge.isFunction(t)?ge.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?ge.grep(e,function(e){return e===t!==n}):"string"!=typeof t?ge.grep(e,function(e){return se.call(t,e)>-1!==n}):ke.test(t)?ge.filter(t,e,n):(t=ge.filter(t,e),ge.grep(e,function(e){return se.call(t,e)>-1!==n&&1===e.nodeType}))}function a(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function s(e){var t={};return ge.each(e.match(qe)||[],function(e,n){t[n]=!0}),t}function u(e){return e}function l(e){throw e}function c(e,t,n,r){var i;try{e&&ge.isFunction(i=e.promise)?i.call(e).done(t).fail(n):e&&ge.isFunction(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}function f(){ne.removeEventListener("DOMContentLoaded",f),e.removeEventListener("load",f),ge.ready()}function p(){this.expando=ge.expando+p.uid++}function d(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Me.test(e)?JSON.parse(e):e)}function h(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Ie,"-$&").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n=d(n)}catch(e){}Re.set(e,t,n)}else n=void 0;return n}function g(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return ge.css(e,t,"")},u=s(),l=n&&n[3]||(ge.cssNumber[t]?"":"px"),c=(ge.cssNumber[t]||"px"!==l&&+u)&&$e.exec(ge.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do o=o||".5",c/=o,ge.style(e,t,c+l);while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function v(e){var t,n=e.ownerDocument,r=e.nodeName,i=Xe[r];return i?i:(t=n.body.appendChild(n.createElement(r)),i=ge.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),Xe[r]=i,i)}function y(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)r=e[o],r.style&&(n=r.style.display,t?("none"===n&&(i[o]=Pe.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&_e(r)&&(i[o]=v(r))):"none"!==n&&(i[o]="none",Pe.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}function m(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&i(e,t)?ge.merge([e],n):n}function x(e,t){for(var n=0,r=e.length;n<r;n++)Pe.set(e[n],"globalEval",!t||Pe.get(t[n],"globalEval"))}function b(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if(o=e[d],o||0===o)if("object"===ge.type(o))ge.merge(p,o.nodeType?[o]:o);else if(Qe.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(Ve.exec(o)||["",""])[1].toLowerCase(),u=Ye[s]||Ye._default,a.innerHTML=u[1]+ge.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild;ge.merge(p,a.childNodes),a=f.firstChild,a.textContent=""}else p.push(t.createTextNode(o));for(f.textContent="",d=0;o=p[d++];)if(r&&ge.inArray(o,r)>-1)i&&i.push(o);else if(l=ge.contains(o.ownerDocument,o),a=m(f.appendChild(o),"script"),l&&x(a),n)for(c=0;o=a[c++];)Ge.test(o.type||"")&&n.push(o);return f}function w(){return!0}function T(){return!1}function C(){try{return ne.activeElement}catch(e){}}function E(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)E(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),i===!1)i=T;else if(!i)return e;return 1===o&&(a=i,i=function(e){return ge().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=ge.guid++)),e.each(function(){ge.event.add(this,t,i,r,n)})}function k(e,t){return i(e,"table")&&i(11!==t.nodeType?t:t.firstChild,"tr")?ge(">tbody",e)[0]||e:e}function S(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function N(e){var t=it.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function D(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Pe.hasData(e)&&(o=Pe.access(e),a=Pe.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)ge.event.add(t,i,l[i][n])}Re.hasData(e)&&(s=Re.access(e),u=ge.extend({},s),Re.set(t,u))}}function j(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ue.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function A(e,t,r,i){t=oe.apply([],t);var o,a,s,u,l,c,f=0,p=e.length,d=p-1,h=t[0],g=ge.isFunction(h);if(g||p>1&&"string"==typeof h&&!de.checkClone&&rt.test(h))return e.each(function(n){var o=e.eq(n);g&&(t[0]=h.call(this,n,o.html())),A(o,t,r,i)});if(p&&(o=b(t,e[0].ownerDocument,!1,e,i),a=o.firstChild,1===o.childNodes.length&&(o=a),a||i)){for(s=ge.map(m(o,"script"),S),u=s.length;f<p;f++)l=o,f!==d&&(l=ge.clone(l,!0,!0),u&&ge.merge(s,m(l,"script"))),r.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,ge.map(s,N),f=0;f<u;f++)l=s[f],Ge.test(l.type||"")&&!Pe.access(l,"globalEval")&&ge.contains(c,l)&&(l.src?ge._evalUrl&&ge._evalUrl(l.src):n(l.textContent.replace(ot,""),c))}return e}function q(e,t,n){for(var r,i=t?ge.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ge.cleanData(m(r)),r.parentNode&&(n&&ge.contains(r.ownerDocument,r)&&x(m(r,"script")),r.parentNode.removeChild(r));return e}function L(e,t,n){var r,i,o,a,s=e.style;return n=n||ut(e),n&&(a=n.getPropertyValue(t)||n[t],""!==a||ge.contains(e.ownerDocument,e)||(a=ge.style(e,t)),!de.pixelMarginRight()&&st.test(a)&&at.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function H(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function F(e){if(e in ht)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=dt.length;n--;)if(e=dt[n]+t,e in ht)return e}function O(e){var t=ge.cssProps[e];return t||(t=ge.cssProps[e]=F(e)||e),t}function P(e,t,n){var r=$e.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function R(e,t,n,r,i){var o,a=0;for(o=n===(r?"border":"content")?4:"width"===t?1:0;o<4;o+=2)"margin"===n&&(a+=ge.css(e,n+Be[o],!0,i)),r?("content"===n&&(a-=ge.css(e,"padding"+Be[o],!0,i)),"margin"!==n&&(a-=ge.css(e,"border"+Be[o]+"Width",!0,i))):(a+=ge.css(e,"padding"+Be[o],!0,i),"padding"!==n&&(a+=ge.css(e,"border"+Be[o]+"Width",!0,i)));return a}function M(e,t,n){var r,i=ut(e),o=L(e,t,i),a="border-box"===ge.css(e,"boxSizing",!1,i);return st.test(o)?o:(r=a&&(de.boxSizingReliable()||o===e.style[t]),"auto"===o&&(o=e["offset"+t[0].toUpperCase()+t.slice(1)]),o=parseFloat(o)||0,o+R(e,t,n||(a?"border":"content"),r,i)+"px")}function I(e,t,n,r,i){return new I.prototype.init(e,t,n,r,i)}function W(){vt&&(ne.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(W):e.setTimeout(W,ge.fx.interval),ge.fx.tick())}function $(){return e.setTimeout(function(){gt=void 0}),gt=ge.now()}function B(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=Be[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function _(e,t,n){for(var r,i=(U.tweeners[t]||[]).concat(U.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function z(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&_e(e),v=Pe.get(e,"fxshow");n.queue||(a=ge._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ge.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],yt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ge.style(e,r)}if(u=!ge.isEmptyObject(t),u||!ge.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],l=v&&v.display,null==l&&(l=Pe.get(e,"display")),c=ge.css(e,"display"),"none"===c&&(l?c=l:(y([e],!0),l=e.style.display||l,c=ge.css(e,"display"),y([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ge.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(v?"hidden"in v&&(g=v.hidden):v=Pe.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&y([e],!0),p.done(function(){g||y([e]),Pe.remove(e,"fxshow");for(r in d)ge.style(e,r,d[r])})),u=_(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}}function X(e,t){var n,r,i,o,a;for(n in e)if(r=ge.camelCase(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=ge.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function U(e,t,n){var r,i,o=0,a=U.prefilters.length,s=ge.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=gt||$(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&u?n:(u||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:ge.extend({},t),opts:ge.extend(!0,{specialEasing:{},easing:ge.easing._default},n),originalProperties:t,originalOptions:n,startTime:gt||$(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ge.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(X(c,l.opts.specialEasing);o<a;o++)if(r=U.prefilters[o].call(l,e,c,l.opts))return ge.isFunction(r.stop)&&(ge._queueHooks(l.elem,l.opts.queue).stop=ge.proxy(r.stop,r)),r;return ge.map(c,_,l),ge.isFunction(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ge.fx.timer(ge.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}function V(e){var t=e.match(qe)||[];return t.join(" ")}function G(e){return e.getAttribute&&e.getAttribute("class")||""}function Y(e,t,n,r){var i;if(Array.isArray(t))ge.each(t,function(t,i){n||Dt.test(e)?r(e,i):Y(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==ge.type(t))r(e,t);else for(i in t)Y(e+"["+i+"]",t[i],n,r)}function Q(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(qe)||[];if(ge.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function J(e,t,n,r){function i(s){var u;return o[s]=!0,ge.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===Wt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function K(e,t){var n,r,i=ge.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ge.extend(!0,e,r),e}function Z(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function ee(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}var te=[],ne=e.document,re=Object.getPrototypeOf,ie=te.slice,oe=te.concat,ae=te.push,se=te.indexOf,ue={},le=ue.toString,ce=ue.hasOwnProperty,fe=ce.toString,pe=fe.call(Object),de={},he="3.2.1",ge=function(e,t){return new ge.fn.init(e,t)},ve=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ye=/^-ms-/,me=/-([a-z])/g,xe=function(e,t){return t.toUpperCase()};ge.fn=ge.prototype={jquery:he,constructor:ge,length:0,toArray:function(){return ie.call(this)},get:function(e){return null==e?ie.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ge.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ge.each(this,e)},map:function(e){return this.pushStack(ge.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ie.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:ae,sort:te.sort,splice:te.splice},ge.extend=ge.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||ge.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(ge.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&ge.isPlainObject(n)?n:{},a[t]=ge.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ge.extend({expando:"jQuery"+(he+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===ge.type(e)},isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=ge.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==le.call(e)||(t=re(e))&&(n=ce.call(t,"constructor")&&t.constructor,"function"!=typeof n||fe.call(n)!==pe))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ue[le.call(e)]||"object":typeof e},globalEval:function(e){n(e)},camelCase:function(e){return e.replace(ye,"ms-").replace(me,xe)},each:function(e,t){var n,i=0;if(r(e))for(n=e.length;i<n&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(ve,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(r(Object(e))?ge.merge(n,"string"==typeof e?[e]:e):ae.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,n){var i,o,a=0,s=[];if(r(e))for(i=e.length;a<i;a++)o=t(e[a],a,n),null!=o&&s.push(o);else for(a in e)o=t(e[a],a,n),null!=o&&s.push(o);return oe.apply([],s)},guid:1,proxy:function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),ge.isFunction(e))return r=ie.call(arguments,2),i=function(){return e.apply(t||this,r.concat(ie.call(arguments)))},i.guid=e.guid=e.guid||ge.guid++,i},now:Date.now,support:de}),"function"==typeof Symbol&&(ge.fn[Symbol.iterator]=te[Symbol.iterator]),ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ue["[object "+t+"]"]=t.toLowerCase()});var be=function(e){function t(e,t,n,r){var i,o,a,s,u,l,c,p=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!r&&((t?t.ownerDocument||t:$)!==H&&L(t),t=t||H,O)){if(11!==h&&(u=ye.exec(e)))if(i=u[1]){if(9===h){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(p&&(a=p.getElementById(i))&&I(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return K.apply(n,t.getElementsByTagName(e)),n;if((i=u[3])&&T.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(i)),n}if(T.qsa&&!U[e+" "]&&(!P||!P.test(e))){if(1!==h)p=t,c=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(we,Te):t.setAttribute("id",s=W),l=S(e),o=l.length;o--;)l[o]="#"+s+" "+d(l[o]);c=l.join(","),p=me.test(e)&&f(t.parentNode)||t}if(c)try{return K.apply(n,p.querySelectorAll(c)),n}catch(e){}finally{s===W&&t.removeAttribute("id")}}}return D(e.replace(se,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>C.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[W]=!0,e}function i(e){var t=H.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)C.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return function(t){return"form"in t?t.parentNode&&t.disabled===!1?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Ee(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function p(){}function d(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=_++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[B,s];if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(f=t[W]||(t[W]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===B&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function g(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function v(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function y(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function m(e,t,n,i,o,a){return i&&!i[W]&&(i=m(i)),o&&!o[W]&&(o=m(o,a)),r(function(r,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=r||v(t||"*",s.nodeType?[s]:s,[]),m=!e||!r&&t?g:y(g,p,e,s,u),x=n?o||(r?e:h||i)?[]:a:m;if(n&&n(m,x,s,u),i)for(l=y(x,d),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(m[d[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(m[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else x=y(x===a?x.splice(h,x.length):x),o?o(null,a,x,u):K.apply(a,x)})}function x(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,u=h(function(e){return e===t},a,!0),l=h(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];s<i;s++)if(n=C.relative[e[s].type])c=[h(g(c),n)];else{if(n=C.filter[e[s].type].apply(null,e[s].matches),n[W]){for(r=++s;r<i&&!C.relative[e[r].type];r++);return m(s>1&&g(c),s>1&&d(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,s<r&&x(e.slice(s,r)),r<i&&x(e=e.slice(r)),r<i&&d(e))}c.push(n)}return g(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,d=0,h="0",g=r&&[],v=[],m=j,x=r||o&&C.find.TAG("*",l),b=B+=null==m?1:Math.random()||.1,w=x.length;for(l&&(j=a===H||a||l);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0,a||c.ownerDocument===H||(L(c),s=!O);p=e[f++];)if(p(c,a||H,s)){u.push(c);break}l&&(B=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,v,a,s);if(r){if(d>0)for(;h--;)g[h]||v[h]||(v[h]=Q.call(u));v=y(v)}K.apply(u,v),l&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(B=b,j=m),g};return i?r(a):a}var w,T,C,E,k,S,N,D,j,A,q,L,H,F,O,P,R,M,I,W="sizzle"+1*new Date,$=e.document,B=0,_=0,z=n(),X=n(),U=n(),V=function(e,t){return e===t&&(q=!0),0},G={}.hasOwnProperty,Y=[],Q=Y.pop,J=Y.push,K=Y.push,Z=Y.slice,ee=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),de={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,me=/[+~]/,xe=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),be=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},we=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Te=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},Ce=function(){L()},Ee=h(function(e){return e.disabled===!0&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{K.apply(Y=Z.call($.childNodes),$.childNodes),Y[$.childNodes.length].nodeType}catch(e){K={apply:Y.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}T=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:$;return r!==H&&9===r.nodeType&&r.documentElement?(H=r,F=H.documentElement,O=!k(H),$!==H&&(n=H.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),T.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),T.getElementsByTagName=i(function(e){return e.appendChild(H.createComment("")),!e.getElementsByTagName("*").length}),T.getElementsByClassName=ve.test(H.getElementsByClassName),T.getById=i(function(e){return F.appendChild(e).id=W,!H.getElementsByName||!H.getElementsByName(W).length}),T.getById?(C.filter.ID=function(e){var t=e.replace(xe,be);return function(e){return e.getAttribute("id")===t}},C.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n=t.getElementById(e);return n?[n]:[]}}):(C.filter.ID=function(e){var t=e.replace(xe,be);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},C.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n,r,i,o=t.getElementById(e);if(o){if(n=o.getAttributeNode("id"),n&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if(n=o.getAttributeNode("id"),n&&n.value===e)return[o]}return[]}}),C.find.TAG=T.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):T.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},C.find.CLASS=T.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&O)return t.getElementsByClassName(e)},R=[],P=[],(T.qsa=ve.test(H.querySelectorAll))&&(i(function(e){F.appendChild(e).innerHTML="<a id='"+W+"'></a><select id='"+W+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+W+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+W+"+*").length||P.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=H.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&P.push(":enabled",":disabled"),F.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(T.matchesSelector=ve.test(M=F.matches||F.webkitMatchesSelector||F.mozMatchesSelector||F.oMatchesSelector||F.msMatchesSelector))&&i(function(e){T.disconnectedMatch=M.call(e,"*"),M.call(e,"[s!='']:x"),R.push("!=",oe)}),P=P.length&&new RegExp(P.join("|")),R=R.length&&new RegExp(R.join("|")),t=ve.test(F.compareDocumentPosition),I=t||ve.test(F.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},V=t?function(e,t){if(e===t)return q=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!T.sortDetached&&t.compareDocumentPosition(e)===n?e===H||e.ownerDocument===$&&I($,e)?-1:t===H||t.ownerDocument===$&&I($,t)?1:A?ee(A,e)-ee(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return q=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t];if(!i||!o)return e===H?-1:t===H?1:i?-1:o?1:A?ee(A,e)-ee(A,t):0;if(i===o)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;return r?a(s[r],u[r]):s[r]===$?-1:u[r]===$?1:0},H):H},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==H&&L(e),n=n.replace(ce,"='$1']"),T.matchesSelector&&O&&!U[n+" "]&&(!R||!R.test(n))&&(!P||!P.test(n)))try{var r=M.call(e,n);if(r||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,H,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==H&&L(e),I(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==H&&L(e);var n=C.attrHandle[t.toLowerCase()],r=n&&G.call(C.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==r?r:T.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(we,Te)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(q=!T.detectDuplicates,A=!T.sortStable&&e.slice(0),e.sort(V),q){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return A=null,e},E=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=E(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=E(t);return n},C=t.selectors={cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xe,be),e[3]=(e[3]||e[4]||e[5]||"").replace(xe,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=S(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xe,be).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ae," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,y=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(v){if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&m){for(p=v,f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===B&&l[1],x=d&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(x=d=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){c[e]=[B,d,x];break}}else if(m&&(p=t,f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===B&&l[1],x=d),x===!1)for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==y:1!==p.nodeType)||!++x||(m&&(f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),c[e]=[B,x]),p!==t)););return x-=i,x===r||x%r===0&&x/r>=0}}},PSEUDO:function(e,n){var i,o=C.pseudos[e]||C.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[W]?o(n):o.length>1?(i=[e,e,"",n],C.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=N(e.replace(se,"$1"));return i[W]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(xe,be),function(t){return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}}),lang:r(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xe,be).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===F},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:l(!1),disabled:l(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[n<0?n+t:n]}),even:c(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},C.pseudos.nth=C.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=s(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=u(w);return p.prototype=C.filters=C.pseudos,C.setFilters=new p,S=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=X[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=C.preFilter;s;){r&&!(i=ue.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=le.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")}),s=s.slice(r.length));for(a in C.filter)!(i=de[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):X(e,u).slice(0)},N=t.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=S(e)),n=t.length;n--;)o=x(t[n]),o[W]?r.push(o):i.push(o);o=U(e,b(i,r)),o.selector=e}return o},D=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&S(e=l.selector||e);if(n=n||[],1===c.length){if(o=c[0]=c[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&O&&C.relative[o[1].type]){if(t=(C.find.ID(a.matches[0].replace(xe,be),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=de.needsContext.test(e)?0:o.length;i--&&(a=o[i],!C.relative[s=a.type]);)if((u=C.find[s])&&(r=u(a.matches[0].replace(xe,be),me.test(o[0].type)&&f(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&d(o),!e)return K.apply(n,r),n;break}}return(l||N(e,c))(r,t,!O,n,!t||me.test(e)&&f(t.parentNode)||t),n},T.sortStable=W.split("").sort(V).join("")===W,T.detectDuplicates=!!q,L(),T.sortDetached=i(function(e){return 1&e.compareDocumentPosition(H.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),T.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);ge.find=be,ge.expr=be.selectors,ge.expr[":"]=ge.expr.pseudos,ge.uniqueSort=ge.unique=be.uniqueSort,ge.text=be.getText,ge.isXMLDoc=be.isXML,ge.contains=be.contains,ge.escapeSelector=be.escape;var we=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&ge(e).is(n))break;r.push(e)}return r},Te=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},Ce=ge.expr.match.needsContext,Ee=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,ke=/^.[^:#\[\.,]*$/;ge.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ge.find.matchesSelector(r,e)?[r]:[]:ge.find.matches(e,ge.grep(t,function(e){return 1===e.nodeType}))},ge.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ge(e).filter(function(){for(t=0;t<r;t++)if(ge.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ge.find(e,i[t],n);return r>1?ge.uniqueSort(n):n},filter:function(e){return this.pushStack(o(this,e||[],!1))},not:function(e){return this.pushStack(o(this,e||[],!0))},is:function(e){return!!o(this,"string"==typeof e&&Ce.test(e)?ge(e):e||[],!1).length}});var Se,Ne=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,De=ge.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||Se,"string"==typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Ne.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ge?t[0]:t,ge.merge(this,ge.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:ne,!0)),Ee.test(r[1])&&ge.isPlainObject(t))for(r in t)ge.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=ne.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):ge.isFunction(e)?void 0!==n.ready?n.ready(e):e(ge):ge.makeArray(e,this)};De.prototype=ge.fn,Se=ge(ne);var je=/^(?:parents|prev(?:Until|All))/,Ae={children:!0,contents:!0,next:!0,prev:!0};ge.fn.extend({has:function(e){var t=ge(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ge.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ge(e);if(!Ce.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&ge.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?ge.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ge(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ge.uniqueSort(ge.merge(this.get(),ge(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ge.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return we(e,"parentNode")},parentsUntil:function(e,t,n){return we(e,"parentNode",n)},next:function(e){return a(e,"nextSibling")},prev:function(e){return a(e,"previousSibling")},nextAll:function(e){return we(e,"nextSibling")},prevAll:function(e){return we(e,"previousSibling")},nextUntil:function(e,t,n){return we(e,"nextSibling",n)},prevUntil:function(e,t,n){return we(e,"previousSibling",n)},siblings:function(e){return Te((e.parentNode||{}).firstChild,e)},children:function(e){return Te(e.firstChild)},contents:function(e){return i(e,"iframe")?e.contentDocument:(i(e,"template")&&(e=e.content||e),ge.merge([],e.childNodes))}},function(e,t){ge.fn[e]=function(n,r){var i=ge.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=ge.filter(r,i)),this.length>1&&(Ae[e]||ge.uniqueSort(i),je.test(e)&&i.reverse()),this.pushStack(i)}});var qe=/[^\x20\t\r\n\f]+/g;ge.Callbacks=function(e){e="string"==typeof e?s(e):ge.extend({},e);var t,n,r,i,o=[],a=[],u=-1,l=function(){for(i=i||e.once,r=t=!0;a.length;u=-1)for(n=a.shift();++u<o.length;)o[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},c={add:function(){return o&&(n&&!t&&(u=o.length-1,a.push(n)),function t(n){ge.each(n,function(n,r){ge.isFunction(r)?e.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==ge.type(r)&&t(r)})}(arguments),n&&!t&&l()),this},remove:function(){return ge.each(arguments,function(e,t){for(var n;(n=ge.inArray(t,o,n))>-1;)o.splice(n,1),n<=u&&u--}),this},has:function(e){return e?ge.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},ge.extend({Deferred:function(t){var n=[["notify","progress",ge.Callbacks("memory"),ge.Callbacks("memory"),2],["resolve","done",ge.Callbacks("once memory"),ge.Callbacks("once memory"),0,"resolved"],["reject","fail",ge.Callbacks("once memory"),ge.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return ge.Deferred(function(t){ge.each(n,function(n,r){var i=ge.isFunction(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&ge.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){function o(t,n,r,i){return function(){var s=this,c=arguments,f=function(){var e,f;if(!(t<a)){if(e=r.apply(s,c),e===n.promise())throw new TypeError("Thenable self-resolution");f=e&&("object"==typeof e||"function"==typeof e)&&e.then,ge.isFunction(f)?i?f.call(e,o(a,n,u,i),o(a,n,l,i)):(a++,f.call(e,o(a,n,u,i),o(a,n,l,i),o(a,n,u,n.notifyWith))):(r!==u&&(s=void 0,c=[e]),(i||n.resolveWith)(s,c))}},p=i?f:function(){try{f()}catch(e){ge.Deferred.exceptionHook&&ge.Deferred.exceptionHook(e,p.stackTrace),t+1>=a&&(r!==l&&(s=void 0,c=[e]),n.rejectWith(s,c))}};t?p():(ge.Deferred.getStackHook&&(p.stackTrace=ge.Deferred.getStackHook()),e.setTimeout(p))}}var a=0;return ge.Deferred(function(e){n[0][3].add(o(0,e,ge.isFunction(i)?i:u,e.notifyWith)),n[1][3].add(o(0,e,ge.isFunction(t)?t:u)),n[2][3].add(o(0,e,ge.isFunction(r)?r:l))}).promise()},promise:function(e){return null!=e?ge.extend(e,i):i}},o={};return ge.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[0][2].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=ie.call(arguments),o=ge.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?ie.call(arguments):n,--t||o.resolveWith(r,i)}};if(t<=1&&(c(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||ge.isFunction(i[n]&&i[n].then)))return o.then();for(;n--;)c(i[n],a(n),o.reject);return o.promise()}});var Le=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ge.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Le.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},ge.readyException=function(t){e.setTimeout(function(){throw t})};var He=ge.Deferred();ge.fn.ready=function(e){return He.then(e).catch(function(e){ge.readyException(e)}),this},ge.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--ge.readyWait:ge.isReady)||(ge.isReady=!0,e!==!0&&--ge.readyWait>0||He.resolveWith(ne,[ge]))}}),ge.ready.then=He.then,"complete"===ne.readyState||"loading"!==ne.readyState&&!ne.documentElement.doScroll?e.setTimeout(ge.ready):(ne.addEventListener("DOMContentLoaded",f),e.addEventListener("load",f));var Fe=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===ge.type(n)){i=!0;for(s in n)Fe(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,ge.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ge(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},Oe=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};p.uid=1,p.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Oe(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[ge.camelCase(t)]=n;else for(r in t)i[ge.camelCase(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ge.camelCase(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){Array.isArray(t)?t=t.map(ge.camelCase):(t=ge.camelCase(t),t=t in r?[t]:t.match(qe)||[]),n=t.length;for(;n--;)delete r[t[n]]}(void 0===t||ge.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ge.isEmptyObject(t)}};var Pe=new p,Re=new p,Me=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ie=/[A-Z]/g;ge.extend({hasData:function(e){return Re.hasData(e)||Pe.hasData(e)},data:function(e,t,n){return Re.access(e,t,n)},removeData:function(e,t){Re.remove(e,t)},_data:function(e,t,n){return Pe.access(e,t,n)},_removeData:function(e,t){Pe.remove(e,t)}}),ge.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=Re.get(o),1===o.nodeType&&!Pe.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=ge.camelCase(r.slice(5)),h(o,r,i[r])));Pe.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Re.set(this,e)}):Fe(this,function(t){var n;if(o&&void 0===t){if(n=Re.get(o,e),void 0!==n)return n;if(n=h(o,e),void 0!==n)return n}else this.each(function(){Re.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Re.remove(this,e)})}}),ge.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Pe.get(e,t),n&&(!r||Array.isArray(n)?r=Pe.access(e,t,ge.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ge.queue(e,t),r=n.length,i=n.shift(),o=ge._queueHooks(e,t),a=function(){ge.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Pe.get(e,n)||Pe.access(e,n,{empty:ge.Callbacks("once memory").add(function(){Pe.remove(e,[t+"queue",n])})})}}),ge.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ge.queue(this[0],e):void 0===t?this:this.each(function(){var n=ge.queue(this,e,t);ge._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ge.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ge.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ge.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=Pe.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var We=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$e=new RegExp("^(?:([+-])=|)("+We+")([a-z%]*)$","i"),Be=["Top","Right","Bottom","Left"],_e=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&ge.contains(e.ownerDocument,e)&&"none"===ge.css(e,"display")},ze=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i},Xe={};ge.fn.extend({show:function(){return y(this,!0)},hide:function(){return y(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){_e(this)?ge(this).show():ge(this).hide()})}});var Ue=/^(?:checkbox|radio)$/i,Ve=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Ge=/^$|\/(?:java|ecma)script/i,Ye={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ye.optgroup=Ye.option,Ye.tbody=Ye.tfoot=Ye.colgroup=Ye.caption=Ye.thead,Ye.th=Ye.td;var Qe=/<|&#?\w+;/;!function(){var e=ne.createDocumentFragment(),t=e.appendChild(ne.createElement("div")),n=ne.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),de.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",de.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Je=ne.documentElement,Ke=/^key/,Ze=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,et=/^([^.]*)(?:\.(.+)|)/;ge.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Pe.get(e);if(v)for(n.handler&&(o=n,n=o.handler,i=o.selector),i&&ge.find.matchesSelector(Je,i),n.guid||(n.guid=ge.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(t){return"undefined"!=typeof ge&&ge.event.triggered!==t.type?ge.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(qe)||[""],l=t.length;l--;)s=et.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d&&(f=ge.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ge.event.special[d]||{},c=ge.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ge.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,a)!==!1||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ge.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Pe.hasData(e)&&Pe.get(e);if(v&&(u=v.events)){for(t=(t||"").match(qe)||[""],l=t.length;l--;)if(s=et.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=ge.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,v.handle)!==!1||ge.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ge.event.remove(e,d+t[l],n,r,!0);ge.isEmptyObject(u)&&Pe.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=ge.event.fix(e),u=new Array(arguments.length),l=(Pe.get(this,"events")||{})[s.type]||[],c=ge.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,s)!==!1){for(a=ge.event.handlers.call(this,s,l),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,r=((ge.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u),void 0!==r&&(s.result=r)===!1&&(s.preventDefault(),s.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||l.disabled!==!0)){for(o=[],a={},n=0;n<u;n++)r=t[n],i=r.selector+" ",void 0===a[i]&&(a[i]=r.needsContext?ge(i,this).index(l)>-1:ge.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(ge.Event.prototype,e,{enumerable:!0,configurable:!0,get:ge.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[ge.expando]?e:new ge.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==C()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===C()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&i(this,"input"))return this.click(),!1},_default:function(e){return i(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ge.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ge.Event=function(e,t){return this instanceof ge.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?w:T,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ge.extend(this,t),this.timeStamp=e&&e.timeStamp||ge.now(),void(this[ge.expando]=!0)):new ge.Event(e,t)},ge.Event.prototype={constructor:ge.Event,isDefaultPrevented:T,isPropagationStopped:T,isImmediatePropagationStopped:T,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=w,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=w,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=w,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ge.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ke.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ze.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},ge.event.addProp),ge.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){ge.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||ge.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),ge.fn.extend({on:function(e,t,n,r){return E(this,e,t,n,r)},one:function(e,t,n,r){return E(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ge(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=T),this.each(function(){ge.event.remove(this,e,n,t)})}});var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,nt=/<script|<style|<link/i,rt=/checked\s*(?:[^=]|=\s*.checked.)/i,it=/^true\/(.*)/,ot=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ge.extend({htmlPrefilter:function(e){return e.replace(tt,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=ge.contains(e.ownerDocument,e);if(!(de.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ge.isXMLDoc(e)))for(a=m(s),o=m(e),r=0,i=o.length;r<i;r++)j(o[r],a[r]);if(t)if(n)for(o=o||m(e),a=a||m(s),r=0,i=o.length;r<i;r++)D(o[r],a[r]);else D(e,s);return a=m(s,"script"),a.length>0&&x(a,!u&&m(e,"script")),s},cleanData:function(e){for(var t,n,r,i=ge.event.special,o=0;void 0!==(n=e[o]);o++)if(Oe(n)){if(t=n[Pe.expando]){if(t.events)for(r in t.events)i[r]?ge.event.remove(n,r):ge.removeEvent(n,r,t.handle);n[Pe.expando]=void 0}n[Re.expando]&&(n[Re.expando]=void 0)}}}),ge.fn.extend({detach:function(e){return q(this,e,!0)},remove:function(e){return q(this,e)},text:function(e){return Fe(this,function(e){return void 0===e?ge.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return A(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.appendChild(e)}})},prepend:function(){return A(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return A(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return A(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ge.cleanData(m(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ge.clone(this,e,t)})},html:function(e){return Fe(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!nt.test(e)&&!Ye[(Ve.exec(e)||["",""])[1].toLowerCase()]){e=ge.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(ge.cleanData(m(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return A(this,arguments,function(t){var n=this.parentNode;ge.inArray(this,e)<0&&(ge.cleanData(m(this)),n&&n.replaceChild(t,this))},e)}}),ge.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ge.fn[e]=function(e){for(var n,r=[],i=ge(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),ge(i[a])[t](n),ae.apply(r,n.get());return this.pushStack(r)}});var at=/^margin/,st=new RegExp("^("+We+")(?!px)[a-z%]+$","i"),ut=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)};!function(){function t(){if(s){s.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",s.innerHTML="",Je.appendChild(a);var t=e.getComputedStyle(s);n="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,s.style.marginRight="50%",i="4px"===t.marginRight,Je.removeChild(a),s=null}}var n,r,i,o,a=ne.createElement("div"),s=ne.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",de.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",a.appendChild(s),ge.extend(de,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return t(),r},pixelMarginRight:function(){return t(),i},reliableMarginLeft:function(){return t(),o}}))}();var lt=/^(none|table(?!-c[ea]).+)/,ct=/^--/,ft={position:"absolute",visibility:"hidden",display:"block"},pt={letterSpacing:"0",fontWeight:"400"},dt=["Webkit","Moz","ms"],ht=ne.createElement("div").style;ge.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=L(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=ge.camelCase(t),u=ct.test(t),l=e.style;return u||(t=O(s)),a=ge.cssHooks[t]||ge.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t]:(o=typeof n,"string"===o&&(i=$e.exec(n))&&i[1]&&(n=g(e,t,i),o="number"),void(null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(ge.cssNumber[s]?"":"px")),de.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))))}},css:function(e,t,n,r){var i,o,a,s=ge.camelCase(t),u=ct.test(t);return u||(t=O(s)),a=ge.cssHooks[t]||ge.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=L(e,t,r)),"normal"===i&&t in pt&&(i=pt[t]),""===n||n?(o=parseFloat(i),n===!0||isFinite(o)?o||0:i):i}}),ge.each(["height","width"],function(e,t){ge.cssHooks[t]={get:function(e,n,r){if(n)return!lt.test(ge.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?M(e,t,r):ze(e,ft,function(){return M(e,t,r)})},set:function(e,n,r){var i,o=r&&ut(e),a=r&&R(e,t,r,"border-box"===ge.css(e,"boxSizing",!1,o),o);return a&&(i=$e.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=ge.css(e,t)),P(e,n,a)}}}),ge.cssHooks.marginLeft=H(de.reliableMarginLeft,function(e,t){if(t)return(parseFloat(L(e,"marginLeft"))||e.getBoundingClientRect().left-ze(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ge.each({margin:"",padding:"",border:"Width"},function(e,t){ge.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Be[r]+t]=o[r]||o[r-2]||o[0];return i}},at.test(e)||(ge.cssHooks[e+t].set=P)}),ge.fn.extend({css:function(e,t){return Fe(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=ut(e),i=t.length;a<i;a++)o[t[a]]=ge.css(e,t[a],!1,r);return o}return void 0!==n?ge.style(e,t,n):ge.css(e,t)},e,t,arguments.length>1)}}),ge.Tween=I,I.prototype={constructor:I,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ge.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ge.cssNumber[n]?"":"px")},cur:function(){var e=I.propHooks[this.prop];return e&&e.get?e.get(this):I.propHooks._default.get(this)},run:function(e){var t,n=I.propHooks[this.prop];return this.options.duration?this.pos=t=ge.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):I.propHooks._default.set(this),this}},I.prototype.init.prototype=I.prototype,I.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ge.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){ge.fx.step[e.prop]?ge.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[ge.cssProps[e.prop]]&&!ge.cssHooks[e.prop]?e.elem[e.prop]=e.now:ge.style(e.elem,e.prop,e.now+e.unit)}}},I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ge.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ge.fx=I.prototype.init,ge.fx.step={};var gt,vt,yt=/^(?:toggle|show|hide)$/,mt=/queueHooks$/;ge.Animation=ge.extend(U,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return g(n.elem,e,$e.exec(t),n),n}]},tweener:function(e,t){ge.isFunction(e)?(t=e,e=["*"]):e=e.match(qe);for(var n,r=0,i=e.length;r<i;r++)n=e[r],U.tweeners[n]=U.tweeners[n]||[],U.tweeners[n].unshift(t)},prefilters:[z],prefilter:function(e,t){t?U.prefilters.unshift(e):U.prefilters.push(e)}}),ge.speed=function(e,t,n){var r=e&&"object"==typeof e?ge.extend({},e):{complete:n||!n&&t||ge.isFunction(e)&&e,duration:e,easing:n&&t||t&&!ge.isFunction(t)&&t};return ge.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ge.fx.speeds?r.duration=ge.fx.speeds[r.duration]:r.duration=ge.fx.speeds._default),null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){ge.isFunction(r.old)&&r.old.call(this),r.queue&&ge.dequeue(this,r.queue)},r},ge.fn.extend({fadeTo:function(e,t,n,r){return this.filter(_e).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ge.isEmptyObject(e),o=ge.speed(t,n,r),a=function(){var t=U(this,ge.extend({},e),o);(i||Pe.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=ge.timers,a=Pe.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&mt.test(i)&&r(a[i]);
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||ge.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Pe.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ge.timers,a=r?r.length:0;for(n.finish=!0,ge.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),ge.each(["toggle","show","hide"],function(e,t){var n=ge.fn[t];ge.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(B(t,!0),e,r,i)}}),ge.each({slideDown:B("show"),slideUp:B("hide"),slideToggle:B("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ge.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ge.timers=[],ge.fx.tick=function(){var e,t=0,n=ge.timers;for(gt=ge.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||ge.fx.stop(),gt=void 0},ge.fx.timer=function(e){ge.timers.push(e),ge.fx.start()},ge.fx.interval=13,ge.fx.start=function(){vt||(vt=!0,W())},ge.fx.stop=function(){vt=null},ge.fx.speeds={slow:600,fast:200,_default:400},ge.fn.delay=function(t,n){return t=ge.fx?ge.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=ne.createElement("input"),t=ne.createElement("select"),n=t.appendChild(ne.createElement("option"));e.type="checkbox",de.checkOn=""!==e.value,de.optSelected=n.selected,e=ne.createElement("input"),e.value="t",e.type="radio",de.radioValue="t"===e.value}();var xt,bt=ge.expr.attrHandle;ge.fn.extend({attr:function(e,t){return Fe(this,ge.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ge.removeAttr(this,e)})}}),ge.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ge.prop(e,t,n):(1===o&&ge.isXMLDoc(e)||(i=ge.attrHooks[t.toLowerCase()]||(ge.expr.match.bool.test(t)?xt:void 0)),void 0!==n?null===n?void ge.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=ge.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!de.radioValue&&"radio"===t&&i(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(qe);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),xt={set:function(e,t,n){return t===!1?ge.removeAttr(e,n):e.setAttribute(n,n),n}},ge.each(ge.expr.match.bool.source.match(/\w+/g),function(e,t){var n=bt[t]||ge.find.attr;bt[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=bt[a],bt[a]=i,i=null!=n(e,t,r)?a:null,bt[a]=o),i}});var wt=/^(?:input|select|textarea|button)$/i,Tt=/^(?:a|area)$/i;ge.fn.extend({prop:function(e,t){return Fe(this,ge.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[ge.propFix[e]||e]})}}),ge.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ge.isXMLDoc(e)||(t=ge.propFix[t]||t,i=ge.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ge.find.attr(e,"tabindex");return t?parseInt(t,10):wt.test(e.nodeName)||Tt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),de.optSelected||(ge.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ge.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ge.propFix[this.toLowerCase()]=this}),ge.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(ge.isFunction(e))return this.each(function(t){ge(this).addClass(e.call(this,t,G(this)))});if("string"==typeof e&&e)for(t=e.match(qe)||[];n=this[u++];)if(i=G(n),r=1===n.nodeType&&" "+V(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");s=V(r),i!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(ge.isFunction(e))return this.each(function(t){ge(this).removeClass(e.call(this,t,G(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(qe)||[];n=this[u++];)if(i=G(n),r=1===n.nodeType&&" "+V(i)+" "){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");s=V(r),i!==s&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):ge.isFunction(e)?this.each(function(n){ge(this).toggleClass(e.call(this,n,G(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(r=0,i=ge(this),o=e.match(qe)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||(t=G(this),t&&Pe.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Pe.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+V(G(n))+" ").indexOf(t)>-1)return!0;return!1}});var Ct=/\r/g;ge.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=ge.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,ge(this).val()):e,null==i?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=ge.map(i,function(e){return null==e?"":e+""})),t=ge.valHooks[this.type]||ge.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=ge.valHooks[i.type]||ge.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(Ct,""):null==n?"":n)):void 0}}),ge.extend({valHooks:{option:{get:function(e){var t=ge.find.attr(e,"value");return null!=t?t:V(ge.text(e))}},select:{get:function(e){var t,n,r,o=e.options,a=e.selectedIndex,s="select-one"===e.type,u=s?null:[],l=s?a+1:o.length;for(r=a<0?l:s?a:0;r<l;r++)if(n=o[r],(n.selected||r===a)&&!n.disabled&&(!n.parentNode.disabled||!i(n.parentNode,"optgroup"))){if(t=ge(n).val(),s)return t;u.push(t)}return u},set:function(e,t){for(var n,r,i=e.options,o=ge.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=ge.inArray(ge.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ge.each(["radio","checkbox"],function(){ge.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=ge.inArray(ge(e).val(),t)>-1}},de.checkOn||(ge.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=/^(?:focusinfocus|focusoutblur)$/;ge.extend(ge.event,{trigger:function(t,n,r,i){var o,a,s,u,l,c,f,p=[r||ne],d=ce.call(t,"type")?t.type:t,h=ce.call(t,"namespace")?t.namespace.split("."):[];if(a=s=r=r||ne,3!==r.nodeType&&8!==r.nodeType&&!Et.test(d+ge.event.triggered)&&(d.indexOf(".")>-1&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,t=t[ge.expando]?t:new ge.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:ge.makeArray(n,[t]),f=ge.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!ge.isWindow(r)){for(u=f.delegateType||d,Et.test(u+d)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a;s===(r.ownerDocument||ne)&&p.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,c=(Pe.get(a,"events")||{})[t.type]&&Pe.get(a,"handle"),c&&c.apply(a,n),c=l&&a[l],c&&c.apply&&Oe(a)&&(t.result=c.apply(a,n),t.result===!1&&t.preventDefault());return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!Oe(r)||l&&ge.isFunction(r[d])&&!ge.isWindow(r)&&(s=r[l],s&&(r[l]=null),ge.event.triggered=d,r[d](),ge.event.triggered=void 0,s&&(r[l]=s)),t.result}},simulate:function(e,t,n){var r=ge.extend(new ge.Event,n,{type:e,isSimulated:!0});ge.event.trigger(r,null,t)}}),ge.fn.extend({trigger:function(e,t){return this.each(function(){ge.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ge.event.trigger(e,t,n,!0)}}),ge.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){ge.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ge.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),de.focusin="onfocusin"in e,de.focusin||ge.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){ge.event.simulate(t,e.target,ge.event.fix(e))};ge.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Pe.access(r,t);i||r.addEventListener(e,n,!0),Pe.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Pe.access(r,t)-1;i?Pe.access(r,t,i):(r.removeEventListener(e,n,!0),Pe.remove(r,t))}}});var kt=e.location,St=ge.now(),Nt=/\?/;ge.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||ge.error("Invalid XML: "+t),n};var Dt=/\[\]$/,jt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,qt=/^(?:input|select|textarea|keygen)/i;ge.param=function(e,t){var n,r=[],i=function(e,t){var n=ge.isFunction(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!ge.isPlainObject(e))ge.each(e,function(){i(this.name,this.value)});else for(n in e)Y(n,e[n],t,i);return r.join("&")},ge.fn.extend({serialize:function(){return ge.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ge.prop(this,"elements");return e?ge.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ge(this).is(":disabled")&&qt.test(this.nodeName)&&!At.test(e)&&(this.checked||!Ue.test(e))}).map(function(e,t){var n=ge(this).val();return null==n?null:Array.isArray(n)?ge.map(n,function(e){return{name:t.name,value:e.replace(jt,"\r\n")}}):{name:t.name,value:n.replace(jt,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ft=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=ne.createElement("a");Bt.href=kt.href,ge.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:kt.href,type:"GET",isLocal:Pt.test(kt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ge.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?K(K(e,ge.ajaxSettings),t):K(ge.ajaxSettings,e)},ajaxPrefilter:Q(It),ajaxTransport:Q(Wt),ajax:function(t,n){function r(t,n,r,s){var l,p,d,b,w,T=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",C.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Z(h,C,r)),b=ee(h,b,C,l),l?(h.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(ge.lastModified[o]=w),w=C.getResponseHeader("etag"),w&&(ge.etag[o]=w)),204===t||"HEAD"===h.type?T="nocontent":304===t?T="notmodified":(T=b.state,p=b.data,d=b.error,l=!d)):(d=T,!t&&T||(T="error",t<0&&(t=0))),C.status=t,C.statusText=(n||T)+"",l?y.resolveWith(g,[p,T,C]):y.rejectWith(g,[C,T,d]),C.statusCode(x),x=void 0,f&&v.trigger(l?"ajaxSuccess":"ajaxError",[C,h,l?p:d]),m.fireWith(g,[C,T]),f&&(v.trigger("ajaxComplete",[C,h]),--ge.active||ge.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=ge.ajaxSetup({},n),g=h.context||h,v=h.context&&(g.nodeType||g.jquery)?ge(g):ge.event,y=ge.Deferred(),m=ge.Callbacks("once memory"),x=h.statusCode||{},b={},w={},T="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=Ot.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)C.always(e[C.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};if(y.promise(C),h.url=((t||h.url||kt.href)+"").replace(Mt,kt.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(qe)||[""],null==h.crossDomain){l=ne.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=ge.param(h.data,h.traditional)),J(It,h,n,C),c)return C;f=ge.event&&h.global,f&&0===ge.active++&&ge.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Rt.test(h.type),o=h.url.replace(Ht,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Lt,"+")):(d=h.url.slice(o.length),h.data&&(o+=(Nt.test(o)?"&":"?")+h.data,delete h.data),h.cache===!1&&(o=o.replace(Ft,"$1"),d=(Nt.test(o)?"&":"?")+"_="+St++ +d),h.url=o+d),h.ifModified&&(ge.lastModified[o]&&C.setRequestHeader("If-Modified-Since",ge.lastModified[o]),ge.etag[o]&&C.setRequestHeader("If-None-Match",ge.etag[o])),(h.data&&h.hasContent&&h.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)C.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(h.beforeSend.call(g,C,h)===!1||c))return C.abort();if(T="abort",m.add(h.complete),C.done(h.success),C.fail(h.error),i=J(Wt,h,n,C)){if(C.readyState=1,f&&v.trigger("ajaxSend",[C,h]),c)return C;h.async&&h.timeout>0&&(u=e.setTimeout(function(){C.abort("timeout")},h.timeout));try{c=!1,i.send(b,r)}catch(e){if(c)throw e;r(-1,e)}}else r(-1,"No Transport");return C},getJSON:function(e,t,n){return ge.get(e,t,n,"json")},getScript:function(e,t){return ge.get(e,void 0,t,"script")}}),ge.each(["get","post"],function(e,t){ge[t]=function(e,n,r,i){return ge.isFunction(n)&&(i=i||r,r=n,n=void 0),ge.ajax(ge.extend({url:e,type:t,dataType:i,data:n,success:r},ge.isPlainObject(e)&&e))}}),ge._evalUrl=function(e){return ge.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},ge.fn.extend({wrapAll:function(e){var t;return this[0]&&(ge.isFunction(e)&&(e=e.call(this[0])),t=ge(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return ge.isFunction(e)?this.each(function(t){ge(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ge(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ge.isFunction(e);return this.each(function(n){ge(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ge(this).replaceWith(this.childNodes)}),this}}),ge.expr.pseudos.hidden=function(e){return!ge.expr.pseudos.visible(e)},ge.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ge.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=ge.ajaxSettings.xhr();de.cors=!!zt&&"withCredentials"in zt,de.ajax=zt=!!zt,ge.ajaxTransport(function(t){var n,r;if(de.cors||zt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(_t[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),ge.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ge.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ge.globalEval(e),e}}}),ge.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ge.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=ge("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),ne.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Xt=[],Ut=/(=)\?(?=&|$)|\?\?/;ge.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||ge.expando+"_"+St++;return this[e]=!0,e}}),ge.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(Ut.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=ge.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Ut,"$1"+i):t.jsonp!==!1&&(t.url+=(Nt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||ge.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?ge(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Xt.push(i)),a&&ge.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),de.createHTMLDocument=function(){var e=ne.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),ge.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var r,i,o;return t||(de.createHTMLDocument?(t=ne.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=ne.location.href,t.head.appendChild(r)):t=ne),i=Ee.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=b([e],t,o),o&&o.length&&ge(o).remove(),ge.merge([],i.childNodes))},ge.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=V(e.slice(s)),e=e.slice(0,s)),ge.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&ge.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ge("<div>").append(ge.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ge.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ge.fn[t]=function(e){return this.on(t,e)}}),ge.expr.pseudos.animated=function(e){return ge.grep(ge.timers,function(t){return e===t.elem}).length},ge.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=ge.css(e,"position"),f=ge(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=ge.css(e,"top"),u=ge.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),ge.isFunction(t)&&(t=t.call(e,n,ge.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},ge.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){ge.offset.setOffset(this,e,t)});var t,n,r,i,o=this[0];return o?o.getClientRects().length?(r=o.getBoundingClientRect(),t=o.ownerDocument,n=t.documentElement,i=t.defaultView,{top:r.top+i.pageYOffset-n.clientTop,left:r.left+i.pageXOffset-n.clientLeft}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===ge.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),i(e[0],"html")||(r=e.offset()),r={top:r.top+ge.css(e[0],"borderTopWidth",!0),left:r.left+ge.css(e[0],"borderLeftWidth",!0)}),{top:t.top-r.top-ge.css(n,"marginTop",!0),left:t.left-r.left-ge.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===ge.css(e,"position");)e=e.offsetParent;return e||Je})}}),ge.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;ge.fn[e]=function(r){return Fe(this,function(e,r,i){var o;return ge.isWindow(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length)}}),ge.each(["top","left"],function(e,t){ge.cssHooks[t]=H(de.pixelPosition,function(e,n){if(n)return n=L(e,t),st.test(n)?ge(e).position()[t]+"px":n})}),ge.each({Height:"height",Width:"width"},function(e,t){ge.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){ge.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||o===!0?"margin":"border");return Fe(this,function(t,n,i){var o;return ge.isWindow(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?ge.css(t,n,s):ge.style(t,n,i,s)},t,a?i:void 0,a)}})}),ge.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),ge.holdReady=function(e){e?ge.readyWait++:ge.ready(!0)},ge.isArray=Array.isArray,ge.parseJSON=JSON.parse,ge.nodeName=i,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ge});var Vt=e.jQuery,Gt=e.$;return ge.noConflict=function(t){return e.$===ge&&(e.$=Gt),t&&e.jQuery===ge&&(e.jQuery=Vt),ge},t||(e.jQuery=e.$=ge),ge});


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/lib/marked.min.js ---- */


/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */
(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]||""});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(cap[1]==="pre"||cap[1]==="script"||cap[1]==="style"),text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.text(escape(this.smartypants(cap[0])));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){if(!this.options.mangle)return text;var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0||prot.indexOf("vbscript:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};Renderer.prototype.text=function(text){return text};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&([#\w]+);/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/lib/moment.js ---- */


//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var string, match, dayFormat,
        dateFormat, timeFormat, tzFormat;
    var timezones = {
        ' GMT': ' +0000',
        ' EDT': ' -0400',
        ' EST': ' -0500',
        ' CDT': ' -0500',
        ' CST': ' -0600',
        ' MDT': ' -0600',
        ' MST': ' -0700',
        ' PDT': ' -0700',
        ' PST': ' -0800'
    };
    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
    var timezone, timezoneIndex;

    string = config._i
        .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
        .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
        .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
    match = basicRfcRegex.exec(string);

    if (match) {
        dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
        dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
        timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        if (match[1]) { // day of week given
            var momentDate = new Date(match[2]);
            var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

            if (match[1].substr(0,3) !== momentDay) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return;
            }
        }

        switch (match[5].length) {
            case 2: // military
                if (timezoneIndex === 0) {
                    timezone = ' +0000';
                } else {
                    timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
                    timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
                        (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
                }
                break;
            case 4: // Zone
                timezone = timezones[match[5]];
                break;
            default: // UT or +/-9999
                timezone = timezones[' GMT'];
        }
        match[5] = timezone;
        config._i = match.splice(1).join('');
        tzFormat = ' ZZ';
        config._f = dayFormat + dateFormat + timeFormat + tzFormat;
        configFromStringAndFormat(config);
        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString() {
    if (!this.isValid()) {
        return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        return this.toDate().toISOString();
    }
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.18.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));



/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/lib/pnglib.js ---- */


/**
 * A handy class to calculate color values.
 *
 * @version 1.0
 * @author Robert Eisele <robert@xarg.org>
 * @copyright Copyright (c) 2010, Robert Eisele
 * @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/
 * @license http://www.opensource.org/licenses/bsd-license.php BSD License
 *
 */

(function() {

    // helper functions for that ctx
    function write(buffer, offs) {
        for (var i = 2; i < arguments.length; i++) {
            for (var j = 0; j < arguments[i].length; j++) {
                buffer[offs++] = arguments[i].charAt(j);
            }
        }
    }

    function byte2(w) {
        return String.fromCharCode((w >> 8) & 255, w & 255);
    }

    function byte4(w) {
        return String.fromCharCode((w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255);
    }

    function byte2lsb(w) {
        return String.fromCharCode(w & 255, (w >> 8) & 255);
    }

    // modified from original source to support NPM
    var PNGlib = function(width, height, depth) {

        this.width = width;
        this.height = height;
        this.depth = depth;

        // pixel data and row filter identifier size
        this.pix_size = height * (width + 1);

        // deflate header, pix_size, block headers, adler32 checksum
        this.data_size = 2 + this.pix_size + 5 * Math.floor((0xfffe + this.pix_size) / 0xffff) + 4;

        // offsets and sizes of Png chunks
        this.ihdr_offs = 0; // IHDR offset and size
        this.ihdr_size = 4 + 4 + 13 + 4;
        this.plte_offs = this.ihdr_offs + this.ihdr_size; // PLTE offset and size
        this.plte_size = 4 + 4 + 3 * depth + 4;
        this.trns_offs = this.plte_offs + this.plte_size; // tRNS offset and size
        this.trns_size = 4 + 4 + depth + 4;
        this.idat_offs = this.trns_offs + this.trns_size; // IDAT offset and size
        this.idat_size = 4 + 4 + this.data_size + 4;
        this.iend_offs = this.idat_offs + this.idat_size; // IEND offset and size
        this.iend_size = 4 + 4 + 4;
        this.buffer_size = this.iend_offs + this.iend_size; // total PNG size

        this.buffer = new Array();
        this.palette = new Object();
        this.pindex = 0;

        var _crc32 = new Array();

        // initialize buffer with zero bytes
        for (var i = 0; i < this.buffer_size; i++) {
            this.buffer[i] = "\x00";
        }

        // initialize non-zero elements
        write(this.buffer, this.ihdr_offs, byte4(this.ihdr_size - 12), 'IHDR', byte4(width), byte4(height), "\x08\x03");
        write(this.buffer, this.plte_offs, byte4(this.plte_size - 12), 'PLTE');
        write(this.buffer, this.trns_offs, byte4(this.trns_size - 12), 'tRNS');
        write(this.buffer, this.idat_offs, byte4(this.idat_size - 12), 'IDAT');
        write(this.buffer, this.iend_offs, byte4(this.iend_size - 12), 'IEND');

        // initialize deflate header
        var header = ((8 + (7 << 4)) << 8) | (3 << 6);
        header += 31 - (header % 31);

        write(this.buffer, this.idat_offs + 8, byte2(header));

        // initialize deflate block headers
        for (var i = 0;
            (i << 16) - 1 < this.pix_size; i++) {
            var size, bits;
            if (i + 0xffff < this.pix_size) {
                size = 0xffff;
                bits = "\x00";
            } else {
                size = this.pix_size - (i << 16) - i;
                bits = "\x01";
            }
            write(this.buffer, this.idat_offs + 8 + 2 + (i << 16) + (i << 2), bits, byte2lsb(size), byte2lsb(~size));
        }

        /* Create crc32 lookup table */
        for (var i = 0; i < 256; i++) {
            var c = i;
            for (var j = 0; j < 8; j++) {
                if (c & 1) {
                    c = -306674912 ^ ((c >> 1) & 0x7fffffff);
                } else {
                    c = (c >> 1) & 0x7fffffff;
                }
            }
            _crc32[i] = c;
        }

        // compute the index into a png for a given pixel
        this.index = function(x, y) {
            var i = y * (this.width + 1) + x + 1;
            var j = this.idat_offs + 8 + 2 + 5 * Math.floor((i / 0xffff) + 1) + i;
            return j;
        }

        // convert a color and build up the palette
        this.color = function(red, green, blue, alpha) {

            alpha = alpha >= 0 ? alpha : 255;
            var color = (((((alpha << 8) | red) << 8) | green) << 8) | blue;

            if (typeof this.palette[color] == "undefined") {
                if (this.pindex == this.depth) return "\x00";

                var ndx = this.plte_offs + 8 + 3 * this.pindex;

                this.buffer[ndx + 0] = String.fromCharCode(red);
                this.buffer[ndx + 1] = String.fromCharCode(green);
                this.buffer[ndx + 2] = String.fromCharCode(blue);
                this.buffer[this.trns_offs + 8 + this.pindex] = String.fromCharCode(alpha);

                this.palette[color] = String.fromCharCode(this.pindex++);
            }
            return this.palette[color];
        }

        // output a PNG string, Base64 encoded
        this.getBase64 = function() {

            var s = this.getDump();

            var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var c1, c2, c3, e1, e2, e3, e4;
            var l = s.length;
            var i = 0;
            var r = "";

            do {
                c1 = s.charCodeAt(i);
                e1 = c1 >> 2;
                c2 = s.charCodeAt(i + 1);
                e2 = ((c1 & 3) << 4) | (c2 >> 4);
                c3 = s.charCodeAt(i + 2);
                if (l < i + 2) { e3 = 64; } else { e3 = ((c2 & 0xf) << 2) | (c3 >> 6); }
                if (l < i + 3) { e4 = 64; } else { e4 = c3 & 0x3f; }
                r += ch.charAt(e1) + ch.charAt(e2) + ch.charAt(e3) + ch.charAt(e4);
            } while ((i += 3) < l);
            return r;
        }

        // output a PNG string
        this.getDump = function() {

            // compute adler32 of output pixels + row filter bytes
            var BASE = 65521; /* largest prime smaller than 65536 */
            var NMAX = 5552; /* NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1 */
            var s1 = 1;
            var s2 = 0;
            var n = NMAX;

            for (var y = 0; y < this.height; y++) {
                for (var x = -1; x < this.width; x++) {
                    s1 += this.buffer[this.index(x, y)].charCodeAt(0);
                    s2 += s1;
                    if ((n -= 1) == 0) {
                        s1 %= BASE;
                        s2 %= BASE;
                        n = NMAX;
                    }
                }
            }
            s1 %= BASE;
            s2 %= BASE;
            write(this.buffer, this.idat_offs + this.idat_size - 8, byte4((s2 << 16) | s1));

            // compute crc32 of the PNG chunks
            function crc32(png, offs, size) {
                var crc = -1;
                for (var i = 4; i < size - 4; i += 1) {
                    crc = _crc32[(crc ^ png[offs + i].charCodeAt(0)) & 0xff] ^ ((crc >> 8) & 0x00ffffff);
                }
                write(png, offs + size - 4, byte4(crc ^ -1));
            }

            crc32(this.buffer, this.ihdr_offs, this.ihdr_size);
            crc32(this.buffer, this.plte_offs, this.plte_size);
            crc32(this.buffer, this.trns_offs, this.trns_size);
            crc32(this.buffer, this.idat_offs, this.idat_size);
            crc32(this.buffer, this.iend_offs, this.iend_size);

            // convert PNG to string
            return "\211PNG\r\n\032\n" + this.buffer.join('');
        }
    }

    // modified from original source to support NPM
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = PNGlib;
    } else {
        window.PNGlib = PNGlib;
    }
})();


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/lib/svg4everybody.min.js ---- */


!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i);if(j){var k=h.getAttribute("xlink:href")||h.getAttribute("href");if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/lib/vue.min.js ---- */


/*!
 * Vue.js v2.4.0
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Vue=e()}(this,function(){"use strict";function t(t){return void 0===t||null===t}function e(t){return void 0!==t&&null!==t}function n(t){return!0===t}function r(t){return!1===t}function i(t){return"string"==typeof t||"number"==typeof t}function o(t){return null!==t&&"object"==typeof t}function a(t){return"[object Object]"===di.call(t)}function s(t){return"[object RegExp]"===di.call(t)}function c(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function u(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function l(t){var e=parseFloat(t);return isNaN(e)?t:e}function f(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}function p(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function d(t,e){return mi.call(t,e)}function v(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}function h(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function m(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function y(t,e){for(var n in e)t[n]=e[n];return t}function g(t){for(var e={},n=0;n<t.length;n++)t[n]&&y(e,t[n]);return e}function _(t,e,n){}function b(t,e){var n=o(t),r=o(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function $(t,e){for(var n=0;n<t.length;n++)if(b(t[n],e))return n;return-1}function C(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function w(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function x(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function A(t){if(!Ti.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}function k(t,e,n){if(Oi.errorHandler)Oi.errorHandler.call(null,t,e,n);else{if(!Ni||"undefined"==typeof console)throw t;console.error(t)}}function O(t){return"function"==typeof t&&/native code/.test(t.toString())}function S(t){Zi.target&&Yi.push(Zi.target),Zi.target=t}function T(){Zi.target=Yi.pop()}function E(t,e,n){t.__proto__=e}function j(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];x(t,o,e[o])}}function N(t,e){if(o(t)){var n;return d(t,"__ob__")&&t.__ob__ instanceof no?n=t.__ob__:eo.shouldConvert&&!Ki()&&(Array.isArray(t)||a(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new no(t)),e&&n&&n.vmCount++,n}}function L(t,e,n,r,i){var o=new Zi,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!i&&N(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return Zi.target&&(o.depend(),u&&u.dep.depend(),Array.isArray(e)&&D(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!i&&N(e),o.notify())}})}}function I(t,e,n){if(Array.isArray(t)&&c(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(d(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(L(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function M(t,e){if(Array.isArray(t)&&c(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||d(t,e)&&(delete t[e],n&&n.dep.notify())}}function D(t){for(var e=void 0,n=0,r=t.length;n<r;n++)(e=t[n])&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&D(e)}function P(t,e){if(!e)return t;for(var n,r,i,o=Object.keys(e),s=0;s<o.length;s++)r=t[n=o[s]],i=e[n],d(t,n)?a(r)&&a(i)&&P(r,i):I(t,n,i);return t}function F(t,e,n){return n?t||e?function(){var r="function"==typeof e?e.call(n):e,i="function"==typeof t?t.call(n):void 0;return r?P(r,i):i}:void 0:e?t?function(){return P("function"==typeof e?e.call(this):e,t.call(this))}:e:t}function R(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function H(t,e){var n=Object.create(t||null);return e?y(n,e):n}function B(t){var e=t.props;if(e){var n,r,i={};if(Array.isArray(e))for(n=e.length;n--;)"string"==typeof(r=e[n])&&(i[gi(r)]={type:null});else if(a(e))for(var o in e)r=e[o],i[gi(o)]=a(r)?r:{type:r};t.props=i}}function U(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function V(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}function z(t,e,n){function r(r){var i=ro[r]||io;c[r]=i(t[r],e[r],n,r)}"function"==typeof e&&(e=e.options),B(e),U(e),V(e);var i=e.extends;if(i&&(t=z(t,i,n)),e.mixins)for(var o=0,a=e.mixins.length;o<a;o++)t=z(t,e.mixins[o],n);var s,c={};for(s in t)r(s);for(s in e)d(t,s)||r(s);return c}function K(t,e,n,r){if("string"==typeof n){var i=t[e];if(d(i,n))return i[n];var o=gi(n);if(d(i,o))return i[o];var a=_i(o);if(d(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function J(t,e,n,r){var i=e[t],o=!d(n,t),a=n[t];if(G(Boolean,i.type)&&(o&&!d(i,"default")?a=!1:G(String,i.type)||""!==a&&a!==$i(t)||(a=!0)),void 0===a){a=q(r,i,t);var s=eo.shouldConvert;eo.shouldConvert=!0,N(a),eo.shouldConvert=s}return a}function q(t,e,n){if(d(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"==typeof r&&"Function"!==W(e.type)?r.call(t):r}}function W(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function G(t,e){if(!Array.isArray(e))return W(e)===W(t);for(var n=0,r=e.length;n<r;n++)if(W(e[n])===W(t))return!0;return!1}function Z(t){return new oo(void 0,void 0,void 0,String(t))}function Y(t){var e=new oo(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Q(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Y(t[r]);return n}function X(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,t)}return e.fns=t,e}function tt(e,n,r,i,o){var a,s,c,u;for(a in e)s=e[a],c=n[a],u=uo(a),t(s)||(t(c)?(t(s.fns)&&(s=e[a]=X(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,e[a]=c));for(a in n)t(e[a])&&i((u=uo(a)).name,n[a],u.capture)}function et(r,i,o){function a(){o.apply(this,arguments),p(s.fns,a)}var s,c=r[i];t(c)?s=X([a]):e(c.fns)&&n(c.merged)?(s=c).fns.push(a):s=X([c,a]),s.merged=!0,r[i]=s}function nt(n,r,i){var o=r.options.props;if(!t(o)){var a={},s=n.attrs,c=n.props;if(e(s)||e(c))for(var u in o){var l=$i(u);rt(a,c,u,l,!0)||rt(a,s,u,l,!1)}return a}}function rt(t,n,r,i,o){if(e(n)){if(d(n,r))return t[r]=n[r],o||delete n[r],!0;if(d(n,i))return t[r]=n[i],o||delete n[i],!0}return!1}function it(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ot(t){return i(t)?[Z(t)]:Array.isArray(t)?st(t):void 0}function at(t){return e(t)&&e(t.text)&&r(t.isComment)}function st(r,o){var a,s,c,u=[];for(a=0;a<r.length;a++)t(s=r[a])||"boolean"==typeof s||(c=u[u.length-1],Array.isArray(s)?u.push.apply(u,st(s,(o||"")+"_"+a)):i(s)?at(c)?c.text+=String(s):""!==s&&u.push(Z(s)):at(s)&&at(c)?u[u.length-1]=Z(c.text+s.text):(n(r._isVList)&&e(s.tag)&&t(s.key)&&e(o)&&(s.key="__vlist"+o+"_"+a+"__"),u.push(s)));return u}function ct(t,e){return t.__esModule&&t.default&&(t=t.default),o(t)?e.extend(t):t}function ut(t,e,n,r,i){var o=co();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function lt(r,i,a){if(n(r.error)&&e(r.errorComp))return r.errorComp;if(e(r.resolved))return r.resolved;if(n(r.loading)&&e(r.loadingComp))return r.loadingComp;if(!e(r.contexts)){var s=r.contexts=[a],c=!0,u=function(){for(var t=0,e=s.length;t<e;t++)s[t].$forceUpdate()},l=C(function(t){r.resolved=ct(t,i),c||u()}),f=C(function(t){e(r.errorComp)&&(r.error=!0,u())}),p=r(l,f);return o(p)&&("function"==typeof p.then?t(r.resolved)&&p.then(l,f):e(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),e(p.error)&&(r.errorComp=ct(p.error,i)),e(p.loading)&&(r.loadingComp=ct(p.loading,i),0===p.delay?r.loading=!0:setTimeout(function(){t(r.resolved)&&t(r.error)&&(r.loading=!0,u())},p.delay||200)),e(p.timeout)&&setTimeout(function(){t(r.resolved)&&f(null)},p.timeout))),c=!1,r.loading?r.loadingComp:r.resolved}r.contexts.push(a)}function ft(t){if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];if(e(r)&&e(r.componentOptions))return r}}function pt(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ht(t,e)}function dt(t,e,n){n?so.$once(t,e):so.$on(t,e)}function vt(t,e){so.$off(t,e)}function ht(t,e,n){so=t,tt(e,n||{},dt,vt,t)}function mt(t,e){var n={};if(!t)return n;for(var r=[],i=0,o=t.length;i<o;i++){var a=t[i];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(yt)||(n.default=r),n}function yt(t){return t.isComment||" "===t.text}function gt(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?gt(t[n],e):e[t[n].key]=t[n].fn;return e}function _t(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function bt(t,e,n){t.$el=e,t.$options.render||(t.$options.render=co),At(t,"beforeMount");var r;return r=function(){t._update(t._render(),n)},t._watcher=new _o(t,r,_),n=!1,null==t.$vnode&&(t._isMounted=!0,At(t,"mounted")),t}function $t(t,e,n,r,i){var o=!!(i||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==Si);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){eo.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=J(u,t.$options.props,e,t)}eo.shouldConvert=!0,t.$options.propsData=e}if(n){var l=t.$options._parentListeners;t.$options._parentListeners=n,ht(t,n,l)}o&&(t.$slots=mt(i,r.context),t.$forceUpdate())}function Ct(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function wt(t,e){if(e){if(t._directInactive=!1,Ct(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)wt(t.$children[n]);At(t,"activated")}}function xt(t,e){if(!(e&&(t._directInactive=!0,Ct(t))||t._inactive)){t._inactive=!0;for(var n=0;n<t.$children.length;n++)xt(t.$children[n]);At(t,"deactivated")}}function At(t,e){var n=t.$options[e];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(t)}catch(n){k(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}function kt(){yo=fo.length=po.length=0,vo={},ho=mo=!1}function Ot(){mo=!0;var t,e;for(fo.sort(function(t,e){return t.id-e.id}),yo=0;yo<fo.length;yo++)e=(t=fo[yo]).id,vo[e]=null,t.run();var n=po.slice(),r=fo.slice();kt(),Et(n),St(r),Ji&&Oi.devtools&&Ji.emit("flush")}function St(t){for(var e=t.length;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&At(r,"updated")}}function Tt(t){t._inactive=!1,po.push(t)}function Et(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,wt(t[e],!0)}function jt(t){var e=t.id;if(null==vo[e]){if(vo[e]=!0,mo){for(var n=fo.length-1;n>yo&&fo[n].id>t.id;)n--;fo.splice(n+1,0,t)}else fo.push(t);ho||(ho=!0,Wi(Ot))}}function Nt(t){bo.clear(),Lt(t,bo)}function Lt(t,e){var n,r,i=Array.isArray(t);if((i||o(t))&&Object.isExtensible(t)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(i)for(n=t.length;n--;)Lt(t[n],e);else for(n=(r=Object.keys(t)).length;n--;)Lt(t[r[n]],e)}}function It(t,e,n){$o.get=function(){return this[e][n]},$o.set=function(t){this[e][n]=t},Object.defineProperty(t,n,$o)}function Mt(t){t._watchers=[];var e=t.$options;e.props&&Dt(t,e.props),e.methods&&Ut(t,e.methods),e.data?Pt(t):N(t._data={},!0),e.computed&&Rt(t,e.computed),e.watch&&e.watch!==Hi&&Vt(t,e.watch)}function Dt(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;eo.shouldConvert=o;for(var a in e)!function(o){i.push(o);var a=J(o,e,n,t);L(r,o,a),o in t||It(t,"_props",o)}(a);eo.shouldConvert=!0}function Pt(t){var e=t.$options.data;a(e=t._data="function"==typeof e?Ft(e,t):e||{})||(e={});for(var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);i--;){var o=n[i];r&&d(r,o)||w(o)||It(t,"_data",o)}N(e,!0)}function Ft(t,e){try{return t.call(e)}catch(t){return k(t,e,"data()"),{}}}function Rt(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var i=e[r],o="function"==typeof i?i:i.get;n[r]=new _o(t,o,_,Co),r in t||Ht(t,r,i)}}function Ht(t,e,n){"function"==typeof n?($o.get=Bt(e),$o.set=_):($o.get=n.get?!1!==n.cache?Bt(e):n.get:_,$o.set=n.set?n.set:_),Object.defineProperty(t,e,$o)}function Bt(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Zi.target&&e.depend(),e.value}}function Ut(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?_:h(e[n],t)}function Vt(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)zt(t,n,r[i]);else zt(t,n,r)}}function zt(t,e,n,r){return a(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function Kt(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}function Jt(t){var e=qt(t.$options.inject,t);e&&(eo.shouldConvert=!1,Object.keys(e).forEach(function(n){L(t,n,e[n])}),eo.shouldConvert=!0)}function qt(t,e){if(t){for(var n=Object.create(null),r=qi?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++)for(var o=r[i],a=t[o],s=e;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}return n}}function Wt(t,n,r,i,o){var a={},s=t.options.props;if(e(s))for(var c in s)a[c]=J(c,s,n||{});else e(r.attrs)&&Gt(a,r.attrs),e(r.props)&&Gt(a,r.props);var u=Object.create(i),l=t.options.render.call(null,function(t,e,n,r){return ee(u,t,e,n,r,!0)},{data:r,props:a,children:o,parent:i,listeners:r.on||{},injections:qt(t.options.inject,i),slots:function(){return mt(o,i)}});return l instanceof oo&&(l.functionalContext=i,l.functionalOptions=t.options,r.slot&&((l.data||(l.data={})).slot=r.slot)),l}function Gt(t,e){for(var n in e)t[gi(n)]=e[n]}function Zt(r,i,a,s,c){if(!t(r)){var u=a.$options._base;if(o(r)&&(r=u.extend(r)),"function"==typeof r){var l;if(t(r.cid)&&(l=r,void 0===(r=lt(l,u,a))))return ut(l,i,a,s,c);i=i||{},me(r),e(i.model)&&te(r.options,i);var f=nt(i,r,c);if(n(r.options.functional))return Wt(r,f,i,a,s);var p=i.on;if(n(r.options.abstract)){var d=i.slot;i={},d&&(i.slot=d)}Qt(i);var v=r.options.name||c;return new oo("vue-component-"+r.cid+(v?"-"+v:""),i,void 0,void 0,void 0,a,{Ctor:r,propsData:f,listeners:p,tag:c,children:s},l)}}}function Yt(t,n,r,i){var o=t.componentOptions,a={_isComponent:!0,parent:n,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:r||null,_refElm:i||null},s=t.data.inlineTemplate;return e(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function Qt(t){t.hook||(t.hook={});for(var e=0;e<xo.length;e++){var n=xo[e],r=t.hook[n],i=wo[n];t.hook[n]=r?Xt(i,r):i}}function Xt(t,e){return function(n,r,i,o){t(n,r,i,o),e(n,r,i,o)}}function te(t,n){var r=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(n.props||(n.props={}))[r]=n.model.value;var o=n.on||(n.on={});e(o[i])?o[i]=[n.model.callback].concat(o[i]):o[i]=n.model.callback}function ee(t,e,r,o,a,s){return(Array.isArray(r)||i(r))&&(a=o,o=r,r=void 0),n(s)&&(a=ko),ne(t,e,r,o,a)}function ne(t,n,r,i,o){if(e(r)&&e(r.__ob__))return co();if(e(r)&&e(r.is)&&(n=r.is),!n)return co();Array.isArray(i)&&"function"==typeof i[0]&&((r=r||{}).scopedSlots={default:i[0]},i.length=0),o===ko?i=ot(i):o===Ao&&(i=it(i));var a,s;if("string"==typeof n){var c;s=Oi.getTagNamespace(n),a=Oi.isReservedTag(n)?new oo(Oi.parsePlatformTagName(n),r,i,void 0,void 0,t):e(c=K(t.$options,"components",n))?Zt(c,r,t,i,n):new oo(n,r,i,void 0,void 0,t)}else a=Zt(n,r,t,i);return e(a)?(s&&re(a,s),a):co()}function re(n,r){if(n.ns=r,"foreignObject"!==n.tag&&e(n.children))for(var i=0,o=n.children.length;i<o;i++){var a=n.children[i];e(a.tag)&&t(a.ns)&&re(a,r)}}function ie(t,n){var r,i,a,s,c;if(Array.isArray(t)||"string"==typeof t)for(r=new Array(t.length),i=0,a=t.length;i<a;i++)r[i]=n(t[i],i);else if("number"==typeof t)for(r=new Array(t),i=0;i<t;i++)r[i]=n(i+1,i);else if(o(t))for(s=Object.keys(t),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=n(t[c],c,i);return e(r)&&(r._isVList=!0),r}function oe(t,e,n,r){var i=this.$scopedSlots[t];if(i)return n=n||{},r&&(n=y(y({},r),n)),i(n)||e;var o=this.$slots[t];return o||e}function ae(t){return K(this.$options,"filters",t,!0)||wi}function se(t,e,n){var r=Oi.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function ce(t,e,n,r,i){if(n)if(o(n)){Array.isArray(n)&&(n=g(n));var a;for(var s in n)!function(o){if("class"===o||"style"===o||hi(o))a=t;else{var s=t.attrs&&t.attrs.type;a=r||Oi.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}o in a||(a[o]=n[o],i&&((t.on||(t.on={}))["update:"+o]=function(t){n[o]=t}))}(s)}else;return t}function ue(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Q(n):Y(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),fe(n,"__static__"+t,!1),n)}function le(t,e,n){return fe(t,"__once__"+e+(n?"_"+n:""),!0),t}function fe(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&pe(t[r],e+"_"+r,n);else pe(t,e,n)}function pe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function de(t,e){if(e)if(a(e)){var n=t.on=t.on?y({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(o,i):o}}else;return t}function ve(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=mt(t.$options._renderChildren,n),t.$scopedSlots=Si,t._c=function(e,n,r,i){return ee(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return ee(t,e,n,r,i,!0)};var r=e&&e.data;L(t,"$attrs",r&&r.attrs,null,!0),L(t,"$listeners",r&&r.on,null,!0)}function he(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function me(t){var e=t.options;if(t.super){var n=me(t.super);if(n!==t.superOptions){t.superOptions=n;var r=ye(t);r&&y(t.extendOptions,r),(e=t.options=z(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function ye(t){var e,n=t.options,r=t.extendOptions,i=t.sealedOptions;for(var o in n)n[o]!==i[o]&&(e||(e={}),e[o]=ge(n[o],r[o],i[o]));return e}function ge(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var i=0;i<t.length;i++)(e.indexOf(t[i])>=0||n.indexOf(t[i])<0)&&r.push(t[i]);return r}return t}function _e(t){this._init(t)}function be(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=m(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}function $e(t){t.mixin=function(t){return this.options=z(this.options,t),this}}function Ce(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=z(n.options,t),a.super=n,a.options.props&&we(a),a.options.computed&&xe(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Ai.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=y({},a.options),i[r]=a,a}}function we(t){var e=t.options.props;for(var n in e)It(t.prototype,"_props",n)}function xe(t){var e=t.options.computed;for(var n in e)Ht(t.prototype,n,e[n])}function Ae(t){Ai.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&a(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function ke(t){return t&&(t.Ctor.options.name||t.tag)}function Oe(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!s(t)&&t.test(e)}function Se(t,e,n){for(var r in t){var i=t[r];if(i){var o=ke(i.componentOptions);o&&!n(o)&&(i!==e&&Te(i),t[r]=null)}}}function Te(t){t&&t.componentInstance.$destroy()}function Ee(t){for(var n=t.data,r=t,i=t;e(i.componentInstance);)(i=i.componentInstance._vnode).data&&(n=je(i.data,n));for(;e(r=r.parent);)r.data&&(n=je(n,r.data));return Ne(n.staticClass,n.class)}function je(t,n){return{staticClass:Le(t.staticClass,n.staticClass),class:e(t.class)?[t.class,n.class]:n.class}}function Ne(t,n){return e(t)||e(n)?Le(t,Ie(n)):""}function Le(t,e){return t?e?t+" "+e:t:e||""}function Ie(t){return Array.isArray(t)?Me(t):o(t)?De(t):"string"==typeof t?t:""}function Me(t){for(var n,r="",i=0,o=t.length;i<o;i++)e(n=Ie(t[i]))&&""!==n&&(r&&(r+=" "),r+=n);return r}function De(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function Pe(t){return Zo(t)?"svg":"math"===t?"math":void 0}function Fe(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Re(t,e){var n=t.data.ref;if(n){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?p(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}function He(r,i){return r.key===i.key&&(r.tag===i.tag&&r.isComment===i.isComment&&e(r.data)===e(i.data)&&Be(r,i)||n(r.isAsyncPlaceholder)&&r.asyncFactory===i.asyncFactory&&t(i.asyncFactory.error))}function Be(t,n){if("input"!==t.tag)return!0;var r;return(e(r=t.data)&&e(r=r.attrs)&&r.type)===(e(r=n.data)&&e(r=r.attrs)&&r.type)}function Ue(t,n,r){var i,o,a={};for(i=n;i<=r;++i)e(o=t[i].key)&&(a[o]=i);return a}function Ve(t,e){(t.data.directives||e.data.directives)&&ze(t,e)}function ze(t,e){var n,r,i,o=t===ea,a=e===ea,s=Ke(t.data.directives,t.context),c=Ke(e.data.directives,e.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,qe(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(qe(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)qe(u[n],"inserted",e,t)};o?et(e.data.hook||(e.data.hook={}),"insert",f):f()}if(l.length&&et(e.data.hook||(e.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)qe(l[n],"componentUpdated",e,t)}),!o)for(n in s)c[n]||qe(s[n],"unbind",t,t,a)}function Ke(t,e){var n=Object.create(null);if(!t)return n;var r,i;for(r=0;r<t.length;r++)(i=t[r]).modifiers||(i.modifiers=ia),n[Je(i)]=i,i.def=K(e.$options,"directives",i.name,!0);return n}function Je(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function qe(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(r){k(r,n.context,"directive "+t.name+" "+e+" hook")}}function We(n,r){var i=r.componentOptions;if(!(e(i)&&!1===i.Ctor.options.inheritAttrs||t(n.data.attrs)&&t(r.data.attrs))){var o,a,s=r.elm,c=n.data.attrs||{},u=r.data.attrs||{};e(u.__ob__)&&(u=r.data.attrs=y({},u));for(o in u)a=u[o],c[o]!==a&&Ge(s,o,a);Mi&&u.value!==c.value&&Ge(s,"value",u.value);for(o in c)t(u[o])&&(Ko(o)?s.removeAttributeNS(zo,Jo(o)):Uo(o)||s.removeAttribute(o))}}function Ge(t,e,n){Vo(e)?qo(n)?t.removeAttribute(e):t.setAttribute(e,e):Uo(e)?t.setAttribute(e,qo(n)||"false"===n?"false":"true"):Ko(e)?qo(n)?t.removeAttributeNS(zo,Jo(e)):t.setAttributeNS(zo,e,n):qo(n)?t.removeAttribute(e):t.setAttribute(e,n)}function Ze(n,r){var i=r.elm,o=r.data,a=n.data;if(!(t(o.staticClass)&&t(o.class)&&(t(a)||t(a.staticClass)&&t(a.class)))){var s=Ee(r),c=i._transitionClasses;e(c)&&(s=Le(s,Ie(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}function Ye(t){function e(){(a||(a=[])).push(t.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;for(i=0;i<t.length;i++)if(r=n,n=t.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===t.charCodeAt(i+1)||124===t.charCodeAt(i-1)||f||p||d){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=t.charAt(h));h--);m&&ca.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=t.slice(0,i).trim()):e();if(void 0===o?o=t.slice(0,i).trim():0!==v&&e(),a)for(i=0;i<a.length;i++)o=Qe(o,a[i]);return o}function Qe(t,e){var n=e.indexOf("(");return n<0?'_f("'+e+'")('+t+")":'_f("'+e.slice(0,n)+'")('+t+","+e.slice(n+1)}function Xe(t){console.error("[Vue compiler]: "+t)}function tn(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function en(t,e,n){(t.props||(t.props=[])).push({name:e,value:n})}function nn(t,e,n){(t.attrs||(t.attrs=[])).push({name:e,value:n})}function rn(t,e,n,r,i,o){(t.directives||(t.directives=[])).push({name:e,rawName:n,value:r,arg:i,modifiers:o})}function on(t,e,n,r,i,o){r&&r.capture&&(delete r.capture,e="!"+e),r&&r.once&&(delete r.once,e="~"+e),r&&r.passive&&(delete r.passive,e="&"+e);var a;r&&r.native?(delete r.native,a=t.nativeEvents||(t.nativeEvents={})):a=t.events||(t.events={});var s={value:n,modifiers:r},c=a[e];Array.isArray(c)?i?c.unshift(s):c.push(s):a[e]=c?i?[s,c]:[c,s]:s}function an(t,e,n){var r=sn(t,":"+e)||sn(t,"v-bind:"+e);if(null!=r)return Ye(r);if(!1!==n){var i=sn(t,e);if(null!=i)return JSON.stringify(i)}}function sn(t,e){var n;if(null!=(n=t.attrsMap[e]))for(var r=t.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===e){r.splice(i,1);break}return n}function cn(t,e,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=un(e,o);t.model={value:"("+e+")",expression:'"'+e+'"',callback:"function ($$v) {"+a+"}"}}function un(t,e){var n=ln(t);return null===n.idx?t+"="+e:"$set("+n.exp+", "+n.idx+", "+e+")"}function ln(t){if(jo=t,Eo=jo.length,Lo=Io=Mo=0,t.indexOf("[")<0||t.lastIndexOf("]")<Eo-1)return{exp:t,idx:null};for(;!pn();)dn(No=fn())?hn(No):91===No&&vn(No);return{exp:t.substring(0,Io),idx:t.substring(Io+1,Mo)}}function fn(){return jo.charCodeAt(++Lo)}function pn(){return Lo>=Eo}function dn(t){return 34===t||39===t}function vn(t){var e=1;for(Io=Lo;!pn();)if(t=fn(),dn(t))hn(t);else if(91===t&&e++,93===t&&e--,0===e){Mo=Lo;break}}function hn(t){for(var e=t;!pn()&&(t=fn())!==e;);}function mn(t,e,n){var r=n&&n.number,i=an(t,"value")||"null",o=an(t,"true-value")||"true",a=an(t,"false-value")||"false";en(t,"checked","Array.isArray("+e+")?_i("+e+","+i+")>-1"+("true"===o?":("+e+")":":_q("+e+","+o+")")),on(t,la,"var $$a="+e+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+e+"=$$a.concat($$v))}else{$$i>-1&&("+e+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+un(e,"$$c")+"}",null,!0)}function yn(t,e,n){var r=n&&n.number,i=an(t,"value")||"null";en(t,"checked","_q("+e+","+(i=r?"_n("+i+")":i)+")"),on(t,la,un(e,i),null,!0)}function gn(t,e,n){var r="var $$selectedVal = "+('Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"})")+";";on(t,"change",r=r+" "+un(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),null,!0)}function _n(t,e,n){var r=t.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?ua:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=un(e,l);c&&(f="if($event.target.composing)return;"+f),en(t,"value","("+e+")"),on(t,u,f,null,!0),(s||a)&&on(t,"blur","$forceUpdate()")}function bn(t){var n;e(t[ua])&&(t[n=Ii?"change":"input"]=[].concat(t[ua],t[n]||[]),delete t[ua]),e(t[la])&&(t[n=Ri?"click":"change"]=[].concat(t[la],t[n]||[]),delete t[la])}function $n(t,e,n,r,i){if(n){var o=e,a=Po;e=function(n){null!==(1===arguments.length?o(n):o.apply(null,arguments))&&Cn(t,e,r,a)}}Po.addEventListener(t,e,Bi?{capture:r,passive:i}:r)}function Cn(t,e,n,r){(r||Po).removeEventListener(t,e,n)}function wn(n,r){var i=e(r.componentOptions),o=i?n.data.nativeOn:n.data.on,a=i?r.data.nativeOn:r.data.on;t(o)&&t(a)||(a=a||{},o=o||{},Po=r.elm,bn(a),tt(a,o,$n,Cn,r.context))}function xn(n,r){if(!t(n.data.domProps)||!t(r.data.domProps)){var i,o,a=r.elm,s=n.data.domProps||{},c=r.data.domProps||{};e(c.__ob__)&&(c=r.data.domProps=y({},c));for(i in s)t(c[i])&&(a[i]="");for(i in c)if(o=c[i],"textContent"!==i&&"innerHTML"!==i||(r.children&&(r.children.length=0),o!==s[i]))if("value"===i){a._value=o;var u=t(o)?"":String(o);An(a,r,u)&&(a.value=u)}else a[i]=o}}function An(t,e,n){return!t.composing&&("option"===e.tag||kn(t,n)||On(t,n))}function kn(t,e){return document.activeElement!==t&&t.value!==e}function On(t,n){var r=t.value,i=t._vModifiers;return e(i)&&i.number?l(r)!==l(n):e(i)&&i.trim?r.trim()!==n.trim():r!==n}function Sn(t){var e=Tn(t.style);return t.staticStyle?y(t.staticStyle,e):e}function Tn(t){return Array.isArray(t)?g(t):"string"==typeof t?da(t):t}function En(t,e){var n,r={};if(e)for(var i=t;i.componentInstance;)(i=i.componentInstance._vnode).data&&(n=Sn(i.data))&&y(r,n);(n=Sn(t.data))&&y(r,n);for(var o=t;o=o.parent;)o.data&&(n=Sn(o.data))&&y(r,n);return r}function jn(n,r){var i=r.data,o=n.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=Tn(r.data.style)||{};r.data.normalizedStyle=e(p.__ob__)?y({},p):p;var d=En(r,!0);for(s in f)t(d[s])&&ma(c,s,"");for(s in d)(a=d[s])!==f[s]&&ma(c,s,null==a?"":a)}}function Nn(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ln(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function In(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&y(e,ba(t.name||"v")),y(e,t),e}return"string"==typeof t?ba(t):void 0}}function Mn(t){Sa(function(){Sa(t)})}function Dn(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Nn(t,e))}function Pn(t,e){t._transitionClasses&&p(t._transitionClasses,e),Ln(t,e)}function Fn(t,e,n){var r=Rn(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Ca?Aa:Oa,c=0,u=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),t.addEventListener(s,l)}function Rn(t,e){var n,r=window.getComputedStyle(t),i=r[xa+"Delay"].split(", "),o=r[xa+"Duration"].split(", "),a=Hn(i,o),s=r[ka+"Delay"].split(", "),c=r[ka+"Duration"].split(", "),u=Hn(s,c),l=0,f=0;return e===Ca?a>0&&(n=Ca,l=a,f=o.length):e===wa?u>0&&(n=wa,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?Ca:wa:null)?n===Ca?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===Ca&&Ta.test(r[xa+"Property"])}}function Hn(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return Bn(e)+Bn(t[n])}))}function Bn(t){return 1e3*Number(t.slice(0,-1))}function Un(n,r){var i=n.elm;e(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=In(n.data.transition);if(!t(a)&&!e(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,f=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,x=a.appearCancelled,A=a.duration,k=lo,O=lo.$vnode;O&&O.parent;)k=(O=O.parent).context;var S=!k._isMounted||!n.isRootInsert;if(!S||$||""===$){var T=S&&d?d:u,E=S&&h?h:p,j=S&&v?v:f,N=S?b||m:m,L=S&&"function"==typeof $?$:y,I=S?w||g:g,M=S?x||_:_,D=l(o(A)?A.enter:A),P=!1!==s&&!Mi,F=Kn(L),R=i._enterCb=C(function(){P&&(Pn(i,j),Pn(i,E)),R.cancelled?(P&&Pn(i,T),M&&M(i)):I&&I(i),i._enterCb=null});n.data.show||et(n.data.hook||(n.data.hook={}),"insert",function(){var t=i.parentNode,e=t&&t._pending&&t._pending[n.key];e&&e.tag===n.tag&&e.elm._leaveCb&&e.elm._leaveCb(),L&&L(i,R)}),N&&N(i),P&&(Dn(i,T),Dn(i,E),Mn(function(){Dn(i,j),Pn(i,T),R.cancelled||F||(zn(D)?setTimeout(R,D):Fn(i,c,R))})),n.data.show&&(r&&r(),L&&L(i,R)),P||F||R()}}}function Vn(n,r){function i(){x.cancelled||(n.data.show||((a.parentNode._pending||(a.parentNode._pending={}))[n.key]=n),v&&v(a),b&&(Dn(a,f),Dn(a,d),Mn(function(){Dn(a,p),Pn(a,f),x.cancelled||$||(zn(w)?setTimeout(x,w):Fn(a,u,x))})),h&&h(a,x),b||$||x())}var a=n.elm;e(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var s=In(n.data.transition);if(t(s))return r();if(!e(a._leaveCb)&&1===a.nodeType){var c=s.css,u=s.type,f=s.leaveClass,p=s.leaveToClass,d=s.leaveActiveClass,v=s.beforeLeave,h=s.leave,m=s.afterLeave,y=s.leaveCancelled,g=s.delayLeave,_=s.duration,b=!1!==c&&!Mi,$=Kn(h),w=l(o(_)?_.leave:_),x=a._leaveCb=C(function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[n.key]=null),b&&(Pn(a,p),Pn(a,d)),x.cancelled?(b&&Pn(a,f),y&&y(a)):(r(),m&&m(a)),a._leaveCb=null});g?g(i):i()}}function zn(t){return"number"==typeof t&&!isNaN(t)}function Kn(n){if(t(n))return!1;var r=n.fns;return e(r)?Kn(Array.isArray(r)?r[0]:r):(n._length||n.length)>1}function Jn(t,e){!0!==e.data.show&&Un(e)}function qn(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=t.options.length;s<c;s++)if(a=t.options[s],i)o=$(r,Gn(a))>-1,a.selected!==o&&(a.selected=o);else if(b(Gn(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));i||(t.selectedIndex=-1)}}function Wn(t,e){for(var n=0,r=e.length;n<r;n++)if(b(Gn(e[n]),t))return!1;return!0}function Gn(t){return"_value"in t?t._value:t.value}function Zn(t){t.target.composing=!0}function Yn(t){t.target.composing&&(t.target.composing=!1,Qn(t.target,"input"))}function Qn(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Xn(t){return!t.componentInstance||t.data&&t.data.transition?t:Xn(t.componentInstance._vnode)}function tr(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?tr(ft(e.children)):t}function er(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[gi(o)]=i[o];return e}function nr(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function rr(t){for(;t=t.parent;)if(t.data.transition)return!0}function ir(t,e){return e.key===t.key&&e.tag===t.tag}function or(t){return t.isComment&&t.asyncFactory}function ar(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function sr(t){t.data.newPos=t.elm.getBoundingClientRect()}function cr(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function ur(t,e){var n=e?Ba(e):Ra;if(n.test(t)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(t);){(i=r.index)>a&&o.push(JSON.stringify(t.slice(a,i)));var s=Ye(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<t.length&&o.push(JSON.stringify(t.slice(a))),o.join("+")}}function lr(t,e){var n=e?Cs:$s;return t.replace(n,function(t){return bs[t]})}function fr(t,e){function n(e){l+=e,t=t.substring(e)}function r(t,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),t&&(s=t.toLowerCase()),t)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)e.end&&e.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?e.start&&e.start(t,[],!0,n,r):"p"===s&&(e.start&&e.start(t,[],!1,n,r),e.end&&e.end(t,n,r))}for(var i,o,a=[],s=e.expectHTML,c=e.isUnaryTag||Ci,u=e.canBeLeftOpenTag||Ci,l=0;t;){if(i=t,o&&gs(o)){var f=0,p=o.toLowerCase(),d=_s[p]||(_s[p]=new RegExp("([\\s\\S]*?)(</"+p+"[^>]*>)","i")),v=t.replace(d,function(t,n,r){return f=r.length,gs(p)||"noscript"===p||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),xs(p,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""});l+=t.length-v.length,t=v,r(p,l-f,l)}else{xs(o,t)&&n(1);var h=t.indexOf("<");if(0===h){if(os.test(t)){var m=t.indexOf("--\x3e");if(m>=0){e.shouldKeepComment&&e.comment(t.substring(4,m)),n(m+3);continue}}if(as.test(t)){var y=t.indexOf("]>");if(y>=0){n(y+2);continue}}var g=t.match(is);if(g){n(g[0].length);continue}var _=t.match(rs);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var e=t.match(es);if(e){var r={tagName:e[1],attrs:[],start:l};n(e[0].length);for(var i,o;!(i=t.match(ns))&&(o=t.match(Qa));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(t){var n=t.tagName,i=t.unarySlash;s&&("p"===o&&Ja(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||!!i,f=t.attrs.length,p=new Array(f),d=0;d<f;d++){var v=t.attrs[d];ss&&-1===v[0].indexOf('""')&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"";p[d]={name:v[1],value:lr(h,e.shouldDecodeNewlines)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:p}),o=n),e.start&&e.start(n,p,l,t.start,t.end)}($);continue}}var C=void 0,w=void 0,x=void 0;if(h>=0){for(w=t.slice(h);!(rs.test(w)||es.test(w)||os.test(w)||as.test(w)||(x=w.indexOf("<",1))<0);)h+=x,w=t.slice(h);C=t.substring(0,h),n(h)}h<0&&(C=t,t=""),e.chars&&C&&e.chars(C)}if(t===i){e.chars&&e.chars(t);break}}r()}function pr(t,e){function n(t){t.pre&&(s=!1),ds(t.tag)&&(c=!1)}cs=e.warn||Xe,ds=e.isPreTag||Ci,vs=e.mustUseProp||Ci,hs=e.getTagNamespace||Ci,ls=tn(e.modules,"transformNode"),fs=tn(e.modules,"preTransformNode"),ps=tn(e.modules,"postTransformNode"),us=e.delimiters;var r,i,o=[],a=!1!==e.preserveWhitespace,s=!1,c=!1;return fr(t,{warn:cs,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldKeepComment:e.comments,start:function(t,a,u){function l(t){}var f=i&&i.ns||hs(t);Ii&&"svg"===f&&(a=jr(a));var p={type:1,tag:t,attrsList:a,attrsMap:Sr(a),parent:i,children:[]};f&&(p.ns=f),Er(p)&&!Ki()&&(p.forbidden=!0);for(var d=0;d<fs.length;d++)fs[d](p,e);if(s||(dr(p),p.pre&&(s=!0)),ds(p.tag)&&(c=!0),s)vr(p);else{yr(p),gr(p),Cr(p),hr(p),p.plain=!p.key&&!a.length,mr(p),wr(p),xr(p);for(var v=0;v<ls.length;v++)ls[v](p,e);Ar(p)}if(r?o.length||r.if&&(p.elseif||p.else)&&(l(),$r(r,{exp:p.elseif,block:p})):(r=p,l()),i&&!p.forbidden)if(p.elseif||p.else)_r(p,i);else if(p.slotScope){i.plain=!1;var h=p.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[h]=p}else i.children.push(p),p.parent=i;u?n(p):(i=p,o.push(p));for(var m=0;m<ps.length;m++)ps[m](p,e)},end:function(){var t=o[o.length-1],e=t.children[t.children.length-1];e&&3===e.type&&" "===e.text&&!c&&t.children.pop(),o.length-=1,i=o[o.length-1],n(t)},chars:function(t){if(i&&(!Ii||"textarea"!==i.tag||i.attrsMap.placeholder!==t)){var e=i.children;if(t=c||t.trim()?Tr(i)?t:Ns(t):a&&e.length?" ":""){var n;!s&&" "!==t&&(n=ur(t,us))?e.push({type:2,expression:n,text:t}):" "===t&&e.length&&" "===e[e.length-1].text||e.push({type:3,text:t})}}},comment:function(t){i.children.push({type:3,text:t,isComment:!0})}}),r}function dr(t){null!=sn(t,"v-pre")&&(t.pre=!0)}function vr(t){var e=t.attrsList.length;if(e)for(var n=t.attrs=new Array(e),r=0;r<e;r++)n[r]={name:t.attrsList[r].name,value:JSON.stringify(t.attrsList[r].value)};else t.pre||(t.plain=!0)}function hr(t){var e=an(t,"key");e&&(t.key=e)}function mr(t){var e=an(t,"ref");e&&(t.ref=e,t.refInFor=kr(t))}function yr(t){var e;if(e=sn(t,"v-for")){var n=e.match(Os);if(!n)return;t.for=n[2].trim();var r=n[1].trim(),i=r.match(Ss);i?(t.alias=i[1].trim(),t.iterator1=i[2].trim(),i[3]&&(t.iterator2=i[3].trim())):t.alias=r}}function gr(t){var e=sn(t,"v-if");if(e)t.if=e,$r(t,{exp:e,block:t});else{null!=sn(t,"v-else")&&(t.else=!0);var n=sn(t,"v-else-if");n&&(t.elseif=n)}}function _r(t,e){var n=br(e.children);n&&n.if&&$r(n,{exp:t.elseif,block:t})}function br(t){for(var e=t.length;e--;){if(1===t[e].type)return t[e];t.pop()}}function $r(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function Cr(t){null!=sn(t,"v-once")&&(t.once=!0)}function wr(t){if("slot"===t.tag)t.slotName=an(t,"name");else{var e=an(t,"slot");e&&(t.slotTarget='""'===e?'"default"':e),"template"===t.tag&&(t.slotScope=sn(t,"scope"))}}function xr(t){var e;(e=an(t,"is"))&&(t.component=e),null!=sn(t,"inline-template")&&(t.inlineTemplate=!0)}function Ar(t){var e,n,r,i,o,a,s,c=t.attrsList;for(e=0,n=c.length;e<n;e++)if(r=i=c[e].name,o=c[e].value,ks.test(r))if(t.hasBindings=!0,(a=Or(r))&&(r=r.replace(js,"")),Es.test(r))r=r.replace(Es,""),o=Ye(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=gi(r))&&(r="innerHTML")),a.camel&&(r=gi(r)),a.sync&&on(t,"update:"+gi(r),un(o,"$event"))),t.component||!s&&!vs(t.tag,t.attrsMap.type,r)?nn(t,r,o):en(t,r,o);else if(As.test(r))on(t,r=r.replace(As,""),o,a,!1,cs);else{var u=(r=r.replace(ks,"")).match(Ts),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),rn(t,r,i,o,l,a)}else nn(t,r,JSON.stringify(o))}function kr(t){for(var e=t;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}function Or(t){var e=t.match(js);if(e){var n={};return e.forEach(function(t){n[t.slice(1)]=!0}),n}}function Sr(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}function Tr(t){return"script"===t.tag||"style"===t.tag}function Er(t){return"style"===t.tag||"script"===t.tag&&(!t.attrsMap.type||"text/javascript"===t.attrsMap.type)}function jr(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];Ls.test(r.name)||(r.name=r.name.replace(Is,""),e.push(r))}return e}function Nr(t,e){t&&(ms=Ms(e.staticKeys||""),ys=e.isReservedTag||Ci,Lr(t),Ir(t,!1))}function Lr(t){if(t.static=Mr(t),1===t.type){if(!ys(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var e=0,n=t.children.length;e<n;e++){var r=t.children[e];Lr(r),r.static||(t.static=!1)}if(t.ifConditions)for(var i=1,o=t.ifConditions.length;i<o;i++){var a=t.ifConditions[i].block;Lr(a),a.static||(t.static=!1)}}}function Ir(t,e){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=e),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var n=0,r=t.children.length;n<r;n++)Ir(t.children[n],e||!!t.for);if(t.ifConditions)for(var i=1,o=t.ifConditions.length;i<o;i++)Ir(t.ifConditions[i].block,e)}}function Mr(t){return 2!==t.type&&(3===t.type||!(!t.pre&&(t.hasBindings||t.if||t.for||vi(t.tag)||!ys(t.tag)||Dr(t)||!Object.keys(t).every(ms))))}function Dr(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}function Pr(t,e,n){var r=e?"nativeOn:{":"on:{";for(var i in t){var o=t[i];r+='"'+i+'":'+Fr(i,o)+","}return r.slice(0,-1)+"}"}function Fr(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return Fr(t,e)}).join(",")+"]";var n=Ps.test(e.value),r=Ds.test(e.value);if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)Hs[s]?(o+=Hs[s],Fs[s]&&a.push(s)):a.push(s);return a.length&&(i+=Rr(a)),o&&(i+=o),"function($event){"+i+(n?e.value+"($event)":r?"("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"}function Rr(t){return"if(!('button' in $event)&&"+t.map(Hr).join("&&")+")return null;"}function Hr(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var n=Fs[t];return"_k($event.keyCode,"+JSON.stringify(t)+(n?","+JSON.stringify(n):"")+")"}function Br(t,e){var n=new Us(e);return{render:"with(this){return "+(t?Ur(t,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Ur(t,e){if(t.staticRoot&&!t.staticProcessed)return Vr(t,e);if(t.once&&!t.onceProcessed)return zr(t,e);if(t.for&&!t.forProcessed)return qr(t,e);if(t.if&&!t.ifProcessed)return Kr(t,e);if("template"!==t.tag||t.slotTarget){if("slot"===t.tag)return ai(t,e);var n;if(t.component)n=si(t.component,t,e);else{var r=t.plain?void 0:Wr(t,e),i=t.inlineTemplate?null:ti(t,e,!0);n="_c('"+t.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<e.transforms.length;o++)n=e.transforms[o](t,n);return n}return ti(t,e)||"void 0"}function Vr(t,e){return t.staticProcessed=!0,e.staticRenderFns.push("with(this){return "+Ur(t,e)+"}"),"_m("+(e.staticRenderFns.length-1)+(t.staticInFor?",true":"")+")"}function zr(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return Kr(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Ur(t,e)+","+e.onceId+++(n?","+n:"")+")":Ur(t,e)}return Vr(t,e)}function Kr(t,e,n,r){return t.ifProcessed=!0,Jr(t.ifConditions.slice(),e,n,r)}function Jr(t,e,n,r){function i(t){return n?n(t,e):t.once?zr(t,e):Ur(t,e)}if(!t.length)return r||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+i(o.block)+":"+Jr(t,e,n,r):""+i(o.block)}function qr(t,e,n,r){var i=t.for,o=t.alias,a=t.iterator1?","+t.iterator1:"",s=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||Ur)(t,e)+"})"}function Wr(t,e){var n="{",r=Gr(t,e);r&&(n+=r+","),t.key&&(n+="key:"+t.key+","),t.ref&&(n+="ref:"+t.ref+","),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'+t.tag+'",');for(var i=0;i<e.dataGenFns.length;i++)n+=e.dataGenFns[i](t);if(t.attrs&&(n+="attrs:{"+ci(t.attrs)+"},"),t.props&&(n+="domProps:{"+ci(t.props)+"},"),t.events&&(n+=Pr(t.events,!1,e.warn)+","),t.nativeEvents&&(n+=Pr(t.nativeEvents,!0,e.warn)+","),t.slotTarget&&(n+="slot:"+t.slotTarget+","),t.scopedSlots&&(n+=Yr(t.scopedSlots,e)+","),t.model&&(n+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var o=Zr(t,e);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function Gr(t,e){var n=t.directives;if(n){var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=e.directives[o.name];u&&(a=!!u(t,o,e.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}return c?s.slice(0,-1)+"]":void 0}}function Zr(t,e){var n=t.children[0];if(1===n.type){var r=Br(n,e.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}function Yr(t,e){return"scopedSlots:_u(["+Object.keys(t).map(function(n){return Qr(n,t[n],e)}).join(",")+"])"}function Qr(t,e,n){return e.for&&!e.forProcessed?Xr(t,e,n):"{key:"+t+",fn:function("+String(e.attrsMap.scope)+"){return "+("template"===e.tag?ti(e,n)||"void 0":Ur(e,n))+"}}"}function Xr(t,e,n){var r=e.for,i=e.alias,o=e.iterator1?","+e.iterator1:"",a=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+r+"),function("+i+o+a+"){return "+Qr(t,e,n)+"})"}function ti(t,e,n,r,i){var o=t.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||Ur)(a,e);var s=n?ei(o,e.maybeComponent):0,c=i||ri;return"["+o.map(function(t){return c(t,e)}).join(",")+"]"+(s?","+s:"")}}function ei(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];if(1===i.type){if(ni(i)||i.ifConditions&&i.ifConditions.some(function(t){return ni(t.block)})){n=2;break}(e(i)||i.ifConditions&&i.ifConditions.some(function(t){return e(t.block)}))&&(n=1)}}return n}function ni(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function ri(t,e){return 1===t.type?Ur(t,e):3===t.type&&t.isComment?oi(t):ii(t)}function ii(t){return"_v("+(2===t.type?t.expression:ui(JSON.stringify(t.text)))+")"}function oi(t){return"_e('"+t.text+"')"}function ai(t,e){var n=t.slotName||'"default"',r=ti(t,e),i="_t("+n+(r?","+r:""),o=t.attrs&&"{"+t.attrs.map(function(t){return gi(t.name)+":"+t.value}).join(",")+"}",a=t.attrsMap["v-bind"];return!o&&!a||r||(i+=",null"),o&&(i+=","+o),a&&(i+=(o?"":",null")+","+a),i+")"}function si(t,e,n){var r=e.inlineTemplate?null:ti(e,n,!0);return"_c("+t+","+Wr(e,n)+(r?","+r:"")+")"}function ci(t){for(var e="",n=0;n<t.length;n++){var r=t[n];e+='"'+r.name+'":'+ui(r.value)+","}return e.slice(0,-1)}function ui(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function li(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),_}}function fi(t){var e=Object.create(null);return function(n,r,i){var o=(r=r||{}).delimiters?String(r.delimiters)+n:n;if(e[o])return e[o];var a=t(n,r),s={},c=[];return s.render=li(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(t){return li(t,c)}),e[o]=s}}function pi(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}var di=Object.prototype.toString,vi=f("slot,component",!0),hi=f("key,ref,slot,is"),mi=Object.prototype.hasOwnProperty,yi=/-(\w)/g,gi=v(function(t){return t.replace(yi,function(t,e){return e?e.toUpperCase():""})}),_i=v(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),bi=/([^-])([A-Z])/g,$i=v(function(t){return t.replace(bi,"$1-$2").replace(bi,"$1-$2").toLowerCase()}),Ci=function(t,e,n){return!1},wi=function(t){return t},xi="data-server-rendered",Ai=["component","directive","filter"],ki=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],Oi={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Ci,isReservedAttr:Ci,isUnknownElement:Ci,getTagNamespace:_,parsePlatformTagName:wi,mustUseProp:Ci,_lifecycleHooks:ki},Si=Object.freeze({}),Ti=/[^\w.$]/,Ei=_,ji="__proto__"in{},Ni="undefined"!=typeof window,Li=Ni&&window.navigator.userAgent.toLowerCase(),Ii=Li&&/msie|trident/.test(Li),Mi=Li&&Li.indexOf("msie 9.0")>0,Di=Li&&Li.indexOf("edge/")>0,Pi=Li&&Li.indexOf("android")>0,Fi=Li&&/iphone|ipad|ipod|ios/.test(Li),Ri=Li&&/chrome\/\d+/.test(Li)&&!Di,Hi={}.watch,Bi=!1;if(Ni)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){Bi=!0}}),window.addEventListener("test-passive",null,Ui)}catch(t){}var Vi,zi,Ki=function(){return void 0===Vi&&(Vi=!Ni&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),Vi},Ji=Ni&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,qi="undefined"!=typeof Symbol&&O(Symbol)&&"undefined"!=typeof Reflect&&O(Reflect.ownKeys),Wi=function(){function t(){r=!1;var t=n.slice(0);n.length=0;for(var e=0;e<t.length;e++)t[e]()}var e,n=[],r=!1;if("undefined"!=typeof Promise&&O(Promise)){var i=Promise.resolve(),o=function(t){console.error(t)};e=function(){i.then(t).catch(o),Fi&&setTimeout(_)}}else if("undefined"==typeof MutationObserver||!O(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())e=function(){setTimeout(t,0)};else{var a=1,s=new MutationObserver(t),c=document.createTextNode(String(a));s.observe(c,{characterData:!0}),e=function(){a=(a+1)%2,c.data=String(a)}}return function(t,i){var o;if(n.push(function(){if(t)try{t.call(i)}catch(t){k(t,i,"nextTick")}else o&&o(i)}),r||(r=!0,e()),!t&&"undefined"!=typeof Promise)return new Promise(function(t,e){o=t})}}();zi="undefined"!=typeof Set&&O(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var Gi=0,Zi=function(){this.id=Gi++,this.subs=[]};Zi.prototype.addSub=function(t){this.subs.push(t)},Zi.prototype.removeSub=function(t){p(this.subs,t)},Zi.prototype.depend=function(){Zi.target&&Zi.target.addDep(this)},Zi.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},Zi.target=null;var Yi=[],Qi=Array.prototype,Xi=Object.create(Qi);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=Qi[t];x(Xi,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var to=Object.getOwnPropertyNames(Xi),eo={shouldConvert:!0},no=function(t){this.value=t,this.dep=new Zi,this.vmCount=0,x(t,"__ob__",this),Array.isArray(t)?((ji?E:j)(t,Xi,to),this.observeArray(t)):this.walk(t)};no.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)L(t,e[n],t[e[n]])},no.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)N(t[e])};var ro=Oi.optionMergeStrategies;ro.data=function(t,e,n){return n?F(t,e,n):e&&"function"!=typeof e?t:F.call(this,t,e)},ki.forEach(function(t){ro[t]=R}),Ai.forEach(function(t){ro[t+"s"]=H}),ro.watch=function(t,e){if(t===Hi&&(t=void 0),e===Hi&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};y(n,t);for(var r in e){var i=n[r],o=e[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):Array.isArray(o)?o:[o]}return n},ro.props=ro.methods=ro.inject=ro.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return y(n,t),y(n,e),n},ro.provide=F;var io=function(t,e){return void 0===e?t:e},oo=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ao={child:{}};ao.child.get=function(){return this.componentInstance},Object.defineProperties(oo.prototype,ao);var so,co=function(t){void 0===t&&(t="");var e=new oo;return e.text=t,e.isComment=!0,e},uo=v(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}),lo=null,fo=[],po=[],vo={},ho=!1,mo=!1,yo=0,go=0,_o=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++go,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new zi,this.newDepIds=new zi,this.expression="","function"==typeof e?this.getter=e:(this.getter=A(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};_o.prototype.get=function(){S(this);var t,e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;k(t,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Nt(t),T(),this.cleanupDeps()}return t},_o.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},_o.prototype.cleanupDeps=function(){for(var t=this,e=this.deps.length;e--;){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},_o.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():jt(this)},_o.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||o(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){k(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},_o.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},_o.prototype.depend=function(){for(var t=this,e=this.deps.length;e--;)t.deps[e].depend()},_o.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||p(this.vm._watchers,this);for(var e=this.deps.length;e--;)t.deps[e].removeSub(t);this.active=!1}};var bo=new zi,$o={enumerable:!0,configurable:!0,get:_,set:_},Co={lazy:!0},wo={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=Yt(t,lo,n,r)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var i=t;wo.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions;$t(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,At(n,"mounted")),t.data.keepAlive&&(e._isMounted?Tt(n):wt(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?xt(e,!0):e.$destroy())}},xo=Object.keys(wo),Ao=1,ko=2,Oo=0;!function(t){t.prototype._init=function(t){var e=this;e._uid=Oo++,e._isVue=!0,t&&t._isComponent?he(e,t):e.$options=z(me(e.constructor),t||{},e),e._renderProxy=e,e._self=e,_t(e),pt(e),ve(e),At(e,"beforeCreate"),Jt(e),Mt(e),Kt(e),At(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}(_e),function(t){var e={};e.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=I,t.prototype.$delete=M,t.prototype.$watch=function(t,e,n){var r=this;if(a(e))return zt(r,t,e,n);(n=n||{}).user=!0;var i=new _o(r,t,e,n);return n.immediate&&e.call(r,i.value),function(){i.teardown()}}}(_e),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,i=this;if(Array.isArray(t))for(var o=0,a=t.length;o<a;o++)r.$on(t[o],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){function n(){r.$off(t,n),e.apply(r,arguments)}var r=this;return n.fn=e,r.$on(t,n),r},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var i=0,o=t.length;i<o;i++)n.$off(t[i],e);return r}var a=r._events[t];if(!a)return r;if(1===arguments.length)return r._events[t]=null,r;for(var s,c=a.length;c--;)if((s=a[c])===e||s.fn===e){a.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?m(n):n;for(var r=m(arguments,1),i=0,o=n.length;i<o;i++)try{n[i].apply(e,r)}catch(n){k(n,e,'event handler for "'+t+'"')}}return e}}(_e),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&At(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=lo;lo=n,n._vnode=t,i?n.$el=n.__patch__(i,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),lo=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){At(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||p(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),At(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}(_e),function(t){t.prototype.$nextTick=function(t){return Wi(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,r=e.staticRenderFns,i=e._parentVnode;if(t._isMounted)for(var o in t.$slots)t.$slots[o]=Q(t.$slots[o]);t.$scopedSlots=i&&i.data.scopedSlots||Si,r&&!t._staticTrees&&(t._staticTrees=[]),t.$vnode=i;var a;try{a=n.call(t._renderProxy,t.$createElement)}catch(e){k(e,t,"render function"),a=t._vnode}return a instanceof oo||(a=co()),a.parent=i,a},t.prototype._o=le,t.prototype._n=l,t.prototype._s=u,t.prototype._l=ie,t.prototype._t=oe,t.prototype._q=b,t.prototype._i=$,t.prototype._m=ue,t.prototype._f=ae,t.prototype._k=se,t.prototype._b=ce,t.prototype._v=Z,t.prototype._e=co,t.prototype._u=gt,t.prototype._g=de}(_e);var So=[String,RegExp,Array],To={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:So,exclude:So},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)Te(t.cache[e])},watch:{include:function(t){Se(this.cache,this._vnode,function(e){return Oe(t,e)})},exclude:function(t){Se(this.cache,this._vnode,function(e){return!Oe(t,e)})}},render:function(){var t=ft(this.$slots.default),e=t&&t.componentOptions;if(e){var n=ke(e);if(n&&(this.include&&!Oe(this.include,n)||this.exclude&&Oe(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}}};!function(t){var e={};e.get=function(){return Oi},Object.defineProperty(t,"config",e),t.util={warn:Ei,extend:y,mergeOptions:z,defineReactive:L},t.set=I,t.delete=M,t.nextTick=Wi,t.options=Object.create(null),Ai.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,y(t.options.components,To),be(t),$e(t),Ce(t),Ae(t)}(_e),Object.defineProperty(_e.prototype,"$isServer",{get:Ki}),Object.defineProperty(_e.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),_e.version="2.4.0";var Eo,jo,No,Lo,Io,Mo,Do,Po,Fo,Ro=f("style,class"),Ho=f("input,textarea,option,select"),Bo=function(t,e,n){return"value"===n&&Ho(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Uo=f("contenteditable,draggable,spellcheck"),Vo=f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),zo="http://www.w3.org/1999/xlink",Ko=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Jo=function(t){return Ko(t)?t.slice(6,t.length):""},qo=function(t){return null==t||!1===t},Wo={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Go=f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Zo=f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Yo=function(t){return Go(t)||Zo(t)},Qo=Object.create(null),Xo=Object.freeze({createElement:function(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(t,e){return document.createElementNS(Wo[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setAttribute:function(t,e,n){t.setAttribute(e,n)}}),ta={create:function(t,e){Re(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Re(t,!0),Re(e))},destroy:function(t){Re(t,!0)}},ea=new oo("",{},[]),na=["create","activate","update","remove","destroy"],ra={create:Ve,update:Ve,destroy:function(t){Ve(t,ea)}},ia=Object.create(null),oa=[ta,ra],aa={create:We,update:We},sa={create:Ze,update:Ze},ca=/[\w).+\-_$\]]/,ua="__r",la="__c",fa={create:wn,update:wn},pa={create:xn,update:xn},da=v(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}),va=/^--/,ha=/\s*!important$/,ma=function(t,e,n){if(va.test(e))t.style.setProperty(e,n);else if(ha.test(n))t.style.setProperty(e,n.replace(ha,""),"important");else{var r=ga(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},ya=["Webkit","Moz","ms"],ga=v(function(t){if(Fo=Fo||document.createElement("div").style,"filter"!==(t=gi(t))&&t in Fo)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<ya.length;n++){var r=ya[n]+e;if(r in Fo)return r}}),_a={create:jn,update:jn},ba=v(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),$a=Ni&&!Mi,Ca="transition",wa="animation",xa="transition",Aa="transitionend",ka="animation",Oa="animationend";$a&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(xa="WebkitTransition",Aa="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(ka="WebkitAnimation",Oa="webkitAnimationEnd"));var Sa=Ni&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,Ta=/\b(transform|all)(,|$)/,Ea=function(r){function o(t){return new oo(E.tagName(t).toLowerCase(),{},[],void 0,t)}function a(t,e){function n(){0==--n.listeners&&s(t)}return n.listeners=e,n}function s(t){var n=E.parentNode(t);e(n)&&E.removeChild(n,t)}function c(t,r,i,o,a){if(t.isRootInsert=!a,!u(t,r,i,o)){var s=t.data,c=t.children,l=t.tag;e(l)?(t.elm=t.ns?E.createElementNS(t.ns,l):E.createElement(l,t),y(t),v(t,c,r),e(s)&&m(t,r),d(i,t.elm,o)):n(t.isComment)?(t.elm=E.createComment(t.text),d(i,t.elm,o)):(t.elm=E.createTextNode(t.text),d(i,t.elm,o))}}function u(t,r,i,o){var a=t.data;if(e(a)){var s=e(t.componentInstance)&&a.keepAlive;if(e(a=a.hook)&&e(a=a.init)&&a(t,!1,i,o),e(t.componentInstance))return l(t,r),n(s)&&p(t,r,i,o),!0}}function l(t,n){e(t.data.pendingInsert)&&(n.push.apply(n,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,h(t)?(m(t,n),y(t)):(Re(t),n.push(t))}function p(t,n,r,i){for(var o,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,e(o=a.data)&&e(o=o.transition)){for(o=0;o<S.activate.length;++o)S.activate[o](ea,a);n.push(a);break}d(r,t.elm,i)}function d(t,n,r){e(t)&&(e(r)?r.parentNode===t&&E.insertBefore(t,n,r):E.appendChild(t,n))}function v(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)c(e[r],n,t.elm,null,!0);else i(t.text)&&E.appendChild(t.elm,E.createTextNode(t.text))}function h(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return e(t.tag)}function m(t,n){for(var r=0;r<S.create.length;++r)S.create[r](ea,t);e(k=t.data.hook)&&(e(k.create)&&k.create(ea,t),e(k.insert)&&n.push(t))}function y(t){for(var n,r=t;r;)e(n=r.context)&&e(n=n.$options._scopeId)&&E.setAttribute(t.elm,n,""),r=r.parent;e(n=lo)&&n!==t.context&&e(n=n.$options._scopeId)&&E.setAttribute(t.elm,n,"")}function g(t,e,n,r,i,o){for(;r<=i;++r)c(n[r],o,t,e)}function _(t){var n,r,i=t.data;if(e(i))for(e(n=i.hook)&&e(n=n.destroy)&&n(t),n=0;n<S.destroy.length;++n)S.destroy[n](t);if(e(n=t.children))for(r=0;r<t.children.length;++r)_(t.children[r])}function b(t,n,r,i){for(;r<=i;++r){var o=n[r];e(o)&&(e(o.tag)?($(o),_(o)):s(o.elm))}}function $(t,n){if(e(n)||e(t.data)){var r,i=S.remove.length+1;for(e(n)?n.listeners+=i:n=a(t.elm,i),e(r=t.componentInstance)&&e(r=r._vnode)&&e(r.data)&&$(r,n),r=0;r<S.remove.length;++r)S.remove[r](t,n);e(r=t.data.hook)&&e(r=r.remove)?r(t,n):n()}else s(t.elm)}function C(n,r,i,o,a){for(var s,u,l,f=0,p=0,d=r.length-1,v=r[0],h=r[d],m=i.length-1,y=i[0],_=i[m],$=!a;f<=d&&p<=m;)t(v)?v=r[++f]:t(h)?h=r[--d]:He(v,y)?(w(v,y,o),v=r[++f],y=i[++p]):He(h,_)?(w(h,_,o),h=r[--d],_=i[--m]):He(v,_)?(w(v,_,o),$&&E.insertBefore(n,v.elm,E.nextSibling(h.elm)),v=r[++f],_=i[--m]):He(h,y)?(w(h,y,o),$&&E.insertBefore(n,h.elm,v.elm),h=r[--d],y=i[++p]):(t(s)&&(s=Ue(r,f,d)),t(u=e(y.key)?s[y.key]:null)?(c(y,o,n,v.elm),y=i[++p]):He(l=r[u],y)?(w(l,y,o),r[u]=void 0,$&&E.insertBefore(n,l.elm,v.elm),y=i[++p]):(c(y,o,n,v.elm),y=i[++p]));f>d?g(n,t(i[m+1])?null:i[m+1].elm,i,p,m,o):p>m&&b(n,r,f,d)}function w(r,i,o,a){if(r!==i){var s=i.elm=r.elm;if(n(r.isAsyncPlaceholder))e(i.asyncFactory.resolved)?A(r.elm,i,o):i.isAsyncPlaceholder=!0;else if(n(i.isStatic)&&n(r.isStatic)&&i.key===r.key&&(n(i.isCloned)||n(i.isOnce)))i.componentInstance=r.componentInstance;else{var c,u=i.data;e(u)&&e(c=u.hook)&&e(c=c.prepatch)&&c(r,i);var l=r.children,f=i.children;if(e(u)&&h(i)){for(c=0;c<S.update.length;++c)S.update[c](r,i);e(c=u.hook)&&e(c=c.update)&&c(r,i)}t(i.text)?e(l)&&e(f)?l!==f&&C(s,l,f,o,a):e(f)?(e(r.text)&&E.setTextContent(s,""),g(s,null,f,0,f.length-1,o)):e(l)?b(s,l,0,l.length-1):e(r.text)&&E.setTextContent(s,""):r.text!==i.text&&E.setTextContent(s,i.text),e(u)&&e(c=u.hook)&&e(c=c.postpatch)&&c(r,i)}}}function x(t,r,i){if(n(i)&&e(t.parent))t.parent.data.pendingInsert=r;else for(var o=0;o<r.length;++o)r[o].data.hook.insert(r[o])}function A(t,r,i){if(n(r.isComment)&&e(r.asyncFactory))return r.elm=t,r.isAsyncPlaceholder=!0,!0;r.elm=t;var o=r.tag,a=r.data,s=r.children;if(e(a)&&(e(k=a.hook)&&e(k=k.init)&&k(r,!0),e(k=r.componentInstance)))return l(r,i),!0;if(e(o)){if(e(s))if(t.hasChildNodes()){for(var c=!0,u=t.firstChild,f=0;f<s.length;f++){if(!u||!A(u,s[f],i)){c=!1;break}u=u.nextSibling}if(!c||u)return!1}else v(r,s,i);if(e(a))for(var p in a)if(!j(p)){m(r,i);break}}else t.data!==r.text&&(t.data=r.text);return!0}var k,O,S={},T=r.modules,E=r.nodeOps;for(k=0;k<na.length;++k)for(S[na[k]]=[],O=0;O<T.length;++O)e(T[O][na[k]])&&S[na[k]].push(T[O][na[k]]);var j=f("attrs,style,class,staticClass,staticStyle,key");return function(r,i,a,s,u,l){if(!t(i)){var f=!1,p=[];if(t(r))f=!0,c(i,p,u,l);else{var d=e(r.nodeType);if(!d&&He(r,i))w(r,i,p,s);else{if(d){if(1===r.nodeType&&r.hasAttribute(xi)&&(r.removeAttribute(xi),a=!0),n(a)&&A(r,i,p))return x(i,p,!0),r;r=o(r)}var v=r.elm,m=E.parentNode(v);if(c(i,p,v._leaveCb?null:m,E.nextSibling(v)),e(i.parent)){for(var y=i.parent;y;)y.elm=i.elm,y=y.parent;if(h(i))for(var g=0;g<S.create.length;++g)S.create[g](ea,i.parent)}e(m)?b(m,[r],0,0):e(r.tag)&&_(r)}}return x(i,p,f),i.elm}e(r)&&_(r)}}({nodeOps:Xo,modules:[aa,sa,fa,pa,_a,Ni?{create:Jn,activate:Jn,remove:function(t,e){!0!==t.data.show?Vn(t,e):e()}}:{}].concat(oa)}),ja=f("text,number,password,search,email,tel,url");Mi&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Qn(t,"input")});var Na={model:{inserted:function(t,e,n){if("select"===n.tag){var r=function(){qn(t,e,n.context)};r(),(Ii||Di)&&setTimeout(r,0)}else("textarea"===n.tag||ja(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("change",Yn),Pi||(t.addEventListener("compositionstart",Zn),t.addEventListener("compositionend",Yn)),Mi&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){"select"===n.tag&&(qn(t,e,n.context),(t.multiple?e.value.some(function(e){return Wn(e,t.options)}):e.value!==e.oldValue&&Wn(e.value,t.options))&&Qn(t,"change"))}},show:{bind:function(t,e,n){var r=e.value,i=(n=Xn(n)).data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i&&!Mi?(n.data.show=!0,Un(n,function(){t.style.display=o})):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value;r!==e.oldValue&&((n=Xn(n)).data&&n.data.transition&&!Mi?(n.data.show=!0,r?Un(n,function(){t.style.display=t.__vOriginalDisplay}):Vn(n,function(){t.style.display="none"})):t.style.display=r?t.__vOriginalDisplay:"none")},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}}},La={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},Ia={name:"transition",props:La,abstract:!0,render:function(t){var e=this,n=this.$options._renderChildren;if(n&&(n=n.filter(function(t){return t.tag||or(t)})).length){var r=this.mode,o=n[0];if(rr(this.$vnode))return o;var a=tr(o);if(!a)return o;if(this._leaving)return nr(t,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=er(this),u=this._vnode,l=tr(u);if(a.data.directives&&a.data.directives.some(function(t){return"show"===t.name})&&(a.data.show=!0),l&&l.data&&!ir(a,l)&&!or(l)){var f=l&&(l.data.transition=y({},c));if("out-in"===r)return this._leaving=!0,et(f,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),nr(t,o);if("in-out"===r){if(or(a))return u;var p,d=function(){p()};et(c,"afterEnter",d),et(c,"enterCancelled",d),et(f,"delayLeave",function(t){p=t})}}return o}}},Ma=y({tag:String,moveClass:String},La);delete Ma.mode;var Da={Transition:Ia,TransitionGroup:{props:Ma,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=er(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";if(t.length&&this.hasMove(t[0].elm,e)){t.forEach(ar),t.forEach(sr),t.forEach(cr);document.body.offsetHeight;t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;Dn(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Aa,n._moveCb=function t(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Aa,t),n._moveCb=null,Pn(n,e))})}})}},methods:{hasMove:function(t,e){if(!$a)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){Ln(n,t)}),Nn(n,e),n.style.display="none",this.$el.appendChild(n);var r=Rn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};_e.config.mustUseProp=Bo,_e.config.isReservedTag=Yo,_e.config.isReservedAttr=Ro,_e.config.getTagNamespace=Pe,_e.config.isUnknownElement=function(t){if(!Ni)return!0;if(Yo(t))return!1;if(t=t.toLowerCase(),null!=Qo[t])return Qo[t];var e=document.createElement(t);return t.indexOf("-")>-1?Qo[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Qo[t]=/HTMLUnknownElement/.test(e.toString())},y(_e.options.directives,Na),y(_e.options.components,Da),_e.prototype.__patch__=Ni?Ea:_,_e.prototype.$mount=function(t,e){return t=t&&Ni?Fe(t):void 0,bt(this,t,e)},setTimeout(function(){Oi.devtools&&Ji&&Ji.emit("init",_e)},0);var Pa,Fa=!!Ni&&function(t,e){var n=document.createElement("div");return n.innerHTML='<div a="'+t+'"/>',n.innerHTML.indexOf(e)>0}("\n","&#10;"),Ra=/\{\{((?:.|\n)+?)\}\}/g,Ha=/[-.*+?^${}()|[\]\/\\]/g,Ba=v(function(t){var e=t[0].replace(Ha,"\\$&"),n=t[1].replace(Ha,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")}),Ua=[{staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var n=sn(t,"class");n&&(t.staticClass=JSON.stringify(n));var r=an(t,"class",!1);r&&(t.classBinding=r)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}},{staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var n=sn(t,"style");n&&(t.staticStyle=JSON.stringify(da(n)));var r=an(t,"style",!1);r&&(t.styleBinding=r)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}}],Va={model:function(t,e,n){Do=n;var r=e.value,i=e.modifiers,o=t.tag,a=t.attrsMap.type;if(t.component)return cn(t,r,i),!1;if("select"===o)gn(t,r,i);else if("input"===o&&"checkbox"===a)mn(t,r,i);else if("input"===o&&"radio"===a)yn(t,r,i);else if("input"===o||"textarea"===o)_n(t,r,i);else if(!Oi.isReservedTag(o))return cn(t,r,i),!1;return!0},text:function(t,e){e.value&&en(t,"textContent","_s("+e.value+")")},html:function(t,e){e.value&&en(t,"innerHTML","_s("+e.value+")")}},za=f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Ka=f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Ja=f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),qa={expectHTML:!0,modules:Ua,directives:Va,isPreTag:function(t){return"pre"===t},isUnaryTag:za,mustUseProp:Bo,canBeLeftOpenTag:Ka,isReservedTag:Yo,getTagNamespace:Pe,staticKeys:function(t){return t.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(",")}(Ua)},Wa={decode:function(t){return Pa=Pa||document.createElement("div"),Pa.innerHTML=t,Pa.textContent}},Ga=/([^\s"'<>/=]+)/,Za=/(?:=)/,Ya=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],Qa=new RegExp("^\\s*"+Ga.source+"(?:\\s*("+Za.source+")\\s*(?:"+Ya.join("|")+"))?"),Xa="[a-zA-Z_][\\w\\-\\.]*",ts="((?:"+Xa+"\\:)?"+Xa+")",es=new RegExp("^<"+ts),ns=/^\s*(\/?)>/,rs=new RegExp("^<\\/"+ts+"[^>]*>"),is=/^<!DOCTYPE [^>]+>/i,os=/^<!--/,as=/^<!\[/,ss=!1;"x".replace(/x(.)?/g,function(t,e){ss=""===e});var cs,us,ls,fs,ps,ds,vs,hs,ms,ys,gs=f("script,style,textarea",!0),_s={},bs={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},$s=/&(?:lt|gt|quot|amp);/g,Cs=/&(?:lt|gt|quot|amp|#10);/g,ws=f("pre,textarea",!0),xs=function(t,e){return t&&ws(t)&&"\n"===e[0]},As=/^@|^v-on:/,ks=/^v-|^@|^:/,Os=/(.*?)\s+(?:in|of)\s+(.*)/,Ss=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,Ts=/:(.*)$/,Es=/^:|^v-bind:/,js=/\.[^.]+/g,Ns=v(Wa.decode),Ls=/^xmlns:NS\d+/,Is=/^NS\d+:/,Ms=v(function(t){return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(t?","+t:""))}),Ds=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Ps=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Fs={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Rs=function(t){return"if("+t+")return null;"},Hs={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Rs("$event.target !== $event.currentTarget"),ctrl:Rs("!$event.ctrlKey"),shift:Rs("!$event.shiftKey"),alt:Rs("!$event.altKey"),meta:Rs("!$event.metaKey"),left:Rs("'button' in $event && $event.button !== 0"),middle:Rs("'button' in $event && $event.button !== 1"),right:Rs("'button' in $event && $event.button !== 2")},Bs={on:function(t,e){t.wrapListeners=function(t){return"_g("+t+","+e.value+")"}},bind:function(t,e){t.wrapData=function(n){return"_b("+n+",'"+t.tag+"',"+e.value+","+(e.modifiers&&e.modifiers.prop?"true":"false")+(e.modifiers&&e.modifiers.sync?",true":"")+")"}},cloak:_},Us=function(t){this.options=t,this.warn=t.warn||Xe,this.transforms=tn(t.modules,"transformCode"),this.dataGenFns=tn(t.modules,"genData"),this.directives=y(y({},Bs),t.directives);var e=t.isReservedTag||Ci;this.maybeComponent=function(t){return!e(t.tag)},this.onceId=0,this.staticRenderFns=[]},Vs=function(t){return function(e){function n(n,r){var i=Object.create(e),o=[],a=[];if(i.warn=function(t,e){(e?a:o).push(t)},r){r.modules&&(i.modules=(e.modules||[]).concat(r.modules)),r.directives&&(i.directives=y(Object.create(e.directives),r.directives));for(var s in r)"modules"!==s&&"directives"!==s&&(i[s]=r[s])}var c=t(n,i);return c.errors=o,c.tips=a,c}return{compile:n,compileToFunctions:fi(n)}}}(function(t,e){var n=pr(t.trim(),e);Nr(n,e);var r=Br(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})(qa).compileToFunctions,zs=v(function(t){var e=Fe(t);return e&&e.innerHTML}),Ks=_e.prototype.$mount;return _e.prototype.$mount=function(t,e){if((t=t&&Fe(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=zs(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=pi(t));if(r){var i=Vs(r,{shouldDecodeNewlines:Fa,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return Ks.call(this,t,e)},_e.compile=Vs,_e});


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/utils/1Class.coffee ---- */


(function() {
  var Class,
    slice = [].slice;

  Class = (function() {
    function Class() {}

    Class.prototype.trace = true;

    Class.prototype.log = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      if (!this.trace) {
        return;
      }
      if (typeof console === 'undefined') {
        return;
      }
      args.unshift("[" + this.constructor.name + "]");
      console.log.apply(console, args);
      return this;
    };

    Class.prototype.logStart = function() {
      var args, name;
      name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (!this.trace) {
        return;
      }
      this.logtimers || (this.logtimers = {});
      this.logtimers[name] = +(new Date);
      if (args.length > 0) {
        this.log.apply(this, ["" + name].concat(slice.call(args), ["(started)"]));
      }
      return this;
    };

    Class.prototype.logEnd = function() {
      var args, ms, name;
      name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      ms = +(new Date) - this.logtimers[name];
      this.log.apply(this, ["" + name].concat(slice.call(args), ["(Done in " + ms + "ms)"]));
      return this;
    };

    return Class;

  })();

  window.Class = Class;

}).call(this);


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/utils/2ZeroFrame.coffee ---- */


(function() {
  var ZeroFrame,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ZeroFrame = (function(superClass) {
    extend(ZeroFrame, superClass);

    function ZeroFrame(url) {
      this.onCloseWebsocket = bind(this.onCloseWebsocket, this);
      this.onOpenWebsocket = bind(this.onOpenWebsocket, this);
      this.onRequest = bind(this.onRequest, this);
      this.onMessage = bind(this.onMessage, this);
      this.url = url;
      this.waiting_cb = {};
      this.wrapper_nonce = document.location.href.replace(/.*wrapper_nonce=([A-Za-z0-9]+).*/, "$1");
      this.connect();
      this.next_message_id = 1;
      this.init();
    }

    ZeroFrame.prototype.init = function() {
      return this;
    };

    ZeroFrame.prototype.connect = function() {
      this.target = window.parent;
      window.addEventListener("message", this.onMessage, false);
      return this.cmd("innerReady");
    };

    ZeroFrame.prototype.onMessage = function(e) {
      var cmd, message;
      message = e.data;
      cmd = message.cmd;
      if (cmd === "response") {
        if (this.waiting_cb[message.to] != null) {
          return this.waiting_cb[message.to](message.result);
        } else {
          return this.log("Websocket callback not found:", message);
        }
      } else if (cmd === "wrapperReady") {
        return this.cmd("innerReady");
      } else if (cmd === "ping") {
        return this.response(message.id, "pong");
      } else if (cmd === "wrapperOpenedWebsocket") {
        return this.onOpenWebsocket();
      } else if (cmd === "wrapperClosedWebsocket") {
        return this.onCloseWebsocket();
      } else {
        return this.onRequest(cmd, message);
      }
    };

    ZeroFrame.prototype.onRequest = function(cmd, message) {
      return this.log("Unknown request", message);
    };

    ZeroFrame.prototype.response = function(to, result) {
      return this.send({
        "cmd": "response",
        "to": to,
        "result": result
      });
    };

    ZeroFrame.prototype.cmd = function(cmd, params, cb) {
      if (params == null) {
        params = {};
      }
      if (cb == null) {
        cb = null;
      }
      return this.send({
        "cmd": cmd,
        "params": params
      }, cb);
    };

    ZeroFrame.prototype.send = function(message, cb) {
      if (cb == null) {
        cb = null;
      }
      message.wrapper_nonce = this.wrapper_nonce;
      message.id = this.next_message_id;
      this.next_message_id += 1;
      this.target.postMessage(message, "*");
      if (cb) {
        return this.waiting_cb[message.id] = cb;
      }
    };

    ZeroFrame.prototype.onOpenWebsocket = function() {
      return this.log("Websocket open");
    };

    ZeroFrame.prototype.onCloseWebsocket = function() {
      return this.log("Websocket close");
    };

    return ZeroFrame;

  })(Class);

  window.ZeroFrame = ZeroFrame;

}).call(this);


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/utils/3Menu.coffee ---- */


(function() {
  var Menu,
    slice = [].slice;

  Menu = (function() {
    function Menu(button) {
      this.button = button;
      this.elem = $(".menu.template").clone().removeClass("template");
      this.elem.appendTo("body");
      this.items = [];
    }

    Menu.prototype.show = function() {
      var button_pos;
      if (window.visible_menu && window.visible_menu.button[0] === this.button[0]) {
        window.visible_menu.hide();
        return this.hide();
      } else {
        button_pos = this.button.offset();
        this.elem.css({
          "top": button_pos.top + this.button.outerHeight(),
          "left": button_pos.left + this.button.outerWidth() - this.elem.outerWidth()
        });
        this.button.addClass("menu-active");
        this.elem.addClass("visible");
        if (window.visible_menu) {
          window.visible_menu.hide();
        }
        return window.visible_menu = this;
      }
    };

    Menu.prototype.hide = function() {
      this.elem.removeClass("visible");
      this.button.removeClass("menu-active");
      return window.visible_menu = null;
    };

    Menu.prototype.addItem = function(title, cb) {
      var item;
      item = $(".menu-item.template", this.elem).clone().removeClass("template");
      item.html(title);
      item.on("click", (function(_this) {
        return function() {
          if (!cb(item)) {
            _this.hide();
          }
          return false;
        };
      })(this));
      item.appendTo(this.elem);
      this.items.push(item);
      return item;
    };

    Menu.prototype.log = function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return console.log.apply(console, ["[Menu]"].concat(slice.call(args)));
    };

    return Menu;

  })();

  window.Menu = Menu;

  $("body").on("click", function(e) {
    if (window.visible_menu && e.target !== window.visible_menu.button[0] && $(e.target).parent()[0] !== window.visible_menu.elem[0]) {
      return window.visible_menu.hide();
    }
  });

}).call(this);


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/utils/4Follow.coffee ---- */


(function() {
  var Follow,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Follow = (function(superClass) {
    extend(Follow, superClass);

    function Follow(elem) {
      this.elem = elem;
      this.handleMenuClick = bind(this.handleMenuClick, this);
      this.init = bind(this.init, this);
      this.menu = new Menu(this.elem);
      this.feeds = {};
      this.follows = {};
      this.elem.off("click");
      this.elem.on("click", (function(_this) {
        return function() {
          var is_default_feed, menu_item, param, query, ref, ref1, title;
          if (page.server_info.rev > 850) {
            if (_this.elem.hasClass("following")) {
              _this.showFeeds();
            } else {
              _this.followDefaultFeeds();
              ref = _this.feeds;
              for (title in ref) {
                ref1 = ref[title], query = ref1[0], menu_item = ref1[1], is_default_feed = ref1[2], param = ref1[3];
                if (!menu_item.hasClass("selected")) {
                  _this.showFeeds();
                  break;
                }
              }
            }
          } else {
            page.cmd("wrapperNotification", ["info", "Please update your ZeroNet client to use this feature"]);
          }
          return false;
        };
      })(this));
    }

    Follow.prototype.init = function() {
      if (!this.feeds) {
        return;
      }
      page.cmd("feedListFollow", [], (function(_this) {
        return function(follows1) {
          var is_default_feed, menu_item, param, query, ref, ref1, title;
          _this.follows = follows1;
          ref = _this.feeds;
          for (title in ref) {
            ref1 = ref[title], query = ref1[0], menu_item = ref1[1], is_default_feed = ref1[2], param = ref1[3];
            if (_this.follows[title] && indexOf.call(_this.follows[title][1], param) >= 0) {
              menu_item.addClass("selected");
            } else {
              menu_item.removeClass("selected");
            }
          }
          _this.updateListitems();
          return _this.elem.css("display", "inline-block");
        };
      })(this));
      return setTimeout(((function(_this) {
        return function() {
          if (typeof page.site_info.feed_follow_num !== "undefined" && page.site_info.feed_follow_num === null) {
            return _this.followDefaultFeeds();
          }
        };
      })(this)), 100);
    };

    Follow.prototype.addFeed = function(title, query, is_default_feed, param) {
      var menu_item;
      if (is_default_feed == null) {
        is_default_feed = false;
      }
      if (param == null) {
        param = "";
      }
      menu_item = this.menu.addItem(title, this.handleMenuClick);
      return this.feeds[title] = [query, menu_item, is_default_feed, param];
    };

    Follow.prototype.handleMenuClick = function(item) {
      item.toggleClass("selected");
      this.updateListitems();
      this.saveFeeds();
      return true;
    };

    Follow.prototype.showFeeds = function() {
      return this.menu.show();
    };

    Follow.prototype.followDefaultFeeds = function() {
      var is_default_feed, menu_item, param, query, ref, ref1, title;
      ref = this.feeds;
      for (title in ref) {
        ref1 = ref[title], query = ref1[0], menu_item = ref1[1], is_default_feed = ref1[2], param = ref1[3];
        if (is_default_feed) {
          menu_item.addClass("selected");
          this.log("Following", title, menu_item);
        }
      }
      this.updateListitems();
      return this.saveFeeds();
    };

    Follow.prototype.updateListitems = function() {
      if (this.menu.elem.find(".selected").length > 0) {
        return this.elem.addClass("following");
      } else {
        return this.elem.removeClass("following");
      }
    };

    Follow.prototype.saveFeeds = function() {
      return page.cmd("feedListFollow", [], (function(_this) {
        return function(follows) {
          var is_default_feed, item, menu_item, param, params, query, ref, ref1, title;
          _this.follows = follows;
          ref = _this.feeds;
          for (title in ref) {
            ref1 = ref[title], query = ref1[0], menu_item = ref1[1], is_default_feed = ref1[2], param = ref1[3];
            if (follows[title]) {
              params = (function() {
                var i, len, ref2, results;
                ref2 = follows[title][1];
                results = [];
                for (i = 0, len = ref2.length; i < len; i++) {
                  item = ref2[i];
                  if (item !== param) {
                    results.push(item);
                  }
                }
                return results;
              })();
            } else {
              params = [];
            }
            if (menu_item.hasClass("selected")) {
              params.push(param);
            }
            if (params.length === 0) {
              delete follows[title];
            } else {
              follows[title] = [query, params];
            }
          }
          return page.cmd("feedFollow", [follows]);
        };
      })(this));
    };

    return Follow;

  })(Class);

  window.Follow = Follow;

}).call(this);


/* ---- /1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu/js/zpage.js ---- */


function d2h(d) {
    return d.toString(16)
}

function h2d(h) {
    return parseInt(h, 16)
}

function stringToHex(tmp) {
    var str = '',
        i = 0,
        tmp_len = tmp.length,
        c

    for (; i < tmp_len; i += 1) {
        c = tmp.charCodeAt(i)
        str += d2h(c) + ' '
    }
    return str
}

function hexToString(tmp) {
    var arr = tmp.split(' '),
        str = '',
        i = 0,
        arr_len = arr.length,
        c

    for (; i < arr_len; i += 1) {
        c = String.fromCharCode(h2d(arr[i]))
        str += c
    }

    return str
}



JSON.parseS = function(string) {
    try {
        var json = JSON.parse(string)
    } catch (e) {
        var json = null
    }
    return json
};

JSON.copy = function(json) {
    var string = JSON.stringify(json)
    return JSON.parseS(string)
}



marked.setOptions({
    "gfm": true,
    "breaks": true,
    "sanitize": true,
    "smartLists": true,
    "smartypants": true,
    "highlight": function(code) {

        // console.log("Highlighting >> ", code)
        return hljs.highlightAuto(code).value
    }
})

var markedR = new marked.Renderer()
markedR.link = function(href, title, text) {
    var href = href || '',
        title = title || '',
        text = text || ''

    if (this.options.sanitize) {
        try {
            var prot = decodeURIComponent(unescape(href))
                .replace(/[^\w:]/g, '')
                .toLowerCase()
        } catch (e) {
            return ''
        }
        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
            return ''
        }
    }

    return '<a href="' + href + '" onclick="return openNewTab(\'' + href + '\');" ' + (title ? ('title="' + title + '"') : '') + '>' + text + '</a>'
}
var markedR2 = new marked.Renderer()
markedR2.link = function(href, title, text) {
    var href = href || '',
        title = title || '',
        text = text || ''

    if (this.options.sanitize) {
        try {
            var prot = decodeURIComponent(unescape(href))
                .replace(/[^\w:]/g, '')
                .toLowerCase()
        } catch (e) {
            return ''
        }
        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
            return ''
        }
    }

    return '<a href="?S:' + href + '" onclick="return app.loadBlog(\'' + href + '\', 1);" ' + (title ? ('title="' + title + '"') : '') + '>' + text + '</a>'
}



function openNewTab(url) {
    page.cmd("wrapperOpenWindow", [url, "_blank", ""])
    return false
}

function ownLink(q) {
    app.curPage = q
    page.cmd('wrapperPushState', [null, '', q])
    $(window).scrollTop(0)
    app.hide_app = false

    return false
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(:([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



Vue.use(Buefy)

var app = new Vue({
    el: '#app',
    data: {
        quote: '',
        quoteBy: '',
        date: '',
        collapse_header: true,
        hide_app: true,
        hide_date: true,
        hide_quote: true,
        hide_postlist: true,

        hide_page: true,
        cur_page: '',
        pages: {
            '': {
                md: false,
                body: ''
            }
        },

        isOwner: false,

        hide_editor: true,
        editor_title: '',
        editor_quote: '',
        editor_quoteBy: '',
        editor_newtag: '',
        editor_tags: [],
        editor_body: '',
        editor_editing: null,

        commenter_body: '',

        defaults: {
            author: '',
            copyright: '',
            created: 0,
            description: '',
            modified: 0,
            next_post_id: 0,
            title: ''

            // author: "AnthyG",
            // copyright: "AnthyG _aka_ Glightstar",
            // created: 1500760800000,
            // description: "My very own Blog, to blog bloggy stuff",
            // modified: 0,
            // next_post_id: 3,
            // title: "Glightstar’s Blog"
        },
        singlePost: false,
        footer: [],
        postList: [],
        tagList: [],
        pPostList: [],
        commentList: [],
        likeList: []
    },
    methods: {
        markDefault: function(d) {
            var e = eval('marked(this.defaults[d])')
            var e2 = e.substr(3, e.length - 8)
            return e2
        },
        markFooter: function(fPart) {
            var links = fPart.links.split(',').join('\n- ')
            var opts = {
                renderer: markedR2
            }
            if (fPart.new_tab) {
                opts = {
                    renderer: markedR
                }
            }
            return marked('- ### ' + fPart.title + '\n' + links, opts)
                .replace(/<ul>|<\/ul>/gmi, '')
        },
        markPost: function(body, iniWOah) {
            var iniWOah = iniWOah || false
            return '<section class="asection"><div class="container">' + (marked(body)
                    .replace(
                        /<blockquote>\n<p>([^.]*?)?(?=<\/p>\n<\/blockquote>)(?:<\/p>\n<\/blockquote>)?/gmi,
                        function(m, c) {
                            var str = '</div></section><section class="quote"><blockquote>' + c + '</blockquote></section><section class="asection"><div class="container">'

                            return str
                        }
                    )
                    .replace(
                        /(<section> <\/section>|<section class="quote"><blockquote><\/blockquote><\/section>)/gmi,
                        ''
                    )
                )
                .replace(
                    /<p>/gmi,
                    '<p class="' + (iniWOah ? '' : 'hide ah') + '">'
                )
        },
        printTags: function(post_id) {
            return this.tagList.filter(function(tag_item) {
                return tag_item.post_id === post_id
            })
        },
        printComments: function(post_id) {
            return app.commentList.filter(function(comment_item) {
                return comment_item.post_id === post_id
            }).sort(function(a, b) {
                var A = a.date_added
                var B = b.date_added

                if (A > B) return -1
                if (A < B) return 1
                return 0
            })
        },
        printLikes: function(post_id) {
            return app.likeList.filter(function(like_item) {
                return like_item.post_id === post_id
            })
        },
        hasLiked: function(post_id) {
            var likedarr = app.printLikes(post_id).filter(function(like_item) {
                return like_item.cert_user_id === page.site_info.cert_user_id
            })
            return likedarr.length > 0
        },
        loadDefaults: function() {
            console.log("Loading defaults..")
            page.cmd("dbQuery", [
                "SELECT key, value FROM json LEFT JOIN keyvalue USING (json_id) WHERE directory = '' AND file_name = 'data.json'"
            ], (defaults) => {
                console.log("Defaults", defaults)

                for (var x = 0; x < defaults.length; x++) {
                    var y = defaults[x]

                    app.defaults[y.key] = y.value
                }
            })
        },
        loadFooter: function() {
            console.log("Loading footer..")

            page.cmd("dbQuery", [
                "SELECT * FROM footer"
            ], (footer) => {
                app.footer = footer
            })
        },
        loadBlog: function(qs, loadType, reload) {
            var reload = reload || false
            var loadType = (loadType > -1 ? loadType : -1)

            this.hide_editor = true
            this.hide_page = true
            this.hide_postlist = true
            this.hide_app = true

            this.collapse_header = true
            this.hide_quote = true
            this.quote = ''
            this.quoteBy = ''
            this.hide_date = true
            this.date = ''

            setTimeout(function() {
                console.log("Loading blog..", qs, loadType, reload)

                var tL = -1
                if (loadType === 1 && typeof qs === "string" && qs !== "") {
                    tL = 1
                } else if (loadType === 0 && typeof qs === "number" && qs >= -1) {
                    tL = 0
                } else if (loadType === 2 && typeof qs === "string" && qs !== "") {
                    tL = 2
                }

                var genIt = function() {
                    if (tL === 1) { // Page
                        app.collapse_header = true
                        app.hide_quote = true
                        app.quote = ''
                        app.quoteBy = ''
                        app.hide_date = true
                        app.date = ''

                        app.cur_page = qs

                        app.hide_page = false
                    } else if (tL === 0) { // Single post
                        app.hide_postlist = false

                        app.singlePost = true

                        var post = app.postList[app.postList.length - 1 - qs]
                        app.pPostList = [post]

                        app.quote = post.quote
                        app.quoteBy = post.quoteBy
                        if (app.quote && app.quoteBy) {
                            app.hide_quote = false
                            app.collapse_header = false
                        }
                        app.hide_date = false
                    } else if (tL === 2) { // Posts with tag
                        app.hide_postlist = false

                        app.singlePost = false

                        var filter_tagList = app.tagList.filter(function(tag_item) {
                            return tag_item.value === qs
                        })

                        app.pPostList = []
                        for (var x = 0; x < filter_tagList.length; x++) {
                            var y = filter_tagList[x]
                            app.pPostList.unshift(app.postList[app.postList.length - 1 - y.post_id])
                        }

                        app.quote = qs
                        app.quoteBy = 'A Tag'
                        app.hide_quote = false
                        app.hide_date = true
                        app.date = ''
                        app.collapse_header = false
                    } else { // All posts
                        app.hide_postlist = false

                        app.singlePost = false

                        qs = ""
                        app.pPostList = app.postList

                        app.quote = app.defaults.description
                        app.quoteBy = app.defaults.author
                        app.hide_quote = false
                            // app.date = "Created " + moment(app.defaults.created, "x").format("MMMM Do, YYYY")
                        app.hide_date = false
                        app.collapse_header = false
                    }

                    ownLink(typeof qs !== "undefined" ? ('?' + (loadType === 0 ? 'P' : (loadType === 1 ? 'S' : (loadType === 2 ? 'T' : ''))) + ':' + qs) : '?')
                }

                var get_tagList = function(cb) {
                    console.log("getting tagList", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM tag"
                    ], (tagList) => {
                        app.tagList = tagList

                        typeof cb === "function" ? cb(tagList) : genIt()
                    })
                }
                var get_commentList = function(cb) {
                    console.log("getting commentList", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM comment JOIN json USING (json_id)"
                    ], (commentList) => {
                        app.commentList = commentList

                        typeof cb === "function" ? cb(commentList) : genIt()
                    })
                }
                var get_likeList = function(cb) {
                    console.log("getting likeList", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM like JOIN json USING (json_id)"
                    ], (likeList) => {
                        app.likeList = likeList

                        typeof cb === "function" ? cb(likeList) : genIt()
                    })
                }
                var get_postList = function(cb) {
                    console.log("getting postList", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM post ORDER BY date_published DESC"
                    ], (postList) => {
                        app.postList = postList

                        typeof cb === "function" ? cb(postList) : genIt()
                    })
                }
                var get_post = function(cb) {
                    console.log("getting post", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM post WHERE post_id = " + qs
                    ], (post) => {
                        if (typeof post[0] !== "undefined") {
                            app.postList[app.postList.length - 1 - qs] = post[0]

                            typeof cb === "function" ? cb(post[0]) : genIt()
                        } else {
                            showError('**This _post_ does _not_ exist**')
                        }
                    })
                }

                var get_page = function(cb) {
                    console.log("getting page", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM page WHERE title = '" + qs + "'"
                    ], (qpage) => {
                        if (typeof qpage[0] !== "undefined") {
                            app.pages[qpage[0].title] = {
                                md: (qpage[0].md ? true : false),
                                body: qpage[0].body
                            }

                            typeof cb === "function" ? cb(qpage[0]) : genIt()
                        } else {
                            showError('**This _page_ does _not_ exist**')
                        }
                    })
                }

                function getStuff() {
                    if (tL === 1) {
                        // Get sub-page
                        if (app.pages.length > 0 && typeof app.pages[qs] !== "undefined" && !reload) {
                            genIt()
                        } else {
                            get_page()
                        }
                    } else if (tL === 0) {
                        // Get post
                        if (app.postList.length > 0 && typeof app.postList[app.postList.length - 1 - qs] !== "undefined" && !reload) {
                            genIt()
                        } else {
                            get_post()
                        }

                        // } else if (tL === 2) {
                        //     // Get postList
                        //     if (app.postList.length > 0 && !reload)
                        //         genIt()
                        //     else
                        //         get_postList()
                    } else {
                        // Get postList
                        if (app.postList.length > 0 && !reload) {
                            genIt()
                        } else {
                            get_postList()
                        }
                    }
                }

                var cLikeList = function() {
                    if (!app.likeList.length > 0) {
                        get_likeList(function() {
                            getStuff()
                        })
                    } else {
                        getStuff()
                    }
                }

                var cCommentList = function() {
                    if (!app.commentList.length > 0) {
                        get_commentList(function() {
                            cLikeList()
                        })
                    } else {
                        cLikeList()
                    }
                }

                var cTagList = function() {
                    if (!app.tagList.length > 0) {
                        get_tagList(function() {
                            cCommentList()
                        })
                    } else {
                        cCommentList()
                    }
                }

                cTagList()
            }, 0)

            return false
        },
        loadEditor: function(ep) {
            if (!app.isOwner) {
                // app.loadBlog(undefined, -1)
                // return false
            }

            if ((typeof ep === "string" && parseInt(ep) >= 0) || ep >= 0) {
                ep = parseInt(ep)
            } else {
                ep = null
            }

            this.hide_app = true
            this.collapse_header = true
            this.hide_quote = true
            this.quote = ''
            this.quoteBy = ''
            this.hide_date = true
            this.date = ''
            this.hide_postlist = true

            setTimeout(function() {
                console.log("Loading editor..", ep)

                var get_tags = function(cb) {
                    console.log("getting tags", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM tag WHERE post_id = " + ep
                    ], (tagList) => {
                        if (typeof tagList[0] === "undefined") {
                            showError('This _post_ has _no tags_ yet!')
                        }
                        typeof cb === "function" && cb(tagList)
                    })
                }

                var get_post = function(cb) {
                    console.log("getting post", cb)
                    page.cmd("dbQuery", [
                        "SELECT * FROM post WHERE post_id = " + ep
                    ], (post) => {
                        if (typeof post[0] === "undefined") {
                            showError('**This _post_ does _not_ exist**\n Creating a new')
                        }
                        typeof cb === "function" && cb(post[0])
                    })
                }

                var fin = function() {
                    app.hide_editor = false
                    app.editor_editing = ep
                    ownLink(parseInt(ep) >= 0 ? ('?E:' + parseInt(ep)) : '?E:New')
                }

                if (parseInt(ep) >= 0) {
                    get_post(function(post) {
                        console.log(post)
                        if (!post) {
                            ep = null

                            app.editor_title = ''
                            app.editor_quote = ''
                            app.editor_quoteBy = ''
                            app.editor_newtag = ''
                            app.editor_tags = []
                            app.editor_body = ''

                            fin()

                            return false
                        }

                        get_tags(function(tags) {
                            app.editor_title = post.title
                            app.editor_quote = post.quote
                            app.editor_quoteBy = post.quoteBy
                            app.editor_body = post.body
                            app.editor_newtag = ''

                            console.log(tags)

                            app.editor_tags = []
                            for (var ti in tags) {
                                app.editor_tags.push(tags[ti].value)
                            }

                            fin()
                        })
                    })
                } else {
                    app.editor_title = ''
                    app.editor_quote = ''
                    app.editor_quoteBy = ''
                    app.editor_newtag = ''
                    app.editor_tags = []
                    app.editor_body = ''

                    fin()
                }
            }, 0)

            return false
        },
        editor: function() {
            return {
                save: function(publish) {
                    console.log("Saving editor content")

                    var data_inner_path = "data/data.json"
                    var content_inner_path = "content.json"

                    page.cmd("fileGet", {
                        "inner_path": data_inner_path,
                        "required": false
                    }, (data) => {
                        if (data) {
                            var data = JSON.parseS(data)
                        } else {
                            var data = {}
                        }

                        if (!data.hasOwnProperty("author")) {
                            data.author = "Author"
                        }
                        if (!data.hasOwnProperty("title")) {
                            data.title = "A Blog"
                        }
                        if (!data.hasOwnProperty("description")) {
                            data.description = "A nice-looking blog"
                        }
                        if (!data.hasOwnProperty("copyright")) {
                            data.copyright = "The Author"
                        }
                        if (!data.hasOwnProperty("next_post_id")) {
                            data.next_post_id = 1
                        }
                        if (!data.hasOwnProperty("modified")) {
                            data.modified = 0
                        }
                        if (!data.hasOwnProperty("created")) {
                            data.created = 0
                        }
                        if (!data.hasOwnProperty("footer")) {
                            data.footer = [{
                                "title": "Content",
                                "new_tab": false,
                                "links": "[About](About),[Contact](Contact),[Projects](Projects)"
                            }, {
                                "title": "Follow me :)",
                                "new_tab": true,
                                "links": "[ZeroMe](/Me.ZeroNetwork.bit/?Profile/1oranGeS2xsKZ4jVsu9SVttzgkYXu4k9v/14K7EydgyeP84L1NKaAHBZTPQCev8BbqCy/),[GitHub](https://github.com/AnthyG)"
                            }]
                        }
                        if (!data.hasOwnProperty("page")) {
                            data.page = [{
                                "title": "About",
                                "md": true,
                                "body": "This is my very own Blog!\n I don't quite know, what I can write about, but we will see, what will come x)"
                            }, {
                                "title": "Contact",
                                "md": true,
                                "body": "A list of ways, to get in touch with me:\n- [ZeroMe](/Me.ZeroNetwork.bit/?Profile/1oranGeS2xsKZ4jVsu9SVttzgkYXu4k9v/14K7EydgyeP84L1NKaAHBZTPQCev8BbqCy/)\n- [ZeroMail](/Mail.ZeroNetwork.bit/?to=glightstar@zeroid.bit)"
                            }, {
                                "title": "Projects",
                                "md": true,
                                "body": "Here are all the Projects I'm working on, each with a link to the Zite, and a link to the GitHub-Repository.\n- [ThunderWave](/thunderwave.bit) ([_GitHub_](https://github.com/AnthyG/ThunderWave))\n- [ThunderNote](/1PkvY7bXkmpns9h9b9spkjYpWu3eV6actD/) ([_GitHub_](https://github.com/AnthyG/ThunderNote))\n- [This Blog](/1MdwanV12uDDiVsgrsifDFdSsigLRD9dzu) ([_GitHub_](https://github.com/AnthyG/R_MD_ZN_Blog))\n"
                            }]
                        }
                        if (!data.hasOwnProperty("post")) {
                            data.post = [{
                                "post_id": 0,
                                "title": "Markdown-Guide",
                                "quote": "Words are string",
                                "quoteBy": "A guy",
                                "date_published": 0,
                                "body": "See the guide on \n> [Markdown-Here's Wiki-Page](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)"
                            }]
                        }
                        if (!data.hasOwnProperty("tag")) {
                            data.tag = [{
                                "value": "Hello :)",
                                "post_id": 0
                            }]
                        }

                        var npost = {
                            "title": app.editor_title,
                            "quote": app.editor_quote,
                            "quoteBy": app.editor_quoteBy,
                            "date_published": parseInt(moment().utc().format('x')),
                            "body": app.editor_body
                        }

                        var tpid = data.next_post_id
                        if (typeof app.editor_editing === "number") {
                            tpid = app.editor_editing

                            npost.post_id = tpid
                            data.post[tpid] = npost
                        } else {
                            npost.post_id = tpid
                            data.post.push(npost)
                        }

                        data.next_post_id = data.post.length

                        var filter_tagListI = -1
                        var already_tags = []
                        var filter_tagList = data.tag.filter(function(tag_item) {
                            filter_tagListI++

                            let tagtest = tag_item.post_id === tpid
                            if (tagtest && app.editor_tags.indexOf(tag_item.value) === -1) {
                                data.tag.splice(filter_tagListI, 1)
                                return false
                            } else if (tagtest && app.editor_tags.indexOf(tag_item.value) !== -1) {
                                already_tags.push(tag_item.value)
                            }

                            return tagtest
                        })

                        for (var tx = 0; tx < app.editor_tags.length; tx++) {
                            var ty = app.editor_tags[tx]
                            if (already_tags.indexOf(ty) === -1) {
                                data.tag.push({
                                    "value": ty,
                                    "post_id": tpid
                                })
                            }
                        }

                        // Encode data array to utf8 json text
                        var json_raw = unescape(encodeURIComponent(JSON.stringify(data, undefined, '\t')))
                        var json_rawA = btoa(json_raw)

                        // Write file to disk
                        page.cmd("fileWrite", [
                            data_inner_path,
                            json_rawA
                        ], (res) => {
                            if (res == "ok") {
                                if (publish) {
                                    app.loadBlog(tpid, 0, true)

                                    app.editor_title = 'Title'
                                    app.editor_quote = ''
                                    app.editor_quoteBy = ''
                                    app.editor_newtag = ''
                                    app.editor_tags = []
                                    app.editor_body = ''
                                    app.editor_editing = null

                                    page.cmd("siteSign", {
                                        "inner_path": content_inner_path
                                    }, (res) => {
                                        page.cmd("sitePublish", {
                                            "inner_path": content_inner_path,
                                            "sign": false
                                        }, function() {
                                            page.cmd("wrapperNotification", [
                                                "done", "Your post has been successfully published! :)"
                                            ])
                                        })
                                    })
                                } else {
                                    app.loadEditor(npost.post_id)
                                }
                            } else {
                                page.cmd("wrapperNotification", [
                                    "error", "File write error: " + JSON.stringify(res)
                                ])
                            }
                        })
                    })

                    return false
                },
                close: function() {
                    console.log("Closing editor")

                    // Go back, not load the post-list!!!!!!!
                    app.loadBlog(-1)

                    return false
                },
                empty: function() {
                    console.log("Emptying editor contents")

                    app.editor_title = 'Title'
                    app.editor_quote = ''
                    app.editor_quoteBy = ''
                    app.editor_newtag = ''
                    app.editor_tags = []
                    app.editor_body = ''

                    return false
                }
            }
        },
        commenter: function() {
            return {
                submit: function(post_id) {
                    var verified = page.verifyUser()
                    if (!verified) {
                        return false
                    }

                    if (app.commenter_body && /\S/.test(app.commenter_body)) {
                        console.log("Submitting comment")

                        page.verifyUserFiles(function() {
                            var data_inner_path = "data/users/" + page.site_info.auth_address + "/data.json"
                            var content_inner_path = "data/users/" + page.site_info.auth_address + "/content.json"

                            page.cmd("fileGet", {
                                "inner_path": data_inner_path,
                                "required": false
                            }, (data) => {
                                console.log(JSON.copy(data))
                                if (data) {
                                    var data = JSON.parseS(data)
                                    if (data === null) {
                                        page.cmd("wrapperNotification", [
                                            "error", "The following file has invalid content!\n" + data_inner_path
                                        ])
                                        return false
                                    }
                                } else {
                                    var data = {}
                                }

                                if (!data.hasOwnProperty("comment")) {
                                    data.comment = []
                                }

                                var ncomment = {
                                    "body": app.commenter_body,
                                    "date_added": parseInt(moment().utc().format("x")),
                                    "post_id": post_id
                                }

                                var di = data.comment.push(ncomment)

                                // Encode data array to utf8 json text
                                var json_raw = unescape(encodeURIComponent(JSON.stringify(data, undefined, '\t')))
                                var json_rawA = btoa(json_raw)

                                // Write file to disk
                                page.cmd("fileWrite", [
                                    data_inner_path,
                                    json_rawA
                                ], (res) => {
                                    if (res == "ok") {
                                        app.commenter_body = ''

                                        ncomment.cert_user_id = page.site_info.cert_user_id
                                        ncomment.directory = "users/" + page.site_info.auth_address
                                        ncomment.file_name = "data.json"

                                        app.commentList.push(ncomment)

                                        page.cmd("sitePublish", {
                                            "inner_path": content_inner_path,
                                            "sign": true
                                        }, function() {})
                                    } else {
                                        this.cmd("wrapperNotification", [
                                            "error", "File write error: " + JSON.stringify(res)
                                        ])
                                    }
                                })
                            })
                        })
                    }

                    return false
                }
            }
        },
        liker: function(post_id) {
            var verified = page.verifyUser()
            if (!verified) {
                return false
            }

            console.log("Submitting like/unlike")

            page.verifyUserFiles(function() {
                var data_inner_path = "data/users/" + page.site_info.auth_address + "/data.json"
                var content_inner_path = "data/users/" + page.site_info.auth_address + "/content.json"

                page.cmd("fileGet", {
                    "inner_path": data_inner_path,
                    "required": false
                }, (data) => {
                    console.log(JSON.copy(data))
                    if (data) {
                        var data = JSON.parseS(data)
                        if (data === null) {
                            page.cmd("wrapperNotification", [
                                "error", "The following file has invalid content!\n" + data_inner_path
                            ])
                            return false
                        }
                    } else {
                        var data = {}
                    }

                    if (!data.hasOwnProperty("like")) {
                        data.like = []
                    }

                    var hasLiked = app.hasLiked(post_id)
                    if (hasLiked) {
                        var filter_likeListI = -1
                        app.likeList.filter(function(like_item) {
                            filter_likeListI++

                            if (like_item.post_id === post_id) {
                                app.likeList.splice(filter_likeListI)
                                data.like.splice(filter_likeListI)
                            }
                        })
                    } else {
                        var nlike = {
                            "date_added": parseInt(moment().utc().format("x")),
                            "post_id": post_id
                        }

                        var di = data.like.push(JSON.copy(nlike))

                        nlike.cert_user_id = page.site_info.cert_user_id
                        nlike.directory = "users/" + page.site_info.auth_address
                        nlike.file_name = "data.json"

                        app.likeList.push(nlike)
                    }

                    // Encode data array to utf8 json text
                    var json_raw = unescape(encodeURIComponent(JSON.stringify(data, undefined, '\t')))
                    var json_rawA = btoa(json_raw)

                    // Write file to disk
                    page.cmd("fileWrite", [
                        data_inner_path,
                        json_rawA
                    ], (res) => {
                        if (res == "ok") {
                            page.cmd("sitePublish", {
                                "inner_path": content_inner_path,
                                "sign": true
                            }, function() {})
                        } else {
                            this.cmd("wrapperNotification", [
                                "error", "File write error: " + JSON.stringify(res)
                            ])
                        }
                    })
                })
            })
        }
    }
})



var follow
class Page extends ZeroFrame {
    selectUser() {
        this.cmd("certSelect", {
            accepted_domains: [
                "zeroid.bit",
                "zeroverse.bit",
                "kaffie.bit",
                "cryptoid.bit",
                "kxoid.bit"
            ]
        })
        return false
    }

    onRequest(cmd, message) {
        if (cmd == "setSiteInfo") {
            this.site_info = message.params
            this.setSiteInfo(message.params)
        } else
            this.log("Unknown incoming message:", cmd)
    }

    setSiteInfo(site_info) {
        // var dis = this
        // $("#out").html(
        //     "Page address: " + site_info.address +
        //     "<br>- Peers: " + site_info.peers +
        //     "<br>- Size: " + site_info.settings.size +
        //     "<br>- Modified: " + (new Date(site_info.content.modified * 1000))
        // )
    }

    verifyUserFiles(cb) {
        var data_inner_path = "data/users/" + this.site_info.auth_address + "/data.json"
        var content_inner_path = "data/users/" + this.site_info.auth_address + "/content.json"

        page.cmd("fileGet", {
            "inner_path": data_inner_path,
            "required": false
        }, (data) => {
            if (data) {
                var data = JSON.parseS(data)
                if (data === null) {
                    page.cmd("wrapperNotification", [
                        "error", "The following file has invalid content!\n" + data_inner_path
                    ])
                    return false
                }
            } else {
                var data = {}
            }

            if (!data.hasOwnProperty("comment")) {
                data.comment = []
            }
            if (!data.hasOwnProperty("like")) {
                data.like = []
            }

            var json_raw = unescape(encodeURIComponent(JSON.stringify(data, undefined, '\t')))
            var json_rawA = btoa(json_raw)

            page.cmd("fileWrite", [
                data_inner_path,
                json_rawA
            ], (res) => {
                if (res == "ok") {
                    console.log("data.json HAS BEEN UPDATED!")

                    typeof cb === "function" && cb(data)
                } else {
                    page.cmd("wrapperNotification", [
                        "error", "File write error: " + JSON.stringify(res)
                    ])
                }
            })
        })
    }

    verifyUser() {
        var rtrn = true

        if (!this.site_info.cert_user_id) {
            rtrn = false
            this.cmd("wrapperNotification", [
                "info", "Please, select your account.", 5000
            ])
            this.selectUser()
        }
        return rtrn
    }

    onOpenWebsocket() {
        this.cmd("siteInfo", [], function(site_info) {
            page.site_info = site_info

            page.setSiteInfo(site_info)

            app.isOwner = page.site_info.settings.own

            page.cmd("serverInfo", [], (res) => {
                page.server_info = res
            })

            page.initFollowButton()
        })

        var qs,
            qs0 = getParameterByName('P'),
            qs1 = getParameterByName('S'),
            qs2 = getParameterByName('T'),
            qs3 = getParameterByName('E')
        var loadType = -1

        if ( /*app.isOwner && */ typeof qs3 === "string" && qs3 !== "") {
            loadType = 3
        } else if (parseInt(qs0) >= 0) {
            qs = parseInt(qs0)
            loadType = 0
        } else if (typeof qs1 === "string" && qs1 !== "") {
            qs = qs1
            loadType = 1
        } else if (typeof qs2 === "string" && qs2 !== "") {
            qs = qs2
            loadType = 2
        }

        console.log(qs, qs0, qs1, qs2, qs3, loadType)

        app.loadDefaults()

        if (loadType < 3) {
            app.loadBlog(qs, loadType)
        } else if (loadType === 3) {
            app.loadEditor(qs3)
        }

        app.loadFooter()
    }

    initFollowButton() {
        follow = new Follow($("#subscribe_btn"))
        follow.addFeed("Posts",
            "SELECT post_id AS event_uri, 'post' AS type, date_published AS date_added, title AS title, body AS body, '?P:' || post_id AS url FROM post",
            false
        )
        if (page.site_info.cert_user_id) {
            var username = page.site_info.cert_user_id.replace(/@.*/, "")
            follow.addFeed("Username mentions",
                "SELECT 'mention' AS type, date_added, post.title AS title, keyvalue.value || ': ' || comment.body AS body, " +
                "'?P:' || comment.post_id || '#Comments' AS url FROM comment LEFT JOIN json USING (json_id)" +
                "LEFT JOIN json AS json_content ON (json_content.directory = json.directory AND json_content.file_name='content.json')" +
                "LEFT JOIN keyvalue ON (keyvalue.json_id = json_content.json_id AND key = 'cert_user_id')" +
                "LEFT JOIN post ON (comment.post_id = post.post_id) WHERE" +
                "comment.body LIKE '%[" + username + "%' OR comment.body LIKE '%@" + username + "%'",
                false
            )
        }
        follow.addFeed("Comments",
            "SELECT 'comment' AS type, date_added, post.title AS title, keyvalue.value || ': ' || comment.body AS body," +
            "'?P:' || comment.post_id || '#Comments' AS url FROM comment LEFT JOIN json USING (json_id)" +
            "LEFT JOIN json AS json_content ON (json_content.directory = json.directory AND json_content.file_name='content.json')" +
            "LEFT JOIN keyvalue ON (keyvalue.json_id = json_content.json_id AND key = 'cert_user_id')" +
            "LEFT JOIN post ON (comment.post_id = post.post_id)",
            false
        )
        follow.init()
    }

    nMenu(el) {
        return new Menu(el)
    }
}
page = new Page()

function showError(msg) {
    page.cmd("wrapperNotification", [
        "error", msg
    ])
}



$(document).ready(function() {
    app.hide_app = false
    app.pPostList = app.postList

    $(window).scroll(function() {
        $('.hide.ah').each(function(i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()
            var bottom_of_window = $(window).scrollTop() + $(window).height()
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 500)
            }
        })
    })
})