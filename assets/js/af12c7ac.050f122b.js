"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),o=n(6010);const a="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),o=n(7294),a=n(6010),i=n(2389),s=n(7392),l=n(7094),p=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,k=e.values,f=e.groupId,h=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,x=w.setTabGroupChoices,C=(0,o.useState)(b),M=C[0],P=C[1],q=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=N[f];null!=I&&I!==M&&v.some((function(e){return e.value===I}))&&P(I)}var T=function(e){var t=e.currentTarget,n=q.indexOf(t),r=v[n].value;r!==M&&(O(t),P(r),null!=f&&x(f,String(r)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=q.indexOf(e.currentTarget)+1;n=null!=(r=q[o])?r:q[0];break;case"ArrowLeft":var a,i=q.indexOf(e.currentTarget)-1;n=null!=(a=q[i])?a:q[q.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":m},h)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:function(e){return q.push(e)},onKeyDown:E,onFocus:T,onClick:T},i,{className:(0,a.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":M===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(g.filter((function(e){return e.props.value===M}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==M})}))))}function d(e){var t=(0,i.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}},5290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(5488),s=n(5162),l=["components"],p={},c=void 0,u={unversionedId:"references/libs/mocker",id:"references/libs/mocker",title:"mocker",description:"A server and a middleware for API mocking.",source:"@site/tmp-docs/references/libs/mocker.md",sourceDirName:"references/libs",slug:"/references/libs/mocker",permalink:"/docs/references/libs/mocker",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/mocker.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"minicss",permalink:"/docs/references/libs/minicss"},next:{title:"module-loader-client",permalink:"/docs/references/libs/module-loader-client"}},m={},d=[{value:"Installation",id:"installation",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Routing",id:"routing",level:3},{value:"FileSystem mocks",id:"filesystem-mocks",level:3},{value:"API",id:"api",level:2},{value:"Mocker",id:"mocker",level:3},{value:"MockerOptions",id:"mockeroptions",level:3},{value:"MockRepository",id:"mockrepository",level:3},{value:"How to",id:"how-to",level:2},{value:"How to mock request with specific query parameters?",id:"how-to-mock-request-with-specific-query-parameters",level:3},{value:"How to proxy specific request to source API?",id:"how-to-proxy-specific-request-to-source-api",level:3}],k={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A server and a middleware for API mocking."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"@tinkoff/mocker"),":"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @tinkoff/mocker\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tinkoff/mocker\n")))),(0,a.kt)("p",null,"Add your first mock to file ",(0,a.kt)("inlineCode",{parentName:"p"},"mocks/first-api.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"module.exports = {\n  api: 'first-api',\n  mocks: {\n    'GET /endpoint': {\n      status: 200,\n      headers: {},\n      payload: 'mocked response',\n    },\n  },\n};\n")),(0,a.kt)("p",null,"Set up mocker in your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Mocker, FileSystemMockRepository } from '@tinkoff/mocker';\n\n// Repository will read mocks from directory `mocks` relative from current dir\nconst repository = new FileSystemMockRepository({ cwd: process.cwd(), root: 'mocks' });\n// Mocker to all of the request on `/first-api/...` will response with mock found in fs or with proxying request to the source API\nconst options = {\n  apis: {\n    'first-api': {\n      target: 'https://real-first-api.com/',\n    },\n  },\n  passUnhandledRequests: true,\n};\n\nconst mocker = new Mocker({ options, repository, logger: console });\n\n(async () => {\n  // with this call mocker reads mocks from repository and creates according routes\n  await mocker.init();\n\n  mocker.start(4000, () => {\n    console.log('Mocker is running at 4000 port');\n  });\n})();\n")),(0,a.kt)("p",null,"Now we can make a ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," request to mocker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(async () => {\n  const response = await fetch('http://localhost:4000/first-api/endpoint');\n  const data = await response.json();\n\n  console.log(data); // \"mocked response\"\n})();\n")),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("p",null,"Library is based on ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"express"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mocker")," can be used as standalone server or as a middleware for existing server through call ",(0,a.kt)("inlineCode",{parentName:"p"},"mocker.use(req, res)"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FileSystemMockRepository")," supports mock in ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," formats. ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," mocks are able to define custom ",(0,a.kt)("inlineCode",{parentName:"p"},"express")," handler as a mock handler."),(0,a.kt)("p",null,"For choosing right mock for request next parameters of the request are considered: ",(0,a.kt)("inlineCode",{parentName:"p"},"method"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"query"),"."),(0,a.kt)("p",null,"Mocker supports proxying requests to API that allows to mock only part of the API and not a whole backend"),(0,a.kt)("h3",{id:"routing"},"Routing"),(0,a.kt)("p",null,"If mocker is running as a standalone server, for example on 4000 port, then it will be accessible at url ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/"),"."),(0,a.kt)("p",null,"For every api from settings ",(0,a.kt)("inlineCode",{parentName:"p"},"options.apis")," will be created a nester router, e.g. for ",(0,a.kt)("inlineCode",{parentName:"p"},"first-api")," it will be ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/first-api/"),"."),(0,a.kt)("p",null,"Routes for ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," are getting created based on mocks, in which key is a method + url of the request, e.g. mock ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /endpoint")," will be accessible at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4000/first-api/endpoint")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," requests."),(0,a.kt)("h3",{id:"filesystem-mocks"},"FileSystem mocks"),(0,a.kt)("p",null,"Mocker reads mocks using Repository, that allows to store mocks in FileSystem or on the another server."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FileSystemMockRepository")," works with FileSystem and supports next kinds of mocks:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"mock.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "api": "first-api",\n  "mocks": {\n    "GET /foo": {\n      "status": 200,\n      "headers": {},\n      "payload": {\n        "fake": "true"\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"mock.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"module.exports = {\n  api: 'first-api',\n  mocks: {\n    'GET /bar': {\n      status: 200,\n      headers: {},\n      payload: {\n        fake: 'true',\n      },\n    },\n    'POST /bar': (req, res) => {\n      res.status(200);\n      res.set('X-Mock-Server', 'true');\n      res.json({ fake: 'true' });\n    },\n  },\n};\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"mocker"},"Mocker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Mocker {\n  new (params: { options: MockerOptions; repository: MockRepository; logger: Logger }): Mocker;\n\n  init(): Promise<void>;\n\n  update(): Promise<void>;\n\n  use(req: IncomingMessage, res: ServerResponse): express.Express;\n\n  start(port: number, callback?: (...args: any[]) => void): Server;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Mocker.init")," - resolve mocks using ",(0,a.kt)("inlineCode",{parentName:"p"},"MockRepository"),", routing initialization. Must be called before using server with mocks."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Mocker.update")," - updating mocks using ",(0,a.kt)("inlineCode",{parentName:"p"},"MockRepository"),", routing update. Might be called in runtime."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Mocker.use")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"express")," middleware. Might be used for adding mocker on the existing server."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Mocker.start")," - run mocker as a standalone http-server."),(0,a.kt)("h3",{id:"mockeroptions"},"MockerOptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"interface MockerOptions {\n  apis: Record<string, { target: string }>;\n  passUnhandledRequests?: boolean;\n  apiRoutePrefix?: string;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MockerOptions.apis")," - list of APIs for mocking, key ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," points to the source API."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MockerOptions.passUnhandledRequests")," - when enabled, all of the request without according mock will be proxied to the ",(0,a.kt)("inlineCode",{parentName:"p"},"target"),", otherwise fail the request."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MockerOptions.apiRoutePrefix")," - if mocker is used in existing server on nested route, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"/mocker"),", this option might be used to pass this route as ",(0,a.kt)("inlineCode",{parentName:"p"},"apiRoutePrefix")," for proper routing."),(0,a.kt)("h3",{id:"mockrepository"},"MockRepository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"interface MockRepository {\n  get(api: string, endpoint: string): Promise<Mock>;\n\n  getAll(api: string): Promise<Record<string, Mock>>;\n\n  add(api: string, endpoint: string, mock: Mock): Promise<void>;\n\n  delete(api: string, endpoint: string): Promise<void>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MockRepository.getAll")," - get all mocks for specified API."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MockRepository.get")," - get specific mock for specific API."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MockRepository.add")," - add new mock for specific API."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MockRepository.delete")," - remove specific mock for specific API."),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"how-to-mock-request-with-specific-query-parameters"},"How to mock request with specific query parameters?"),(0,a.kt)("p",null,"Mocker allows to specify query parameters for mocks."),(0,a.kt)("p",null,"In the example below request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/endpoint?foo=bar")," will be mocked with first mock, and request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/endpoint?foo=baz")," will be mocked with second. All of the other requests with\\without query will be proxied to source API (if ",(0,a.kt)("inlineCode",{parentName:"p"},"passUnhandledRequests")," is enabled)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"module.exports = {\n  api: 'api',\n  mocks: {\n    'GET /endpoint?foo=bar': {\n      status: 200,\n      headers: {},\n      payload: 'mocked bar response',\n    },\n    'GET /endpoint?foo=baz': {\n      status: 200,\n      headers: {},\n      payload: 'mocked baz response',\n    },\n  },\n};\n")),(0,a.kt)("h3",{id:"how-to-proxy-specific-request-to-source-api"},"How to proxy specific request to source API?"),(0,a.kt)("p",null,"It might be useful if option ",(0,a.kt)("inlineCode",{parentName:"p"},"passUnhandledRequests")," is disabled. In that case you may pass option ",(0,a.kt)("inlineCode",{parentName:"p"},"pass: true")," to mock:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"module.exports = {\n  api: 'api',\n  mocks: {\n    'ALL /endpoint': {\n      pass: true,\n    },\n  },\n};\n")))}f.isMDXComponent=!0}}]);