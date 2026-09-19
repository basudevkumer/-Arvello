# Arvello Component Specification

## Component Architecture

Build the UI from reusable primitives and domain components.

Suggested layers:

### Primitives
- Button
- IconButton
- Input
- Select
- Badge
- Rating
- Divider
- Container
- SectionHeading
- Skeleton
- Modal/Drawer

### Commerce Components
- ProductCard
- ProductGrid
- ProductImage
- Price
- SaleBadge
- CategoryCard
- CartItem
- WishlistButton
- QuantitySelector
- FilterBar
- SortSelect

### Layout Components
- Header
- MobileNavigation
- Footer
- NewsletterSection
- PromotionalBanner
- TrustStrip

### Content Components
- TestimonialCard
- BlogCard
- InspirationCard
- EmptyState
- ErrorState

## Component Rules

Each reusable component should:
- have one clear responsibility;
- expose only necessary props;
- support responsive behavior;
- avoid embedding page-specific business logic;
- use design tokens;
- support keyboard interaction where relevant.

## ProductCard Contract

A product card should conceptually support:

```ts
type ProductCardProps = {
  id: string
  name: string
  image: string
  price: number
  previousPrice?: number
  rating?: number
  reviewCount?: number
  badge?: string
  category?: string
  isWishlisted?: boolean
}
```

Do not add props unless a real use case requires them.

## Loading States

Use skeletons that preserve final layout dimensions.

Do not use a spinner as the only loading strategy for large product grids.

## Empty States

An empty state should explain:
- what is empty;
- why it may be empty;
- what the user can do next.

## Error States

Errors should be:
- understandable;
- non-technical for users;
- actionable;
- visually consistent.

Log technical details separately where appropriate.

## Composition Rule

Prefer:

`ProductGrid → ProductCard → Price/Rating/Badge`

over one giant product component containing every responsibility.

## Naming

Use names that describe UI responsibility rather than visual appearance.

Good:
- `ProductCard`
- `SectionHeading`
- `TrustStrip`

Avoid:
- `GreenBox`
- `BigCard`
- `PrettySection`
