"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"app-lifecycle",title:"Application Lifecycle"},s=void 0,p={unversionedId:"features/app-lifecycle",id:"features/app-lifecycle",title:"Application Lifecycle",description:"When processing a client request, we need to perform a standard list of actions, such as getting a route, getting the desired data for the client, rendering the application and responding to the client. At the same time, we have a modular system, when the modules do not know about each other, but they need to be connected somehow.",source:"@site/tmp-docs/03-features/06-app-lifecycle.md",sourceDirName:"03-features",slug:"/features/app-lifecycle",permalink:"/docs/features/app-lifecycle",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/06-app-lifecycle.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"app-lifecycle",title:"Application Lifecycle"},sidebar:"sidebar",previous:{title:"Error Boundaries",permalink:"/docs/features/error-boundaries"},next:{title:"Overview",permalink:"/docs/features/routing/overview"}},c={},d=[{value:"Explanation",id:"explanation",level:2},{value:"Application flow",id:"application-flow",level:3},{value:"Request flow",id:"request-flow",level:3},{value:"SPA transition flow",id:"spa-transition-flow",level:3},{value:"Execution timings",id:"execution-timings",level:3},{value:"Usage",id:"usage",level:2},{value:"Aborting Execution",id:"aborting-execution",level:3},{value:"Commands",id:"commands",level:2},{value:"init",id:"init",level:3},{value:"listen",id:"listen",level:3},{value:"close",id:"close",level:3},{value:"customer_start",id:"customer_start",level:3},{value:"resolve_user_deps",id:"resolve_user_deps",level:3},{value:"resolve_page_deps",id:"resolve_page_deps",level:3},{value:"generate_page",id:"generate_page",level:3},{value:"clear",id:"clear",level:3},{value:"spa_transition",id:"spa_transition",level:3},{value:"after_spa_transition",id:"after_spa_transition",level:3},{value:"- Next: Routing - Overview",id:"--next-routing---overview",level:5}],u={toc:d};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When processing a client request, we need to perform a standard list of actions, such as getting a route, getting the desired data for the client, rendering the application and responding to the client. At the same time, we have a modular system, when the modules do not know about each other, but they need to be connected somehow."),(0,o.kt)("p",null,"To solve this problem, ",(0,o.kt)("inlineCode",{parentName:"p"},"commandLineRunner")," was developed, which contains a fixed list of stages in which modules can add the necessary tasks through providers. All stages are executed sequentially, but the commands registered for each individual step are executed in parallel."),(0,o.kt)("h2",{id:"explanation"},"Explanation"),(0,o.kt)("h3",{id:"application-flow"},"Application flow"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tramvai")," have a simple lifecycle for application in general:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"init")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"listen")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"close"))),(0,o.kt)("p",null,"This flow will be started only once for application server code, and once for browser code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Application flow",src:n(9540).Z,width:"631",height:"842"})),(0,o.kt)("h3",{id:"request-flow"},"Request flow"),(0,o.kt)("p",null,"For every user request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai")," server, and for page initalization in the browser, there is a more complex lifecycle:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"customer_start")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resolve_user_deps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resolve_page_deps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"generate_page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clear"))),(0,o.kt)("p",null,"So, in server-side, request flow will be executed multiple times for different clients, and only one time in browser."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Request flow",src:n(4433).Z,width:"1001",height:"841"})),(0,o.kt)("h3",{id:"spa-transition-flow"},"SPA transition flow"),(0,o.kt)("p",null,"SPA transition lifecycle use some of request flow stages, and few custom, and executed only client-side:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resolve_user_deps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resolve_page_deps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spa_transition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"after_spa_transition"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SPA transition flow",src:n(6014).Z,width:"811",height:"842"})),(0,o.kt)("h3",{id:"execution-timings"},"Execution timings"),(0,o.kt)("p",null,"You may either get execution timings for single request with ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/modules/server#server-timing"},"server module")," or get the aggregated values with ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/modules/metrics"},"metrics module")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"We have registered a new provider that will be called when ",(0,o.kt)("inlineCode",{parentName:"p"},"commandLineRunner")," reaches the ",(0,o.kt)("inlineCode",{parentName:"p"},"commandLineListTokens.customerStart")," token and the ",(0,o.kt)("inlineCode",{parentName:"p"},"readCustomCookie")," function is executed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { commandLineListTokens, provide } from '@tramvai/core';\nimport { COOKIE_MANAGER_TOKEN } from '@tramvai/tokens-common';\n\ncreateApp({\n  providers: [\n    provide({\n      provide: commandLineListTokens.customerStart,\n      useFactory: ({ cookieManager }) => {\n        return function readCustomCookie() {\n          // this will work both on server and client sides\n          console.log('custom cookie value is:', cookieManager.get('custom'));\n        };\n      },\n      deps: {\n        cookieManager: COOKIE_MANAGER_TOKEN,\n      },\n    }),\n  ],\n});\n")),(0,o.kt)("h3",{id:"aborting-execution"},"Aborting Execution"),(0,o.kt)("p",null,"In some cases CommandLineRunner may try to abort execution of the lines. In such cases any actions that implement heavy logic must subscribe to the commandLineRunner's execution context to subscribe to the abort event in order to prevent doing needless actions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use token ",(0,o.kt)("a",{parentName:"li",href:"/docs/references/tokens/common"},(0,o.kt)("inlineCode",{parentName:"a"},"COMMAND_LINE_EXECUTION_CONTEXT_TOKEN"))," to get current execution context related to the CommandLineRunner line execution (if there is not line execution this token will be null)"),(0,o.kt)("li",{parentName:"ol"},"Use context's ",(0,o.kt)("inlineCode",{parentName:"li"},"abortSignal")," to subscribe to events of aborting execution")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { provide, commandLineListTokens } from '@tramvai/core';\nimport { COMMAND_LINE_EXECUTION_CONTEXT_TOKEN } from '@tramvai/tokens-common';\n\ncreateApp({\n  providers: [\n    provide({\n      provide: commandLineListTokens.resolveUserDeps,\n      useFactory: ({ commandLineExecutionContext }) => {\n        return async function handler() {\n          const executionContext = commandLineExecutionContext();\n\n          // pass signal from execution context\n          await someLongAction({ signal: executionContext.abortSignal });\n\n          // check if execution was aborted while long action has been executing\n          if (!execution.abortSignal.aborted) {\n            await anotherAction();\n          }\n        }\n      },\n      deps: {\n        commandLineExecutionContext: COMMAND_LINE_EXECUTION_CONTEXT_TOKEN\n      },\n    }),\n  ],\n});\n")),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Command - is just async function without any parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"async function doSomething() {}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Create functions with unique names, it is very useful for debugging and error logging")),(0,o.kt)("p",null,"If command will reject error, it will fail current flow, for example if you will have error in ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," stage command, application server will not be started, ",(0,o.kt)("strong",{parentName:"p"},"application flow")," will be failed."),(0,o.kt)("p",null,"There is no timeouts for commands, so be careful when fetching some data on ",(0,o.kt)("strong",{parentName:"p"},"request flow")," stages - use caching and timeouts, otherwise page response time can be worse."),(0,o.kt)("h3",{id:"init"},"init"),(0,o.kt)("p",null,"Global services initialization, for example - app ",(0,o.kt)("inlineCode",{parentName:"p"},"fastify")," server will be created and configured on this stage."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For what"),": If you need to initialize global singletons asynchronously"),(0,o.kt)("h3",{id:"listen"},"listen"),(0,o.kt)("p",null,"Subscribing to global events by the application, for example - app ",(0,o.kt)("inlineCode",{parentName:"p"},"fastify")," server and dev static server started listen ports at this stage"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For what"),": Almost never, but okay if you need to subscribe to global events or listen a some port"),(0,o.kt)("h3",{id:"close"},"close"),(0,o.kt)("p",null,"Before closing the application, some modules may need to perform special actions, for example, close connections, send data and similar activities. In order not to duplicate the application closure tracking code in each module, this stage was made."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For what"),": Almost never, but okay if you need to perform actions before closing the application. for example close connections, send logs and so on"),(0,o.kt)("h3",{id:"customer_start"},"customer_start"),(0,o.kt)("p",null,"The starting token in the client request processing chain. Required to initialize custom asynchronous constructors. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai")," Router will be initialized for current request at this stage."),(0,o.kt)("p",null,"It is not advised to do any lengthy asynchronous tasks at this stage, as only synchronous actions are expected."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For what"),": To initialize asynchronous services for each client"),(0,o.kt)("h3",{id:"resolve_user_deps"},"resolve_user_deps"),(0,o.kt)("p",null,"The main goal of this stage is to find out all the necessary information about the client we are currently processing."),(0,o.kt)("p",null,"Since all actions within one stage are performed in parallel with us, it is at this stage that you can efficiently and quickly request all the necessary information, for example, simultaneously with the request for customer data, you can find out about the status of the customer's authorization, get analytical information about the customer and similar actions."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For what"),": To request any global customer information"),(0,o.kt)("h3",{id:"resolve_page_deps"},"resolve_page_deps"),(0,o.kt)("p",null,"At this stage, we already know about the client, about what this page is. But, we have not requested the necessary data for the page. For example: request resources from the admin panel, get a list of regions, load the necessary page blocks. And all the information that will be needed when generating the page."),(0,o.kt)("p",null,"At this stage, it is not worth doing long asynchronous actions and it is supposed to be cached or moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"resolveUserDeps")," to achieve the maximum speed of response to clients."),(0,o.kt)("p",null,"At this stage, ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/action"},"action")," is executed and perhaps they will suit you better, as there are many additional functionality, and you can specify different actions for different pages, otherwise ",(0,o.kt)("inlineCode",{parentName:"p"},"resolveUserDeps")," will be executed for every page."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For what"),": To get the information needed to render the page"),(0,o.kt)("h3",{id:"generate_page"},"generate_page"),(0,o.kt)("p",null,"At this stage, we already know the current route, which client and all actions for the page have already been loaded. And at this stage, according to the information from the previous stages, we generate an HTML page and give it to the client."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For what"),": This is more of an internal stage and should not be used in ordinary cases. Since ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Race_condition"},"race condition")," with application rendering."),(0,o.kt)("h3",{id:"clear"},"clear"),(0,o.kt)("p",null,"This stage will be called after we have responded to the client, but some modules or libraries need to delete client data."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For what"),": The method is needed if you need to perform actions after a successful response to the user"),(0,o.kt)("h3",{id:"spa_transition"},"spa_transition"),(0,o.kt)("p",null,"Tasks registered at this stage are executed on SPA transitions in the application. When ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/modules/router/base#method-of-setting-when-actions-should-be-performed-during-spa-transitions"},"spaMode")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"before"),", page actions will be executed at this stage."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For what"),": To update meta information on the current page"),(0,o.kt)("h3",{id:"after_spa_transition"},"after_spa_transition"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"spaMode")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"after"),", page actions will be executed at this stage."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For what"),": This is more of an internal stage and should not be used in ordinary cases."),(0,o.kt)("h5",{id:"--next-routing---overview"},"- ",(0,o.kt)("a",{parentName:"h5",href:"/docs/features/routing/overview"},"Next: Routing - Overview")))}m.isMDXComponent=!0},9540:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/command-line-app-flow.drawio-228e6682997de90351377a45163855ad.svg"},4433:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/command-line-request-flow.drawio-8f00dcebebbe400e88b9bd5b8558107e.svg"},6014:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/command-line-spa-flow.drawio-2c38d8b0658fef02650570863202be97.svg"}}]);