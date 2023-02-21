"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function v(e){var t,n,r,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,c=m(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:c})})),k=v[0],g=v[1],b=f({queryString:s,groupId:u}),y=b[0],h=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),T=N[0],x=N[1],P=function(){var e=null!=y?y:T;return d({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){P&&g(P)}),[P]),{selectedValue:k,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);g(e),h(e),x(e)}),[h,x,c]),tabValues:c}}var k=n(2389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){var t=e.className,n=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==l&&(c(t),s(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=p.indexOf(e.currentTarget)+1;n=null!=(r=p[a])?r:p[0];break;case"ArrowLeft":var o,i=p.indexOf(e.currentTarget)-1;n=null!=(o=p[i])?o:p[p.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function h(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function N(e){var t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function T(e){var t=(0,k.Z)();return a.createElement(N,(0,r.Z)({key:String(t)},e))}},5214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4866),l=n(5162),s=["components"],u={},p=void 0,c={unversionedId:"references/tramvai/storybook-addon",id:"references/tramvai/storybook-addon",title:"storybook-addon",description:"Storybook addon for tramvai apps",source:"@site/tmp-docs/references/tramvai/storybook-addon.md",sourceDirName:"references/tramvai",slug:"/references/tramvai/storybook-addon",permalink:"/docs/references/tramvai/storybook-addon",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tramvai/storybook-addon.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"state",permalink:"/docs/references/tramvai/state"},next:{title:"base",permalink:"/docs/references/cli/base"}},m={},d=[{value:"Installation",id:"installation",level:2},{value:"Features",id:"features",level:2},{value:"How to",id:"how-to",level:2},{value:"Access to DI container",id:"access-to-di-container",level:3},{value:"Router hooks and components",id:"router-hooks-and-components",level:3},{value:"React Query",id:"react-query",level:3},{value:"Page actions running",id:"page-actions-running",level:3},{value:"Http clients with real requests",id:"http-clients-with-real-requests",level:3},{value:"How to provide environment variables?",id:"how-to-provide-environment-variables",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"&quot;Rendered more hooks than during the previous render.&quot;",id:"rendered-more-hooks-than-during-the-previous-render",level:3},{value:"Contribute",id:"contribute",level:2}],f={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Storybook addon for tramvai apps"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"@tramvai/storybook-addon"),":"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @tramvai/storybook-addon\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/storybook-addon\n")))),(0,o.kt)("p",null,"And connect addon in the storybook configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".storybook/main.js"',title:'".storybook/main.js"'},'module.exports = {\n  addons: ["@tramvai/storybook-addon"]\n}\n')),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Providers for DI container"),(0,o.kt)("li",{parentName:"ul"},"Providers for router"),(0,o.kt)("li",{parentName:"ul"},"Providers for ",(0,o.kt)("inlineCode",{parentName:"li"},"react-query")),(0,o.kt)("li",{parentName:"ul"},"Page actions support"),(0,o.kt)("li",{parentName:"ul"},"tramvai ",(0,o.kt)("inlineCode",{parentName:"li"},"babel")," configuration"),(0,o.kt)("li",{parentName:"ul"},"tramvai ",(0,o.kt)("inlineCode",{parentName:"li"},"postcss")," configuration")),(0,o.kt)("h2",{id:"how-to"},"How to"),(0,o.kt)("h3",{id:"access-to-di-container"},"Access to DI container"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"page",label:"page.tsx",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LOGGER_TOKEN } from '@tramvai/tokens-common';\n\nexport const Page = () => {\n  const logger = useDi(LOGGER_TOKEN);\n\n  logger.info('render');\n\n  return (\n    <h1>Page</h1>\n  );\n}\n"))),(0,o.kt)(l.Z,{value:"story",label:"page.stories.tsx",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { TramvaiStoriesParameters } from '@tramvai/storybook-addon';\nimport { Page } from './page';\n\n// You can pass to DI container any reducers, providers and modules\nconst parameters: TramvaiStoriesParameters = {\n  tramvai: {\n    stores: [],\n    initialState: {},\n    providers: [],\n    modules: [],\n  },\n};\n\nexport default {\n  title: 'Page',\n  component: Page,\n  parameters,\n};\n\nexport const PageStory = () => <Page />;\n")))),(0,o.kt)("h3",{id:"router-hooks-and-components"},"Router hooks and components"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"page",label:"page.tsx",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Link, useUrl } from '@tramvai/module-router';\n\nexport const Page = () => {\n  const url = useUrl();\n\n  return (\n    <>\n      <h1>Page at {url.pathname}</h1>\n      <p>\n        <Link url=\"/third/\">to third page</Link>\n      </p>\n    </>\n  );\n}\n"))),(0,o.kt)(l.Z,{value:"story",label:"page.stories.tsx",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { TramvaiStoriesParameters } from '@tramvai/storybook-addon';\nimport { Page } from './page';\n\n// You can pass to router current route and url\nconst parameters: TramvaiStoriesParameters = {\n  tramvai: {\n    currentRoute: { name: 'second', path: '/second/' },\n  },\n};\n\nexport default {\n  title: 'Page',\n  component: Page,\n  parameters,\n};\n\nexport const PageStory = () => <Page />;\n")))),(0,o.kt)("h3",{id:"react-query"},"React Query"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"page",label:"page.tsx",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createQuery, useQuery } from '@tramvai/react-query';\n\n\nconst query = createQuery({\n  key: 'base',\n  fn: async () => {\n    return { foo: 'bar' };\n  },\n});\n\nexport const Page = () => {\n  const { data, isLoading } = useQuery(query);\n\n  return (\n    <>\n      <h1>Page</h1>\n      <p>\n        {isLoading ? 'Loading...' : data.foo}\n      </p>\n    </>\n  );\n}\n"))),(0,o.kt)(l.Z,{value:"story",label:"page.stories.tsx",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { TramvaiStoriesParameters } from '@tramvai/storybook-addon';\nimport { Page } from './page';\n\n// You can pass to router QueryClient default options\nconst parameters: TramvaiStoriesParameters = {\n  tramvai: {\n    reactQueryDefaultOptions: {\n      queries: {\n        refetchOnMount: false,\n        refetchOnReconnect: false,\n        refetchOnWindowFocus: false,\n      },\n    },\n  },\n};\n\nexport default {\n  title: 'Page',\n  component: Page,\n  parameters,\n};\n\nexport const PageStory = () => <Page />;\n")))),(0,o.kt)("h3",{id:"page-actions-running"},"Page actions running"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"page",label:"page.tsx",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { declareAction } from '@tramvai/core';\n\nconst serverAction = declareAction({\n  name: 'server-action',\n  fn() {\n    console.log('server action');\n  },\n  conditions: {\n    onlyServer: true,\n  },\n});\n\nconst browserAction = declareAction({\n  name: 'browser-action',\n  fn() {\n    console.log('browser action');\n  },\n  conditions: {\n    onlyBrowser: true,\n  },\n});\n\nexport const Page = () => {\n  return (\n    <h1>Page</h1>\n  );\n}\n\nPage.actions = [serverAction, browserAction];\n"))),(0,o.kt)(l.Z,{value:"story",label:"page.stories.tsx",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { TramvaiStoriesParameters } from '@tramvai/storybook-addon';\nimport { Page } from './page';\n\n// Actions with `onlyBrowser` condition will be executed\nconst parameters: TramvaiStoriesParameters = {\n  tramvai: {\n    actions: Page.actions,\n  },\n};\n\nexport default {\n  title: 'Page',\n  component: Page,\n  parameters,\n};\n\nexport const PageStory = () => <Page />;\n")))),(0,o.kt)("h3",{id:"http-clients-with-real-requests"},"Http clients with real requests"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"page",label:"page.tsx",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { declareAction } from '@tramvai/core';\n\nconst httpRequestAction = declareAction({\n  name: 'http-request-action',\n  async fn() {\n    return this.deps.httpClient.get('/');\n  },\n  deps: {\n    httpClient: HTTP_CLIENT,\n  },\n});\n\nexport const Page = () => {\n  return (\n    <h1>Page</h1>\n  );\n}\n\nPage.actions = [httpRequestAction];\n"))),(0,o.kt)(l.Z,{value:"story",label:"page.stories.tsx",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { HttpClientModule } from '@tramvai/module-http-client';\nimport type { TramvaiStoriesParameters } from '@tramvai/storybook-addon';\nimport { Page } from './page';\n\n// HttpClientModule is required for real requests\nconst parameters: TramvaiStoriesParameters = {\n  tramvai: {\n    actions: Page.actions,\n    modules: [HttpClientModule],\n  },\n};\n\nexport default {\n  title: 'Page',\n  component: Page,\n  parameters,\n};\n\nexport const PageStory = () => <Page />;\n")))),(0,o.kt)("h3",{id:"how-to-provide-environment-variables"},"How to provide environment variables?"),(0,o.kt)("p",null,"This addon provides a few important defaults:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mock provider for ",(0,o.kt)("inlineCode",{parentName:"li"},"ENV_MANAGER_TOKEN")),(0,o.kt)("li",{parentName:"ul"},"Read ",(0,o.kt)("inlineCode",{parentName:"li"},"env.development.js")," content from application root")),(0,o.kt)("p",null,"So, any variables from ",(0,o.kt)("inlineCode",{parentName:"p"},"env.development.js")," will be registered in ",(0,o.kt)("inlineCode",{parentName:"p"},"envManager"),"."),(0,o.kt)("p",null,"If you want to add custom variables for some stories, pass ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"CommonTestModule")," (from ",(0,o.kt)("inlineCode",{parentName:"p"},"@tramvai/test-mocks")," package) in story parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const parameters: TramvaiStoriesParameters = {\n  tramvai: {\n    options: {\n      env: {\n        FOO: 'BAR',\n      },\n    },\n  },\n};\n")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"rendered-more-hooks-than-during-the-previous-render"},'"Rendered more hooks than during the previous render."'),(0,o.kt)("p",null,"In case of using both ",(0,o.kt)("inlineCode",{parentName:"p"},"fastRefresh")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"strictMode")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"reactOptions")," in Storybook config in main.js, you might see the error message above."),(0,o.kt)("p",null,"This is a known issue in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/storybookjs/storybook/issues/15223"},"Storybook itself"),", as a temporary workaround you can simply disable the ",(0,o.kt)("inlineCode",{parentName:"p"},"strictMode")," in Storybook config."),(0,o.kt)("p",null,"Won't work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".storybook/main.js"',title:'".storybook/main.js"'},"module.exports = {\n  reactOptions: {\n    fastRefresh: true,\n    strictMode: true,\n  }\n};\n")),(0,o.kt)("p",null,"Works:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".storybook/main.js"',title:'".storybook/main.js"'},"module.exports = {\n  reactOptions: {\n    fastRefresh: true,\n  }\n};\n")),(0,o.kt)("h2",{id:"contribute"},"Contribute"),(0,o.kt)("p",null,"For testing changes in this plugin locally, you need a few steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"[tramvai repo]"," Copy ",(0,o.kt)("inlineCode",{parentName:"li"},"examples-standalone/storybook")," application to different folder, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"storybook-app")),(0,o.kt)("li",{parentName:"ol"},"[storybook-app]"," run ",(0,o.kt)("inlineCode",{parentName:"li"},"git init")," in this folder (",(0,o.kt)("inlineCode",{parentName:"li"},"@storybook/builder-webpack5")," uses as root the first parent directory containing ",(0,o.kt)("inlineCode",{parentName:"li"},".git")," folder)"),(0,o.kt)("li",{parentName:"ol"},"[storybook-app]"," Update there all ",(0,o.kt)("inlineCode",{parentName:"li"},"tramvai")," dependencies in ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")),(0,o.kt)("li",{parentName:"ol"},"[tramvai repo]"," Copy plugin build output from ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/tramvai/storybook-addon/lib")),(0,o.kt)("li",{parentName:"ol"},"[storybook-app]"," Paste into the ",(0,o.kt)("inlineCode",{parentName:"li"},"storybook-app/node_modules/@tramvai/storybook-addon/lib")," folder"),(0,o.kt)("li",{parentName:"ol"},"[storybook-app]"," Run ",(0,o.kt)("inlineCode",{parentName:"li"},"storybook")," in nested folder ",(0,o.kt)("inlineCode",{parentName:"li"},"cd storybook && npm run storybook"))))}v.isMDXComponent=!0}}]);