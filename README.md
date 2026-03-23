# Soulware Portfolio

Personal product hub for Soulware, showcasing AI tools and interactive products in a warm cinematic UI system.

## Stack

- **React 18** + TypeScript
- **Vite** for bundling
- **Tailwind CSS v4** for styling
- **React Router v7** for client-side routing
- **lucide-react** for icons

## Visual System

The current site direction is:

- Warm cinematic light palette
- Mediterranean-inspired material feel
- Terracotta primary actions with olive supporting accents
- Soft premium surfaces with restrained blur and large-radius cards
- Subtle gradient edge glow on featured cards and CTAs

The source-of-truth design notes live in [`.superdesign/design-system.md`](G:\Coding\Projects\soulware-portfolio\.superdesign\design-system.md).

## Pages

| Route | Description |
|-------|-------------|
| `#/` | Homepage product hub with featured products |
| `#/guidian` | Guidian product page with launch video |
| `#/chunkworld` | Chunkworld experimental product page |

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Design Workflow

This repo includes Superdesign context under [`.superdesign/init`](G:\Coding\Projects\soulware-portfolio\.superdesign\init) plus the active design rules in [`.superdesign/design-system.md`](G:\Coding\Projects\soulware-portfolio\.superdesign\design-system.md).

Use those files when iterating on the UI so the home page and product pages stay visually consistent.

## Hosting

This site is currently live at [soulware.zo.space](https://soulware.zo.space).

The source of truth is this GitHub repo. Connect it to **Cloudflare Pages** or **Vercel** for free hosting with automatic deploys on push.

## Assets

- Video: `public/videos/guidian-marketing.mp4`
- Poster image: `public/images/guidian-explainer-poster.jpg`
