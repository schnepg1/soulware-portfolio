# Page Dependency Trees

## `#/` (Home Page)

Entry: `src/pages/Home.tsx`

Dependencies:
- `src/pages/Home.tsx`
- `lucide-react` icons: `ArrowRight`, `Bot`, `Code2`, `ExternalLink`, `Grid2x2`, `Mail`, `PlayCircle`, `Sparkles`

Notes:
- No local component imports.
- All visual UI for the home page is contained in the page file itself.

## `#/guidian` (Guidian Product Page)

Entry: `src/pages/Guidian.tsx`

Dependencies:
- `src/pages/Guidian.tsx`
- `lucide-react` icons: `Play`, `ArrowLeft`, `ArrowRight`, `X`

Notes:
- No local component imports.
- Includes local UI state for video poster/player toggle, but all render output lives in the same file.

## `#/chunkworld` (Chunkworld Product Page)

Entry: `src/pages/Chunkworld.tsx`

Dependencies:
- `src/pages/Chunkworld.tsx`
- `lucide-react` icons: `ArrowLeft`, `ArrowRight`, `ExternalLink`, `PlayCircle`, `Sparkles`

Notes:
- No local component imports.
- All visual UI for the page is contained in the page file itself.
