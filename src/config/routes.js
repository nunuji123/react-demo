//编写基本的路由路线，path为路径，component为对应渲染的组件，exact属性决定是否精准匹配
import Layout from '../component/Layout'
import Home from '../pages/home'
import Index from '../pages/index/'
import Hook from '../pages/hook/index'
import ContextPage from '../pages/context/'
import DomPage from '../pages/dom'
import HocPage from '../pages/hoc'
import HocDemo1Page from '../pages/hoc/demo1'
import HocDemo2Page from '../pages/hoc/demo2'
import HocDemo3Page from '../pages/hoc/demo3'
import RefsPage from '../pages/refs'
import MemoFuncPage from '../pages/memo/func/parent'
import MemoPropsPage from '../pages/memo/class/parent'
import ClassPropsPage from '../pages/props/class/parent'
import FuncPropsPage from '../pages/props/func/parent'
import UseDebouncePage from '../pages/customize-hooks/useDebounce'

import NoMatch from '../pages/noMatch'

let routes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: '/hook',
				element: <Hook />,
			},
			{
				path: '/memo',
				// element: <MemoFuncPage />,
				children: [
					{ index: true, element: <MemoFuncPage /> },
					{ path: '/memo/func', element: <MemoFuncPage /> },
					{ path: '/memo/class', element: <MemoPropsPage /> },
				],
			},
			{
				path: '/props',
				// element: <MemoFuncPage />,
				children: [
					{ index: true, element: <MemoFuncPage /> },
					{ path: '/props/func', element: <ClassPropsPage /> },
					{ path: '/props/class', element: <FuncPropsPage /> },
				],
			},
			{
				path: '/dom',
				element: <DomPage />,
			},
			{
				path: '/customize-hooks',
				children: [
					{ index: true, element: <UseDebouncePage /> },
					{
						path: '/customize-hooks/useDebounce',
						element: <UseDebouncePage />,
					},
				],
			},
			{
				path: '/context',
				element: <ContextPage />,
			},
			{
				path: '/refs',
				element: <RefsPage />,
			},
			{
				path: '/hoc',
				element: <HocPage />,
				children: [
					{ index: true, element: <HocPage /> },
					{
						path: '/hoc/demo1',
						element: <HocDemo1Page />,
					},
					{
						path: '/hoc/demo2',
						element: <HocDemo2Page />,
					},
					{
						path: '/hoc/demo3',
						element: <HocDemo3Page />,
					},
				],
			},
			{ path: '*', element: <NoMatch /> },
		],
	},
]
export default routes
