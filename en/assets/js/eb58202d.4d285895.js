(self.webpackChunk=self.webpackChunk||[]).push([[3315],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4640:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>m,default:()=>u});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={id:"create-event",title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u0432\u0435\u043d\u0442\u0430"},s=void 0,l={unversionedId:"features/state/create-event",id:"features/state/create-event",isDocsHomePage:!1,title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u0432\u0435\u043d\u0442\u0430",description:"\u041c\u0435\u0442\u043e\u0434 createEvent \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u0435, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u0432 state management",source:"@site/tmp-docs/features/state/create-event.md",sourceDirName:"features/state",slug:"/features/state/create-event",permalink:"/en/docs/features/state/create-event",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/state/create-event.md",version:"current",frontMatter:{id:"create-event",title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u0432\u0435\u043d\u0442\u0430"},sidebar:"docs",previous:{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u0430",permalink:"/en/docs/features/state/create-reducer"},next:{title:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430",permalink:"/en/docs/features/state/dev-tools"}},m=[{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u0430",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435-\u043c\u0435\u0442\u043e\u0434\u0430",children:[]},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",children:[]}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434 ",(0,o.kt)("inlineCode",{parentName:"p"},"createEvent")," \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0441\u043e\u0431\u044b\u0442\u0438\u0435, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u0432 state management"),(0,o.kt)("h2",{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435-\u043c\u0435\u0442\u043e\u0434\u0430"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u0435\u0442\u043e\u0434\u0430"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createEvent(eventName: string, payloadCreator?: PayloadTransformer): EventCreator")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"eventName")," - \u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u043d\u0434\u0435\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payloadCreator")," - \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043e\u0434\u0438\u043d, \u0412 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043a\u043e\u0433\u0434\u0430 \u044d\u0432\u0435\u043d\u0442 \u0431\u044b\u043b \u0432\u044b\u0437\u0432\u0430\u043d \u0441 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432.")),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,o.kt)("h4",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u044d\u0432\u0435\u043d\u0442\u0430-\u0431\u0435\u0437-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u0432\u0435\u043d\u0442\u0430 \u0431\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createEvent } from '@tramvai/state';\n\nconst userLoadingInformation = createEvent('user loading information');\n\nuserLoadingInformation();\n")),(0,o.kt)("h4",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u044d\u0432\u0435\u043d\u0442\u0430-\u0441-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u0432\u0435\u043d\u0442\u0430 \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createEvent } from '@tramvai/state';\n\nconst userInformation = createEvent<{ age: number; name: string }>('user information');\n\nuserInformation({ age: 42, name: 'Tom' });\n")),(0,o.kt)("h4",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u044d\u0432\u0435\u043d\u0442\u0430-\u0441-\u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435-payload"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u0432\u0435\u043d\u0442\u0430 \u0441 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 payload"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createEvent } from '@tramvai/state';\n\nconst itemPrice = createEvent('user information', (info: string, price: number) => ({\n  [info]: price,\n}));\n\nitemPrice('car', 3000);\n")),(0,o.kt)("h4",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-\u044d\u0432\u0435\u043d\u0442\u043e\u0432-\u0432-\u044d\u043a\u0448\u0435\u043d\u0430\u0445"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u0432\u0435\u043d\u0442\u043e\u0432 \u0432 \u044d\u043a\u0448\u0435\u043d\u0430\u0445"),(0,o.kt)("p",null,"\u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u044d\u043a\u0448\u0435\u043d, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438, \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u044d\u0432\u0435\u043d\u0442 \u0438 \u043a\u0438\u0434\u0430\u0435\u043c \u0435\u0433\u043e \u0432 context.dispatch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAction } from '@tramvai/core';\nimport { createEvent } from '@tramvai/state';\n\nconst userInformation = createEvent < { age: number, name: string } > 'user information';\n\nconst action = createAction({\n  name: 'userLoadInformation',\n  fn: async (context) => {\n    const result = await tinkoffRequest({ method: 'information' });\n    context.dispatch(userInformation(result));\n  },\n});\n")))}u.isMDXComponent=!0}}]);