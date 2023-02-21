"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3772],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?a.createElement(y,o(o({ref:n},l),{},{components:t})):a.createElement(y,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],u={id:"react-query",title:"React Query"},s=void 0,p={unversionedId:"features/data-fetching/react-query",id:"features/data-fetching/react-query",title:"React Query",description:"Tramvai provides a complete integration for the awesome @tanstack/react-query library. React Query is a perfect solution for data fetching which can significantly improve DX and UX in your application.",source:"@site/tmp-docs/03-features/09-data-fetching/04-react-query.md",sourceDirName:"03-features/09-data-fetching",slug:"/features/data-fetching/react-query",permalink:"/docs/features/data-fetching/react-query",draft:!1,editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/03-features/09-data-fetching/04-react-query.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"react-query",title:"React Query"},sidebar:"sidebar",previous:{title:"HTTP Client",permalink:"/docs/features/data-fetching/http-client"},next:{title:"Server-Side Rendering",permalink:"/docs/features/rendering/ssr"}},l={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Quick Start",id:"quick-start",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Default Options",id:"default-options",level:4},{value:"Examples",id:"examples",level:2},{value:"Basic Query",id:"basic-query",level:3},{value:"Prefetching",id:"prefetching",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Shared Query",id:"shared-query",level:3},{value:"Request parameters",id:"request-parameters",level:3},{value:"Custom Query options",id:"custom-query-options",level:3},{value:"Failed requests",id:"failed-requests",level:3},{value:"Conditions",id:"conditions",level:3},{value:"Infinite Query",id:"infinite-query",level:3},{value:"Mutation",id:"mutation",level:3},{value:"Use <code>@tanstack/react-query</code> directly",id:"use-tanstackreact-query-directly",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"<code>Query</code>",id:"query",level:3},{value:"<code>fork</code>",id:"fork",level:4},{value:"<code>prefetchAction</code>",id:"prefetchaction",level:4},{value:"<code>fetchAction</code>",id:"fetchaction",level:4},{value:"<code>raw</code>",id:"raw",level:4},{value:"<code>createQuery</code>",id:"createquery",level:3},{value:"Unique query parameters",id:"unique-query-parameters",level:4},{value:"<code>useQuery</code>",id:"usequery",level:3},{value:"<code>useQueries</code>",id:"usequeries",level:3},{value:"<code>createInfiniteQuery</code>",id:"createinfinitequery",level:3},{value:"<code>useInfiniteQuery</code>",id:"useinfinitequery",level:3},{value:"<code>createMutation</code>",id:"createmutation",level:3},{value:"<code>useMutation</code>",id:"usemutation",level:3},{value:"- Next: Server-Side Rendering",id:"--next-server-side-rendering",level:5},{value:"- Next: Static Site Generation",id:"--next-static-site-generation",level:5}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tramvai provides a complete integration for the awesome ",(0,i.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/overview"},"@tanstack/react-query")," library. React Query is a perfect solution for data fetching which can significantly improve DX and UX in your application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Currently supported @tanstack/react-query version is ^4.7.1")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"You need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/react-query")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/module-react-query")," packages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx tramvai add @tramvai/react-query\nnpx tramvai add @tramvai/module-react-query\n")),(0,i.kt)("p",null,"And connect module to the project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { ReactQueryModule } from '@tramvai/module-react-query';\n\ncreateApp({\n  name: 'tincoin',\n  modules: [ReactQueryModule],\n});\n")),(0,i.kt)("h3",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"\u231b Create a new query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createQuery } from '@tramvai/react-query';\n// @tramvai/module-http-client needed\nimport { HTTP_CLIENT } from '@tramvai/tokens-http-client';\n\nconst query = createQuery({\n  key: ['repoData'],\n  fn() {\n    return this.deps.httpClient\n      .get<Record<string, any>>('https://api.github.com/repos/tinkoff/tramvai')\n      .then(({ payload }) => payload);\n  },\n  deps: {\n    httpClient: HTTP_CLIENT,\n  },\n});\n")),(0,i.kt)("p",null,"\u231b Use query in component:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useQuery } from '@tramvai/react-query';\n\nconst Example = () => {\n  const { isLoading, error, data } = useQuery(query);\n\n  if (isLoading) {\n    return 'Loading...';\n  }\n\n  if (error) {\n    return `An error has occurred: ${error.message}`;\n  }\n\n  return (\n    <div>\n      <h1>{data.name}</h1>\n      <p>{data.description}</p>\n      <strong>\ud83d\udc40 {data.subscribers_count}</strong> <strong>\u2728 {data.stargazers_count}</strong>{' '}\n      <strong>\ud83c\udf74 {data.forks_count}</strong>\n    </div>\n  );\n};\n")),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"You can configure options for the ",(0,i.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/QueryClient"},"QueryClient")," through the ",(0,i.kt)("inlineCode",{parentName:"p"},"QUERY_CLIENT_DEFAULT_OPTIONS_TOKEN"),", e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { provide } from '@tramvai/core';\nimport { QUERY_CLIENT_DEFAULT_OPTIONS_TOKEN } from '@tramvai/tokens-react-query';\n\nconst provider = provide({\n  provide: QUERY_CLIENT_DEFAULT_OPTIONS_TOKEN,\n  useValue: {},\n});\n")),(0,i.kt)("h4",{id:"default-options"},"Default Options"),(0,i.kt)("p",null,"Here is ",(0,i.kt)("inlineCode",{parentName:"p"},"QUERY_CLIENT_DEFAULT_OPTIONS_TOKEN")," default value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const defaults = {\n  queries: {\n    refetchOnMount: false,\n    refetchOnReconnect: false,\n    refetchOnWindowFocus: false,\n  },\n};\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"refetchOnMount")," option is disabled because usually you want to ",(0,i.kt)("a",{parentName:"p",href:"#prefetchaction"},"prefetch")," query for page, and no needs to fetch it again on mount. Another options are disabled for better network requests control from the application side."),(0,i.kt)("p",null,"Also, default ",(0,i.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/query-retries"},"retries")," is disabled for ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/data-fetching/action#conditions"},"actions conditions errors"),", because this errors are expected and retrying is meaningless."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"You can find and run examples in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Tinkoff/tramvai/-/tree/master/examples/how-to/react-query-usage"},"repo")),(0,i.kt)("h3",{id:"basic-query"},"Basic Query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createQuery, useQuery } from '@tramvai/react-query';\n\nconst query = createQuery({\n  key: ['base'],\n  async fn() {\n    await sleep(100);\n    return 'Response from API';\n  },\n});\n\nexport function Component() {\n  const { data, isLoading } = useQuery(query);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n")),(0,i.kt)("h3",{id:"prefetching"},"Prefetching"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Always use page component ",(0,i.kt)("inlineCode",{parentName:"p"},"actions")," static property with ",(0,i.kt)("a",{parentName:"p",href:"#prefetchaction"},"prefetchAction")," to run query for this route at server-side")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createQuery, useQuery } from '@tramvai/react-query';\n\nconst query = createQuery({\n  key: ['base'],\n  async fn() {\n    await sleep(100);\n    return 'Response from API';\n  },\n});\n\nexport default function Page() {\n  const { data, isLoading } = useQuery(query);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n\n// highlight-next-line\nPage.actions = [query.prefetchAction()];\n")),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Queries has full Dependency Injection support, so you can declare dependencies like in ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/provider"},"DI providers"),", in ",(0,i.kt)("inlineCode",{parentName:"p"},"deps")," property. These dependencies will be available in the action ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," functions \u0444\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"this.deps")," property."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When you want to prefetch query with specific parameter, the only way to do it right is to get this parameter from DI")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createQuery, useQuery } from '@tramvai/react-query';\nimport { PAGE_SERVICE_TOKEN } from '@tramvai/tokens-router';\nimport { HTTP_CLIENT } from '@tramvai/tokens-http-client';\n\nconst query = createQuery({\n  key() {\n    return `base/${this.deps.pageService.getCurrentUrl().query.route}`;\n  },\n  async fn() {\n    const { apiClient, pageService } = this.deps;\n\n    const { payload } = await httpClient.get<string>('api/by-route', {\n      query: {\n        route: pageService.getCurrentUrl().query.route ?? 'test',\n      },\n    });\n\n    return payload;\n  },\n  deps: {\n    httpClient: HTTP_CLIENT,\n    pageService: PAGE_SERVICE_TOKEN,\n  },\n});\n\n// eslint-disable-next-line import/no-default-export\nexport default function Component() {\n  const { data, isLoading } = useQuery(query);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n")),(0,i.kt)("h3",{id:"shared-query"},"Shared Query"),(0,i.kt)("p",null,"If you want to use same query in different components, this queries requests will be deduplicated, and response data will be shared."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useState, useEffect } from 'react';\nimport { createQuery, useQuery } from '@tramvai/react-query';\n\nconst query = createQuery({\n  key: ['base'],\n  async fn() {\n    await sleep(100);\n    return 'Response from API';\n  },\n});\n\nconst Child1 = () => {\n  const { isLoading, data } = useQuery(query);\n\n  return <div>Child1: {isLoading ? 'loading...' : data}</div>;\n};\n\nconst Child2 = () => {\n  const { isLoading, data } = useQuery(query);\n\n  return <div>Child2: {isLoading ? 'loading...' : data}</div>;\n};\n\nexport function Component() {\n\n  return (\n    <>\n      <Child1 />\n      <Child2 />\n    </>\n  );\n}\n")),(0,i.kt)("h3",{id:"request-parameters"},"Request parameters"),(0,i.kt)("p",null,"Parameter will be available in ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," functions as first argument. You can pass this parameter as second argument of ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Query keys always should include specific parameters, on which the result of request depends")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createQuery, useQuery } from '@tramvai/react-query';\n\nconst query = createQuery({\n  key: (parameter: string) => ['api-group', parameter],\n  async fn(parameter) {\n    await sleep(100);\n    return `Response ${parameter} from API`;\n  },\n});\n\nconst Child1 = () => {\n  const { isLoading, data } = useQuery(query, 'test-1');\n\n  return <div>Child1: {isLoading ? 'loading...' : data}</div>;\n};\n\nconst Child2 = () => {\n  const { isLoading, data } = useQuery(query, 'test-2');\n\n  return <div>Child2: {isLoading ? 'loading...' : data}</div>;\n};\n\nexport function Component() {\n  return (\n    <>\n      <Child1 />\n      <Child2 />\n    </>\n  );\n}\n")),(0,i.kt)("h3",{id:"custom-query-options"},"Custom Query options"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#default-options"},"Default options")," will be used for all queries, but you can rewrite them for specific query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createQuery, useQuery } from '@tramvai/react-query';\n\nconst query = createQuery({\n  key: 'time',\n  async fn() {\n    await sleep(100);\n    return 'Response from API';\n  },\n  // default options for this query\n  queryOptions: {\n    refetchOnWindowFocus: true,\n    refetchOnMount: true,\n  },\n});\n\nexport function Component() {\n  const { data } = useQuery(\n    // the same query with rewritten options\n    query.fork({\n      refetchInterval: 2000,\n      refetchIntervalInBackground: false,\n    })\n  );\n\n  return <div>{data}</div>;\n}\n")),(0,i.kt)("h3",{id:"failed-requests"},"Failed requests"),(0,i.kt)("p",null,"React Query will retry failed requests 3 times by default with exponential backoff. You can change this behavior with ",(0,i.kt)("inlineCode",{parentName:"p"},"queryOptions")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createQuery, useQuery } from '@tramvai/react-query';\n\nconst query = createQuery({\n  key: 'base',\n  async fn() {\n    throw Error('Error from API');\n  },\n  queryOptions: {\n    retry: 2,\n    retryDelay: 500,\n  },\n});\n\nexport function Component() {\n  const { data, isLoading, isError, error } = useQuery(query);\n\n  if (isLoading) {\n    return <div>loading...</div>;\n  }\n\n  if (isError) {\n    return <div>error: {error!.message}</div>;\n  }\n\n  return <div>{data}</div>;\n}\n")),(0,i.kt)("h3",{id:"conditions"},"Conditions"),(0,i.kt)("p",null,"All ",(0,i.kt)("a",{parentName:"p",href:"/docs/features/data-fetching/action#conditions"},"actions retrictions")," are supported:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createQuery, useQuery } from '@tramvai/react-query';\nimport { FAKE_API_CLIENT } from '../../fakeApiClient';\n\nconst query = createQuery({\n  key: 'base',\n  async fn() {\n    await sleep(1000);\n    return 'Some slow response from API';\n  },\n  // highlight-start\n  conditions: {\n    onlyServer: true,\n  },\n  // highlight-end\n});\n\nexport function Component() {\n  const { data = 'no-data', isLoading } = useQuery(query);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n")),(0,i.kt)("h3",{id:"infinite-query"},"Infinite Query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createInfiniteQuery, useInfiniteQuery } from '@tramvai/react-query';\nimport { HTTP_CLIENT } from '@tramvai/tokens-http-client';\n\ninterface Response {\n  nextPage?: number;\n  list: string[];\n}\n\nconst query = createInfiniteQuery({\n  key: 'list',\n  async fn(_, start = 0) {\n    const { payload } = await this.deps.httpClient.get<Response>('api/list', {\n      query: {\n        count: 30,\n        start,\n      },\n    });\n\n    return payload;\n  },\n  getNextPageParam: (page: Response) => {\n    return page.nextPage;\n  },\n  deps: {\n    httpClient: HTTP_CLIENT,\n  },\n  infiniteQueryOptions: {},\n});\n\nexport function Component() {\n  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(query);\n\n  if (isLoading) {\n    return <>loading...</>;\n  }\n\n  return (\n    <div>\n      <div>\n        {data!.pages.map((page) => {\n          return page.list.map((entry) => {\n            return <div key={entry}>{entry}</div>;\n          });\n        })}\n      </div>\n      {hasNextPage && (\n        <button type=\"button\" onClick={() => fetchNextPage()}>\n          Load more\n        </button>\n      )}\n    </div>\n  );\n}\n")),(0,i.kt)("h3",{id:"mutation"},"Mutation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createMutation, useMutation } from '@tramvai/react-query';\nimport { HTTP_CLIENT } from '@tramvai/tokens-http-client';\n\nconst mutation = createMutation({\n  key: 'post',\n  async fn(_, data: string) {\n    const { payload } = await this.deps.httpClient.post('api/post', {\n      body: {\n        data,\n      },\n    });\n\n    return payload;\n  },\n  deps: {\n    httpClient: HTTP_CLIENT,\n  },\n});\n\nexport function Component() {\n  const { isLoading, mutate } = useMutation(mutation);\n\n  if (isLoading) {\n    return <>loading...</>;\n  }\n\n  return (\n    <button type=\"button\" onClick={() => mutate('test')}>\n      Send data\n    </button>\n  );\n}\n")),(0,i.kt)("h3",{id:"use-tanstackreact-query-directly"},"Use ",(0,i.kt)("inlineCode",{parentName:"h3"},"@tanstack/react-query")," directly"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Prefer to use methods from the ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/react-query")," as it can work both with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," wrapper and the query options to ",(0,i.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query")," itself")),(0,i.kt)("p",null,"You can get ",(0,i.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/reference/QueryClient"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryClient"))," from di by token ",(0,i.kt)("inlineCode",{parentName:"p"},"QUERY_CLIENT_TOKEN")," or using method ",(0,i.kt)("inlineCode",{parentName:"p"},"useQueryClient")," in React-components."),(0,i.kt)("p",null,"To convert wrapped ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," object to object acceptable by ",(0,i.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query")," use method ",(0,i.kt)("a",{parentName:"p",href:"#raw"},"raw")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," instance."),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"query"},(0,i.kt)("inlineCode",{parentName:"h3"},"Query")),(0,i.kt)("p",null,"A wrapper around react-query options with tramvai integration."),(0,i.kt)("h4",{id:"fork"},(0,i.kt)("inlineCode",{parentName:"h4"},"fork")),(0,i.kt)("p",null,"Create new ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," from an existing query with option to override settings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createQuery } from '@tramvai/react-query';\n\nconst query = createQuery();\n\nconst newQuery = query.fork({\n  refetchInterval: 2000,\n  refetchIntervalInBackground: false,\n});\n")),(0,i.kt)("h4",{id:"prefetchaction"},(0,i.kt)("inlineCode",{parentName:"h4"},"prefetchAction")),(0,i.kt)("p",null,"Return a tramvai action that can be used to prefetch current query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export default function PageComponent() {\n  const { data, isLoading } = useQuery(query);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n\nPageComponent.actions = [query.prefetchAction()];\n")),(0,i.kt)("h4",{id:"fetchaction"},(0,i.kt)("inlineCode",{parentName:"h4"},"fetchAction")),(0,i.kt)("p",null,"Return a tramvai action that can be used to fetch current query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const action = declareAction({\n  name: 'action',\n  async fn() {\n    const result = await this.executeAction(query.fetchAction());\n\n    console.log('__action__', result);\n  },\n});\n")),(0,i.kt)("h4",{id:"raw"},(0,i.kt)("inlineCode",{parentName:"h4"},"raw")),(0,i.kt)("p",null,"Might be used when the raw query options is needed. The result can be passed to the underlying methods of ",(0,i.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query")," lib in cases when ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/react-query")," doesn't provide appropriate wrapper. This method is used internally in the lib to redirect calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query"),"."),(0,i.kt)("h3",{id:"createquery"},(0,i.kt)("inlineCode",{parentName:"h3"},"createQuery")),(0,i.kt)("p",null,"Allows you to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," object that can later be used in components using ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery"),". Used to execute single data retrieval requests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createQuery } from '@tramvai/react-query';\n\nconst query = createQuery({\n  key: ['base'],\n  fn: async (_, { apiClient }) => {\n    const { payload } = await apiClient.get('api/base');\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n")),(0,i.kt)("h4",{id:"unique-query-parameters"},"Unique query parameters"),(0,i.kt)("p",null,"To create a generic ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," that takes parameters for a query, you must return a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),", you can read more about this in the official documentation section ",(0,i.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/guides/query-keys"},"Query Keys")),(0,i.kt)("p",null,"As a parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," you can use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a string, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"key: 'query-name'")),(0,i.kt)("li",{parentName:"ul"},"an array where any serializable data can be used as elements, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"key: ['query-name', false, { bar: 'baz }]")),(0,i.kt)("li",{parentName:"ul"},"a function that takes the parameters with which ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," is called and returns a string - ",(0,i.kt)("inlineCode",{parentName:"li"},"key: (this: { deps }, options) => 'query-name'"),". Where through ",(0,i.kt)("inlineCode",{parentName:"li"},"this.deps")," you can get resolved deps for the query."),(0,i.kt)("li",{parentName:"ul"},"a function that accepts parameters, with which ",(0,i.kt)("inlineCode",{parentName:"li"},"query")," is called, and returns an array, where any serializable data can be used as elements - ",(0,i.kt)("inlineCode",{parentName:"li"},"key: (this: { deps }, options) => ['query-name', options, { bar: 'baz' }]"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createQuery, useQuery } from '@tramvai/react-query';\n\nconst query = createQuery({\n  key: (id: number) => ['user', id],\n  async fn(id) {\n    const { apiClient } = this.deps;\n    const { payload } = await apiClient.get(`api/user/${id}`);\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n\nexport function Component({ id }) {\n  const { data, isLoading } = useQuery(query, id);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n")),(0,i.kt)("h3",{id:"usequery"},(0,i.kt)("inlineCode",{parentName:"h3"},"useQuery")),(0,i.kt)("p",null,"React hook for working with ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," object"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/reference/useQuery"},"react-query docs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { useQuery } from '@tramvai/react-query';\n\nexport function Component() {\n  const { data, isLoading } = useQuery(query);\n\n  return <div>{isLoading ? 'loading...' : data}</div>;\n}\n")),(0,i.kt)("h3",{id:"usequeries"},(0,i.kt)("inlineCode",{parentName:"h3"},"useQueries")),(0,i.kt)("p",null,"React Hook for working with the list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," objects"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/reference/useQueries"},"react-query docs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { useQueries } from '@tramvai/react-query';\n\nexport function Component() {\n  const [{ data: data1, isLoading: isLoading1 }, { data: data2, isLoading: isLoading2 }] =\n    useQueries([query1, query2]);\n\n  return (\n    <div>\n      <div>{isLoading1 ? 'loading1...' : data1}</div>\n      <div>{isLoading2 ? 'loading2...' : data2}</div>\n    </div>\n  );\n}\n")),(0,i.kt)("h3",{id:"createinfinitequery"},(0,i.kt)("inlineCode",{parentName:"h3"},"createInfiniteQuery")),(0,i.kt)("p",null,"Creates an ",(0,i.kt)("inlineCode",{parentName:"p"},"InfiniteQuery")," object that can later be used in components using ",(0,i.kt)("inlineCode",{parentName:"p"},"useInfiniteQuery"),". It is used to execute queries to obtain a sequence of data that can be loaded as the component runs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createInfiniteQuery } from '@tramvai/react-query';\n\nconst query = createInfiniteQuery({\n  key: 'list',\n  async fn(_, start = 0) {\n    const { apiClient } = this.deps;\n    const { payload } = await apiClient.get<Response>('api/list', {\n      query: {\n        count: 30,\n        start,\n      },\n    });\n\n    return payload;\n  },\n  getNextPageParam: (page: Response) => {\n    return page.nextPage;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n")),(0,i.kt)("h3",{id:"useinfinitequery"},(0,i.kt)("inlineCode",{parentName:"h3"},"useInfiniteQuery")),(0,i.kt)("p",null,"React hook for working with the ",(0,i.kt)("inlineCode",{parentName:"p"},"InfiniteQuery")," object"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/reference/useInfiniteQuery"},"react-query docs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { useInfiniteQuery } from '@tramvai/react-query';\n\nexport function Component() {\n  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(query);\n\n  if (isLoading) {\n    return 'loading...';\n  }\n\n  return (\n    <div>\n      <div>\n        {data.pages.map((page) => {\n          return page.list.map((entry) => {\n            return <div key={entry}>{entry}</div>;\n          });\n        })}\n      </div>\n      {hasNextPage && (\n        <button type=\"button\" onClick={() => fetchNextPage()}>\n          Load more\n        </button>\n      )}\n    </div>\n  );\n}\n")),(0,i.kt)("h3",{id:"createmutation"},(0,i.kt)("inlineCode",{parentName:"h3"},"createMutation")),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutation")," object that can later be used in components using ",(0,i.kt)("inlineCode",{parentName:"p"},"useMutation"),". Used to send and modify data in the api."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createMutation } from '@tramvai/react-query';\n\nconst mutation = createMutation({\n  key: 'post',\n  async fn(_, data: string) {\n    const { apiClient } = this.deps;\n    const { payload } = await apiClient.post('api/post', {\n      body: {\n        data,\n      },\n    });\n\n    return payload;\n  },\n  deps: {\n    apiClient: TINKOFF_API_SERVICE,\n  },\n});\n")),(0,i.kt)("h3",{id:"usemutation"},(0,i.kt)("inlineCode",{parentName:"h3"},"useMutation")),(0,i.kt)("p",null,"React hook for working with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mutation")," object"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/reference/useMutation"},"react-query docs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { useMutation } from '@tramvai/react-query';\n\nexport function Component() {\n  const { isLoading, mutate } = useMutation(mutation);\n\n  if (isLoading) {\n    return 'loading...';\n  }\n\n  return (\n    <button type=\"button\" onClick={() => mutate('test')}>\n      Send data\n    </button>\n  );\n}\n")),(0,i.kt)("h5",{id:"--next-server-side-rendering"},"- ",(0,i.kt)("a",{parentName:"h5",href:"/docs/features/rendering/ssr"},"Next: Server-Side Rendering")),(0,i.kt)("h5",{id:"--next-static-site-generation"},"- ",(0,i.kt)("a",{parentName:"h5",href:"/docs/features/rendering/ssg"},"Next: Static Site Generation")))}m.isMDXComponent=!0}}]);