var v=Object.defineProperty;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var h=(e,n,t)=>n in e?v(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,l=(e,n)=>{for(var t in n||(n={}))x.call(n,t)&&h(e,t,n[t]);if(d)for(var t of d(n))D.call(n,t)&&h(e,t,n[t]);return e};import{a as E,b as S}from"./@babel.d4c7f82f.js";import{r as U}from"./react.7ded48a1.js";import{j as g}from"./@chakra-ui.9b2c274d.js";function M(e,n){function t(a){return a.displayName||a.name||"Component"}return function(s){var o=[],c;function f(){c=e(o.map(function(r){return r.props})),n(c)}var m=function(r){S(i,r);function i(){return r.apply(this,arguments)||this}i.peek=function(){return c};var p=i.prototype;return p.componentDidMount=function(){o.push(this),f()},p.componentDidUpdate=function(){f()},p.componentWillUnmount=function(){var y=o.indexOf(this);o.splice(y,1),f()},p.render=function(){return g(s,l({},this.props))},i}(U.exports.PureComponent);return E(m,"displayName","SideEffect("+t(s)+")"),m}}export{M as w};
