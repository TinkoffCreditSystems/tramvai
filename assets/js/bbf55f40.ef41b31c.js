"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),l=n(6010),i=n(2389),o=n(7392),u=n(7094),s=n(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n,i=e.lazy,p=e.block,d=e.defaultValue,f=e.values,v=e.groupId,h=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),E=T.tabGroupChoices,O=T.setTabGroupChoices,w=(0,a.useState)(k),N=w[0],q=w[1],I=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var _=E[v];null!=_&&_!==N&&y.some((function(e){return e.value===_}))&&q(_)}var C=function(e){var t=e.currentTarget,n=I.indexOf(t),r=y[n].value;r!==N&&(x(t),q(r),null!=v&&O(v,String(r)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=I.indexOf(e.currentTarget)+1;n=null!=(r=I[a])?r:I[0];break;case"ArrowLeft":var l,i=I.indexOf(e.currentTarget)-1;n=null!=(l=I[i])?l:I[I.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return I.push(e)},onKeyDown:S,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},4545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=n(5488),o=n(5162),u=["components"],s={},c=void 0,m={unversionedId:"references/modules/request-limiter",id:"references/modules/request-limiter",title:"request-limiter",description:"This module provides a request limiter, designed to dynamically limit the number of requests handled concurrently by the application.",source:"@site/tmp-docs/references/modules/request-limiter.md",sourceDirName:"references/modules",slug:"/references/modules/request-limiter",permalink:"/docs/references/modules/request-limiter",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/request-limiter.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"render",permalink:"/docs/references/modules/render"},next:{title:"base",permalink:"/docs/references/modules/router/base"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Turn off request limiter",id:"turn-off-request-limiter",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Explanation",id:"explanation",level:2}],f={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This module provides a request limiter, designed to dynamically limit the number of requests handled concurrently by the application.\nRequest limiter monitors the application server health through event loop lag checks. "),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"You need to install ",(0,l.kt)("inlineCode",{parentName:"p"},"@tramvai/module-request-limiter")),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/module-request-limiter\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/module-request-limiter\n")))),(0,l.kt)("p",null,"And connect in the project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { RequestLimiterModule } from '@tramvai/module-request-limiter';\n\ncreateApp({\n  name: 'tincoin',\n  modules: [ RequestLimiterModule ],\n});\n")),(0,l.kt)("p",null,"Request Limiter automatically starts working"),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"turn-off-request-limiter"},"Turn off request limiter"),(0,l.kt)("p",null,"To turn off the limiter, use token ",(0,l.kt)("inlineCode",{parentName:"p"},"REQUESTS_LIMITER_ACTIVATE_TOKEN")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { REQUESTS_LIMITER_ACTIVATE_TOKEN } from '@tramvai/module-request-limiter';\n\nconst provider = {\n  provide: REQUESTS_LIMITER_ACTIVATE_TOKEN,\n  useValue: false,\n};\n")),(0,l.kt)("h3",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"You can pass options to request limiter by ",(0,l.kt)("inlineCode",{parentName:"p"},"REQUESTS_LIMITER_OPTIONS_TOKEN")," token:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { REQUESTS_LIMITER_OPTIONS_TOKEN } from '@tramvai/module-request-limiter';\n\nconst provider = {\n  provide: REQUESTS_LIMITER_OPTIONS_TOKEN,\n  // default options\n  useValue: {\n    limit: 10,\n    queue: 100,\n    maxEventLoopDelay: 150,\n    error: { httpStatus: 429, message: 'Too Many Requests' },\n  },\n};\n")),(0,l.kt)("p",null,"The basic settings should work well for most applications, as there is a system built in to adapt and automatically change the parameters relative to the loads. As a result, change the settings after you have done a load test and know that the changes will definitely improve the situation"),(0,l.kt)("h2",{id:"explanation"},"Explanation"),(0,l.kt)("p",null,"After the server starts, request limiter can handle ",(0,l.kt)("inlineCode",{parentName:"p"},"options.limit")," parallel connections.\nRequests over this limit will fall in queue, the size of which limited by ",(0,l.kt)("inlineCode",{parentName:"p"},"options.queue"),".\nOther connections that exceed the size of the queue will be terminated with an error ",(0,l.kt)("inlineCode",{parentName:"p"},"options.error"),"."),(0,l.kt)("p",null,"Requests from queue will be processed from the end of the queue. "),(0,l.kt)("p",null,"Every second limiter checking the current event loop lag.\nIf current lag exceed the ",(0,l.kt)("inlineCode",{parentName:"p"},"options.maxEventLoopDelay"),", limit number of parallel connections will be decremented.\nOtherwise, this limit will be incremented."))}v.isMDXComponent=!0}}]);