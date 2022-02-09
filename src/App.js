import Index from "./pages/index/";
import PassData from "./pages/passData/index";
import Hook from "./pages/hook/index";
import ContextPage from "./pages/context/";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/passData" element={<PassData />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/Context" element={<ContextPage />} />
      </Routes>
    </div>
  );
}
