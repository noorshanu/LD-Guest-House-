# LD Guest House — Build Plan

Design reference: repo root `design.png`. Logo: `public/ldlogo.png`.

## Folder structure

```
lol/
├── app/
│   ├── layout.tsx          # fonts, SiteShell wrapper, metadata
│   ├── page.tsx            # home sections (composed in order)
│   └── globals.css         # theme tokens + base styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # nav + mobile menu (client)
│   │   ├── Footer.tsx
│   │   └── SiteShell.tsx   # Header + main + Footer
│   ├── sections/           # one file per page section (later steps)
│   │   └── Hero.tsx        # Step 2
│   └── ui/                 # shared buttons, icons wrappers (as needed)
├── lib/
│   └── site.ts             # nav links, contact, social URLs
└── public/
    └── ldlogo.png
```

## Design tokens

| Token | Usage |
|-------|--------|
| Gold `#B8860B` / `#C9A227` | headings accent, primary buttons |
| Dark `#1a1410` | footer, overlays |
| WhatsApp green `#25D366` | WhatsApp CTAs |
| Cream `#FAF8F5` | page background |
| Serif | Playfair Display — headings |
| Sans | Lato — body, nav |

Images: use [placehold.co](https://placehold.co) or neutral gray blocks until real photos are ready.

## Build phases

### Step 1 — Layout shell (current)

- [x] `lib/site.ts` — links and contact constants
- [x] `Header` — desktop links, phone, WhatsApp, hamburger + slide/focus trap on mobile
- [x] `Footer` — 4-column grid, collapses on mobile
- [x] `SiteShell` wired in `layout.tsx`

### Step 2 — Hero

- [x] Full-width hero **slider** (`home1.jpg`–`home3.jpg`) + dark overlay
- [x] Eyebrow, H1, subcopy, 5 feature chips
- [x] Call Now + WhatsApp buttons
- [x] “Jai Shri Ram” detail (bottom-right)
- [x] Autoplay, dots, prev/next on hover (respects reduced motion)

### Step 3 — About + stats

- Two-column copy + placeholder image
- Stat row (rooms, capacity, etc.)

### Step 4 — Rooms carousel/cards

- Placeholder room cards, pricing line, CTAs

### Step 5 — Gallery grid

- Placeholder grid, lightbox optional later

### Step 6 — Amenities + Location + Contact

- Icon grid, map placeholder, contact form (static UI first)

### Step 7 — Polish

- Smooth scroll for anchor links, metadata/SEO, real images swap-in

## Anchor IDs (for nav)

`#home`, `#about`, `#rooms`, `#gallery`, `#amenities`, `#location`, `#contact`
