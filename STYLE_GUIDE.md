# Style Guide

> Authoritative reference for all visual styling in this project. Use this document to maintain consistency when implementing new features or components.

---

## 1. Tech Stack & Architecture

| Layer              | Technology                                    |
| ------------------ | --------------------------------------------- |
| Framework          | Next.js 15+ (App Router, React Server Components) |
| CSS Framework      | Tailwind CSS v4.0.2 with `@tailwindcss/postcss` |
| Plugins            | `tailwindcss-animate`, `@tailwindcss/typography` |
| Component Library  | shadcn/ui (new-york style) + Radix UI primitives |
| Variant System     | `class-variance-authority` (CVA)              |
| Class Merging      | `clsx` + `tailwind-merge` via `cn()` helper   |
| Animations         | `motion` (Framer Motion successor)            |
| Icons              | `lucide-react`                                |
| Theme Management   | `next-themes` (class strategy)                |
| Color Space        | `oklch()` for perceptual consistency           |

### `cn()` Utility

Located at `src/lib/utils.ts`. Always use `cn()` to compose Tailwind classes — it deduplicates and resolves conflicts:

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 2. Font System

| Property       | Value                                                                  |
| -------------- | ---------------------------------------------------------------------- |
| Font Family    | **Satoshi** (local `.otf` files)                                        |
| Weights        | 400 (Regular), 500 (Medium), 700 (Bold)                               |
| CSS Variable   | `--font-satoshi`                                                       |
| Loading        | `next/font/local` with `display: swap`                                 |
| Body Class     | `${satoshi.variable} antialiased`                                      |
| Fallback Stack | `var(--font-satoshi), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'` |

Font files: `public/fonts/satoshi/Satoshi-Regular.otf`, `Satoshi-Medium.otf`, `Satoshi-Bold.otf`

---

## 3. Typography Scale

All typography is available as **both** standard CSS classes and **Tailwind `@utility` classes** (responsive-ready with breakpoint prefixes like `lg:text-heading-1`).

### Headings

| Class / Utility        | Size  | Line Height | Weight | Letter Spacing |
| ---------------------- | ----- | ----------- | ------ | -------------- |
| `heading-1` / `text-heading-1` | 48px  | 1.1         | 700    | -0.01em        |
| `heading-2` / `text-heading-2` | 40px  | 1.15        | 700    | -0.01em        |
| `heading-3` / `text-heading-3` | 32px  | 1.2         | 700    | --             |
| `heading-4` / `text-heading-4` | 24px  | 1.25        | 700    | --             |
| `heading-5` / `text-heading-5` | 20px  | 1.35        | 700    | --             |
| `heading-6` / `text-heading-6` | 18px  | 1.4         | 700    | --             |

### Body Text

Each body size has three weight variants: Regular (400), Medium (500), Bold (700).

| Size Group | Base Class / Utility | Font Size | Line Height |
| ---------- | -------------------- | --------- | ----------- |
| Large      | `body-lg` / `text-body-lg`             | 18px | 1.6  |
|            | `body-lg-medium` / `text-body-lg-medium` | 18px | 1.6  |
|            | `body-lg-bold` / `text-body-lg-bold`     | 18px | 1.6  |
| Medium     | `body-md` / `text-body-md`             | 16px | 1.65 |
|            | `body-md-medium` / `text-body-md-medium` | 16px | 1.65 |
|            | `body-md-bold` / `text-body-md-bold`     | 16px | 1.65 |
| Small      | `body-sm` / `text-body-sm`             | 14px | 1.7  |
|            | `body-sm-medium` / `text-body-sm-medium` | 14px | 1.7  |
|            | `body-sm-bold` / `text-body-sm-bold`     | 14px | 1.7  |
| X-Small    | `body-xs` / `text-body-xs`             | 12px | 1.7  |
|            | `body-xs-medium` / `text-body-xs-medium` | 12px | 1.7  |
|            | `body-xs-bold` / `text-body-xs-bold`     | 12px | 1.7  |

### Common Responsive Overrides

Section titles often upscale on desktop:
- `text-heading-1 lg:text-[52px]` — section headings
- `text-heading-1 lg:text-[68px]` — hero headline
- `text-body-md sm:text-body-lg` — section descriptions
- `text-[40px] leading-none font-bold tracking-tight` — price display

---

## 4. Color System

All colors use **oklch()** for perceptual uniformity. Each palette has 6 stops: `0`, `25`, `50`, `100`, `200`, `300`.

### Primary (Teal/Emerald Green)

| Token          | Light Mode oklch                | Hex Approx  | Tailwind Class     |
| -------------- | ------------------------------- | ----------- | ------------------ |
| `--primary-0`  | `oklch(0.96 0.037 162.4)`       | `#E5FCF5`   | `bg-primary-0`     |
| `--primary-25` | `oklch(0.92 0.067 158.7)`       | `#CCFAEB`   | `bg-primary-25`    |
| `--primary-50` | `oklch(0.84 0.124 158.2)`       | `#99F5D6`   | `bg-primary-50`    |
| `--primary-100`| `oklch(0.81 0.182 160)`         | `#00E599`   | `bg-primary-100`   |
| `--primary-200`| `oklch(0.6 0.164 159.8)`        | `#00B77A`   | `bg-primary-200`   |
| `--primary-300`| `oklch(0.35 0.098 159.8)`       | `#005C3D`   | `bg-primary-300`   |

