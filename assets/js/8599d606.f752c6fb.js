(self.webpackChunk=self.webpackChunk||[]).push([[466],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>m,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,k=u["".concat(l,".").concat(d)]||u[d]||s[d]||a;return t?r.createElement(k,p(p({ref:n},m),{},{components:t})):r.createElement(k,p({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5367:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>c,toc:()=>m,default:()=>u});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),p=["components"],i={id:"mocker",title:"mocker"},l=void 0,c={unversionedId:"references/modules/mocker",id:"references/modules/mocker",isDocsHomePage:!1,title:"mocker",description:"\u041c\u043e\u0434\u0443\u043b\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 @tinkoff/mocker \u0432 tramvai \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0438 \u0434\u0435\u043b\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u043c\u043e\u043a\u0435\u0440 \u043d\u0430 papi \u0440\u043e\u0443\u0442\u0435 /mocker.",source:"@site/tmp-docs/references/modules/mocker.md",sourceDirName:"references/modules",slug:"/references/modules/mocker",permalink:"/docs/references/modules/mocker",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/mocker.md",version:"current",frontMatter:{id:"mocker",title:"mocker"},sidebar:"docs",previous:{title:"Deploy \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",permalink:"/docs/guides/deploy"},next:{title:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",permalink:"/docs/features/migration"}},m=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:[]},{value:"Explanation",id:"explanation",children:[{value:"\u0417\u0430\u043c\u0435\u043d\u0430 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445",id:"\u0437\u0430\u043c\u0435\u043d\u0430-env-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445",children:[]}]},{value:"How to",id:"how-to",children:[{value:"\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u043c\u043e\u043a\u0438 \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 API, \u043a\u0430\u043a \u043c\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043d\u0438\u0445?",id:"\u0443-\u043c\u0435\u043d\u044f-\u0435\u0441\u0442\u044c-\u043c\u043e\u043a\u0438-\u0434\u043b\u044f-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445-api-\u043a\u0430\u043a-\u043c\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c-\u0442\u043e\u043b\u044c\u043a\u043e-\u043e\u0434\u043d\u043e-\u0438\u0437-\u043d\u0438\u0445",children:[]}]},{value:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b",id:"\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435-\u0442\u043e\u043a\u0435\u043d\u044b",children:[]}],s={toc:m};function u(e){var n=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0443 ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/libs/mocker"},"@tinkoff/mocker")," \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"tramvai")," \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0438 \u0434\u0435\u043b\u0430\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u043c\u043e\u043a\u0435\u0440 \u043d\u0430 ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/modules/server#papi"},"papi")," \u0440\u043e\u0443\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"/mocker"),"."),(0,a.kt)("h2",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),(0,a.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"@tramvai/module-mocker"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/module-mocker\n")),(0,a.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u0439 \u043c\u043e\u043a, \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"mocks/my-api.js"),", \u0433\u0434\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"api")," \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0441 \u0443\u0440\u043b\u043e\u043c API, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043c\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"MY_API"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"module.exports = {\n  api: 'MY_API',\n  mocks: {\n    'GET /endpoint?foo=bar': {\n      status: 200,\n      headers: {},\n      payload: {\n        result: {\n          type: 'json',\n          value: {\n            a: 'b'\n          },\n        },\n      },\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { MockerModule } from '@tramvai/module-module';\n\ncreateApp({\n  name: 'tincoin',\n  modules: [ MockerModule ],\n});\n")),(0,a.kt)("p",null,"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},"MOCKER_ENABLED"),", \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'MOCKER_ENABLED="true" tramvai start tincoin\n')),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e, \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"MY_API")," \u0438 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u043c\u043e\u043a\u0435\u0440, \u0430 \u0435\u0441\u043b\u0438 \u043d\u0435 \u043d\u0430\u0448\u043b\u043e\u0441\u044c \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u043c\u043e\u043a\u043e\u0432, \u043f\u0440\u043e\u043a\u0441\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0435 API."),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("p",null,"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u043e\u043a\u0435\u0440\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u044b \u0432 ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/libs/mocker#Explanation"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438"),"."),(0,a.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442 middleware \u043c\u043e\u043a\u0435\u0440\u0430 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"papi")," \u0440\u043e\u0443\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"/mocker"),", \u0438 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0432\u0441\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043c\u043e\u043a\u0438\u0440\u0443\u0435\u043c\u044b\u0445 API \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"papi"),", \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u043e\u0433\u043e \u0438 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u0434\u0430."),(0,a.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043c\u043e\u043a\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432\u0441\u0435 API, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u043d\u0430\u0439\u0434\u0435\u043d\u044b \u0432 \u043c\u043e\u043a\u0430\u0445, \u044d\u0442\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c."),(0,a.kt)("p",null,"\u041c\u043e\u043a\u0435\u0440 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 ",(0,a.kt)("inlineCode",{parentName:"p"},'MOCKER_ENABLED="true"'),"."),(0,a.kt)("h3",{id:"\u0437\u0430\u043c\u0435\u043d\u0430-env-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445"},"\u0417\u0430\u043c\u0435\u043d\u0430 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445"),(0,a.kt)("p",null,"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c, \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u0435\u0442 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"MY_API: https://www.my-api.com/"),", \u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e API \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d \u043c\u043e\u043a."),(0,a.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u044c \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e, \u043d\u0430 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0442\u0435\u043d\u0434\u0430\u0445, \u0438 \u0432 test/stage \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f\u0445, \u044d\u0442\u043e \u043f\u043e\u0440\u043e\u0436\u0434\u0430\u0435\u0442 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043c \u043f\u0443\u0442\u0438 \u0434\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"papi")," \u044d\u043d\u0434\u043f\u043e\u0438\u043d\u0442\u0430:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u041d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u043c \u043f\u0443\u0442\u0438, \u0438 \u0442\u0443\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),", \u0437\u043d\u0430\u0447\u0438\u0442 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0443\u0440\u043b\u044b \u0432\u0438\u0434\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/tincoin/papi/mocker/MY_API/"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u041d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435, \u043d\u0430 \u0441\u0442\u0435\u043d\u0434\u0430\u0445 \u043c\u044b \u043d\u0435 \u0437\u043d\u0430\u0435\u043c \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0434\u043e\u043c\u0435\u043d \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0438 \u043d\u0430\u0434\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u043f\u0443\u0442\u044f\u043c, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0435 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0443\u0440\u043b\u044b \u0432\u0438\u0434\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"/tincoin/papi/mocker/MY_API/")))),(0,a.kt)("p",null,"\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u044d\u0442\u043e\u0439 \u0437\u0430\u043c\u0435\u043d\u0435, \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u043c\u043e\u043a\u0438\u0440\u0443\u0435\u043c\u043e\u0435 API, \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0435 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0435, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u043c\u043e\u043a\u0435\u0440."),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"\u0443-\u043c\u0435\u043d\u044f-\u0435\u0441\u0442\u044c-\u043c\u043e\u043a\u0438-\u0434\u043b\u044f-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445-api-\u043a\u0430\u043a-\u043c\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c-\u0442\u043e\u043b\u044c\u043a\u043e-\u043e\u0434\u043d\u043e-\u0438\u0437-\u043d\u0438\u0445"},"\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u043c\u043e\u043a\u0438 \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 API, \u043a\u0430\u043a \u043c\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043d\u0438\u0445?"),(0,a.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0441\u0435 API \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0438\u0437 \u043c\u043e\u043a\u043e\u0432 \u043f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.\n\u042d\u0442\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044f \u0441\u043f\u0438\u0441\u043e\u043a API \u0434\u043b\u044f \u043c\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0443\u043b\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"MockerModule.forRoot({\n  config: () => ({\n    apis: ['MY_API'],\n  }),\n});\n")),(0,a.kt)("h2",{id:"\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435-\u0442\u043e\u043a\u0435\u043d\u044b"},"\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b"),(0,a.kt)("p",null,(0,a.kt)("pre",{parentName:"p"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createToken } from '@tinkoff/dippy';\nimport type { Mocker, MockRepository } from '@tinkoff/mocker';\n\nexport interface MockerOptions {\n  apis: string[];\n}\n\nexport const MOCKER = createToken<Mocker>('MOCKER');\n\nexport const MOCKER_REPOSITORY = createToken<MockRepository[]>('MOCKER_REPOSITORY', {\n  multi: true,\n});\n\nexport const MOCKER_CONFIGURATION = createToken<() => Promise<MockerOptions>>(\n  'MOCKER_CONFIGURATION'\n);\n\n"))))}u.isMDXComponent=!0}}]);