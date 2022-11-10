"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1407],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},488:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"error-boundary",title:"Error Boundaries"},s=void 0,p={unversionedId:"guides/error-boundary",id:"guides/error-boundary",title:"Error Boundaries",description:"In SSR applications errors can occure in different stages:",source:"@site/tmp-docs/guides/error-boundary.md",sourceDirName:"guides",slug:"/guides/error-boundary",permalink:"/docs/guides/error-boundary",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/guides/error-boundary.md",tags:[],version:"current",frontMatter:{id:"error-boundary",title:"Error Boundaries"},sidebar:"sidebar",previous:{title:"Deployment",permalink:"/docs/guides/deploy"},next:{title:"Storybook integration",permalink:"/docs/guides/storybook"}},c={},d=[{value:"Page Error Boundary",id:"page-error-boundary",level:2},{value:"Default fallback",id:"default-fallback",level:3},{value:"Specific fallback",id:"specific-fallback",level:3},{value:"Root Error Boundary",id:"root-error-boundary",level:2},{value:"How to",id:"how-to",level:2},{value:"How to render page error fallback on errors in actions?",id:"how-to-render-page-error-fallback-on-errors-in-actions",level:3},{value:"How to render page error fallback on errors in router guards?",id:"how-to-render-page-error-fallback-on-errors-in-router-guards",level:3}],u={toc:d};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In SSR applications errors can occure in different stages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On server initialization"),(0,a.kt)("li",{parentName:"ul"},"At runtime, when server handle user request"),(0,a.kt)("li",{parentName:"ul"},"On browser page loading"),(0,a.kt)("li",{parentName:"ul"},"At runtime, during hydration, or when user interacts with page and make SPA-navigations")),(0,a.kt)("p",null,"Server initialization errors block application deployment, easy to find and almost never reach the user.\nMoreover, ",(0,a.kt)("inlineCode",{parentName:"p"},"tramvai")," provides a module ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/modules/error-interceptor"},"@tramvai/module-error-interceptor"),", that adds global error handlers to the application on the server-side."),(0,a.kt)("p",null,"Errors during page loading are often caused by network problems.\nClient application may be more resistant to bad connections with different techniques - e.g. Service Worker, retry resources requests - but such techniques will be specific to each application."),(0,a.kt)("p",null,"Runtime errors, both on server in browser, can be critical and require send error page in reply to the user with some ",(0,a.kt)("inlineCode",{parentName:"p"},"5xx")," status."),(0,a.kt)("p",null,"This guide will be focused how to customize and show error pages for the users in different scenarios."),(0,a.kt)("h2",{id:"page-error-boundary"},"Page Error Boundary"),(0,a.kt)("p",null,"If the first rendering of the page on the server fails, ",(0,a.kt)("inlineCode",{parentName:"p"},"tramvai")," will try to render the page a second time, but already using the Error Boundary with fallback component.\nAlso, we use ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"React Error Boundaries")," under the hood, so the error fallback will render in case of any rendering errors in the browser."),(0,a.kt)("p",null,"You can provide default fallback for all pages, and specific fallback to concrete page.\nIn this fallback components ",(0,a.kt)("inlineCode",{parentName:"p"},"tramvai")," will pass ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/ErrorBoundaryFallback"',title:'"components/ErrorBoundaryFallback"'},"export const ErrorBoundaryFallback = ({ url, error }) => {\n  return (\n    <div>\n      <h1>Something wrong!</h1>\n      <p>Location: {url.path}</p>\n      <p>Error: {error.message}</p>\n    </div>\n  )\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Default response status for server-side Error Boundary - ",(0,a.kt)("inlineCode",{parentName:"p"},"500"),".\nThis status can be changed by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"httpStatus")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"Error")," object.")),(0,a.kt)("h3",{id:"default-fallback"},"Default fallback"),(0,a.kt)("p",null,"Default fallback component can be registered in any application ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/bundle"},"bundle"),", like a component with name ",(0,a.kt)("inlineCode",{parentName:"p"},"errorBoundaryDefault"),", e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="bundles/mainDefault.ts"',title:'"bundles/mainDefault.ts"'},"export default createBundle({\n  name: 'mainDefault',\n  components: {\n    pageDefault: PageComponent,\n    errorBoundaryDefault: ErrorBoundaryFallback,\n  },\n});\n")),(0,a.kt)("h3",{id:"specific-fallback"},"Specific fallback"),(0,a.kt)("p",null,"Concrete fallback for any of application pages can be registered by a few ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In page ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/bundle"},"bundle")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="bundles/mainDefault.ts"',title:'"bundles/mainDefault.ts"'},"export default createBundle({\n  name: 'mainDefault',\n  components: {\n    pageDefault: PageComponent,\n    errorBoundaryDefault: ErrorBoundaryFallback,\n    commentsPage: CommentsPage,\n    // highlight-next-line\n    commentsPageErrorBoundary: CommentsErrorBoundaryFallback,\n  },\n});\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In page component, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," property"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/comments.tsx"',title:'"pages/comments.tsx"'},"import React from 'react';\nimport { PageComponent } from '@tramvai/react';\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export const CommentsPage: PageComponent = () => null;\n\nCommentsPage.components = {\n    // highlight-next-line\n    commentsPageErrorBoundary: CommentsErrorBoundaryFallback,\n};\n```\n")),(0,a.kt)("p",null,"After fallback registration, you need to add the name with which the component was registered to page route configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="routes.ts"',title:'"routes.ts"'},"export const routes = [\n  {\n    name: 'main',\n    path: '/',\n    config: {},\n  },\n  {\n    name: 'comments',\n    path: '/comments/',\n    config: {\n      pageComponent: 'commentsPage',\n      // highlight-next-line\n      errorBoundaryComponent: 'commentsPageErrorBoundary',\n    },\n  },\n];\n")),(0,a.kt)("h2",{id:"root-error-boundary"},"Root Error Boundary"),(0,a.kt)("p",null,"If a critical error occurred during the request handling, e.g. Page Error Boundary rendering was unsuccessful, or an exception has been thrown out in any ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/command-line-runner"},"CommandLineRunner")," stages before rendering, ",(0,a.kt)("inlineCode",{parentName:"p"},"tramvai")," provides an opportunity to render custom ",(0,a.kt)("inlineCode",{parentName:"p"},"5xx")," page. Root Boundary works only on server side."),(0,a.kt)("p",null,"You can provide this boundary by using token ",(0,a.kt)("inlineCode",{parentName:"p"},"ROOT_ERROR_BOUNDARY_COMPONENT_TOKEN"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { ROOT_ERROR_BOUNDARY_COMPONENT_TOKEN } from '@tramvai/react';\n\nconst provider = {\n  provide: ROOT_ERROR_BOUNDARY_COMPONENT_TOKEN,\n  useValue: RootErrorBoundary,\n}\n")),(0,a.kt)("p",null,"This components will have access to ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," in properties, and need to render complete HTML page, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/RootErrorBoundary.tsx"',title:'"components/RootErrorBoundary.tsx"'},"import React from 'react';\n\nexport const RootErrorBoundary = ({ error, url }) => {\n  return (\n    <html lang=\"ru\">\n      <head>\n        <title>\n          Error {error.message} at {url.path}\n        </title>\n      </head>\n      <body>\n        <h1>Root Error Boundary</h1>\n      </body>\n    </html>\n  );\n};\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If this component also crashes at the rendering stage, in case of ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpError")," user will get an empty ",(0,a.kt)("inlineCode",{parentName:"p"},"response.body"),", otherwise ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pillarjs/finalhandler"},"finalhandler library")," will send default HTML page with some information about error.")),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"how-to-render-page-error-fallback-on-errors-in-actions"},"How to render page error fallback on errors in actions?"),(0,a.kt)("p",null,"By default, errors in ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/action"},"actions")," are skipped on server-side, and ",(0,a.kt)("inlineCode",{parentName:"p"},"tramvai")," try to execute failed actions again in browser.\nThe exception is ",(0,a.kt)("inlineCode",{parentName:"p"},"NotFoundError")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RedirectError")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"@tinkoff/errors")," library - these errors will cause ",(0,a.kt)("inlineCode",{parentName:"p"},"404")," page rendering or redirect accordingly."),(0,a.kt)("p",null,"If the action failed to fetch critical data for page rendering, and you want to change response status code, and show error page for user, you need to dispath ",(0,a.kt)("inlineCode",{parentName:"p"},"setPageErrorEvent")," action:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { declareAction } from '@tramvai/core';\nimport { HttpError } from '@tinkoff/errors';\nimport { setPageErrorEvent } from '@tramvai/module-render';\n\nconst action = declareAction({\n  name: 'action',\n  fn() {\n    // set custom response status, `500` by default\n    const error = new HttpError({ httpStatus: 410 });\n    this.dispatch(setPageErrorEvent(error));\n  },\n});\n")),(0,a.kt)("h3",{id:"how-to-render-page-error-fallback-on-errors-in-router-guards"},"How to render page error fallback on errors in router guards?"),(0,a.kt)("p",null,"Errors in ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/libs/router#router-guards"},"router guards")," will be ignored by default.\nLike the previous reciepe, if you need to render page fallback from guard, you can dispatch ",(0,a.kt)("inlineCode",{parentName:"p"},"setPageErrorEvent")," inside:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { STORE_TOKEN } from '@tramvai/module-common';\nimport { ROUTER_GUARD_TOKEN } from '@tramvai/module-router';\nimport { setPageErrorEvent } from '@tramvai/module-render';\nimport { HttpError } from '@tinkoff/errors';\n\nconst provider = {\n  provide: ROUTER_GUARD_TOKEN,\n  multi: true,\n  useFactory: ({ store }) => {\n    return async ({ to }) => {\n      // guards runs for every pages, and we need to check next path if want to show error only on specific routes\n      if (to?.path === '/some-restricted-page/') {\n        const error = new HttpError({ httpStatus: 503 });\n        store.dispatch(setPageErrorEvent(error));\n      }\n    };\n  },\n  deps: {\n    store: STORE_TOKEN,\n  },\n}\n")))}m.isMDXComponent=!0}}]);