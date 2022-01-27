import PassData from "./pages/passData/index";
import Hook from "./pages/hook/index";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/passData" element={<PassData />} />
        <Route path="/hook" element={<Hook />} />
      </Routes>
    </div>
  );
}
