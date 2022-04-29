"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3497],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(t),f=s,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return t?n.createElement(d,o(o({ref:r},u),{},{components:t})):n.createElement(d,o({ref:r},u))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4118:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>l,toc:()=>u,default:()=>m});var n=t(7462),s=t(3366),i=(t(7294),t(3905)),o=["components"],a={},p=void 0,l={unversionedId:"references/libs/measure-express-requests",id:"references/libs/measure-express-requests",title:"measure-express-requests",description:"Library for measuring RED metrics in the express app",source:"@site/tmp-docs/references/libs/measure-express-requests.md",sourceDirName:"references/libs",slug:"/references/libs/measure-express-requests",permalink:"/docs/references/libs/measure-express-requests",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/measure-express-requests.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"main-polyfills",permalink:"/docs/references/libs/main-polyfills"},next:{title:"measure-fastify-requests",permalink:"/docs/references/libs/measure-fastify-requests"}},u=[{value:"Example",id:"example",children:[],level:2}],c={toc:u};function m(e){var r=e.components,t=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Library for measuring RED metrics in the express app"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import express from 'express';\nimport { measure } from '@tinkoff/measure-express-requests';\nimport { Counter, Histogram } from 'prom-client';\n\nconst app = express();\n\napp.use(\n  measure({\n    metrics: {\n      counter: (opt) => new Counter(opt),\n      histogram: (opt) => new Histogram(opt),\n    },\n  })\n);\n")),(0,i.kt)("p",null,"In the prom-client registry new metrics will be available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http_requests_total")," - number of incoming requests;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http_requests_errors")," - number of errors in the incoming requests;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"http_requests_execution_time")," - histogram with the request handler execution time.")))}m.isMDXComponent=!0}}]);