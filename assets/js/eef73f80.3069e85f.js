"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"routing",title:"Working with Url"},l=void 0,u={unversionedId:"features/child-app/routing",id:"features/child-app/routing",title:"Working with Url",description:"Explanation",source:"@site/tmp-docs/03-features/015-child-app/08-routing.md",sourceDirName:"03-features/015-child-app",slug:"/features/child-app/routing",permalink:"/docs/features/child-app/routing",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/015-child-app/08-routing.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"routing",title:"Working with Url"},sidebar:"sidebar",previous:{title:"Data Fetching",permalink:"/docs/features/child-app/data-fetching"},next:{title:"Dependency Injection",permalink:"/docs/features/child-app/di"}},s={},c=[{value:"Explanation",id:"explanation",level:2},{value:"Usage",id:"usage",level:2},{value:"Installation",id:"installation",level:3},{value:"Make navigations",id:"make-navigations",level:3},{value:"Update current route",id:"update-current-route",level:3},{value:"Subscribe to route changes",id:"subscribe-to-route-changes",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"explanation"},"Explanation"),(0,o.kt)("p",null,"Routing is configured and controlled by the Root App, Child App has a limited set of capabilities to work with ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai")," router."),(0,o.kt)("p",null,"Child App has access to ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai")," router through DI and can make navigations or subscribe to route changes in React components, but it can't add additional routes in the application."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"First, you need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"@tramvai/module-router")," module and ",(0,o.kt)("inlineCode",{parentName:"p"},"@tramvai/tokens-router")," in your Child App:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx tramvai add @tramvai/module-router\nnpx tramvai add @tramvai/tokens-router\n")),(0,o.kt)("p",null,"Then, connect ",(0,o.kt)("inlineCode",{parentName:"p"},"RouterChildAppModule")," from this module in your ",(0,o.kt)("inlineCode",{parentName:"p"},"createChildApp")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createChildApp } from '@tramvai/child-app-core';\nimport { RouterChildAppModule } from '@tramvai/module-router';\nimport { RootCmp } from './components/root';\n\n// eslint-disable-next-line import/no-default-export\nexport default createChildApp({\n  name: 'fancy-child',\n  render: RootCmp,\n  modules: [RouterChildAppModule],\n  providers: [],\n});\n")),(0,o.kt)("h3",{id:"make-navigations"},"Make navigations"),(0,o.kt)("p",null,"Simplest way to make navigations in Child App is to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/routing/links-and-navigation#link-component"},(0,o.kt)("inlineCode",{parentName:"a"},"<Link />")," component"),"."),(0,o.kt)("p",null,"Another way is to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/features/routing/links-and-navigation#pageservice-service"},"PAGE_SERVICE_TOKEN")," token from Root App, for example you can use it in React components directly with ",(0,o.kt)("inlineCode",{parentName:"p"},"useDi"),", let's make navigation to ",(0,o.kt)("inlineCode",{parentName:"p"},"/another-page/"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/root.tsx"',title:'"components/root.tsx"'},"import { useDi } from '@tramvai/react';\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router';\n\nexport const RootCmp = () => {\n  const pageService = useDi(PAGE_SERVICE_TOKEN);\n  const navigate = () => pageService.navigate('/another-page/');\n\n  return (\n    <button onClick={navigate}>Navigate to /another-page/</button>\n  );\n};\n")),(0,o.kt)("h3",{id:"update-current-route"},"Update current route"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PAGE_SERVICE_TOKEN")," is also used to update current route without navigation. We already use it directly in React component, let's try Actions now, for example we will add a ",(0,o.kt)("inlineCode",{parentName:"p"},"myOwnQuery")," query parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/root.tsx"',title:'"components/root.tsx"'},"import { declareAction } from '@tramvai/core';\nimport { useActions } from '@tramvai/state';\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router';\n\nconst updateQueryAction = declareAction({\n  name: 'update-query',\n  async fn(value: string) {\n    // highlight-next-line\n    return this.deps.pageService.updateCurrentRoute({ query: { myOwnQuery: value } });\n  },\n  deps: {\n    pageService: PAGE_SERVICE_TOKEN,\n  },\n});\n\nexport const RootCmp = () => {\n  // highlight-next-line\n  const updateQuery = useActions(updateQueryAction);\n  const handleUpdate = () => updateQuery('some value');\n\n  return (\n    <>\n      <button onClick={handleUpdate}>add myOwnQuery query parameter</button>\n    </>\n  );\n};\n")),(0,o.kt)("h3",{id:"subscribe-to-route-changes"},"Subscribe to route changes"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/features/routing/working-with-url"},(0,o.kt)("inlineCode",{parentName:"a"},"useRoute")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"useUrl")," hooks")," is available to use in Child App for subscriptions to route changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/root.tsx"',title:'"components/root.tsx"'},"import { useRoute } from '@tramvai/module-router';\n\nexport const RootCmp = () => {\n  const route = useRoute();\n\n  return <div>Route path: {route.actualPath}</div>;\n};\n")))}m.isMDXComponent=!0}}]);