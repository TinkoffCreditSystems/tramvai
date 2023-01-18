"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,b=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(b,i(i({ref:t},d),{},{components:n})):o.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(6010);const r="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(7462),a=n(7294),r=n(6010),i=n(2389),s=n(7392),l=n(7094),u=n(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,m=e.defaultValue,b=e.values,k=e.groupId,y=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=b?b:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,x=(0,a.useState)(h),O=x[0],C=x[1],E=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=w[k];null!=j&&j!==O&&v.some((function(e){return e.value===j}))&&C(j)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),o=v[n].value;o!==O&&(S(t),C(o),null!=k&&T(k,String(o)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,a=E.indexOf(e.currentTarget)+1;n=null!=(o=E[a])?o:E[0];break;case"ArrowLeft":var r,i=E.indexOf(e.currentTarget)-1;n=null!=(r=E[i])?r:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:I,onFocus:P,onClick:P},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,i.Z)();return a.createElement(c,(0,o.Z)({key:String(t)},e))}},1934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=n(5488),s=n(5162),l=["components"],u={id:"storybook",title:"Storybook integration"},d=void 0,p={unversionedId:"guides/storybook",id:"guides/storybook",title:"Storybook integration",description:"Introduction",source:"@site/tmp-docs/guides/storybook.md",sourceDirName:"guides",slug:"/guides/storybook",permalink:"/docs/guides/storybook",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/guides/storybook.md",tags:[],version:"current",frontMatter:{id:"storybook",title:"Storybook integration"},sidebar:"sidebar",previous:{title:"Error Boundaries",permalink:"/docs/guides/error-boundary"},next:{title:"Strong typing",permalink:"/docs/guides/strong-typing"}},c={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Adding Storybook",id:"adding-storybook",level:2},{value:"@tramvai/storybook-addon installation",id:"tramvaistorybook-addon-installation",level:2},{value:"Page story creation",id:"page-story-creation",level:2}],b={toc:m};function k(e){var t=e.components,u=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," provides addon with deep Storybook integration - ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/tramvai/storybook-addon"},"@tramvai/storybook-addon"),".\nThis integration includes build configuration as close as possible to the real ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," behaviour and supports for all ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," specific React providers."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This guide is based on an application generated through ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai new {{appName}}"),", the integration in each case may be slightly different.")),(0,r.kt)("h2",{id:"adding-storybook"},"Adding Storybook"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Storybook has many dependencies that may conflict with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," dependencies, ",(0,r.kt)("strong",{parentName:"p"},"so we strongly recommend to install Storybook at the different folder in your repositiry"),".")),(0,r.kt)("p",null,"\u231b Create a new directory for Storybook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir storybook && cd storybook\n")),(0,r.kt)("p",null,"\u231b Initialize Storybook inside this directory (with ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack5")," builder):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx sb init --type webpack_react --builder webpack5\n")),(0,r.kt)("p",null,"\u231b Install ",(0,r.kt)("inlineCode",{parentName:"p"},"postcss")," inside this directory (required package):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev postcss\n")),(0,r.kt)("h2",{id:"tramvaistorybook-addon-installation"},"@tramvai/storybook-addon installation"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The components in the application and the Storybook must have the same React context.\nFor this reason, we must ",(0,r.kt)("strong",{parentName:"p"},"not have")," ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," dependencies duplicates.\nTo prevent problems with duplicates, ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/storybook-addon")," should be installed in the root of the project, not in the ",(0,r.kt)("inlineCode",{parentName:"p"},"storybook")," folder.\nWhen running, Storybook will still find the addon because of the module resolution algorithm in NodeJS.")),(0,r.kt)("p",null,"\u231b Back to the root folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ../\n")),(0,r.kt)("p",null,"\u231b Install ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/storybook-addon"),":"),(0,r.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @tramvai/storybook-addon\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/storybook-addon\n")))),(0,r.kt)("p",null,"\u231b connect addon in the configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="storybook/.storybook/main.js"',title:'"storybook/.storybook/main.js"'},'  "stories": [\n    "../stories/**/*.stories.mdx",\n    "../stories/**/*.stories.@(js|jsx|ts|tsx)"\n  ],\n  "addons": [\n    "@storybook/addon-links",\n    "@storybook/addon-essentials",\n    "@storybook/addon-interactions",\n    // highlight-next-line\n    "@tramvai/storybook-addon"\n  ],\n  "framework": "@storybook/react",\n  "core": {\n    "builder": "@storybook/builder-webpack5"\n  }\n}\n')),(0,r.kt)("h2",{id:"page-story-creation"},"Page story creation"),(0,r.kt)("p",null,"\u231b Create story for main page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="storybook/stories/pages/main.stories.tsx"',title:'"storybook/stories/pages/main.stories.tsx"'},"import type { TramvaiStoriesParameters } from '@tramvai/storybook-addon';\nimport Main from '../../../src/routes/index';\n\nconst parameters: TramvaiStoriesParameters = {};\n\nexport default {\n  title: 'Pages/Main',\n  component: Main,\n  parameters,\n};\n\nexport const MainPage = () => <Main />;\n")),(0,r.kt)("p",null,"\u231b Run Storybook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd storybook && npm run storybook\n")),(0,r.kt)("p",null,"And you can see a Main page story at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:6006/?path=/story/pages-main--main-page"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Main page story",src:n(3026).Z,width:"1756",height:"1292"})),(0,r.kt)("p",null,"You can find more examples in ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/tramvai/storybook-addon#how-to"},"@tramvai/storybook-addon documentation"),"."))}k.isMDXComponent=!0},3026:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/storybook-1-58560ecb5b9af4990181735cfea274d9.png"}}]);