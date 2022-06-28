"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5090:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>d});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},c=void 0,p={unversionedId:"references/tools/nx-plugin",id:"references/tools/nx-plugin",title:"nx-plugin",description:"This library was generated with Nx.",source:"@site/tmp-docs/references/tools/nx-plugin.md",sourceDirName:"references/tools",slug:"/references/tools/nx-plugin",permalink:"/docs/references/tools/nx-plugin",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tools/nx-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"migrate",permalink:"/docs/references/tools/migrate"},next:{title:"public-packages",permalink:"/docs/references/tools/public-packages"}},u=[{value:"Building",id:"building",children:[],level:2},{value:"API",id:"api",children:[{value:"Generate project.json",id:"generate-projectjson",children:[],level:3},{value:"Build package",id:"build-package",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This library was generated with ",(0,i.kt)("a",{parentName:"p",href:"https://nx.dev"},"Nx"),"."),(0,i.kt)("h2",{id:"building"},"Building"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"nx build tools-nx-build")," to build the library."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"generate-projectjson"},"Generate project.json"),(0,i.kt)("p",null,"Run command ",(0,i.kt)("inlineCode",{parentName:"p"},"nx g @tramvai/nx-plugin:project")," to generate ",(0,i.kt)("inlineCode",{parentName:"p"},"project.json")," to every publishable package in workspace"),(0,i.kt)("h3",{id:"build-package"},"Build package"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run command ",(0,i.kt)("inlineCode",{parentName:"li"},"nx run <package_name>:build-publish")," to build specific package"),(0,i.kt)("li",{parentName:"ul"},"Run command ",(0,i.kt)("inlineCode",{parentName:"li"},"nx run-many --target=build-publish --all")," to build all packages in workspace")))}d.isMDXComponent=!0}}]);