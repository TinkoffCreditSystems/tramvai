"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>l,toc:()=>c});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],u={id:"how-to",title:"How-to"},s=void 0,l={unversionedId:"features/routing/how-to",id:"features/routing/how-to",title:"How-to",description:"Setting when actions should be performed during SPA transitions",source:"@site/tmp-docs/03-features/07-routing/08-how-to.md",sourceDirName:"03-features/07-routing",slug:"/features/routing/how-to",permalink:"/docs/features/routing/how-to",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/07-routing/08-how-to.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"how-to",title:"How-to"},sidebar:"sidebar",previous:{title:"Redirects",permalink:"/docs/features/routing/redirects"},next:{title:"Testing",permalink:"/docs/features/routing/testing"}},p={},c=[{value:"Setting when actions should be performed during SPA transitions",id:"setting-when-actions-should-be-performed-during-spa-transitions",level:3},{value:"Load route config from external api",id:"load-route-config-from-external-api",level:3},{value:"How to transform every route befor usage",id:"how-to-transform-every-route-befor-usage",level:3},{value:"App behind proxy",id:"app-behind-proxy",level:3},{value:"- Next: Routing - Testing",id:"--next-routing---testing",level:5}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"setting-when-actions-should-be-performed-during-spa-transitions"},"Setting when actions should be performed during SPA transitions"),(0,i.kt)("p",null,"By default, SPA transitions execute actions after defining the next route, but before the actual transition, which allows the page to be displayed immediately with new data, but can cause a noticeable visual lag if the actions are taken long enough."),(0,i.kt)("p",null,"It is possible to change the behavior and make the execution of actions after the transition itself. Then, when developing components, you will need to take into account that data will be loaded as it becomes available."),(0,i.kt)("p",null,"Configurable explicitly when using the routing module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createApp } from '@tramvai/core';\nimport { SpaRouterModule } from '@tramvai/module-router';\n\ncreateApp({\n  modules: [\n    SpaRouterModule.forRoot([], {\n      spaActionsMode: 'after', // default is 'before'\n    }),\n  ],\n});\n")),(0,i.kt)("p",null,"or through token ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTER_SPA_ACTIONS_RUN_MODE_TOKEN"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { ROUTER_SPA_ACTIONS_RUN_MODE_TOKEN } from '@tramvai/module-router';\nimport { provide } from '@tramvai/core';\n\nconst providers = [\n  // ...,\n  provide({\n    provide: ROUTER_SPA_ACTIONS_RUN_MODE_TOKEN,\n    useValue: 'after',\n  }),\n];\n")),(0,i.kt)("h3",{id:"load-route-config-from-external-api"},"Load route config from external api"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTE_RESOLVE_TOKEN")," provider, where you need to fetch and return new route object (route will be registered in ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeResolve")," transition hook):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { provide } from '@tramvai/core';\nimport { ROUTE_RESOLVE_TOKEN } from '@tramvai/module-router';\n\nconst provider = provide({\n  provide: ROUTE_RESOLVE_TOKEN,\n  // will be executed for every navigation, when corresponding route is not defined in application\n  useValue: async (navigation) => {\n    const route = await fetchRouteFromExternalApi(navigation);\n\n    if (route) {\n      return route;\n    }\n  },\n});\n")),(0,i.kt)("h3",{id:"how-to-transform-every-route-befor-usage"},"How to transform every route befor usage"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUTE_TRANSFORM_TOKEN")," multi provider, where you can change route object directly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { provide } from '@tramvai/core';\nimport { ROUTE_TRANSFORM_TOKEN } from '@tramvai/module-router';\n\nconst provider = provide({\n  provide: ROUTE_TRANSFORM_TOKEN,\n  // in this example, paths for every routes will be modified\n  useValue: (route) => {\n    return {\n      ...route,\n      path: `/prefix${route.path}`,\n    };\n  },\n});\n")),(0,i.kt)("h3",{id:"app-behind-proxy"},"App behind proxy"),(0,i.kt)("p",null,"Router doesn't support proxy setup directly. But proxy still can be used with some limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"setup proxy server to pass requests to app with rewriting request and response paths. (E.g. for ",(0,i.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_redirect"},"nginx"),")"),(0,i.kt)("li",{parentName:"ul"},"it wont work as expected on spa navigation on client, so only option in this case is use the ",(0,i.kt)("inlineCode",{parentName:"li"},"NoSpaRouter"))),(0,i.kt)("h5",{id:"--next-routing---testing"},"- ",(0,i.kt)("a",{parentName:"h5",href:"/docs/features/routing/testing"},"Next: Routing - Testing")))}m.isMDXComponent=!0}}]);