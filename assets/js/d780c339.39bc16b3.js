(self.webpackChunk=self.webpackChunk||[]).push([[8059],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6238:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>m});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],p={id:"test-integration",title:"Integration tests"},s=void 0,c={unversionedId:"references/test/test-integration",id:"references/test/test-integration",isDocsHomePage:!1,title:"Integration tests",description:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0445\u0435\u043b\u043f\u0435\u0440\u043e\u0432 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u041f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0440\u0442 \u0432\u0441\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441\u043e \u0441\u0431\u043e\u0440\u043a\u043e\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e @tramvai/cli \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0445\u0435\u043b\u043f\u0435\u0440\u043e\u0432 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0440\u0435\u043d\u0434\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435",source:"@site/tmp-docs/references/test/test-integration.md",sourceDirName:"references/test",slug:"/references/test/test-integration",permalink:"/docs/references/test/test-integration",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/test/test-integration.md",version:"current",frontMatter:{id:"test-integration",title:"Integration tests"},sidebar:"docs",previous:{title:"React tests",permalink:"/docs/references/test/test-react"},next:{title:"JSDom tests",permalink:"/docs/references/test/test-jsdom"}},l=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:[]},{value:"How To",id:"how-to",children:[{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a <code>tramvai</code> \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0431\u0435\u0437 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 (aka <code>curl</code>)",id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432-\u043a-tramvai-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e-\u0431\u0435\u0437-\u0437\u0430\u043f\u0443\u0441\u043a\u0430-\u0432-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435-aka-curl",children:[]},{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e <code>Puppeteer</code>",id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0432-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-puppeteer",children:[]},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 @tinkoff/mocker \u0432 \u0442\u0435\u0441\u0442\u0430\u0445",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-tinkoffmocker-\u0432-\u0442\u0435\u0441\u0442\u0430\u0445",children:[]}]}],u={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0445\u0435\u043b\u043f\u0435\u0440\u043e\u0432 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u041f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0440\u0442 \u0432\u0441\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441\u043e \u0441\u0431\u043e\u0440\u043a\u043e\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0445\u0435\u043b\u043f\u0435\u0440\u043e\u0432 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0440\u0435\u043d\u0434\u0435\u0440\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"@tramvai/cli"))),(0,o.kt)("h2",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @tramvai/test-integration\n")),(0,o.kt)("h2",{id:"how-to"},"How To"),(0,o.kt)("h3",{id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432-\u043a-tramvai-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e-\u0431\u0435\u0437-\u0437\u0430\u043f\u0443\u0441\u043a\u0430-\u0432-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435-aka-curl"},"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a ",(0,o.kt)("inlineCode",{parentName:"h3"},"tramvai")," \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0431\u0435\u0437 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 (aka ",(0,o.kt)("inlineCode",{parentName:"h3"},"curl"),")"),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai")," \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/superagent"},"superagent")," \u0438 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/taoqf/node-html-parser"},"node-html-parser")),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"app.request")," \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"superagent"),"."),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"app.render")," \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a HTML \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0435, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u0435\u0440\u043d\u0443\u043b \u0437\u0430\u043f\u0440\u043e\u0441 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { startCli } from '@tramvai/test-integration';\nimport { initPuppeteer, wrapPuppeteerPage } from '@tramvai/test-puppeteer';\n\nbeforeAll(async () => {\n  app = await startCli('bootstrap', {\n    env: {\n      SOME_ENV: 'test',\n    },\n  });\n}, 80000);\n\nafterAll(() => {\n  return app.close();\n});\n\nit('request to main page return status 200', async () => {\n  return app.request('/').expect(200);\n});\n\nit('main page HTML snapshot', async () => {\n  const parsed = await app.render('/');\n  const applicationInnerHtml = parsed.application;\n\n  expect(parsed.application).toMatchInlineSnapshot();\n});\n")),(0,o.kt)("h3",{id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0432-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-puppeteer"},"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,o.kt)("inlineCode",{parentName:"h3"},"Puppeteer")),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u044b\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u044b\u0445 \u0442\u0435\u0441\u0442\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/test/test-puppeteer"},"@tramvai/test-puppeteer")),(0,o.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-tinkoffmocker-\u0432-\u0442\u0435\u0441\u0442\u0430\u0445"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 @tinkoff/mocker \u0432 \u0442\u0435\u0441\u0442\u0430\u0445"),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043e\u043a\u0435\u0440\u0430 \u0432 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0442\u0435\u0441\u0442\u0430\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/modules/mocker"},(0,o.kt)("inlineCode",{parentName:"a"},"@tramvai/module-mocker"))," \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,o.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u043c\u043e\u043a\u0435\u0440 \u043f\u043e\u0434\u0442\u044f\u043d\u0435\u0442 \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u0435 \u043c\u043e\u043a\u0438 \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0434\u043e\u043a\u0435 \u043a \u0441\u0430\u043c\u043e\u043c\u0443 \u043c\u043e\u043a\u0435\u0440\u0443 \u0438 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043c\u043e\u043a\u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438 \u0432 \u0442\u0435\u0441\u0442\u0430\u0445:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"it('should work with mocker', async () => {\n  await app.mocker.addMocks('CONFIG_API', {\n    'GET /test/': {\n      status: 200,\n      payload: {\n        status: 'OK',\n        response: 'smth',\n      },\n    },\n  });\n\n  await app.request('/api/').expect(200);\n\n  await app.papi.clearCache();\n  await app.mocker.removeMocks('CONFIG_API', ['GET /test/']);\n\n  await app.request('/api/').expect(500);\n});\n")))}m.isMDXComponent=!0}}]);