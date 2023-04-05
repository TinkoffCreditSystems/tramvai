"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={id:"working-with-url",title:"Working with Url"},l=void 0,s={unversionedId:"features/routing/working-with-url",id:"features/routing/working-with-url",title:"Working with Url",description:"Route",source:"@site/tmp-docs/03-features/07-routing/03-working-with-url.md",sourceDirName:"03-features/07-routing",slug:"/features/routing/working-with-url",permalink:"/docs/features/routing/working-with-url",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/07-routing/03-working-with-url.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"working-with-url",title:"Working with Url"},sidebar:"sidebar",previous:{title:"Navigation Flow",permalink:"/docs/features/routing/flow"},next:{title:"Links and Navigation",permalink:"/docs/features/routing/links-and-navigation"}},p={},c=[{value:"Route",id:"route",level:2},{value:"Url",id:"url",level:2},{value:"<code>useRoute()</code> Hook",id:"useroute-hook",level:2},{value:"<code>useUrl()</code> Hook",id:"useurl-hook",level:2},{value:"<code>PageService</code> Service",id:"pageservice-service",level:2},{value:"<code>RouterStore</code> Reducer",id:"routerstore-reducer",level:2},{value:"Route Params",id:"route-params",level:2},{value:"Query Params",id:"query-params",level:2},{value:"Read",id:"read",level:3},{value:"Update",id:"update",level:3},{value:"- Next: Routing - Links and Navigation",id:"--next-routing---links-and-navigation",level:5}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"route"},"Route"),(0,o.kt)("p",null,"Route description format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const routes = [\n  {\n    // the name of the route is required\n    name: 'foo-bar',\n    // the path of the route is required\n    path: '/foo/bar/',\n    // additional configs for the route\n    config: {\n      // page component name\n      pageComponent: 'page',\n      // page layout component name\n      nestedLayoutComponent: 'page-layout',\n      // global layout component name\n      layoutComponent: 'layout',\n    },\n  },\n];\n")),(0,o.kt)("p",null,"Route interface (this is a config that is defined for route somewhere when application starts):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface Route {\n  // name of the route\n  name: string;\n  // path in route config. Might not be equal to the actual path in browser as\n  // it may have a dynamic parts\n  path: string;\n  // additional config for route, that is not used by router library, but\n  // might be used by router dependents\n  config?: Record<string, any>;\n  // redirect options that should happed when navigating to current route\n  redirect?: string | NavigateOptions;\n}\n")),(0,o.kt)("p",null,"NavigationRoute interface (this is an instance that created on every navigation from base route by adding additional parameters related to specific navigation):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface NavigationRoute extends Route {\n  // actual path that was resolved from requested url. Unlike `path` actualPath\n  // won't contain any dynamic parts and will be equal to path in browser\n  actualPath: string;\n  // resolved parts of the dynamic routes, where key is the name of dynamic part\n  // and value is the actual value from the current url\n  params: Record<string, string>;\n  // additional state that can be passed by caller side on navigation\n  navigateState?: any;\n}\n")),(0,o.kt)("h2",{id:"url"},"Url"),(0,o.kt)("p",null,"Url interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface Url {\n  path: string;\n  query: Record<string, string | string[]>;\n  host: string;\n  hostname: string;\n  href: string;\n  origin: string;\n  pathname: string;\n  port: string;\n  protocol: string;\n  search: string;\n  hash: string;\n}\n")),(0,o.kt)("h2",{id:"useroute-hook"},(0,o.kt)("inlineCode",{parentName:"h2"},"useRoute()")," Hook"),(0,o.kt)("p",null,"Returns current active route of the application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRoute } from '@tramvai/module-router';\n\nexport const Component = () => {\n  const route = useRoute();\n\n  return <div>Route path: {route.actualPath}</div>;\n};\n")),(0,o.kt)("h2",{id:"useurl-hook"},(0,o.kt)("inlineCode",{parentName:"h2"},"useUrl()")," Hook"),(0,o.kt)("p",null,"Returns current active URL of the application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useUrl } from '@tramvai/module-router';\n\nexport const Component = () => {\n  const url = useUrl();\n\n  return <div>Url query: {JSON.stringify(url.query)}</div>;\n};\n")),(0,o.kt)("h2",{id:"pageservice-service"},(0,o.kt)("inlineCode",{parentName:"h2"},"PageService")," Service"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PageService")," is a wrapper for working with ",(0,o.kt)("inlineCode",{parentName:"p"},"tramvai")," router. Serves to hide routing internals and is the preferred way to working with router. Available via ",(0,o.kt)("inlineCode",{parentName:"p"},"PAGE_SERVICE_TOKEN")," token."),(0,o.kt)("p",null,"This service is intended for use in DI providers and actions, also it is a performant option to get route information in React components, e.g. in callback functions, when you don't need to rerender component when route is changed."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getCurrentRoute()")," - get the current route"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getCurrentUrl()")," - object-result of parsing the current url"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getConfig()")," - get the config of the current page (",(0,o.kt)("inlineCode",{parentName:"li"},"route.config")," property)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getContent()")," - get content for the current page (",(0,o.kt)("inlineCode",{parentName:"li"},"route.config.content")," property)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getMeta()")," - get the meta for the current page (",(0,o.kt)("inlineCode",{parentName:"li"},"route.config.meta")," property)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { provide, declareAction } from '@tramvai/core';\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/module-router';\n\nconst action = declareAction({\n  name: 'action',\n  fn() {\n    const { pageService } = this.deps;\n\n    console.log(`Current path is`, pageService.getCurrentRoute().path);\n  },\n  deps: {\n    pageService: PAGE_SERVICE_TOKEN,\n  },\n});\n")),(0,o.kt)("h2",{id:"routerstore-reducer"},(0,o.kt)("inlineCode",{parentName:"h2"},"RouterStore")," Reducer"),(0,o.kt)("p",null,"Stores information about the current and previous routes."),(0,o.kt)("p",null,"Properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"currentRoute")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"currentUrl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"previousRoute")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"previousUrl"))),(0,o.kt)("h2",{id:"route-params"},"Route Params"),(0,o.kt)("p",null,"Dynamic parameters available in current ",(0,o.kt)("inlineCode",{parentName:"p"},"route.params")," parameter."),(0,o.kt)("p",null,"In react components, use ",(0,o.kt)("inlineCode",{parentName:"p"},"useRoute")," hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRoute } from '@tramvai/module-router';\n\nconst Comment = () => {\n  const route = useRoute();\n\n  return (\n    <li>\n      Current comment id: {route.params.id}\n    </li>\n  );\n};\n")),(0,o.kt)("p",null,"In actions, use ",(0,o.kt)("inlineCode",{parentName:"p"},"PAGE_SERVICE_TOKEN"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { declareAction } from '@tramvai/core';\n\nconst someAction = declareAction({\n  name: 'someAction',\n  fn() {\n    const route = this.deps.pageService.getCurrentRoute();\n\n    console.log(`Current comment id: ${route.params.id}`);\n  },\n  deps: {\n    pageService: PAGE_SERVICE_TOKEN,\n  },\n});\n")),(0,o.kt)("h2",{id:"query-params"},"Query Params"),(0,o.kt)("h3",{id:"read"},"Read"),(0,o.kt)("p",null,"Parsed query string available in ",(0,o.kt)("inlineCode",{parentName:"p"},"url.query")," parameter."),(0,o.kt)("p",null,"In react components, use ",(0,o.kt)("inlineCode",{parentName:"p"},"useUrl")," hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRoute } from '@tramvai/module-router';\n\nconst Page = () => {\n  const url = useUrl();\n\n  return (\n    <li>\n      Foo query value: {url.query.foo}\n    </li>\n  );\n};\n")),(0,o.kt)("p",null,"In actions, use ",(0,o.kt)("inlineCode",{parentName:"p"},"PAGE_SERVICE_TOKEN"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { declareAction } from '@tramvai/core';\n\nconst someAction = declareAction({\n  name: 'someAction',\n  fn() {\n    const url = this.deps.pageService.getCurrentUrl();\n\n    console.log(`Foo query value: ${url.query.foo}`);\n  },\n  deps: {\n    pageService: PAGE_SERVICE_TOKEN,\n  },\n});\n")),(0,o.kt)("h3",{id:"update"},"Update"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"navigate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"updateCurrentRoute")," methods allow you to set a search string for an url as an object via the ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," option when navigating. The previous query value will be cleared:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pageService.navigate({ query: { a: 'a' } });\npageService.updateCurrentRoute({ query: { b: 'b' } });\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"preserveQuery")," option allows you to keep the query value from the current navigation and use them in a new transition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pageService.updateCurrentRoute({ query: { a: 'a' }, preserveQuery: true });\n")),(0,o.kt)("p",null,"If you pass undefined as the value for a specific query key, then this value will be cleared in a new query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"pageService.navigate({ query: { a: undefined, b: 'b' }, preserveQuery: true });\n")),(0,o.kt)("h5",{id:"--next-routing---links-and-navigation"},"- ",(0,o.kt)("a",{parentName:"h5",href:"/docs/features/routing/links-and-navigation"},"Next: Routing - Links and Navigation")))}m.isMDXComponent=!0}}]);