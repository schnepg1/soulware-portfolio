import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Guidian from "./pages/Guidian";
import Chunkworld from "./pages/Chunkworld";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guidian" element={<Guidian />} />
        <Route path="/chunkworld" element={<Chunkworld />} />
      </Routes>
    </HashRouter>
  );
}
