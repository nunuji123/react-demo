//编写基本的路由路线，path为路径，component为对应渲染的组件，exact属性决定是否精准匹配
import Index from "../pages/index/";
import Hook from "../pages/hook/index";
import ContextPage from "../pages/context/";
import DomPage from "../pages/dom";
import MemoFuncPage from "../pages/memo/func/parent";
import ClassPropsPage from "../pages/props/class/parent";
import FuncPropsPage from "../pages/props/func/parent";

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/dom",
    component: DomPage,
  },
  // {
  //   path: "/dom",
  //   component: DomPage,
  // },
  // {
  //   path: "/hook",
  //   component: Hook,
  // },
  // {
  //   path: "/props/func",
  //   component: FuncPropsPage,
  // },
  // {
  //   path: "/props/class",
  //   component: ClassPropsPage,
  // },
  // {
  //   path: "/context",
  //   component: ContextPage,
  // },
  // {
  //   path: "/memo",
  //   component: MemoFuncPage,
  // },
  // {
  //   path: "/memo/func",
  //   component: MemoFuncPage,
  // },
  // {
  //   path: "/memo/class",
  //   component: MemoFuncPage,
  // },
];

//将路由表数组导出
export default routes;
