# Final pre-launch implementation review

Local implementation only. No commit, push, deployment, payment, or DNS change was performed.

This approved request supersedes the older Google Calendar/Stripe plan and the previous restriction on activating package event links in PROJECT_CONTEXT.md and earlier reviews. Cal.com payment settings still need manual verification before publication.

## Features

- A solid warm-cream mobile drawer with numbered serif navigation, dividers, booking action, WhatsApp contact, close button and dimmed backdrop. Native modal dialog provides focus containment and makes the background inert. Escape, backdrop, navigation and close button dismiss it. Background scrolling is locked; short screens scroll inside the drawer. Desktop navigation retains its existing layout.
- A passive scroll listener with requestAnimationFrame updates the sticky header's transform. A 10px direction threshold avoids jitter; the header stays visible near the top, while the drawer is open, and for keyboard focus.
- Entrance animations run only when headings, paragraphs and cards enter the viewport. Content is visible before enhancement, remains visible afterward, and keyboard focus cancels active entrances. The existing Placement Test is excluded.
- Continuous scroll-linked movement on the Home portrait, Home Beyond the Classroom photograph and About hero image only. Geometry reads precede CSS writes, offscreen images are ignored, and no animation frame loop continues after scrolling stops. Containers clip the images without changing layout dimensions. Desktop hover uses a separate subtle scale. Reduced-motion changes cancel entrances, reset image transforms and disable smooth scrolling/transitions.
- Local images integrated for all five existing film/series cards: Central do Brasil, Cidade de Deus, Que Horas Ela Volta?, Bacurau and Coisa Mais Linda. Titles, years, levels and descriptions are preserved. Intrinsic image dimensions, lazy loading and meaningful alt text are included; posters use contain sizing to preserve their artwork.
- All six existing book titles link safely to Amazon.com search results using the exact title and author, without affiliate parameters.
- Home and Lessons pricing titles route to /book-a-lesson?plan=single|flow|pace|mastery#booking. Trial remains the default. A labeled selector supports all five approved events; unknown values fall back to Trial. One shared Cal.com script and one iframe are retained through selection changes and route returns.
- Packages explicitly disclose that the full payment covers 4, 8 or 12 lessons, that only the first lesson is booked in the calendar, and that remaining sessions are arranged directly with Thais during the first meeting. This appears above the calendar and external booking link. WhatsApp is available for questions.
- Verified existing automatic footer year and existing static Open Graph/Twitter metadata. Both use the exact approved white-shirt Home portrait at /images/home/hero-thais-1680.webp and absolute URLs under https://portuguesewiththais.com. No social-photo replacement or domain change was made.
- No PDF, new assessment, dependencies or animation libraries added. Existing Placement Test and approved content/pricing are preserved outside the requested booking/navigation additions.

## Files changed in this pass

All component paths below are relative to frontend/src/.

- components/layout/Header/Header.jsx and Header.module.css
- components/common/ScrollReveal/ScrollReveal.jsx and ScrollReveal.module.css
- components/sections/home/Hero/Hero.jsx and Hero.module.css
- components/sections/home/BeyondClassroom/BeyondClassroom.jsx
- pages/About/sections/AboutHero/AboutHero.jsx
- components/sections/home/PricingPreview/PricingPreview.jsx
- pages/Lessons/Lessons.jsx
- pages/BookLesson/bookingPlans.js (new)
- pages/BookLesson/sections/BookingEmbed/BookingEmbed.jsx and BookingEmbed.module.css
- pages/BookLesson/sections/BookingFlow/BookingFlow.jsx
- pages/BrazilianSoul/cultureData.js
- pages/BrazilianSoul/sections/CinemaSection/CinemaSection.jsx and CinemaSection.module.css
- pages/BrazilianSoul/sections/LiteratureSection/LiteratureSection.jsx and LiteratureSection.module.css
- index.css
- docs/prelaunch-review.md (this report, relative to repository root)

The five supplied film image files were used in place, without modifying them. The workspace also contains uncommitted changes from the preceding approved passes; those were preserved.

## Verification performed

- Production Vite build and git diff --check.
- All six routes at 320px, 768px and 1440px: no horizontal overflow, broken images or missing alt attributes in the checked images.
- Drawer at 320px and 768px with a 480px-high viewport: solid background, internal scrolling, scroll lock, Enter activation, focus containment, Escape and focus return, backdrop click, navigation close and scroll restoration.
- Correct event iframe URL for every plan at all three widths; exactly one iframe for each selection. Verified prices of Trial €25, Single €40, Flow €150, Pace €280 and Mastery €400 in the selector/configuration.
- Three repeated SPA route returns to booking under React StrictMode: one iframe and one shared script each time. Verified Home/Lessons plan links, selected-plan navigation, browser Back and invalid-plan fallback.
- Package count/disclosure and ordering before the direct booking link.
- Scroll-linked transform changes, a stable transform when scrolling stops, simulated touch scrolling, header down/up/top behavior and reduced motion (no image transform or active entrance animations).
- All five film images loaded; all six Amazon search queries matched the displayed title and author and used safe new-tab attributes.
- Focused browser regression recorded no JavaScript exceptions. The footer uses new Date().getFullYear().

## Manual checks and client dependencies

1. **Before publication, manually verify all Cal.com payment configurations, especially packages.** Confirm €25/€40/€150/€280/€400 amounts, EUR currency, that each package charges once for all included lessons, availability, timezone handling, confirmation emails and Google Meet details. Test the paid flow with Thais; no payment was submitted during this work. The frontend does not track credits or schedule remaining lessons automatically.
2. Domain purchase is pending. After purchase and authorized connection, verify HTTPS, all six direct routes, canonical URLs and the absolute social asset URL. No claim is made that the production domain is active.
3. Initial HTML includes Home sharing metadata for crawlers that do not run JavaScript. React supplies route-specific metadata after loading; distinct static previews for individual routes require prerendering or server rendering. Check actual WhatsApp/Open Graph/Twitter previews after publication, including platform-specific portrait cropping and caches. A local 1200×630 center-crop preview retains her face and white shirt but trims the top of her hair; the exact approved portrait is retained without generating an alternate image.
4. Complete final visual approval on real iOS Safari and Android Chrome, including drawer transition, touch scrolling, keyboard/screen-reader navigation and Cal.com's cross-origin form. Automated checks used desktop Chrome with responsive/touch emulation.
5. Confirm usage rights for the supplied Kids AVIF before publication, as flagged in the earlier approved pass.

All film assets were confidently matched. No missing image or event URL requires clarification. Release remains dependent on payment verification, domain purchase and final manual approval.
