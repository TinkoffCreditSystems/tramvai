"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9670],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=o.createContext({}),u=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return o.createElement(a.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return t?o.createElement(m,l(l({ref:r},s),{},{components:t})):o.createElement(m,l({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=p;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<i;u++)l[u]=t[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6748:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var o=t(7462),n=t(3366),i=(t(7294),t(3905)),l=["components"],c={},a=void 0,u={unversionedId:"references/libs/errors",id:"references/libs/errors",title:"errors",description:"Common errors classes",source:"@site/tmp-docs/references/libs/errors.md",sourceDirName:"references/libs",slug:"/references/libs/errors",permalink:"/docs/references/libs/errors",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/errors.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"error-handlers",permalink:"/docs/references/libs/error-handlers"},next:{title:"eslint-plugin-tramvai",permalink:"/docs/references/libs/eslint-plugin-tramvai"}},s={},d=[{value:"Common",id:"common",level:2},{value:"SilentError",id:"silenterror",level:3},{value:"HTTP",id:"http",level:2},{value:"HttpError",id:"httperror",level:3},{value:"RedirectFoundError",id:"redirectfounderror",level:4},{value:"NotFoundError",id:"notfounderror",level:4},{value:"Action",id:"action",level:2},{value:"ConditionFailError",id:"conditionfailerror",level:3},{value:"Execution",id:"execution",level:2},{value:"ExecutionError",id:"executionerror",level:3},{value:"ExecutionAbortError",id:"executionaborterror",level:3},{value:"ExecutionTimeoutError",id:"executiontimeouterror",level:3}],p={toc:d};function f(e){var r=e.components,t=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Common errors classes"),(0,i.kt)("h2",{id:"common"},"Common"),(0,i.kt)("h3",{id:"silenterror"},"SilentError"),(0,i.kt)("p",null,"Marks error as silent e.g. throwing such errors should not produce any error logs."),(0,i.kt)("h2",{id:"http"},"HTTP"),(0,i.kt)("h3",{id:"httperror"},"HttpError"),(0,i.kt)("h4",{id:"redirectfounderror"},"RedirectFoundError"),(0,i.kt)("p",null,"Current response should be redirected"),(0,i.kt)("h4",{id:"notfounderror"},"NotFoundError"),(0,i.kt)("p",null,"Current Page was not found in the app"),(0,i.kt)("h2",{id:"action"},"Action"),(0,i.kt)("h3",{id:"conditionfailerror"},"ConditionFailError"),(0,i.kt)("p",null,"Some of the conditions check were failed"),(0,i.kt)("h2",{id:"execution"},"Execution"),(0,i.kt)("h3",{id:"executionerror"},"ExecutionError"),(0,i.kt)("p",null,"Execution was failed due to error in execution callback"),(0,i.kt)("h3",{id:"executionaborterror"},"ExecutionAbortError"),(0,i.kt)("p",null,"Execution was aborted due to AbortSignal abortion"),(0,i.kt)("h3",{id:"executiontimeouterror"},"ExecutionTimeoutError"),(0,i.kt)("p",null,"Execution was aborted due to exceeding timeout execution time"))}f.isMDXComponent=!0}}]);