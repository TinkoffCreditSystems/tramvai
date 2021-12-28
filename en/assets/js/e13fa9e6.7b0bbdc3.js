(self.webpackChunk=self.webpackChunk||[]).push([[8246],{3905:(e,a,n)=>{"use strict";n.d(a,{Zo:()=>s,kt:()=>m});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),d=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},s=function(e){var a=d(e.components);return t.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=d(n),m=i,I=g["".concat(p,".").concat(m)]||g[m]||c[m]||l;return n?t.createElement(I,r(r({ref:a},s),{},{components:n})):t.createElement(I,r({ref:a},s))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5068:(e,a,n)=>{"use strict";n.r(a),n.d(a,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>d,toc:()=>s,default:()=>g});var t=n(2122),i=n(9756),l=(n(7294),n(3905)),r=["components"],o={id:"child-app",title:"child-app"},p=void 0,d={unversionedId:"references/modules/child-app",id:"references/modules/child-app",isDocsHomePage:!1,title:"child-app",description:"Module for child app",source:"@site/tmp-docs/references/modules/child-app.md",sourceDirName:"references/modules",slug:"/references/modules/child-app",permalink:"/en/docs/references/modules/child-app",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/child-app.md",version:"current",frontMatter:{id:"child-app",title:"child-app"},sidebar:"docs",previous:{title:"cache-warmup",permalink:"/en/docs/references/modules/cache-warmup"},next:{title:"client-hints",permalink:"/en/docs/references/modules/client-hints"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Explanation",id:"explanation",children:[{value:"Terms",id:"terms",children:[]},{value:"DI",id:"di",children:[]},{value:"CommandLineRunner",id:"commandlinerunner",children:[]},{value:"Loading Child App",id:"loading-child-app",children:[]},{value:"State",id:"state",children:[]}]}],c={toc:s};function g(e){var a=e.components,o=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,t.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Module for child app"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"First, install ",(0,l.kt)("inlineCode",{parentName:"p"},"@tramvai/module-child-app")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/module-child-app\n")),(0,l.kt)("p",null,"And then add module to your app"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { ChildAppModule } from '@tramvai/module-child-app';\n\ncreateApp({\n  name: 'tincoin',\n  modules: [ChildAppModule],\n});\n")),(0,l.kt)("h2",{id:"explanation"},"Explanation"),(0,l.kt)("h3",{id:"terms"},"Terms"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"root-app")," - basic tramvai-app constructed with ",(0,l.kt)("inlineCode",{parentName:"li"},"createApp")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"@tramvai/core"),". It can connect with many child-app"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"child-app")," - external microfrontend constructed with ",(0,l.kt)("inlineCode",{parentName:"li"},"createChildApp")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"@tramvai/child-app-core"),". It is loaded by root-app and provides some external functionality"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SingletonDI")," - DI-container which is exist in single instance for app and exists as long as app itself"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RequestDI")," - DI-Container which is created for every request and represents specific data for single client. RequestDI inherits providers from SingletonDI and it is independent from other RequestDIs"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CommandLineRunner")," - instance of ",(0,l.kt)("a",{parentName:"li",href:"/en/docs/references/modules/common#commandmodule"},"CommandModule"))),(0,l.kt)("h3",{id:"di"},"DI"),(0,l.kt)("p",null,"Every child-app has its own DI-hierarchy which is isolated from other child app and partially from root-app. The only way communicate fpr DIs it's getting providers from root-app di inside child-app."),(0,l.kt)("p",null,"Next picture shows connection between DI-containers in ",(0,l.kt)("inlineCode",{parentName:"p"},"root-app")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"child-app"),"s"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"di",src:n(5182).Z})),(0,l.kt)("p",null,"How does it work when we trying to get provider from DI in ",(0,l.kt)("inlineCode",{parentName:"p"},"child-app"),":"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"First check that provider is exist in the current DI-container. If it is then return it."),(0,l.kt)("li",{parentName:"ol"},"If current DI is ",(0,l.kt)("inlineCode",{parentName:"li"},"RequestDI")," then go to ",(0,l.kt)("inlineCode",{parentName:"li"},"SingletonDI")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"child-app")," and look for provider.",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"If it exists in ",(0,l.kt)("inlineCode",{parentName:"li"},"SingletonDI")," then return it"),(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"RequestDI")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"root-app")," and if provider exists in it return it"),(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"SingletonDI")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"root-app")," and if provider exists in it return it"),(0,l.kt)("li",{parentName:"ol"},"Throw error otherwise"))),(0,l.kt)("li",{parentName:"ol"},"If current DI is ",(0,l.kt)("inlineCode",{parentName:"li"},"SingletonDI")," then go to ",(0,l.kt)("inlineCode",{parentName:"li"},"SingletonDI")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"root-app")," and check for provider there",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"If it exists then return it"),(0,l.kt)("li",{parentName:"ol"},"Throw error otherwise")))),(0,l.kt)("h3",{id:"commandlinerunner"},"CommandLineRunner"),(0,l.kt)("p",null,"Each ",(0,l.kt)("inlineCode",{parentName:"p"},"child-app")," has its own CommandLineRunner instance which allows to ",(0,l.kt)("inlineCode",{parentName:"p"},"child-app")," make some preparations before the actual page render. This CommandLineRunner has almost identical lines as ",(0,l.kt)("inlineCode",{parentName:"p"},"root-app")," to simplicity, but it is actually completely other line which are independent from lines in ",(0,l.kt)("inlineCode",{parentName:"p"},"root-app")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"command-line-runner",src:n(8916).Z})),(0,l.kt)("p",null,"All of the accepted line tokens:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const command = {\n  customer: [\n    commandLineListTokens.customerStart,\n    commandLineListTokens.resolveUserDeps,\n    commandLineListTokens.resolvePageDeps,\n  ],\n  clear: [commandLineListTokens.clear],\n  spa: [\n    commandLineListTokens.resolveUserDeps,\n    commandLineListTokens.resolvePageDeps,\n    commandLineListTokens.spaTransition,\n  ],\n};\n")),(0,l.kt)("p",null,"Child-app must be preloaded first to allow to execute commandline runner. In case of late preloading CommandLineRunner will be executed anyway but it will be out of sync with root-app CommandLineRunner (it will be called as soon as child-app code was loaded)."),(0,l.kt)("h4",{id:"server"},"Server"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If child-app was preloaded before root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePageDeps")," then ",(0,l.kt)("inlineCode",{parentName:"li"},"customer")," line list is executed on root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePageDeps")," line"),(0,l.kt)("li",{parentName:"ul"},"If child-app was preloaded on root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePageDeps")," then ",(0,l.kt)("inlineCode",{parentName:"li"},"customer")," line list is executed as soon as child-app was loaded. ",(0,l.kt)("inlineCode",{parentName:"li"},"preload")," call must be awaited in order to prevent root-app CommandLineRunner to passing to next line. That still counts as executing on ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePageDeps")," line."),(0,l.kt)("li",{parentName:"ul"},"Child-app ",(0,l.kt)("inlineCode",{parentName:"li"},"clear")," line list is executed on root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"clear")," line for every child-app that was preloaded on previous lines")),(0,l.kt)("h4",{id:"client"},"Client"),(0,l.kt)("h5",{id:"first-page-load"},"First Page load"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If child-app was preloaded on server ",(0,l.kt)("inlineCode",{parentName:"li"},"customer")," line list is executed on root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePageDeps")," line"),(0,l.kt)("li",{parentName:"ul"},"If child-app was not preloaded on server but was preloaded on client then ",(0,l.kt)("inlineCode",{parentName:"li"},"customer")," line list is executed on root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"clear")," line"),(0,l.kt)("li",{parentName:"ul"},"Child-app ",(0,l.kt)("inlineCode",{parentName:"li"},"clear")," line list is executed on root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"clear")," line for every child-app that was preloaded on previous lines")),(0,l.kt)("h5",{id:"spa-transitions"},"Spa-transitions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If child-app was not preloaded on any previous pages before but was preloaded on next page then ",(0,l.kt)("inlineCode",{parentName:"li"},"customer")," line list is executed as soon as child-app is loaded"),(0,l.kt)("li",{parentName:"ul"},"If child-app was preloaded on next page then child-app ",(0,l.kt)("inlineCode",{parentName:"li"},"spa")," line list is executed on root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"spaTransition")," line")),(0,l.kt)("h3",{id:"loading-child-app"},"Loading Child App"),(0,l.kt)("p",null,"Loading of child-app is happens only after preloading child-app with ",(0,l.kt)("inlineCode",{parentName:"p"},"CHILD_APP_PRELOAD_MANAGER"),". This preloading loads code for a child-app and marks it to execution using ",(0,l.kt)("a",{parentName:"p",href:"#commandlinerunner"},"CommandLineRunner"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"loading",src:n(8966).Z})),(0,l.kt)("h4",{id:"server-1"},"Server"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Calling ",(0,l.kt)("inlineCode",{parentName:"li"},"PreloadManager.preload(...)")," loads a child-app code, executes and marks it as executable to CommandLineRunner"),(0,l.kt)("li",{parentName:"ul"},"Result of ",(0,l.kt)("inlineCode",{parentName:"li"},"PreloadManager.preload(...)")," must be awaited as it is important to synchronize child-app commands lines execution with a root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"CommandLinerRunner")),(0,l.kt)("li",{parentName:"ul"},"Preloads after root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePageDeps")," are useless as they wont change page render and wont be used by root-app."),(0,l.kt)("li",{parentName:"ul"},"If child-app was not preloaded at all but still is used on render then the child-app is still preloaded automatically, but it will lead to additional React render and may significantly increase response latency.")),(0,l.kt)("h4",{id:"client-1"},"Client"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Calling ",(0,l.kt)("inlineCode",{parentName:"li"},"PreloadManager.preload(...)")," loads a child-app code, executes and marks it as executable to CommandLineRunner"),(0,l.kt)("li",{parentName:"ul"},"Result of ",(0,l.kt)("inlineCode",{parentName:"li"},"PreloadManager.preload(...)")," must be awaited as it is important to synchronize child-app commands lines execution with a root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"CommandLinerRunner")),(0,l.kt)("li",{parentName:"ul"},"If child-app was preloaded on server then child-app ",(0,l.kt)("inlineCode",{parentName:"li"},"customer")," line list is executed on ",(0,l.kt)("inlineCode",{parentName:"li"},"resolvePageDeps")," on first page render"),(0,l.kt)("li",{parentName:"ul"},"If child-app was not preloaded on server then actual loading and command-line execution are happens on root-app ",(0,l.kt)("inlineCode",{parentName:"li"},"clear")," line as executing child-app before page render may break React hydration and should be executed only after it."),(0,l.kt)("li",{parentName:"ul"},"On spa transition when previously child-app is preloaded it will be reused"),(0,l.kt)("li",{parentName:"ul"},"On spa transition if preloaded child-app was not loaded before it will be loaded and executed as soon as possible.")),(0,l.kt)("h3",{id:"state"},"State"),(0,l.kt)("p",null,"State Management is almost completely isolated from root-app and other of child-apps. Every child-app can register own stores, actions."),(0,l.kt)("p",null,"State for child-apps will be dehydrated on server as separate variable in the result html and then will be automatically rehydrated on client for every child-app."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Usually child-app cannot read data from root-app stores, but the dangerous workaround that allows to subscribe on any root-app store exists.")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It may be done using ",(0,l.kt)("inlineCode",{parentName:"p"},"CHILD_APP_ROOT_STATE_SUBSCRIPTION_TOKEN")," token."),(0,l.kt)("p",{parentName:"div"},"This token is considered dangerous as it leads to high coupling with stores from root-app and this way stores in root-app might not change their public interface. But, in most cases, changes in stores ignore breaking change tracking and often breaks backward-compatibility. So ",(0,l.kt)("strong",{parentName:"p"},"do not use this token if you can"),", and if you should - use as little as possible from root-app and provide some fallback in case of wrong data. :::"),(0,l.kt)("h2",{parentName:"div",id:"api"},"API"),(0,l.kt)("h2",{parentName:"div",id:"how-to"},"How to"),(0,l.kt)("h3",{parentName:"div",id:"connect-a-child-app"},"Connect a child app"),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Place a child-app React component somewhere in your page render"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport { ChildApp } from '@tramvai/module-child-app';\n\nexport const Page = () => {\n  return (\n    <div>\n      ...\n      <ChildApp name=\"[name]\" />\n      ...\n    </div>\n  );\n};\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add configuration for child-app loading"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"providers: [\n  provide({\n    provide: CHILD_APP_RESOLVE_BASE_URL_TOKEN, // or use `CHILD_APP_EXTERNAL_URL` env\n    useValue: 'http://localhost:4040/',\n  }),\n  provide({\n    provide: CHILD_APP_RESOLUTION_CONFIGS_TOKEN,\n    useValue: [\n      {\n        name: '[name]', // name of the child-app\n        byTag: {\n          latest: {\n            version: '[version]', // current version for the child app for tag `latest`\n          },\n        },\n      },\n    ],\n  }),\n];\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Preload child-app execution in order to improve performance and allow child-app execute its data preparations"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { commandLineListTokens, Provider, provide } from '@tramvai/core';\nimport { CHILD_APP_PRELOAD_MANAGER_TOKEN } from '@tramvai/module-child-app';\n\nconst providers: Provider[] = [\n  provide({\n    provide: commandLineListTokens.customerStart,\n    multi: true,\n    useFactory: ({ preloadManager }) => {\n      return function preloadHeaderChildApp() {\n        return preloadManager.preload({ name: '[name]' }); // this call is important\n      };\n    },\n    deps: {\n      preloadManager: CHILD_APP_PRELOAD_MANAGER_TOKEN,\n    },\n  }),\n];\n")))),(0,l.kt)("h3",{parentName:"div",id:"debug-child-app"},"Debug child-app"),(0,l.kt)("h4",{parentName:"div",id:"single-child-app"},"Single child-app"),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run child-app using cli"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn tramvai start child-app\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run root-app with ",(0,l.kt)("inlineCode",{parentName:"p"},"CHILD_APP_DEBUG")," environment variable"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"CHILD_APP_DEBUG=child-app yarn tramvai start root-app\n")))),(0,l.kt)("h4",{parentName:"div",id:"multiple-child-app"},"Multiple child-app"),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run somehow multiple child-apps. They should be started on different ports.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"And either pass ",(0,l.kt)("inlineCode",{parentName:"p"},"Base Url")," showed from cli as url to debug every child-app"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"CHILD_APP_DEBUG=child-app1=baseUrl1;child-app2=baseUrl2 yarn tramvai start root-app\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Or implement proxy on default ",(0,l.kt)("inlineCode",{parentName:"p"},"http:://localhost:4040/")," yourself which redirects to concrete server by url"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"CHILD_APP_DEBUG=child-app1;child-app2 yarn tramvai start root-app\n")))),(0,l.kt)("h4",{parentName:"div",id:"more-detailed-debug-setup"},"More detailed debug setup"),(0,l.kt)("p",{parentName:"div"},"You may specify a full config to debug to a specific child-app:"),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"To token ",(0,l.kt)("inlineCode",{parentName:"li"},"CHILD_APP_RESOLUTION_CONFIGS_TOKEN")," for needed child-apps add special tag ",(0,l.kt)("inlineCode",{parentName:"li"},"debug"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"({\n  name: 'child-app',\n  byTag: {\n    latest: {\n      version: 'latest',\n    },\n    debug: {\n      baseUrl: '...url',\n      version: '...version',\n      client: {},\n      server: {},\n      css: {},\n    },\n  },\n});\n"))),(0,l.kt)("li",{parentName:"ol"},"Run root-app with ",(0,l.kt)("inlineCode",{parentName:"li"},"CHILD_APP_DEBUG")," environment variable with value of child-app names needed to debug")))))}g.isMDXComponent=!0},8916:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t=n.p+"assets/images/command-line-runner.drawio-ddac1ebc56488016a1582526794d63dd.svg"},5182:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t=n.p+"assets/images/di.drawio-3c894eb7d2f12597916666baca0c000f.svg"},8966:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyBob3N0PSI2NWJkNzExNDRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MjFweCIgaGVpZ2h0PSIxMjhweCIgdmlld0JveD0iLTAuNSAtMC41IDUyMSAxMjgiIGNvbnRlbnQ9IiZsdDtteGZpbGUmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7aTVxbm1GR3RuVkFaQ05tYy1ZZEImcXVvdDsgbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsmZ3Q7N1ZkTmI5c3dEUDAxQWJiRENuOGtybnRzbk80RFNJRmhPV3c5S3JaaWE1VkZUNlpqcDc5K2xDM0hjZHdPUmJ2dFZDQkl6Q2VLRXQ4ajZYYm1SM256U2JNaXU0V0V5NW5uSk0zTVg4MDh6dzM5Sy9veHlLRkRydVplQjZSYUpOWnBBRGJpZ1Z2UXNXZ2xFbDZPSEJGQW9pakdZQXhLOFJoSEdOTWE2ckhiRHVUNDFJS2xmQUpzWWlhbjZIZVJZTmFob1hjNTRKKzVTTFArWkRld0NlZXNkN2FabEJsTG9ENkIvSnVaSDJrQTdKN3lKdUxTa05mejB1MzcrTVRxOFdLYUszek9CbnZqRWc5OWJqeWhWSzBKR2pOSVFURjVNNkJMRFpWS3VBbmdrRFg0ckFFS0FsMENmM0xFZzlXTlZRZ0VaWmhMdThvYmdUOU9udTlNcUl1RnRWYU5qZHdhaDk1UXFBOC9Ca2RqM3AydURkdGE2N2hQYmx0KzkxeWpJQVVKaWl1OWI2OXZ6dS95TjBrL3lhQ0ZTcWgwYkwxc3VTTFRLYmRlL2xFOUtuc09PYWRia0l2bWtxSFlqNk16VzMvcDBXK1FpQjZzU284clpvL2VNMW5ab0FXZEFTeTVaWXJxVGw5WTg5MzdpYlNvQlZOcHEyR2RDZVNiZ3JVSjFkU2xZNFdZRkttaVo4bDNsTjV5SjZTTVFJSnU0L2dKNCtFdUpyeEVEZmY4WkNXSVE3N2RIV2sxcFBQbXo4Uk9LYk1icm15TDJCbHhiUDU2NkRqUHNWaDIwbTJoODNxUy9RbkpVU1pvU0ZEVW9xQnZRN0JRNlN6eVp0Zk9oT2V5RnJsa3l2QzhBNFY5TjVseWpFMllOVHRBWlc1YklvdnZlMnVaZ1JZUDVNOTZGV2habyswaUx4aDViTXhPRzFQemtueSs5c1M2WjlBdGEwYU9hMVppZnh1UWtoV2wyTGIzTXh0enFtaWhsb0FJdVhVNkYzL0J3MlQrbVBpaHQvV0Q0TytJN3dkajlkMHdtS3EvZUVSOTE1bS9Ydjc1Ukg3M291M2xFaVMxTXIxWWpJd2Z1bHFvdEp4MkdtOXdRcEdDcmlSTytMVFFXYnYxcytyYXdtam02cktrYnFXYVc3YytxL21BZkxQWkd3aG83MDYyRXk4VFNjSlZPNitSSWRzZWE3QUFvYkJsWjdHa0Q1RVltYUc2b0l0SFpMdURUUi9qcmpFQ1Jia3cwWXJIcVlCcWJvcm9lVW8vTVJuN3ZuNm1zTDNmYTNSZFRIVDFPbDEvVlNhZnNhN3RlOFM4c3lHcEJKSDNwdkdMTlY1NC8wL2pZS0t4YnpUbURZOHJQTy9kWHVOYTBMMW9xU3JOM1BPYzFaYzN1Vjh1OTJYNHorUW1jL2pqdUYwNytSZkR2L2tOJmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyI+CiAgICA8ZGVmcz4KICAgICAgICA8Y2xpcFBhdGggaWQ9Im14LWNsaXAtMjc0LTUxLTI0Mi0yNi0wIj4KICAgICAgICAgICAgPHJlY3QgeD0iMjc0IiB5PSI1MSIgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyNiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJteC1jbGlwLTI3NC03Ny0yNDItMjYtMCI+CiAgICAgICAgICAgIDxyZWN0IHg9IjI3NCIgeT0iNzciIHdpZHRoPSIyNDIiIGhlaWdodD0iMjYiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgICAgIDxjbGlwUGF0aCBpZD0ibXgtY2xpcC0yNzQtMTAzLTI0Mi0yNi0wIj4KICAgICAgICAgICAgPHJlY3QgeD0iMjc0IiB5PSIxMDMiIHdpZHRoPSIyNDIiIGhlaWdodD0iMjYiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgogICAgPGc+CiAgICAgICAgPHBhdGggZD0iTSAyMDAgODQgUSAyMzUgODQgMjM1IDQyIFEgMjM1IDAgMzE1IDAgUSAzOTUgMCAzOTUgMTMuNjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+CiAgICAgICAgPHBhdGggZD0iTSAzOTUgMTguODggTCAzOTEuNSAxMS44OCBMIDM5NSAxMy42MyBMIDM5OC41IDExLjg4IFoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHBhdGggZD0iTSAwIDQ0IEwgMjAwIDg0IEwgMCAxMjQgWiIgZmlsbD0iI2RhZThmYyIgc3Ryb2tlPSIjNmM4ZWJmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj4KICAgICAgICAgICAgPHN3aXRjaD4KICAgICAgICAgICAgICAgIDxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiIHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPgogICAgICAgICAgICAgICAgICAgIDxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgZmxleC1zdGFydDsgd2lkdGg6IDE5OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDg0cHg7IG1hcmdpbi1sZWZ0OiAycHg7Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwOyB0ZXh0LWFsaWduOiBsZWZ0OyAiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiAjMDAwMDAwOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyB3b3JkLXdyYXA6IG5vcm1hbDsgIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkTWFuYWdlci5wcmVsb2FkKCkKICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZm9yZWlnbk9iamVjdD4KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjIiIHk9Ijg4IiBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiPgogICAgICAgICAgICAgICAgICAgIHByZWxvYWRNYW5hZ2VyLnByZWxvYWQoKQogICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICA8L3N3aXRjaD4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZD0iTSAyNzAgNDYgTCAyNzAgMjAgTCA1MjAgMjAgTCA1MjAgNDYiIGZpbGw9IiNkNWU4ZDQiIHN0cm9rZT0iIzgyYjM2NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+CiAgICAgICAgPHBhdGggZD0iTSAyNzAgNDYgTCAyNzAgMTI0IEwgNTIwIDEyNCBMIDUyMCA0NiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODJiMzY2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJub25lIi8+CiAgICAgICAgPHBhdGggZD0iTSAyNzAgNDYgTCA1MjAgNDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzgyYjM2NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ibm9uZSIvPgogICAgICAgIDxnIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIHBvaW50ZXItZXZlbnRzPSJub25lIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEycHgiPgogICAgICAgICAgICA8dGV4dCB4PSIzOTQuNSIgeT0iMzcuNSI+CiAgICAgICAgICAgICAgICBDaGlsZCBhcHAgbG9hZGluZwogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIHBvaW50ZXItZXZlbnRzPSJub25lIiBjbGlwLXBhdGg9InVybCgjbXgtY2xpcC0yNzQtNTEtMjQyLTI2LTApIiBmb250LXNpemU9IjEycHgiPgogICAgICAgICAgICA8dGV4dCB4PSIyNzUuNSIgeT0iNjMuNSI+CiAgICAgICAgICAgICAgICAxLiByZXNvbHZlIGNoaWxkLWFwcCB1cmwKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBwb2ludGVyLWV2ZW50cz0ibm9uZSIgY2xpcC1wYXRoPSJ1cmwoI214LWNsaXAtMjc0LTc3LTI0Mi0yNi0wKSIgZm9udC1zaXplPSIxMnB4Ij4KICAgICAgICAgICAgPHRleHQgeD0iMjc1LjUiIHk9Ijg5LjUiPgogICAgICAgICAgICAgICAgMi4gcmVxdWVzdCBjaGlsZC1hcHAgZW50cnkgbW9kdWlsZQogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIHBvaW50ZXItZXZlbnRzPSJub25lIiBjbGlwLXBhdGg9InVybCgjbXgtY2xpcC0yNzQtMTAzLTI0Mi0yNi0wKSIgZm9udC1zaXplPSIxMnB4Ij4KICAgICAgICAgICAgPHRleHQgeD0iMjc1LjUiIHk9IjExNS41Ij4KICAgICAgICAgICAgICAgIDMuIGV4ZWN1dGUgY2hpbGQtYXBwIGVudHJ5IHdpdGggY3VzdG9tIERJCiAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+CiAgICA8c3dpdGNoPgogICAgICAgIDxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPgogICAgICAgIDxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL3d3dy5kaWFncmFtcy5uZXQvZG9jL2ZhcS9zdmctZXhwb3J0LXRleHQtcHJvYmxlbXMiIHRhcmdldD0iX2JsYW5rIj4KICAgICAgICAgICAgPHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMHB4IiB4PSI1MCUiIHk9IjEwMCUiPgogICAgICAgICAgICAgICAgVmlld2VyIGRvZXMgbm90IHN1cHBvcnQgZnVsbCBTVkcgMS4xCiAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2E+CiAgICA8L3N3aXRjaD4KPC9zdmc+Cg=="}}]);