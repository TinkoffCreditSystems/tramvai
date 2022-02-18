"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(r),v=i,m=p["".concat(s,".").concat(v)]||p[v]||c[v]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2775:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>p});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),l=["components"],o={},s=void 0,d={unversionedId:"references/libs/env-validators",id:"references/libs/env-validators",title:"env-validators",description:"Tiny library with validators for env variables",source:"@site/tmp-docs/references/libs/env-validators.md",sourceDirName:"references/libs",slug:"/references/libs/env-validators",permalink:"/docs/references/libs/env-validators",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/env-validators.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"cookies",permalink:"/docs/references/libs/cookies"},next:{title:"error-handlers",permalink:"/docs/references/libs/error-handlers"}},u=[{value:"Installation",id:"installation",children:[],level:2},{value:"Validators List",id:"validators-list",children:[],level:2},{value:"Validators Interface",id:"validators-interface",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"isUrl",id:"isurl",children:[],level:3},{value:"isNumber",id:"isnumber",children:[],level:3},{value:"isTrue",id:"istrue",children:[],level:3},{value:"isFalse",id:"isfalse",children:[],level:3},{value:"isOneOf",id:"isoneof",children:[],level:3},{value:"startsWith",id:"startswith",children:[],level:3},{value:"endsWith",id:"endswith",children:[],level:3}],level:2},{value:"Combinations of validators",id:"combinations-of-validators",children:[],level:2}],c={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tiny library with validators for env variables"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save @tinkoff/env-validators\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tinkoff/env-validators\n")),(0,a.kt)("h2",{id:"validators-list"},"Validators List"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"isUrl - check if string is valid URL"),(0,a.kt)("li",{parentName:"ul"},"isNumber - check if value is number"),(0,a.kt)("li",{parentName:"ul"},"isTrue - check if value is true"),(0,a.kt)("li",{parentName:"ul"},"isFalse - check if value is false"),(0,a.kt)("li",{parentName:"ul"},"isOneOf - check if value is one of presented")),(0,a.kt)("h2",{id:"validators-interface"},"Validators Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(value: string) => boolean | string;\n")),(0,a.kt)("p",null,"Returns any boolean (true or false) if value is valid, string with error otherwise"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"isurl"},"isUrl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { isUrl } from '@tinkoff/env-validators';\n\nisUrl('https://google.com'); // false\nisUrl('Not valid url'); // 'URL is not valid'\n")),(0,a.kt)("h3",{id:"isnumber"},"isNumber"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { isNumber } from '@tinkoff/env-validators';\n\nisNumber('https://google.com'); // value is not a number\nisNumber('5'); // true\n")),(0,a.kt)("h3",{id:"istrue"},"isTrue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { isTrue } from '@tinkoff/env-validators';\n\nisTrue('something'); // value is not a true\nisTrue('true'); // true\n")),(0,a.kt)("h3",{id:"isfalse"},"isFalse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { isFalse } from '@tinkoff/env-validators';\n\nisFalse('true'); // value is not a false\nisFalse('false'); // true\n")),(0,a.kt)("h3",{id:"isoneof"},"isOneOf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { isOneOf } from '@tinkoff/env-validators';\n\nisOneOf(['1', '2', '3'])('isOneOf'); // value is not in list\nisOneOf(['1', '2'])('1'); // true\nisOneOf(['true', 'false'])('true'); // true\n")),(0,a.kt)("h3",{id:"startswith"},"startsWith"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { startsWith } from '@tinkoff/env-validators';\n\nstartsWith('https')('http://google.com'); // value should starts with https\nstartsWith('http')('http://yandex.ru'); // true\n")),(0,a.kt)("h3",{id:"endswith"},"endsWith"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { endsWith } from '@tinkoff/env-validators';\n\nendsWith('/')('https://google.com'); // value should ends with /\nendsWith('/')('http://yandex.ru/'); // true\n")),(0,a.kt)("p",null,"or to validate ENV variable in @tramvai"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { provide } from '@tramvai/core';\nimport { isUrl } from '@tinkoff/env-validators';\nimport { ENV_USED_TOKEN } from '@tramvai/module-common';\n\nproviders: [\n  provide({\n    provide: ENV_USED_TOKEN,\n    multi: true,\n    useValue: [\n      { key: 'TINKOFF_API', validator: isUrl },\n    ],\n  }),\n]\n")),(0,a.kt)("h2",{id:"combinations-of-validators"},"Combinations of validators"),(0,a.kt)("p",null,"To combine two or more validators call ",(0,a.kt)("inlineCode",{parentName:"p"},"combineValidators")," method like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { endsWith, isUrl, combineValidators } from '@tinkoff/env-validators';\n\ncombineValidators([isUrl, endsWith('/')])('https://google.com'); // 'value should ends with /'\ncombineValidators([isUrl, endsWith('/')])('not url but with backslash/'); // 'URL is not valid'\ncombineValidators([isUrl, endsWith('/')])('not url at all'); // 'URL is not valid; value should ends with /'\ncombineValidators([isUrl, endsWith('/')])('https://google.com/'); // false\n")),(0,a.kt)("p",null,"or to validate ENV variable in @tramvai"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import { provide } from '@tramvai/core';\nimport { endsWith, isUrl, combineValidators } from '@tinkoff/env-validators';\nimport { ENV_USED_TOKEN } from '@tramvai/module-common';\n\nproviders: [\n  provide({\n    provide: ENV_USED_TOKEN,\n    multi: true,\n    useValue: [\n      { key: 'TINKOFF_API', validator: combineValidators([isUrl, endsWith('/')]) },\n    ],\n  }),\n]\n")))}p.isMDXComponent=!0}}]);