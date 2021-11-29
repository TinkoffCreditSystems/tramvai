(self.webpackChunk=self.webpackChunk||[]).push([[5573],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>s,toc:()=>p,default:()=>d});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={id:"create-bundle",title:"createBundle"},l=void 0,s={unversionedId:"references/tramvai/create-bundle",id:"references/tramvai/create-bundle",isDocsHomePage:!1,title:"createBundle",description:"createBundle(options: BundleOptions) - method to create a bundle.",source:"@site/tmp-docs/references/tramvai/create-bundle.md",sourceDirName:"references/tramvai",slug:"/references/tramvai/create-bundle",permalink:"/en/docs/references/tramvai/create-bundle",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tramvai/create-bundle.md",version:"current",frontMatter:{id:"create-bundle",title:"createBundle"},sidebar:"docs",previous:{title:"createApp",permalink:"/en/docs/references/tramvai/create-app"},next:{title:"createAction",permalink:"/en/docs/references/tramvai/create-action"}},p=[{value:"Properties BundleOptions",id:"properties-bundleoptions",children:[]},{value:"Usage",id:"usage",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createBundle(options: BundleOptions)")," - method to create a bundle."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/concepts/bundle"},"Read more about bundles")),(0,o.kt)("h2",{id:"properties-bundleoptions"},"Properties BundleOptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," - Name of the bundle. The value will be used as a bundle identifier."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"components: {}")," - An object with registered components for the bundle, which you can use in application routes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"presets?: []")," - A list of additional properties for the current bundle. This list is merged with the current properties. Needed to extract common parts, e.g. a set with actions and components for authorization. Reference - babel and eslint presets"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"actions?: []")," - List of ",(0,o.kt)("a",{parentName:"li",href:"/en/docs/concepts/action"},"actions")," that will be registered globally for the bundle"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reducers?: []")," - List of ",(0,o.kt)("a",{parentName:"li",href:"/en/docs/features/state/overview"},"reducers"),", which must be registered with the loading of the bundle")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createBundle } from '@tramvai/core';\nimport { lazy } from '@tramvai/react';\n\ncreateBundle({\n  name: 'app/bundle',\n  presets: [commonPreset],\n  components: {\n    'app/pages/MainPage': lazy(() => import('../pages/MainPage')),\n    'app/pages/SecondPage': lazy(() => import('../pages/SecondPage')),\n  },\n  actions: [fooAction, barAction],\n  reducers: [bazReducer],\n});\n")))}d.isMDXComponent=!0}}]);