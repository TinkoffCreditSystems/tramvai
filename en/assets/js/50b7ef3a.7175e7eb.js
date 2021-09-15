(self.webpackChunk=self.webpackChunk||[]).push([[9232],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),k=a,m=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},198:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>d,toc:()=>c,default:()=>u});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o=["components"],i={id:"deploy",title:"Deploy \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},p=void 0,d={unversionedId:"how-to/deploy",id:"how-to/deploy",isDocsHomePage:!1,title:"Deploy \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",description:"\u041e\u0431\u0449\u0435\u0435",source:"@site/tmp-docs/how-to/deploy.md",sourceDirName:"how-to",slug:"/how-to/deploy",permalink:"/en/docs/how-to/deploy",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/deploy.md",version:"current",frontMatter:{id:"deploy",title:"Deploy \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},sidebar:"docs",previous:{title:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0431\u0430\u043d\u0434\u043b\u0430",permalink:"/en/docs/how-to/bundle-optimization"},next:{title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0443\u0441\u043b\u043e\u0432\u0438\u0439",permalink:"/en/docs/how-to/actions-conditions"}},c=[{value:"\u041e\u0431\u0449\u0435\u0435",id:"\u043e\u0431\u0449\u0435\u0435",children:[]},{value:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0434\u0435\u043f\u043b\u043e\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439-\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445-\u0434\u043b\u044f-\u0434\u0435\u043f\u043b\u043e\u044f-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",children:[{value:"\u0421\u0431\u043e\u0440\u043a\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",id:"\u0441\u0431\u043e\u0440\u043a\u0430-\u043f\u0440\u043e\u0435\u043a\u0442\u0430",children:[]},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0434\u043e\u043a\u0435\u0440 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0434\u043e\u043a\u0435\u0440-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430",children:[]},{value:"\u0417\u0430\u043b\u0438\u0432\u043a\u0438 \u043a\u043b\u0438\u0435\u043d\u0441\u043a\u043e\u0439 \u0441\u0442\u0430\u0442\u0438\u043a\u0438",id:"\u0437\u0430\u043b\u0438\u0432\u043a\u0438-\u043a\u043b\u0438\u0435\u043d\u0441\u043a\u043e\u0439-\u0441\u0442\u0430\u0442\u0438\u043a\u0438",children:[]},{value:"\u0414\u0435\u043f\u043b\u043e\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"\u0434\u0435\u043f\u043b\u043e\u0439-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",children:[]}]},{value:"Explanation",id:"explanation",children:[{value:"\u041f\u0440\u043e\u0431\u044b",id:"\u043f\u0440\u043e\u0431\u044b",children:[]},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e CDN",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0431\u0435\u0437-\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e-cdn",children:[]},{value:"\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a \u0432 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435",id:"\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439-\u0437\u0430\u043f\u0443\u0441\u043a-\u0432-docker-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435",children:[]}]}],s={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u043e\u0431\u0449\u0435\u0435"},"\u041e\u0431\u0449\u0435\u0435"),(0,l.kt)("p",null,"Tramvai \u044d\u0442\u043e \u043e\u0431\u044b\u0447\u043d\u043e\u0435 node.js \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u043c\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c\u0438 \u0432 node.js \u043a\u043e\u043c\u044c\u044e\u043d\u0438\u0442\u0438. \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c ENV \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e"),(0,l.kt)("h2",{id:"\u0441\u043f\u0438\u0441\u043e\u043a-\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439-\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445-\u0434\u043b\u044f-\u0434\u0435\u043f\u043b\u043e\u044f-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0434\u0435\u043f\u043b\u043e\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0441\u043e\u0431\u0440\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u0435\u043d \u0440\u0435\u0436\u0438\u043c\u0435"),(0,l.kt)("li",{parentName:"ul"},"\u0437\u0430\u043b\u0438\u0442\u044c \u0430\u0441\u0441\u0435\u0442\u044b"),(0,l.kt)("li",{parentName:"ul"},"\u0441\u0431\u0438\u043b\u0434\u0438\u0442\u044c \u0434\u043e\u043a\u0435\u0440 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440 \u0441 \u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,l.kt)("li",{parentName:"ul"},"\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c, \u043f\u0435\u0440\u0435\u0434\u0430\u0432 ENV \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435")),(0,l.kt)("h3",{id:"\u0441\u0431\u043e\u0440\u043a\u0430-\u043f\u0440\u043e\u0435\u043a\u0442\u0430"},"\u0421\u0431\u043e\u0440\u043a\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 (\u043f\u0435\u0440\u0435\u0434 \u044d\u0442\u0438\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tramvai build APP_ID\n")),(0,l.kt)("p",null,"\u0432 APP_ID \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u041f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"dist")," \u0441 \u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u0441\u0431\u043e\u0440\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u0434\u0430"),(0,l.kt)("h3",{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0434\u043e\u043a\u0435\u0440-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0434\u043e\u043a\u0435\u0440 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430"),(0,l.kt)("p",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0439 Dockerfile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM node:14-buster-slim\nWORKDIR /app\nCOPY dist/server /app/\nCOPY package.json /app/\nENV NODE_ENV=\'production\'\n\nEXPOSE 3000\nCMD [ "node", "--max-http-header-size=80000", "/app/server.js" ]\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FROM")," - \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c 14+ \u0432\u0435\u0440\u0441\u0438\u044e \u043d\u043e\u0434\u044b, \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e alpine \u0432\u0435\u0440\u0441\u0438\u044e \u0434\u043b\u044f \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u0430")),(0,l.kt)("h3",{id:"\u0437\u0430\u043b\u0438\u0432\u043a\u0438-\u043a\u043b\u0438\u0435\u043d\u0441\u043a\u043e\u0439-\u0441\u0442\u0430\u0442\u0438\u043a\u0438"},"\u0417\u0430\u043b\u0438\u0432\u043a\u0438 \u043a\u043b\u0438\u0435\u043d\u0441\u043a\u043e\u0439 \u0441\u0442\u0430\u0442\u0438\u043a\u0438"),(0,l.kt)("p",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u044d\u0442\u043e \u0437\u0430\u043b\u0438\u0432\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430 CDN, \u0442\u0430\u043a \u043a\u0430\u043a node.js \u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u0445\u043e\u0440\u043e\u0448\u043e \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u0440\u0430\u0437\u0434\u0430\u0447\u0435\u0439 \u0441\u0442\u0430\u0442\u0438\u043a\u0438, \u0442\u0430\u043a \u0438 \u0431\u0443\u0434\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0442\u0440\u0430\u0444\u0438\u043a \u0434\u043b\u044f \u043d\u0430\u0448\u0435\u0439 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0443\u043a\u0442\u0443\u0440\u044b. \u041f\u043e \u044d\u0442\u043e\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u0435\u043d \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u044b, \u0441\u0442\u043e\u0438\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0432\u0430\u0442\u044c CDN. "),(0,l.kt)("p",null,"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e, \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043f\u0430\u043f\u043a\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"dist/client")," \u0437\u0430\u043b\u0438\u0432\u0430\u0435\u0442\u0435 \u043d\u0430 CDN \u043f\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443 \u0432\u0430\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0443, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f URL \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0444\u0430\u0439\u043b\u044b \u0438 \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0435 \u044d\u0442\u043e\u0442 \u0443\u0440\u043b \u0432 ENV \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"ASSETS_PREFIX")," \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"ASSETS_PREFIX=https://cdn-domain.com/my-awesome-app/")),(0,l.kt)("p",null,'\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0435 \u043d\u0443\u0436\u0435\u043d CDN, \u0442\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0438\u0436\u0435 \u0432 \u043f\u0443\u043d\u043a\u0442\u0435 "\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e CDN", \u0441\u0442\u043e\u0438\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0445 \u0441\u0442\u0435\u043d\u0434\u043e\u0432 \u0438\u043b\u0438 \u043d\u0435 \u043d\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439'),(0,l.kt)("h3",{id:"\u0434\u0435\u043f\u043b\u043e\u0439-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},"\u0414\u0435\u043f\u043b\u043e\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u044b\u0447\u043d\u044b\u0439 node.js \u043f\u0440\u043e\u0446\u0435\u0441 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 node, \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 ENV \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 (\u0441\u043f\u0438\u0441\u043e\u043a ENV \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c). \u0415\u0441\u043b\u0438 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c ENV \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 - \u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0441\u044f. \u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u043f\u0440\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"ASSETS_PREFIX")),(0,l.kt)("h2",{id:"explanation"},"Explanation"),(0,l.kt)("h3",{id:"\u043f\u0440\u043e\u0431\u044b"},"\u041f\u0440\u043e\u0431\u044b"),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0434\u0435\u043f\u043b\u043e\u0435\u0442\u0435\u0441\u044c \u0432 kubernetes, \u0442\u043e \u0434\u043b\u044f \u044d\u0442\u0438\u0445 \u043a\u0435\u0439\u0441\u043e\u0432 \u0435\u0441\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u0440\u043b\u044b \u0434\u043b\u044f \u043f\u0440\u043e\u0431 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/healthz")," - \u043f\u043e\u0441\u043b\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0442\u0434\u0430\u0435\u0442 \u043e\u0442\u0432\u0435\u0442 OK"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/readyz")," - \u043f\u043e\u0441\u043b\u0435 \u0441\u0442\u0430\u0440\u0442\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u0442\u0434\u0430\u0435\u0442 OK")),(0,l.kt)("h3",{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0431\u0435\u0437-\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e-cdn"},"\u0417\u0430\u043f\u0443\u0441\u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e CDN"),(0,l.kt)("p",null,"\u0412 \u0442\u0440\u0430\u043c\u0432\u0430\u0439 \u0432\u0441\u0442\u0440\u043e\u0435\u043d \u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u0434\u0430\u0447\u0438 \u0441\u0442\u0430\u0442\u0438\u043a\u0438. \u0422\u0430\u043a \u043b\u0443\u0447\u0448\u0435 \u043d\u0435 \u0434\u0435\u043b\u0430\u0442\u044c, \u043f\u043e \u0442\u043e\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u0447\u0442\u043e nodeJS \u043d\u0435 \u043b\u0443\u0447\u0448\u0438\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0438 \u0441\u0442\u0430\u0442\u0438\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0432\u043b\u0438\u044f\u0442\u044c \u043d\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435."),(0,l.kt)("p",null,"\u0412 \u043e\u0431\u0449\u0435\u043c \u0432\u0438\u0434\u0435 \u0432\u0441\u0435 \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435 \u043a\u0430\u043a \u0438 \u043f\u0440\u0438 \u043e\u0431\u044b\u0447\u043d\u043e\u043c \u0434\u0435\u043f\u043b\u043e\u0435, \u043d\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0441\u0441\u0435\u0442\u043e\u0432 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0432 docker \u043e\u0431\u0440\u0430\u0437, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"COPY dist/client /app/public/statics")),(0,l.kt)("li",{parentName:"ul"},"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c ENV \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ASSETS_PREFIX")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0433\u043e\u0442\u043e\u0432\u043e\u0433\u043e Dockerfile"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM node:14-buster-slim\nWORKDIR /app\nCOPY dist/server /app/\nCOPY package.json /app/\nCOPY dist/client /app/public/statics\nENV NODE_ENV=\'production\'\n\nEXPOSE 3000\nCMD [ "node", "--max-http-header-size=80000", "/app/server.js" ]\n')),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"ASSETS_PREFIX=/statics/"),". \u041f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u043d\u0438\u043c\u0435\u0442\u0441\u044f \u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u0434\u0430\u0447\u0438 \u0441\u0442\u0430\u0442\u0438\u0442\u0438\u043a\u0438 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432\u0441\u0435 \u0444\u0430\u0439\u043b\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 /public/. \u0422\u0435\u043c \u0441\u0430\u043c\u044b\u043c \u043a\u043b\u0438\u0435\u043d\u0442 \u0441\u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0443\u0440\u043b\u0443 /statics/payment.js"),(0,l.kt)("h3",{id:"\u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439-\u0437\u0430\u043f\u0443\u0441\u043a-\u0432-docker-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435"},"\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a \u0432 docker \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435"),(0,l.kt)("p",null,"\u041d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d ",(0,l.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"https://www.docker.com/products/docker-desktop")," \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker run hello-world")),(0,l.kt)("h4",{id:"\u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c-\u043f\u0440\u043e\u0435\u043a\u0442-\u0432-\u043f\u0440\u043e\u0434\u0430\u043a\u0448\u0435\u043d-\u0440\u0435\u0436\u0438\u043c\u0435-\u0443-\u043d\u0430\u0441-\u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f-\u0430\u0440\u0442\u0438\u0444\u0430\u043a\u0442-\u0432-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438-dist"},"\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442 \u0432 \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u0435\u043d \u0440\u0435\u0436\u0438\u043c\u0435, \u0443 \u043d\u0430\u0441 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u0430\u0440\u0442\u0438\u0444\u0430\u043a\u0442 \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 dist"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,l.kt)("h4",{id:"\u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c-\u0434\u043e\u043a\u0435\u0440-\u043e\u0431\u0440\u0430\u0437-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},"\u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0434\u043e\u043a\u0435\u0440 \u043e\u0431\u0440\u0430\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t test/myapp .\n")),(0,l.kt)("h4",{id:"\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c-\u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0439-\u043e\u0431\u0440\u0430\u0437"},"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u043e\u0431\u0440\u0430\u0437"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -e DANGEROUS_UNSAFE_ENV_FILES='true' -e ASSETS_PREFIX='http://localhost:4000/static/' -v ${PWD}/env.development.js:/app/env.development.js -v ${PWD}/dist/client:/app/static  -e DEV_STATIC=true -p 3000:3000 -p 4000:4000 -d test/myapp\n")),(0,l.kt)("p",null,"\u0414\u043b\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c CONTAINER ID, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 docker ps \u0438 \u0434\u0430\u043b\u0435\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 docker stop <CONTAINER ID",">"),(0,l.kt)("h4",{id:"\u0434\u043b\u044f-\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0432\u0441\u0435\u0445-\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432"},"\u0414\u043b\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432\u0441\u0435\u0445 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043e\u0432"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker kill $(docker ps --quiet)\n")))}u.isMDXComponent=!0}}]);