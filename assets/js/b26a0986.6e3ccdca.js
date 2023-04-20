"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4736],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],p={title:"@tramvai/papi",sidebar_position:4},l=void 0,c={unversionedId:"references/tramvai/papi",id:"references/tramvai/papi",title:"@tramvai/papi",description:"Library for creating and working with papi handlers.",source:"@site/tmp-docs/references/tramvai/papi.md",sourceDirName:"references/tramvai",slug:"/references/tramvai/papi",permalink:"/docs/references/tramvai/papi",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tramvai/papi.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"@tramvai/papi",sidebar_position:4},sidebar:"sidebar",previous:{title:"@tramvai/react",permalink:"/docs/references/tramvai/react"},next:{title:"@tramvai/react-query",permalink:"/docs/references/tramvai/react-query"}},s={},m=[{value:"Installation",id:"installation",level:2},{value:"Explanation",id:"explanation",level:2}],u={toc:m};function f(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Library for creating and working with papi handlers."),(0,i.kt)("p",null,"Complete information about papi feature you can find ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/papi"},"here")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"You need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/papi")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx tramvai add @tramvai/papi\n")),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("p",null,"Library mostly provides strong typings to papi handlers and most of the logic of integration it to the tramvai app is done by ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/modules/server"},"@tramvai/module-server")))}f.isMDXComponent=!0}}]);