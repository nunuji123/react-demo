import Index from "./pages/index/";
import PassData from "./pages/passData/index";
import Hook from "./pages/hook/index";
import ContextPage from "./pages/context/";
import DomPage from "./pages/dom";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dom" element={<DomPage />} />
        <Route path="/passData" element={<PassData />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/Context" element={<ContextPage />} />
      </Routes>
    </div>
  );
}
