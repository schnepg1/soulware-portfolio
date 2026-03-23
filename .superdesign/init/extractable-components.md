# Extractable Components

This codebase does not yet contain shared extracted components, but several page-local patterns are suitable for extraction before broader design work.

## ProductHubHeader

- Source: `src/pages/Home.tsx`
- Category: layout
- Description: Top header pill with Soulware brand chip and contact action.
- Extractable props: `contactHref` (string, default: `"mailto:soulwaresolution@gmail.com"`)
- Hardcoded: `PS` monogram, "Soulware product hub" label, pill styling, icon usage

## ProductCard

- Source: `src/pages/Home.tsx`
- Category: basic
- Description: Featured product card with status badge, icon, tags, and two CTAs.
- Extractable props: `name` (string), `status` (string), `eyebrow` (string), `description` (string), `tags` (string array), `primaryHref` (string), `secondaryHref` (string), `secondaryKind` (string)
- Hardcoded: card shell styling, CTA layout, icon frame styling

## GuidianVideoHero

- Source: `src/pages/Guidian.tsx`
- Category: basic
- Description: Poster-to-video media block with play state and close button.
- Extractable props: `videoSrc` (string), `posterSrc` (string), `title` (string), `subtitle` (string)
- Hardcoded: aspect ratio, overlay treatment, play button styling

## MetricGrid

- Source: `src/pages/Guidian.tsx`
- Category: basic
- Description: Compact stat tiles used for product facts and next-step framing.
- Extractable props: `items` (array)
- Hardcoded: tile styling, 2x2 responsive grid behavior

## ChunkworldFactPanel

- Source: `src/pages/Chunkworld.tsx`
- Category: basic
- Description: Side panel showing four quick facts with consistent tile styling.
- Extractable props: `items` (array)
- Hardcoded: panel shell styling, tile typography, responsive grid behavior

## LinkActionCard

- Source: `src/pages/Chunkworld.tsx`
- Category: basic
- Description: CTA card with eyebrow, heading, supporting text, icon, and primary button.
- Extractable props: `label` (string), `title` (string), `description` (string), `href` (string)
- Hardcoded: card shell styling, button styling, icon frame styling
