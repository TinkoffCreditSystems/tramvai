(self.webpackChunk=self.webpackChunk||[]).push([[684],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6960:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>u});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],s={id:"test-integration-jest",title:"Jest integration"},l=void 0,p={unversionedId:"references/test/test-integration-jest",id:"references/test/test-integration-jest",isDocsHomePage:!1,title:"Jest integration",description:"Jest preset for integration-testing",source:"@site/tmp-docs/references/test/test-integration-jest.md",sourceDirName:"references/test",slug:"/references/test/test-integration-jest",permalink:"/en/docs/references/test/test-integration-jest",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/test/test-integration-jest.md",version:"current",frontMatter:{id:"test-integration-jest",title:"Jest integration"},sidebar:"docs",previous:{title:"Jest unit",permalink:"/en/docs/references/test/test-unit-jest"},next:{title:"@tinkoff-monorepo/fix-ts-references",permalink:"/en/docs/references/tools/monorepo-tools/fix-ts-references"}},c=[{value:"Installation",id:"installation",children:[]},{value:"How To",id:"how-to",children:[{value:"Debug and development of integration tests in Jest",id:"debug-and-development-of-integration-tests-in-jest",children:[]},{value:"Environment for Jest",id:"environment-for-jest",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jest preset for integration-testing"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer")," should be installed separately")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @tramvai/test-integration-jest\n")),(0,o.kt)("h2",{id:"how-to"},"How To"),(0,o.kt)("h3",{id:"debug-and-development-of-integration-tests-in-jest"},"Debug and development of integration tests in Jest"),(0,o.kt)("p",null,"Using this jest preset you can run integration tests in watch mode. In this case, application itself will be launched only once and will work in background."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add preset ",(0,o.kt)("inlineCode",{parentName:"p"},"@tramvai/test-integration-jest")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.integration.config.js"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  preset: '@tramvai/test-integration-jest',\n};\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add new script for running tests in watch mode to ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test:integration": "jest -w=3 --config ./jest.integration.config.js",\n    "test:integration:watch": "jest --runInBand --watch --config ./jest.integration.config.js"\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run some test with ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test:integration:watch <path_to_test>"),". In this case you are able to go to local url ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," and see application at work."))),(0,o.kt)("h3",{id:"environment-for-jest"},"Environment for Jest"),(0,o.kt)("p",null,"Minimal set of dependencies for running ",(0,o.kt)("inlineCode",{parentName:"p"},"jest"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev jest @types/jest jest-circus\n")))}u.isMDXComponent=!0}}]);