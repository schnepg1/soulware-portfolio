import { useLayoutEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Guidian from "./pages/Guidian";
import Chunkworld from "./pages/Chunkworld";

function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guidian" element={<Guidian />} />
        <Route path="/chunkworld" element={<Chunkworld />} />
      </Routes>
    </HashRouter>
  );
}
