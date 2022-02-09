import Index from "./pages/index/";
import Hook from "./pages/hook/index";
import ContextPage from "./pages/context/";
import DomPage from "./pages/dom";
import MemoFuncPage from "./pages/memo/func/parent";
import ClassPropsPage from "./pages/props/class/parent";
import FuncPropsPage from "./pages/props/func/parent";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dom" element={<DomPage />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/context" element={<ContextPage />} />
        <Route path="/memo" element={<MemoFuncPage />} />
        <Route path="/memo/func" element={<MemoFuncPage />} />
        <Route path="/props/func" element={<FuncPropsPage />} />
        <Route path="/props/class" element={<ClassPropsPage />} />
      </Routes>
    </div>
  );
}
