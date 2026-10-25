# Portuguese with Thais — Project Context

## Status

Project in final development stage and currently **paused pending client input**.

Most pages, content, visual refinements and technical QA are complete.

Main remaining blocker:

- Final booking + payment configuration from Thaís

Do not add new features while waiting for this dependency.

---

## Project Goal

Create a premium digital presence for Portuguese with Thais.

The website presents Brazilian Portuguese through:

- Language
- Conversation
- Culture
- Personalized learning

Visual direction:

- Editorial
- Contemporary
- Warm
- Human
- Brazilian without clichés
- Premium without feeling corporate

---

## Stack

- React 19
- Vite
- React Router DOM
- CSS Modules
- React Icons
- Vercel

No custom backend is currently part of V1.

---

## Main Routes

```text
/
/about
/lessons
/method
/the-brazilian-soul
/book-a-lesson
```

Testimonials and FAQ live inside Home.

---

## Main Features

### Home

- Hero
- Brand introduction
- Lessons preview
- Beyond the Classroom
- Testimonials
- Method preview
- Pricing
- FAQ
- Final CTA

### About

- Thaís' background
- Brazilian roots
- Teaching journey
- Teaching philosophy
- Cultural interests
- Student testimonial
- Final CTA

### Lessons

Lesson formats:

- One-on-One
- Kids
- CELPE-Bras preparation

Current pricing:

- Single Session — €40
- Flow — 4 lessons/month — €150
- Pace — 8 lessons/month — €280
- Mastery — 12 lessons/month — €400
- Trial — €25 / 50 min

### Placement Test

30-question Brazilian Portuguese placement test.

Levels:

```text
A1
A2
B1
B2
C1
C2
```

Score and CEFR level calculation happen locally in the frontend.

No backend is required.

### Method

Teaching approach based on:

- Conversation
- Grammar
- Cultural knowledge

### The Brazilian Soul

Editorial cultural page connecting Portuguese with:

- Music
- Literature
- Film
- Everyday language
- Brazilian culture

Includes Spotify integration.

### Book a Lesson

Page structure exists but final integration is intentionally unfinished.

Preferred flow:

```text
Choose lesson/package
↓
Choose availability
↓
Pay
↓
Booking confirmed
↓
Google Meet / confirmation
```

Google Calendar Appointment Schedule + Stripe remains the preferred V1 solution.

A custom booking/payment backend is outside the current scope.

---

## Booking — Current Blocker

Thaís is responsible for completing/configuring the external booking/payment accounts.

Pending clarification includes:

- Google Calendar Appointment Schedule configuration
- Stripe account access/configuration
- Connection between Calendar and Stripe
- Final booking/payment destination to integrate into the site

If this cannot be completed, a manual contact flow through WhatsApp/email may be used as the V1 fallback.

Do not rebuild the Booking page until the final flow is confirmed.

---

## Client Review

Most client feedback has already been implemented.

Current visual/content version has undergone client review.

Pending input may include:

- Remaining About review, if any
- Final booking/payment configuration
- Any last content/image correction
- Domain purchase/connection

WhatsApp Business is already included in the Footer.

---

## Domain

Planned production domain:

```text
https://portuguesewiththais.com
```

Current Vercel deployment is used during development.

Thaís should purchase the final domain in her own account and keep registration/renewal under her ownership.

DNS and Vercel connection will be handled during final production setup.

Metadata already uses the planned production domain for canonical and social-sharing URLs.

---

## SEO & Social Sharing

Implemented:

- Favicon
- Route-specific titles
- Meta descriptions
- Canonical URLs
- Open Graph metadata
- Twitter sharing metadata
- Dedicated 1200×630 social sharing image

Final production-domain verification should happen after the domain is connected.

---

## Accessibility & Responsive QA

A substantial QA pass has already been completed.

Implemented/tested:

- Desktop, tablet and mobile layouts
- 320px narrow-screen testing
- Horizontal overflow fixes
- Mobile navigation keyboard behavior
- Placement Test keyboard focus
- Testimonial controls
- Testimonial autoplay pause/reduced-motion behavior
- FAQ semantic accessibility
- WCAG text contrast improvements
- Visible focus behavior
- Chrome console / React warning checks

The accessible mustard accent treatment was reviewed and approved by Thaís.

Do not repeat the full audit unless a later implementation creates regressions.

---

## Image Performance

Production photography has been optimized to WebP.

Implemented:

- Responsive hero image variants
- `srcSet` where useful
- Lazy loading below the fold
- Eager loading for important hero images
- Intrinsic image dimensions
- High-resolution About hero variant for Retina displays

The optimized image batch reduced the major production image weight by approximately 80%.

Original high-resolution photographs replaced by WebP derivatives were archived outside the production project.

Do not reintroduce those originals into `public/images/` unless necessary.

---

## Development & QA Workflow

Codex is now used inside VS Code as a development and QA assistant.

Useful tasks include:

- Repository audits
- Code review
- Responsive Chrome QA
- Accessibility checks
- Image audits/optimization
- Lint/build validation
- Regression testing
- Repetitive implementation work

Preferred workflow:

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
Git review
↓
Commit
```

For sensitive or broad changes, ask Codex to inspect/report before modifying files.

Codex should not commit or push unless explicitly requested.

Manual visual review remains required before approving meaningful design changes.

---

## Testing

Already performed:

- ESLint
- Production builds
- Chrome responsive QA
- Placement Test interaction testing
- CEFR boundary/result checks during QA
- Navigation testing
- FAQ testing
- Testimonial interaction testing
- Metadata verification
- Image loading/selection testing

There is currently no dedicated automated test suite configured.

After Booking is implemented, prioritize regression coverage/testing for:

- Booking flow
- Payment flow
- Confirmation behavior
- Important CTAs
- Final Placement Test regression

---

## Architecture Principles

- CSS Modules
- Reusable components only when repetition is real
- Page-specific sections may stay inside their page folders
- Avoid unnecessary abstractions
- Use shared design tokens
- Desktop → Tablet → Mobile
- Production images live inside `public/images/`
- Keep business logic separate from visual presentation when practical
- Do not introduce a backend unless scope explicitly changes

---

## Documentation

```text
README.md
PROJECT_CONTEXT.md
ROADMAP.md
docs/client-feedback.md
frontend/DESIGN_SYSTEM.md
```

README should receive its final update only after Booking and the production structure are complete.

---

## Current Pause Point

The project is paused pending Thaís' booking/payment configuration.

When development resumes:

```text
1. Receive final Google Calendar / Stripe configuration
2. Integrate final booking flow
3. Apply any remaining client feedback
4. Test booking/payment end-to-end
5. Run final Codex regression QA
6. Review image alt text and final broken links
7. Update README
8. Connect portuguesewiththais.com
9. Verify production metadata/social sharing
10. Receive final client approval/payment
11. Final production delivery
12. Create final release commit/tag
```

Do not add new features before V1 delivery unless required to complete the agreed user journey.
