# Portuguese with Thais — Design System

A concise reference for maintaining visual and code consistency across the project.

---

## Visual Direction

The brand should feel:

- Editorial
- Contemporary
- Warm
- Cultural
- Human
- Premium without feeling corporate
- Brazilian without clichés

Avoid:

- Generic template layouts
- Excessive shadows
- Excessive rounded cards
- Obvious tourism imagery
- Repeating the same visual treatment across sections

---

## Colors

Tokens are defined in:

`src/styles/variables.css`

Use design tokens instead of hardcoded colors whenever possible.

Main tokens:

```css
--color-primary
--color-primary-dark
--color-accent
--color-accent-hover
--color-accent-text
--color-background
--color-surface
--color-text
--color-text-light
--color-border
```

### Accent usage

Bright yellow `#f2b84b` is an important visual accent and may be used for decorative elements and where contrast is sufficient.

For small text on light backgrounds, use the accessible mustard token:

```css
--color-accent-text: #8c671a;
```

This treatment was reviewed and approved by the client.

Do not change accessible colors back to brighter variants without checking WCAG contrast.

---

## Typography

Current font roles:

```css
--font-body
--font-heading
--font-accent
```

Use:

- Body font for paragraphs, UI, navigation and clean headings
- Heading serif for editorial moments and quotes
- Accent font for selected words and expressive highlights

Do not use the same serif treatment on every heading.

Hierarchy should also come from scale, weight, spacing, color and layout.

---

## Layout

Use `SectionContainer` for consistent width and horizontal spacing.

Sections should feel connected without looking identical.

Create variation through:

- Photography
- Grids
- Negative space
- Borders
- Asymmetry
- Different heading treatments
- Background changes

Consistency should come from the design language, not repeated layouts.

---

## Spacing

Prefer responsive spacing with:

```css
clamp(...)
```

Use generous space when it improves hierarchy and readability.

---

## Borders & Shadows

Prefer subtle borders:

```css
1px solid var(--color-border);
```

Avoid heavy shadows.

Use shadows only when they improve separation or usability.

---

## Buttons & Links

Keep interactions simple and clear.

Typical motion:

```css
transform: translateX(4px);
transform: translateY(-2px);
```

Hover effects should support interaction without distracting from content.

Maintain visible keyboard focus states for interactive elements.

---

## Images

Production photography has been optimized to WebP.

Use:

- Responsive `srcSet` for major hero images when available
- Eager loading for important above-the-fold hero imagery
- `loading="lazy"` for below-the-fold imagery
- Existing optimized derivatives instead of archived original files

Do not unnecessarily reintroduce large original photographs into `public/images/`.

The social sharing image is separate from regular page photography.

---

## Component Structure

Reusable components:

```text
src/components/common/
```

Layout components:

```text
src/components/layout/
```

Home sections:

```text
src/components/sections/home/
```

Page-specific sections:

```text
src/pages/PageName/sections/
```

Standard component structure:

```text
ComponentName/
├── ComponentName.jsx
└── ComponentName.module.css
```

Do not create abstractions for hypothetical future use.

---

## Responsive Strategy

Build and review in this order:

```text
Desktop
↓
Tablet
↓
Mobile
```

Mobile should be intentionally adapted, not simply scaled down.

Important QA widths currently include:

```text
320px
375px
768px
1024px
1440px
```

Avoid page-wide horizontal overflow.

---

## Accessibility

Maintain:

- WCAG-compatible text contrast
- Keyboard-accessible interactions
- Visible focus states
- Semantic expanded/collapsed states
- Reduced-motion behavior where applicable
- Appropriate image alt text

Accessibility fixes already implemented should not be reverted only for visual preference without reviewing their impact.

---

## Code Conventions

Components:

```text
PascalCase
```

CSS Modules:

```text
camelCase
```

Import order:

1. External libraries
2. Components
3. Assets
4. CSS Module

---

## QA Workflow

Codex is used as a development and QA assistant for audits, repetitive fixes, responsive testing and regression checks.

For significant changes:

```text
Inspect
↓
Implement
↓
Lint + Build
↓
Browser QA
↓
Manual review
↓
Commit
```

Do not let automated fixes override intentional design decisions without manual review.

---

## Core Principles

Before building or changing a section, ask:

1. Does it improve the user journey?
2. Does it fit the visual identity?
3. Is it visually distinct enough from the surrounding sections?
4. Can an existing component already solve it?
5. Does it work across desktop, tablet and mobile?
6. Does it preserve accessibility and performance?

Reuse the system, not the exact visual identity, in future projects.