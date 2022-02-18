"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3943:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l=void 0,c={unversionedId:"references/tramvai/state/hooks",id:"references/tramvai/state/hooks",title:"hooks",description:"useActions",source:"@site/tmp-docs/references/tramvai/state/hooks.md",sourceDirName:"references/tramvai/state",slug:"/references/tramvai/state/hooks",permalink:"/docs/references/tramvai/state/hooks",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tramvai/state/hooks.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"dev-tools",permalink:"/docs/references/tramvai/state/dev-tools"},next:{title:"tramvai-integration",permalink:"/docs/references/tramvai/state/tramvai-integration"}},u=[{value:"useActions",id:"useactions",children:[{value:"Interface",id:"interface",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3}],level:2},{value:"useSelector ()",id:"useselector-",children:[{value:"Interface",id:"interface-1",children:[],level:3},{value:"Usage",id:"usage-1",children:[],level:3},{value:"Optimizations",id:"optimizations",children:[],level:3}],level:2},{value:"useStoreSelector",id:"usestoreselector",children:[{value:"Interface",id:"interface-2",children:[],level:3},{value:"Usage",id:"usage-2",children:[],level:3},{value:"Optimizations",id:"optimizations-1",children:[],level:3}],level:2},{value:"useStore",id:"usestore",children:[{value:"Interface",id:"interface-3",children:[],level:3},{value:"Usage",id:"usage-3",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"useactions"},"useActions"),(0,o.kt)("p",null,"Allows to execute tram ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/action"},"actions")," in React components"),(0,o.kt)("h3",{id:"interface"},"Interface"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"actions")," - one or an array of tram actions")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you pass an array to ",(0,o.kt)("inlineCode",{parentName:"p"},"useActions"),", for typing you need to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"as const")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"useActions([] as const)"))),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useActions } from '@tramvai/state';\nimport { loadUserAction, getInformationAction, setInformationAction } from './actions';\n\nexport const Component = () => {\n  // if you pass one action, the payload type for loadUser is automatically deduced\n  const loadUser = useActions(loadUserAction);\n\n  // if you pass a list of actions, `as const` is required for correct type inference\n  const [getInformation, setInformation] = useActions([\n    getInformationAction,\n    setInformationAction,\n  ] as const);\n\n  return (\n    <div>\n      <div onClick={loadUser}>load user</div>\n      <div onClick={getInformation}>get information</div>\n      <div onClick={() => setInformation({ user: 1 })}>set information</div>\n    </div>\n  );\n};\n")),(0,o.kt)("h2",{id:"useselector-"},"useSelector ()"),(0,o.kt)("p",null,"Receiving data from the store in components"),(0,o.kt)("h3",{id:"interface-1"},"Interface"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stores: []")," - a list of tokens that the selector will subscribe to. Will affect which store changes will trigger an update in the component"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"selector: (state) => any")," - the selector itself, this is a function that will be called upon initialization and any changes to the stores passed to ",(0,o.kt)("inlineCode",{parentName:"li"},"stores"),". The function should return data that can be used in the component"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"equalityFn?: (cur, prev) => boolean")," - optional function to change the way of comparing past and new values \u200b\u200bof a selector")),(0,o.kt)("h3",{id:"usage-1"},"Usage"),(0,o.kt)("p",null,"To get data from a store, you can use a store name, a reference to a store, or an object with an optional store:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'storeName'")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"storeObject")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{ store: storeObject, optional: true }")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{ store: 'storeName', optional: true }"))),(0,o.kt)("p",null,"You can pass an array of keys, then for correct type inference it is better to use ",(0,o.kt)("inlineCode",{parentName:"p"},"as const"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useSelector(['fooStoreName', barStoreObject] as const, ({ foo, bar }) => null)"),";")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSelector } from '@tramvai/state';\n\nexport const Component = () => {\n  const isBrowser = useSelector('media', (state) => state.media.isBrowser);\n\n  return <div>{isBrowser ? <span>Browser</span> : <span>Desktop</span>}</div>;\n};\n")),(0,o.kt)("h3",{id:"optimizations"},"Optimizations"),(0,o.kt)("p",null,"In order to reduce the number of component redrawings, after each call to ",(0,o.kt)("inlineCode",{parentName:"p"},"selector"),", the return values \u200b\u200bare checked against those that were before. If the returned selector data has not changed, then the component will not be redrawn."),(0,o.kt)("p",null,"For this reason, it is better to get small chunks of information in selectors. Then there is less chance that the component will be updated. For example: we need the user's ",(0,o.kt)("inlineCode",{parentName:"p"},"roles"),", we write a selector that requests all user data ",(0,o.kt)("inlineCode",{parentName:"p"},"(state) => state.user")," and now any changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," reducer will update the component. It is better if we receive only the necessary data ",(0,o.kt)("inlineCode",{parentName:"p"},"(state) => state.user.roles"),", in which case the component will be redrawn only when the user's ",(0,o.kt)("inlineCode",{parentName:"p"},"roles")," change"),(0,o.kt)("h2",{id:"usestoreselector"},"useStoreSelector"),(0,o.kt)("p",null,"A simplified version of the useSelector hook into which only one store can be passed, created via createReducer. It was made to improve the inference of selector types, since useSelector itself cannot do this due to the use of strings, tokens and BaseStore heirs inside string names"),(0,o.kt)("h3",{id:"interface-2"},"Interface"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"store: Reducer")," - Store created through createReducer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"selector: (state) => any")," - the selector itself, this is a function that will be called upon initialization and any changes to the store passed to ",(0,o.kt)("inlineCode",{parentName:"li"},"stores"),". The function should return data that can be used in the component")),(0,o.kt)("h3",{id:"usage-2"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStoreSelector } from '@tramvai/state';\nimport { createReducer } from '@tramvai/state';\n\nconst myStore = createReducer('myStore', { id: '123' });\n\nexport const Component = () => {\n  const id = useStoreSelector((myStore, (state) => state.id)); // The id type will be correctly inferred as \"string\"\n\n  return <div>{id}</div>;\n};\n")),(0,o.kt)("h3",{id:"optimizations-1"},"Optimizations"),(0,o.kt)("p",null,"The hook is a wrapper over useSelector, so the optimizations are the same. The selector function itself is memoized inside"),(0,o.kt)("h2",{id:"usestore"},"useStore"),(0,o.kt)("p",null,"Hook to get the state of a specific reducer."),(0,o.kt)("p",null,"Peculiarities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"automatically displays the type of state"),(0,o.kt)("li",{parentName:"ul"},"re-renders the component only when the reducer is updated"),(0,o.kt)("li",{parentName:"ul"},'allows you to create reducers "on the fly"')),(0,o.kt)("h3",{id:"interface-3"},"Interface"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"store: Reducer")," - Store created by createReducer")),(0,o.kt)("h3",{id:"usage-3"},"Usage"),(0,o.kt)("p",null,"Basic example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStore } from '@tramvai/state';\nimport { createReducer } from '@tramvai/state';\n\nconst userReducer = createReducer('user', { id: '123' });\n\nexport const Component = () => {\n  const { id } = useStore(userReducer);\n\n  return <div>{id}</div>;\n};\n")))}d.isMDXComponent=!0}}]);