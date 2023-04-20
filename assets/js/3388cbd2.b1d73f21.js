"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=o,y=m["".concat(i,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],p={id:"layouts",title:"Layouts"},i=void 0,s={unversionedId:"features/layouts",id:"features/layouts",title:"Layouts",description:"Every pages may have a two levels of layouts:",source:"@site/tmp-docs/03-features/04-layouts.md",sourceDirName:"03-features",slug:"/features/layouts",permalink:"/docs/features/layouts",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/04-layouts.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"layouts",title:"Layouts"},sidebar:"sidebar",previous:{title:"Pages",permalink:"/docs/features/pages"},next:{title:"Error Boundaries",permalink:"/docs/features/error-boundaries"}},u={},d=[{value:"Root Layout",id:"root-layout",level:2},{value:"Structure",id:"structure",level:3},{value:"Components",id:"components",level:4},{value:"Wrappers",id:"wrappers",level:4},{value:"Header and Footer",id:"header-and-footer",level:3},{value:"Components and Wrappers",id:"components-and-wrappers",level:3},{value:"Replace Root Layout",id:"replace-root-layout",level:3},{value:"Nested Layout",id:"nested-layout",level:2},{value:"Actions",id:"actions",level:3},{value:"Reducers",id:"reducers",level:3},{value:"Adding a nested layout",id:"adding-a-nested-layout",level:3},{value:"<code>_layout.tsx</code>",id:"_layouttsx",level:4},{value:"For manually created routes",id:"for-manually-created-routes",level:4}],m={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Every pages may have a two levels of layouts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Root Layout (global)"),(0,r.kt)("li",{parentName:"ul"},"Nested Layout (page level)")),(0,r.kt)("h2",{id:"root-layout"},"Root Layout"),(0,r.kt)("p",null,"This layout is global for every application page. By default, only current page component will be rendered, but you can easily add ",(0,r.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Footer")," or any global components."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use Root Layout features, when you need to add some HTML tags globally to all application Pages.")),(0,r.kt)("h3",{id:"structure"},"Structure"),(0,r.kt)("p",null,"Layout has the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<LayoutWrapper>\n  {globalComponents}\n  <ContentWrapper>\n    <HeaderWrapper>\n      <Header />\n    </HeaderWrapper>\n    <PageWrapper>{page}</PageWrapper>\n    <FooterWrapper>\n      <Footer />\n    </FooterWrapper>\n  </ContentWrapper>\n</LayoutWrapper>\n")),(0,r.kt)("p",null,"Any of the wrappers could be customized. By default, every wrapper just renders passed ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," prop, but ",(0,r.kt)("inlineCode",{parentName:"p"},"HeaderWrapper")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FooterWrapper")," render only if components ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Footer")," were passed as props to result layout."),(0,r.kt)("h4",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"header"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"footer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"layout"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"content"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"page")," are base components for wrappers. They should render passed prop ",(0,r.kt)("inlineCode",{parentName:"li"},"children"),". By default, ",(0,r.kt)("inlineCode",{parentName:"li"},"layout"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"content"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"page"),' are "render children" while ',(0,r.kt)("inlineCode",{parentName:"li"},"header")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"footer"),' are "render prop"'),(0,r.kt)("li",{parentName:"ul"},"any of the other components are, so called, ",(0,r.kt)("inlineCode",{parentName:"li"},"globalComponents"),". They are just rendered as components inside ",(0,r.kt)("inlineCode",{parentName:"li"},"LayoutWrapper"))),(0,r.kt)("h4",{id:"wrappers"},"Wrappers"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ru.reactjs.org/docs/higher-order-components.html"},"HOC")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"header"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"footer"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"layout"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"content"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"page")," - HOC for the base components"),(0,r.kt)("li",{parentName:"ul"},"all of the other components are HOCs for \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 wrappers - HOC for corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"globalComponents"))),(0,r.kt)("p",null,"It is possible to pass a list of HOCs. This way order of render wrapping for passed component will be from end to start of the list."),(0,r.kt)("p",null,"Such wrappers and used for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hide/show elements by condition"),(0,r.kt)("li",{parentName:"ul"},"set additional css style for components"),(0,r.kt)("li",{parentName:"ul"},"inject additional code/handler"),(0,r.kt)("li",{parentName:"ul"},"pass additional props")),(0,r.kt)("p",null,"Example of such wrapper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'function layoutWrapper(WrappedComponent) {\n  return (props) => (\n    <div className="ui-layout">\n      <WrappedComponent {...props} />\n    </div>\n  );\n}\n')),(0,r.kt)("h3",{id:"header-and-footer"},"Header and Footer"),(0,r.kt)("p",null,"You can register header and footer components through providers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { DEFAULT_HEADER_COMPONENT, DEFAULT_FOOTER_COMPONENT } from '@tramvai/tokens-render';\nimport { provide } from '@tramvai/core';\n\ncreateApp({\n  providers: [\n    provide({\n      provide: DEFAULT_HEADER_COMPONENT,\n      useValue: DefaultHeader,\n    }),\n    provide({\n      provide: DEFAULT_FOOTER_COMPONENT,\n      useValue: DefaultFooter,\n    }),\n  ],\n});\n")),(0,r.kt)("h3",{id:"components-and-wrappers"},"Components and Wrappers"),(0,r.kt)("p",null,"You can add custom components and wrappers for layout via the token ",(0,r.kt)("inlineCode",{parentName:"p"},"LAYOUT_OPTIONS"),", this wrappers also will be applied on every application page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LAYOUT_OPTIONS } from '@tramvai/tokens-render';\nimport { provide } from '@tramvai/core';\n\ncreateApp({\n  providers: [\n    provide({\n      provide: LAYOUT_OPTIONS,\n      useValue: {\n        // React components\n        components: {\n          // global layout component\n          layout: Layout,\n          // custom global component\n          feedback: Feedback,\n        },\n        // HOC's for components\n        wrappers: {\n          // wrapper for global layout component\n          layout: layoutWrapper,\n          // wrappers for global Feedback component\n          feedback: [feedbackWrapper1, feedbackWrapper2],\n        },\n      },\n    }),\n  ],\n});\n")),(0,r.kt)("h3",{id:"replace-root-layout"},"Replace Root Layout"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We are strongly recommend to always use a default Root Layout, because some of ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," core functionality depends on it.")),(0,r.kt)("p",null,"If the basic layout doesn't work for you, you can replace it with any other React component. In doing so, you need to implement all the wrappers yourself and plug in global components if you need them."),(0,r.kt)("p",null,"You can add a ",(0,r.kt)("inlineCode",{parentName:"p"},"layoutComponent")," property to route ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," property when adding routes manually (this feature is not supported with File-System Routing). This layout will be rendered when you go to the corresponding route."),(0,r.kt)("p",null,"First, create a new component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/custom-layout.tsx"',title:'"pages/custom-layout.tsx"'},"import type { LayoutComponent } from '@tramvai/react';\n\nconst CustomLayout: LayoutComponent = ({ children }) => {\n  return (\n    <>\n      <Header />\n      {children}\n    </>\n  );\n};\n\nexport default CustomLayout;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LayoutComponent")," interface is used here for better typings."),(0,r.kt)("p",null,"And register this component as ",(0,r.kt)("inlineCode",{parentName:"p"},"layoutComponent")," property for some application route, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { SpaRouterModule } from '@tramvai/modules-router';\n\ncreateApp({\n  modules: [\n    SpaRouterModule.forRoot([{\n      name: 'main',\n      path: '/',\n      config: {\n        pageComponent: '@/pages/index',\n        layoutComponent: '@/pages/custom-layout',\n      },\n    }]),\n  ],\n});\n")),(0,r.kt)("h2",{id:"nested-layout"},"Nested Layout"),(0,r.kt)("p",null,"For every page, unique nested layout can be applied. It is useful when you need to wrap group of pages in the same block, or add the same actions."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use Nested Layout, when you need to add the same HTML tags to a few or more Pages.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For now, only one level of layout nesting supported, and simplified component structure will look like this:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<RootLayout>\n  <NestedLayout>\n    <Page />\n  </NestedLayout>\n</RootLayout>\n"))),(0,r.kt)("p",null,"Nested layout it is a simple React component with ",(0,r.kt)("inlineCode",{parentName:"p"},"children")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import type { NestedLayoutComponent } from '@tramvai/react';\n\nconst Layout: NestedLayoutComponent = ({ children }) => {\n  return <div>{children}</div>;\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NestedLayoutComponent")," interface is used here for better typings - Nested Layout components may have additional static properties:"),(0,r.kt)("h3",{id:"actions"},"Actions"),(0,r.kt)("p",null,"Nested Layout components support ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/action#global-actions"},"global actions")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," static property, these actions will executed only for pages with this layout:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"Layout.actions = [fetchSomeDataAction];\n")),(0,r.kt)("p",null,"This actions will be code-splitted with layout component code."),(0,r.kt)("h3",{id:"reducers"},"Reducers"),(0,r.kt)("p",null,"Nested Layout components support ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/state-management#reducer"},"reducers")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"reducers")," static property, these reducers will be registered in application store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"Layout.reducers = [SomeDataStore];\n")),(0,r.kt)("p",null,"This reducers will be code-splitted with layout component code."),(0,r.kt)("h3",{id:"adding-a-nested-layout"},"Adding a nested layout"),(0,r.kt)("h4",{id:"_layouttsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"_layout.tsx")),(0,r.kt)("p",null,"With File-System Routing, adding a nested layout is trivial:"),(0,r.kt)("p",null,"\u231b Create file ",(0,r.kt)("inlineCode",{parentName:"p"},"_layout.tsx")," with layout component near page component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="routes/_layout.tsx"',title:'"routes/_layout.tsx"'},"import type { NestedLayoutComponent } from '@tramvai/react';\n\nexport const Layout: NestedLayoutComponent = ({ children }) => {\n  return (\n    <>\n      <h3>Nested Layout</h3>\n      <div>{children}</div>\n    </>\n  );\n};\n\nexport default Layout;\n")),(0,r.kt)("p",null,"And we will get this file structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"src\n\u2514\u2500\u2500 routes\n    \u251c\u2500\u2500 index.tsx\n    \u2514\u2500\u2500 _layout.tsx\n")),(0,r.kt)("p",null,"After this, layout will be rendered at application main page."),(0,r.kt)("h4",{id:"for-manually-created-routes"},"For manually created routes"),(0,r.kt)("p",null,"With File-System Components, you can add a nested layout in two steps:"),(0,r.kt)("p",null,"\u231b Create file with layout component in ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/custom-nested-layout.tsx"',title:'"pages/custom-nested-layout.tsx"'},"import type { NestedLayoutComponent } from '@tramvai/react';\n\nexport const Layout: NestedLayoutComponent = ({ children }) => {\n  return (\n    <>\n      <h3>Nested Layout</h3>\n      <div>{children}</div>\n    </>\n  );\n};\n\nexport default Layout;\n")),(0,r.kt)("p",null,"And we will get this file structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"src\n\u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 index.tsx\n    \u2514\u2500\u2500 custom-nested-layout.tsx\n")),(0,r.kt)("p",null,"This component will be available with key ",(0,r.kt)("inlineCode",{parentName:"p"},"@/pages/custom-nested-layout"),"."),(0,r.kt)("p",null,"\u231b Add ",(0,r.kt)("inlineCode",{parentName:"p"},"nestedLayoutComponent")," to route configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { SpaRouterModule } from '@tramvai/modules-router';\n\ncreateApp({\n  modules: [\n    SpaRouterModule.forRoot([{\n      name: 'main',\n      path: '/',\n      config: {\n        pageComponent: '@/pages/index',\n        // highlight-next-line\n        nestedLayoutComponent: '@/pages/custom-nested-layout',\n      },\n    }]),\n  ],\n});\n")),(0,r.kt)("p",null,"After this, layout will be rendered at application main page."))}c.isMDXComponent=!0}}]);