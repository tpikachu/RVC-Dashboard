var b=function(r){if(typeof document=="undefined")return null;var u=Array.isArray(r)?r[0]:r;return u.ownerDocument.body},i=new WeakMap,n=new WeakMap,c={},h=0,d=function(r,u,a){u===void 0&&(u=b(r)),a===void 0&&(a="data-aria-hidden");var p=Array.isArray(r)?r:[r];c[a]||(c[a]=new WeakMap);var v=c[a],A=[],s=new Set,l=function(t){!t||s.has(t)||(s.add(t),l(t.parentNode))};p.forEach(l);var o=function(t){!t||p.indexOf(t)>=0||Array.prototype.forEach.call(t.children,function(e){if(s.has(e))o(e);else{var f=e.getAttribute("aria-hidden"),w=f!==null&&f!=="false",M=(i.get(e)||0)+1,y=(v.get(e)||0)+1;i.set(e,M),v.set(e,y),A.push(e),M===1&&w&&n.set(e,!0),y===1&&e.setAttribute(a,"true"),w||e.setAttribute("aria-hidden","true")}})};return o(u),s.clear(),h++,function(){A.forEach(function(t){var e=i.get(t)-1,f=v.get(t)-1;i.set(t,e),v.set(t,f),e||(n.has(t)||t.removeAttribute("aria-hidden"),n.delete(t)),f||t.removeAttribute(a)}),h--,h||(i=new WeakMap,i=new WeakMap,n=new WeakMap,c={})}};export{d as h};
