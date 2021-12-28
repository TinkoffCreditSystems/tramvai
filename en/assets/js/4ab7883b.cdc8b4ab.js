(self.webpackChunk=self.webpackChunk||[]).push([[6370],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6109:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>u,contentTitle:()=>l,metadata:()=>s,toc:()=>p,default:()=>d});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],u={id:"router",title:"router"},l=void 0,s={unversionedId:"references/libs/router",id:"references/libs/router",isDocsHomePage:!1,title:"router",description:"Routing library. It can work both on the server and on the client. Designed primarily for building isomorphic applications.",source:"@site/tmp-docs/references/libs/router.md",sourceDirName:"references/libs",slug:"/references/libs/router",permalink:"/en/docs/references/libs/router",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/router.md",version:"current",frontMatter:{id:"router",title:"router"},sidebar:"docs",previous:{title:"React Hooks",permalink:"/en/docs/references/libs/react-hooks"},next:{title:"safe-strings",permalink:"/en/docs/references/libs/safe-strings"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Explanation",id:"explanation",children:[{value:"Server and client version",id:"server-and-client-version",children:[]},{value:"Client routing with/without SPA transitions",id:"client-routing-withwithout-spa-transitions",children:[]},{value:"Router Guards",id:"router-guards",children:[]},{value:"Transitions hooks",id:"transitions-hooks",children:[]}]},{value:"API",id:"api",children:[{value:"Getting data about the current route or url",id:"getting-data-about-the-current-route-or-url",children:[]},{value:"Transition initiation",id:"transition-initiation",children:[]},{value:"Working with query",id:"working-with-query",children:[]},{value:"Integration with React",id:"integration-with-react",children:[]}]}],c={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Routing library. It can work both on the server and on the client. Designed primarily for building isomorphic applications."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"@tinkoff/router"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tinkoff/router\n")),(0,a.kt)("p",null,"And connect it to the project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Router } from '@tinkoff/router';\n\nconst router = new Router();\n")),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("p",null,"Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The library supports options for working both on the server and on the client."),(0,a.kt)("li",{parentName:"ul"},"It is possible to use different client transition options: with or without SPA transitions."),(0,a.kt)("li",{parentName:"ul"},"There are Guards to check the availability of a route under specific conditions."),(0,a.kt)("li",{parentName:"ul"},"You can subscribe to different stages of the transition through hooks"),(0,a.kt)("li",{parentName:"ul"},"Components and hooks for easy routing from react")),(0,a.kt)("h3",{id:"server-and-client-version"},"Server and client version"),(0,a.kt)("p",null,"It is enough just to import routing from the library itself and, based on the settings in package.json, the required version for the server or client will be returned"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Router } from '@tinkoff/router';\n")),(0,a.kt)("h3",{id:"client-routing-withwithout-spa-transitions"},"Client routing with/without SPA transitions"),(0,a.kt)("p",null,"By default, routing with SPA transitions is enabled on the client. If you need to disable SPA transitions, you need to import a special version of the routing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Router, SpaHistory } from '@tinkoff/router';\nimport { NoSpaRouter } from '@tinkoff/router';\n\nconst spaRouter = new Router({ history: new SpaHistory() });\nconst noSpaRouter = new NoSpaRouter();\n")),(0,a.kt)("h3",{id:"router-guards"},"Router Guards"),(0,a.kt)("p",null,"Guards allow you to control the availability of a particular route for a specific transition. From the guard, you can block the transition or initiate a redirect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { NavigationGuard } from '@tinkoff/router';\n\nexport const myGuard: NavigationGuard = async ({ to }) => {\n  if (to.config.blocked) {\n    return false; // block this transition\n  }\n\n  if (to.config.redirect) {\n    return '/login/'; // call a redirect to the specified page\n  }\n\n  // if nothing is returned, the transition will be performed as usual\n};\n")),(0,a.kt)("h3",{id:"transitions-hooks"},"Transitions hooks"),(0,a.kt)("p",null,"Transition hooks allow you to perform your asynchronous actions at different stages of the transition."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { NavigationHook } from '@tinkoff/router';\n\nexport const myHook: NavigationHook = async ({ from, to, url, fromUrl }) => {\n  console.log(`navigating from ${from} to route ${to}`);\n};\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"getting-data-about-the-current-route-or-url"},"Getting data about the current route or url"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentRoute(); // will return the current route\nrouter.getCurrentUrl(); // will return the parsed version of the url of the current page\n")),(0,a.kt)("h3",{id:"transition-initiation"},"Transition initiation"),(0,a.kt)("p",null,"There are two methods for initializing the navigation and updating the address bar in the browser. The main difference between these two methods is that one of them will launch a full-fledged transition with data updating and starting heavy data loading actions. The second method is mainly used to update the state for the current route: to update the query parameters on the page or change the dynamic parameters of the route itself."),(0,a.kt)("h4",{id:"navigate"},"navigate"),(0,a.kt)("p",null,"Initiates a full transition, defining the next route and updating the state in the browser."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"router.navigate('/test');\nrouter.navigate({ url: './test', query: { a: '1' } });\n")),(0,a.kt)("p",null,"Transition hooks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"beforeResolve"),(0,a.kt)("li",{parentName:"ul"},"beforeNavigate"),(0,a.kt)("li",{parentName:"ul"},"afterNavigate")),(0,a.kt)("h4",{id:"updatecurrentroute"},"updateCurrentRoute"),(0,a.kt)("p",null,"The transition is based on the current route (therefore this method cannot be called on the server) and allows you to simply update some data for the current page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"router.updateCurrentRoute({ params: { id: 'abc' } });\nrouter.updateCurrentRoute({ query: { a: '1' } });\n")),(0,a.kt)("p",null,"Hooks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"beforeUpdateCurrent"),(0,a.kt)("li",{parentName:"ul"},"afterUpdateCurrent")),(0,a.kt)("h3",{id:"working-with-query"},"Working with query"),(0,a.kt)("h4",{id:"query-option"},"query option"),(0,a.kt)("p",null,"Allows you to set a search string for an url as an object via the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," option when navigating. The previous query value will be cleared"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentUrl().query; // { \u0441: 'c' }\n\nrouter.navigate({ query: { a: 'a', b: 'b' } });\nrouter.updateCurrentRoute({ query: { a: 'a', b: 'b' } });\n\nrouter.getCurrentUrl().query; // { a: 'a', b: 'b' }\n")),(0,a.kt)("h4",{id:"preservequery"},"preserveQuery"),(0,a.kt)("p",null,"Allows you to keep the query value from the current navigation and use them in a new transition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentUrl().query; // { \u0441: 'c' }\n\nrouter.navigate({ query: { a: 'a' }, preserveQuery: true });\nrouter.updateCurrentRoute({ query: { a: 'a' }, preserveQuery: true });\n\nrouter.getCurrentUrl().query; // { a: 'a', c: 'c' }\n")),(0,a.kt)("p",null,"If you pass undefined as the value for a specific query key, then this value will be cleared in a new query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentUrl().query; // { a: 'a', b: 'b' }\n\nrouter.navigate({ query: { a: undefined, c: 'c' }, preserveQuery: true });\nrouter.updateCurrentRoute({ query: { a: undefined, c: 'c' }, preserveQuery: true });\n\nrouter.getCurrentUrl().query; // { b: 'b', c: 'c' }\n")),(0,a.kt)("h3",{id:"integration-with-react"},"Integration with React"),(0,a.kt)("p",null,"Library has some useful React hooks and components for working with routing"),(0,a.kt)("h4",{id:"useroute"},"useRoute"),(0,a.kt)("p",null,"Returns current active route of the application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport { useRoute } from '@tinkoff/router';\n\nexport const Component = () => {\n  const route = useRoute();\n\n  return <div>Route path: {route.actualPath}</div>;\n};\n")),(0,a.kt)("h4",{id:"useurl"},"useUrl"),(0,a.kt)("p",null,"Returns current active URL of the application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport { useUrl } from '@tinkoff/router';\n\nexport const Component = () => {\n  const url = useUrl();\n\n  return <div>Url query: {JSON.stringify(url.query)}</div>;\n};\n")),(0,a.kt)("h4",{id:"usenavigate"},"useNavigate"),(0,a.kt)("p",null,"Creates a callback with a navigation call that can be passed to child components or used as an event handler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const Cmp = () => {\n  const navigate = useNavigate('/test/');\n\n  return <div onClick={navigate}>Test</div>;\n};\n")),(0,a.kt)("h4",{id:"link"},"Link"),(0,a.kt)("p",null,"A wrapper for a react component that makes it clickable"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the react component is passed to the Link as children, then this passed component will be rendered and the ",(0,a.kt)("inlineCode",{parentName:"p"},"href"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," props will be passed as props to that component and they should be used to make the navigation. Otherwise, the ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," tag will be rendered with children as a child.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Link } from '@tinkoff/router';\nimport CustomLink from '@custom-scope/link';\n\nexport const Component = () => {\n  return (\n    <Link url=\"/test/\">\n      <CustomLink />\n    </Link>\n  );\n};\n\nexport const WrapLink = () => {\n  return <Link url=\"/test/\">Click me</Link>;\n};\n")))}d.isMDXComponent=!0}}]);