### Secondary (Purple)

| Token             | Light Mode oklch              | Hex Approx  | Tailwind Class       |
| ----------------- | ----------------------------- | ----------- | -------------------- |
| `--secondary-0`   | `oklch(97.65% 0.014 285.6)`  | `#F6F5FF`   | `bg-secondary-0`    |
| `--secondary-25`  | `oklch(92.94% 0.039 285.6)`  | `#E3E0FF`   | `bg-secondary-25`   |
| `--secondary-50`  | `oklch(85.88% 0.078 285.6)`  | `#C7C2FF`   | `bg-secondary-50`   |
| `--secondary-100` | `oklch(77.65% 0.115 285.6)`  | `#A199FF`   | `bg-secondary-100`  |
| `--secondary-200` | `oklch(52.16% 0.092 285.6)`  | `#645CC6`   | `bg-secondary-200`  |
| `--secondary-300` | `oklch(35.69% 0.102 285.6)`  | `#372E9B`   | `bg-secondary-300`  |

### Gray (Neutral)

| Token         | Light Mode oklch           | Hex Approx  | Tailwind Class   |
| ------------- | -------------------------- | ----------- | ---------------- |
| `--gray-0`    | `oklch(100% 0 0)`          | `#FFFFFF`   | `bg-gray-0`      |
| `--gray-25`   | `oklch(98.04% 0 0)`        | `#FAFAFA`   | `bg-gray-25`     |
| `--gray-50`   | `oklch(96.08% 0 0)`        | `#F5F5F5`   | `bg-gray-50`     |
| `--gray-100`  | `oklch(89.8% 0 0)`         | `#E5E5E5`   | `bg-gray-100`    |
| `--gray-200`  | `oklch(83.14% 0 0)`        | `#D4D4D4`   | `bg-gray-200`    |
| `--gray-300`  | `oklch(63.92% 0 0)`        | `#A3A3A3`   | `bg-gray-300`    |
| `--gray-400`  | `oklch(45.1% 0 0)`         | `#737373`   | `bg-gray-400`    |
| `--gray-500`  | `oklch(32.16% 0 0)`        | `#525252`   | `bg-gray-500`    |
| `--gray-600`  | `oklch(25.1% 0 0)`         | `#404040`   | `bg-gray-600`    |
| `--gray-700`  | `oklch(14.9% 0 0)`         | `#262626`   | `bg-gray-700`    |
| `--gray-800`  | `oklch(9.02% 0 0)`         | `#171717`   | `bg-gray-800`    |
| `--gray-900`  | `oklch(3.92% 0 0)`         | `#0A0A0A`   | `bg-gray-900`    |

### Warning (Orange/Amber)

| Token           | Light Mode oklch             | Hex Approx  | Tailwind Class     |
| --------------- | ---------------------------- | ----------- | ------------------ |
| `--warning-0`   | `oklch(96.47% 0.024 85.9)`  | `#FFF6E0`   | `bg-warning-0`     |
| `--warning-25`  | `oklch(91.37% 0.054 85.9)`  | `#F9ECCB`   | `bg-warning-25`    |
| `--warning-50`  | `oklch(80.39% 0.124 85.9)`  | `#FBD982`   | `bg-warning-50`    |
| `--warning-100` | `oklch(75.69% 0.157 75.2)`  | `#FFBD4C`   | `bg-warning-100`   |
| `--warning-200` | `oklch(42.16% 0.078 65.4)`  | `#956321`   | `bg-warning-200`   |
| `--warning-300` | `oklch(28.63% 0.058 62.1)`  | `#5B3D1E`   | `bg-warning-300`   |

### Error (Red)

| Token         | Light Mode oklch             | Hex Approx  | Tailwind Class   |
| ------------- | ---------------------------- | ----------- | ---------------- |
| `--error-0`   | `oklch(95.29% 0.021 6.8)`   | `#FEEFF2`   | `bg-error-0`     |
| `--error-25`  | `oklch(88.63% 0.054 6.8)`   | `#FADAE1`   | `bg-error-25`    |
| `--error-50`  | `oklch(68.24% 0.137 6.8)`   | `#ED8296`   | `bg-error-50`    |
| `--error-100` | `oklch(52.55% 0.197 6.8)`   | `#DF1C41`   | `bg-error-100`   |
| `--error-200` | `oklch(34.51% 0.124 6.8)`   | `#95122B`   | `bg-error-200`   |
| `--error-300` | `oklch(26.27% 0.095 6.8)`   | `#710E21`   | `bg-error-300`   |

### Success (Green)

