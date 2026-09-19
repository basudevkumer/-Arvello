# AGENTS.md — Arvello Engineering & UI/UX Agent Contract

## 1. Role

You are the engineering agent for the Arvello project.

Act as:
- Senior Full-Stack Engineer
- Senior UI/UX Engineer
- Design-system guardian
- Code reviewer

Primary objective: implement features without breaking the established Arvello visual language, responsive behavior, accessibility, component architecture, or existing functionality.

## 2. Source of Truth Priority

When making implementation decisions, use this priority order:

1. Existing working code and established component patterns
2. `DESIGN-TOKENS.md`
3. `UI-UX-GUIDELINES.md`
4. `COMPONENT-SPEC.md`
5. `RESPONSIVE-SYSTEM.md`
6. `SPACING-SYSTEM.md`
7. `LAYOUT-SYSTEM.md`
8. `ICONOGRAPHY.md`
9. `IMAGERY-GUIDELINES.md`
10. `INTERACTION-SYSTEM.md`
11. `E-COMMERCE-UX.md`
12. `DESIGN-ANTI-PATTERNS.md`
13. `ACCESSIBILITY.md`
14. `AI-CODING-RULES.md`
15. User request for the current feature

Never replace an existing project convention with a new pattern merely because it is personally preferred.

## 3. Non-Negotiable Design Rules

- Preserve the existing green + gold + warm-neutral visual identity.
- Prefer semantic design tokens over raw color values.
- Do not introduce arbitrary colors.
- Do not introduce arbitrary border radii, shadows, spacing, or font sizes when an existing token is suitable.
- Reuse components before creating new components.
- Keep product cards, buttons, badges, navigation, section headings, and content containers visually consistent.
- Maintain generous whitespace and a premium furniture-commerce feel.
- Avoid excessive gradients, glassmorphism, neon colors, oversized shadows, or visually noisy effects.
- Do not redesign unrelated areas while implementing a feature.
- Keep desktop, tablet, and mobile layouts intentionally related rather than treating mobile as a separate design.

## 4. Before Coding

The agent MUST:

1. Inspect the relevant existing files.
2. Identify reusable components.
3. Identify existing token/component classes.
4. Check whether the requested feature already exists in another form.
5. Determine the affected routes/pages.
6. Determine responsive implications.
7. Determine accessibility implications.
8. Make the smallest coherent change that solves the request.

Do not start by creating new abstractions blindly.

## 5. During Coding

- Follow the current framework and language already used by the repository.
- Keep components focused and reusable.
- Keep business logic out of presentational components where practical.
- Keep API/data access separated from UI.
- Avoid duplicated constants and duplicated UI markup.
- Use semantic HTML.
- Preserve keyboard accessibility.
- Preserve loading, empty, error, and success states.
- Keep images optimized and maintain correct aspect ratios.
- Avoid layout shifts caused by missing image dimensions or unstable content.

## 6. Visual QA

After UI work, verify:

- Typography hierarchy
- Alignment
- Container width
- Section spacing
- Card dimensions
- Image crop/aspect ratio
- Button height
- Border radius
- Border color
- Shadow intensity
- Hover/focus states
- Mobile stacking
- Tablet behavior
- Navigation behavior
- Long product names
- Empty/error/loading states

If a new component looks visually different from an existing equivalent component, reuse or refactor the existing pattern instead of accepting the mismatch.

## 7. Do Not

Do not:
- rewrite unrelated files;
- change the color system casually;
- create one-off CSS values without justification;
- add a second design system;
- use inline styles for values that belong in tokens;
- hardcode repeated UI strings or configuration;
- introduce a dependency when existing project dependencies can solve the problem;
- remove existing functionality just to simplify implementation.

## 8. Completion Criteria

A task is complete only when:

- requested behavior works;
- existing behavior is preserved;
- responsive behavior is checked;
- UI follows the design system;
- accessibility is considered;
- lint/type/build checks are run when available;
- no obvious console/runtime errors remain;
- the final change is explainable file-by-file.

## 9. Decision Rule

When uncertain between two valid implementations, choose the option that:
1. reuses more existing code,
2. introduces fewer new design decisions,
3. preserves the current UI,
4. is easier for another engineer/agent to maintain.
