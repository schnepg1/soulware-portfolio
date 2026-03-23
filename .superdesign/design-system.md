# Soulware Design System

## Product Context

Soulware is a lightweight product hub for two projects:

- Guidian: a live AI focus assistant
- Chunkworld: an experimental interactive canvas product with an alpha and concept deck

The site should feel curated and product-focused, not like a generic startup template. It needs to communicate what each product is quickly, make the right next action obvious, and feel visually distinctive without becoming noisy.

## Final Direction

- Mood: warm cinematic, polished, modern, lightly experimental
- Reference feeling: Mediterranean villa light, refined materials, premium calm
- Brand personality: direct, intentional, confident, uncluttered
- Avoid: cold SaaS chrome, purple-heavy gradients, harsh dark glass, playful pastel UI, soft-drink neomorphism, decorative serif branding

## Core UX Goals

- Make the first screen explain the product immediately
- Keep one obvious primary action and one clear secondary action per section
- Preserve low navigation friction between hub, product pages, and outbound destinations
- Keep copy tight and readable, with stronger hierarchy than decoration

## Color System

### Foundations

- Page background base: `#fcfaf7`
- Page background depth: `#f4efe7` to `#f5f2ed`
- Primary text: `slate-900`
- Secondary text: `slate-600`
- Supporting text: `slate-400` to `slate-500`
- Divider lines: `slate-200`

### Accents

- Terracotta primary accent: `orange-600` to `orange-700`
- Olive secondary accent: `lime-600` or muted olive green for active/supporting emphasis
- Use olive for live/ready/success states when it feels more natural than emerald
- Use warm orange/terracotta for primary actions, hero emphasis, and featured attention moments

### Usage Rules

- Backgrounds should stay warm, bright, and breathable
- Accents should be selective, not sprayed across every element
- Each product can lean into one accent family:
  - Guidian: olive-supported, terracotta-primary
  - Chunkworld: terracotta-led with olive supporting detail

## Surfaces And Materials

- Main surfaces: translucent white or cream panels with subtle blur
- Panel treatment: `bg-white/50` to `bg-white/75` with soft border contrast
- Borders: light warm borders such as `border-slate-200` or low-alpha warm strokes
- Shadows: large soft shadows with low-opacity slate or warm tint
- Radii: use generous rounded values, typically `rounded-2xl` to `rounded-[2rem]`
- Avoid heavy inset neomorphism as the default; use only hints of softness where useful

## Background Treatment

- Use warm radial gradients with terracotta and olive tinting
- Keep the faint structural grid overlay from the current site, but tone it down for the light palette
- Background atmosphere should support the layout, not compete with it

## Typography

- Use the project default sans-serif stack
- Headlines should be heavy, compact, and high-contrast
- Eyebrows and chips should use uppercase tracking to frame sections
- Body copy should remain concise with comfortable line-height
- No font changes are required in code unless the project later adopts a shared type system

## Layout Conventions

- Prefer wide, left-weighted hero sections with clean scan paths
- Use asymmetry when it improves emphasis, not for novelty
- Maintain strong mobile stacking and spacing rhythm
- Product pages should feel like extensions of the hub, not separate visual systems

## Components And Patterns

### Navigation

- Use lightweight pill or soft-glass navigation treatments
- Back links should feel calm and obvious rather than dominant

### Cards

- Product cards should use the refined warm surface treatment from the homepage
- Hover state should include subtle lift plus a restrained cinematic gradient edge glow
- Card internals should remain information-dense but not dashboard-like

### Buttons

- Primary CTA: terracotta fill with strong contrast
- Secondary CTA: white or cream surface with soft border
- Motion: slight lift or color deepen, never aggressive scaling

### Chips And Status

- Chips should be compact, uppercase, and purposeful
- Live/ready states can use olive-green emphasis
- Alpha/experimental states can use terracotta or muted warm orange emphasis

### Media Panels

- Video and poster frames should feel premium and tactile
- Prefer soft white framing, warm overlays, and restrained shadow depth

## Motion

- Small translate on hover
- Soft shadow bloom or gradient edge glow on featured cards
- Opacity and border shifts are preferred over dramatic animation
- No continuous looping animation except minor status pulses where useful

## Content Constraints

- Preserve the real product copy and outbound links from source files
- Do not invent extra metrics, status labels, social links, or marketing claims during implementation
- Improve hierarchy and polish without altering the actual information model

## Page-Specific Notes

### Home

- Functions as a warm product index
- Product cards are the main focus
- Supporting panel reinforces availability and action clarity

### Guidian

- Should foreground the video/media experience while staying consistent with the homepage
- Keep the live product framing clear and direct

### Chunkworld

- Should emphasize experimentation and the two-path decision: play the alpha or open the concept deck
- Keep the supporting fact panel compact and easy to scan

## Constraints For Superdesign Iteration

Use only the colors, spacing behavior, surface language, and interaction style defined above. Preserve the existing product content and navigation structure. Improve hierarchy, warmth, and premium feel without changing the brand into a different aesthetic family.
