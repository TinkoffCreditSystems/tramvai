"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9841],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8215:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294);const a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(7462),a=t(7294),i=t(2389),o=t(5773),l=t(6010);const s="tabItem_LplD";function d(e){var n,t,i,d=e.lazy,u=e.block,p=e.defaultValue,c=e.values,m=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,o.UB)(),y=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,a.useState)(g),x=N[0],C=N[1],T=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==x&&v.some((function(e){return e.value===O}))&&C(O)}var S=function(e){var n=e.currentTarget,t=T.indexOf(n),r=v[t].value;r!==x&&(E(n),C(r),null!=m&&w(m,r))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:S,onClick:S},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),d?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function u(e){var n=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},1566:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>d,contentTitle:()=>u,metadata:()=>p,toc:()=>c,default:()=>h});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(9877),l=t(8215),s=["components"],d={},u=void 0,p={unversionedId:"references/modules/client-hints",id:"references/modules/client-hints",title:"client-hints",description:"Modules provides various parameters from the client device, e.g. type of the device, screen size, etc.",source:"@site/tmp-docs/references/modules/client-hints.md",sourceDirName:"references/modules",slug:"/references/modules/client-hints",permalink:"/docs/references/modules/client-hints",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/client-hints.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"child-app",permalink:"/docs/references/modules/child-app"},next:{title:"common",permalink:"/docs/references/modules/common"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Explanation",id:"explanation",children:[{value:"The problem with media on server and on client",id:"the-problem-with-media-on-server-and-on-client",children:[],level:3},{value:"How does it work",id:"how-does-it-work",children:[{value:"First page loading",id:"first-page-loading",children:[],level:4},{value:"Next page loads",id:"next-page-loads",children:[],level:4},{value:"Use ClientHints in component",id:"use-clienthints-in-component",children:[],level:4}],level:3}],level:2},{value:"Api",id:"api",children:[{value:"Stores",id:"stores",children:[{value:"userAgent",id:"useragent",children:[],level:4},{value:"media",id:"media",children:[],level:4}],level:3},{value:"media helpers",id:"media-helpers",children:[],level:3}],level:2},{value:"How to",id:"how-to",children:[{value:"Render skeleton only when user loads pages first time",id:"render-skeleton-only-when-user-loads-pages-first-time",children:[],level:3},{value:"Render adaptive component on first time and on subsequent loads render specific component",id:"render-adaptive-component-on-first-time-and-on-subsequent-loads-render-specific-component",children:[],level:3}],level:2},{value:"Exported tokens",id:"exported-tokens",children:[{value:"USER_AGENT_TOKEN",id:"user_agent_token",children:[],level:3}],level:2}],m={toc:c};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Modules provides various parameters from the client device, e.g. type of the device, screen size, etc."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"First, install ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/module-client-hints")),(0,i.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save @tramvai/module-client-hints\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn i --save @tramvai/module-client-hints\n# couldn't auto-convert command\n")))),(0,i.kt)("p",null,"Then add ",(0,i.kt)("inlineCode",{parentName:"p"},"ClientHintsModule")," to the modules list"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { ClientHintsModule } from '@tramvai/module-client-hints';\n\ncreateApp({\n  modules: [ClientHintsModule],\n});\n")),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("h3",{id:"the-problem-with-media-on-server-and-on-client"},"The problem with media on server and on client"),(0,i.kt)("p",null,"One of the SSR problem is render of the component which depends of current screen size, e.g. image carousel that should render specific number of images depending of screen width. By default, the exact screen size can be figured out only on client-side and we can't render such content on server identical to the client render. If this content is not important for the SEO we can use skeletons and spinners, but they are not suitable for every case."),(0,i.kt)("p",null,"Client Hints modules provides the way to solve this problem in some way. It stores data about client devices in cookies and then use this cookies on server in next page loading."),(0,i.kt)("h3",{id:"how-does-it-work"},"How does it work"),(0,i.kt)("h4",{id:"first-page-loading"},"First page loading"),(0,i.kt)("p",null,"When user enters the app for the first time module tries to determine type of the user device using user-agent string. Then it saves this ",(0,i.kt)("strong",{parentName:"p"},"assumptive")," data to ",(0,i.kt)("inlineCode",{parentName:"p"},"media")," store. E.g. when user loads page from the desktop, then content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"media")," store will be following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const state = {\n  width: 1024,\n  height: 768,\n  isTouch: false,\n  retina: false,\n  supposed: true,\n  synchronized: false,\n};\n")),(0,i.kt)("p",null,"On the client focusing on value ",(0,i.kt)("inlineCode",{parentName:"p"},"supposed: true")," module resolves ",(0,i.kt)("strong",{parentName:"p"},"real")," info about client device, updates ",(0,i.kt)("inlineCode",{parentName:"p"},"media")," store and calls the rerender for the dependent components. E.g. for the widescreen monitor the data of ",(0,i.kt)("inlineCode",{parentName:"p"},"media")," store might be next:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const state = {\n  width: 1920,\n  height: 1080,\n  isTouch: false,\n  retina: true,\n  supposed: false,\n  synchronized: false,\n};\n")),(0,i.kt)("p",null,"While we have value ",(0,i.kt)("inlineCode",{parentName:"p"},"synchronized: false")," ",(0,i.kt)("strong",{parentName:"p"},"it is not allowed")," to use data from the ",(0,i.kt)("inlineCode",{parentName:"p"},"media")," store for on the server-side as data is not synchronized with the client and it will lead to page jumps when saving real data about device."),(0,i.kt)("h4",{id:"next-page-loads"},"Next page loads"),(0,i.kt)("p",null,"When user loads the app next time the data about user device will be read from cookies and value ",(0,i.kt)("inlineCode",{parentName:"p"},"synchronized")," will be set to true. This way on server and on client we will get the same content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"media")," store and no page rerenders on the client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const state = {\n  width: 1920,\n  height: 1080,\n  isTouch: false,\n  retina: true,\n  supposed: false,\n  synchronized: true,\n};\n")),(0,i.kt)("h4",{id:"use-clienthints-in-component"},"Use ClientHints in component"),(0,i.kt)("p",null,"If some component if depend of screen size:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When user loads app for the first time ",(0,i.kt)("strong",{parentName:"li"},"is not possible")," to guarantee the same exact render on server and client"),(0,i.kt)("li",{parentName:"ol"},"On first app load you may show some skeleton to the user by checking ",(0,i.kt)("inlineCode",{parentName:"li"},"supposed: true")," property"),(0,i.kt)("li",{parentName:"ol"},"You can guarantee the same exact render on server and client only in case ",(0,i.kt)("inlineCode",{parentName:"li"},"synchronized: true"))),(0,i.kt)("h2",{id:"api"},"Api"),(0,i.kt)("h3",{id:"stores"},"Stores"),(0,i.kt)("h4",{id:"useragent"},"userAgent"),(0,i.kt)("p",null,"Stores the result of the user-agent string parsing."),(0,i.kt)("h4",{id:"media"},"media"),(0,i.kt)("p",null,"Stores the media information about type and size of the client screen."),(0,i.kt)("h3",{id:"media-helpers"},"media helpers"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"media")," store has next data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type Media = {\n  width: number;\n  height: number;\n  isTouch: boolean;\n  retina: boolean;\n  supposed?: boolean;\n  synchronized?: boolean;\n};\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fromClientHints(media: Media): boolean")," - returns true if media data is synchronized on client and server"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isSupposed(media: Media): boolean")," - returns true if media data are determined on server by the user-agent string and will be changes on the client"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isRetina(media: Media): boolean")," - returns true if pixel density is equal to 2 or higher"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useMedia(): Media")," - returns current state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"media")," store"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useFromClientHints(): boolean")," - calculates fromClientHints"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useIsSupposed(): boolean")," - calculates isSupposed"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useIsRetina(): boolean")," - calculates isRetina"),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("h3",{id:"render-skeleton-only-when-user-loads-pages-first-time"},"Render skeleton only when user loads pages first time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  const isSupposed = useIsSupposed();\n\n  if (isSupposed) {\n    return <AdaptiveSliderSkeleton />;\n  }\n\n  return <AdaptiveSlider />;\n};\n")),(0,i.kt)("h3",{id:"render-adaptive-component-on-first-time-and-on-subsequent-loads-render-specific-component"},"Render adaptive component on first time and on subsequent loads render specific component"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = () => {\n  const media = useMedia();\n  const fromClientHints = useFromClientHints();\n\n  let Block = AdaptiveBlock;\n\n  if (fromClientHints) {\n    Block = media.width >= 1024 ? DesktopBlock : MobileBlock;\n  }\n\n  return <Block />;\n};\n")),(0,i.kt)("h2",{id:"exported-tokens"},"Exported tokens"),(0,i.kt)("h3",{id:"user_agent_token"},"USER_AGENT_TOKEN"),(0,i.kt)("p",null,"Object as a result of parsing user-agent string with ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/libs/user-agent"},"@tinkoff/user-agent"),". Parsing happens only on server-side and parsed info is reused on client-side."))}h.isMDXComponent=!0}}]);