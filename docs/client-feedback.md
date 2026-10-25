# Client Feedback & Future Ideas

This document stores client requests, ideas and possible future features that are not part of the current V1 unless explicitly moved into scope.

---

# Current Client Dependencies

The project is currently paused pending client input.

Before final delivery, Thaís still needs to provide or confirm:

- Final booking and payment solution
- Google Calendar Appointment Schedule configuration
- Stripe configuration, if continuing with the preferred automated flow
- Final booking destination/integration details
- Remaining About page review, if any
- Any final content or image corrections

Development should not expand into new features while these dependencies are pending.

---

# Booking & Payment

## Preferred Flow

The preferred V1 solution remains:

```text
Choose lesson / package
↓
Choose available time
↓
Pay securely
↓
Booking confirmed
↓
Google Meet / confirmation

Google Calendar Appointment Schedule + Stripe remains the preferred solution if the client's account supports the required setup.
Stripe should handle the payment checkout and sensitive payment information rather than implementing a custom payment backend.
Possible Fallback
If the automated flow cannot be completed for V1, the minimum viable fallback is:
Choose lesson / package
↓
Contact Thaís
↓
Thaís handles availability and payment manually
WhatsApp Business can be used with a pre-filled message corresponding to the selected lesson or package.
Other contact methods may also remain available through the Footer.
A custom booking/payment backend is not included in the current V1 scope.
Free PDF / Lead Capture
Thaís is preparing a downloadable PDF/resource.
Two different implementations should be distinguished:
Simple Download
The website can provide a button that directly downloads or opens the PDF.
This does not require a backend or email collection system.
Email Capture
If users must submit their email before receiving the PDF, the email needs to be stored and managed somewhere.
The current project does not include a custom backend/database for lead collection.
A third-party service such as Brevo or another email/lead-capture platform would therefore need to be configured by the client before integration.
This is not required for V1 delivery unless separately agreed.
Portuguese Conversation Club
Idea
Create a small-group Portuguese conversation club for advanced learners who want regular speaking practice.
Possible Format
Online conversation sessions
Around 40 minutes
Weekly or biweekly
Small groups
Topics related to Brazil, culture and everyday life
Focus on speaking practice rather than traditional private lessons
Possible group setup:
1 group of up to 10 students
or 2 groups of around 5 students
Possible Pricing
Around $15 per session
or around $30/month
Open Decisions
Final group size
Session frequency
Session duration
Per-session or monthly payment
Fixed recurring group or individual booking
One group or multiple levels
Extra materials
Community space such as WhatsApp or Discord
Product Direction
This should be treated as a separate offer from private lessons.
It may become its own section or page in a future version of the website.
Status
Future idea.
Not part of the current V1.
Scope Reminder
Do not add new features before V1 delivery unless they are necessary to complete the agreed user journey.
Potential future additions currently outside V1 include:
Conversation Club
Lead capture / newsletter automation
Paid digital materials
Downloadable resources requiring automation
Additional languages
New lesson products
Admin area
Custom booking backend
Custom payment backend
Further automation

E no `PROJECT_CONTEXT.md` eu colocaria uma seção nova **antes de `Resume From Here`**:

```md
## Development & QA Workflow

Codex is now used inside VS Code as a development and QA assistant.

It can be used for:

- Repository audits
- Code review
- Responsive browser QA
- Chrome testing across multiple viewport sizes
- Accessibility checks
- Console and React warning checks
- Lint and production build validation
- Image audits and optimization
- Repetitive implementation tasks
- Regression checks after changes

### Workflow

For significant changes:

```text
1. Define one focused task
2. Ask Codex to inspect before modifying when appropriate
3. Limit which files/features it may change
4. Explicitly protect unfinished or out-of-scope areas
5. Let Codex implement
6. Run lint/build/browser QA
7. Review the result manually
8. Check git status/diff
9. Commit only after approval
Codex should not automatically commit or push unless explicitly requested.
For audits, prefer:
Inspect → report → approve → implement → validate → manual review → commit
Avoid combining unrelated fixes into one Codex task.
Current QA Status
A substantial pre-launch QA pass has already been completed with Codex.
Completed checks/improvements include:
Production build validation
ESLint validation
Responsive Chrome QA
320px narrow-screen testing
Desktop/tablet/mobile overflow fixes
Mobile navigation keyboard behavior
Placement Test keyboard focus
Testimonial control accessibility
FAQ semantic accessibility
WCAG text contrast improvements
Reduced-motion/autoplay improvements
Route-specific metadata
Canonical URLs
Open Graph metadata
Twitter sharing metadata
Dedicated 1200×630 social sharing image
Image optimization
Responsive image sources
Lazy loading for below-the-fold images
The main optimized image batch reduced the largest production image derivatives by approximately 80% compared with their original source files.
Original high-resolution source photographs replaced by optimized WebP derivatives were archived outside the production project rather than deleted permanently.
Remaining QA
Do not repeat the entire completed audit unnecessarily.
After booking/payment is implemented:
Test the complete booking journey
Test payment flow
Test confirmation behavior
Check Booking page responsiveness
Check Booking accessibility
Run final lint
Run final production build
Run final Chrome regression QA
Check all routes and CTAs
Check broken links
Perform final production-domain verification

E mudaria o final de `PROJECT_CONTEXT.md` de `Resume From Here` para:

```md
## Current Pause Point

The project is paused pending client input.

Do not continue adding features while waiting.

When development resumes:

```text
1. Receive final booking/payment configuration from Thaís
2. Integrate booking flow
3. Complete remaining client feedback
4. Test booking/payment end-to-end
5. Run final regression QA with Codex
6. Update README for the completed project
7. Connect custom domain
8. Receive final approval/payment
9. Production delivery
10. Final release commit/tag
The README should be updated only when the final booking implementation and production structure are known.

E o `ROADMAP.md` também precisa de uma atualização pequena, porque senão na próxima conversa ele vai me dizer que ainda faltam coisas que **já fizemos**. Eu marcaria como concluídos agora:

```md
# Phase 6 — Final QA 🚧

- [x] Test desktop
- [x] Test tablet
- [x] Test mobile
- [x] Test narrow 320px viewport
- [x] Test navigation
- [x] Test Placement Test interactions
- [x] Check image loading
- [x] Check responsive overflow
- [x] Check console errors / React warnings
- [x] Accessibility improvements
- [x] Optimize production images
- [x] Add responsive image sources
- [x] Add below-the-fold lazy loading
- [ ] Test final booking flow
- [ ] Test final payment flow
- [ ] Final regression QA after booking implementation
- [ ] Final broken-link check on production domain
E:
# Phase 7 — SEO & Polish 🚧

- [x] Add favicon
- [x] Add route-specific page titles
- [x] Add meta descriptions
- [x] Add canonical URLs
- [x] Add Open Graph metadata
- [x] Add Twitter sharing metadata
- [x] Add 1200×630 social sharing image
- [x] Accessibility contrast review
- [x] Responsive QA
- [x] Performance image optimization
- [ ] Final image alt-text review
- [ ] Final accessibility regression after Booking
- [ ] Final production-domain metadata/share preview verification