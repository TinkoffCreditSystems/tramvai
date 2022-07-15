"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,v=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const o=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),o=n(7294),r=n(2389),i=n(5773),s=n(6010);const l="tabItem_LplD";function d(e){var t,n,r,d=e.lazy,p=e.block,c=e.defaultValue,u=e.values,m=e.groupId,v=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=u?u:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),f=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,o.useState)(y),x=w[0],T=w[1],O=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=f[m];null!=E&&E!==x&&b.some((function(e){return e.value===E}))&&T(E)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==x&&(C(t),T(a),null!=m&&N(m,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.currentTarget)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:j,onClick:j},r,{className:(0,s.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),d?(0,o.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},1934:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>d,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>v});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(9877),s=n(8215),l=["components"],d={id:"storybook",title:"Storybook integration"},p=void 0,c={unversionedId:"guides/storybook",id:"guides/storybook",title:"Storybook integration",description:"Introduction",source:"@site/tmp-docs/guides/storybook.md",sourceDirName:"guides",slug:"/guides/storybook",permalink:"/docs/guides/storybook",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/guides/storybook.md",tags:[],version:"current",frontMatter:{id:"storybook",title:"Storybook integration"},sidebar:"sidebar",previous:{title:"Error Boundaries",permalink:"/docs/guides/error-boundary"},next:{title:"Strong typing",permalink:"/docs/guides/strong-typing"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Adding Storybook",id:"adding-storybook",children:[],level:2},{value:"@tramvai/storybook-addon installation",id:"tramvaistorybook-addon-installation",children:[],level:2},{value:"Page story creation",id:"page-story-creation",children:[],level:2}],m={toc:u};function v(e){var t=e.components,d=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," provides addon with deep Storybook integration - ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/libs/storybook-addon"},"@tramvai/storybook-addon"),".\nThis integration includes build configuration as close as possible to the real ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," behaviour and supports for all ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," specific React providers."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This guide is based on an application generated through ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai new {{appName}}"),", the integration in each case may be slightly different."))),(0,r.kt)("h2",{id:"adding-storybook"},"Adding Storybook"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Storybook has many dependencies that may conflict with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," dependencies, ",(0,r.kt)("strong",{parentName:"p"},"so we strongly recommend to install Storybook at the different folder in your repositiry"),"."))),(0,r.kt)("p",null,"\u231b Create a new directory for Storybook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir storybook && cd storybook\n")),(0,r.kt)("p",null,"\u231b Initialize Storybook inside this directory (with ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack5")," builder):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx sb init --type webpack_react --builder webpack5\n")),(0,r.kt)("p",null,"\u231b Install ",(0,r.kt)("inlineCode",{parentName:"p"},"postcss")," inside this directory (required package):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev postcss\n")),(0,r.kt)("h2",{id:"tramvaistorybook-addon-installation"},"@tramvai/storybook-addon installation"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The components in the application and the Storybook must have the same React context.\nFor this reason, we must ",(0,r.kt)("strong",{parentName:"p"},"not have")," ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," dependencies duplicates.\nTo prevent problems with duplicates, ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/storybook-addon")," should be installed in the root of the project, not in the ",(0,r.kt)("inlineCode",{parentName:"p"},"storybook")," folder.\nWhen running, Storybook will still find the addon because of the module resolution algorithm in NodeJS."))),(0,r.kt)("p",null,"\u231b Back to the root folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../\n")),(0,r.kt)("p",null,"\u231b Install ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/storybook-addon"),":"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @tramvai/storybook-addon\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/storybook-addon\n")))),(0,r.kt)("p",null,"\u231b connect addon in the configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="storybook/.storybook/main.js"',title:'"storybook/.storybook/main.js"'},'  "stories": [\n    "../stories/**/*.stories.mdx",\n    "../stories/**/*.stories.@(js|jsx|ts|tsx)"\n  ],\n  "addons": [\n    "@storybook/addon-links",\n    "@storybook/addon-essentials",\n    "@storybook/addon-interactions",\n    // highlight-next-line\n    "@tramvai/storybook-addon"\n  ],\n  "framework": "@storybook/react",\n  "core": {\n    "builder": "@storybook/builder-webpack5"\n  }\n}\n')),(0,r.kt)("h2",{id:"page-story-creation"},"Page story creation"),(0,r.kt)("p",null,"\u231b Create story for main page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="storybook/stories/pages/main.stories.tsx"',title:'"storybook/stories/pages/main.stories.tsx"'},"import type { TramvaiStoriesParameters } from '@tramvai/storybook-addon';\nimport Main from '../../../src/routes/index';\n\nconst parameters: TramvaiStoriesParameters = {};\n\nexport default {\n  title: 'Pages/Main',\n  component: Main,\n  parameters,\n};\n\nexport const MainPage = () => <Main />;\n")),(0,r.kt)("p",null,"\u231b Run Storybook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd storybook && npm run storybook\n")),(0,r.kt)("p",null,"And you can see a Main page story at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:6006/?path=/story/pages-main--main-page"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Main page story",src:n(6779).Z,width:"1756",height:"1292"})),(0,r.kt)("p",null,"You can find more examples in ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/libs/storybook-addon#how-to"},"@tramvai/storybook-addon documentation"),"."))}v.isMDXComponent=!0},6779:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/storybook-1-58560ecb5b9af4990181735cfea274d9.png"}}]);