(self.webpackChunk=self.webpackChunk||[]).push([[4604],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4e3:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>u});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o=["components"],p={id:"static-html-export",title:"Static HTML Export"},l=void 0,s={unversionedId:"features/static-html-export",id:"features/static-html-export",isDocsHomePage:!1,title:"Static HTML Export",description:"tramvai can export pages of your application at build time to HTML files.",source:"@site/tmp-docs/features/static-html-export.md",sourceDirName:"features",slug:"/features/static-html-export",permalink:"/docs/features/static-html-export",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/static-html-export.md",version:"current",frontMatter:{id:"static-html-export",title:"Static HTML Export"},sidebar:"docs",previous:{title:"API",permalink:"/docs/features/react-query/api"},next:{title:"File-System Pages",permalink:"/docs/features/file-system-pages"}},c=[{value:"Explanation",id:"explanation",children:[]},{value:"Usage",id:"usage",children:[{value:"Development",id:"development",children:[]},{value:"Production",id:"production",children:[]},{value:"Static Assets",id:"static-assets",children:[]}]},{value:"Limitations",id:"limitations",children:[]}],m={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tramvai")," can export pages of your application at build time to HTML files."),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tramvai static <appName>")," command run production build of the application,\nthen starts application server, and make requests to all application routes.\nAll responses are saved to ",(0,i.kt)("inlineCode",{parentName:"p"},".html")," files inside ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/static")," directory."),(0,i.kt)("p",null,"This feature is suitable for applications where all pages are independent of dynamic server-side data.\nYou can serve exported HTML files without ",(0,i.kt)("inlineCode",{parentName:"p"},"tramvai")," server by CDN or any static server."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"development"},"Development"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run command to export HTML pages with ",(0,i.kt)("inlineCode",{parentName:"p"},"--serve")," flag:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tramvai static <appName> --serve\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open server with exported pages at http://localhost:3000/"))),(0,i.kt)("h3",{id:"production"},"Production"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run command to export HTML pages:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tramvai static <appName>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy HTML pages to your server and static assets to your CDN"))),(0,i.kt)("h3",{id:"static-assets"},"Static Assets"),(0,i.kt)("p",null,"All static resources (js, css files) will be loaded according to the url specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"ASSETS_PREFIX")," env variable."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Dynamic pages (routes like ",(0,i.kt)("inlineCode",{parentName:"p"},"/foo/bar/:id"),") is not supported, ",(0,i.kt)("inlineCode",{parentName:"p"},"tramvai static")," command only show warnings for this pages."))}u.isMDXComponent=!0}}]);