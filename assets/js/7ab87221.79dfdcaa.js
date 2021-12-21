(self.webpackChunk=self.webpackChunk||[]).push([[6287],{3905:(e,r,n)=>{"use strict";n.d(r,{Zo:()=>d,kt:()=>m});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),c=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},d=function(e){var r=c(e.components);return t.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(a,".").concat(m)]||u[m]||p[m]||i;return n?t.createElement(f,s(s({ref:r},d),{},{components:n})):t.createElement(f,s({ref:r},d))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},219:(e,r,n)=>{"use strict";n.r(r),n.d(r,{frontMatter:()=>l,contentTitle:()=>a,metadata:()=>c,toc:()=>d,default:()=>u});var t=n(2122),o=n(9756),i=(n(7294),n(3905)),s=["components"],l={id:"is-modern-lib",title:"is-modern-lib"},a=void 0,c={unversionedId:"references/libs/is-modern-lib",id:"references/libs/is-modern-lib",isDocsHomePage:!1,title:"is-modern-lib",description:"RegExp for check packages from node_modules that are distributed in ES2015+.",source:"@site/tmp-docs/references/libs/is-modern-lib.md",sourceDirName:"references/libs",slug:"/references/libs/is-modern-lib",permalink:"/docs/references/libs/is-modern-lib",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/is-modern-lib.md",version:"current",frontMatter:{id:"is-modern-lib",title:"is-modern-lib"},sidebar:"docs",previous:{title:"hooks",permalink:"/docs/references/libs/hooks"},next:{title:"http-client",permalink:"/docs/references/libs/http-client"}},d=[{value:"Usage",id:"usage",children:[]}],p={toc:d};function u(e){var r=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RegExp for check packages from node_modules that are distributed in ES2015+."),(0,i.kt)("p",null,"This RegExp might be used to determine modules which should be transpiled to ES5."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Based on example from the article ",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/publish-modern-javascript/#configure-babel-loader-to-transpile-node_modules"},"Publish, ship, and install modern JavaScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// webpack.config.js\nconst { modernLibsFilter } = require('@tinkoff/is-modern-lib');\n\nmodule.exports = {\n  module: {\n    rules: [\n      // Transpile for your own first-party code:\n      {\n        test: /\\.[cm]?js$/i,\n        loader: 'babel-loader',\n        exclude: /node_modules/,\n      },\n      // Transpile modern dependencies:\n      {\n        test: /\\.[cm]?js$/i,\n        include: modernLibsFilter,\n        use: {\n          loader: 'babel-loader',\n          options: {\n            babelrc: false,\n            configFile: false,\n            presets: ['@babel/preset-env'],\n          },\n        },\n      },\n    ],\n  },\n};\n")))}u.isMDXComponent=!0}}]);