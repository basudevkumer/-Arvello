# Arvello Agentic AI Documentation

These files are intended to be placed at the repository root so AI coding agents working in VS Code have a persistent project contract.

## Recommended Files

- `AGENTS.md` — master engineering instructions
- `DESIGN-TOKENS.md` — visual tokens and styling vocabulary
- `UI-UX-GUIDELINES.md` — design and UX rules
- `COMPONENT-SPEC.md` — reusable component contracts
- `RESPONSIVE-SYSTEM.md` — responsive behavior
- `ACCESSIBILITY.md` — accessibility requirements
- `AI-CODING-RULES.md` — rules specifically for coding agents
- `PAGE-ARCHITECTURE.md` — page/section composition
- `DESIGN-QA-CHECKLIST.md` — final visual QA
- `SPACING-SYSTEM.md` — spacing scale and rhythm
- `LAYOUT-SYSTEM.md` — containers, grids, page geometry
- `ICONOGRAPHY.md` — icon library and icon behavior
- `IMAGERY-GUIDELINES.md` — product/lifestyle image rules
- `INTERACTION-SYSTEM.md` — hover/focus/loading/feedback states
- `E-COMMERCE-UX.md` — commerce-specific UX rules
- `DESIGN-ANTI-PATTERNS.md` — patterns the AI must avoid

## How an Agent Should Use Them

At the beginning of a task:

```text
1. Read AGENTS.md
2. Read DESIGN-TOKENS.md
3. Read UI-UX-GUIDELINES.md
4. Inspect the relevant source files
5. Read COMPONENT-SPEC.md when creating/changing UI components
6. Read RESPONSIVE-SYSTEM.md for responsive work
7. Read SPACING-SYSTEM.md and LAYOUT-SYSTEM.md for layout work
8. Read ICONOGRAPHY.md and IMAGERY-GUIDELINES.md for visual asset work
9. Read INTERACTION-SYSTEM.md for interactive states
10. Read E-COMMERCE-UX.md for commerce flows
11. Read ACCESSIBILITY.md for accessibility-sensitive work
12. Check DESIGN-ANTI-PATTERNS.md before introducing new visual patterns
13. Implement the smallest coherent change
14. Run verification
15. Use DESIGN-QA-CHECKLIST.md before finishing
```

## Core Principle

The AI agent should behave as if it is joining an existing senior engineering team.

It should not continuously reinvent the design.

The repository's established code + these documents form the project's working contract.
