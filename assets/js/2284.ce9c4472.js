"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),v=r,p=u["".concat(c,".").concat(v)]||u[v]||m[v]||l;return n?a.createElement(p,i(i({ref:t},d),{},{components:n})):a.createElement(p,i({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1750:(e,t,n)=>{n.d(t,{Z:()=>Ue});var a=n(7294),r=n(6010),l=n(7524),i=n(5130),o=n(7462),c=n(5999),s=n(9960);function d(e){var t=e.permalink,n=e.title,l=e.subLabel,i=e.isNext;return a.createElement(s.Z,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function m(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(d,(0,o.Z)({},t,{subLabel:a.createElement(c.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(d,(0,o.Z)({},n,{subLabel:a.createElement(c.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function u(){var e=(0,i.k)().metadata;return a.createElement(m,{previous:e.previous,next:e.next})}var v=n(2263),p=n(143),f=n(5281),b=n(373),h=n(4477);var g={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function E(e){var t=g[e.versionMetadata.banner];return a.createElement(t,e)}function L(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(s.Z,{to:n,onClick:r},a.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function N(e){var t,n=e.className,l=e.versionMetadata,i=(0,v.Z)().siteConfig.title,o=(0,p.gA)({failfast:!0}).pluginId,c=(0,b.J)(o).savePreferredVersionName,s=(0,p.Jo)(o),d=s.latestDocSuggestion,m=s.latestVersionSuggestion,u=null!=d?d:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,f.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(E,{siteTitle:i,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(L,{versionLabel:m.label,to:u.path,onClick:function(){return c(m.name)}})))}function k(e){var t=e.className,n=(0,h.E)();return n.banner?a.createElement(N,{className:t,versionMetadata:n}):null}function y(e){var t=e.className,n=(0,h.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,f.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(c.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function _(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function Z(e){var t=e.lastUpdatedBy;return a.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function C(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:f.k.common.lastUpdated},a.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(_,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(Z,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var x=n(3366);const T="iconEdit_Z9Sw";var w=["className"];function O(e){var t=e.className,n=(0,x.Z)(e,w);return a.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(T,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function H(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:f.k.common.editThisPage},a.createElement(O,null),a.createElement(c.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const U="tag_zVej",A="tagRegular_sFm0",M="tagWithCount_h2kH";function P(e){var t=e.permalink,n=e.label,l=e.count;return a.createElement(s.Z,{href:t,className:(0,r.Z)(U,l?M:A)},n,l&&a.createElement("span",null,l))}const I="tags_jXut",j="tag_QGVx";function B(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(c.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(I,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:j},a.createElement(P,{label:t,permalink:n}))}))))}const S="lastUpdated_vwxv";function V(e){return a.createElement("div",{className:(0,r.Z)(f.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(B,e)))}function D(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(f.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(H,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",S)},(n||l)&&a.createElement(C,{lastUpdatedAt:n,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function R(){var e=(0,i.k)().metadata,t=e.editUrl,n=e.lastUpdatedAt,l=e.formattedLastUpdatedAt,o=e.lastUpdatedBy,c=e.tags,s=c.length>0,d=!!(t||n||o);return s||d?a.createElement("footer",{className:(0,r.Z)(f.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(V,{tags:c}),d&&a.createElement(D,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:l})):null}var z=n(6043),F=n(6668),q=["parentIndex"];function G(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,x.Z)(e,q);n>=0?t[n].children.push(r):a.push(r)})),a}function J(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=J({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function X(e){var t=e.getBoundingClientRect();return t.top===t.bottom?X(e.parentNode):t}function Q(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return X(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(X(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function W(){var e=(0,a.useRef)(0),t=(0,F.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function K(e){var t=(0,a.useRef)(void 0),n=W();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=Q(o,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function Y(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(Y,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}const $=a.memo(Y);var ee=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function te(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,l=e.linkClassName,i=void 0===l?"table-of-contents__link":l,c=e.linkActiveClassName,s=void 0===c?void 0:c,d=e.minHeadingLevel,m=e.maxHeadingLevel,u=(0,x.Z)(e,ee),v=(0,F.L)(),p=null!=d?d:v.tableOfContents.minHeadingLevel,f=null!=m?m:v.tableOfContents.maxHeadingLevel,b=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,a.useMemo)((function(){return J({toc:G(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:p,maxHeadingLevel:f});return K((0,a.useMemo)((function(){if(i&&s)return{linkClassName:i,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:f}}),[i,s,p,f])),a.createElement($,(0,o.Z)({toc:b,className:r,linkClassName:i},u))}const ne="tocCollapsibleButton_TO0P",ae="tocCollapsibleButtonExpanded_MG3E";var re=["collapsed"];function le(e){var t=e.collapsed,n=(0,x.Z)(e,re);return a.createElement("button",(0,o.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",ne,!t&&ae,n.className)}),a.createElement(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const ie="tocCollapsible_ETCw",oe="tocCollapsibleContent_vkbj",ce="tocCollapsibleExpanded_sAul";function se(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,i=e.maxHeadingLevel,o=(0,z.u)({initialState:!0}),c=o.collapsed,s=o.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(ie,!c&&ce,n)},a.createElement(le,{collapsed:c,onClick:s}),a.createElement(z.z,{lazy:!0,className:oe,collapsed:c},a.createElement(te,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})))}const de="tocMobile_ITEo";function me(){var e=(0,i.k)(),t=e.toc,n=e.frontMatter;return a.createElement(se,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,r.Z)(f.k.docs.docTocMobile,de)})}const ue="tableOfContents_bqdL";var ve=["className"];function pe(e){var t=e.className,n=(0,x.Z)(e,ve);return a.createElement("div",{className:(0,r.Z)(ue,"thin-scrollbar",t)},a.createElement(te,(0,o.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function fe(){var e=(0,i.k)(),t=e.toc,n=e.frontMatter;return a.createElement(pe,{toc:t,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var be=n(2503),he=n(3905),ge=n(7535);function Ee(e){var t=e.children;return a.createElement(he.Zo,{components:ge.Z},t)}function Le(e){var t,n,l,o,c=e.children,s=(t=(0,i.k)(),n=t.metadata,l=t.frontMatter,o=t.contentTitle,l.hide_title||void 0!==o?null:n.title);return a.createElement("div",{className:(0,r.Z)(f.k.docs.docMarkdown,"markdown")},s&&a.createElement("header",null,a.createElement(be.Z,{as:"h1"},s)),a.createElement(Ee,null,c))}var Ne=n(3438),ke=n(8596),ye=n(4996);function _e(e){return a.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const Ze={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function Ce(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(s.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function xe(e){var t=e.children,n=e.active,l=e.index,i=e.addMicrodata;return a.createElement("li",(0,o.Z)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function Te(){var e=(0,ye.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(s.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",Ze.breadcrumbsItemLink),href:e},a.createElement(_e,{className:Ze.breadcrumbHomeIcon})))}function we(){var e=(0,Ne.s1)(),t=(0,ke.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(f.k.docs.docBreadcrumbs,Ze.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Te,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(xe,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(Ce,{href:t.href,isLast:r},t.label))})))):null}const Oe="docItemContainer_Djhp",He="docItemCol_VOVn";function Ue(e){var t,n,o,c,s,d,m=e.children,v=(t=(0,i.k)(),n=t.frontMatter,o=t.toc,c=(0,l.i)(),s=n.hide_table_of_contents,d=!s&&o.length>0,{hidden:s,mobile:d?a.createElement(me,null):void 0,desktop:!d||"desktop"!==c&&"ssr"!==c?void 0:a.createElement(fe,null)});return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!v.hidden&&He)},a.createElement(k,null),a.createElement("div",{className:Oe},a.createElement("article",null,a.createElement(we,null),a.createElement(y,null),v.mobile,a.createElement(Le,null,m),a.createElement(R,null)),a.createElement(u,null))),v.desktop&&a.createElement("div",{className:"col col--3"},v.desktop))}},1602:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(1944),l=n(5130);function i(){var e,t=(0,l.k)(),n=t.metadata,i=t.frontMatter,o=t.assets;return a.createElement(r.d,{title:n.title,description:n.description,keywords:i.keywords,image:null!=(e=o.image)?e:i.image})}},5130:(e,t,n)=>{n.d(t,{b:()=>i,k:()=>o});var a=n(7294),r=n(9688),l=a.createContext(null);function i(e){var t=e.children,n=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return a.createElement(l.Provider,{value:n},t)}function o(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocProvider");return e}},4477:(e,t,n)=>{n.d(t,{E:()=>o,q:()=>i});var a=n(7294),r=n(9688),l=a.createContext(null);function i(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function o(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);