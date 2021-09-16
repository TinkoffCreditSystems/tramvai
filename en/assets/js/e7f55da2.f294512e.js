(self.webpackChunk=self.webpackChunk||[]).push([[5762],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2757:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>u});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],p={id:"tinkoff-request-http-client-adapter",title:"tinkoff-request-http-client-adapter"},l=void 0,s={unversionedId:"references/libs/tinkoff-request-http-client-adapter",id:"references/libs/tinkoff-request-http-client-adapter",isDocsHomePage:!1,title:"tinkoff-request-http-client-adapter",description:"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 HttpClient \u0438\u0437 @tramvai/http-client \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 @tinkoff/request",source:"@site/tmp-docs/references/libs/tinkoff-request-http-client-adapter.md",sourceDirName:"references/libs",slug:"/references/libs/tinkoff-request-http-client-adapter",permalink:"/en/docs/references/libs/tinkoff-request-http-client-adapter",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/tinkoff-request-http-client-adapter.md",version:"current",frontMatter:{id:"tinkoff-request-http-client-adapter",title:"tinkoff-request-http-client-adapter"},sidebar:"docs",previous:{title:"router",permalink:"/en/docs/references/libs/router"},next:{title:"safe-strings",permalink:"/en/docs/references/libs/safe-strings"}},c=[{value:"API",id:"api",children:[{value:"createAdapter",id:"createadapter",children:[]},{value:"TinkoffRequestOptions",id:"tinkoffrequestoptions",children:[]},{value:"createTinkoffRequest",id:"createtinkoffrequest",children:[]},{value:"HttpClientAdapter",id:"httpclientadapter",children:[]},{value:"mergeOptions",id:"mergeoptions",children:[]}]}],f={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpClient")," \u0438\u0437 ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/references/libs/http-client"},"@tramvai/http-client")," \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 ",(0,a.kt)("a",{parentName:"p",href:"https://tinkoffcreditsystems.github.io/tinkoff-request/"},"@tinkoff/request")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"createadapter"},"createAdapter"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createAdapter")," - \u0444\u0430\u0431\u0440\u0438\u043a\u0430 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f HTTP \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0443\u0435\u0442 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tinkoff/request")," \u0447\u0435\u0440\u0435\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"createTinkoffRequest"),", \u0438 \u043d\u0430 \u0435\u0433\u043e \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpClientAdapter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type createAdapter = (options: TinkoffRequestOptions) => HttpClient;\n")),(0,a.kt)("h3",{id:"tinkoffrequestoptions"},"TinkoffRequestOptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"interface TinkoffRequestOptions extends HttpClientRequest {\n  // \u0442\u0440\u0430\u043c\u0432\u0430\u0439 \u043b\u043e\u0433\u0433\u0435\u0440\n  logger?: typeof LOGGER_TOKEN;\n  // \u043d\u0435\u0439\u043c\u0441\u043f\u0435\u0439\u0441 \u0434\u043b\u044f \u043b\u043e\u0433\u0433\u0435\u0440\u0430, \u043a \u043d\u0435\u043c\u0443 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043f\u0440\u0435\u0444\u0438\u043a\u0441 `request.`\n  name?: string;\n  // \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u0442 \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0447\u0435\u0440\u0435\u0437 `@tinkoff/request-plugin-cache-memory`\n  disableCache?: boolean;\n  // \u0444\u0430\u0431\u0440\u0438\u043a\u0430 \u043a\u044d\u0448\u0435\u0439 \u0434\u043b\u044f `@tinkoff/request-plugin-cache-memory`\n  createCache?: (options: any) => any;\n  // \u0432\u0440\u0435\u043c\u044f \u0436\u0438\u0437\u043d\u0438 \u043a\u044d\u0448\u0430 \u0432 `@tinkoff/request-plugin-cache-memory`\n  cacheTime?: number;\n  // \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043d\u0430 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0432 ms\n  defaultTimeout?: number;\n  // \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440 \u043e\u0442\u0432\u0435\u0442\u0430 \u0434\u043b\u044f `@tinkoff/request-plugin-validate`\n  validator?: RequestValidator;\n  // \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440 \u043e\u0448\u0438\u0431\u043a\u0438 \u0434\u043b\u044f `@tinkoff/request-plugin-validate`\n  errorValidator?: RequestValidator;\n  // \u043c\u0435\u0442\u043e\u0434 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439 \u043b\u043e\u0433\u043e\u0432 \u0438\u0437 `@tinkoff/request-plugin-log`\n  errorModificator?: RequestValidator;\n}\n")),(0,a.kt)("h3",{id:"createtinkoffrequest"},"createTinkoffRequest"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createTinkoffRequest")," - \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tinkoff/request")," \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u043c\u0438 \u043f\u043b\u0430\u0433\u0438\u043d\u0430\u043c\u0438"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type createTinkoffRequest = (options: TinkoffRequestOptions) => MakeRequest;\n")),(0,a.kt)("h3",{id:"httpclientadapter"},"HttpClientAdapter"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HttpClientAdapter")," - \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u0443\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tinkoff/request")," \u043a \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpClient"),"."),(0,a.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434 ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u043e\u0431\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u043e\u043f\u0446\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"modifyRequest"),", \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442 \u0438\u0445 \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tinkoff/request"),".\n\u0417\u0430\u0442\u0435\u043c, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpClientRequest"),", \u0438 \u043e\u0431\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u043f\u0446\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"modifyResponse"),".\n\u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u0442\u043e \u043e\u043d\u0430 \u043e\u0431\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u043f\u0446\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"modifyError"),"."),(0,a.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434 ",(0,a.kt)("inlineCode",{parentName:"p"},"fork")," \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u043d\u043e\u0432\u044b\u0439 \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpClientAdapter"),", \u043d\u043e \u0441 \u0442\u0435\u043c \u0436\u0435 \u0441\u0430\u043c\u044b\u043c \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u043e\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"@tinkoff/request"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type HttpClientAdapter = HttpClient;\n")),(0,a.kt)("h3",{id:"mergeoptions"},"mergeOptions"),(0,a.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ",(0,a.kt)("inlineCode",{parentName:"p"},"mergeOptions")," \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043e\u043f\u0446\u0438\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"modifyRequest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"modifyResponse")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"modifyError"),", \u043f\u0440\u0438\u0447\u0435\u043c \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043e\u043f\u0446\u0438\u0438 \u0438\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),", \u0437\u0430\u0442\u0435\u043c \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"nextOptions"),".\n\u0415\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0442\u0440\u0435\u0442\u0438\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"{ replace: true }"),", \u0432\u0441\u0435 \u043e\u0434\u043d\u043e\u0438\u043c\u0435\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," \u043f\u0440\u043e\u0441\u0442\u043e \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0438\u0437 ",(0,a.kt)("inlineCode",{parentName:"p"},"nextOptions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type mergeOptions = (\n  options: HttpClientRequest,\n  nextOptions: HttpClientRequest,\n  config?: { replace?: boolean }\n) => HttpClientRequest;\n")))}u.isMDXComponent=!0}}]);