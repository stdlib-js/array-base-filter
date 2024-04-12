"use strict";var s=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var f=s(function(y,c){
var v=require('@stdlib/array-base-arraylike2object/dist');function l(r,t){return typeof r[t]=="function"}function h(r,t,n){var e,o,a;for(e=[],a=0;a<r.length;a++)o=r[a],t.call(n,o,a,r)&&e.push(o);return e}function p(r,t,n){var e,o,a,i,u;for(e=r.data,o=r.accessors[0],a=[],u=0;u<e.length;u++)i=o(e,u),t.call(n,i,u,e)&&a.push(i);return a}function b(r,t,n){var e;return l(r,"filter")?r.filter(t,n):(e=v(r),e.accessorProtocol?p(e,t,n):h(r,t,n))}c.exports=b
});var j=f();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
