// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.1.0-esm/index.mjs";function t(t,e,n){var o;return function(r,t){return"function"==typeof r[t]}(t,"filter")?t.filter(e,n):(o=r(t)).accessorProtocol?function(r,t,e){var n,o,a,s,c;for(n=r.data,o=r.accessors[0],a=[],c=0;c<n.length;c++)s=o(n,c),t.call(e,s,c,n)&&a.push(s);return a}(o,e,n):function(r,t,e){var n,o,a;for(n=[],a=0;a<r.length;a++)o=r[a],t.call(e,o,a,r)&&n.push(o);return n}(t,e,n)}export{t as default};
//# sourceMappingURL=index.mjs.map
