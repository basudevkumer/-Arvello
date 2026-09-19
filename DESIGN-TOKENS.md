# Arvello Design Tokens

This document is the visual source of truth for the Arvello furniture-commerce UI.

The existing stylesheet defines a Tailwind CSS v4 theme with semantic tokens. Keep those tokens as the primary implementation vocabulary.

## Brand Palette

### Green

| Token | Value | Intended use |
|---|---|---|
| `green-900` | `#063c35` | Primary brand surface |
| `green-800` | `#084a41` | Primary hover |
| `green-700` | `#0b5a4e` | Primary active |
| `green-600` | `#167064` | Secondary brand |
| `green-500` | `#278276` | Supporting brand |
| `green-100` | `#e7f3f0` | Soft brand background |
| `green-50` | `#f3f9f7` | Very soft brand background |

### Gold

| Token | Value | Intended use |
|---|---|---|
| `gold-700` | `#b97824` | Accent hover/emphasis |
| `gold-600` | `#c88a32` | Main accent |
| `gold-500` | `#d9a14a` | Supporting accent |
| `gold-300` | `#ebcb91` | Soft accent border/details |
| `gold-100` | `#f8eedb` | Accent surface |

### Neutral

| Token | Value |
|---|---|
| `neutral-950` | `#17201e` |
| `neutral-900` | `#202825` |
| `neutral-800` | `#303936` |
| `neutral-700` | `#555e5a` |
| `neutral-600` | `#707875` |
| `neutral-500` | `#919894` |
| `neutral-400` | `#b7bcb9` |
| `neutral-300` | `#d5d9d6` |
| `neutral-200` | `#e6e8e6` |
| `neutral-100` | `#f2f3f1` |
| `neutral-50` | `#f8f8f6` |
| `white` | `#ffffff` |

## Semantic Colors

Use semantic tokens instead of raw palette values:

- `primary` → `green-900`
- `primary-hover` → `green-800`
- `primary-active` → `green-700`
- `primary-light` → `green-100`
- `accent` → `gold-600`
- `accent-hover` → `gold-700`
- `accent-light` → `gold-100`
- `text-primary` → `neutral-950`
- `text-secondary` → `neutral-700`
- `text-tertiary` → `neutral-600`
- `text-muted` → `neutral-500`
- `text-disabled` → `neutral-400`
- `text-inverse` → `white`
- `background` → `white`
- `background-soft` → `neutral-50`
- `background-muted` → `neutral-100`
- `border` → `neutral-200`
- `border-strong` → `neutral-300`

## Typography

Font stack:

`Manrope → Inter → ui-sans-serif → system-ui → Segoe UI → sans-serif`

Weights:
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- ExtraBold: 800

Core sizes:
- 10, 11, 12, 13, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64px

Line heights:
- none: 1
- tight: 1.1
- snug: 1.2
- normal: 1.5
- relaxed: 1.6
- loose: 1.75

## Radius

- xs: 4px
- sm: 6px
- md: 8px
- lg: 12px
- xl: 16px
- 2xl: 20px
- 3xl: 24px
- full: 9999px

Default product/card language should primarily use `md` and `lg`.

## Shadows

- `sm`: subtle separation
- `md`: standard card elevation
- `lg`: prominent section/card elevation
- `xl`: large promotional surfaces

Use shadows sparingly. The visual target is premium and clean, not floating-heavy.

## Motion

Standard easing:

`cubic-bezier(0.2, 0, 0, 1)`

Durations:
- fast: 150ms
- normal: 250ms
- slow: 350ms

Motion must communicate interaction, not decorate every element.

## Existing Component Tokens

Prefer these established classes/patterns:

- `.btn`
- `.btn-primary`
- `.btn-secondary`
- `.btn-accent`
- `.card`
- `.card-elevated`
- `.badge`
- `.badge-sale`
- `.badge-success`
- `.product-name`
- `.product-category`
- `.product-price`
- `.product-old-price`
- `.text-display-xl`
- `.text-display-lg`
- `.text-h1`
- `.text-h2`
- `.text-h3`
- `.text-h4`
- `.text-body-lg`
- `.text-body-md`
- `.text-body-sm`
- `.text-label-lg`
- `.text-label-md`
- `.text-label-sm`
- `.text-caption`
- `.text-overline`

The current stylesheet explicitly defines these design-system values and component patterns. fileciteturn0file0L8-L35

## Token Rule

If a requested UI value does not exist:
1. check whether an existing token can reasonably be reused;
2. if not, add a reusable token;
3. document why it was added;
4. do not scatter the new value across components.
