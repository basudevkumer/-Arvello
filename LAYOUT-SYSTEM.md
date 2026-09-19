# Arvello Layout System

## Purpose

Maintain a consistent page geometry across the entire application.

## Global Container

Use one shared content-container strategy.

Do not create page-specific max-widths unless the content genuinely requires a different reading width.

Recommended conceptual structure:

```text
Viewport
└── Page Container
    ├── Section
    │   ├── Section Heading
    │   └── Content
    └── Section
```

## Alignment

Major sections should share the same left and right content edges.

Avoid:
- randomly centered sections;
- unrelated container widths;
- different horizontal padding for equivalent sections.

## Page Widths

Use a common wide commerce container for:
- header;
- product grids;
- promotional sections;
- editorial sections;
- footer content.

Use narrower reading widths only for:
- long-form text;
- article content;
- legal/information pages.

## Grid Rules

Product grids should be responsive and use consistent card widths.

Conceptual behavior:

```text
Desktop: 4+ columns when space permits
Tablet: 2–3 columns
Mobile: 1–2 columns depending on available width
```

Never force a fixed product-card width that creates overflow.

## Hero Layout

Desktop:
- content and imagery may sit side-by-side;
- visual hierarchy should favor the headline and product/lifestyle image.

Mobile:
- stack content;
- keep CTA visible;
- preserve image quality;
- avoid excessive hero height.

## Section Rhythm

Use:

```text
Section Heading
↓
Short supporting copy (optional)
↓
Content
```

Do not place unrelated components directly against each other without sufficient spacing.

## Header Geometry

Keep header height and internal alignment stable across pages.

Search, account, cart, and navigation controls should share a consistent vertical center.

## Footer Geometry

Footer should use the same global container as the rest of the site.

## Agent Rule

Before creating a new layout wrapper, search for an existing container/layout component and reuse it.
