"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5628],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),p=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7062:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"redirects",title:"Redirects"},d=void 0,p={unversionedId:"features/routing/redirects",id:"features/routing/redirects",title:"Redirects",description:"Redirects can be done via guards or explicitly via the redirect property in the route.",source:"@site/tmp-docs/03-features/07-routing/07-redirects.md",sourceDirName:"03-features/07-routing",slug:"/features/routing/redirects",permalink:"/docs/features/routing/redirects",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/07-routing/07-redirects.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"redirects",title:"Redirects"},sidebar:"sidebar",previous:{title:"Wildcard Routes",permalink:"/docs/features/routing/wildcard-routes"},next:{title:"How-to",permalink:"/docs/features/routing/how-to"}},l={},u=[{value:"Define redirect manually",id:"define-redirect-manually",level:2},{value:"Redirect in Guard",id:"redirect-in-guard",level:2},{value:"Redirect in Action",id:"redirect-in-action",level:2}],s={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Redirects can be done via ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/routing/hooks-and-guards#guards"},"guards")," or explicitly via the ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect")," property in the route."),(0,i.kt)("h2",{id:"define-redirect-manually"},"Define redirect manually"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use when redirect is completely static")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { SpaRouterModule } from '@tramvai/modules-router';\n\ncreateApp({\n  modules: [\n    SpaRouterModule.forRoot([{\n      name: 'redirect',\n      path: '/from/',\n      redirect: '/to/',\n    }]),\n  ],\n});\n")),(0,i.kt)("h2",{id:"redirect-in-guard"},"Redirect in Guard"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use when redirect logic is global and complex")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { provide } from '@tramvai/core';\nimport { ROUTER_GUARD_TOKEN } from '@tramvai/module-router';\n\nconst provider = provide({\n  provide: ROUTER_GUARD_TOKEN,\n  useValue: async ({ to }) => {\n    if (to && to.path === '/from/') {\n      return '/to/';\n    }\n  },\n});\n")),(0,i.kt)("h2",{id:"redirect-in-action"},"Redirect in Action"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use when redirect logic is complex and local for one or a few pages")),(0,i.kt)("p",null,"For example, you make a important request in action, and if this request fails, application need to redirect to another page. If you want to prevent page component rendering and force redirect, you can throw ",(0,i.kt)("inlineCode",{parentName:"p"},"RedirectFoundError")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@tinkoff/errors")," library:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { declareAction } from '@tramvai/core';\nimport { RedirectFoundError } from '@tinkoff/errors';\nimport { RESPONSE_MANAGER_TOKEN } from '@tramvai/tokens-common';\n\nconst redirectAction = declareAction({\n  name: 'redirectAction',\n  async fn() {\n    throw new RedirectFoundError({ nextUrl: '/to/' });\n  },\n});\n\nconst RedirectPage = () => <h1>Redirect Page</h1>;\n\nRedirectPage.actions = [redirectAction];\n\nexport default RedirectPage;\n")))}m.isMDXComponent=!0}}]);