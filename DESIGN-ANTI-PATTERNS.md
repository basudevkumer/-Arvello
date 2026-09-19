# Arvello Design Anti-Patterns

This file defines things an AI coding agent must NOT introduce unless explicitly requested and justified.

## Color

Do not:
- invent random hex colors;
- introduce neon colors;
- introduce unrelated brand colors;
- use red/blue/purple as decorative accents without semantic need;
- create multiple competing accent colors.

Use the established green, gold, neutral, and semantic status system.

## Typography

Do not:
- introduce another font family;
- randomly change heading weights;
- create arbitrary font sizes everywhere;
- mix unrelated typographic styles.

## Spacing

Do not:
- use random values such as 17px, 23px, 31px repeatedly;
- create different padding for equivalent cards;
- make sections visually inconsistent.

Use the spacing system.

## Radius

Do not:
- make every element pill-shaped;
- mix sharp and highly rounded cards without purpose;
- introduce random radius values.

## Shadows

Do not:
- use heavy black shadows;
- add shadows to everything;
- use glowing/neon shadows;
- make cards appear to float excessively.

## Effects

Do not introduce by default:
- excessive glassmorphism;
- strong blur effects;
- excessive gradients;
- animated backgrounds;
- parallax everywhere;
- bouncing UI;
- unnecessary 3D effects.

## Components

Do not:
- duplicate an existing component;
- create page-specific versions of globally reusable components without a real reason;
- create giant monolithic components;
- make one component visually different from equivalent components.

## Icons

Do not:
- mix multiple icon families casually;
- use emoji as UI icons;
- create inconsistent custom SVGs when approved icons exist.

## Product Cards

Do not:
- change card structure between listing pages;
- use inconsistent image ratios;
- place different price/rating positions across equivalent cards;
- overload cards with too much information.

## Layout

Do not:
- create random container widths;
- introduce horizontal scrolling unintentionally;
- break shared alignment;
- make mobile an afterthought.

## Dark Mode

Do not introduce a separate dark theme unless the product requirements explicitly require it.

## Copy/UI Density

Do not:
- use unnecessarily long UI labels;
- create dense walls of text;
- add decorative sections without a user purpose.

## Refactoring

Do not redesign unrelated sections while implementing a feature.

## Agent Decision Rule

Before adding a new visual pattern, ask internally:

1. Does an existing pattern already solve this?
2. Can an existing token solve this?
3. Can an existing component be reused?
4. Does this change improve the product requirement without creating visual inconsistency?

If the answer to 1–3 is yes, reuse instead of reinventing.
