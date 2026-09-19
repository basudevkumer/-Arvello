# Arvello Responsive System

## Principle

Use mobile-first responsive design.

The layout should scale continuously where possible and change structure only when necessary.

## Breakpoint Guidance

The existing stylesheet explicitly adapts typography around:
- 768px
- 480px

Use the project's existing Tailwind breakpoint system rather than inventing custom breakpoints unless there is a concrete layout requirement. fileciteturn0file0L603-L639

## Desktop

Typical behavior:
- full navigation;
- multi-column product grids;
- large hero composition;
- horizontal trust strip;
- spacious section padding;
- promotional content beside imagery where appropriate.

## Tablet

Typical behavior:
- navigation may simplify;
- grids reduce columns;
- hero text/image proportions tighten;
- horizontal content may wrap;
- cards remain visually consistent.

## Mobile

Typical behavior:
- navigation collapses;
- content stacks vertically;
- product grids reduce to 1–2 columns depending on available width;
- CTAs remain easy to tap;
- images retain intentional aspect ratios;
- long headings wrap naturally;
- no horizontal scrolling.

## Mobile Interaction

Touch targets should be comfortably tappable.

Do not make important actions dependent on hover.

## Responsive Typography

The current design system uses fluid `clamp()` typography for display and heading styles, with smaller fixed sizes at mobile breakpoints. Preserve this approach. fileciteturn0file0L362-L400

## Responsive QA Checklist

Check at minimum:
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px+

Check:
- no horizontal overflow;
- no clipped text;
- no overlapping controls;
- no broken grids;
- navigation remains usable;
- product images remain balanced;
- CTA remains visible;
- footer remains readable.
