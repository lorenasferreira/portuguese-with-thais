# Portuguese with Thais — Project Context

## Status

Project in final development stage.

Most pages, content and visual refinements are complete.

Current priorities before final delivery:

- Booking + payment flow
- Final client review
- Final images/content adjustments
- Automated testing
- Responsive QA
- SEO basics
- Favicon
- Production launch

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

---

## Main Routes

```text
/
/about
/lessons
/method
/the-brazilian-soul
/book-a-lesson
````

Testimonials and FAQ currently live inside the Home experience rather than dedicated pages.

---

## Main Features

### Home

Includes:

* Hero
* Brand introduction
* Lessons preview
* Beyond the Classroom
* Testimonials
* Method preview
* Pricing
* FAQ
* Final CTA

### About

Covers:

* Thaís' background
* Brazilian roots
* Teaching journey
* Teaching philosophy
* Cultural interests
* Student testimonial
* Final CTA

### Lessons

Current lesson formats:

* One-on-One
* Kids
* CELPE-Bras preparation

Pricing:

* Single Session — $40
* Flow — 4 lessons/month — $150
* Pace — 8 lessons/month — $305
* Mastery — 12 lessons/month — $460
* Trial — $25 / 50 min

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

Score and level calculation happen locally in the frontend.

No backend is required.

### Method

Teaching approach based on:

* Conversation
* Grammar
* Cultural knowledge

### The Brazilian Soul

Editorial cultural page connecting Portuguese with Brazilian:

* Music
* Literature
* Film
* Everyday language
* Culture

Includes Spotify integration.

### Book a Lesson

Page structure exists.

Final booking and payment integration is still pending.

Preferred flow:

```text
Choose availability
↓
Book lesson
↓
Pay
↓
Receive confirmation
↓
Google Meet
```

Google Calendar Appointment Schedule + Stripe is the preferred solution if supported by the client's Google account.

---

## Client Review

Thaís should review the current version before final delivery.

Pending client input may include:

* Final image replacements
* Final content corrections
* WhatsApp number
* Google Calendar booking configuration
* Domain purchase decision

Image replacements should specify:

```text
Page
Section
Replacement image
```

Not every image needs to feature Thaís.

Relevant alternatives include:

* Teaching photos
* Students
* Pandeiro
* Cultural imagery
* Classroom moments
* Travel/lifestyle photos

---

## Domain

Custom domain is optional and separate from development.

The domain should:

* Be purchased in Thaís' own account
* Remain registered in her name
* Renew annually using her payment method

DNS configuration and Vercel connection can be handled during final setup.

---

## Final Technical Work

Before production delivery:

* Finish booking flow
* Test payment flow
* Add favicon
* Review metadata
* Review image alt text
* Test direct routes on Vercel
* Test desktop
* Test tablet
* Test mobile
* Test navigation
* Test Placement Test logic
* Remove placeholders
* Remove dead CSS
* Check broken links
* Run final accessibility and performance review

---

## Testing

Automated tests should be introduced before final delivery.

Priority test areas:

* Placement Test scoring
* CEFR level calculation
* Navigation
* Important CTA behavior
* Booking-related logic when implemented

The goal is to verify functionality without manually repeating every user flow.

---

## Architecture Principles

* CSS Modules
* Reusable components only when repetition is real
* Page-specific sections may stay inside their page folders
* Avoid unnecessary abstractions
* Use shared design tokens
* Desktop → Tablet → Mobile
* Keep images inside `public/images/`
* Keep business logic separate from visual presentation when practical

---

## Documentation

```text
README.md
PROJECT_CONTEXT.md
ROADMAP.md
docs/client-feedback.md
frontend/DESIGN_SYSTEM.md
```

---

## Resume From Here

Next development session:

```text
1. Booking + Stripe / Google Calendar
2. Automated tests
3. Final client feedback
4. QA
5. Favicon + SEO
6. Production delivery
```

Do not add new features before the current V1 is delivered unless they are required to complete the agreed user journey.