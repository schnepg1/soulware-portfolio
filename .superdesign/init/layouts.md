# Shared Layout Components

## Router Shell

- File path: `src/App.tsx`
- Description: Root router shell that maps the three product pages. There is no separate shared nav, header, footer, or layout wrapper component.

```tsx
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
```

## App Entry

- File path: `src/main.tsx`
- Description: React entry point that mounts the router shell and imports the global stylesheet.

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
