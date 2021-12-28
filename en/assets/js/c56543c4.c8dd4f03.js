(self.webpackChunk=self.webpackChunk||[]).push([[2237],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>p,kt:()=>c});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(o),c=n,m=g["".concat(s,".").concat(c)]||g[c]||u[c]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},9828:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>g});var r=o(2122),n=o(9756),a=(o(7294),o(3905)),i=["components"],l={id:"how-debug-modules",title:"How to debug modules?"},s=void 0,d={unversionedId:"how-to/how-debug-modules",id:"how-to/how-debug-modules",isDocsHomePage:!1,title:"How to debug modules?",description:"For convenient debugging of modules, it is necessary to enable logger display for unique logger IDs that were created in the modules being debugged. Library documentation @tinkoff/logger contains detailed examples of logger operation.",source:"@site/tmp-docs/how-to/how-debug-modules.md",sourceDirName:"how-to",slug:"/how-to/how-debug-modules",permalink:"/en/docs/how-to/how-debug-modules",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/how-debug-modules.md",version:"current",frontMatter:{id:"how-debug-modules",title:"How to debug modules?"},sidebar:"docs",previous:{title:"How to enable modern mode for an application?",permalink:"/en/docs/how-to/how-enable-modern"},next:{title:"How to update tramvai?",permalink:"/en/docs/how-to/tramvai-update"}},p=[{value:"Displaying logs on the server",id:"displaying-logs-on-the-server",children:[]},{value:"Displaying logs on the browser",id:"displaying-logs-on-the-browser",children:[]}],u={toc:p};function g(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For convenient debugging of modules, it is necessary to enable logger display for unique logger IDs that were created in the modules being debugged. Library documentation ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/references/libs/logger"},"@tinkoff/logger")," contains detailed examples of logger operation."),(0,a.kt)("p",null,"It is recommended to specify a list of logger identifiers in the README for each module, otherwise you can look up occurrences on the line ",(0,a.kt)("inlineCode",{parentName:"p"},"logger(")," to find the necessary identifiers."),(0,a.kt)("p",null,"Levels and identifiers of displayed loggers are specified separately for server and for client, by default all loggers with level ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," and above are displayed."),(0,a.kt)("h3",{id:"displaying-logs-on-the-server"},"Displaying logs on the server"),(0,a.kt)("p",null,"The server log settings are set in the ",(0,a.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"LOG_ENABLE")," environment variables, if needed, you can change these settings in runtime, through the papi method ",(0,a.kt)("inlineCode",{parentName:"p"},"/{appName}/private/papi/logger")," with additional query parameters.\nYou can read more about the available parameters in the documentation ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/references/modules/log"},"@tramvai/module-log")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"LOG_ENABLE='router' // displays all logs for the logger with the ID `router`\n")),(0,a.kt)("h3",{id:"displaying-logs-on-the-browser"},"Displaying logs on the browser"),(0,a.kt)("p",null,"Client logs settings are controlled by methods of the ",(0,a.kt)("inlineCode",{parentName:"p"},"@tinkoff/logger")," library.\nThese settings are stored in the localStorage, so to display all client logs with new settings, you must additionally reload the page, or clear the localStorage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import logger from '@tinkoff/logger';\n\nlogger.enable('router'); // displays all logs for the logger with the ID `router`\n")))}g.isMDXComponent=!0}}]);