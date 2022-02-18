"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4161],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,u=d["".concat(s,".").concat(m)]||d[m]||f[m]||i;return t?n.createElement(u,a(a({ref:r},p),{},{components:t})):n.createElement(u,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4068:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>d});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={},s=void 0,c={unversionedId:"references/tools/monorepo/fix-ts-references",id:"references/tools/monorepo/fix-ts-references",title:"fix-ts-references",description:"All of the dependencies for linked packages in monorepo should be specified in tsconfig.references file in order to let tsc to build packages and their dependencies in the right order within single compilation pass.",source:"@site/tmp-docs/references/tools/monorepo/fix-ts-references.md",sourceDirName:"references/tools/monorepo",slug:"/references/tools/monorepo/fix-ts-references",permalink:"/docs/references/tools/monorepo/fix-ts-references",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tools/monorepo/fix-ts-references.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"depscheck",permalink:"/docs/references/tools/monorepo/depscheck"},next:{title:"pkgs-collector-dir",permalink:"/docs/references/tools/monorepo/pkgs-collector-dir"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],f={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All of the dependencies for linked packages in monorepo should be specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.references")," file in order to let ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc")," to build packages and their dependencies in the right order within single compilation pass."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add fix-ts-references\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx fix-ts-references --fix\n")),(0,i.kt)("p",null,"Script will do next:"),(0,i.kt)("p",null,"With flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--fix"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Remove references from references list for package if dependency has been removed from ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")),(0,i.kt)("li",{parentName:"ol"},"Add new references to references list for package if dependency has been added to ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")),(0,i.kt)("li",{parentName:"ol"},"Setting ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.compilerOptions.rootDir=./src")," if it is not set"),(0,i.kt)("li",{parentName:"ol"},"Remove reference from project reference solution if package has been removed from repository"),(0,i.kt)("li",{parentName:"ol"},"Add reference to project reference solution if package has been added to the repository")),(0,i.kt)("p",null,"Without flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--fix")," will just show list of errors"))}d.isMDXComponent=!0}}]);