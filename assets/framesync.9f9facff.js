var g=16.666666666666668,R=typeof performance!="undefined"?function(){return performance.now()}:function(){return Date.now()},w=typeof window!="undefined"?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(function(){return e(R())},g)};function S(e){var r=[],u=[],o=0,a=!1,f=new WeakSet,h={schedule:function(t,n,s){n===void 0&&(n=!1),s===void 0&&(s=!1);var i=s&&a,x=i?r:u;return n&&f.add(t),x.indexOf(t)===-1&&(x.push(t),i&&a&&(o=r.length)),t},cancel:function(t){var n=u.indexOf(t);n!==-1&&u.splice(n,1),f.delete(t)},process:function(t){var n;if(a=!0,n=[u,r],r=n[0],u=n[1],u.length=0,o=r.length,o)for(var s=0;s<o;s++){var i=r[s];i(t),f.has(i)&&(h.schedule(i),e())}a=!1}};return h}var T=40,l=!0,v=!1,m=!1,d={delta:0,timestamp:0},c=["read","update","preRender","render","postRender"],p=c.reduce(function(e,r){return e[r]=S(function(){return v=!0}),e},{}),N=c.reduce(function(e,r){var u=p[r];return e[r]=function(o,a,f){return a===void 0&&(a=!1),f===void 0&&(f=!1),v||E(),u.schedule(o,a,f)},e},{}),O=c.reduce(function(e,r){return e[r]=p[r].cancel,e},{}),y=c.reduce(function(e,r){return e[r]=function(){return p[r].process(d)},e},{}),D=function(e){return p[e].process(d)},F=function(e){v=!1,d.delta=l?g:Math.max(Math.min(e-d.timestamp,T),1),d.timestamp=e,m=!0,c.forEach(D),m=!1,v&&(l=!1,w(F))},E=function(){v=!0,l=!0,m||w(F)},C=function(){return d};export{O as c,y as f,C as g,N as s};