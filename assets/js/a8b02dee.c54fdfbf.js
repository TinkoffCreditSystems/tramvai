(self.webpackChunk=self.webpackChunk||[]).push([[270],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1108:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>s,toc:()=>p,default:()=>m});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={id:"create-action",title:"createAction"},l=void 0,s={unversionedId:"references/tramvai/create-action",id:"references/tramvai/create-action",isDocsHomePage:!1,title:"createAction",description:"createAction - Method for creating asynchronous actions. It is used both for building chains of sagas and for performing global actions when building a response to a client",source:"@site/tmp-docs/references/tramvai/create-action.md",sourceDirName:"references/tramvai",slug:"/references/tramvai/create-action",permalink:"/docs/references/tramvai/create-action",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tramvai/create-action.md",version:"current",frontMatter:{id:"create-action",title:"createAction"},sidebar:"docs",previous:{title:"createBundle",permalink:"/docs/references/tramvai/create-bundle"},next:{title:"module",permalink:"/docs/references/tramvai/module"}},p=[{value:"createAction({ name, fn, deps, conditions })",id:"createaction-name-fn-deps-conditions-",children:[]},{value:"Usage example",id:"usage-example",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createAction")," - Method for creating asynchronous actions. It is used both for building chains of sagas and for performing global actions when building a response to a client"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/action"},"More about actions")),(0,o.kt)("h2",{id:"createaction-name-fn-deps-conditions-"},"createAction({ name, fn, deps, conditions })"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - The name of the action, a unique identifier is expected"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fn(context, payload, deps)")," - Implementation of the action, this function will be called when the action is used, maybe ",(0,o.kt)("inlineCode",{parentName:"li"},"async"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context")," - ",(0,o.kt)("a",{parentName:"li",href:"/docs/references/tokens/common-tokens#context-tokens-list"},"ConsumerContext")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload")," - data passed to action"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deps")," - provider instances from ",(0,o.kt)("inlineCode",{parentName:"li"},"deps")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deps")," - List of providers that are needed for the action to work"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"conditions")," - List of restrictions for the execution of the action")),(0,o.kt)("h2",{id:"usage-example"},"Usage example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createAction } from '@tramvai/core';\n\ncreateAction({\n  name: 'action log error',\n  fn: (context, payload, deps) => {\n    deps.logger.error('ERROR');\n  },\n  deps: {\n    logger: 'logger',\n  },\n  conditions: {\n    requiredCoreRoles: ['god'],\n  },\n});\n")))}m.isMDXComponent=!0}}]);