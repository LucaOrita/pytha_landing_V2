# Plasma Design System - Style Reference

> Extracted from `plasma-nextjs-template-1.1.0`. Use this as the single source of truth for visual consistency across the Pytha landing page.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router, RSC enabled)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **UI Components:** shadcn/ui (new-york style, lucide icons)
- **Animations:** Framer Motion (`motion/react`), `tw-animate-css`
- **Fonts:** Google Fonts via `next/font`
- **Utilities:** `class-variance-authority` (CVA), `clsx`, `tailwind-merge`
- **Charts:** Recharts (with shadcn chart wrapper)
- **Carousel:** Embla Carousel
- **TypeScript:** Strict

---

## Typography

### Font Families

| Token | Font | Usage |
|---|---|---|
| `--font-sans` / `--font-inter` | **Inter** (Google Fonts) | Primary font for all text |
| `--font-mono` / `--font-azeret-mono` | **Azeret Mono** (Google Fonts) | Code, pricing numbers, monospaced displays |
| `--font-serif` | System serif stack | Fallback only |

### Font Loading (Next.js)

```tsx
const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const azeretMono = Azeret_Mono({ variable: '--font-azeret-mono', subsets: ['latin'] });
```

### Font Aliases (CSS)

```css
--display-family: var(--font-inter);
--text-family: var(--font-inter);
--display-weight: 400;
--text-weight: 400;
```

Tailwind utilities: `font-display`, `font-text`, `font-azeret-mono`

### Font Sizes

| Class | Size | Usage |
|---|---|---|
| `text-xs` | 0.75rem | Badges, captions, meta text |
| `text-sm` | 0.875rem | Descriptions, card subtitles, button (sm) |
| `text-base` | 1rem | Body text |
| `text-lg` | 1.125rem | Button default, section descriptions, card titles |
| `text-xl` | 1.25rem | Sub-headings, pricing suffixes |
| `text-2xl` | 1.5rem | Footer headings, stat values |
| `text-3xl` | 1.875rem | Logo text (footer), pricing card titles |
| `text-4xxl` | **2.5rem** (custom) | Section headings (mobile) |
| `text-5xl` | 3rem | Section headings (tablet), hero (md) |
| `text-6xxl` | **4rem** (custom) | Page headings (desktop), hero (lg) |
| `text-6xl` | 3.75rem | Pricing numbers (large) |
| `text-7xl` | 4.5rem | Hero heading (lg breakpoint) |

### Heading Patterns

```
Hero H1:       text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight text-balance
Page H1:       text-5xl md:text-6xxl leading-none tracking-tight text-balance
Section H2:    text-4xxl md:text-5xl leading-tight tracking-tight
               OR text-4xxl md:text-5xl lg:text-6xl (for centered full-width headings)
Card H3:       text-lg font-bold lg:text-xl text-accent-foreground
Card H4:       text-lg leading-tight
```

### Body Text Patterns

```
Section body:  text-muted-foreground text-lg leading-snug md:text-lg lg:text-xl
Card body:     text-muted-foreground leading-snug lg:text-lg
Small body:    text-muted-foreground text-sm leading-snug
```

### Text Weight

- Body text: `font-weight: 400` (default via `--text-weight`)
- Display text: `font-weight: 400` (via `--display-weight`)
- Headings: No explicit weight (inherits 400) unless it's a card title (`font-bold`)
- Buttons: Default weight (no explicit `font-bold`)
- Active nav links: `font-semibold`

### Letter Spacing

- Body: `tracking-[-0.0025em]` (applied globally)
- Headings: `tracking-tight` (-0.025em)
- Some headings: `tracking-normal` (0em)

---

## Color System

All colors use **OKLCH** color space for perceptual uniformity.

### Light Mode (`:root`)

| Token | OKLCH Value | Usage |
|---|---|---|
| `--background` | `oklch(0.87 0.02 320)` | Page background |
| `--foreground` | `oklch(0.05 0.02 290)` | Primary text |
| `--card` | `oklch(0.95 0.01 320)` | Card backgrounds |
| `--card-foreground` | `oklch(0.05 0.02 290)` | Card text |
| `--primary` | `oklch(0.05 0.02 290)` | Primary buttons, strong elements |
| `--primary-foreground` | `oklch(1 0 0)` | Text on primary |
| `--secondary` | `oklch(0.62 0.18 280)` | Secondary buttons (purple) |
| `--secondary-foreground` | `oklch(0.05 0.02 290)` | Text on secondary |
| `--muted` | `oklch(0.15 0.03 50 / 0.08)` | Subtle backgrounds, muted buttons |
| `--muted-foreground` | `oklch(0.35 0.03 50)` | Secondary text, descriptions |
| `--accent` | `oklch(0.96 0.01 320)` | Hover states, accent backgrounds |
| `--accent-foreground` | `oklch(0.08 0.02 290)` | Text on accent |
| `--destructive` | `oklch(0.604 0.191 22.216)` | Error states |
| `--border` | `oklch(0.84 0.01 240)` | Borders |
| `--input` | `oklch(0.75 0.02 50)` | Input borders |
| `--ring` | `oklch(0.84 0.01 50)` | Focus rings |

