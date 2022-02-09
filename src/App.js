import Index from "./pages/index/";
import Hook from "./pages/hook/index";
import ContextPage from "./pages/context/";
import DomPage from "./pages/dom";
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
        <Route path="/props/func" element={<FuncPropsPage />} />
        <Route path="/props/class" element={<ClassPropsPage />} />
      </Routes>
    </div>
  );
}
