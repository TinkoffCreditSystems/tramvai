"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"hooks-and-guards",title:"Hooks and Guards"},s=void 0,u={unversionedId:"features/routing/hooks-and-guards",id:"features/routing/hooks-and-guards",title:"Hooks and Guards",description:"Guards",source:"@site/tmp-docs/03-features/07-routing/05-hooks-and-guards.md",sourceDirName:"03-features/07-routing",slug:"/features/routing/hooks-and-guards",permalink:"/docs/features/routing/hooks-and-guards",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/07-routing/05-hooks-and-guards.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"hooks-and-guards",title:"Hooks and Guards"},sidebar:"sidebar",previous:{title:"Links and Navigation",permalink:"/docs/features/routing/links-and-navigation"},next:{title:"Wildcard Routes",permalink:"/docs/features/routing/wildcard-routes"}},d={},p=[{value:"Guards",id:"guards",level:2},{value:"Rules",id:"rules",level:3},{value:"Possible result",id:"possible-result",level:3},{value:"Hooks",id:"hooks",level:2},{value:"Rules",id:"rules-1",level:3},{value:"List of available hooks",id:"list-of-available-hooks",level:3},{value:"- Next: Routing - Wildcard Routes",id:"--next-routing---wildcard-routes",level:5}],c={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"guards"},"Guards"),(0,o.kt)("p",null,"Guards allow you to control the availability of a particular route for a specific transition. From the guard, you can block the transition or initiate a redirect."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { provide } from '@tramvai/core';\nimport { ROUTER_GUARD_TOKEN } from '@tramvai/module-router';\n\nconst provider = provide({\n  provide: ROUTER_GUARD_TOKEN,\n  useValue: async ({ to }) => {\n    if (to.config.blocked) {\n      return false; // block this transition\n    }\n\n    if (typeof to.config.redirect === 'string') {\n      return to.config.redirect; // call a redirect to the specified page\n    }\n\n    if (typeof to.config.needAuth && !isAuth()) {\n      return { url: '/login/', code: '302' }; // redirect to page with NavigateOptions\n    }\n\n    // if nothing is returned, the transition will be performed as usual\n  },\n});\n")),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"guards are asynchronous and it execution will be awaited inside routing"),(0,o.kt)("li",{parentName:"ul"},"all guards are running in parallel and they are all awaited"),(0,o.kt)("li",{parentName:"ul"},"if several guards return something then the result from a guard that was registered early will be used")),(0,o.kt)("h3",{id:"possible-result"},"Possible result"),(0,o.kt)("p",null,"The behaviour of routing depends on the result of executing guards functions and there result might be next:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if all of the guards returns ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," then navigation will continue executing"),(0,o.kt)("li",{parentName:"ul"},"if any of the guards returns ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," then navigation is blocked and next action differs on server and client"),(0,o.kt)("li",{parentName:"ul"},"if any of the guards returns ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," it is considered as url to which redirect should be happen"),(0,o.kt)("li",{parentName:"ul"},"if any of the guards returns ",(0,o.kt)("a",{parentName:"li",href:"/docs/features/routing/links-and-navigation#navigateoptions"},(0,o.kt)("inlineCode",{parentName:"a"},"NavigateOptions"))," interface, ",(0,o.kt)("inlineCode",{parentName:"li"},"url")," property from it is considered as url to which redirect should be happen")),(0,o.kt)("h2",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"Transition hooks allow you to perform your asynchronous actions at different stages of the transition."),(0,o.kt)("p",null,"There is a few steps to add transition hooks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get router instance with ",(0,o.kt)("inlineCode",{parentName:"li"},"ROUTER_TOKEN")," token"),(0,o.kt)("li",{parentName:"ol"},"Use methods ",(0,o.kt)("inlineCode",{parentName:"li"},"registerHook"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"registerSyncHook")," to add new hooks to the router"),(0,o.kt)("li",{parentName:"ol"},"Registration should happen as soon as possible so appropriate command line is ",(0,o.kt)("inlineCode",{parentName:"li"},"customerStart")," as it executes before navigation happens.")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { provide, commandLineListTokens } from '@tramvai/core';\nimport { ROUTER_TOKEN } from '@tramvai/module-router';\n\nconst provider = provide({\n  provide: commandLineListTokens.customerStart,\n  useFactory: ({ router }) => {\n    return function addRouterHook() {\n      router.registerHook('beforeNavigate', async ({ from, to, url, fromUrl }) => {\n        console.log(`navigating from ${from} to route ${to}`);\n      });\n    };\n  },\n  deps: {\n    router: ROUTER_TOKEN,\n  },\n});\n")),(0,o.kt)("h3",{id:"rules-1"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all hooks from the same event are running in parallel"),(0,o.kt)("li",{parentName:"ul"},"most of the hooks are asynchronous and are awaited inside router"),(0,o.kt)("li",{parentName:"ul"},"if some error happens when running hook it will be logged to console but wont affect navigation (except for the ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeResolve")," hook - error for it will be rethrown)")),(0,o.kt)("h3",{id:"list-of-available-hooks"},"List of available hooks"),(0,o.kt)("p",null,"Async hooks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"navigate hooks")," - asynchronous hooks only for ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," calls:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeResolve")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeNavigate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"afterNavigate")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"updateCurrentRoute hooks")," - asynchronous hooks only for ",(0,o.kt)("inlineCode",{parentName:"p"},"updateCurrentRoute")," calls:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeUpdateCurrent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"afterUpdateCurrent"))))),(0,o.kt)("p",null,"Sync hooks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"change")," - runs when any of changes to current route\\url happens")),(0,o.kt)("h5",{id:"--next-routing---wildcard-routes"},"- ",(0,o.kt)("a",{parentName:"h5",href:"/docs/features/routing/wildcard-routes"},"Next: Routing - Wildcard Routes")))}m.isMDXComponent=!0}}]);