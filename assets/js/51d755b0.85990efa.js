"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=o,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3348:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>d,default:()=>c});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],p={id:"add-page",title:"Add new page"},l=void 0,s={unversionedId:"tutorials/pokedex-app/add-page",id:"tutorials/pokedex-app/add-page",title:"Add new page",description:"tramvai supports file-system based routing.",source:"@site/tmp-docs/tutorials/pokedex-app/02-add-page.md",sourceDirName:"tutorials/pokedex-app",slug:"/tutorials/pokedex-app/add-page",permalink:"/docs/tutorials/pokedex-app/add-page",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/tutorials/pokedex-app/02-add-page.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"add-page",title:"Add new page"},sidebar:"sidebar",previous:{title:"Create application",permalink:"/docs/tutorials/pokedex-app/new-app"},next:{title:"Create HTTP client",permalink:"/docs/tutorials/pokedex-app/create-http-client"}},d=[],m={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," supports file-system based routing.\nDetailed documentation is available in ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/routing/file-system-pages"},"File-System Pages")," section."),(0,r.kt)("p",null,"In this tutorial we will use the automatic way of generating new routes in the application, for which you only need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," page component, following the naming conventions."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In addition to automatic routes generation, there are several more flexible options for adding pages to the application, but requiring more manual work.\nIn this tutorial we use the simplest and most convenient option."))),(0,r.kt)("p",null,"Let's take a more detailed look at routing, taking the main page of our ",(0,r.kt)("inlineCode",{parentName:"p"},"Pokedex")," - the page with the list of pokemon - as an example."),(0,r.kt)("p",null,"The page available on the url ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/")," is located in the component ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/index.tsx"),".\nBy default, all ",(0,r.kt)("inlineCode",{parentName:"p"},"react")," components in the ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," folder are interpreted as application routes, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," route will be generated based on the component named ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/index.tsx"),"."),(0,r.kt)("p",null,"\u231b Replace the contents of the home page component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{11} title="routes/index.tsx"',"{11}":!0,title:'"routes/index.tsx"'},"import React from 'react';\n\nexport const PokemonList = () => {\n  return <>Hi! This is PokemonList component :)</>;\n};\n\nexport default PokemonList;\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You need to use default export to be able to extract the page component into a separate chunk, and load it by demand"))),(0,r.kt)("p",null,"Module ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/modules/router/base"},"@tramvai/module-router")," is responsible for routing and automatically adding file-system based routes to the application."),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"PokemonList")," page is now registered in the app, and it will be automatically rendered on the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," route, and available on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),"!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/tutorials/pokedex-app/create-http-client"},"Next lesson"))))}c.isMDXComponent=!0}}]);