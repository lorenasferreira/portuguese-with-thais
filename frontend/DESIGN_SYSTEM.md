# Portuguese with Thaís — Design System

A lightweight reference for maintaining visual and code consistency across the project.

This system should evolve with the product. It is a guide, not a set of rigid rules.

---

## Visual Direction

The brand should feel:

- Editorial
- Contemporary
- Elegant
- Warm
- Cultural
- Human
- Brazilian without clichés
- Premium without feeling corporate

Avoid:

- Generic template layouts
- Excessive shadows
- Excessive rounded cards
- Decorative elements without purpose
- Obvious tourism imagery
- Green-and-yellow Brazilian clichés
- Repeating the same visual treatment across multiple sections

---

## Colors

Color tokens are defined in:

`src/styles/variables.css`

Main tokens:

```css
--color-primary
--color-primary-dark
--color-accent
--color-accent-hover
--color-background
--color-surface
--color-text
--color-text-light
--color-border
```

Prefer design tokens over hardcoded colors.

---

## Typography

### Body / Primary Typography

Used for:

- Paragraphs
- Navigation
- Buttons
- Labels
- UI elements
- Headings when a cleaner or more contemporary treatment is needed

Prioritize readability and strong hierarchy.

### Editorial Serif

Use selectively for:

- Editorial moments
- Selected words
- Quotes
- High-impact statements

Do not automatically use the serif font for every heading.

Too much serif reduces its visual impact.

### Typography Principle

Create hierarchy through a combination of:

- Scale
- Weight
- Case
- Letter spacing
- Color
- Position
- Selective font contrast

Do not rely only on font changes to create emphasis.

---

## Layout

### SectionContainer

Use `SectionContainer` for the main horizontal structure of sections.

It controls:

- Maximum width
- Horizontal padding
- Centering

Avoid recreating the same container logic inside individual sections.

### Editorial Rhythm

Sections should feel connected without looking identical.

Alternate composition through:

- Text
- Photography
- Cards
- Grids
- Negative space
- Asymmetry
- Borders
- Small graphic details
- Different heading treatments

Do not repeat the same layout simply for consistency.

Consistency should come from the design language, not identical compositions.

---

## Spacing

Prefer responsive spacing:

```css
clamp(...)
```

Use generous negative space when it improves hierarchy and readability.

Avoid arbitrary spacing values when an existing pattern can be reused.

---

## Borders & Shadows

Prefer subtle hairline borders:

```css
1px solid var(--color-border);
```

Avoid shadows by default.

If a shadow is necessary, keep it subtle.

---

## Buttons & Links

Current interaction styles include:

- Primary Button
- Secondary Link
- Text Link

General principles:

- Clear hierarchy
- Small transitions
- No heavy shadows
- Purposeful hover states

Typical motion:

```css
transform: translateX(4px);
transform: translateY(-2px);
```

Animations should support interaction without competing with content.

---

## Component Architecture

### `components/common/`

Reusable UI components.

Current examples:

```text
SectionContainer
SectionHeading
InfoCard
SectionDivider
ScrollToTopButton
```

A component belongs in `common/` when it has genuine reuse across the application.

### `components/layout/`

Structural components:

```text
Header
Footer
```

### `components/sections/`

Page-specific sections.

Example:

```text
sections/
└── home/
    ├── Hero/
    ├── IntroSection/
    ├── LessonsPreview/
    ├── BeyondClassroom/
    ├── MethodPreview/
    ├── TestimonialsPreview/
    └── FinalCTA/
```

Do not create abstractions for hypothetical future use.

---

## Reusable Components

### SectionContainer

Purpose:

Provide consistent page width and horizontal spacing.

### SectionHeading

Purpose:

Provide a reusable heading structure when appropriate.

Possible props:

```text
eyebrow
title
description
maxWidth
align
```

Do not force every section to use it.

### InfoCard

Purpose:

Reusable information card.

Content should be received through props rather than hardcoded into the component.

### SectionDivider

Purpose:

Optional editorial separation.

Use only when it contributes to the composition.

### ScrollToTopButton

Purpose:

Provide quick navigation back to the top on long pages.

---

## Responsive Strategy

Development order:

```text
Desktop
↓
Tablet
↓
Mobile
```

Each major section should be checked across breakpoints before being considered complete.

Responsive design may change:

- Layout
- Scale
- Spacing
- Alignment
- Content flow

Mobile should not simply be a smaller desktop.

---

## Code Conventions

### Components

PascalCase:

```text
MethodPreview
SectionContainer
ScrollToTopButton
```

### CSS Modules

camelCase:

```text
primaryButton
headingColumn
imagePlaceholder
```

### Component Structure

```text
ComponentName/
├── ComponentName.jsx
└── ComponentName.module.css
```

### Import Order

1. External libraries
2. Components
3. Assets
4. CSS Module

---

## Before Creating a Component

Ask:

1. What is its purpose?
2. Does it improve the user journey?
3. Is it page-specific or genuinely reusable?
4. Does a component already exist that solves this?
5. Does the design introduce enough visual variation from the previous section?

Then build.

---

## Reuse in Future Projects

This Design System is project-specific, but some principles can become the foundation of a reusable starter.

Good candidates for future reuse:

- Project structure
- CSS token architecture
- SectionContainer
- Responsive strategy
- Component conventions
- Accessibility patterns
- Button/link interaction patterns
- Development workflow

Do **not** blindly reuse:

- Brand colors
- Typography
- Editorial treatments
- Page layouts
- Thaís-specific components

Reuse the **system**, not the visual identity.