"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4903],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"ssr",title:"Server-Side Rendering"},s=void 0,p={unversionedId:"features/rendering/ssr",id:"features/rendering/ssr",title:"Server-Side Rendering",description:"Server-side rendering (SSR) - is default tramvai rendering mode, which means that for every user request framework will generate HTML page in runtime, and this page content may be completely dynamic and all data will be fresh.",source:"@site/tmp-docs/03-features/010-rendering/01-ssr.md",sourceDirName:"03-features/010-rendering",slug:"/features/rendering/ssr",permalink:"/docs/features/rendering/ssr",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/010-rendering/01-ssr.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ssr",title:"Server-Side Rendering"},sidebar:"sidebar",previous:{title:"React Query",permalink:"/docs/features/data-fetching/react-query"},next:{title:"Page Render Mode",permalink:"/docs/features/rendering/page-render-mode"}},d={},c=[],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.patterns.dev/posts/server-side-rendering/"},"Server-side rendering (SSR)")," - is default ",(0,i.kt)("inlineCode",{parentName:"p"},"tramvai")," rendering mode, which means that for every user request framework will generate HTML page in runtime, and this page content may be completely dynamic and all data will be fresh."),(0,i.kt)("p",null,"Also it means that all ",(0,i.kt)("inlineCode",{parentName:"p"},"tramvai")," application code needs to be ",(0,i.kt)("strong",{parentName:"p"},"universal")," (or isomorphic) - ready to run both on the server and the client."),(0,i.kt)("p",null,"You can find complete request lifecycle at ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/app-lifecycle#request-flow"},"Application Lifecycle")," documentation, and how routing works in ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/routing/flow#server-navigation"},"Navigation Flow")," page."),(0,i.kt)("p",null,"SSR has a lot of advantages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Always up-to-date content"),(0,i.kt)("li",{parentName:"ul"},"SEO support"),(0,i.kt)("li",{parentName:"ul"},"Fast ",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/i18n/en/fcp/"},"First Contentful Paint (LCP)")),(0,i.kt)("li",{parentName:"ul"},"Easy to get great ",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/i18n/en/lcp/"},"Largest Contentful Paint (LCP)")," and ",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/i18n/en/cls/"},"Cumulative Layout Shift (CLS)")," metrics"),(0,i.kt)("li",{parentName:"ul"},"Consistently good API requests timings on the server-side"),(0,i.kt)("li",{parentName:"ul"},"Minimal client network requests waterfall because all required page resources (JS, CSS) will already have been added to HTML")),(0,i.kt)("p",null,"SSR also brings some challenges:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Slow ",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/i18n/en/ttfb/"},"Time to First Byte (TTFB)")," (",(0,i.kt)("inlineCode",{parentName:"li"},"tramvai")," doesn't support ",(0,i.kt)("a",{parentName:"li",href:"/docs/features/rendering/streaming"},"Streaming Rendering")," which can improve this metric)"),(0,i.kt)("li",{parentName:"ul"},"More complex infrastructure (monitoring, logging, deployment, scaling)"),(0,i.kt)("li",{parentName:"ul"},"High server load when generating HTML")),(0,i.kt)("p",null,"To be able to better handle high loads, ",(0,i.kt)("inlineCode",{parentName:"p"},"tramvai")," provides a few additional page render modes, which allow the server to do less work when generating HTML - ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/rendering/page-render-mode#static-mode"},"static")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/rendering/page-render-mode#client-mode"},"client")," modes. Also, ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/rendering/hydration"},"lazy hydration")," is available to improve client-side loading performance."))}m.isMDXComponent=!0}}]);