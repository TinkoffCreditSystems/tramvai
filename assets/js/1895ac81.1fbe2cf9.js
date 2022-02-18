"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7510:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>p,toc:()=>c,default:()=>d});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],s={},o=void 0,p={unversionedId:"references/cli/experiments",id:"references/cli/experiments",title:"experiments",description:"With experimental settings you can try some of the new features and options that are not stable for now, but capable to improve usage of cli in some way.",source:"@site/tmp-docs/references/cli/experiments.md",sourceDirName:"references/cli",slug:"/references/cli/experiments",permalink:"/docs/references/cli/experiments",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/cli/experiments.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"browserslist",permalink:"/docs/references/cli/browserslist"},next:{title:"serverInline",permalink:"/docs/references/cli/serverInline"}},c=[{value:"CLI settings",id:"cli-settings",children:[{value:"serve",id:"serve",children:[{value:"Defaults",id:"defaults",children:[],level:4}],level:3}],level:2},{value:"Webpack settings",id:"webpack-settings",children:[{value:"Defaults",id:"defaults-1",children:[],level:3}],level:2},{value:"minicss",id:"minicss",children:[{value:"Defaults",id:"defaults-2",children:[],level:3}],level:2},{value:"transpilation",id:"transpilation",children:[{value:"swc",id:"swc",children:[],level:3},{value:"Defaults",id:"defaults-3",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With experimental settings you can try some of the new features and options that are not stable for now, but capable to improve usage of cli in some way."),(0,a.kt)("p",null,"Experimental flags are provided in ",(0,a.kt)("inlineCode",{parentName:"p"},"tramvai.json")," and should be passed separately for ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," configurations."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tramvai.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "./node_modules/@tramvai/cli/schema.json",\n  "projects": {\n    "app": {\n      "name": "app",\n      "root": "src",\n      "type": "application",\n      "commands": {\n        "build": {\n          "options": {\n            "server": "src/index"\n          },\n          "configurations": {\n            "experiments": {\n              "minicss": {\n                "useImportModule": true\n              },\n              "webpack": {\n                "cacheUnaffected": true\n              },\n              "transpilation": {\n                "loader": "swc"\n              }\n            }\n          }\n        },\n        "serve": {\n          "configurations": {\n            "experiments": {\n              "minicss": {\n                "useImportModule": true\n              },\n              "webpack": {\n                "cacheUnaffected": true\n              },\n              "transpilation": {\n                "loader": "swc"\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"cli-settings"},"CLI settings"),(0,a.kt)("h3",{id:"serve"},"serve"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'serverRunner="process"|"thread"'),' - use different ways to run the server app. "thread" most of the time is little faster, but might lead to some bugs, especially when running cli though nodejs api')),(0,a.kt)("h4",{id:"defaults"},"Defaults"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'serverRunner="process"'),' - "process" is not experimental and can be safely used')),(0,a.kt)("h2",{id:"webpack-settings"},"Webpack settings"),(0,a.kt)("p",null,"Webpack by itself has ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/experiments/#experimentsoutputmodule"},"a list of experimental flags")," which might be passed directly to webpack through ",(0,a.kt)("inlineCode",{parentName:"p"},"experiments.webpack"),"."),(0,a.kt)("h3",{id:"defaults-1"},"Defaults"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cacheUnaffected=true")," - should improve build performance in ",(0,a.kt)("inlineCode",{parentName:"li"},"serve")," mode")),(0,a.kt)("h2",{id:"minicss"},"minicss"),(0,a.kt)("p",null,"Flags are specified through ",(0,a.kt)("inlineCode",{parentName:"p"},"experiments.minicss")," and allows to enable experimental settings for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/mini-css-extract-plugin"},(0,a.kt)("inlineCode",{parentName:"a"},"mini-css-extract-plugin"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useImportModule")," - enables a special way to compile css modules that should improve build time and decrease memory usage. More details ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/webpack-contrib/mini-css-extract-plugin#experimentalUseImportModule"},"in the official docs"))),(0,a.kt)("h3",{id:"defaults-2"},"Defaults"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useImportModule=true")," - enabled by default as this improves build time and provides better css related error descriptions")),(0,a.kt)("h2",{id:"transpilation"},"transpilation"),(0,a.kt)("p",null,"Settings for the js-ts transpilation process"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'loader="babel"|"swc"')," - use specific transpiler")),(0,a.kt)("h3",{id:"swc"},"swc"),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},'loader="swc"')," you need to install additional libraries by yourself:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"@swc/core": "^1.2.124"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"@swc/helpers": "^0.3.2"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"swc-loader": "^0.1.15"'))),(0,a.kt)("h3",{id:"defaults-3"},"Defaults"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'loader="babel"')," - babel in not experimental setup and can be safely used")))}d.isMDXComponent=!0}}]);