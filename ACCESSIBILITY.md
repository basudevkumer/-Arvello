# Arvello Accessibility Rules

## Semantic HTML

Prefer:
- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- `button`
- `a`
- `form`
- `label`

Do not use clickable `div` elements when a native interactive element is appropriate.

## Keyboard

All interactive controls must be keyboard accessible.

Focus must remain visible.

The current base stylesheet defines a visible `:focus-visible` outline using the focus token. Preserve that behavior. fileciteturn0file0L340-L346

## Images

Every meaningful image needs useful alt text.

Decorative images should use empty alt text where appropriate.

Do not repeat nearby visible text unnecessarily in alt text.

## Forms

Every input needs an accessible label.

Validation:
- identify the invalid field;
- explain the error;
- do not rely only on color.

## Color

Never communicate meaning with color alone.

Examples:
- sale state should include text/badge;
- errors should include message/icon plus color;
- selected states should have more than a color change.

## Motion

Respect reduced-motion preferences.

Animations should never be required to understand or operate the interface.

## Buttons vs Links

Use:
- link for navigation;
- button for an action.

## Accessible Names

Icon-only buttons need accessible names.

Examples:
- search;
- cart;
- account;
- menu;
- wishlist;
- close.

## Content

Keep text readable and avoid overly dense blocks.

## QA

Before completing UI work, test:
- keyboard navigation;
- focus visibility;
- form labels;
- icon button names;
- image alt text;
- heading order;
- color contrast;
- mobile usability.
