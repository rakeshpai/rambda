function n(r,t){return void 0===t?function(t){return n(r,t)}:r+t}function r(n){return function(r){for(var t=[],u=arguments.length-1;u-- >0;)t[u]=arguments[u+1];var e=0;return n.apply(null,[function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return r.apply(null,n.concat([e++]))}].concat(t))}}function t(n,r,u){return void 0===r?function(r,u){return t(n,r,u)}:void 0===u?function(u){return t(n,r,u)}:u.concat().map(function(t,e){return e===r?n(u[r]):t})}function u(n,r){if(1===arguments.length)return function(r){return u(n,r)};if(void 0===r)return[];if(!Array.isArray(r))return function(n,r){var t={};for(var u in r)n(r[u],u)&&(t[u]=r[u]);return t}(n,r);for(var t=-1,e=0,i=r.length,o=[];++t<i;){var f=r[t];n(f)&&(o[e++]=f)}return o}function e(n,r){return 1===arguments.length?function(r){return e(n,r)}:u(n,r).length===r.length}function i(n,r){if(1===arguments.length)return function(r){return i(n,r)};for(var t=0;t<r.length;){if(n(r[t],t))return!0;t++}return!1}function o(n,r){return 1===arguments.length?function(r){return o(n,r)}:!i(function(n){return!n(r)},n)}function f(n){return function(){return n}}function c(n,r){return 1===arguments.length?function(r){return c(n,r)}:i(function(n){return n(r)})(n)}function l(n,r){if(1===arguments.length)return function(r){return l(n,r)};if("string"==typeof r)return""+r+n;var t=r.concat();return t.push(n),t}function g(n,r){return void 0===r&&(r=[]),function(){for(var t,u=[],e=arguments.length;e--;)u[e]=arguments[e];return(t=r.concat(u)).length>=n.length?n.apply(void 0,t):g(n,t)}}var a=g(function(n,r,t){var u;return Object.assign({},t,((u={})[n]=r,u))});function h(n,r){return 1===arguments.length?function(r){return h(n,r)}:function(t){return n(t)&&r(t)}}function v(n){return function(r){return!n(r)}}function s(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return function(){for(var r=[],t=arguments.length;t--;)r[t]=arguments[t];var u=n.slice();if(u.length>0){for(var e=u.pop().apply(void 0,r);u.length>0;)e=u.pop()(e);return e}}}function p(n,r){return 1===arguments.length?function(r){return p(n,r)}:"string"==typeof n?""+n+r:n.concat(r)}function d(n){var r=typeof n;if(null===n)return"Null";if(void 0===n)return"Undefined";if("boolean"===r)return"Boolean";if("number"===r)return"Number";if("string"===r)return"String";if(Array.isArray(n))return"Array";if(n instanceof RegExp)return"RegExp";var t=n.toString();return t.startsWith("async")?"Async":"[object Promise]"===t?"Promise":t.includes("function")||t.includes("=>")?"Function":"Object"}function y(n,r){if(1===arguments.length)return function(r){return y(n,r)};if(n===r)return!0;var t=d(n);if(t!==d(r))return!1;if("Array"===t){var u=Array.from(n),e=Array.from(r);if(u.toString()!==e.toString())return!1;var i=!0;return u.forEach(function(n,r){i&&(n===e[r]||y(n,e[r])||(i=!1))}),i}if("Object"===t){var o=Object.keys(n);if(o.length!==Object.keys(r).length)return!1;var f=!0;return o.forEach(function(t){if(f){var u=n[t],e=r[t];u===e||y(u,e)||(f=!1)}}),f}return!1}function A(n,r){if(1===arguments.length)return function(r){return A(n,r)};for(var t=-1,u=!1;++t<r.length&&!u;)y(r[t],n)&&(u=!0);return u}function b(n){return n-1}function m(n,r){return 1===arguments.length?function(r){return m(n,r)}:void 0===r||null===r||!0===Number.isNaN(r)?n:r}function j(n,r){if(1===arguments.length)return function(r){return j(n,r)};if(null===r||void 0===r)return{};var t={};for(var u in r)t[u]=r[u];return delete t[n],t}function O(n,r){return 1===arguments.length?function(r){return O(n,r)}:n/r}function S(n,r){return 1===arguments.length?function(r){return S(n,r)}:r.slice(n)}function N(n,r){return 1===arguments.length?function(r){return N(n,r)}:r.slice(0,-n)}function E(n,r){return 1===arguments.length?function(r){return E(n,r)}:function(t){return n(t)||r(t)}}function P(n,r,t){var u=-1,e=n.length;(t=t>e?e:t)<0&&(t+=e),e=r>t?0:t-r>>>0,r>>>=0;for(var i=Array(e);++u<e;)i[u]=n[u+r];return i}function k(n,r){if(1===arguments.length)return function(r){return k(n,r)};var t=r.length,u=n>t?t:n;return"string"==typeof r?r.slice(t-u):P(r,u=t-u,t)}function x(n,r){return 1===arguments.length?function(r){return x(n,r)}:y(n,k(n.length,r))}function w(){return!1}function B(n,r){return 1===arguments.length?function(r){return B(n,r)}:r.find(n)}function C(n,r){if(1===arguments.length)return function(r){return C(n,r)};for(var t=r.length,u=-1;++u<t;)if(n(r[u]))return u;return-1}function R(n,r){r=void 0===r?[]:r;for(var t=0;t<n.length;t++)Array.isArray(n[t])?R(n[t],r):r.push(n[t]);return r}function U(n){for(var r=[],t=arguments.length-1;t-- >0;)r[t]=arguments[t+1];return function(n){return function(){for(var r=[],t=arguments.length;t--;)r[t]=arguments[t];return 1===r.length?function(t){return n(t,r[0])}:2===r.length?n(r[1],r[0]):void 0}}(n)}function W(n,r){if(1===arguments.length)return function(r){return W(n,r)};if(void 0===r)return[];if(!Array.isArray(r))return function(n,r){var t={};for(var u in r)t[u]=n(r[u],u);return t}(n,r);for(var t=-1,u=r.length,e=Array(u);++t<u;)e[t]=n(r[t]);return e}function F(n,r){return 1===arguments.length?function(r){return F(n,r)}:(W(n,r),r)}function L(n,r){if(1===arguments.length)return function(r){return L(n,r)};for(var t={},u=0;u<r.length;u++){var e=r[u],i=n(e);t[i]||(t[i]=[]),t[i].push(e)}return t}function q(n,r){return 1===arguments.length?function(r){return q(n,r)}:void 0!==r[n]}function z(n){return"string"==typeof n?n[0]||"":n[0]}function D(n){return n}function G(n,r,t){return void 0===r?function(r,t){return G(n,r,t)}:void 0===t?function(t){return G(n,r,t)}:function(u){return!0===("boolean"==typeof n?n:n(u))?r(u):t(u)}}function H(n){return n+1}function I(n,r){return 1===arguments.length?function(r){return I(n,r)}:r.includes(n)}function J(n,r){if(1===arguments.length)return function(r){return J(n,r)};for(var t={},u=0;u<r.length;u++){var e=r[u];t[n(e)]=e}return t}function K(n,r){if(1===arguments.length)return function(r){return K(n,r)};for(var t=-1,u=r.length;++t<u;)if(r[t]===n)return t;return-1}function M(n){return"string"==typeof n?n.slice(0,-1):n.length?P(n,0,-1):[]}function Q(n,r){return 1===arguments.length?function(r){return Q(n,r)}:null!=r&&r.constructor===n||r instanceof n}function T(n){return void 0===n||null===n}function V(n,r){return 1===arguments.length?function(r){return V(n,r)}:r.join(n)}function X(n){return Object.keys(n)}function Y(n){return"string"==typeof n?n[n.length-1]||"":n[n.length-1]}function Z(n,r){if(1===arguments.length)return function(r){return Z(n,r)};var t=-1;return r.map(function(r,u){y(r,n)&&(t=u)}),t}function $(n){return n.length}function _(n,r){if(1===arguments.length)return function(r){return _(n,r)};var t=r.match(n);return null===t?[]:t}function nn(n,r){return 1===arguments.length?function(r){return nn(n,r)}:Object.assign({},n||{},r||{})}function rn(n,r){return 1===arguments.length?function(r){return rn(n,r)}:r>n?r:n}function tn(n,r,t){return 2===arguments.length?function(t){return tn(n,r,t)}:1===arguments.length?function(r,t){return tn(n,r,t)}:n(t)>n(r)?t:r}function un(n,r){return 1===arguments.length?function(r){return un(n,r)}:r<n?r:n}var en=g(function(n,r,t){return n(t)<n(r)?t:r});function on(n,r){return 1===arguments.length?function(r){return on(n,r)}:n%r}function fn(n,r){return 1===arguments.length?function(r){return fn(n,r)}:n*r}function cn(n,r){return 1===arguments.length?function(r){return cn(n,r)}:0===r.filter(n).length}function ln(n){return!n}function gn(n,r){if(1===arguments.length)return function(r){return gn(n,r)};var t=n<0?r.length+n:n;return"[object String]"===Object.prototype.toString.call(r)?r.charAt(t):r[t]}function an(n,r){if(1===arguments.length)return function(r){return an(n,r)};if(null!==r&&void 0!==r){var t="string"==typeof n?n=n.split(","):n,u={};for(var e in r)t.includes(e)||(u[e]=r[e]);return u}}function hn(n,r){return void 0===r&&(r={}),function(t){return"Async"===d(n)||"Promise"===d(n)?new Promise(function(u,e){n(nn(t,r)).then(u).catch(e)}):n(nn(t,r))}}function vn(n,r){if(1===arguments.length)return function(r){return vn(n,r)};if(null!==r&&void 0!==r){for(var t=r,u=0,e="string"==typeof n?n.split("."):n;u<e.length;){if(null===t||void 0===t)return;t=t[e[u]],u++}return t}}var sn=g(function(n,r,t){return m(n,vn(r,t))});function pn(n,r){if(1===arguments.length)return function(r){return pn(n,r)};if(null!==r&&void 0!==r){for(var t="string"==typeof n?n.split(","):n,u={},e=0;e<t.length;)t[e]in r&&(u[t[e]]=r[t[e]]),e++;return u}}function dn(n,r){if(1===arguments.length)return function(r){return dn(n,r)};if(null!==r&&void 0!==r){for(var t="string"==typeof n?n.split(","):n,u={},e=0;e<t.length;)u[t[e]]=t[e]in r?r[t[e]]:void 0,e++;return u}}function yn(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return s.apply(void 0,n.reverse())}function An(n,r){if(1===arguments.length)return function(r){return An(n,r)};var t=[];return W(function(r){void 0!==r[n]&&t.push(r[n])},r),t}function bn(n,r){if(1===arguments.length)return function(r){return bn(n,r)};if("string"==typeof r)return""+n+r;var t=r.concat();return t.unshift(n),t}function mn(n,r){return 1===arguments.length?function(r){return mn(n,r)}:r[n]}function jn(n,r,t){return void 0===r?function(r,t){return jn(n,r,t)}:void 0===t?function(t){return jn(n,r,t)}:t[n]===r}function On(n,r){if(1===arguments.length)return function(r){return On(n,r)};for(var t=[],u=n;u<r;u++)t.push(u);return t}function Sn(n,r,t){return void 0===r?function(r,t){return Sn(n,r,t)}:void 0===t?function(t){return Sn(n,r,t)}:t.reduce(n,r)}function Nn(n,r){return 1===arguments.length?function(r){return Nn(n,r)}:u(function(r){return!n(r)},r)}function En(n,r){return 1===arguments.length?function(r){return En(n,r)}:Array(r).fill(n)}function Pn(n,r,t){return void 0===r?function(r,t){return Pn(n,r,t)}:void 0===t?function(t){return Pn(n,r,t)}:t.replace(n,r)}function kn(n){return n.concat().reverse()}function xn(n,r){return 1===arguments.length?function(r){return xn(n,r)}:r.concat().sort(n)}function wn(n,r){return 1===arguments.length?function(r){return wn(n,r)}:r.concat().sort(function(r,t){var u=n(r),e=n(t);return u<e?-1:u>e?1:0})}function Bn(n,r){return 1===arguments.length?function(r){return Bn(n,r)}:r.split(n)}function Cn(n,r){if(1===arguments.length)return function(r){return Cn(n,r)};for(var t=n>1?n:1,u=[],e=0;e<r.length;)u.push(r.slice(e,e+=t));return u}function Rn(n,r){return 1===arguments.length?function(r){return Rn(n,r)}:r.startsWith(n)}function Un(n,r){return 1===arguments.length?function(r){return Un(n,r)}:n-r}function Wn(){return!0}function Fn(n){return S(1,n)}function Ln(n,r){return 1===arguments.length?function(r){return Ln(n,r)}:"string"==typeof r?r.slice(0,n):P(r,0,n)}function qn(n,r){return 1===arguments.length?function(r){return qn(n,r)}:(n(r),r)}function zn(n,r){return 1===arguments.length?function(r){return zn(n,r)}:-1!==r.search(n)}function Dn(n,r){return 1===arguments.length?function(r){return Dn(n,r)}:W(n,On(0,r))}function Gn(n){return n.toLowerCase()}function Hn(n){return n.toString()}function In(n){return n.toUpperCase()}function Jn(n){return n.trim()}function Kn(n){for(var r=-1,t=[];++r<n.length;){var u=n[r];A(u,t)||t.push(u)}return t}function Mn(n,r){if(1===arguments.length)return function(r){return Mn(n,r)};for(var t=-1,u=[],e=function(){var e=r[t];i(function(r){return n(e,r)},u)||u.push(e)};++t<r.length;)e();return u}function Qn(n,r,t){return void 0===r?function(r,t){return Qn(n,r,t)}:void 0===t?function(t){return Qn(n,r,t)}:t.concat().fill(r,n,n+1)}function Tn(n){var r=[];for(var t in n)r.push(n[t]);return r}function Vn(n,r){return Sn(function(r,t){return A(t,n)?r:r.concat(t)},[],r)}function Xn(n,t){return 1===arguments.length?function(r){return Xn(n,r)}:r(Sn)(function(n,r,u){return t[u]?n.concat([[r,t[u]]]):n},[],n)}function Yn(n,r){return 1===arguments.length?function(r){return Yn(n,r)}:n.reduce(function(n,t,u){return n[t]=r[u],n},{})}export{n as add,r as addIndex,t as adjust,e as all,o as allPass,f as always,i as any,c as anyPass,l as append,a as assoc,h as both,v as complement,s as compose,p as concat,A as contains,g as curry,b as dec,m as defaultTo,j as dissoc,O as divide,S as drop,N as dropLast,E as either,x as endsWith,y as equals,w as F,u as filter,B as find,C as findIndex,R as flatten,U as flip,F as forEach,L as groupBy,q as has,z as head,D as identity,G as ifElse,H as inc,I as includes,J as indexBy,K as indexOf,M as init,Q as is,T as isNil,V as join,X as keys,Y as last,Z as lastIndexOf,$ as length,W as map,_ as match,nn as merge,rn as max,tn as maxBy,un as min,en as minBy,on as modulo,fn as multiply,cn as none,ln as not,gn as nth,an as omit,hn as partialCurry,vn as path,sn as pathOr,pn as pick,dn as pickAll,yn as pipe,An as pluck,bn as prepend,mn as prop,jn as propEq,On as range,Sn as reduce,Nn as reject,En as repeat,Pn as replace,kn as reverse,xn as sort,wn as sortBy,Bn as split,Cn as splitEvery,Rn as startsWith,Un as subtract,Wn as T,Fn as tail,Ln as take,k as takeLast,qn as tap,zn as test,Dn as times,Gn as toLower,Hn as toString,In as toUpper,Jn as trim,d as type,Kn as uniq,Mn as uniqWith,Qn as update,Tn as values,Vn as without,Xn as zip,Yn as zipObj};
//# sourceMappingURL=rambda.esm.js.map