| Token           | Light Mode oklch              | Hex Approx  | Tailwind Class     |
| --------------- | ----------------------------- | ----------- | ------------------ |
| `--success-0`   | `oklch(96.86% 0.021 172.4)`  | `#EFFEFA`   | `bg-success-0`     |
| `--success-25`  | `oklch(89.02% 0.034 172.4)`  | `#DDF2EE`   | `bg-success-25`    |
| `--success-50`  | `oklch(78.43% 0.078 172.4)`  | `#9DE0D3`   | `bg-success-50`    |
| `--success-100` | `oklch(65.49% 0.102 172.4)`  | `#40C4AA`   | `bg-success-100`   |
| `--success-200` | `oklch(42.75% 0.065 172.4)`  | `#287F6E`   | `bg-success-200`   |
| `--success-300` | `oklch(26.67% 0.041 172.4)`  | `#174E43`   | `bg-success-300`   |

### Aqua (Cyan)

| Token        | Light Mode oklch              | Hex Approx  | Tailwind Class  |
| ------------ | ----------------------------- | ----------- | --------------- |
| `--aqua-0`   | `oklch(96.08% 0.018 195.8)`  | `#EEFAFC`   | `bg-aqua-0`     |
| `--aqua-25`  | `oklch(88.24% 0.054 195.8)`  | `#D1F0F9`   | `bg-aqua-25`    |
| `--aqua-50`  | `oklch(82.35% 0.078 195.8)`  | `#BAE9F3`   | `bg-aqua-50`    |
| `--aqua-100` | `oklch(69.02% 0.124 195.8)`  | `#52C9E0`   | `bg-aqua-100`   |
| `--aqua-200` | `oklch(55.29% 0.078 195.8)`  | `#42A2B5`   | `bg-aqua-200`   |
| `--aqua-300` | `oklch(29.41% 0.041 195.8)`  | `#22555F`   | `bg-aqua-300`   |

### Emerald (Supplemental)

| Token            | Light Mode oklch                  | Tailwind Class     |
| ---------------- | --------------------------------- | ------------------ |
| `--emerald-50`   | `oklch(97.24% 0.026 175.59)`     | `bg-emerald-50`    |
| `--emerald-100`  | `oklch(94.89% 0.051 173.35)`     | `bg-emerald-100`   |
| `--emerald-200`  | `oklch(90.38% 0.099 170.58)`     | `bg-emerald-200`   |
| `--emerald-300`  | `oklch(81.4 45.75% 160.372)`     | `bg-emerald-300`   |
| `--emerald-400`  | `oklch(55.67% 0.123 161.49)`     | `bg-emerald-400`   |
| `--emerald-500`  | `oklch(34.54% 0.074 163.15)`     | `bg-emerald-500`   |

---

## 5. Semantic Color Tokens

These map design tokens to semantic roles. Use these class names for all UI elements.

### Light Mode (`:root`)

