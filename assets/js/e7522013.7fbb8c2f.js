"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3921],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),b=o,m=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7052:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>s,toc:()=>u,default:()=>p});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],c={},i=void 0,s={unversionedId:"references/libs/react-hooks",id:"references/libs/react-hooks",title:"react-hooks",description:"Set of React Hooks",source:"@site/tmp-docs/references/libs/react-hooks.md",sourceDirName:"references/libs",slug:"/references/libs/react-hooks",permalink:"/docs/references/libs/react-hooks",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/react-hooks.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"pubsub",permalink:"/docs/references/libs/pubsub"},next:{title:"router",permalink:"/docs/references/libs/router"}},u=[{value:"Api",id:"api",children:[{value:"useShallowEqual",id:"useshallowequal",children:[],level:3}],level:2}],f={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Set of React Hooks"),(0,a.kt)("h2",{id:"api"},"Api"),(0,a.kt)("h3",{id:"useshallowequal"},"useShallowEqual"),(0,a.kt)("p",null,"Makes shallow equal check for passed argument. If current argument is equal to previous then result of the hook will not be changed. Otherwise it will be equal to a current argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { useShallowEqual } from '@tinkoff/react-hooks';\n\nexport function Cmp({ obj }) {\n  // obj - some object\n  // objRef - reference to object. For example, if reference obj were changed after sequential render,\n  // but it still shallow equals to initial obj then objRef will reference to the initial obj \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442 obj\n  const objRef = useShallowEqual(obj);\n\n  useEffect(() => {\n    // React checks deps with reference equality that may lead to unnecessary hook call when reference were changed\n    // but we care only about actual changes to object itself not reference\n    // in that case objRef will not lead to effect call in case new reference is shallowly equal to previous\n  }, [objRef]);\n}\n")))}p.isMDXComponent=!0}}]);