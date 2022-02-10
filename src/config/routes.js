//编写基本的路由路线，path为路径，component为对应渲染的组件，exact属性决定是否精准匹配
import Layout from '../component/Layout';
import Home from '../pages/home';
import Index from "../pages/index/";
import Hook from "../pages/hook/index";
import ContextPage from "../pages/context/";
import DomPage from "../pages/dom";
import MemoFuncPage from "../pages/memo/func/parent";
import MemoPropsPage from "../pages/memo/class/parent";
import ClassPropsPage from "../pages/props/class/parent";
import FuncPropsPage from "../pages/props/func/parent";

import NoMatch from '../pages/noMatch';


let routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/hook",
        element: <Hook />,
      },
      {
        path: "/memo",
        // element: <MemoFuncPage />,
        children: [
          { index: true, element: <MemoFuncPage /> },
          { path: "/memo/func", element: <MemoFuncPage /> },
          { path: "/memo/class", element: <MemoPropsPage /> }
        ]
      },
      {
        path: "/props",
        // element: <MemoFuncPage />,
        children: [
          { index: true, element: <MemoFuncPage /> },
          { path: "/props/func", element: <ClassPropsPage /> },
          { path: "/props/class", element: <FuncPropsPage /> }
        ]
      },
      {
        path: "/dom",
        element: <DomPage />,
      },
      {
        path: "/context",
        element: <ContextPage />,
      },
      { path: "*", element: <NoMatch /> }
    ]
  }
];
export default routes
