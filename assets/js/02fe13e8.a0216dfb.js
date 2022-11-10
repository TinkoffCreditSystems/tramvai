"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9073],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||r;return n?o.createElement(d,l(l({ref:t},s),{},{components:n})):o.createElement(d,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],i={id:"how-create-async-component",title:"How to split a component into an asynchronous chunk?"},c=void 0,p={unversionedId:"how-to/how-create-async-component",id:"how-to/how-create-async-component",title:"How to split a component into an asynchronous chunk?",description:"tramvai supports splitting components into asynchronous chunks with rendering on the server and hydration on the client, using @tramvai/react",source:"@site/tmp-docs/how-to/how-create-async-component.md",sourceDirName:"how-to",slug:"/how-to/how-create-async-component",permalink:"/docs/how-to/how-create-async-component",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/how-create-async-component.md",tags:[],version:"current",frontMatter:{id:"how-create-async-component",title:"How to split a component into an asynchronous chunk?"},sidebar:"sidebar",previous:{title:"How to create an action?",permalink:"/docs/how-to/how-create-action"},next:{title:"How to create a bundle?",permalink:"/docs/how-to/how-create-bundle"}},s={},m=[{value:"Component example",id:"component-example",level:2},{value:"Connecting the lazy",id:"connecting-the-lazy",level:2},{value:"Result",id:"result",level:2}],u={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"tramvai supports splitting components into asynchronous chunks with rendering on the server and hydration on the client, using ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/tramvai/react#lazy"},(0,r.kt)("inlineCode",{parentName:"a"},"@tramvai/react"))),(0,r.kt)("h2",{id:"component-example"},"Component example"),(0,r.kt)("p",null,"Let's say we have a heavy React component that we use occasionally and we want to load it only when needed.\nRight now we have the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// file heavy.tsx\nexport const Heavy = () => <div>123</div>;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// file page.tsx\nimport Heavy from './heavy.tsx';\n\nconst Page = () => (\n  <>\n    <Heavy />\n    <Footer />\n  </>\n);\n")),(0,r.kt)("h2",{id:"connecting-the-lazy"},"Connecting the lazy"),(0,r.kt)("p",null,"There are several ways to split the component into asynchronous chunks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add new wrapper for ",(0,r.kt)("inlineCode",{parentName:"li"},"heavy")," into ",(0,r.kt)("inlineCode",{parentName:"li"},"page.tsx"),"."),(0,r.kt)("li",{parentName:"ul"},"Put ",(0,r.kt)("inlineCode",{parentName:"li"},"heavy")," code into a separate file and leave only async wrapper in ",(0,r.kt)("inlineCode",{parentName:"li"},"heavy.tsx"),".")),(0,r.kt)("p",null,"We'll create a new file, as this allows us not to change imports in files that have already used the ",(0,r.kt)("inlineCode",{parentName:"p"},"Heavy")," component. And it will be harder to forget to reuse the async component in the future:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// file heavy-component.tsx\nexport const Heavy = () => <div>123</div>;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// file heavy.tsx\nimport { lazy } from '@tramvai/react';\n\nexport const Heavy = lazy(() => import('./heavy-component'));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"// file page.tsx\nimport Heavy from './heavy.tsx';\n\nconst Page = () => (\n  <>\n    <Heavy />\n    <Footer />\n  </>\n);\n")),(0,r.kt)("p",null,"We created a new file, put all the code of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Heavy")," component there, and left only the component itself in the old file, which we wrapped in ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," and imported the original component with ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),". Now instead of the original ",(0,r.kt)("inlineCode",{parentName:"p"},"Heavy")," component we will have an asynchronous version which we will load only when rendering the ",(0,r.kt)("inlineCode",{parentName:"p"},"Page")," component."),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Heavy")," component will be loaded by demand"),(0,r.kt)("p",null,"Next, the component will be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatically put in a separate webpack chunk"),(0,r.kt)("li",{parentName:"ul"},"When rendering, SSR will automatically download the file and immediately render it on the server"),(0,r.kt)("li",{parentName:"ul"},"JS and CSS of the chunk will be inserted into the HTML with maximum priority"),(0,r.kt)("li",{parentName:"ul"},"It will work seamlessly in the browser")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/how-to/ssr-async-components"},"Example of work in a test application")))}h.isMDXComponent=!0}}]);