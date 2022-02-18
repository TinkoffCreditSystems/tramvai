"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1990],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>u});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),u=o,m=f["".concat(i,".").concat(u)]||f[u]||d[u]||c;return r?t.createElement(m,a(a({ref:n},p),{},{components:r})):t.createElement(m,a({ref:n},p))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8318:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>l,toc:()=>p,default:()=>f});var t=r(7462),o=r(3366),c=(r(7294),r(3905)),a=["components"],s={},i=void 0,l={unversionedId:"references/tools/monorepo/depscheck",id:"references/tools/monorepo/depscheck",title:"depscheck",description:"Tool for checking correctness dependency description.",source:"@site/tmp-docs/references/tools/monorepo/depscheck.md",sourceDirName:"references/tools/monorepo",slug:"/references/tools/monorepo/depscheck",permalink:"/docs/references/tools/monorepo/depscheck",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tools/monorepo/depscheck.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"public-packages",permalink:"/docs/references/tools/public-packages"},next:{title:"fix-ts-references",permalink:"/docs/references/tools/monorepo/fix-ts-references"}},p=[{value:"Config parameters for .depscheckrc.yml and cli",id:"config-parameters-for-depscheckrcyml-and-cli",children:[{value:"Config example",id:"config-example",children:[],level:3}],level:2}],d={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Tool for checking correctness dependency description."),(0,c.kt)("p",null,"Tool is configured through ",(0,c.kt)("inlineCode",{parentName:"p"},".depscheckrc")," file and cli options."),(0,c.kt)("p",null,"Under the hood ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/depcheck/depcheck"},"depcheck")," is used."),(0,c.kt)("h2",{id:"config-parameters-for-depscheckrcyml-and-cli"},"Config parameters for .depscheckrc.yml and cli"),(0,c.kt)("p",null,"All of the available parameters for the ",(0,c.kt)("inlineCode",{parentName:"p"},"depscheck")," can be seen in ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/depcheck/depcheck/tree/0.9.2"},"docs"),"."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},'collector\n  --collector                  Module for collecting packages for depshcheck.\n                               Should implement interface\n                               @tinkoff-monorepo/pkgs-collector ->\n                               CollectorInterface (currently\n                               @tinkoff-monorepo/pkgs-collector-pvm is used)\n    [required] [default: {"name":"@tinkoff-monorepo/pkgs-collector-workspaces"}]\n  --collector-config-strategy\n                      [string] [choices: "about-to-update", "update", "changed",\n    "changed-since-release", "affected", "released", "updated", "all"] [default:\n                                                                   ["affected"]]\n\ndepcheck\n  --depcheck-ignore-matches      List of module patterns that should not\n                                 generate error in case they are missing in\n                                 package.json              [array] [default: []]\n  --depcheck-ignore-dirs         List of directory names that depscheck should\n                                 not check                 [array] [default: []]\n  --depcheck-skip-missing        Disable check for missing dependencies\n                                                      [boolean] [default: false]\n  --depcheck-ignore-bin-package  Disable checks in bin files for project\n                                                      [boolean] [default: false]\n\nOptions:\n  --version                   Show version number                      [boolean]\n  --config                    Path to the config (by default cosmiconfig is\n                              used)                                     [string]\n  --fix                       Enables fix error mode. Currently only fixes\n                              unused dependency errors[boolean] [default: false]\n  --ignore-patterns           List of file patterns that should be ignored for\n                              checks on missing deps       [array] [default: []]\n  --ignore-peer-dependencies  List of module patterns from peerDependencies that\n                              should not generate error when dependency is\n                              missing                      [array] [default: []]\n  --ignore-unused             List of module patterns that should not generate\n                              error when dependency is not used\n                                                           [array] [default: []]\n  -h                          Show help                                [boolean]\n')),(0,c.kt)("h3",{id:"config-example"},"Config example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"ignore-patterns:\n  ['**/*.spec.{ts,tsx}', '**/*.test.{ts,tsx}', '**/dynamic-components/*/shared/externals.{js,ts}']\ndepcheck-ignore-dirs: ['__integration__', 'examples', '__tests__']\ndepcheck-ignore-matches: ['@platform/cli', '@tramvai/tools-migrate']\n")))}f.isMDXComponent=!0}}]);