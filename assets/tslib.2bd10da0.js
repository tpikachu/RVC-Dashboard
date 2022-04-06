/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var l=function(n,r){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},l(n,r)};function u(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");l(n,r);function e(){this.constructor=n}n.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var f=function(){return f=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++){e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r},f.apply(this,arguments)};function y(n,r){var e={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&r.indexOf(t)<0&&(e[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(n);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(e[t[o]]=n[t[o]]);return e}function p(n,r){var e=typeof Symbol=="function"&&n[Symbol.iterator];if(!e)return n;var t=e.call(n),o,a=[],c;try{for(;(r===void 0||r-- >0)&&!(o=t.next()).done;)a.push(o.value)}catch(i){c={error:i}}finally{try{o&&!o.done&&(e=t.return)&&e.call(t)}finally{if(c)throw c.error}}return a}function s(n,r,e){if(e||arguments.length===2)for(var t=0,o=r.length,a;t<o;t++)(a||!(t in r))&&(a||(a=Array.prototype.slice.call(r,0,t)),a[t]=r[t]);return n.concat(a||Array.prototype.slice.call(r))}export{f as _,y as a,p as b,s as c,u as d};
