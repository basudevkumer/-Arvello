# Arvello Spacing System

## Purpose

Use this document to keep vertical rhythm, card padding, grid gaps, and page spacing consistent.

## Base Scale

Prefer this spacing scale:

| Token | Value | Typical use |
|---|---:|---|
| `space-1` | 4px | Tiny icon/text gap |
| `space-2` | 8px | Compact internal gap |
| `space-3` | 12px | Small component gap |
| `space-4` | 16px | Default component spacing |
| `space-5` | 20px | Card/content spacing |
| `space-6` | 24px | Standard section internals |
| `space-8` | 32px | Component groups |
| `space-10` | 40px | Larger content separation |
| `space-12` | 48px | Section separation |
| `space-16` | 64px | Major section spacing |
| `space-20` | 80px | Large desktop section spacing |
| `space-24` | 96px | Hero/major page separation |

## Rules

- Prefer the scale above instead of arbitrary pixel values.
- If a value between tokens is genuinely necessary, use the closest existing token first.
- Repeated custom spacing should become a reusable token.
- Do not use different spacing for visually equivalent components.

## Component Guidance

### Buttons
Use consistent horizontal and vertical padding through the existing `.btn` system.

### Cards
Typical internal spacing:
- compact: 12–16px
- standard: 16–20px
- promotional: 20–32px

### Product Grids
Use consistent row/column gaps throughout the same page.

### Sections
Desktop sections can use larger vertical rhythm; mobile sections should reduce spacing without becoming cramped.

## Agent Rule

If a new component requires a spacing value, check this system before writing a raw value.