### Dark Mode (`.dark`)

| Token | OKLCH Value | Usage |
|---|---|---|
| `--background` | `oklch(0.05 0.02 290)` | Page background (near-black purple) |
| `--foreground` | `oklch(1 0 0)` | White text |
| `--card` | `oklch(0.02 0 0)` | Card backgrounds (deep black) |
| `--card-foreground` | `oklch(1 0 0)` | Card text |
| `--primary` | `oklch(1 0 0)` | White primary |
| `--primary-foreground` | `oklch(0.08 0.02 290)` | Dark text on primary |
| `--secondary` | `oklch(0.52 0.16 280)` | Secondary (muted purple) |
| `--secondary-foreground` | `oklch(1 0 0)` | White on secondary |
| `--muted` | `oklch(0.93 0.02 240 / 0.08)` | Subtle backgrounds |
| `--muted-foreground` | `oklch(0.73 0.01 240)` | Gray text |
| `--accent` | `oklch(0.08 0.02 285)` | Dark accent surfaces |
| `--accent-foreground` | `oklch(0.94 0.01 240)` | Light text on accent |
| `--destructive` | `oklch(0.604 0.191 22.216)` | Same red as light |
| `--border` | `oklch(0.15 0.01 240)` | Subtle dark borders |
| `--input` | `oklch(0.32 0.01 240)` | Input borders |
| `--ring` | `oklch(0.2 0.01 240)` | Focus rings |

### Chart Colors (same in both modes)

| Token | OKLCH Value | Approx Appearance |
|---|---|---|
| `--chart-1` | `oklch(0.58 0.2 285)` | Purple-blue |
| `--chart-2` | `oklch(0.65 0.25 320)` | Magenta-pink |
| `--chart-3` | `oklch(0.72 0.15 25)` | Warm coral/salmon |
| `--chart-4` | `oklch(0.5 0.15 240)` | Deep blue |
| `--chart-5` | `oklch(0.5 0.15 240)` | Deep blue (same as chart-4) |

### Custom Fuchsia Scale (overrides Tailwind defaults)

```css
--fuchsia-50  through --fuchsia-950 (full scale in oklch)
```

### Gradient Pattern: `text-gradient`

```css
.text-gradient {
  @apply bg-gradient-to-r from-[var(--chart-1)] via-[var(--chart-2)] to-[var(--chart-3)] bg-clip-text text-transparent;
}
```

Usage: hero highlights, CTA text, animated underlines. Creates a **purple -> magenta -> coral** gradient.

### SVG Gradient Colors (decorative blobs)

```
#9D83E7  - Soft purple
#D445E7  - Hot magenta
#10CBF4  - Cyan
#9259ED  - Medium purple
#CF54EE  - Bright magenta
#FB8684  - Salmon/coral
#B956EE  - Vivid purple
#9672FF  - Periwinkle
#FB07FF  - Neon magenta
#FF6847  - Orange-red
#FF474A  - Red
#00C7F9  - Bright cyan
#E74548  - Red
```

### Logo Color

```
#9A5CD0 - Purple (SVG fill for the Plasma bolt icon)
```

---

## Spacing & Layout

### Container

```css
@utility container {
  margin-inline: auto;
  padding-inline: 1.5rem;           /* 24px horizontal padding */
  @media (width >= 1200px) {
    max-width: 1456px;              /* max container width */
  }
}
```

No max-width below 1200px (fluid). At `sm` breakpoint, `max-width: none`.

### Section Padding

```css
.section-padding {
  @apply py-15 md:py-20 lg:py-24;
}
/* py-15 = 3.75rem, py-20 = 5rem, py-24 = 6rem */
```

### Header Height

```css
--header-height: calc(var(--spacing) * 17);  /* ~4.25rem / 68px */
```

### Common Spacing Patterns

| Pattern | Value | Where Used |
|---|---|---|
| `gap-4.5` | 1.125rem | Button groups |
| `gap-5` | 1.25rem | Content sections |
| `gap-6` | 1.5rem | Cards, grid gaps |
| `gap-8` | 2rem | Grid sections |
| `gap-10` | 2.5rem | Hero flex gap |
| `gap-15` | 3.75rem | Large section gaps |
| `gap-18` | 4.5rem | Two-column feature layouts |
| `mt-10 md:mt-20 lg:mt-30` | Responsive margin-top | After hero image |

---

## Border Radius

