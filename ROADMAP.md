# Portuguese with Thais — Roadmap

## Current Status

Project is in the final development stage and currently **paused pending client input**.

Most development, content, visual refinement, responsive work, accessibility and SEO setup are complete.

Main remaining functional milestone:

- Booking + payment integration

---

# Phase 1 — Foundation ✅

- [x] React + Vite setup
- [x] GitHub repository
- [x] Project structure
- [x] Visual direction
- [x] Local fonts
- [x] CSS Modules
- [x] Design System
- [x] Reusable shared components

---

# Phase 2 — Main Pages ✅

- [x] Home
- [x] About
- [x] Lessons
- [x] Method
- [x] The Brazilian Soul
- [x] Book a Lesson structure
- [x] Header
- [x] Footer
- [x] Route navigation
- [x] Scroll to Top
- [x] Scroll Reveal

Testimonials and FAQ are included in Home instead of dedicated pages.

---

# Phase 3 — Content & Client Feedback ✅

- [x] Brand direction approved
- [x] Main lesson formats confirmed
- [x] Pricing confirmed
- [x] About content implemented
- [x] Testimonials implemented
- [x] Student names/countries updated
- [x] Placement Test content implemented
- [x] Main photography added
- [x] Social links added
- [x] WhatsApp Business added
- [x] Major visual feedback applied
- [x] Main client revision round completed

Still open:

- [ ] Remaining client feedback, if any
- [ ] Final content/image corrections, if requested
- [ ] Final booking decision/configuration
- [ ] Domain purchase and connection

---

# Phase 4 — Learning Experience ✅

- [x] 30-question Placement Test
- [x] A1–C2 scoring logic
- [x] Local frontend score calculation
- [x] Result screen
- [x] Responsive quiz interface
- [x] Keyboard focus improvements
- [x] Browser interaction QA
- [x] Score/result boundary checks during QA

A dedicated automated test suite is not currently configured.

Final regression testing can be completed together with the Booking implementation.

---

# Phase 5 — Booking & Payment 🚧

- [x] Book a Lesson page structure
- [ ] Finalize Google Calendar Appointment Schedule
- [ ] Configure lesson availability
- [ ] Configure Google Meet / confirmation flow
- [ ] Finalize Stripe configuration
- [ ] Connect Calendar + Stripe
- [ ] Connect final booking flow to site
- [ ] Test successful booking
- [ ] Test payment flow
- [ ] Test confirmation flow

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

This phase is currently blocked by client configuration.

If the preferred integration cannot be completed, a simpler manual contact flow may be used as the V1 fallback.

---

# Phase 6 — Technical QA ✅

Completed with Codex + manual review:

- [x] Lint
- [x] Production build
- [x] Desktop QA
- [x] Tablet QA
- [x] Mobile QA
- [x] 320px narrow-screen QA
- [x] Main routes tested
- [x] Navigation tested
- [x] Mobile menu tested
- [x] Main CTAs tested
- [x] FAQ interactions tested
- [x] Placement Test interactions tested
- [x] Testimonial controls tested
- [x] Horizontal pricing carousel tested
- [x] Horizontal overflow audit
- [x] Console error / React warning checks
- [x] Responsive image loading checks

Final regression still required after Booking:

- [ ] Test Booking flow
- [ ] Test payment flow
- [ ] Test confirmation flow
- [ ] Test all final production links
- [ ] Final broken-link check
- [ ] Final placeholder check
- [ ] Final regression QA

---

# Phase 7 — Accessibility, SEO & Performance ✅

## Accessibility

- [x] Mobile navigation keyboard behavior
- [x] Escape/focus handling
- [x] Placement Test focus management
- [x] Larger testimonial interaction targets
- [x] Testimonial pause/resume behavior
- [x] Reduced-motion behavior
- [x] FAQ collapsed-answer semantics
- [x] WCAG contrast review
- [x] Accessible mustard accent approved by client

## SEO & Sharing

- [x] Favicon
- [x] Route-specific page titles
- [x] Meta descriptions
- [x] Canonical URLs
- [x] Open Graph metadata
- [x] Twitter sharing metadata
- [x] Dedicated 1200×630 social-sharing image

## Performance

- [x] Production image audit
- [x] Convert major photography to WebP
- [x] Responsive hero image variants
- [x] Lazy loading below the fold
- [x] Intrinsic image dimensions
- [x] Retina-aware About hero
- [x] Browser image-selection QA

Major optimized production images were reduced by approximately 80%.

Remaining final checks:

- [ ] Review final image alt text
- [ ] Verify metadata after custom domain connection
- [ ] Verify real social-link preview after domain launch

---

# Phase 8 — Production & Delivery 🚧

- [ ] Receive final client booking configuration
- [ ] Complete Booking integration
- [ ] Complete final regression QA
- [ ] Update README
- [ ] Client purchases `portuguesewiththais.com`
- [ ] Connect custom domain to Vercel
- [ ] Verify production deployment
- [ ] Verify metadata/social sharing on production domain
- [ ] Receive final client approval
- [ ] Receive remaining project payment
- [ ] Deliver final project
- [ ] Create final release commit/tag

---

# Future Scope

Not part of current V1 unless separately agreed:

- Portuguese Conversation Club
- Paid digital materials
- Email-gated downloadable resources
- Newsletter / email marketing integration
- Additional languages
- New lesson products
- Admin area
- Custom backend/database
- Further automation
- New content sections

---

# Development Workflow

Codex is now part of the development/QA workflow.

Preferred process:

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

Do not let Codex commit or push automatically unless explicitly requested.

For large or visual changes, inspect/review before committing.

---

# Next Step

Project is paused until Thaís provides the required Booking/Stripe/Google Calendar information.

Resume with:

1. Complete Booking + payment integration
2. Test Booking/payment end-to-end
3. Apply any remaining client feedback
4. Run final regression QA
5. Update README
6. Connect `portuguesewiththais.com`
7. Production verification
8. Client approval + final payment
9. Final delivery
10. Release commit/tag

Do not add new V1 features while waiting for the Booking dependency.