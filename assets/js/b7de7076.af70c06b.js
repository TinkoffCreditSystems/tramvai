"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1352:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],p={},i=void 0,s={unversionedId:"references/libs/tinkoff-layout",id:"references/libs/tinkoff-layout",title:"tinkoff-layout",description:"Installation",source:"@site/tmp-docs/references/libs/tinkoff-layout.md",sourceDirName:"references/libs",slug:"/references/libs/tinkoff-layout",permalink:"/docs/references/libs/tinkoff-layout",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/tinkoff-layout.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"safe-strings",permalink:"/docs/references/libs/safe-strings"},next:{title:"tinkoff-request-http-client-adapter",permalink:"/docs/references/libs/tinkoff-request-http-client-adapter"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Layout structure",id:"layout-structure",children:[],level:2},{value:"Customization ways",id:"customization-ways",children:[{value:"Components",id:"components",children:[],level:3},{value:"Wrappers",id:"wrappers",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"@tinkoff/layout-factory")," using your package manager, e.g. for npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @tinkoff/layout-factory\n")),(0,o.kt)("p",null,"Create new layout object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { createLayout } from '@tinkoff/layout-factory';\nimport { Content, Page, Feedback } from './components';\nimport { layoutWrapper, feedbackWrapper } from './wrappers';\n\nconst MyLayout = createLayout({\n  components: {\n    page: Page,\n    content: Content,\n    feedback: Feedback,\n  },\n  wrappers: {\n    layout: layoutWrapper,\n    feedback: feedbackWrapper,\n  },\n});\n")),(0,o.kt)("h2",{id:"layout-structure"},"Layout structure"),(0,o.kt)("p",null,"Layout has the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<LayoutWrapper>\n  {globalComponents}\n  <ContentWrapper>\n    <HeaderWrapper>\n      <Header />\n    </HeaderWrapper>\n    <PageWrapper>{page}</PageWrapper>\n    <FooterWrapper>\n      <Footer />\n    </FooterWrapper>\n  </ContentWrapper>\n</LayoutWrapper>\n")),(0,o.kt)("p",null,"Any of the wrappers could be customized. By default, every wrapper just renders passed ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," prop, but ",(0,o.kt)("inlineCode",{parentName:"p"},"HeaderWrapper")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FooterWrapper")," render only if components ",(0,o.kt)("inlineCode",{parentName:"p"},"Header")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Footer")," were passed as props to result layout."),(0,o.kt)("h2",{id:"customization-ways"},"Customization ways"),(0,o.kt)("p",null,"Customization is made through options ",(0,o.kt)("inlineCode",{parentName:"p"},"components")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"wrappers")),(0,o.kt)("h3",{id:"components"},"Components"),(0,o.kt)("p",null,"React components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"header"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"footer"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"layout"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"content"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"page")," are base components for wrappers. They should render passed prop ",(0,o.kt)("inlineCode",{parentName:"li"},"children"),". By default, ",(0,o.kt)("inlineCode",{parentName:"li"},"layout"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"content"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"page"),' are "render children" while ',(0,o.kt)("inlineCode",{parentName:"li"},"header")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"footer"),' are "render prop"'),(0,o.kt)("li",{parentName:"ul"},"any of the other components are, so called, ",(0,o.kt)("inlineCode",{parentName:"li"},"globalComponents"),". They are just rendered as components inside ",(0,o.kt)("inlineCode",{parentName:"li"},"LayoutWrapper"))),(0,o.kt)("h3",{id:"wrappers"},"Wrappers"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ru.reactjs.org/docs/higher-order-components.html"},"HOC")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"components")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"header"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"footer"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"layout"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"content"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"page")," - HOC for the base components"),(0,o.kt)("li",{parentName:"ul"},"all of the other components are HOCs for \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 wrappers - HOC for corresponding ",(0,o.kt)("inlineCode",{parentName:"li"},"globalComponents"))),(0,o.kt)("p",null,"It is possible to pass a list of HOCs. This way order of render wrapping for passed component will be from end to start of the list."),(0,o.kt)("p",null,"Such wrappers and used for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hide/show elements by condition"),(0,o.kt)("li",{parentName:"ul"},"set additional css style for components"),(0,o.kt)("li",{parentName:"ul"},"inject additional code/handler"),(0,o.kt)("li",{parentName:"ul"},"pass additional props")),(0,o.kt)("p",null,"Example of such wrapper:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'function layoutWrapper(WrappedComponent) {\n  return (props) => (\n    <div className="ui-layout">\n      <WrappedComponent {...props} />\n    </div>\n  );\n}\n')))}d.isMDXComponent=!0}}]);