| Token | Value |
|---|---|
| `--radius` | `0.625rem` (10px) |
| `--radius-sm` | `calc(var(--radius) - 4px)` = 6px |
| `--radius-md` | `calc(var(--radius) - 2px)` = 8px |
| `--radius-lg` | `var(--radius)` = 10px |
| `--radius-xl` | `calc(var(--radius) + 4px)` = 14px |

Common usage:
- Cards: `rounded-md` (8px)
- Buttons default: `rounded-md`
- Buttons small: `rounded-sm` (6px)
- Pills/badges: `rounded-full`
- Large containers: `rounded-xl` (14px)

---

## Shadows

- Cards: `shadow-sm` (default)
- Buttons: `shadow-xs`
- Hero image: `shadow-2xl`
- Workflow cards: `shadow-xl`
- Focus rings: `ring-[3px] ring-ring/50`

---

## Background Effects

### Noise Overlay (global)

```tsx
<div
  className="absolute inset-0 z-[-1] size-full opacity-70 mix-blend-overlay dark:md:opacity-100"
  style={{ background: `url(/images/noise.webp) lightgray 0% 0% / 83.69px 83.69px repeat` }}
/>
```

### Background Blur (global)

```tsx
<div className="bg-background/10 absolute inset-0 z-[-2] backdrop-blur-[85px] will-change-transform md:backdrop-blur-[170px]" />
```

### Card Gradient Backgrounds (dark mode pattern)

```
dark:from-transparent dark:via-muted/10 dark:to-muted/30 bg-gradient-to-t
dark:from-transparent dark:via-muted/20 dark:to-muted/50 bg-gradient-to-br
```

Light mode cards use:
```
from-card via-card to-background bg-gradient-to-br
```

### Feature Icon Box

```tsx
<div className="from-muted/30 via-muted/10 to-card flex aspect-square size-10 items-center justify-center rounded-md border bg-gradient-to-r p-2">
  <Icon className="h-4.5 w-4.5" />
</div>
```

---

## Component Patterns

### Button Variants (CVA)

| Variant | Classes |
|---|---|
| `default` | `bg-primary text-primary-foreground shadow-xs hover:bg-primary/90` |
| `destructive` | `bg-destructive text-white shadow-xs hover:bg-destructive/90` |
| `outline` | `border border-accent-foreground bg-transparent shadow-xs hover:bg-accent` |
| `secondary` | `bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80` |
| `ghost` | `hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50` |
| `link` | `text-primary underline-offset-4 hover:underline` |
| `muted` | `bg-muted text-accent-foreground shadow-xs hover:bg-muted/80` |

### Button Sizes

| Size | Classes |
|---|---|
| `default` | `h-14.5 px-4 py-2 text-lg` |
| `sm` | `h-8 rounded-sm text-sm gap-1.5 px-3` |
| `lg` | `h-16 rounded-md px-6` |
| `icon` | `size-10` |

### Badge Variants

| Variant | Style |
|---|---|
| `default` | Filled primary |
| `secondary` | Filled secondary |
| `destructive` | Red filled |
| `outline` | Border only |
| `muted` | Muted background |
| `info` | Amber tinted (no border) |

### Card

```tsx
<Card> // bg-card text-card-foreground rounded-md border py-6 shadow-sm
  <CardHeader>  // px-6, grid layout
  <CardTitle>   // leading-none font-semibold
  <CardDescription> // text-muted-foreground text-sm
  <CardContent> // px-6
  <CardFooter>  // flex items-center px-6
</Card>
```

### "Pro" Card with Gradient Border

```tsx
className={cn(
  'relative overflow-hidden',
  'before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-tr before:from-[var(--chart-1)]/10 before:via-[var(--chart-2)] before:to-[var(--chart-3)] before:mask-b-from-40% before:mask-b-to-80%',
  'after:bg-card after:absolute after:inset-[1px] after:rounded-[calc(var(--radius)-1px)]'
)}
```

### Input

```
h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base md:text-sm shadow-xs
Focus: border-ring ring-ring/50 ring-[3px]
Dark: dark:bg-input/30
```

### Pill/Tag (e.g., "What's New?")

```tsx
<div className="flex items-center rounded-full border p-1 text-xs">
  <span className="bg-muted rounded-full px-3 py-1">Label</span>
  <span className="px-3">Description</span>
</div>
```

---

## Animations & Transitions

### Framer Motion Defaults

```tsx
// Standard ease curve
ease: [0.22, 1, 0.36, 1]  // custom ease-out

// Fade + scale in
initial={{ opacity: 0, scale: 0.97 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}

// Blur in
initial={{ filter: 'blur(8px)' }}
animate={{ filter: 'blur(0px)' }}
transition={{ duration: 0.4, delay: 0.1 }}

// Slide in
initial={{ opacity: 0, x: -8 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.3 }}
```

### CSS Keyframes

