(self.webpackChunk=self.webpackChunk||[]).push([[9073],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9156:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>u});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],i={id:"how-create-async-component",title:"\u041a\u0430\u043a \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0447\u0430\u043d\u043a?"},p=void 0,c={unversionedId:"how-to/how-create-async-component",id:"how-to/how-create-async-component",isDocsHomePage:!1,title:"\u041a\u0430\u043a \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0447\u0430\u043d\u043a?",description:"tramvai \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u044b\u043d\u043e\u0441 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0432 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0447\u0430\u043d\u043a\u0438 \u0441 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u043e\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u0433\u0438\u0434\u0440\u0430\u0446\u0438\u0435\u0439 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f @tramvai/react",source:"@site/tmp-docs/how-to/how-create-async-component.md",sourceDirName:"how-to",slug:"/how-to/how-create-async-component",permalink:"/en/docs/how-to/how-create-async-component",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/how-create-async-component.md",version:"current",frontMatter:{id:"how-create-async-component",title:"\u041a\u0430\u043a \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u0447\u0430\u043d\u043a?"},sidebar:"docs",previous:{title:"How to create a papi handler?",permalink:"/en/docs/how-to/how-create-papi"},next:{title:"\u041a\u0430\u043a \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c modern \u0440\u0435\u0436\u0438\u043c \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f?",permalink:"/en/docs/how-to/how-enable-modern"}},s=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:[]},{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c lazy",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c-lazy",children:[]},{value:"\u0418\u0442\u043e\u0433",id:"\u0438\u0442\u043e\u0433",children:[]}],m={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"tramvai \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u044b\u043d\u043e\u0441 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0432 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0447\u0430\u043d\u043a\u0438 \u0441 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u043e\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0438 \u0433\u0438\u0434\u0440\u0430\u0446\u0438\u0435\u0439 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/features/react#lazy"},(0,o.kt)("inlineCode",{parentName:"a"},"@tramvai/react"))),(0,o.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"),(0,o.kt)("p",null,"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0442\u044f\u0436\u0435\u043b\u044b\u0439 React \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0440\u0435\u0434\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0438 \u043c\u044b \u0445\u043e\u0442\u0438\u043c \u0435\u0433\u043e \u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438. \u0421\u0435\u0439\u0447\u0430\u0441 \u0443 \u043d\u0430\u0441 \u0442\u0430\u043a\u043e\u0439 \u043a\u043e\u0434:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// file heavy.tsx\nexport const Heavy = () => <div>123</div>;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// file page.tsx\nimport Heavy from './heavy.tsx';\n\nconst Page = () => (\n  <>\n    <Heavy />\n    <Footer />\n  </>\n);\n")),(0,o.kt)("h2",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c-lazy"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c lazy"),(0,o.kt)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0432 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0447\u0430\u043d\u043a\u0438"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 ",(0,o.kt)("inlineCode",{parentName:"li"},"page.tsx")," \u043d\u043e\u0432\u044b\u0439 \u0432\u0440\u0430\u043f\u043f\u0435\u0440 \u0434\u043b\u044f ",(0,o.kt)("inlineCode",{parentName:"li"},"heavy"),"."),(0,o.kt)("li",{parentName:"ul"},"\u0412\u044b\u043d\u0435\u0441\u0442\u0438 \u043a\u043e\u0434 ",(0,o.kt)("inlineCode",{parentName:"li"},"heavy")," \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b \u0438 \u0432 ",(0,o.kt)("inlineCode",{parentName:"li"},"heavy.tsx")," \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e async \u0432\u0440\u0430\u043f\u043f\u0435\u0440")),(0,o.kt)("p",null,"\u041c\u044b \u043f\u043e\u0439\u0434\u0435\u043c \u043f\u043e \u043f\u0443\u0442\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u044d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0435 \u043c\u0435\u043d\u044f\u0442\u044c \u0438\u043c\u043f\u043e\u0440\u0442\u044b \u0432 \u0444\u0430\u0439\u043b\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"Heavy")," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442. \u0418 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u0431\u0443\u0434\u0435\u0442 \u0441\u043b\u043e\u0436\u043d\u0435\u0435 \u0437\u0430\u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c async \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// file heavy-component.tsx\nexport const Heavy = () => <div>123</div>;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// file heavy.tsx\nimport { lazy } from '@tramvai/react';\n\nexport const Heavy = lazy(() => import('./heavy-component'));\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// file page.tsx\nimport Heavy from './heavy.tsx';\n\nconst Page = () => (\n  <>\n    <Heavy />\n    <Footer />\n  </>\n);\n")),(0,o.kt)("p",null,"\u041c\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u043d\u043e\u0432\u044b\u0439 \u0444\u0430\u0439\u043b, \u0432\u044b\u043d\u0435\u0441\u043b\u0438 \u0442\u0443\u0434\u0430 \u0432\u0435\u0441\u044c \u043a\u043e\u0434 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"Heavy"),", \u0430 \u0432 \u0441\u0442\u0430\u0440\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0430\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u0435\u0440\u043d\u0443\u043b\u0438 \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"lazy")," \u0438 \u0437\u0430\u0438\u043c\u043f\u043e\u0440\u0442\u0438\u043b\u0438 \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),". \u0422\u0435\u043f\u0435\u0440\u044c \u0443 \u043d\u0430\u0441 \u0432\u043c\u0435\u0441\u0442\u043e \u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"Heavy")," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"Page")," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."),(0,o.kt)("h2",{id:"\u0438\u0442\u043e\u0433"},"\u0418\u0442\u043e\u0433"),(0,o.kt)("p",null,"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"Heavy")," \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438"),(0,o.kt)("p",null,"\u0414\u0430\u043b\u044c\u0448\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u043d\u0435\u0441\u0435\u043d \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0447\u0430\u043d\u043a \u0432\u0435\u0431\u043f\u0430\u043a\u043e\u043c"),(0,o.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438 SSR \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442 \u0444\u0430\u0439\u043b \u0438 \u0441\u0440\u0430\u0437\u0443-\u0436\u0435 \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),(0,o.kt)("li",{parentName:"ul"},"JS \u0438 CSS \u0447\u0430\u043d\u043a\u0430 \u0431\u0443\u0434\u0443\u0442 \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0432 HTML \u0441 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c"),(0,o.kt)("li",{parentName:"ul"},"\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u043e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442 \u0440\u0430\u0431\u043e\u0442\u0443")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/how-to/ssr-async-components"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0440\u0430\u0431\u043e\u0442\u044b \u0432 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438")))}u.isMDXComponent=!0}}]);