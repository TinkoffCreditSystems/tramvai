(self.webpackChunk=self.webpackChunk||[]).push([[2918],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8202:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],l={id:"provider",title:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440"},p=void 0,c={unversionedId:"concepts/provider",id:"concepts/provider",isDocsHomePage:!1,title:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440",description:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 - \u044d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 (\u0438\u0434\u0435\u043d\u0442\u0435\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430) \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 (\u0441\u0442\u0440\u043e\u043a\u0430, \u0444\u0443\u043d\u043a\u0446\u0438\u044f, symbol, \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043a\u043b\u0430\u0441\u0441\u0430), \u0444\u0430\u0431\u0440\u0438\u043a\u0430 \u0438\u043b\u0438 \u043a\u043b\u0430\u0441\u0441. \u0424\u0430\u0431\u0440\u0438\u043a\u0430 \u0438\u043b\u0438 \u043a\u043b\u0430\u0441\u0441 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043a \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0443. \u041c\u043e\u0436\u043d\u043e \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432 \u043d\u0430 \u043e\u0434\u0438\u043d \u0442\u043e\u043a\u0435\u043d, \u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 multi.",source:"@site/tmp-docs/concepts/provider.md",sourceDirName:"concepts",slug:"/concepts/provider",permalink:"/docs/concepts/provider",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/concepts/provider.md",version:"current",frontMatter:{id:"provider",title:"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440"},sidebar:"docs",previous:{title:"Dependency Injection",permalink:"/docs/concepts/di"},next:{title:"\u041c\u043e\u0434\u0443\u043b\u044c",permalink:"/docs/concepts/module"}},d=[{value:"\u0424\u043e\u0440\u043c\u0430\u0442",id:"\u0444\u043e\u0440\u043c\u0430\u0442",children:[]},{value:"\u0420\u0430\u0437\u043d\u043e\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432",id:"\u0440\u0430\u0437\u043d\u043e\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u0438-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432",children:[{value:"Class",id:"class",children:[]},{value:"Factory",id:"factory",children:[]},{value:"Value",id:"value",children:[]}]},{value:"Multi \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b",id:"multi-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b",children:[]},{value:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 (deps)",id:"\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438-deps",children:[{value:"\u0424\u043e\u0440\u043c\u0430\u0442",id:"\u0444\u043e\u0440\u043c\u0430\u0442-1",children:[]},{value:"\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",id:"\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",children:[]},{value:"Multi \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",id:"multi-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",children:[]},{value:"Circular dependency",id:"circular-dependency",children:[]}]},{value:"Scope",id:"scope",children:[]},{value:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",children:[]},{value:"\u0422\u043e\u043a\u0435\u043d\u044b (token)",id:"\u0442\u043e\u043a\u0435\u043d\u044b-token",children:[]},{value:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441-1",children:[]},{value:"createToken",id:"createtoken",children:[]}],s={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u041f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 - \u044d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 (\u0438\u0434\u0435\u043d\u0442\u0435\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430) \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 (\u0441\u0442\u0440\u043e\u043a\u0430, \u0444\u0443\u043d\u043a\u0446\u0438\u044f, symbol, \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043a\u043b\u0430\u0441\u0441\u0430), \u0444\u0430\u0431\u0440\u0438\u043a\u0430 \u0438\u043b\u0438 \u043a\u043b\u0430\u0441\u0441. \u0424\u0430\u0431\u0440\u0438\u043a\u0430 \u0438\u043b\u0438 \u043a\u043b\u0430\u0441\u0441 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043a \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0443. \u041c\u043e\u0436\u043d\u043e \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432 \u043d\u0430 \u043e\u0434\u0438\u043d \u0442\u043e\u043a\u0435\u043d, \u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"multi"),"."),(0,a.kt)("h2",{id:"\u0444\u043e\u0440\u043c\u0430\u0442"},"\u0424\u043e\u0440\u043c\u0430\u0442"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Provider = {\n  provide: Token | string; // \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430\n  useValue?: any; // \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430\n  useFactory?: any; // \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430\n  useClass?: any; // \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430\n  deps?: Record<string, Token | string>; // \u0441\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0443 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b\n  multi?: boolean; // \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432, \u0435\u0441\u043b\u0438 true, \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430, \u0432\u0441\u0435 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435\n  scope?: 'request' | 'singleton'; // \u0415\u0441\u043b\u0438 singleton, \u0442\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043e\u0434\u0438\u043d \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u043d\u0430 \u0432\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043a\u043b\u0438\u0435\u043d\u0442\u0430. \u0415\u0441\u043b\u0438 request \u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0438\u043d\u0441\u0442\u0430\u043d\u0441 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 Request\n};\n")),(0,a.kt)("h2",{id:"\u0440\u0430\u0437\u043d\u043e\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u0438-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432"},"\u0420\u0430\u0437\u043d\u043e\u0432\u0438\u0434\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432"),(0,a.kt)("h3",{id:"class"},"Class"),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043d\u0441\u0442\u0430\u043d\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"useClass"),", \u0435\u0441\u043b\u0438 \u0431\u044b\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"deps")," \u0442\u043e \u043a\u043b\u0430\u0441\u0441 \u0432\u044b\u0437\u043e\u0432\u0435\u0442\u0441\u044f \u0441 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439 \u043f\u0435\u0440\u0432\u044b\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'token',\n  useClass: class ImplementClass {\n    constructor({ logger }) {}\n  },\n  deps: {\n    logger: 'logger',\n  },\n});\n")),(0,a.kt)("h3",{id:"factory"},"Factory"),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043d\u0441\u0442\u0430\u043d\u0441\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442 \u0432\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0439 \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"useFactory"),", \u0435\u0441\u043b\u0438 \u0431\u044b\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"deps")," \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u0437\u043e\u0432\u0435\u0442\u0441\u044f \u0441 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439 \u043f\u0435\u0440\u0432\u044b\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'token',\n  useFactory: ({ logger }) => new Implement(logger),\n  deps: {\n    logger: 'logger',\n  },\n});\n")),(0,a.kt)("h3",{id:"value"},"Value"),(0,a.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0442\u0435\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u044b \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"useValue"),", \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"deps")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'token',\n  useValue: { appName: 'APP' },\n});\n")),(0,a.kt)("h2",{id:"multi-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b"},"Multi \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b"),(0,a.kt)("p",null,"\u041d\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0442\u043e\u043a\u0435\u043d\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0448\u0430\u0433\u0430. \u0427\u0442\u043e \u0431\u044b \u044d\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c, \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"multi")," \u0432 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440. \u0412 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0432 di \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst providers = [\n  provide({\n    provide: 'token',\n    multi: true,\n    useValue: { route: '/' },\n  }),\n  provide({\n    provide: 'token',\n    multi: true,\n    useValue: { route: '/cards' },\n  }),\n];\n")),(0,a.kt)("h2",{id:"\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438-deps"},"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 (deps)"),(0,a.kt)("p",null,"\u041d\u0443\u0436\u043d\u044b \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430. \u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0431\u0443\u0434\u0443\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0438\u043d\u0441\u0442\u0430\u043d\u0441\u044b \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0432 deps \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u044b \u0432 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u043f\u0435\u0440\u0432\u044b\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c. \u041a\u043b\u044e\u0447\u0430\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 deps \u0431\u0443\u0434\u0443\u0442 \u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u043f\u0430\u0434\u0443\u0442 \u0432 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0439\u0434\u0435\u043d \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0432 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e\u043c DI, \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u043e\u0448\u0435\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0441 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435\u043c \u0447\u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d."),(0,a.kt)("h3",{id:"\u0444\u043e\u0440\u043c\u0430\u0442-1"},"\u0424\u043e\u0440\u043c\u0430\u0442"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Provider = {\n  deps: {\n    [key: string]:\n      | Token\n      | {\n          token: Token;\n          optional?: boolean;\n          multi?: boolean;\n        };\n  };\n};\n")),(0,a.kt)("h3",{id:"\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"},"\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"),(0,a.kt)("p",null,"\u041d\u0430\u043c \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0443\u0436\u043d\u044b \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b. \u0418 \u043c\u044b \u0445\u043e\u0442\u0438\u043c \u043f\u043e\u043c\u0435\u0442\u0438\u0442\u044c, \u0447\u0442\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0438 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u043a\u0438\u0434\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"optional")," \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442 \u0432\u044b\u0431\u0440\u043e\u0441 \u043e\u0448\u0438\u0431\u043a\u0438 \u043f\u0440\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438. \u0412\u043c\u0435\u0441\u0442\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0443 \u043f\u0440\u0438\u0434\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'token',\n  useClass: class A {\n    constructor({ log }) {}\n  },\n  deps: {\n    log: {\n      token: 'log',\n      optional: true,\n    },\n  } as const,\n});\n")),(0,a.kt)("h3",{id:"multi-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"},"Multi \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"),(0,a.kt)("p",null,"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043c\u0443\u043b\u044c\u0442\u0438 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430\u043c\u0438 \u0438 \u0432\u043c\u0435\u0441\u0442\u043e \u043e\u0434\u043d\u043e\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u043d\u0430\u043c \u043f\u0440\u0438\u0434\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439. \u0414\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430 \u0442\u0438\u043f\u043e\u0432, \u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"multi: true"),", \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"as const")," \u0434\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"deps")," \u0431\u043b\u043e\u043a\u0430 \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430 \u0442\u0438\u043f\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 TS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'token',\n  useClass: class A {\n    constructor({ commands }) {\n      commands.forEach();\n    }\n  },\n  deps: {\n    commands: {\n      token: 'commands',\n      multi: true,\n    },\n  } as const,\n});\n")),(0,a.kt)("h3",{id:"circular-dependency"},"Circular dependency"),(0,a.kt)("p",null,"DI \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u044a\u044f\u0432\u043b\u044f\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0443 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst providers = [\n  provide({\n    provide: 'A',\n    deps: {\n      B: 'B',\n    },\n  }),\n  provide({\n    provide: 'B',\n    deps: {\n      A: 'A',\n    },\n  }),\n];\n")),(0,a.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043c\u044b \u0441 \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u043c \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u043d\u0441\u0442\u0430\u043d\u0441\u044b \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432 \u0438 \u043a\u043e\u0434 \u0432\u044b\u043a\u0438\u043d\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443."),(0,a.kt)("p",null,"\u041f\u043e\u0434\u043e\u0431\u043d\u044b\u0435 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u0441\u0442\u043e\u0438\u0442 \u043f\u0435\u0440\u0435\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0438 \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u043e\u0431\u0449\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u0430\u0441\u0441 \u0438 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"A")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"B")),(0,a.kt)("h2",{id:"scope"},"Scope"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u041e\u043f\u0446\u0438\u044f \u0432\u043b\u0438\u044f\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u043e\u0431\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u0441 \u0440\u0430\u0437\u043d\u044b\u043c \u0441\u043a\u043e\u043f\u043e\u043c \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435")),(0,a.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0438\u043d\u0433\u043b\u0442\u043e\u043d \u0438\u043d\u0441\u0442\u0430\u043d\u0441\u044b \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u0449\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432. \u0412 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u043c \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435, \u043a\u0430\u0436\u0434\u044b\u0439 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0434\u0430\u043b\u044f\u0442\u044c\u0441\u044f \u0438 \u043f\u0435\u0440\u0435\u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430. \u042d\u0442\u043e\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0431\u044b\u043b \u0441\u0434\u0435\u043b\u0430\u043d \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0443 \u043d\u0430\u0441 \u0431\u044b\u043b\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0445\u0440\u0430\u043d\u0438\u0442\u044c, \u043a\u0430\u043a \u0438 \u0441\u0438\u043d\u0433\u043b\u0442\u043e\u043d\u044b, \u043a \u043f\u0440\u0438\u043c\u0435\u0440\u0443 \u043a\u044d\u0448, \u0442\u0430\u043a \u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443 \u0441\u0442\u0430\u0442\u0443\u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e."),(0,a.kt)("p",null,"\u041f\u043e \u0434\u0435\u0444\u043e\u043b\u0442\u0443 \u0432\u0441\u0435 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b \u0438\u043c\u0435\u044e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"Scope.REQUEST"),", \u0447\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430. \u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"useValue"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0435\u0434\u0443\u0442 \u0441\u0435\u0431\u044f \u043a\u0430\u043a \u0441\u0438\u043d\u0433\u043b\u0442\u043e\u043d."),(0,a.kt)("h2",{id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'Cache',\n  useFactory: Cache,\n  scope: Scope.SINGLETON,\n});\n")),(0,a.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"Cache")," \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0438\u043d\u0433\u043b\u0442\u043e\u043d, \u0442\u0430\u043a \u043a\u0430\u043a \u0431\u044b\u043b \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," \u0438 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0435\u0434\u0438\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0430\u043d\u0441 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439."),(0,a.kt)("h2",{id:"\u0442\u043e\u043a\u0435\u043d\u044b-token"},"\u0422\u043e\u043a\u0435\u043d\u044b (token)"),(0,a.kt)("p",null,"\u0422\u043e\u043a\u0435\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0432 DI. \u041f\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044e \u0442\u043e\u043a\u0435\u043d\u0430 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0438 \u043f\u043e\u0438\u0441\u043a \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."),(0,a.kt)("h2",{id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441-1"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type token = Token | string;\n")),(0,a.kt)("p",null,"\u0422\u043e\u043a\u0435\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043a\u0430\u043a \u0441\u0442\u0440\u043e\u043a\u043e\u0439, \u0442\u0430\u043a \u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u043c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"createToken")," \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0438 \u0441\u0442\u0440\u043e\u043a\u0443 \u0438 createToken, \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u0442\u043e, \u0447\u0442\u043e \u0431\u044b \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0431\u044b\u043b \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c"),(0,a.kt)("h2",{id:"createtoken"},"createToken"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createToken } from '@tinkoff/dippy';\nimport { provide } from '@tramvai/core';\n\nconst loggerToken = createToken<Logger>('logger');\n\nconst provider = provide({\n  provide: loggerToken,\n  useClass: Logger,\n});\n")),(0,a.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u0437\u0430\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u0432 createToken \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0442\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0442\u0438\u043f\u043e\u0432 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432."))}u.isMDXComponent=!0}}]);