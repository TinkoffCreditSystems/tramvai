(self.webpackChunk=self.webpackChunk||[]).push([[177],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,v=l["".concat(i,".").concat(m)]||l[m]||u[m]||s;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2749:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>p,toc:()=>d,default:()=>l});var r=n(2122),o=n(9756),s=(n(7294),n(3905)),a=["components"],c={id:"test-react",title:"React tests"},i=void 0,p={unversionedId:"references/test/test-react",id:"references/test/test-react",isDocsHomePage:!1,title:"React tests",description:"Set of helpers for testing React-components",source:"@site/tmp-docs/references/test/test-react.md",sourceDirName:"references/test",slug:"/references/test/test-react",permalink:"/en/docs/references/test/test-react",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/test/test-react.md",version:"current",frontMatter:{id:"test-react",title:"React tests"},sidebar:"docs",previous:{title:"Integration tests",permalink:"/en/docs/references/test/test-integration"},next:{title:"JSDom tests",permalink:"/en/docs/references/test/test-jsdom"}},d=[{value:"Installation",id:"installation",children:[]},{value:"How to",id:"how-to",children:[{value:"Test component",id:"test-component",children:[]},{value:"Test React-hooks",id:"test-react-hooks",children:[]}]}],u={toc:d};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Set of helpers for testing React-components"),(0,s.kt)("p",null,"Helpers are based on libraries ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-testing-library"},"@testing-library/react")," ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks")),(0,s.kt)("p",null,"If you are using jest for testing, consider to add a library ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/testing-library/jest-dom"},"@testing-library/jest-dom")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"react")," should be installed manually")),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @tramvai/test-react\n")),(0,s.kt)("h2",{id:"how-to"},"How to"),(0,s.kt)("h3",{id:"test-component"},"Test component"),(0,s.kt)("p",null,"Under the hood the ",(0,s.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro"},"@testing-library/react")," is used."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * @jest-environment jsdom\n */\nimport { testComponent } from '@tramvai/test-react';\n\ndescribe('test', () => {\n  it('render', async () => {\n    const { render, rerender, context, act, fireEvent, Wrapper } = testComponent(<Cmp id={1} />);\n\n    // test component render\n    expect(render.getByTestId('test').textContent).toBe('Content 1');\n\n    // test render after store update\n    act(() => {\n      context.dispatch(event('data'));\n    });\n\n    // interact with the component\n    fireEvent.click(render.getByText('Button'));\n\n    // component rerender\n    rerender(<Cmp id={2} />);\n\n    expect(render.getByTestId('test').textContent).toBe('Content 2');\n  });\n});\n")),(0,s.kt)("p",null,(0,s.kt)("details",null,(0,s.kt)("summary",null,"More examples"),(0,s.kt)("p",null,(0,s.kt)("pre",{parentName:"p"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * @jest-environment jsdom\n */\n\nimport React, { useEffect, useRef } from 'react';\nimport { createReducer, createEvent, useStore } from '@tramvai/state';\nimport { useDi } from '@tramvai/react';\nimport { useRoute } from '@tinkoff/router';\nimport { testComponent } from './testComponent';\n\ndescribe('test/unit/react/testComponent', () => {\n  it('should render simple component', async () => {\n    const Cmp = () => {\n      return (\n        <div>\n          <div>Root</div>\n          <div data-testid=\"test\">Content</div>\n        </div>\n      );\n    };\n\n    const { render } = testComponent(<Cmp />);\n\n    expect(render.getByTestId('test').textContent).toBe('Content');\n  });\n\n  it('should rerender component on store updates', async () => {\n    const event = createEvent<void>('evnt');\n    const store = createReducer('store', { a: 1 }).on(event, (state) => ({ a: state.a + 1 }));\n\n    const Cmp = () => {\n      const { a } = useStore(store);\n\n      return (\n        <div>\n          <span data-testid=\"content\">Counter: {a}</span>\n        </div>\n      );\n    };\n\n    const { context, render, act } = testComponent(<Cmp />, { stores: [store] });\n    expect(render.getByTestId('content').textContent).toBe('Counter: 1');\n\n    act(() => {\n      context.dispatch(event());\n    });\n\n    expect(render.getByTestId('content').textContent).toBe('Counter: 2');\n  });\n\n  it('should work with di', async () => {\n    const Cmp = () => {\n      const { provider } = useDi({ provider: 'provider' });\n\n      return <span role=\"text\">{provider}</span>;\n    };\n\n    const { render } = testComponent(<Cmp />, {\n      providers: [\n        {\n          provide: 'provider',\n          useValue: 'test',\n        },\n      ],\n    });\n\n    expect(render.getByRole('text')).toMatchInlineSnapshot(`\n      <span\n        role=\"text\"\n      >\n        test\n      </span>\n    `);\n  });\n\n  it('should work with routing', async () => {\n    const Cmp = () => {\n      const route = useRoute();\n\n      return (\n        <div>\n          <div data-testid=\"route\">\n            <div data-testid=\"route-path\">{route.actualPath}</div>\n            <div data-testid=\"route-name\">{route.name}</div>\n          </div>\n        </div>\n      );\n    };\n\n    const { render } = testComponent(<Cmp />, { currentRoute: { name: 'test', path: '/test/' } });\n\n    expect(render.getByTestId('route-path').textContent).toBe('/test/');\n    expect(render.getByTestId('route-name').textContent).toBe('test');\n  });\n\n  it('should rerender simple component', async () => {\n    expect.hasAssertions();\n\n    const Cmp = ({ label }: { label: string }) => {\n      const count = useRef(1);\n      useEffect(() => {\n        count.current += 1;\n      }, [label]);\n      return (\n        <div>\n          <div>Root</div>\n          <div data-testid=\"test\">{`${count.current}. ${label}`}</div>\n        </div>\n      );\n    };\n\n    const { render, rerender } = testComponent(<Cmp label=\"first render\" />);\n    expect(render.getByTestId('test').textContent).toBe('1. first render');\n\n    rerender(<Cmp label=\"second render\" />);\n    expect(render.getByTestId('test').textContent).toBe('2. second render');\n  });\n\n  it('should rerender component on props updates', async () => {\n    const event = createEvent<void>('evnt');\n    const store = createReducer('store', { a: 1 }).on(event, (state) => ({ a: state.a + 1 }));\n\n    const Cmp = ({ label }: { label: string }) => {\n      const count = useRef(1);\n      const { a } = useStore(store);\n      useEffect(() => {\n        count.current += 1;\n      }, [label]);\n      return (\n        <div>\n          <span data-testid=\"content\">{`${count.current}. ${label}: ${a}`}</span>\n        </div>\n      );\n    };\n\n    const { context, render, rerender, act } = testComponent(<Cmp label=\"first render\" />, {\n      stores: [store],\n    });\n    expect(render.getByTestId('content').textContent).toBe('1. first render: 1');\n\n    act(() => {\n      context.dispatch(event());\n    });\n    expect(render.getByTestId('content').textContent).toBe('2. first render: 2');\n\n    rerender(<Cmp label=\"second render\" />);\n    expect(render.getByTestId('content').textContent).toBe('2. second render: 2');\n  });\n});\n\n"))))),(0,s.kt)("h3",{id:"test-react-hooks"},"Test React-hooks"),(0,s.kt)("p",null,"Under the hood the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks")," is used."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * @jest-environment jsdom\n */\nimport { testHooks } from '@tramvai/test-react';\n\ndescribe('test', () => {\n  it('hook', async () => {\n    const { result, context, act } = testHook(() => useHook());\n\n    // test the result of hook call\n    expect(result.current).toBe('result');\n\n    // test the result after store update\n    act(() => {\n      context.dispatch(event('data'));\n    });\n  });\n});\n")),(0,s.kt)("p",null,(0,s.kt)("details",null,(0,s.kt)("summary",null,"More examples"),(0,s.kt)("p",null,(0,s.kt)("pre",{parentName:"p"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * @jest-environment jsdom\n */\n\nimport { createReducer, createEvent, useStore } from '@tramvai/state';\nimport { useDi } from '@tramvai/react';\nimport { useRoute } from '@tinkoff/router';\nimport { waitRaf } from '@tramvai/test-jsdom';\nimport { testHook } from './testHook';\n\ndescribe('test/unit/react/testHook', () => {\n  it('should render simple hook', async () => {\n    const useHook = jest.fn((p: string) => 'result');\n\n    const { result } = testHook(() => useHook('test'));\n\n    expect(result.current).toBe('result');\n    expect(useHook).toHaveBeenCalledWith('test');\n  });\n\n  it('should rerender hook', async () => {\n    const event = createEvent<void>('evnt');\n    const store = createReducer('store', { a: 1 }).on(event, (state) => ({ a: state.a + 1 }));\n\n    const useHook = () => {\n      return useStore(store).a;\n    };\n\n    const { context, result, act } = testHook(() => useHook(), { stores: [store] });\n    expect(result.current).toBe(1);\n\n    await act(async () => {\n      await context.dispatch(event());\n      await waitRaf();\n    });\n\n    expect(result.current).toBe(2);\n  });\n\n  it('should work with di', async () => {\n    const useHook = () => {\n      return useDi({ provider: 'provider' }).provider;\n    };\n\n    const { result } = testHook(() => useHook(), {\n      providers: [\n        {\n          provide: 'provider',\n          useValue: 'test',\n        },\n      ],\n    });\n\n    expect(result.current).toEqual('test');\n  });\n\n  it('should work with routing', async () => {\n    const useHook = () => {\n      const route = useRoute();\n\n      return [route.actualPath, route.name];\n    };\n\n    const { result } = testHook(() => useHook(), {\n      currentRoute: { name: 'test', path: '/test/' },\n    });\n\n    expect(result.current).toEqual(['/test/', 'test']);\n  });\n});\n\n"))))))}l.isMDXComponent=!0}}]);