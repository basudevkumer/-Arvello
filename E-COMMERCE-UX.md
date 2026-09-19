# Arvello E-Commerce UX Rules

## Product Discovery

Users should be able to:
- browse categories;
- search products;
- filter;
- sort;
- open product details;
- return to previous discovery context.

## Product Card

A product card should communicate quickly:

```text
Image
↓
Optional badge
↓
Product name
↓
Rating/reviews
↓
Current price
↓
Previous price / discount
↓
Quick action
```

Do not overload the card with secondary information.

## Pricing

Current price must be visually stronger than the previous price.

Previous price:
- smaller;
- muted;
- struck through when appropriate.

Discount should be understandable without relying on color alone.

## Rating

When ratings exist:
- show rating value;
- optionally show review count;
- keep rating visually secondary to product name and price.

## Search

Search should:
- be easy to find;
- provide clear empty results;
- preserve user input;
- avoid confusing error states.

## Filters

Filters should be:
- understandable;
- easy to clear;
- responsive;
- usable on mobile.

Mobile filters may use a drawer/sheet rather than forcing a wide desktop filter layout.

## Product Detail

Important information should appear early:
- product name;
- image;
- price;
- availability;
- rating;
- primary purchase action.

Secondary information can follow:
- description;
- specifications;
- shipping;
- returns;
- reviews;
- related products.

## Cart

Cart should make these obvious:
- product;
- quantity;
- price;
- subtotal;
- remove/update action;
- order total;
- checkout action.

## Empty Cart

Explain:
- that the cart is empty;
- what the user can do next;
- provide a clear discovery CTA.

## Out of Stock

Do not show a misleading active purchase CTA.

Provide an appropriate alternative when supported, such as notification/wishlist/continue shopping.

## Wishlist

Wishlist interactions should be:
- reversible;
- clearly communicated;
- consistent with the rest of the interaction system.

## Checkout

Keep checkout focused.

Avoid unnecessary navigation or distractions once the user has entered a committed purchase flow.

## Trust

Relevant trust information may include:
- shipping;
- returns;
- secure payment;
- customer support.

Keep these elements informative rather than visually overwhelming.

## Agent Rule

Do not optimize one commerce component in isolation if it creates a different shopping pattern elsewhere.
