"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"http-client",title:"HTTP Client"},s=void 0,p={unversionedId:"features/data-fetching/http-client",id:"features/data-fetching/http-client",title:"HTTP Client",description:"Explanation",source:"@site/tmp-docs/03-features/09-data-fetching/02-http-client.md",sourceDirName:"03-features/09-data-fetching",slug:"/features/data-fetching/http-client",permalink:"/docs/features/data-fetching/http-client",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/09-data-fetching/02-http-client.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"http-client",title:"HTTP Client"},sidebar:"sidebar",previous:{title:"Actions",permalink:"/docs/features/data-fetching/action"},next:{title:"React Query",permalink:"/docs/features/data-fetching/react-query"}},c={},u=[{value:"Explanation",id:"explanation",level:2},{value:"Concepts",id:"concepts",level:2},{value:"HTTP client",id:"http-client",level:3},{value:"Services for working with API",id:"services-for-working-with-api",level:3},{value:"Usage",id:"usage",level:2},{value:"Installation",id:"installation",level:3},{value:"Create a new HTTP client",id:"create-a-new-http-client",level:3},{value:"Basic HTTP client",id:"basic-http-client",level:4},{value:"Peculiarities",id:"peculiarities",level:5},{value:"Using existing HTTP clients",id:"using-existing-http-clients",level:3},{value:"Common HTTP client",id:"common-http-client",level:4},{value:"Adding custom data to all requests",id:"adding-custom-data-to-all-requests",level:3},{value:"Global configuration",id:"global-configuration",level:3},{value:"Interceptors",id:"interceptors",level:4},{value:"How to",id:"how-to",level:2},{value:"How to disable HTTP request caching?",id:"how-to-disable-http-request-caching",level:3},{value:"How to modify request?",id:"how-to-modify-request",level:3},{value:"How to modify response?",id:"how-to-modify-response",level:3},{value:"How to mock response?",id:"how-to-mock-response",level:3},{value:"How catch all request stages?",id:"how-catch-all-request-stages",level:3},{value:"Testing",id:"testing",level:3},{value:"Testing your api clients",id:"testing-your-api-clients",level:4},{value:"Logging",id:"logging",level:3},{value:"Debug",id:"debug",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"- Next: React Query",id:"--next-react-query",level:5},{value:"API Reference",id:"api-reference",level:2},{value:"HttpClient",id:"httpclient",level:3},{value:"HttpClientRequest",id:"httpclientrequest",level:3},{value:"HttpClientResponse",id:"httpclientresponse",level:3},{value:"HttpClientError",id:"httpclienterror",level:3},{value:"HttpClientInterceptor",id:"httpclientinterceptor",level:3},{value:"ApiService",id:"apiservice",level:3},{value:"- Next: React Query",id:"--next-react-query-1",level:5}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/modules/http-client"},"@tramvai/module-http-client")," module adds functionality to the application related to API requests. Available providers allow you to create new services to work with any API and create more specific services with preset settings for specific APIs."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tinkoff.github.io/tinkoff-request/"},"@tinkoff/request")," library is used under the hood, and provides a lot of important functionality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tinkoff.github.io/tinkoff-request/docs/plugins/log.html"},"logging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tinkoff.github.io/tinkoff-request/docs/plugins/cache-memory.html"},"caching")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tinkoff.github.io/tinkoff-request/docs/plugins/cache-deduplicate.html"},"requests deduplication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tinkoff.github.io/tinkoff-request/docs/plugins/circuit-breaker.html"},"Circuit Breaker"))),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("h3",{id:"http-client"},"HTTP client"),(0,i.kt)("p",null,"HTTP client - implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient")," interface, created via the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT_FACTORY")," token. HTTP client accepts general settings, some of which will be used as defult values \u200b\u200bfor all requests. The HTTP client does not provide an opportunity to add additional methods for requests, and to perform side actions when the request is completed or failed."),(0,i.kt)("h3",{id:"services-for-working-with-api"},"Services for working with API"),(0,i.kt)("p",null,"The API service inherits from the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiService")," class, which is exported from ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/http-client"),". The API service takes an HTTP client in its constructor and uses it for requests. The API service implements all methods for requests from the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient")," interface, but allows you to modify them. For example, you can replace the implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," method by adding an error message to the ",(0,i.kt)("inlineCode",{parentName:"p"},"catch")," request via an HTTP client - this logic will automatically work for all other methods - ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"put"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),". In the API service, you can add custom methods for requests to certain API endpoints, and specify only the necessary parameters in them, and type responses."),(0,i.kt)("p",null,"Additional reasons to create API services - if you need to use several different HTTP clients to work with a specific API, or you need the ability to add a convenient abstraction on top of the basic methods for sending requests."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"You need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/module-http-client")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/module-http-client\n")),(0,i.kt)("p",null,"And connect in the project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { HttpClientModule } from '@tramvai/module-http-client';\n\ncreateApp({\n  name: 'tincoin',\n  modules: [HttpClientModule],\n});\n")),(0,i.kt)("h3",{id:"create-a-new-http-client"},"Create a new HTTP client"),(0,i.kt)("p",null,"Each new HTTP client must directly or indirectly inherit ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT_FACTORY"),"."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"New HTTP clients / API services should not be created with ",(0,i.kt)("inlineCode",{parentName:"p"},"scope: Scope.SINGLETON"),", because each request is supplemented with default parameters specific to each user, for example - passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Real-Ip")," header from the request to the application in all requests to the API.")),(0,i.kt)("h4",{id:"basic-http-client"},"Basic HTTP client"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT_FACTORY")," token - provides a factory for creating new HTTP clients. The options are preinstalled with a logger and a cache factory. ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT_FACTORY")," default options ",(0,i.kt)("a",{parentName:"p",href:"#global-configuration"},"will be applied to child HTTP clients"),"."),(0,i.kt)("h5",{id:"peculiarities"},"Peculiarities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For all requests to the API, headers are added from the list returned by the ",(0,i.kt)("inlineCode",{parentName:"li"},"API_CLIENT_PASS_HEADERS")," token, and ",(0,i.kt)("inlineCode",{parentName:"li"},"X-Real-Ip")," from the current request to the application")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Token interface:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type HTTP_CLIENT_FACTORY = (options: HttpClientFactoryOptions) => HttpClient;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Token use:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Scope, provide } from '@tramvai/core';\nimport { ENV_MANAGER_TOKEN } from '@tramvai/tokens-common';\nimport { HTTP_CLIENT_FACTORY } from '@tramvai/tokens-http-client';\n\nconst provider = provide({\n  provide: 'WHATEVER_API_HTTP_CLIENT',\n  useFactory: ({\n    factory,\n    envManager,\n  }: {\n    factory: typeof HTTP_CLIENT_FACTORY;\n    envManager: typeof ENV_MANAGER_TOKEN;\n  }) => {\n    return factory({\n      name: 'whatever-api',\n      baseUrl: envManager.get('WHATEVER_API'),\n    });\n  },\n  deps: {\n    factory: HTTP_CLIENT_FACTORY,\n    envManager: ENV_MANAGER_TOKEN,\n  },\n});\n")),(0,i.kt)("h3",{id:"using-existing-http-clients"},"Using existing HTTP clients"),(0,i.kt)("p",null,"Most HTTP clients implement additional logic for requests, and inherit from ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiService"),". Thus, each service has methods ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"put"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"request"),", but there may be specific methods."),(0,i.kt)("h4",{id:"common-http-client"},"Common HTTP client"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT")," token provides a basic client for sending requests to any URLs, request caching is disabled."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Token use:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { declareAction } from '@tramvai/core';\nimport { HTTP_CLIENT } from '@tramvai/tokens-http-client';\n\nexport const fetchAction = declareAction({\n  name: 'fetch',\n  async fn() {\n    const { payload, headers, status } = await this.deps.httpClient.get(\n      'https://www.domain.com/api/endpoint'\n    );\n    return payload;\n  },\n  deps: {\n    httpClient: HTTP_CLIENT,\n  },\n});\n")),(0,i.kt)("h3",{id:"adding-custom-data-to-all-requests"},"Adding custom data to all requests"),(0,i.kt)("p",null,"Let's consider a case using the abstract service ",(0,i.kt)("inlineCode",{parentName:"p"},"WHATEVER_API_SERVICE")," as an example. Let's say we want to add an ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Real-Ip")," header to every request, ",(0,i.kt)("a",{parentName:"p",href:"#httpclientinterceptor"},"interceptors")," allow this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nimport { HttpClientRequest, HttpClient } from '@tramvai/http-client';\nimport { REQUEST_MANAGER_TOKEN } from '@tramvai/tokens-common';\n\nconst provider = provide({\n  provide: 'WHATEVER_API_SERVICE',\n  useFactory: ({\n    factory,\n    requestManager,\n    envManager,\n  }: {\n    factory: typeof HTTP_CLIENT_FACTORY;\n    requestManager: typeof REQUEST_MANAGER_TOKEN;\n    envManager: typeof ENV_MANAGER_TOKEN;\n  }) => {\n    return factory({\n      name: 'whatever-api',\n      baseUrl: envManager.get('WHATEVER_API'),\n      interceptors: [\n        (req, next) => {\n          return next({\n            ...request,\n            headers: {\n              ...request.headers,\n              'X-real-ip': requestManager.getClientIp(),\n            },\n          });\n        },\n      ],\n    });\n  },\n  deps: {\n    factory: HTTP_CLIENT_FACTORY,\n    requestManager: REQUEST_MANAGER_TOKEN,\n    envManager: ENV_MANAGER_TOKEN,\n  },\n});\n")),(0,i.kt)("h3",{id:"global-configuration"},"Global configuration"),(0,i.kt)("p",null,"All HTTP clients, created from ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT_FACTORY"),", will have this factory default configuration. All of this options can be overridden when creating a new client, but sometimes it is very useful to set some global parameters for all clients, for example ",(0,i.kt)("a",{parentName:"p",href:"#interceptors"},"interceptors"),"."),(0,i.kt)("h4",{id:"interceptors"},"Interceptors"),(0,i.kt)("p",null,"You can provide multi token ",(0,i.kt)("inlineCode",{parentName:"p"},"DEFAULT_HTTP_CLIENT_INTERCEPTORS")," with interceptor, that will be applied to all HTTP clients:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { DEFAULT_HTTP_CLIENT_INTERCEPTORS } from '@tramvai/tokens-http-client';\n\nconst provider = provide({\n  provide: DEFAULT_HTTP_CLIENT_INTERCEPTORS,\n  useValue: (req, next) => next(req),\n});\n")),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("h3",{id:"how-to-disable-http-request-caching"},"How to disable HTTP request caching?"),(0,i.kt)("p",null,"To disable caching for all HTTP clients, pass the env variable ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT_CACHE_DISABLED: true")," to the application"),(0,i.kt)("h3",{id:"how-to-modify-request"},"How to modify request?"),(0,i.kt)("p",null,"Interceptor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const interceptor = (req, next) => next({\n  ...req,\n  headers: {\n    ...req.headers,\n    'X-custom-header': 'intercepted',\n  },\n});\n")),(0,i.kt)("h3",{id:"how-to-modify-response"},"How to modify response?"),(0,i.kt)("p",null,"Interceptor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const interceptor = (req, next) => {\n  return next(req)\n    .then((res) => ({\n      ...res,\n      payload: `${res.payload}-intercepted`,\n    }));\n};\n")),(0,i.kt)("h3",{id:"how-to-mock-response"},"How to mock response?"),(0,i.kt)("p",null,"Interceptor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const interceptor = (req, next) => {\n  return Promise.resolve({\n    status: 200,\n    headers: {},\n    payload: 'mocked',\n  });\n};\n")),(0,i.kt)("h3",{id:"how-catch-all-request-stages"},"How catch all request stages?"),(0,i.kt)("p",null,"Interceptor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const interceptor = (req, next) => {\n  console.log('start');\n\n  return next(req)\n    .then((res) => {\n      console.log('success');\n      return res;\n    })\n    .catch((reason) => {\n      console.log('failure');\n      throw reason;\n    });\n};\n")),(0,i.kt)("h3",{id:"testing"},"Testing"),(0,i.kt)("h4",{id:"testing-your-api-clients"},"Testing your api clients"),(0,i.kt)("p",null,"If you have a module or providers that define api-clients, then it will be convenient to use special utilities in order to test them separately"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { testApi } from '@tramvai/module-http-client/tests';\nimport { CustomModule } from './module';\n\ndescribe('testApi', () => {\n  it('test', async () => {\n    const { di, fetchMock, mockJsonResponse } = testApi({\n      modules: [CustomModule],\n      env: {\n        TEST_API: 'testApi',\n      },\n    });\n    const httpClient: typeof HTTP_CLIENT = di.get('CUSTOM_HTTP_CLIENT') as any;\n\n    mockJsonResponse({ a: 'aaa' });\n\n    const { payload } = await httpClient.get('test');\n\n    expect(payload).toEqual({ a: 'aaa' });\n    expect(fetchMock).toHaveBeenCalledWith('http://testApi/test', expect.anything());\n  });\n});\n")),(0,i.kt)("h3",{id:"logging"},"Logging"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"@tinkoff/request")," will log every failed requests with level ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),". You can disable logging by pass ",(0,i.kt)("inlineCode",{parentName:"p"},"{ silent: true }")," parameter to request parameters. Useful meta information about request will be available in ",(0,i.kt)("inlineCode",{parentName:"p"},"error.__meta")," property."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const log = logger('request:test');\n\nhttpClient.request({ path: 'test', silent: true }).catch((error) => {\n  log.info(error);\n});\n")),(0,i.kt)("h3",{id:"debug"},"Debug"),(0,i.kt)("p",null,"You can show all the default logs of http clients by providing these env variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"LOG_ENABLE=request*\nLOG_LEVEL=trace\n")),(0,i.kt)("p",null,"If the built-in http clients logs are not enough, you can enable NodeJS debugging of the ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," module this way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"NODE_DEBUG=request tramvai start <appName>\n")),(0,i.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP_CLIENT_CACHE_DISABLED")," - disable caching for all HTTP clients"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP_CLIENT_CIRCUIT_BREAKER_DISABLED")," - disable plugin ",(0,i.kt)("a",{parentName:"li",href:"https://tinkoff.github.io/tinkoff-request/docs/plugins/circuit-breaker.html"},"https://tinkoff.github.io/tinkoff-request/docs/plugins/circuit-breaker.html"))),(0,i.kt)("h5",{id:"--next-react-query"},"- ",(0,i.kt)("a",{parentName:"h5",href:"/docs/features/data-fetching/react-query"},"Next: React Query")),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"You can find ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpClient")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiService")," interfaces in ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/libs/http-client"},(0,i.kt)("inlineCode",{parentName:"a"},"@tramvai/http-client")," package documentation")),(0,i.kt)("h3",{id:"httpclient"},"HttpClient"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type HttpClient = {\n  // common method for sending HTTP requests\n  request<P = any>(request: HttpClientRequest): Promise<HttpClientResponse<P>>;\n  // method for sending GET requests\n  get<R = any>(\n    path: string,\n    payload?: Pick<HttpClientRequest, 'query' | 'headers'>,\n    config?: Omit<HttpClientRequest, 'url' | 'query' | 'body' | 'headers'>\n  ): Promise<HttpClientResponse<R>>;\n  // method for sending POST requests, uses `requestType: 'json'` by default\n  post<R = any>(\n    path: string,\n    payload?: Pick<HttpClientRequest, 'query' | 'body' | 'headers'>,\n    config?: Omit<HttpClientRequest, 'url' | 'query' | 'body' | 'headers'>\n  ): Promise<HttpClientResponse<R>>;\n  // method for sending PUT requests, uses `requestType: 'json'` by default\n  put<R = any>(\n    path: string,\n    payload?: Pick<HttpClientRequest, 'query' | 'body' | 'headers'>,\n    config?: Omit<HttpClientRequest, 'url' | 'query' | 'body' | 'headers'>\n  ): Promise<HttpClientResponse<R>>;\n  // method for sending DELETE requests\n  delete<R = any>(\n    path: string,\n    payload?: Pick<HttpClientRequest, 'query' | 'headers'>,\n    config?: Omit<HttpClientRequest, 'url' | 'query' | 'body' | 'headers'>\n  ): Promise<HttpClientResponse<R>>;\n  // method for creating a new instance of the HTTP client, based on the settings of the current\n  fork(options?: HttpClientRequest, mergeOptionsConfig?: { replace?: boolean }): HttpClient;\n};\n")),(0,i.kt)("h3",{id:"httpclientrequest"},"HttpClientRequest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type HttpClientRequest = {\n  // absolute url of the request, do not use simultaneously with `path`\n  url?: string;\n  // url of the request, not to be used simultaneously with `url`\n  path?: string;\n  // base url, which is added to all queries before the `path` value\n  baseUrl?: string;\n  // basic HTTP methods are supported - GET, POST, PUT, DELETE\n  method?: HttpMethod;\n  // request data type, `form` by default\n  requestType?: HttpContentType;\n  // response data type, is calculated from the `content-type` header by default\n  responseType?: HttpContentType;\n  // HTTP request headers\n  headers?: Record<string, any>;\n  // request query parameters\n  query?: Record<string, any>;\n  // request body\n  body?: Record<string, any>;\n  // request execution time limit, in ms\n  timeout?: number;\n  // disabling logging inside the HTTP client. It is recommended to use if a request error is logged manually\n  silent?: boolean;\n  // disabling the request cache\n  cache?: boolean;\n  // if `abortPromise` is resolved, the request will be canceled\n  abortPromise?: Promise<void>;\n  // will intercept all requests\n  interceptors?: HttpClientInterceptor[];\n  // method to modify request data\n  // @deprecated - use interceptors instead\n  modifyRequest?: (req: HttpClientRequest) => HttpClientRequest;\n  // method to modify response data\n  // @deprecated - use interceptors instead\n  modifyResponse?: <P = any>(res: HttpClientResponse<P>) => HttpClientResponse<P>;\n  // method to modify the error object\n  // @deprecated - use interceptors instead\n  modifyError?: (error: HttpClientError, req: HttpClientRequest) => HttpClientError;\n  [key: string]: any;\n};\n")),(0,i.kt)("h3",{id:"httpclientresponse"},"HttpClientResponse"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type HttpClientResponse<P = any> = {\n  // response body\n  payload: P;\n  // HTTP response code\n  status: number;\n  // HTTP response headers\n  headers: Record<string, any>;\n};\n")),(0,i.kt)("h3",{id:"httpclienterror"},"HttpClientError"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type HttpClientError = Error & {\n  // HTTP response code, only exists when request was finished\n  status?: number;\n  // HTTP response headers, only exists when request was finished\n  headers?: Record<string, any>;\n  [key: string]: any;\n};\n")),(0,i.kt)("h3",{id:"httpclientinterceptor"},"HttpClientInterceptor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type HttpClientInterceptor = (\n  request: HttpClientRequest,\n  next: (request: HttpClientRequest) => Promise<HttpClientResponse>\n) => Promise<HttpClientResponse>;\n")),(0,i.kt)("h3",{id:"apiservice"},"ApiService"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ApiService")," - abstract class for easy creation of services for working with API, allows you to override custom logic in the ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," method, on top of which the rest of the basic methods work."),(0,i.kt)("p",null,"For example, a service that automatically displays a pop-up window when a request error occurs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"class CustomApiService extends ApiService {\n  constructor({ httpClient }: { httpClient: HttpClient }) {\n    super(httpClient);\n  }\n\n  request<R = any>(request: HttpClientRequest): Promise<HttpClientResponse<R>> {\n    return this.httpClient.request(request).catch((error) => {\n      alert(error);\n    });\n  }\n}\n\nconst service = new CustomApiService({ httpClient });\n\nservice.request({ path: 'fake' }); // show alert\nservice.get('fake'); // also show alert\n")),(0,i.kt)("h5",{id:"--next-react-query-1"},"- ",(0,i.kt)("a",{parentName:"h5",href:"/docs/features/data-fetching/react-query"},"Next: React Query")))}m.isMDXComponent=!0}}]);