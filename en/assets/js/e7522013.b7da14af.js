(self.webpackChunk=self.webpackChunk||[]).push([[3921],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,b=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5310:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>i,toc:()=>u,default:()=>f});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c=["components"],s={id:"react-hooks",title:"React Hooks"},l=void 0,i={unversionedId:"references/libs/react-hooks",id:"references/libs/react-hooks",isDocsHomePage:!1,title:"React Hooks",description:"\u041d\u0430\u0431\u043e\u0440 \u0445\u0443\u043a\u043e\u0432 \u0434\u043b\u044f React.",source:"@site/tmp-docs/references/libs/react-hooks.md",sourceDirName:"references/libs",slug:"/references/libs/react-hooks",permalink:"/en/docs/references/libs/react-hooks",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/react-hooks.md",version:"current",frontMatter:{id:"react-hooks",title:"React Hooks"},sidebar:"docs",previous:{title:"prettier",permalink:"/en/docs/references/libs/prettier"},next:{title:"router",permalink:"/en/docs/references/libs/router"}},u=[{value:"useShallowEqual",id:"useshallowequal",children:[]}],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041d\u0430\u0431\u043e\u0440 \u0445\u0443\u043a\u043e\u0432 \u0434\u043b\u044f React."),(0,a.kt)("h3",{id:"useshallowequal"},"useShallowEqual"),(0,a.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c shallow equal \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430. \u0415\u0441\u043b\u0438 \u043d\u043e\u0432\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u0435\u043d \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u043c\u0443 \u0442\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0445\u0443\u043a\u0430 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u0442\u0435\u043c \u0436\u0435."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect } from 'react';\nimport { useShallowEqual } from '@tinkoff/react-hooks';\n\nexport function Cmp({ obj }) {\n  // obj - \u043d\u0435\u043a\u0438\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\n  // objRef - \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043e\u0431\u044a\u0435\u043a\u0442 obj, \u043f\u0440\u0438\u0447\u0435\u043c \u0435\u0441\u043b\u0438 \u0441\u0430\u043c\u0430 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 obj \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0430\u0441\u044c, \u043d\u043e\n  // \u0441\u0430\u043c obj \u043e\u0441\u0442\u0430\u043b\u0441\u044f shallowEqual \u043a \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u043c\u0443, \u0442\u043e objRef \u0431\u0443\u0434\u0435\u0442 \u0441\u0441\u044b\u043b\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u044d\u0442\u043e\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\n  const objRef = useShallowEqual(obj);\n\n  useEffect(() => {\n    // \u044f\u0432\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c obj \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 deps \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e react \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\n    // deps \u0441\u043e \u0441\u0442\u0440\u043e\u0433\u0438\u043c \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435\u043c \u0441\u0441\u044b\u043b\u043e\u043a, \u0447\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0432\u044b\u0437\u043e\u0432\u0443 \u0445\u0443\u043a\u0430 \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0435\n    // objRef \u0441\u0441\u044b\u043b\u043a\u0430 \u0436\u0435 \u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0435\u0441\u043b\u0438 \u043d\u043e\u0432\u044b\u0439 obj \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u043d\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u043c\n  }, [objRef]);\n}\n")))}f.isMDXComponent=!0}}]);