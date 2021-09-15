(self.webpackChunk=self.webpackChunk||[]).push([[9766],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(r),s=a,f=d["".concat(p,".").concat(s)]||d[s]||u[s]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7647:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>m,toc:()=>c,default:()=>d});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={id:"migration",title:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"},p=void 0,m={unversionedId:"features/migration",id:"features/migration",isDocsHomePage:!1,title:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",description:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u043a\u043e\u0434 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u0441\u0430\u043c\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0432\u0435\u0440\u0441\u0438\u0439 \u0442\u0440\u0430\u043c\u0432\u0430\u0439\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0438\u043b\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432.",source:"@site/tmp-docs/features/migration.md",sourceDirName:"features",slug:"/features/migration",permalink:"/docs/features/migration",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/migration.md",version:"current",frontMatter:{id:"migration",title:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"},sidebar:"docs",previous:{title:"API",permalink:"/docs/features/react-query/api"},next:{title:"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c?",permalink:"/docs/how-to/how-create-module"}},c=[{value:"\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u043d\u044b \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u043d\u044b-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",children:[]},{value:"\u041a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",id:"\u043a\u0430\u043a-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",children:[]},{value:"\u041a\u0430\u043a \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",id:"\u043a\u0430\u043a-\u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",children:[]},{value:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",id:"\u043a\u0430\u043a-\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",children:[]},{value:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b/\u043e\u0442\u0432\u0435\u0442\u044b",id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b\u043e\u0442\u0432\u0435\u0442\u044b",children:[{value:"\u041d\u0443\u0436\u043d\u043e \u043b\u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u044c <code>.tramvai-migrate-applied.json</code> \u0432 \u0433\u0438\u0442\u0435",id:"\u043d\u0443\u0436\u043d\u043e-\u043b\u0438-\u0445\u0440\u0430\u043d\u0438\u0442\u044c-tramvai-migrate-appliedjson-\u0432-\u0433\u0438\u0442\u0435",children:[]}]}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u043a\u043e\u0434 \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u0441\u0430\u043c\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0432\u0435\u0440\u0441\u0438\u0439 \u0442\u0440\u0430\u043c\u0432\u0430\u0439\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0438\u043b\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432."),(0,i.kt)("h2",{id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u043d\u044b-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"},"\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u043d\u044b \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"),(0,i.kt)("p",null,"\u0418\u043d\u043e\u0433\u0434\u0430 \u0432 \u0442\u0440\u0430\u043c\u0432\u0430\u0435 \u0431\u044b\u0432\u0430\u0435\u0442 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0432\u043d\u0435\u0441\u0442\u0438 \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u043b\u043e\u043c\u0430\u044e\u0449\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438 \u0447\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u043e\u0441\u0442\u0438\u0442\u044c \u0442\u0430\u043a\u043e\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u0434\u043b\u044f \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438, \u0442.\u043a. \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u043a\u043e\u0434\u043e\u0432\u0443\u044e \u0431\u0430\u0437\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u043d\u043e\u0432\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 \u0432 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0431\u0435\u0437 \u0443\u0447\u0430\u0441\u0442\u0438\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432."),(0,i.kt)("h2",{id:"\u043a\u0430\u043a-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"},"\u041a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"),(0,i.kt)("p",null,"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043d\u043e\u0432\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0442\u0440\u0430\u043c\u0432\u0430\u044f. \u0414\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e\u0431 \u0443\u0436\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0444\u0430\u0439\u043b ",(0,i.kt)("inlineCode",{parentName:"p"},".tramvai-migrate-applied.json")," \u0432 \u043a\u043e\u0440\u043d\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430."),(0,i.kt)("p",null,"\u0412\u0441\u0451 \u0447\u0442\u043e \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0438\u0437\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u043a\u0443 \u043f\u043e ",(0,i.kt)("a",{parentName:"li",href:"https://tramvai.dev/docs/releases/migration"},"\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u043c \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f\u043c \u0434\u043b\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432")),(0,i.kt)("li",{parentName:"ul"},"\u0437\u0430\u043a\u043e\u043c\u0438\u0442\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},".tramvai-migrate-applied.json"),", \u0442.\u043a. \u0432 \u043d\u0435\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0438\u0433\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f\u0445 \u0438 \u043b\u0443\u0447\u0448\u0435 \u0435\u0433\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"),(0,i.kt)("li",{parentName:"ul"},"\u0435\u0441\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0439 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0441\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),", \u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u043b\u0441\u044f lock \u0444\u0430\u0439\u043b \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435."),(0,i.kt)("li",{parentName:"ul"},"\u043f\u0440\u043e\u0440\u0435\u0432\u044c\u044e\u0432\u0438\u0442\u044c \u0438 \u0437\u0430\u043a\u043e\u043c\u0438\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0438 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 (\u0440\u0435\u0432\u044c\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0442.\u043a. \u0432 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0441\u043b\u043e\u0436\u043d\u043e \u0443\u0447\u0435\u0441\u0442\u044c \u0432\u0441\u0435 \u043a\u0435\u0439\u0441\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u043c\u043e\u0436\u0435\u0442 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0432\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c \u043b\u0438\u043d\u0442\u0435\u0440\u0430 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435)."),(0,i.kt)("li",{parentName:"ul"},"\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0438 \u0432\u043d\u0435\u0441\u0442\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0438\u0438 \u0441 \u0434\u043e\u043a\u043e\u0439 \u043f\u043e \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438")),(0,i.kt)("h2",{id:"\u043a\u0430\u043a-\u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"},"\u041a\u0430\u043a \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"),(0,i.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"p"},"SKIP_TRAMVAI_MIGRATIONS")," \u043f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432."),(0,i.kt)("h2",{id:"\u043a\u0430\u043a-\u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"},"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"@tramvai/core")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"li"},"@tramvai/tools-migrate")),(0,i.kt)("li",{parentName:"ol"},"\u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"@tramvai/tools-migrate")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0441\u043a\u0440\u0438\u043f\u0442 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 'postinstall'"),(0,i.kt)("li",{parentName:"ol"},"\u0441\u043a\u0440\u0438\u043f\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0430\u043d\u0430\u043b\u0438\u0437 tramvai \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0432 'node_modules' \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u043c \u0432\u0441\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"),(0,i.kt)("li",{parentName:"ol"},"\u0434\u0430\u043b\u044c\u0448\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u0444\u0430\u0439\u043b ",(0,i.kt)("inlineCode",{parentName:"li"},".tramvai-migrate-applied.json")," \u0438 \u0438\u0437 \u043d\u0435\u0433\u043e \u0431\u0435\u0440\u0435\u0442\u0441\u044f \u0441\u043f\u0438\u0441\u043e\u043a \u0443\u0436\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0439 \u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0439 \u0444\u0430\u0439\u043b \u0435\u0441\u0442\u044c"),(0,i.kt)("li",{parentName:"ol"},"\u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u0434 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u0435\u0442 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445. \u041c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),(0,i.kt)("li",{parentName:"ol"},"\u0432 \u0444\u0430\u0439\u043b ",(0,i.kt)("inlineCode",{parentName:"li"},".tramvai-migrate-applied.json")," \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f\u0445, \u0435\u0441\u043b\u0438 \u0444\u0430\u0439\u043b \u0431\u044b\u043b \u0434\u043e \u044d\u0442\u043e\u0433\u043e, \u043b\u0438\u0431\u043e \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u0441\u043e\u0437\u0434\u0430\u0451\u0442\u0441\u044f")),(0,i.kt)("h2",{id:"\u0432\u043e\u043f\u0440\u043e\u0441\u044b\u043e\u0442\u0432\u0435\u0442\u044b"},"\u0412\u043e\u043f\u0440\u043e\u0441\u044b/\u043e\u0442\u0432\u0435\u0442\u044b"),(0,i.kt)("h3",{id:"\u043d\u0443\u0436\u043d\u043e-\u043b\u0438-\u0445\u0440\u0430\u043d\u0438\u0442\u044c-tramvai-migrate-appliedjson-\u0432-\u0433\u0438\u0442\u0435"},"\u041d\u0443\u0436\u043d\u043e \u043b\u0438 \u0445\u0440\u0430\u043d\u0438\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"h3"},".tramvai-migrate-applied.json")," \u0432 \u0433\u0438\u0442\u0435"),(0,i.kt)("p",null,"\u0414\u0430, \u0438\u043d\u0430\u0447\u0435 \u043f\u0440\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f\u0445 \u043c\u044b \u043d\u0435 \u0431\u0443\u0434\u0435\u043c \u0437\u043d\u0430\u0442\u044c \u043a\u0430\u043a\u0438\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0443\u0436\u0435 \u0431\u044b\u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"))}d.isMDXComponent=!0}}]);