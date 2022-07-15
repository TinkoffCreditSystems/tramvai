"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7669],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(i,".").concat(m)]||u[m]||l[m]||s;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<s;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3184:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>p,toc:()=>d,default:()=>u});var r=t(7462),o=t(3366),s=(t(7294),t(3905)),a=["components"],c={},i=void 0,p={unversionedId:"references/tokens/render",id:"references/tokens/render",title:"render",description:"Tramvai tokens for integration and extending render module.",source:"@site/tmp-docs/references/tokens/render.md",sourceDirName:"references/tokens",slug:"/references/tokens/render",permalink:"/docs/references/tokens/render",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tokens/render.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"metrics",permalink:"/docs/references/tokens/metrics"},next:{title:"router",permalink:"/docs/references/tokens/router"}},d=[{value:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u043a\u0435\u043d\u043e\u0432",id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u0442\u043e\u043a\u0435\u043d\u043e\u0432",children:[],level:2},{value:"Render slots",id:"render-slots",children:[],level:2}],l={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Tramvai tokens for integration and extending render module."),(0,s.kt)("h2",{id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u0442\u043e\u043a\u0435\u043d\u043e\u0432"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u043a\u0435\u043d\u043e\u0432"),(0,s.kt)("p",null,(0,s.kt)("pre",{parentName:"p"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { ReactElement, ComponentType } from 'react';\nimport { createToken } from '@tinkoff/dippy';\nimport { StorageRecord } from '@tinkoff/htmlpagebuilder';\nimport * as ResourceSlot from './slots';\n\n/**\n * @description\n * Token adding resources to specific render slots.\n * Used only on server and it is equivalent to usage of RESOURCES_REGISTRY.\n *\n * [Usage example](https://tramvai.dev/docs/how-to/render-add-resources)\n */\nexport const RENDER_SLOTS = createToken<PageResource | PageResource[]>('RENDER_SLOTS', {\n  multi: true,\n});\n\n/**\n * @description\n * Token for defining additional attributes for html, body and app container. Keep in mind that:\n *  - only raw html attributes are allowed (not react or anything else, e.g. do not use className use class)\n *  - new attributes overrides old one\n *  - only text values are supported\n *\n * @example\n  ```tsx\n  {\n    provide: HTML_ATTRS,\n    useValue: {\n      target: 'body',\n      attrs: {\n        class: 'custom-class',\n      },\n    },\n    multi: true,\n  },\n  ```\n */\nexport const HTML_ATTRS = createToken<HtmlAttrs>('HTML_ATTRS', { multi: true });\n\n/**\n * @description\n * Add node-style callback on render event in browser.\n * Passes error instance as first argument if there was an error\n */\nexport const RENDERER_CALLBACK = createToken<(e?: Error) => void>('RENDERER_CALLBACK', {\n  multi: true,\n});\n\n/**\n * @description\n * Used as async function which overrides app render. This function may define render parameters or override render result.\n */\nexport const CUSTOM_RENDER = createToken<(content: JSX.Element) => Promise<string>>(\n  'CUSTOM_RENDER'\n);\n\n/**\n * @description\n * Resources registry is used only on server for registering any additional assets for browser (scripts, styles, html) which should be added to response html page\n */\nexport const RESOURCES_REGISTRY = createToken<ResourcesRegistry>('resourcesRegistry');\n\n/**\n * @description\n * A string used for check of need to loading polyfills in the client browser.\n * Polyfills are always loading for browsers without module support and if browser do support modules\n * this check will called in order to find out the need of loading polyfills\n * (by default checks for Promise.prototype.finally and implementations for URL and URLSearchParams)\n *\n * [Polyfill documentation](https://tramvai.dev/docs/how-to/how-to-enable-polyfills)\n */\nexport const POLYFILL_CONDITION = createToken<string>('POLYFILL_CONDITION');\n\n/**\n * @deprecated tramvai will automatically detect React version, and use hydrateRoot API for 18+ version\n * For Strict Mode, use token `USE_REACT_STRICT_MODE`\n */\nexport const RENDER_MODE = createToken<RenderMode>('RENDER_MODE');\n\n/**\n * @description add Strict Mode wrapper, more info available in documentation https://reactjs.org/docs/strict-mode.html\n */\nexport const USE_REACT_STRICT_MODE = createToken<boolean>('useReactStrictMode');\n\n/**\n * @description\n * A wrapper for app render.\n * Through that token is possible to specify for example React.Context.Provider for the app\n */\nexport const EXTEND_RENDER = createToken<(current: ReactElement) => ReactElement>('EXTEND_RENDER', {\n  multi: true,\n});\n\n/**\n * @description\n * Token for default layout for page\n */\nexport const DEFAULT_LAYOUT_COMPONENT = createToken('defaultLayoutComponent');\n\n/**\n * @description\n * Token for default header for page\n */\nexport const DEFAULT_HEADER_COMPONENT = createToken('defaultHeaderComponent');\n\n/**\n * @description\n * Token for default footer for page\n */\nexport const DEFAULT_FOOTER_COMPONENT = createToken('defaultFooterComponent');\n\n/**\n * @description\n * Token for passing parameters for page layout\n */\nexport const LAYOUT_OPTIONS = createToken<LayoutOptions | LayoutOptions[]>('layoutOptions', {\n  multi: true,\n});\n\ntype ReactComponent = ComponentType<any>;\n\ntype Wrapper = (WrappedComponent: ReactComponent) => ReactComponent;\n\nexport interface LayoutOptions {\n  components?: Record<string, ReactComponent>;\n  wrappers?: Record<string, Wrapper | Wrapper[]>;\n}\n\nexport interface PageResource {\n  type: keyof typeof StorageRecord;\n  slot: typeof ResourceSlot[keyof typeof ResourceSlot];\n  payload: string | null;\n  attrs?: Record<string, string | null>;\n}\n\nexport interface ResourcesRegistry {\n  register(resource: PageResource | PageResource[]): void;\n  getPageResources(): PageResource[];\n}\n\nexport type HtmlAttrs = {\n  target: 'html' | 'body' | 'app';\n  attrs: { [name: string]: string | boolean | Record<string, any> | number };\n};\n\n/**\n * @deprecated\n */\nexport type RenderMode = 'legacy' | 'strict' | 'blocking' | 'concurrent';\n\ntype ResourceInlineOptions = {\n  threshold: number;\n  types: (keyof typeof StorageRecord)[];\n};\n\n/**\n * @description\n * Settings for HTML resources inlining\n * * threshold Maximum value (in bytes) of the file which are getting inlined in HTML page\n * * types Types of resources which should be inlined\n */\nexport const RESOURCE_INLINE_OPTIONS = createToken<ResourceInlineOptions>(\n  'resourceInlineThreshold'\n);\n\n/**\n * @description\n * Experimental switcher from ssr to client-side rendering mode\n */\nexport const TRAMVAI_RENDER_MODE = createToken<TramvaiRenderMode>('tramvaiRenderMode');\n\nexport type TramvaiRenderMode = 'ssr' | 'client';\n\nexport { ResourceSlot };\nexport { StorageRecord as ResourceType };\n\n"))),(0,s.kt)("h2",{id:"render-slots"},"Render slots"),(0,s.kt)("p",null,(0,s.kt)("pre",{parentName:"p"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"export const HEAD_META = 'head:meta' as const;\nexport const HEAD_PERFORMANCE = 'head:performance' as const;\nexport const HEAD_CORE_STYLES = 'head:core-styles' as const;\nexport const HEAD_POLYFILLS = 'head:polyfills' as const;\nexport const HEAD_CORE_SCRIPTS = 'head:core-scripts' as const;\nexport const HEAD_DYNAMIC_SCRIPTS = 'head:dynamic-scripts' as const;\nexport const HEAD_ANALYTICS = 'head:analytics' as const;\nexport const HEAD_ICONS = 'head:icons' as const;\nexport const BODY_START = 'body:start' as const;\nexport const REACT_RENDER = 'react:render' as const;\nexport const BODY_END = 'body:end' as const;\nexport const BODY_TAIL_ANALYTICS = 'body:tail:analytics' as const;\nexport const BODY_TAIL = 'body:tail' as const;\n\n"))))}u.isMDXComponent=!0}}]);