```css
/* Marquee (horizontal) */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - var(--gap))); }
}

/* Marquee (vertical) */
@keyframes marquee-vertical {
  from { transform: translateY(0); }
  to { transform: translateY(calc(-100% - var(--gap))); }
}

/* Theme toggle circular mask reveal */
@keyframes theme-mask {
  0%   { clip-path: circle(0% at var(--x, 50%) var(--y, 50%)); }
  100% { clip-path: circle(150% at var(--x, 50%) var(--y, 50%)); }
}
```

### Transition Patterns

```
transition-all                        // General
transition-colors duration-200        // Hover states
transition-opacity hover:opacity-80   // Links/social icons
transition-all hover:scale-105        // Mobile CTA buttons
transition duration-500 ease-in-out   // Hamburger menu lines
transition-all duration-500 ease-out  // Mobile menu slide
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  .motion-safe-only { display: none !important; }
}
```

---

## Responsive Breakpoints

Uses Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Custom container breakpoint: `1200px` (for max-width: 1456px)

### Common Responsive Patterns

```
Mobile-first layout:  flex-col lg:flex-row
Hidden on mobile:     hidden lg:block  OR  hidden md:flex
Grid:                 grid-cols-1 lg:grid-cols-2  OR  grid-cols-1 lg:grid-cols-3
Text scaling:         text-5xl md:text-6xl lg:text-7xl
Spacing scaling:      py-15 md:py-20 lg:py-24
```

---

## Image Treatment

### Hero Image Ring

```tsx
className="ring-foreground/5 rounded-xs shadow-2xl ring-6 invert md:rounded-sm md:ring-16 dark:invert-0"
```

### Feature Images (dark-first design)

```tsx
className="object-contain invert dark:invert-0"
```

Images are designed for dark mode and use `invert` filter for light mode.

---

## Navigation Patterns

### Desktop Navbar

- Full-width header with `border-b`
- Fixed height: `--header-height` (68px)
- Logo left, nav links centered, actions right
- Active link: `bg-accent font-semibold`
- Nav trigger style: `bg-transparent`, becomes `bg-accent` when active

### Mobile Navbar

- Full-screen overlay with backdrop blur: `bg-background/95 backdrop-blur-md`
- Slide from right: `translate-x-0 / translate-x-full`
- Accordion for nested nav items
- Fixed CTA buttons at bottom with border-top

### Hamburger Icon

- 3 horizontal lines with animated transforms to X
- `h-0.25` thickness, `w-4` width
- Transitions: `duration-500 ease-in-out`

---

## Section Composition (page.tsx order)

```
1. Hero              - Full-width, CTA buttons, hero image, gradient SVG blob
2. Features          - Carousel of feature cards with images
3. Features2         - Stats grid (charts, number tickers) + feature carousel
4. AIAutomation      - Two-column with animated beams connecting workflow cards
5. FeaturesTabsSection - Tabs with animated image switching
6. Testimonials      - Marquee of review cards
7. Footer            - Trust logos, CTA, links, socials, gradient SVG blob
```

---

## Key Utility Classes

```css
.section-padding    -> py-15 md:py-20 lg:py-24
.text-gradient      -> purple-to-coral gradient text
.container          -> centered, 24px padding, max 1456px
font-weight-display -> var(--display-weight)
font-weight-text    -> var(--text-weight)
```

---

## Global Styles Applied to `<body>`

```css
body {
  @apply bg-background text-foreground font-text font-weight-text tracking-[-0.0025em];
}
* {
  @apply border-border outline-ring/50;
}
```

Body element classes:
```tsx
className="relative flex min-h-screen flex-col antialiased [--header-height:calc(var(--spacing)*17)]"
```

---

## Theme Defaults

- **Default theme:** `dark`
- **Theme attribute:** `class` (via `next-themes`)
- **Transition on change:** disabled (`disableTransitionOnChange`)
- **View transition:** Circular clip-path mask animation for manual theme toggle

---

## shadcn/ui Configuration

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---

## Status Indicator Colors

| Status | Style |
|---|---|
| Positive | `bg-green-600/10 text-green-400` or `bg-green-600/15 text-green-500` |
| Negative | `bg-red-600/15 text-red-400` or `bg-red-800/10 text-red-800` |
| Info/Warning | `border-amber-500/20 bg-amber-500/10 text-amber-400` |

Typically rendered as small rounded pills: `rounded-full px-1.5 py-0.5 text-xs font-medium`

---

## Feature Check/Uncheck Indicators (Pricing)

```tsx
// Checked: purple circle with check icon
<div className="bg-secondary flex size-5.5 items-center justify-center rounded-full">
  <Check className="size-3.5" />
</div>

// Unchecked: muted circle with minus icon
<div className="bg-muted flex size-5.5 items-center justify-center rounded-full">
  <Minus className="size-3.5" />
</div>
```
