import{r as v}from"./react.7ded48a1.js";/*! *****************************************************************************
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
***************************************************************************** */var c=function(){return c=Object.assign||function(n){for(var r,t=1,o=arguments.length;t<o;t++){r=arguments[t];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(n[u]=r[u])}return n},c.apply(this,arguments)};function h(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r}function d(e){return e}function l(e,n){n===void 0&&(n=d);var r=[],t=!1,o={read:function(){if(t)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(u){var i=n(u,t);return r.push(i),function(){r=r.filter(function(a){return a!==i})}},assignSyncMedium:function(u){for(t=!0;r.length;){var i=r;r=[],i.forEach(u)}r={push:function(a){return u(a)},filter:function(){return r}}},assignMedium:function(u){t=!0;var i=[];if(r.length){var a=r;r=[],a.forEach(u),i=r}var p=function(){var f=i;i=[],f.forEach(u)},s=function(){return Promise.resolve().then(p)};s(),r={push:function(f){i.push(f),s()},filter:function(f){return i=i.filter(f),r}}}};return o}function y(e,n){return n===void 0&&(n=d),l(e,n)}function O(e){e===void 0&&(e={});var n=l(null);return n.options=c({async:!0,ssr:!1},e),n}var m=function(e){var n=e.sideCar,r=h(e,["sideCar"]);if(!n)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var t=n.read();if(!t)throw new Error("Sidecar medium not found");return v.exports.createElement(t,c({},r))};m.isSideCarExport=!0;function b(e,n){return e.useMedium(n),m}export{O as a,y as c,b as e};
