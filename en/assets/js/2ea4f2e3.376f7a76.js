"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9717:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"meta-tags-generate",title:"meta-tags-generate"},s=void 0,c={unversionedId:"references/libs/meta-tags-generate",id:"references/libs/meta-tags-generate",title:"meta-tags-generate",description:"Library for generating and updating meta-tags in browser.",source:"@site/tmp-docs/references/libs/meta-tags-generate.md",sourceDirName:"references/libs",slug:"/references/libs/meta-tags-generate",permalink:"/en/docs/references/libs/meta-tags-generate",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/meta-tags-generate.md",tags:[],version:"current",frontMatter:{id:"meta-tags-generate",title:"meta-tags-generate"},sidebar:"docs",previous:{title:"Layout factory",permalink:"/en/docs/references/libs/layout-factory"},next:{title:"mocker",permalink:"/en/docs/references/libs/mocker"}},p=[{value:"Api",id:"api",children:[{value:"Format",id:"format",children:[],level:3},{value:"Converters",id:"converters",children:[],level:3},{value:"Sources",id:"sources",children:[],level:3}],level:2},{value:"How to",id:"how-to",children:[{value:"Set Meta",id:"set-meta",children:[],level:3},{value:"Remove meta parameters",id:"remove-meta-parameters",children:[],level:3}],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Library for generating and updating meta-tags in browser."),(0,i.kt)("h2",{id:"api"},"Api"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Meta({ list: [] }): Meta")," - object used for constructing an instance of meta-tags based on passed sources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Render(meta: Meta): { render(): string }")," - render of specific ",(0,i.kt)("em",{parentName:"li"},"Meta")," instance as a string. Used in SSR"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Update(meta: Meta): { update(): void }")," - updates meta-tags layout in browser. Used in browser while SPA-navigations")),(0,i.kt)("h3",{id:"format"},"Format"),(0,i.kt)("p",null,"Library accepts special parameters which are used to generate result html tags. These parameters have next format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  customTag: { tag: 'meta', attributes: { name: 'k', content: 'i' }, innerHtml: '1' }\n}\n")),(0,i.kt)("p",null,"thar renders in the next tag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<meta name="k" content="i">1</meta>\n')),(0,i.kt)("h3",{id:"converters"},"Converters"),(0,i.kt)("p",null,"Converters are used to convert meta-tags with specific keys in ",(0,i.kt)("a",{parentName:"p",href:"#format"},"format view")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"new Meta({ list, converters: { title: (value) => ({ tag: 'meta', innerHtml: value }) } });\n")),(0,i.kt)("p",null,"After that you now can pass meta as ",(0,i.kt)("inlineCode",{parentName:"p"},"{ title: '\u0422\u0438\u043d\u044c\u043a\u043e\u0444\u0444' }")," in order to render it through converter above."),(0,i.kt)("h3",{id:"sources"},"Sources"),(0,i.kt)("p",null,"Through options ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," can be passed sources for meta-tags generating. These sources have the form of function that are called in runtime for generating result render. E.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const list = [\n  (walker) =>\n    walker.updateMeta(10, {\n      title: 'test',\n      tag: { tag: 'meta', attributes: { link: 'link' } },\n    }),\n  (walker) =>\n    walker.updateMeta(20, {\n      title: 'tinkoff',\n      ogTitle: 'tinkoff',\n    }),\n];\nconst meta = new Meta({ list, converters });\n")),(0,i.kt)("p",null,"When generating meta tags all functions passed in ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," will be called with argument of class ",(0,i.kt)("inlineCode",{parentName:"p"},"Walker"),". Inside such function it is possible to modify data using method ",(0,i.kt)("inlineCode",{parentName:"p"},"updateMeta"),", which accepts the priority of the change and value. Elements with higher priority overrides values with lower priorities."),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("h3",{id:"set-meta"},"Set Meta"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Meta, Render, Update } from '@tinkoff/meta-tags-generate';\n\nconst list = [\n  (walker) =>\n    walker.updateMeta(10, {\n      title: 'test',\n      tag: { tag: 'meta', attributes: { link: 'link' } },\n    }),\n];\nconst meta = new Meta({ list, converters });\n\nconst metaContent = new Render(meta).render();\nconsole.log(metaContent); // > <title>test</title><meta link=link/>\n\nnew Update(meta).update(); // Removes all previous meta and adds new one\n")),(0,i.kt)("h3",{id:"remove-meta-parameters"},"Remove meta parameters"),(0,i.kt)("p",null,"In order to remove data just pass ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," as a value."),(0,i.kt)("p",null,"E.g. if you want to remove ",(0,i.kt)("inlineCode",{parentName:"p"},"keywords")," meta:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"(walker) =>\n  walker.updateMeta(30, {\n    keywords: null,\n  });\n")),(0,i.kt)("p",null,"After that specified meta tag will be remove"))}u.isMDXComponent=!0}}]);