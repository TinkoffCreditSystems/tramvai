"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4680:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>l,toc:()=>c,default:()=>m});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={},p=void 0,l={unversionedId:"references/tramvai/test/integration",id:"references/tramvai/test/integration",title:"integration",description:"Set of helpers to simplify the process of writing integration tests for the tramvai app. Implies full-fledged run of the app with build made by @tramvai/cli and use of helpers for test result of requests to the server and test render of the app in the browser.",source:"@site/tmp-docs/references/tramvai/test/integration.md",sourceDirName:"references/tramvai/test",slug:"/references/tramvai/test/integration",permalink:"/docs/references/tramvai/test/integration",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tramvai/test/integration.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"integration-jest",permalink:"/docs/references/tramvai/test/integration-jest"},next:{title:"jsdom",permalink:"/docs/references/tramvai/test/jsdom"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"How To",id:"how-to",children:[{value:"Test request to the tramvai app without using browser (aka <code>curl</code>)",id:"test-request-to-the-tramvai-app-without-using-browser-aka-curl",children:[],level:3},{value:"Testing app in browser with the <code>puppeteer</code>",id:"testing-app-in-browser-with-the-puppeteer",children:[],level:3},{value:"Usage of <code>@tinkoff/mocker</code> in tests",id:"usage-of-tinkoffmocker-in-tests",children:[],level:3}],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Set of helpers to simplify the process of writing integration tests for the tramvai app. Implies full-fledged run of the app with build made by ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," and use of helpers for test result of requests to the server and test render of the app in the browser."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," package is required and should be installed manually")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @tramvai/test-integration\n")),(0,i.kt)("h2",{id:"how-to"},"How To"),(0,i.kt)("h3",{id:"test-request-to-the-tramvai-app-without-using-browser-aka-curl"},"Test request to the tramvai app without using browser (aka ",(0,i.kt)("inlineCode",{parentName:"h3"},"curl"),")"),(0,i.kt)("p",null,"For testing requests to the tramvai app libraries ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/superagent"},"superagent")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/taoqf/node-html-parser"},"node-html-parser")," are used under hood."),(0,i.kt)("p",null,"Call of ",(0,i.kt)("inlineCode",{parentName:"p"},"app.request")," sends requests to the app. All of the features of ",(0,i.kt)("inlineCode",{parentName:"p"},"superagent")," are available."),(0,i.kt)("p",null,"Call of ",(0,i.kt)("inlineCode",{parentName:"p"},"app.render")," resolves to the HTML render that is returned from server while serving the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { startCli } from '@tramvai/test-integration';\nimport { initPuppeteer, wrapPuppeteerPage } from '@tramvai/test-puppeteer';\n\nbeforeAll(async () => {\n  app = await startCli('bootstrap', {\n    env: {\n      SOME_ENV: 'test',\n    },\n  });\n}, 80000);\n\nafterAll(() => {\n  return app.close();\n});\n\nit('request to main page should return status 200', async () => {\n  return app.request('/').expect(200);\n});\n\nit('main page HTML snapshot', async () => {\n  const parsed = await app.render('/');\n  const applicationInnerHtml = parsed.application;\n\n  expect(parsed.application).toMatchInlineSnapshot();\n});\n")),(0,i.kt)("h3",{id:"testing-app-in-browser-with-the-puppeteer"},"Testing app in browser with the ",(0,i.kt)("inlineCode",{parentName:"h3"},"puppeteer")),(0,i.kt)("p",null,"You may use another library ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/tramvai/test/puppeteer"},"@tramvai/test-puppeteer")," to implement testing in the browser."),(0,i.kt)("h3",{id:"usage-of-tinkoffmocker-in-tests"},"Usage of ",(0,i.kt)("inlineCode",{parentName:"h3"},"@tinkoff/mocker")," in tests"),(0,i.kt)("p",null,"In order to use mocker there should be added ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/modules/mocker"},(0,i.kt)("inlineCode",{parentName:"a"},"@tramvai/module-mocker"))," to the tramvai app modules list."),(0,i.kt)("p",null,"After thar mocker will read file based mocks as it described in the docs to the mocker itself and it can be used dynamically in the tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"it('should work with mocker', async () => {\n  await app.mocker.addMocks('CONFIG_API', {\n    'GET /test/': {\n      status: 200,\n      payload: {\n        status: 'OK',\n        response: 'smth',\n      },\n    },\n  });\n\n  await app.request('/api/').expect(200);\n\n  await app.papi.clearCache();\n  await app.mocker.removeMocks('CONFIG_API', ['GET /test/']);\n\n  await app.request('/api/').expect(500);\n});\n")))}m.isMDXComponent=!0}}]);