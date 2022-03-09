"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[249],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),l=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return a.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=l(t),f=n,u=g["".concat(i,".").concat(f)]||g[f]||m[f]||o;return t?a.createElement(u,c(c({ref:r},s),{},{components:t})):a.createElement(u,c({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=g;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<o;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2565:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>l,toc:()=>s,default:()=>g});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),c=["components"],p={},i=void 0,l={unversionedId:"references/libs/package-manager-wrapper",id:"references/libs/package-manager-wrapper",title:"package-manager-wrapper",description:"A wrapper for javascript package manager.",source:"@site/tmp-docs/references/libs/package-manager-wrapper.md",sourceDirName:"references/libs",slug:"/references/libs/package-manager-wrapper",permalink:"/docs/references/libs/package-manager-wrapper",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/package-manager-wrapper.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"monkeypatch",permalink:"/docs/references/libs/monkeypatch"},next:{title:"prettier",permalink:"/docs/references/libs/prettier"}},s=[{value:"How To",id:"how-to",children:[{value:"Get project package manager",id:"get-project-package-manager",children:[],level:3}],level:2}],m={toc:s};function g(e){var r=e.components,t=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A wrapper for javascript package manager."),(0,o.kt)("h2",{id:"how-to"},"How To"),(0,o.kt)("h3",{id:"get-project-package-manager"},"Get project package manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { resolvePackageManager } from '@tinkoff/package-manager-wrapper';\n\nconst packageManager = resolvePackageManager({ rootDir: process.cwd() });\n\npackageManager.install();\n")))}g.isMDXComponent=!0}}]);