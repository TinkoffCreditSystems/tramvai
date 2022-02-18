"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(h,a(a({ref:n},d),{},{components:t})):r.createElement(h,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5481:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>u});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={id:"provider",title:"Provider",sidebar_position:3},s=void 0,p={unversionedId:"concepts/provider",id:"concepts/provider",title:"Provider",description:"provider is a simple object that provides an implementation for an interface (identifier) \u200b\u200bfor a particular dependency. An implementation can be a constant value (string, function, symbol, class instance), factory, or class. A factory or class is initialized upon request to the corresponding identifier. It is possible to register several providers for one token, if the multi parameter is present.",source:"@site/tmp-docs/concepts/provider.md",sourceDirName:"concepts",slug:"/concepts/provider",permalink:"/docs/concepts/provider",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/concepts/provider.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"provider",title:"Provider",sidebar_position:3},sidebar:"sidebar",previous:{title:"Dependency Injection",permalink:"/docs/concepts/di"},next:{title:"Module",permalink:"/docs/concepts/module"}},d=[{value:"Format",id:"format",children:[],level:2},{value:"Types of providers",id:"types-of-providers",children:[{value:"Class",id:"class",children:[],level:3},{value:"Factory",id:"factory",children:[],level:3},{value:"Value",id:"value",children:[],level:3}],level:2},{value:"Multi providers",id:"multi-providers",children:[],level:2},{value:"Dependencies (deps)",id:"dependencies-deps",children:[{value:"Format",id:"format-1",children:[],level:3},{value:"Optional Dependencies",id:"optional-dependencies",children:[],level:3},{value:"Multi dependencies",id:"multi-dependencies",children:[],level:3},{value:"Circular dependency",id:"circular-dependency",children:[],level:3}],level:2},{value:"Scope",id:"scope",children:[],level:2},{value:"Interface",id:"interface",children:[],level:2},{value:"Tokens",id:"tokens",children:[],level:2},{value:"Interface",id:"interface-1",children:[],level:2},{value:"createToken",id:"createtoken",children:[],level:2}],c={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"provider is a simple object that provides an implementation for an interface (identifier) \u200b\u200bfor a particular dependency. An implementation can be a constant value (string, function, symbol, class instance), factory, or class. A factory or class is initialized upon request to the corresponding identifier. It is possible to register several providers for one token, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"multi")," parameter is present."),(0,o.kt)("h2",{id:"format"},"Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type Provider = {\n  provide: Token | string; // provider id\n  useValue?: any; // implementation of the identifier\n  useFactory?: any; // implementation of the identifier\n  useClass?: any; // implementation of the identifier\n  deps?: Record<string, Token | string>; // list of dependencies that the provider needs to work\n  multi?: boolean; // the ability to register multiple provider implementations, if true, when receiving the value of this identifier, all registered values \u200b\u200bwill come in the scope array\n  scope?: 'request' | 'singleton'; // If a singleton, then the container will register one instance of the provider for all client requests. If request will create its own instance for each client and Request\n};\n")),(0,o.kt)("h2",{id:"types-of-providers"},"Types of providers"),(0,o.kt)("h3",{id:"class"},"Class"),(0,o.kt)("p",null,"When the instance is initialized, the class passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"useClass")," will be created, if ",(0,o.kt)("inlineCode",{parentName:"p"},"deps")," were specified, then the class will be called with the object of implementations as the first argument"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'token',\n  useClass: class ImplementClass {\n    constructor({ logger }) {}\n  },\n  deps: {\n    logger: 'logger',\n  },\n});\n")),(0,o.kt)("h3",{id:"factory"},"Factory"),(0,o.kt)("p",null,"When the instance is initialized, the function passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"useFactory")," will be called, if ",(0,o.kt)("inlineCode",{parentName:"p"},"deps")," were specified, then the function will be called with the object of implementations as the first argument"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'token',\n  useFactory: ({ logger }) => new Implement(logger),\n  deps: {\n    logger: 'logger',\n  },\n});\n")),(0,o.kt)("h3",{id:"value"},"Value"),(0,o.kt)("p",null,"Sets the provider's value to the data that was passed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"useValue")," parameter, no additional initialization will be performed and ",(0,o.kt)("inlineCode",{parentName:"p"},"deps")," cannot be used"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'token',\n  useValue: { appName: 'APP' },\n});\n")),(0,o.kt)("h2",{id:"multi-providers"},"Multi providers"),(0,o.kt)("p",null,"We may need to be able to register multiple implementations for a single token. For example, several actions for one step. To implement this, you need to pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"multi")," parameter to the provider. In this case, an array of providers is stored in the di container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst providers = [\n  provide({\n    provide: 'token',\n    multi: true,\n    useValue: { route: '/' },\n  }),\n  provide({\n    provide: 'token',\n    multi: true,\n    useValue: { route: '/cards' },\n  }),\n];\n")),(0,o.kt)("h2",{id:"dependencies-deps"},"Dependencies (deps)"),(0,o.kt)("p",null,"Needed to specify the dependencies that are needed for the provider to work. When creating a provider, dependency instances will be created, which are specified in deps and passed to the provider as the first argument. The keys of the deps object will be the implementations that will be sent to the provider. In this case, if the provider is not found in the global DI, an error will be thrown notifying that the current token was not found."),(0,o.kt)("h3",{id:"format-1"},"Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type Provider = {\n  deps: {\n    [key: string]:\n      | Token\n      | {\n          token: Token;\n          optional?: boolean;\n          multi?: boolean;\n        };\n  };\n};\n")),(0,o.kt)("h3",{id:"optional-dependencies"},"Optional Dependencies"),(0,o.kt)("p",null,"We don't always need mandatory dependencies to work. And we want to point out that the dependency is not necessary to work and it is not necessary to throw an error. To do this, you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"optional")," parameter, which will disable throwing an error if there is no dependency. Instead of implementing the dependency, the provider will receive the value ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'token',\n  useClass: class A {\n    constructor({ log }) {}\n  },\n  deps: {\n    log: {\n      token: 'log',\n      optional: true,\n    },\n  } as const,\n});\n")),(0,o.kt)("h3",{id:"multi-dependencies"},"Multi dependencies"),(0,o.kt)("p",null,"Some providers are multi-providers and instead of one implementation, we will receive an array of implementations. For correct type inference, we must pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"multi: true")," parameter, apply ",(0,o.kt)("inlineCode",{parentName:"p"},"as const")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"deps")," block for correct type inference via TS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'token',\n  useClass: class A {\n    constructor({ commands }) {\n      commands.forEach();\n    }\n  },\n  deps: {\n    commands: {\n      token: 'commands',\n      multi: true,\n    },\n  } as const,\n});\n")),(0,o.kt)("h3",{id:"circular-dependency"},"Circular dependency"),(0,o.kt)("p",null,"DI does not allow declaring dependencies that depend on each other, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst providers = [\n  provide({\n    provide: 'A',\n    deps: {\n      B: 'B',\n    },\n  }),\n  provide({\n    provide: 'B',\n    deps: {\n      A: 'A',\n    },\n  }),\n];\n")),(0,o.kt)("p",null,"In this example, we will not be able to correctly create provider instances and the code will throw an error."),(0,o.kt)("p",null,"Such providers should reconsider and make a common part in a separate class, and provider and used in conjunction ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"B")),(0,o.kt)("h2",{id:"scope"},"Scope"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"option only affects the operation of the container on the server, only one common container running on the client, in which service providers with a different crowd kept together")),(0,o.kt)("p",null,"Allows you to create singleton instances that will be shared between multiple clients. In standard behavior, each declared provider will be automatically deleted and recreated for each new client. This functionality was made in order for us to be able to store both singletons, for example, cache, and various personalized data. For example, user status and personalization."),(0,o.kt)("p",null,"By default, all providers have the value ",(0,o.kt)("inlineCode",{parentName:"p"},"Scope.REQUEST"),", which means that provider values \u200b\u200bwill be generated for each client. The exception is the ",(0,o.kt)("inlineCode",{parentName:"p"},"useValue")," providers, which behave like a singleton."),(0,o.kt)("h2",{id:"interface"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nconst provider = provide({\n  provide: 'Cache',\n  useFactory: Cache,\n  scope: Scope.SINGLETON,\n});\n")),(0,o.kt)("p",null,"In this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cache")," provider will be registered as a global singleton, since the ",(0,o.kt)("inlineCode",{parentName:"p"},"scope")," parameter was passed and a single instance for all users will be used."),(0,o.kt)("h2",{id:"tokens"},"Tokens"),(0,o.kt)("p",null,"Tokens are used as an identifier for the provider in DI. By the value of the token, the provider is registered and the implementation is searched."),(0,o.kt)("h2",{id:"interface-1"},"Interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type token = Token | string;\n")),(0,o.kt)("p",null,"A token can be either a string or a specially created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"createToken")," function into which an interface can be passed. In this case, you can use both a string and createToken at the same time, the main thing is that the identifier is the same"),(0,o.kt)("h2",{id:"createtoken"},"createToken"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createToken } from '@tinkoff/dippy';\nimport { provide } from '@tramvai/core';\n\nconst loggerToken = createToken<Logger>('logger');\n\nconst provider = provide({\n  provide: loggerToken,\n  useClass: Logger,\n});\n")),(0,o.kt)("p",null,"The main difference is that you can pass an implementation interface to createToken, which will then be used for type checking when getting dependencies and creating providers."))}u.isMDXComponent=!0}}]);