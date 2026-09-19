# Arvello Page Architecture

## Global Shell

All primary pages should share:

```text
App/Layout
├── Header
├── Main Content
│   ├── Page Sections
│   └── Page-specific components
└── Footer
```

## Home Page Pattern

Recommended composition based on the visual direction:

```text
Header
Hero
TrustStrip
ShopByCategory
FeaturedProducts
PromotionBanner
WhyChooseUs / ValueProps
Deals
Testimonials
HomeInspiration
Newsletter
Footer
```

Not every implementation must contain every section; use the sections required by the product requirements.

## Shop / Listing Page

```text
Header
PageIntro
Category/FilterControls
ProductGrid
Pagination/LoadMore
Footer
```

## Product Details Page

```text
Header
Breadcrumb
ProductGallery + ProductInformation
Price + Rating + Availability
Quantity + PrimaryAction
ProductDetails
Specifications
Reviews
RelatedProducts
Footer
```

## Cart

```text
Header
CartItems
OrderSummary
RecommendedProducts
CheckoutAction
Footer
```

## About

```text
Header
PageIntro
BrandStory
Values
Quality/Process
LifestyleImagery
CTA
Footer
```

## Contact

```text
Header
PageIntro
ContactInformation
ContactForm
Map/Location if required
FAQ/Support
Footer
```

## Section Rules

Every section should have:
- clear purpose;
- consistent container;
- predictable vertical spacing;
- responsive behavior;
- appropriate heading hierarchy.

## Container

Prefer one global content-container strategy.

Do not give each page its own arbitrary max-width.

## Grid

Use the project's responsive grid utilities.

Do not hardcode different product-card widths across pages unless a deliberate editorial layout requires it.

## Visual Hierarchy

A page should have one primary visual focus at a time.

Avoid competing hero-sized headings, banners, or cards.