| Semantic Token          | Resolves To        | Tailwind Class             | Usage                        |
| ----------------------- | ------------------ | -------------------------- | ---------------------------- |
| `--background`          | `--gray-0` (#FFF)  | `bg-background`            | Page background              |
| `--foreground`          | `--gray-900`       | `text-foreground`          | Primary text                 |
| `--card`                | `--gray-0`         | `bg-card`                  | Card surfaces                |
| `--card-foreground`     | `--gray-900`       | `text-card-foreground`     | Card text                    |
| `--popover`             | `--gray-0`         | `bg-popover`               | Popover/dropdown surfaces    |
| `--popover-foreground`  | `--gray-900`       | `text-popover-foreground`  | Popover text                 |
| `--primary`             | `--primary-100`    | `bg-primary`               | Primary actions, buttons     |
| `--primary-foreground`  | `--gray-0`         | `text-primary-foreground`  | Text on primary bg           |
| `--secondary`           | `--secondary-100`  | `bg-secondary`             | Secondary accents            |
| `--secondary-foreground`| `--gray-900`       | `text-secondary-foreground`| Text on secondary bg         |
| `--muted`               | `--gray-50`        | `bg-muted`                 | Muted/subtle backgrounds     |
| `--muted-foreground`    | `--gray-400`       | `text-muted-foreground`    | Subdued text, placeholders   |
| `--accent`              | `--primary-25`     | `bg-accent`                | Hover/focus highlights       |
| `--accent-foreground`   | `--gray-900`       | `text-accent-foreground`   | Text on accent bg            |
| `--destructive`         | `--error-100`      | `bg-destructive`           | Destructive/error actions    |
| `--destructive-foreground`| `--gray-0`       | `text-destructive-foreground`| Text on destructive bg     |
| `--border`              | `--gray-50`        | `border-border`            | Default border color         |
| `--input`               | `--gray-200`       | `border-input`             | Form input borders           |
| `--ring`                | `--emerald-400`    | `ring-ring`                | Focus ring color             |

### Chart Colors

| Token       | Resolves To        | Tailwind Class   |
| ----------- | ------------------ | ---------------- |
| `--chart-1` | `--primary-100`    | `bg-chart-1`     |
| `--chart-2` | `--secondary-200`  | `bg-chart-2`     |
| `--chart-3` | `--aqua-100`       | `bg-chart-3`     |
| `--chart-4` | `--warning-100`    | `bg-chart-4`     |
| `--chart-5` | `--success-100`    | `bg-chart-5`     |

---

## 6. Dark Mode

**Strategy:** Class-based (`.dark` on `<html>`) via `next-themes`

**Configuration** (in `layout.tsx`):
```
attribute="class"
defaultTheme="light"
enableSystem={false}
storageKey="zippay-theme"
disableTransitionOnChange
```

**Custom variant:** `@custom-variant dark (&:is(.dark *));`

### Key Dark Mode Behaviors

1. **Gray scale inverts** — `gray-0` becomes dark (`oklch(8% 0 0)`), `gray-900` becomes light (`oklch(100% 0 0)`)
2. **Color palettes adjust** — all 7 color palettes have independent dark mode values with adjusted lightness/chroma
3. **Border** changes to `oklch(100% 0 0 / 0.12)` (translucent white)
4. **Input** border changes to `--gray-50` (dark variant)
5. **Section backgrounds** use `dark:bg-gray-200` for alternating section contrast (e.g., pricing, features hero)

### Dark Mode Gray Scale

| Token       | Dark Mode Value       |
| ----------- | --------------------- |
| `--gray-0`  | `oklch(8% 0 0)`      |
| `--gray-25` | `oklch(12% 0 0)`     |
| `--gray-50` | `oklch(16% 0 0)`     |
| `--gray-100`| `oklch(25% 0 0)`     |
| `--gray-200`| `oklch(33% 0 0)`     |
| `--gray-300`| `oklch(45% 0 0)`     |
| `--gray-400`| `oklch(64% 0 0)`     |
| `--gray-500`| `oklch(83% 0 0)`     |
| `--gray-600`| `oklch(90% 0 0)`     |
| `--gray-700`| `oklch(96% 0 0)`     |
| `--gray-800`| `oklch(98% 0 0)`     |
| `--gray-900`| `oklch(100% 0 0)`    |

### Dark Mode Primary

| Token          | Dark Mode Value              |
| -------------- | ---------------------------- |
| `--primary-0`  | `oklch(18% 0.02 160)`       |
| `--primary-25` | `oklch(25% 0.04 160)`       |
| `--primary-50` | `oklch(40% 0.07 160)`       |
| `--primary-100`| `oklch(60% 0.11 160)`       |
| `--primary-200`| `oklch(55% 0.1 160)`        |
| `--primary-300`| `oklch(75% 0.13 160)`       |

### Dark Mode Secondary

| Token             | Dark Mode Value              |
| ----------------- | ---------------------------- |
| `--secondary-0`   | `oklch(24% 0.022 285.6)`    |
| `--secondary-25`  | `oklch(30% 0.04 285.6)`     |
| `--secondary-50`  | `oklch(40% 0.065 285.6)`    |
| `--secondary-100` | `oklch(74% 0.13 285.6)`     |
| `--secondary-200` | `oklch(68% 0.115 285.6)`    |
| `--secondary-300` | `oklch(60% 0.1 285.6)`      |

### Dark Mode Warning

| Token           | Dark Mode Value              |
| --------------- | ---------------------------- |
| `--warning-0`   | `oklch(14% 0.018 85.9)`     |
| `--warning-25`  | `oklch(20% 0.038 85.9)`     |
| `--warning-50`  | `oklch(30% 0.08 85.9)`      |
| `--warning-100` | `oklch(64% 0.12 75.2)`      |
| `--warning-200` | `oklch(46% 0.085 65.4)`     |
| `--warning-300` | `oklch(34% 0.07 62.1)`      |

### Dark Mode Error

| Token         | Dark Mode Value              |
| ------------- | ---------------------------- |
| `--error-0`   | `oklch(14% 0.016 6.8)`      |
| `--error-25`  | `oklch(22% 0.04 6.8)`       |
| `--error-50`  | `oklch(34% 0.09 6.8)`       |
| `--error-100` | `oklch(58% 0.16 6.8)`       |
| `--error-200` | `oklch(42% 0.11 6.8)`       |
| `--error-300` | `oklch(30% 0.085 6.8)`      |

### Dark Mode Success

| Token           | Dark Mode Value              |
| --------------- | ---------------------------- |
| `--success-0`   | `oklch(14% 0.016 172.4)`    |
| `--success-25`  | `oklch(22% 0.026 172.4)`    |
| `--success-50`  | `oklch(34% 0.06 172.4)`     |
| `--success-100` | `oklch(56% 0.095 172.4)`    |
| `--success-200` | `oklch(42% 0.06 172.4)`     |
| `--success-300` | `oklch(30% 0.04 172.4)`     |

### Dark Mode Aqua

| Token        | Dark Mode Value              |
| ------------ | ---------------------------- |
| `--aqua-0`   | `oklch(14% 0.012 195.8)`    |
| `--aqua-25`  | `oklch(22% 0.032 195.8)`    |
| `--aqua-50`  | `oklch(30% 0.05 195.8)`     |
| `--aqua-100` | `oklch(58% 0.1 195.8)`      |
| `--aqua-200` | `oklch(46% 0.07 195.8)`     |
| `--aqua-300` | `oklch(32% 0.045 195.8)`    |

### Dark Mode Emerald

| Token            | Dark Mode Value              |
| ---------------- | ---------------------------- |
| `--emerald-50`   | `oklch(22% 0.02 175.6)`     |
| `--emerald-100`  | `oklch(28% 0.036 173.3)`    |
| `--emerald-200`  | `oklch(40% 0.07 170.6)`     |
| `--emerald-300`  | `oklch(50% 0.095 161)`      |
| `--emerald-400`  | `oklch(62% 0.105 161.5)`    |
| `--emerald-500`  | `oklch(70% 0.08 163.1)`     |

---

## 7. Spacing & Layout

### Container

```css
@utility container {
  margin-inline: auto;
  max-width: 100%;
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
}
```

Usage: `className="container"` — centers content, max-width 1200px.

### Section Padding Convention

| Context              | Classes                                    |
| -------------------- | ------------------------------------------ |
| Horizontal (all)     | `px-6`                                     |
| Vertical (standard)  | `py-10 lg:py-24`                           |
| Vertical (hero)      | `pt-10 lg:py-24`                           |
| Vertical (CTA)       | `py-10 lg:py-26`                           |
| Vertical (features)  | `py-10 lg:pt-30 lg:pb-24`                  |
| Inner container      | `px-6 py-12 lg:py-20` (footer)             |

### Content Width Constraints

| Pattern                         | Usage                       |
| ------------------------------- | --------------------------- |
| `max-w-3xl` / `max-w-2xl`      | Section descriptions        |
| `max-w-[616px]`                 | Section titles              |
| `max-w-[637px]`                 | CTA titles                  |
| `max-w-[516px]`                 | Pricing description         |
| `max-w-xl`                      | Hero subtitle               |
| `max-w-[336px]`                 | Feature quad buttons        |
| `max-w-[480px]` / `max-w-[520px]` | Feature images           |

### Grid Patterns

| Pattern                                                                        | Usage                    |
| ------------------------------------------------------------------------------ | ------------------------ |
| `lg:grid-cols-2`                                                                | Big feature cards, testimonials |
| `sm:grid-cols-2 lg:grid-cols-3`                                                | Small feature cards      |
| `lg:grid-cols-3`                                                                | Pricing cards, footer nav |
| `lg:grid-cols-[1fr_auto_1fr]`                                                  | Feature quad layout      |
| `lg:[grid-template-columns:minmax(0,1fr)_clamp(420px,40vw,480px)]`             | Hero split layout        |
| `lg:grid-cols-[max-content_1fr]`                                               | Footer brand + nav       |
| `grid-cols-[repeat(auto-fit,minmax(160px,1fr))]`                               | Footer nav columns       |

### Gap Scale

| Gap         | Usage                              |
| ----------- | ---------------------------------- |
| `gap-2`     | Icon groups, tight spacing         |
| `gap-3`     | Button groups (mobile), tags       |
| `gap-4`     | Button groups (desktop), features  |
| `gap-6`     | Card grids, feature lists          |
| `gap-8`     | Section content blocks, nav links  |
| `gap-16`    | Hero grid, feature quad, footer    |
| `gap-32`    | Footer desktop brand-to-nav        |

### Custom Spacing Token

`--spacing-9xl: 100rem` — Available for extreme spacing needs.

---

## 8. Border Radius

| Value           | Tailwind Class      | Usage                                    |
| --------------- | ------------------- | ---------------------------------------- |
| `rounded-xs`    | `rounded-xs`        | Checkbox                                 |
| `rounded`       | `rounded`           | Input                                    |
| `rounded-sm`    | `rounded-sm`        | Button base, select items                |
| `rounded-md`    | `rounded-md`        | Textarea, select trigger/content, tabs trigger |
| `rounded-lg`    | `rounded-lg`        | Button lg, tabs list                     |
| `rounded-xl`    | `rounded-xl`        | Card base, dropdown content, feature quad inner, pricing feature box |
| `rounded-2xl`   | `rounded-2xl`       | Dropdown menu, pricing cards, images     |
| `rounded-full`  | `rounded-full`      | Switch, carousel buttons, avatars, toggle button, theme toggle |
| `rounded-[10px]`| Custom              | Tags, tagline pills                      |
| `rounded-[12px]`| Custom              | Button `sm`, inner image wrappers        |
| `rounded-[16px]`| Custom              | Button default, feature/content cards    |
| `rounded-[24px]`| Custom              | Testimonial cards                        |
| `rounded-[28px]`| Custom              | Feature quad outer container             |

---

## 9. Shadows

### Standard Shadows (Tailwind built-in)

| Class        | Usage                                     |
| ------------ | ----------------------------------------- |
| `shadow-xs`  | Inputs, textarea, switch, checkbox        |
| `shadow-sm`  | Cards, active tab triggers                |
| `shadow-md`  | Select dropdown content                   |
| `shadow-lg`  | Switch thumb                              |

### Custom Shadows

| Value                                              | Tailwind Class                                     | Usage                                |
| -------------------------------------------------- | -------------------------------------------------- | ------------------------------------ |
| `0 1px 2px 0 rgba(13,13,18,0.06)`                 | `shadow-[0_1px_2px_0_rgba(13,13,18,0.06)]`        | Tags, tagline pills, icon wrappers, social icons |
| `0 4px 11px -1px rgba(10,10,10,0.04)`              | `shadow-[0_4px_11px_-1px_rgba(10,10,10,0.04)]`    | Feature cards, pricing cards, testimonial cards, feature quad container |
| `drop-shadow(0 8px 20px rgba(0,0,0,0.06)) drop-shadow(0 24px 48px rgba(0,0,0,0.05))` | CSS filter | Hero image                           |

---

## 10. Animations

### Keyframe Animations

| Animation          | Duration | Easing   | Tailwind Class               | Usage              |
| ------------------ | -------- | -------- | ---------------------------- | ------------------ |
| `accordion-down`   | 0.2s     | ease-out | `animate-accordion-down`     | Accordion open     |
| `accordion-up`     | 0.2s     | ease-out | `animate-accordion-up`       | Accordion close    |
| `marquee`          | 25s      | linear   | `animate-marquee` (infinite) | Logo/brand scroll  |

### Transition Patterns

| Pattern                                      | Usage                               |
| -------------------------------------------- | ----------------------------------- |
| `transition-colors`                          | Buttons, links, inputs, switches    |
| `transition-all`                             | Tabs trigger, accordion trigger     |
| `transition-transform duration-200`          | Accordion chevron rotation          |
| `transition-opacity`                         | Logo hover, theme toggle            |
| `transition duration-300 ease-in-out`        | Mobile menu slide                   |
| `transition duration-500 ease-in-out`        | Hamburger animation lines           |

### State-Driven Transforms

| State                          | Transform                    | Usage              |
| ------------------------------ | ---------------------------- | ------------------ |
| `[data-state=open]>svg`       | `rotate-180`                 | Accordion chevron  |
| `data-[state=checked]`        | `translate-x-4`              | Switch thumb       |
| Hamburger open                | `rotate-45`, `-rotate-45`    | Mobile menu icon   |

---

## 11. Button Variants

Defined via CVA in `src/components/ui/button.tsx`.

### Base Classes
```
inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold
transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring
disabled:pointer-events-none disabled:opacity-50
[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
```

### Variant Styles

| Variant       | Classes                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------- |
| `default`     | `bg-primary text-gray-900 text-body-md`                                                     |
| `destructive` | `bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90`               |
| `outline`     | `border border-input bg-background shadow-xs`                                                |
| `toggle`      | `border rounded-full border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground` |
| `secondary`   | `bg-background text-gray-900 text-body-md border border-[#DFE1E6]`                          |
| `ghost`       | `hover:bg-accent hover:text-accent-foreground border border-dark-gray text-foreground`       |
| `link`        | `underline-offset-4 hover:underline text-foreground font-medium`                             |
| `translucent` | `rounded-[16px] h-[52px] text-body-md text-white border border-gray-0/15 bg-gray-0/15 shadow-[0_1px_2px_0_rgba(13,13,18,0.06)] backdrop-blur-[2px] hover:bg-gray-0/20 active:bg-gray-0/25 focus-visible:ring-gray-0/40` |

### Size Styles

| Size      | Classes                                    |
| --------- | ------------------------------------------ |
| `default` | `p-4 h-[52px] rounded-[16px]`             |
| `sm`      | `h-10 rounded-[12px] px-4 py-3 text-xs`   |
| `lg`      | `h-10 rounded-lg px-8`                    |
| `icon`    | `size-9`                                   |
| `link`    | `h-auto p-0`                               |

### Default Variants
- variant: `default`
- size: `default`

---

## 12. Component Styling Patterns

### Card (`src/components/ui/card.tsx`)

| Sub-component    | Classes                                             |
| ---------------- | --------------------------------------------------- |
| `Card`           | `bg-card text-card-foreground rounded-xl border shadow-sm` |
| `CardHeader`     | `flex flex-col space-y-1.5 p-6`                    |
| `CardTitle`      | `leading-none font-semibold tracking-tight`         |
| `CardDescription`| `text-muted-foreground text-sm`                     |
| `CardContent`    | `p-6 pt-0`                                         |
| `CardFooter`     | `flex items-center p-6 pt-0`                       |

### Input (`src/components/ui/input.tsx`)

```
h-11 w-full rounded border border-input bg-transparent px-3 py-1
text-base md:text-sm shadow-xs transition-colors
placeholder:text-muted-foreground
focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden
disabled:cursor-not-allowed disabled:opacity-50
file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
```

### Textarea (`src/components/ui/textarea.tsx`)

```
min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2
text-base md:text-sm shadow-xs
placeholder:text-muted-foreground
focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden
disabled:cursor-not-allowed disabled:opacity-50
```

### Label (`src/components/ui/label.tsx`)

```
text-sm font-medium leading-none
peer-disabled:cursor-not-allowed peer-disabled:opacity-70
```

### Checkbox (`src/components/ui/checkbox.tsx`)

```
h-4 w-4 shrink-0 rounded-xs border border-primary shadow-sm
data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground
focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden
disabled:cursor-not-allowed disabled:opacity-50
```

### Switch (`src/components/ui/switch.tsx`)

Track:
```
h-5 w-9 shrink-0 rounded-full border-2 border-transparent shadow-xs cursor-pointer
data-[state=checked]:bg-primary data-[state=unchecked]:bg-input
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
disabled:cursor-not-allowed disabled:opacity-50
```

Thumb:
```
h-4 w-4 rounded-full bg-background shadow-lg ring-0
data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0
```

### Tabs (`src/components/ui/tabs.tsx`)

| Sub-component  | Classes                                                                       |
| -------------- | ----------------------------------------------------------------------------- |
| `TabsList`     | `bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1` |
| `TabsTrigger`  | `rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50` |
| `TabsContent`  | `mt-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` |

### Select (`src/components/ui/select.tsx`)

| Sub-component   | Key Classes                                                               |
| ---------------- | ------------------------------------------------------------------------ |
| `SelectTrigger`  | `h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:ring-1 focus:ring-ring` |
| `SelectContent`  | `z-50 min-w-[8rem] rounded-md border bg-popover shadow-md` + entry/exit animations |
| `SelectItem`     | `rounded-sm py-1.5 pr-8 pl-2 text-sm focus:bg-accent focus:text-accent-foreground` |
| `SelectSeparator`| `bg-muted -mx-1 my-1 h-px`                                              |

### Accordion (`src/components/ui/accordion.tsx`)

| Sub-component      | Classes                                                                  |
| ------------------- | ----------------------------------------------------------------------- |
| `AccordionItem`     | `border-b`                                                              |
| `AccordionTrigger`  | `flex flex-1 items-center justify-between py-4 text-sm font-medium hover:underline [&[data-state=open]>svg]:rotate-180` |
| Chevron icon        | `text-muted-foreground size-4 shrink-0 transition-transform duration-200` |
| `AccordionContent`  | `data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm` |
| Content inner       | `pt-0 pb-4`                                                            |

### Carousel (`src/components/ui/carousel.tsx`)

| Sub-component      | Classes                                                  |
| ------------------- | -------------------------------------------------------- |
| `Carousel`          | `relative`                                               |
| `CarouselContent`   | `flex` (horizontal: `-ml-4`, vertical: `-mt-4 flex-col`) |
| `CarouselItem`      | `min-w-0 shrink-0 grow-0 basis-full` + `pl-4` or `pt-4` |
| Prev/Next buttons   | `absolute h-8 w-8 rounded-full` (outline variant, icon size) |

---

## 13. Layout Patterns

### Navbar (`src/components/layout/navbar.tsx`)

| Element              | Classes                                                                |
| -------------------- | ---------------------------------------------------------------------- |
| Header               | `relative z-50 h-16 border-b border-b-gray-50 px-2.5 lg:h-22 bg-background` |
| Container            | `container flex h-16 items-center lg:h-22`                            |
| Inner wrapper        | `flex w-full items-center justify-between px-3.5 lg:px-6`             |
| Logo                 | `invert-0 dark:invert` (SVG color flip)                               |
| Desktop nav links    | `text-foreground hover:text-muted-foreground text-body-sm-medium p-2` |
| Nav trigger (dropdown) | `text-foreground text-body-sm-medium bg-transparent hover:bg-transparent hover:text-muted-foreground` |
| Dropdown content     | `bg-gray-0 rounded-2xl`, items in `w-[400px] p-3`                     |
| Dropdown link        | `rounded-xl p-3 hover:bg-gray-50`                                     |
| Auth buttons area    | `flex items-center gap-2.5`                                           |
| Mobile menu overlay  | `absolute inset-x-0 top-full h-[calc(100vh-64px)]` with translate/opacity transition |
| Mobile nav links     | `text-foreground text-body-lg-medium tracking-[-0.36px]`              |
| Hamburger lines      | `h-0.5 w-[18px] rounded-full bg-gray-900 transition duration-500`    |

### Footer (`src/components/layout/footer.tsx`)

| Element              | Classes                                                                |
| -------------------- | ---------------------------------------------------------------------- |
| Footer wrapper       | `bg-primary-300 border-t border-white/10 text-white`                   |
| Container            | `container px-6 py-12 lg:py-20`                                       |
| Grid                 | `grid gap-16 lg:grid-cols-[max-content_1fr] lg:gap-32`                |
| Logo                 | `invert dark:invert` (always white)                                    |
| Brand tagline        | `text-body-sm text-white/70`                                           |
| Social icon button   | `size-9 rounded-md border border-white/10 bg-gray-0/10 hover:bg-gray-0/20 shadow-[0_1px_2px_0_rgba(13,13,18,0.06)] backdrop-blur-[2px]` |
| Nav section title    | `text-body-md-medium text-white/80`                                    |
| Nav link             | `text-body-md text-white/90 hover:text-white`                          |
| Legal link           | `text-body-sm text-white/80 hover:text-white`                          |
| Nav columns          | `grid-cols-[repeat(auto-fit,minmax(160px,1fr))] lg:grid-cols-3`       |

---

## 14. Section Patterns

### Common Section Structure

```tsx
<section className="bg-background px-6 py-10 lg:py-24">
  <div className="container">
    {/* Centered header */}
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
      <span className="tagline-pill">...</span>
      <h2 className="text-foreground text-heading-1 mt-4 max-w-[616px] tracking-tight lg:text-[52px]">...</h2>
      <p className="text-body-md sm:text-body-lg mx-auto mt-4 max-w-3xl text-gray-400">...</p>
    </div>
    {/* Content grid */}
    <div className="mt-10 grid gap-6 lg:mt-16">...</div>
  </div>
</section>
```

### Tagline Pill

```
text-body-xs-medium bg-gray-0
inline-flex h-8 items-center gap-2
rounded-[10px] border border-gray-100 px-3 py-0 leading-none
shadow-[0_1px_2px_0_rgba(13,13,18,0.06)]
```

Always includes a 6x6px elipse image before text.

### Feature Card (Standard)

```
bg-gray-0
rounded-[16px] border border-gray-50
p-4 (big) or p-6 (small)
shadow-[0_4px_11px_-1px_rgba(10,10,10,0.04)]
```

Title: `text-foreground text-heading-4` or `text-heading-5`
Description: `text-body-md text-gray-400`

### Testimonial Card

```
bg-gray-0
rounded-[24px] border border-gray-50
p-6 md:p-8
shadow-[0_4px_11px_-1px_rgba(10,10,10,0.04)]
```

Avatar: `size-12 rounded-full object-cover`
Name: `text-body-sm-bold text-foreground`
Role: `text-body-sm text-gray-400`
Quote: `text-body-lg text-foreground`
Tags: `text-body-xs-medium bg-gray-25 h-8 rounded-[10px] px-3 py-2 text-gray-400`

### Pricing Card

Standard:
```
bg-gray-0 border-gray-50 rounded-2xl border p-2
shadow-[0_4px_11px_-1px_rgba(10,10,10,0.04)]
```

Highlighted:
```
bg-primary-300 border-white/10 text-white rounded-2xl border p-2
shadow-[0_4px_11px_-1px_rgba(10,10,10,0.04)]
```

Feature box inside: `rounded-xl border bg-gray-25 border-gray-50 p-4` (standard) or `bg-gray-0/5 border-white/10` (highlight)

Price: `text-[40px] leading-none font-bold tracking-tight`

### CTA Section

```
bg-primary-300 text-white overflow-hidden px-6 py-10 lg:py-26
```

Title: `text-heading-1 mx-auto max-w-[637px] tracking-tight lg:text-[52px]`
Description: `text-body-md sm:text-body-lg text-white`
Buttons: primary `default` + `translucent` variant

### Alternating Section Backgrounds

| Background           | Sections                            |
| -------------------- | ----------------------------------- |
| `bg-background`      | Hero, features, default sections    |
| `bg-gray-25 dark:bg-gray-200` | Pricing, features hero    |
| `bg-primary-300`     | CTA, hero accent panel, footer      |
| No explicit bg       | Testimonials, feature quad          |

### Icon Wrapper (Feature Quad)

```
bg-gray-0 size-13 rounded-full
border border-gray-100
shadow-[0_1px_2px_0_rgba(13,13,18,0.06)]
```
Icon size inside: `h-9 w-9`

### Feature Quad Container

```
bg-gray-0 rounded-[28px] border border-gray-50
px-6 py-10 lg:px-8
shadow-[0_4px_11px_-1px_rgba(10,10,10,0.04)]
```

Selected state: `bg-gray-25 border border-gray-50 dark:bg-gray-100`
Unselected: `border border-transparent bg-transparent`

---

## 15. Utilities & Conventions

### Class Composition
- Always use `cn()` from `@/lib/utils` to merge classes
- Use CVA for components with multiple variants
- Prefer Tailwind utilities over custom CSS

### Disabled States
- `disabled:pointer-events-none disabled:opacity-50` — buttons, inputs, selects, tabs
- `peer-disabled:cursor-not-allowed peer-disabled:opacity-70` — labels

### Focus States
- Primary pattern: `focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden`
- Extended pattern: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`

### Text Color Hierarchy
| Role               | Class                  | Color Token  |
| ------------------- | --------------------- | ------------ |
| Primary text        | `text-foreground`     | gray-900     |
| Secondary text      | `text-gray-400`       | gray-400     |
| Muted/placeholder   | `text-muted-foreground` | gray-400   |
| On dark surfaces    | `text-white`          | white        |
| Subdued on dark     | `text-white/70` - `text-white/90` | white with opacity |
| Tagline accent      | `text-primary-200`    | primary-200  |

### Border Conventions
- Default border: `border border-gray-50` or just `border` (inherits `--color-border`)
- Input border: `border-input` (gray-200)
- On dark surfaces: `border-white/10`
- Pricing highlight: `border-gray-0/10` (dashed)
- Hardcoded secondary button: `border-[#DFE1E6]`

### Image Patterns
- Logo dark mode: `invert-0 dark:invert` (navbar) or `invert dark:invert` (footer, always white)
- Lazy loading: `loading="lazy"` on non-critical images
- Priority loading: `priority` on hero and above-fold images
- Object fit: `object-contain` for logos/icons, `object-cover` for avatars/photos

### Component File Organization
```
src/
  components/
    ui/          # shadcn/ui primitives (button, card, input, etc.)
    layout/      # Navbar, Footer, Banner
    sections/    # Page sections (zippay-hero, zippay-features-section, etc.)
    theme-provider.tsx
    theme-toggle.tsx
```

### shadcn/ui Configuration (`components.json`)
- Style: `new-york`
- RSC: enabled
- Icon library: `lucide`
- Base color: `neutral`
- CSS variables: enabled
- Import aliases: `@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`
