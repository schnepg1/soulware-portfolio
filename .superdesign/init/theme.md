# Theme Inventory

## Styling Stack

- Tailwind CSS v4 via Vite plugin
- Global stylesheet: `src/index.css`
- No dedicated `tailwind.config.*` file is present
- Visual language is currently authored directly with Tailwind utility classes inside page components

## `package.json`

```json
{
  "name": "soulware-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.469.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.1.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.6",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^4.0.6",
    "typescript": "^5.7.2",
    "vite": "^6.0.7"
  }
}
```

## `vite.config.ts`

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## `src/index.css`

```css
@import "tailwindcss";
```

## Observed Design Tokens From Usage

- Base background: `#0b1020` with darker gradient falloff to `#090d18`
- Accent colors: cyan (`cyan-400`, `cyan-300`, `cyan-200`), indigo, occasional emerald for status
- Text hierarchy: white, `slate-200`, `slate-300`, `slate-400`, `slate-500`
- Surface treatment: `bg-white/5`, `bg-black/20`, `border-white/10`, backdrop blur, heavy black drop shadows
- Radius pattern: large rounded corners (`rounded-2xl`, `rounded-3xl`, `rounded-[2rem]`, pills)
- Grid texture: subtle white line grid overlay on the page background
- Typography pattern: heavy display headlines with compact tracking, clean sans-serif default stack
