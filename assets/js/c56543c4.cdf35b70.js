(self.webpackChunk=self.webpackChunk||[]).push([[2237],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return r?o.createElement(f,l(l({ref:t},u),{},{components:r})):o.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9828:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>s});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),l=["components"],i={id:"how-debug-modules",title:"\u041a\u0430\u043a \u0434\u0435\u0431\u0430\u0436\u0438\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0438?"},p=void 0,c={unversionedId:"how-to/how-debug-modules",id:"how-to/how-debug-modules",isDocsHomePage:!1,title:"\u041a\u0430\u043a \u0434\u0435\u0431\u0430\u0436\u0438\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0438?",description:"\u0414\u043b\u044f \u0443\u0434\u043e\u0431\u043d\u043e\u0439 \u043e\u0442\u043b\u0430\u0434\u043a\u0438 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0432 \u0434\u043b\u044f \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u043b\u043e\u0433\u0433\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0432 \u043e\u0442\u043b\u0430\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u044f\u0445. \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 @tinkoff/logger \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043b\u043e\u0433\u0433\u0435\u0440\u043e\u043c.",source:"@site/tmp-docs/how-to/how-debug-modules.md",sourceDirName:"how-to",slug:"/how-to/how-debug-modules",permalink:"/docs/how-to/how-debug-modules",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/how-debug-modules.md",version:"current",frontMatter:{id:"how-debug-modules",title:"\u041a\u0430\u043a \u0434\u0435\u0431\u0430\u0436\u0438\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0438?"},sidebar:"docs",previous:{title:"\u041a\u0430\u043a \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c modern \u0440\u0435\u0436\u0438\u043c \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f?",permalink:"/docs/how-to/how-enable-modern"},next:{title:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 tramvai",permalink:"/docs/how-to/tramvai-update"}},u=[{value:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0432 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435",id:"\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435-\u043b\u043e\u0433\u043e\u0432-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435",children:[]},{value:"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0432 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435",id:"\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435-\u043b\u043e\u0433\u043e\u0432-\u043d\u0430-\u043a\u043b\u0438\u0435\u043d\u0442\u0435",children:[]}],d={toc:u};function s(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0443\u0434\u043e\u0431\u043d\u043e\u0439 \u043e\u0442\u043b\u0430\u0434\u043a\u0438 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0432 \u0434\u043b\u044f \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u043b\u043e\u0433\u0433\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0432 \u043e\u0442\u043b\u0430\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u044f\u0445. \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/libs/logger"},"@tinkoff/logger")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043b\u043e\u0433\u0433\u0435\u0440\u043e\u043c."),(0,a.kt)("p",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u043b\u043e\u0433\u0433\u0435\u0440\u043e\u0432 \u0432 README \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u044e, \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043d\u0443\u0436\u043d\u044b\u0445 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"logger("),"."),(0,a.kt)("p",null,"\u0423\u0440\u043e\u0432\u0435\u043d\u0438 \u0438 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0445 \u043b\u043e\u0433\u043e\u0432 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0434\u043b\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f \u0432\u0441\u0435 \u043b\u043e\u0433\u0438 \u0441 \u0443\u0440\u043e\u0432\u043d\u0435\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," \u0438 \u0432\u044b\u0448\u0435."),(0,a.kt)("h3",{id:"\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435-\u043b\u043e\u0433\u043e\u0432-\u043d\u0430-\u0441\u0435\u0440\u0432\u0435\u0440\u0435"},"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0432 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),(0,a.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0445 \u043b\u043e\u0433\u043e\u0432 \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"LOG_ENABLE"),", \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u044d\u0442\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0435, \u0447\u0435\u0440\u0435\u0437 papi \u043c\u0435\u0442\u043e\u0434 ",(0,a.kt)("inlineCode",{parentName:"p"},"/{appName}/private/papi/logger")," \u0441 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 query \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/modules/log"},"@tramvai/module-log")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"LOG_ENABLE='router' // \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0432\u0441\u0435 \u043b\u043e\u0433\u0438 \u0434\u043b\u044f \u043b\u043e\u0433\u0433\u0435\u0440\u0430 \u0441 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c `router`\n")),(0,a.kt)("h3",{id:"\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435-\u043b\u043e\u0433\u043e\u0432-\u043d\u0430-\u043a\u043b\u0438\u0435\u043d\u0442\u0435"},"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0432 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435"),(0,a.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0445 \u043b\u043e\u0433\u043e\u0432 \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043c\u0435\u0442\u043e\u0434\u044b \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 logger. \u042d\u0442\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0442\u0441\u044f \u0432 localStorage, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0445 \u043b\u043e\u0433\u043e\u0432 \u0441 \u043d\u043e\u0432\u044b\u043c\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438, \u043d\u0430\u0434\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443, \u043b\u0438\u0431\u043e \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c localStorage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import logger from '@tinkoff/logger';\n\nlogger.enable('router'); // \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0432\u0441\u0435 \u043b\u043e\u0433\u0438 \u0434\u043b\u044f \u043b\u043e\u0433\u0433\u0435\u0440\u0430 \u0441 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u043c `router`\n")))}s.isMDXComponent=!0}}]);