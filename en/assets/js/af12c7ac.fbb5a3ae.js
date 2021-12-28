(self.webpackChunk=self.webpackChunk||[]).push([[4025],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,u=d["".concat(p,".").concat(m)]||d[m]||k[m]||i;return n?o.createElement(u,a(a({ref:t},c),{},{components:n})):o.createElement(u,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4850:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>l,toc:()=>c,default:()=>d});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],s={id:"mocker",title:"mocker"},p=void 0,l={unversionedId:"references/libs/mocker",id:"references/libs/mocker",isDocsHomePage:!1,title:"mocker",description:"A server and a middleware for API mocking.",source:"@site/tmp-docs/references/libs/mocker.md",sourceDirName:"references/libs",slug:"/references/libs/mocker",permalink:"/en/docs/references/libs/mocker",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/mocker.md",version:"current",frontMatter:{id:"mocker",title:"mocker"},sidebar:"docs",previous:{title:"meta-tags-generate",permalink:"/en/docs/references/libs/meta-tags-generate"},next:{title:"module-loader-client",permalink:"/en/docs/references/libs/module-loader-client"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Explanation",id:"explanation",children:[{value:"Routing",id:"routing",children:[]},{value:"FileSystem mocks",id:"filesystem-mocks",children:[]}]},{value:"API",id:"api",children:[{value:"Mocker",id:"mocker",children:[]},{value:"MockerOptions",id:"mockeroptions",children:[]},{value:"MockRepository",id:"mockrepository",children:[]}]},{value:"How to",id:"how-to",children:[{value:"How to mock request with specific query parameters?",id:"how-to-mock-request-with-specific-query-parameters",children:[]},{value:"How to proxy specific request to source API?",id:"how-to-proxy-specific-request-to-source-api",children:[]}]}],k={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A server and a middleware for API mocking."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"@tinkoff/mocker"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tinkoff/mocker\n")),(0,i.kt)("p",null,"Add your first mock to file ",(0,i.kt)("inlineCode",{parentName:"p"},"mocks/first-api.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"module.exports = {\n  api: 'first-api',\n  mocks: {\n    'GET /endpoint': {\n      status: 200,\n      headers: {},\n      payload: 'mocked response',\n    },\n  },\n};\n")),(0,i.kt)("p",null,"Set up mocker in your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Mocker, FileSystemMockRepository } from '@tinkoff/mocker';\n\n// Repository will read mocks from directory `mocks` relative from current dir\nconst repository = new FileSystemMockRepository({ cwd: process.cwd(), root: 'mocks' });\n// Mocker to all of the request on `/first-api/...` will response with mock found in fs or with proxying request to the source API\nconst options = {\n  apis: {\n    'first-api': {\n      target: 'https://real-first-api.com/',\n    },\n  },\n  passUnhandledRequests: true,\n};\n\nconst mocker = new Mocker({ options, repository, logger: console });\n\n(async () => {\n  // with this call mocker reads mocks from repository and creates according routes\n  await mocker.init();\n\n  mocker.start(4000, () => {\n    console.log('Mocker is running at 4000 port');\n  });\n})();\n")),(0,i.kt)("p",null,"Now we can make a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request to mocker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(async () => {\n  const response = await fetch('http://localhost:4000/first-api/endpoint');\n  const data = await response.json();\n\n  console.log(data); // \"mocked response\"\n})();\n")),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("p",null,"Library is based on ",(0,i.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"express"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mocker")," can be used as standalone server or as a middleware for existing server through call ",(0,i.kt)("inlineCode",{parentName:"p"},"mocker.use(req, res)"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FileSystemMockRepository")," supports mock in ",(0,i.kt)("inlineCode",{parentName:"p"},"js")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," formats. ",(0,i.kt)("inlineCode",{parentName:"p"},"js")," mocks are able to define custom ",(0,i.kt)("inlineCode",{parentName:"p"},"express")," handler as a mock handler."),(0,i.kt)("p",null,"For choosing right mock for request next parameters of the request are considered: ",(0,i.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),"."),(0,i.kt)("p",null,"Mocker supports proxying requests to API that allows to mock only part of the API and not a whole backend"),(0,i.kt)("h3",{id:"routing"},"Routing"),(0,i.kt)("p",null,"If mocker is running as a standalone server, for example on 4000 port, then it will be accessible at url ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/"),"."),(0,i.kt)("p",null,"For every api from settings ",(0,i.kt)("inlineCode",{parentName:"p"},"options.apis")," will be created a nester router, e.g. for ",(0,i.kt)("inlineCode",{parentName:"p"},"first-api")," it will be ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/first-api/"),"."),(0,i.kt)("p",null,"Routes for ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," are getting created based on mocks, in which key is a method + url of the request, e.g. mock ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /endpoint")," will be accessible at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/first-api/endpoint")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," requests."),(0,i.kt)("h3",{id:"filesystem-mocks"},"FileSystem mocks"),(0,i.kt)("p",null,"Mocker reads mocks using Repository, that allows to store mocks in FileSystem or on the another server."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FileSystemMockRepository")," works with FileSystem and supports next kinds of mocks:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"mock.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "api": "first-api",\n  "mocks": {\n    "GET /foo": {\n      "status": 200,\n      "headers": {},\n      "payload": {\n        "fake": "true"\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"mock.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"module.exports = {\n  api: 'first-api',\n  mocks: {\n    'GET /bar': {\n      status: 200,\n      headers: {},\n      payload: {\n        fake: 'true',\n      },\n    },\n    'POST /bar': (req, res) => {\n      res.status(200);\n      res.set('X-Mock-Server', 'true');\n      res.json({ fake: 'true' });\n    },\n  },\n};\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"mocker"},"Mocker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Mocker {\n  new (params: { options: MockerOptions; repository: MockRepository; logger: Logger }): Mocker;\n\n  init(): Promise<void>;\n\n  update(): Promise<void>;\n\n  use(req: IncomingMessage, res: ServerResponse): express.Express;\n\n  start(port: number, callback?: (...args: any[]) => void): Server;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Mocker.init")," - resolve mocks using ",(0,i.kt)("inlineCode",{parentName:"p"},"MockRepository"),", routing initialization. Must be called before using server with mocks."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Mocker.update")," - updating mocks using ",(0,i.kt)("inlineCode",{parentName:"p"},"MockRepository"),", routing update. Might be called in runtime."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Mocker.use")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"express")," middleware. Might be used for adding mocker on the existing server."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Mocker.start")," - run mocker as a standalone http-server."),(0,i.kt)("h3",{id:"mockeroptions"},"MockerOptions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"interface MockerOptions {\n  apis: Record<string, { target: string }>;\n  passUnhandledRequests?: boolean;\n  apiRoutePrefix?: string;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MockerOptions.apis")," - list of APIs for mocking, key ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," points to the source API."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MockerOptions.passUnhandledRequests")," - when enabled, all of the request without according mock will be proxied to the ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", otherwise fail the request."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MockerOptions.apiRoutePrefix")," - if mocker is used in existing server on nested route, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"/mocker"),", this option might be used to pass this route as ",(0,i.kt)("inlineCode",{parentName:"p"},"apiRoutePrefix")," for proper routing."),(0,i.kt)("h3",{id:"mockrepository"},"MockRepository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"interface MockRepository {\n  get(api: string, endpoint: string): Promise<Mock>;\n\n  getAll(api: string): Promise<Record<string, Mock>>;\n\n  add(api: string, endpoint: string, mock: Mock): Promise<void>;\n\n  delete(api: string, endpoint: string): Promise<void>;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MockRepository.getAll")," - get all mocks for specified API."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MockRepository.get")," - get specific mock for specific API."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MockRepository.add")," - add new mock for specific API."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MockRepository.delete")," - remove specific mock for specific API."),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("h3",{id:"how-to-mock-request-with-specific-query-parameters"},"How to mock request with specific query parameters?"),(0,i.kt)("p",null,"Mocker allows to specify query parameters for mocks."),(0,i.kt)("p",null,"In the example below request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/endpoint?foo=bar")," will be mocked with first mock, and request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/endpoint?foo=baz")," will be mocked with second. All of the other requests with\\without query will be proxied to source API (if ",(0,i.kt)("inlineCode",{parentName:"p"},"passUnhandledRequests")," is enabled)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"module.exports = {\n  api: 'api',\n  mocks: {\n    'GET /endpoint?foo=bar': {\n      status: 200,\n      headers: {},\n      payload: 'mocked bar response',\n    },\n    'GET /endpoint?foo=baz': {\n      status: 200,\n      headers: {},\n      payload: 'mocked baz response',\n    },\n  },\n};\n")),(0,i.kt)("h3",{id:"how-to-proxy-specific-request-to-source-api"},"How to proxy specific request to source API?"),(0,i.kt)("p",null,"It might be useful if option ",(0,i.kt)("inlineCode",{parentName:"p"},"passUnhandledRequests")," is disabled. In that case you may pass option ",(0,i.kt)("inlineCode",{parentName:"p"},"pass: true")," to mock:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"module.exports = {\n  api: 'api',\n  mocks: {\n    'ALL /endpoint': {\n      pass: true,\n    },\n  },\n};\n")))}d.isMDXComponent=!0}}]);