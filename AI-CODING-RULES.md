# AI Coding Rules — Arvello

This file is specifically for agentic AI coding inside VS Code.

## Rule 1 — Inspect Before Editing

Never assume the project structure.

Before changing code:
- inspect relevant directories;
- inspect package configuration;
- inspect existing components;
- inspect existing styles;
- inspect route/page structure;
- inspect data/types when the feature is data-driven.

## Rule 2 — Preserve Existing Design

The existing CSS is already a design system, not a temporary styling file.

Use its tokens and component classes instead of creating parallel values. The stylesheet defines raw palette tokens, semantic colors, typography, radii, shadows, motion, and reusable components. fileciteturn0file0L8-L35

## Rule 3 — Reuse Before Create

Before creating a component:
1. search for an existing equivalent;
2. search for a similar pattern;
3. reuse or extend it when appropriate;
4. only create a new component when responsibility is genuinely different.

## Rule 4 — No Random Styling

Do not introduce:
- random hex colors;
- arbitrary border radii;
- arbitrary shadow values;
- inconsistent spacing;
- one-off font families;
- unnecessary gradients.

If a new value is necessary, promote it into the design system.

## Rule 5 — Minimal Change

Change only what is required for the requested task.

Avoid unrelated refactors during feature implementation.

## Rule 6 — Data/UI Separation

Do not bury product/catalog data inside complex JSX when the project architecture already has data/constants/services.

Keep UI components focused on rendering and interaction.

## Rule 7 — State Completeness

For asynchronous UI, consider:
- initial/loading;
- success;
- empty;
- error;
- retry;
- disabled/submitting.

## Rule 8 — Visual Consistency Check

After implementation, compare the result mentally/visually against:
- header;
- hero;
- product card;
- button;
- typography;
- spacing;
- color;
- section rhythm.

If it looks like a different website, revise it.

## Rule 9 — Verification

When available, run:
- lint;
- typecheck;
- tests;
- build.

Fix errors introduced by the task before finishing.

## Rule 10 — Final Report

After completing a task, report:
- files changed;
- what changed;
- important design-system decisions;
- verification performed;
- any known limitation.

Keep the report concise.
