# Arvello Interaction System

## Purpose

All interactive UI should behave consistently.

## State Model

Interactive components should consider:

```text
Default
Hover
Focus
Active/Pressed
Disabled
Loading
Success
Error
```

Not every component needs every state, but applicable states must be intentionally designed.

## Hover

Hover should provide subtle feedback.

Preferred changes:
- background;
- border;
- text/icon color;
- restrained shadow;
- small transform where appropriate.

Avoid dramatic scaling or bouncing.

## Focus

Keyboard focus must remain clearly visible.

Preserve the existing focus-visible treatment from the global stylesheet.

## Active / Pressed

Pressed states should feel immediate and subtle.

Do not introduce large movement that shifts surrounding layout.

## Disabled

Disabled controls should communicate unavailable interaction without looking broken.

Do not rely only on opacity if readability becomes poor.

## Loading

Use:
- skeletons for content regions;
- button loading states for submitted actions;
- progress indicators when an operation genuinely takes time.

Do not block the entire page for small local actions.

## Feedback

For important actions, communicate:
- success;
- failure;
- validation;
- unavailable state.

Examples:
- added to cart;
- wishlist updated;
- form submitted;
- invalid quantity;
- out-of-stock product.

## Motion

Use the existing motion system:
- fast: 150ms
- normal: 250ms
- slow: 350ms

Use the established easing curve.

Motion should clarify cause and effect.

## Reduced Motion

Respect reduced-motion preferences.

## Overlays

For modals/drawers:
- trap focus appropriately;
- provide close control;
- prevent accidental interaction with the background;
- support Escape where appropriate.

## Agent Rule

Do not invent a different hover/focus/transition pattern for each page.
