(self.webpackChunk=self.webpackChunk||[]).push([[7535],{2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(7462),r=n(3366),a=n(7294),l=n(6010),c=n(5999),i=n(6668);const s="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5";var m=["as","id"];function d(e){var t=e.as,n=e.id,d=(0,r.Z)(e,m),p=(0,i.L)().navbar.hideOnScroll;return"h1"!==t&&n?a.createElement(t,(0,o.Z)({},d,{className:(0,l.Z)("anchor",p?u:s),id:n}),d.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,o.Z)({},d,{id:void 0}))}},7535:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ke});var o=n(7462),r=n(7294),a=n(3366),l=n(5742),c=["mdxType","originalType"];var i=n(2389),s=n(6010),u=n(2949),m=n(6668);function d(){var e=(0,m.L)().prism,t=(0,u.I)().colorMode,n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var p=n(5281),f=n(7099),h=n(7594),v=n.n(h),g=(0,f.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),y=(0,f.Z)(/\{([\d,-]+)\}/,{range:1}),b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function E(e,t){var n=e.map((function(e){var n=b[e],o=n.start,r=n.end;return"(?:"+o+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function k(e,t){var n=e.replace(/\n$/,""),o=t.language,r=t.magicComments,a=t.metastring;if(a&&y.test(a)){var l=a.match(y).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=r[0].className,i=v()(l).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===o)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return E(["js","jsBlock"],t);case"jsx":case"tsx":return E(["js","jsBlock","jsx"],t);case"html":return E(["js","jsBlock","html"],t);case"python":case"py":case"bash":return E(["bash"],t);case"markdown":case"md":return E(["html","jsx","bash"],t);default:return E(Object.keys(b),t)}}(o,r),u=n.split("\n"),m=Object.fromEntries(r.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(r.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),h=0;h<u.length;){var g=u[h].match(s);if(g){var k=g.slice(1).find((function(e){return void 0!==e}));d[k]?m[d[k]].range+=h+",":p[k]?m[p[k]].start=h:f[k]&&(m[f[k]].range+=m[f[k]].start+"-"+(h-1)+","),u.splice(h,1)}else h+=1}n=u.join("\n");var N={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;v()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}const N="codeBlockContainer_Ckt0";var C=["as"];function B(e){var t=e.as,n=(0,a.Z)(e,C),l=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var o=e[0],r=e[1],a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}(d());return r.createElement(t,(0,o.Z)({},n,{style:l,className:(0,s.Z)(n.className,N,p.k.common.codeBlock)}))}const T={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Z(e){var t=e.children,n=e.className;return r.createElement(B,{as:"pre",tabIndex:0,className:(0,s.Z)(T.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:T.codeBlockLines},t))}var w=n(9688),L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function j(e,t){var n=(0,r.useState)(),o=n[0],a=n[1],l=(0,r.useCallback)((function(){var t;a(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,r.useEffect)((function(){l()}),[l]),function(e,t,n){void 0===n&&(n=L);var o=(0,w.zX)(t),a=(0,w.Ql)(n);(0,r.useEffect)((function(){var t=new MutationObserver(o);return e&&t.observe(e,a),function(){return t.disconnect()}}),[e,o,a])}(o,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const x={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var _={Prism:n(7410).Z,theme:x};function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},z.apply(this,arguments)}var A=/\r\n|\r|\n/,I=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},O=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},M=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=z({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=z({},n,{backgroundColor:null}),r};function H(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const P=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),S(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?M(e.theme,e.language):void 0;return t.themeDict=n})),S(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=z({},H(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==r&&(a.style=void 0!==a.style?z({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),S(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var l=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),S(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,l=z({},H(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?z({},l.style,r):r),void 0!==n&&(l.key=n),o&&(l.className+=" "+o),l})),S(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=o[l]++)<r[l];){var s=void 0,u=t[l],m=n[l][a];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=O(u,m.type),m.alias&&(u=O(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(A),p=d.length;c.push({types:u,content:d[0]});for(var f=1;f<p;f++)I(c),i.push(c=[]),c.push({types:u,content:d[f]})}else l++,t.push(u),n.push(s),o.push(0),r.push(s.length)}l--,t.pop(),n.pop(),o.pop(),r.pop()}return I(c),i}(void 0!==l?this.tokenize(t,o,l,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),V="codeLine_lJS_",D="codeLineNumber_Tfdd",R="codeLineContent_feaV";function W(e){var t=e.line,n=e.classNames,a=e.showLineNumbers,l=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=l({line:t,className:(0,s.Z)(n,a&&V)}),u=t.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},c({token:e,key:t})))}));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:D}),r.createElement("span",{className:R},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}var F=n(5999);const q={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function G(e){var t=e.code,n=e.className,o=(0,r.useState)(!1),a=o[0],l=o[1],c=(0,r.useRef)(void 0),i=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n,r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),o.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}r.remove(),c&&(l.removeAllRanges(),l.addRange(c)),a&&a.focus()}(t),l(!0),c.current=window.setTimeout((function(){l(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),r.createElement("button",{type:"button","aria-label":a?(0,F.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,F.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,F.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,q.copyButton,a&&q.copyButtonCopied),onClick:i},r.createElement("span",{className:q.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:q.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:q.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const U="wordWrapButtonIcon_Bwma",$="wordWrapButtonEnabled_EoeP";function Y(e){var t=e.className,n=e.onClick,o=e.isEnabled,a=(0,F.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,o&&$),"aria-label":a,title:a},r.createElement("svg",{className:U,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function Q(e){var t,n,a,l,c,i,u,p,f,h,v,y=e.children,b=e.className,E=void 0===b?"":b,N=e.metastring,C=e.title,Z=e.showLineNumbers,w=e.language,L=(0,m.L)().prism,x=L.defaultLanguage,S=L.magicComments,z=null!=(t=null!=w?w:null==(n=E.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:x,A=d(),I=(a=(0,r.useState)(!1),l=a[0],c=a[1],i=(0,r.useState)(!1),u=i[0],p=i[1],f=(0,r.useRef)(null),h=(0,r.useCallback)((function(){var e=f.current.querySelector("code");l?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),c((function(e){return!e}))}),[f,l]),v=(0,r.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");p(t)}),[f]),j(f,v),(0,r.useEffect)((function(){v()}),[l,v]),(0,r.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:f,isEnabled:l,isCodeScrollable:u,toggle:h}),O=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(g))?void 0:n.groups.title)?t:""}(N)||C,M=k(y,{metastring:N,language:z,magicComments:S}),H=M.lineClassNames,V=M.code,D=null!=Z?Z:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(N);return r.createElement(B,{as:"div",className:(0,s.Z)(E,z&&!E.includes("language-"+z)&&"language-"+z)},O&&r.createElement("div",{className:T.codeBlockTitle},O),r.createElement("div",{className:T.codeBlockContent},r.createElement(P,(0,o.Z)({},_,{theme:A,code:V,language:null!=z?z:"text"}),(function(e){var t=e.className,n=e.tokens,o=e.getLineProps,a=e.getTokenProps;return r.createElement("pre",{tabIndex:0,ref:I.codeBlockRef,className:(0,s.Z)(t,T.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,s.Z)(T.codeBlockLines,D&&T.codeBlockLinesWithNumbering)},n.map((function(e,t){return r.createElement(W,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:H[t],showLineNumbers:D})}))))})),r.createElement("div",{className:T.buttonGroup},(I.isEnabled||I.isCodeScrollable)&&r.createElement(Y,{className:T.codeButton,onClick:function(){return I.toggle()},isEnabled:I.isEnabled}),r.createElement(G,{className:T.codeButton,code:V}))))}var J=["children"];function K(e){var t=e.children,n=(0,a.Z)(e,J),l=(0,i.Z)(),c=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?Q:Z;return r.createElement(s,(0,o.Z)({key:String(l)},n),c)}var X=n(9960);var ee=n(6043);const te="details_lb9f",ne="isBrowser_bmU9",oe="collapsibleContent_i85q";var re=["summary","children"];function ae(e){return!!e&&("SUMMARY"===e.tagName||ae(e.parentElement))}function le(e,t){return!!e&&(e===t||le(e.parentElement,t))}function ce(e){var t=e.summary,n=e.children,l=(0,a.Z)(e,re),c=(0,i.Z)(),u=(0,r.useRef)(null),m=(0,ee.u)({initialState:!l.open}),d=m.collapsed,p=m.setCollapsed,f=(0,r.useState)(l.open),h=f[0],v=f[1];return r.createElement("details",(0,o.Z)({},l,{ref:u,open:h,"data-collapsed":d,className:(0,s.Z)(te,c&&ne,l.className),onMouseDown:function(e){ae(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;ae(t)&&le(t,u.current)&&(e.preventDefault(),d?(p(!1),v(!0)):p(!0))}}),null!=t?t:r.createElement("summary",null,"Details"),r.createElement(ee.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){p(e),v(!e)}},r.createElement("div",{className:oe},n)))}const ie="details_b_Ee";function se(e){var t=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return r.createElement(ce,(0,o.Z)({},t,{className:(0,s.Z)("alert alert--info",ie,t.className)}))}var ue=n(2503);function me(e){return r.createElement(ue.Z,e)}const de="containsTaskList_mC6p";const pe="img_ev3q";const fe="admonition_LlT9",he="admonitionHeading_tbUL",ve="admonitionIcon_kALy",ge="admonitionContent_S0QG";var ye={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(F.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(F.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(F.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(F.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(F.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},be={secondary:"note",important:"info",success:"tip",warning:"danger"};function Ee(e){var t,n=function(e){var t=r.Children.toArray(e),n=t.find((function(e){var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:o}}(e.children),o=n.mdxAdmonitionTitle,a=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:o,children:a})}const ke={head:function(e){var t=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,o=(n.mdxType,n.originalType,(0,a.Z)(n,c));return r.createElement(e.props.originalType,o)}return e}(e):e}));return r.createElement(l.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",e):r.createElement(K,e)},a:function(e){return r.createElement(X.Z,e)},pre:function(e){var t;return r.createElement(K,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(se,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,s.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&de))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,pe))}));var t},h1:function(e){return r.createElement(me,(0,o.Z)({as:"h1"},e))},h2:function(e){return r.createElement(me,(0,o.Z)({as:"h2"},e))},h3:function(e){return r.createElement(me,(0,o.Z)({as:"h3"},e))},h4:function(e){return r.createElement(me,(0,o.Z)({as:"h4"},e))},h5:function(e){return r.createElement(me,(0,o.Z)({as:"h5"},e))},h6:function(e){return r.createElement(me,(0,o.Z)({as:"h6"},e))},admonition:function(e){var t=Ee(e),n=t.children,o=t.type,a=t.title,l=t.icon,c=function(e){var t,n=null!=(t=be[e])?t:e;return ye[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),ye.info)}(o),i=null!=a?a:c.label,u=c.iconComponent,m=null!=l?l:r.createElement(u,null);return r.createElement("div",{className:(0,s.Z)(p.k.common.admonition,p.k.common.admonitionType(e.type),"alert","alert--"+c.infimaClassName,fe)},r.createElement("div",{className:he},r.createElement("span",{className:ve},m),i),r.createElement("div",{className:ge},n))}}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);