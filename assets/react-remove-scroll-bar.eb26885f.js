import{r as g}from"./react.7ded48a1.js";import{s as v}from"./react-style-singleton.55676bbd.js";var l="right-scroll-bar-position",f="width-before-scroll-bar",h="with-scroll-bars-hidden",m="--removed-body-scroll-bar-size",c={left:0,top:0,right:0,gap:0},p=function(n){return parseInt(n||"",10)||0},u=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],r=e[n==="padding"?"paddingTop":"marginTop"],a=e[n==="padding"?"paddingRight":"marginRight"];return[p(t),p(r),p(a)]},s=function(n){if(n===void 0&&(n="margin"),typeof window=="undefined")return c;var e=u(n),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])}},x=v(),b=function(n,e,t,r){var a=n.left,d=n.top,o=n.right,i=n.gap;return t===void 0&&(t="margin"),`
  .`+h+` {
   overflow: hidden `+r+`;
   padding-right: `+i+"px "+r+`;
  }
  body {
    overflow: hidden `+r+`;
    `+[e&&"position: relative "+r+";",t==="margin"&&`
    padding-left: `+a+`px;
    padding-top: `+d+`px;
    padding-right: `+o+`px;
    margin-left:0;
    margin-top:0;
    margin-right: `+i+"px "+r+`;
    `,t==="padding"&&"padding-right: "+i+"px "+r+";"].filter(Boolean).join("")+`
  }
  
  .`+l+` {
    right: `+i+"px "+r+`;
  }
  
  .`+f+` {
    margin-right: `+i+"px "+r+`;
  }
  
  .`+l+" ."+l+` {
    right: 0 `+r+`;
  }
  
  .`+f+" ."+f+` {
    margin-right: 0 `+r+`;
  }
  
  body {
    `+m+": "+i+`px;
  }
`},S=function(n){var e=g.exports.useState(s(n.gapMode)),t=e[0],r=e[1];g.exports.useEffect(function(){r(s(n.gapMode))},[n.gapMode]);var a=n.noRelative,d=n.noImportant,o=n.gapMode,i=o===void 0?"margin":o;return g.exports.createElement(x,{styles:b(t,!a,i,d?"":"!important")})};export{S as R,f,l as z};
