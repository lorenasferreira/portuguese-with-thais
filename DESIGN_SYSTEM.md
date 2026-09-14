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
--color-background
--color-surface
--color-text
--color-text-light
--color-border
````

---

## Typography

Current font roles:

```css
--font-body
--font-heading
--font-accent
```

Use:

* Body font for paragraphs, UI, navigation and clean headings
* Heading serif for editorial moments and quotes
* Accent font for selected words and expressive highlights

Do not use the same serif treatment on every heading.

Hierarchy should also come from:

* Scale
* Weight
* Spacing
* Color
* Layout

---

## Layout

Use `SectionContainer` for consistent width and horizontal spacing.

Sections should feel connected without looking identical.

Create variation through:

* Photography
* Grids
* Negative space
* Borders
* Asymmetry
* Different heading treatments
* Background changes

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

## Core Principles

Before building or changing a section, ask:

1. Does it improve the user journey?
2. Does it fit the visual identity?
3. Is it visually distinct enough from the surrounding sections?
4. Can an existing component already solve it?
5. Does it work across desktop, tablet and mobile?

Reuse the system, not the exact visual identity, in future projects.