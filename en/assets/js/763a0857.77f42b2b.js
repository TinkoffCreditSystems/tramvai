(self.webpackChunk=self.webpackChunk||[]).push([[3615],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,v=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return r?n.createElement(v,i(i({ref:t},m),{},{components:r})):n.createElement(v,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8494:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>s,toc:()=>m,default:()=>u});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],c={id:"check-versions",title:"@tramvai/tools-check-versions"},l=void 0,s={unversionedId:"references/tools/check-versions",id:"references/tools/check-versions",isDocsHomePage:!1,title:"@tramvai/tools-check-versions",description:"\u041f\u0440\u0438 \u043d\u0435\u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0438 \u0432\u0435\u0440\u0441\u0438\u0439 \u0442\u0440\u0430\u043c\u0432\u0430\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0433\u0443\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u043d\u0435\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u044d\u0442\u0430 \u0442\u0443\u043b\u0437\u0430.",source:"@site/tmp-docs/references/tools/check-versions.md",sourceDirName:"references/tools",slug:"/references/tools/check-versions",permalink:"/en/docs/references/tools/check-versions",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tools/check-versions.md",version:"current",frontMatter:{id:"check-versions",title:"@tramvai/tools-check-versions"},sidebar:"docs",previous:{title:"@tramvai/tools-migrate",permalink:"/en/docs/references/tools/migrate"},next:{title:"Contribute",permalink:"/en/docs/community/contribute"}},m=[{value:"Prerelease \u0432\u0435\u0440\u0441\u0438\u0438",id:"prerelease-\u0432\u0435\u0440\u0441\u0438\u0438",children:[]},{value:"\u041f\u0430\u0442\u0442\u0435\u0440\u043d\u044b \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",id:"\u043f\u0430\u0442\u0442\u0435\u0440\u043d\u044b-\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439",children:[]}],p={toc:m};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u043d\u0435\u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0438 \u0432\u0435\u0440\u0441\u0438\u0439 \u0442\u0440\u0430\u043c\u0432\u0430\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0433\u0443\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u044b \u043d\u0435\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u044d\u0442\u0430 \u0442\u0443\u043b\u0437\u0430."),(0,a.kt)("p",null,"\u0422\u0443\u043b\u0437\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0447\u0442\u043e \u0432 \u0445\u043e\u0441\u0442\u043e\u0432\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0432\u0441\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0442\u0440\u0430\u043c\u0432\u0430\u0439 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0432 package.json \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442."),(0,a.kt)("p",null,"\u0410\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f package.json \u0432 \u0445\u043e\u0441\u0442\u043e\u0432\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0438 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u0438 \u043f\u0440\u0438 \u043d\u0435\u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0438 \u0432\u0435\u0440\u0441\u0438\u0439 \u0432\u044b\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "@tramvai/core": "0.5.0", // \u0441\u0430\u043c\u0430\u044f \u0441\u0432\u0435\u0436\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f, \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438\n  "@tramvai/module-common": "0.4.2",\n  "@tramvai/module-router": "0.4.2",\n  "@tramvai/state": "0.4.2",\n}\n')),(0,a.kt)("h2",{id:"prerelease-\u0432\u0435\u0440\u0441\u0438\u0438"},"Prerelease \u0432\u0435\u0440\u0441\u0438\u0438"),(0,a.kt)("p",null,"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c prerelease \u0432\u0435\u0440\u0441\u0438\u0438 tramvai \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u0430,\n\u043f\u0440\u0438\u043c\u0435\u0440 \u0432\u0430\u043b\u0438\u0434\u043d\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n    "@tramvai/core": "0.5.0-rc.2", // release candidate \u0432\u0435\u0440\u0441\u0438\u044f, \u0432\u044b\u0448\u0435 \u043f\u043e SemVer \u0447\u0435\u043c \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u043e\u0448\u0438\u0431\u043e\u043a \u043d\u0435 \u0431\u0443\u0434\u0435\u0442\n    "@tramvai/module-common": "0.4.2",\n    "@tramvai/module-router": "0.4.2",\n    "@tramvai/state": "0.4.2",\n}\n')),(0,a.kt)("h2",{id:"\u043f\u0430\u0442\u0442\u0435\u0440\u043d\u044b-\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"},"\u041f\u0430\u0442\u0442\u0435\u0440\u043d\u044b \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/^@tramvai\\/core$/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/^@tramvai\\/module-/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/^@tramvai-tinkoff\\/module-/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/^@tramvai\\/tokens-/"))))}u.isMDXComponent=!0}}]);