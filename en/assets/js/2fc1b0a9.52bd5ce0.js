(self.webpackChunk=self.webpackChunk||[]).push([[1870],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=a(r),u=o,d=m["".concat(l,".").concat(u)]||m[u]||f[u]||i;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2470:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>a,toc:()=>p,default:()=>m});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),s=["components"],c={id:"fix-ts-references",title:"@tinkoff-monorepo/fix-ts-references"},l=void 0,a={unversionedId:"references/tools/monorepo-tools/fix-ts-references",id:"references/tools/monorepo-tools/fix-ts-references",isDocsHomePage:!1,title:"@tinkoff-monorepo/fix-ts-references",description:"\u0412\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u043b\u0438\u043d\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0435\u0440\u043a\u0430\u043b\u044c\u043d\u043e \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u044b \u0432 tsconfig.references, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c tsc \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0438 \u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043e\u0442 \u043d\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0438 \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0438 \u0437\u0430 \u043e\u0434\u0438\u043d \u0432\u044b\u0437\u043e\u0432 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430.",source:"@site/tmp-docs/references/tools/monorepo-tools/fix-ts-references.md",sourceDirName:"references/tools/monorepo-tools",slug:"/references/tools/monorepo-tools/fix-ts-references",permalink:"/en/docs/references/tools/monorepo-tools/fix-ts-references",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tools/monorepo-tools/fix-ts-references.md",version:"current",frontMatter:{id:"fix-ts-references",title:"@tinkoff-monorepo/fix-ts-references"},sidebar:"docs",previous:{title:"Mocks",permalink:"/en/docs/references/test/test-mocks"},next:{title:"@tinkoff-monorepo/depscheck",permalink:"/en/docs/references/tools/monorepo-tools/depscheck"}},p=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0412\u0441\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u043b\u0438\u043d\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043c\u043e\u043d\u043e\u0440\u0435\u043f\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0435\u0440\u043a\u0430\u043b\u044c\u043d\u043e \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u044b \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.references"),", \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc")," \u0441\u043e\u0431\u0440\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0438 \u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043e\u0442 \u043d\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0438 \u0432 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0438 \u0437\u0430 \u043e\u0434\u0438\u043d \u0432\u044b\u0437\u043e\u0432 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u0430."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add fix-ts-references\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx fix-ts-references --fix\n")),(0,i.kt)("p",null,"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0441\u043a\u0440\u0438\u043f\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442:"),(0,i.kt)("p",null,"\u0421 \u0444\u043b\u0430\u0433\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"--fix"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0438\u0437 references \u043c\u043e\u0434\u0443\u043b\u044f \u0435\u0441\u043b\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0443\u0431\u0440\u0430\u043d\u0430 \u0438\u0437 ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")),(0,i.kt)("li",{parentName:"ol"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0432 references \u043c\u043e\u0434\u0443\u043b\u044f \u0435\u0441\u043b\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")),(0,i.kt)("li",{parentName:"ol"},"\u041f\u0440\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.compilerOptions.rootDir=./src")," \u0435\u0441\u043b\u0438 \u043d\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430"),(0,i.kt)("li",{parentName:"ol"},"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0438\u0437 reference solution'\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0435\u0441\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c \u0443\u0434\u0430\u043b\u0435\u043d \u0438\u0437 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u044f"),(0,i.kt)("li",{parentName:"ol"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0432 reference solution'\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0435\u0441\u043b\u0438 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439")),(0,i.kt)("p",null,"\u0411\u0435\u0437 \u0444\u043b\u0430\u0433\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"--fix")," \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043d\u0435\u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a"))}m.isMDXComponent=!0}}]);