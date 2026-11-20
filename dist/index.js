"use strict";var s=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(a){throw (t=0, a)}};};var f=s(function(y,c){
var v=require('@stdlib/array-base-arraylike2object/dist');function l(r,t){return typeof r[t]=="function"}function h(r,t,a){var e,o,n;for(e=[],n=0;n<r.length;n++)o=r[n],t.call(a,o,n,r)&&e.push(o);return e}function p(r,t,a){var e,o,n,i,u;for(e=r.data,o=r.accessors[0],n=[],u=0;u<e.length;u++)i=o(e,u),t.call(a,i,u,e)&&n.push(i);return n}function b(r,t,a){var e;return l(r,"filter")?r.filter(t,a):(e=v(r),e.accessorProtocol?p(e,t,a):h(r,t,a))}c.exports=b
});var j=f();module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
