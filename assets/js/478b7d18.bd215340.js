"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"get-started",title:"Get Started"},p=void 0,d={unversionedId:"features/child-app/get-started",id:"features/child-app/get-started",title:"Get Started",description:"New Child App",source:"@site/tmp-docs/03-features/015-child-app/02-get-started.md",sourceDirName:"03-features/015-child-app",slug:"/features/child-app/get-started",permalink:"/docs/features/child-app/get-started",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/015-child-app/02-get-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"get-started",title:"Get Started"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/docs/features/child-app/overview"},next:{title:"UI component",permalink:"/docs/features/child-app/ui-component"}},s={},c=[{value:"New Child App",id:"new-child-app",level:2},{value:"Development",id:"development",level:2},{value:"Testing",id:"testing",level:2},{value:"Unit",id:"unit",level:4},{value:"Integration Tests",id:"integration-tests",level:4},{value:"Deploy",id:"deploy",level:2},{value:"Debug",id:"debug",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"new-child-app"},"New Child App"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," can generate new Child App template from scratch."),(0,i.kt)("p",null,"\u231b Run in your shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm init @tramvai@latest fancy-child\n")),(0,i.kt)("p",null,"\u231b Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Microfrontend implemented by tramvai child-app")),(0,i.kt)("p",null,"\u231b Follow next steps of setup based on your needs"),(0,i.kt)("p",null,"After that in directory ",(0,i.kt)("inlineCode",{parentName:"p"},"fancy-child")," will be generated new Child App from template with all necessary setup and installed dependencies."),(0,i.kt)("h2",{id:"development"},"Development"),(0,i.kt)("p",null,"Child App development process is connected with Root App development - you need to use Root App for micro frontend preview, because Root App is responsible for loading Child App and provide it with all necessary dependencies."),(0,i.kt)("p",null,"\u231b Run Child App in watch mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd fancy-child && npm start\n")),(0,i.kt)("p",null,"\u231b ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/child-app/connect"},"Connect Child App in Root Application")),(0,i.kt)("p",null,"\u231b Run Root App in development mode and link it with our running Child App:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CHILD_APP_DEBUG=fancy-child npx tramvai start root-app\n")),(0,i.kt)("p",null,"\u231b Open Root App page with connected Child App, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/fancy-child/")),(0,i.kt)("p",null,"More detailed examples you can find in ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/child-app/connect#development"},"Connect Child App")," page."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("h4",{id:"unit"},"Unit"),(0,i.kt)("p",null,"You may use helper library ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/tramvai/test/child-app"},"@tramvai/test-child-app")," that creates mock application in order to test child-app behaviour in the app."),(0,i.kt)("h4",{id:"integration-tests"},"Integration Tests"),(0,i.kt)("p",null,"Full testing requires to run standalone app that will reuse your app."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create test app in your repository. Also you may use ",(0,i.kt)("inlineCode",{parentName:"li"},"@tramvai/test-trandapp")," for generating simple app without hassle (not yet available in open-source)."),(0,i.kt)("li",{parentName:"ol"},"Using ",(0,i.kt)("a",{parentName:"li",href:"/docs/references/tramvai/test/integration"},"@tramvai/test-integration")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/references/tramvai/test/playwright"},"@tramvai/test-pw")," you may perform any kind of tests including testing in browser.")),(0,i.kt)("h2",{id:"deploy"},"Deploy"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Child-app is built ignoring ",(0,i.kt)("inlineCode",{parentName:"p"},"modern")," option in tramvai config. This is because we don't know the actual environment that will load the child-app and this environment may require legacy support")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Build your child-app with command ",(0,i.kt)("inlineCode",{parentName:"li"},"tramvai build [name]")),(0,i.kt)("li",{parentName:"ol"},"Copy generated files from ",(0,i.kt)("inlineCode",{parentName:"li"},"./dist/child-app")," (by default) to the external cdn"),(0,i.kt)("li",{parentName:"ol"},"Provide link to the cdn itself through token ",(0,i.kt)("inlineCode",{parentName:"li"},"CHILD_APP_RESOLVE_BASE_URL_TOKEN")," or env ",(0,i.kt)("inlineCode",{parentName:"li"},"CHILD_APP_EXTERNAL_URL"))),(0,i.kt)("h2",{id:"debug"},"Debug"),(0,i.kt)("p",null,"If your are facing any problems while developing or using Child App use next instructions first."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check the logs with key ",(0,i.kt)("inlineCode",{parentName:"li"},"child-app")," that may lead to source of problems"),(0,i.kt)("li",{parentName:"ol"},"If there is not enough logs enable all ",(0,i.kt)("inlineCode",{parentName:"li"},"child-app")," logs - ",(0,i.kt)("a",{parentName:"li",href:"/docs/features/logging#display-logs"},"how to display logs"))))}m.isMDXComponent=!0}}]);