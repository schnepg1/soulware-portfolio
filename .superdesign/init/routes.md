# Route Map

## Framework

- Framework: React 18
- Meta-framework: none
- Router: `react-router-dom` with `HashRouter`
- CSS approach: Tailwind CSS v4 imported through `src/index.css`
- Component library: custom page-local JSX plus `lucide-react` icons

## Router Config

- Router file: `src/App.tsx`

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

## Routes

### `#/`

- Component: `src/pages/Home.tsx`
- Layout used: none, page is self-contained
- Summary: Product hub landing page with hero copy, featured product cards, availability summary, and footer contact link.

### `#/guidian`

- Component: `src/pages/Guidian.tsx`
- Layout used: none, page is self-contained
- Summary: Product detail page for Guidian with fixed top nav, hero, video poster/player toggle, stats, and action buttons.

### `#/chunkworld`

- Component: `src/pages/Chunkworld.tsx`
- Layout used: none, page is self-contained
- Summary: Product detail page for Chunkworld with hero messaging, quick facts panel, and two call-to-action cards.
