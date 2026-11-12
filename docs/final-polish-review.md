# Final pre-launch polish review

Local changes only. No commit, push, deployment, payment or DNS change was performed. Earlier uncommitted work was preserved.

## Implemented

- Active navigation uses aria-current="page" with a subtle desktop underline/accent and mobile italic/accent. The booking action also indicates its active state. Route matching handles case and trailing slashes; scroll and drawer behavior are unchanged.
- Every internal trial-booking CTA points to /book-a-lesson?plan=trial#booking. This includes Home, About's Begin Your Journey section, both Lessons trial links, the Placement Test result, Method's Ready to Experience It section, and Brazilian Soul. Previously correct Home FAQ/final links remain correct. General Book a Lesson navigation and Cal.com's explicit external-calendar fallback retain their existing behavior. Single Session and package integrations are unchanged.
- Five film/series assets were moved to public/images/brazilian-soul/films/. The Kids AVIF was moved to public/images/lessons/kids-reading.avif. Application references were updated.
- Both obsolete classroom files, public/images/lessons/kids.jpeg and public/images/method/method-class.jpeg, were byte-identical and had no remaining repository references; both were removed. No unrelated assets were removed.
- Moved assets retain their original bytes and visual quality. They range from about 32–356 KB; another lossy compression pass was not warranted. The favicon remains at the public root.
- Added og:site_name to initial HTML and React metadata. OG and Twitter descriptions are consistently 125 characters and no longer get overwritten by the longer SEO descriptions. Main SEO descriptions, titles, canonical domain and approved white-shirt Home portrait are preserved. No SSR/prerendering was introduced.

## Files changed in this pass

- frontend/index.html
- frontend/src/components/common/RouteMetadata/RouteMetadata.jsx
- frontend/src/components/common/RouteMetadata/metadataConfig.js
- frontend/src/components/layout/Header/Header.jsx
- frontend/src/components/layout/Header/Header.module.css
- frontend/src/components/sections/home/Hero/Hero.jsx
- frontend/src/pages/About/sections/AboutClosing/AboutClosing.jsx
- frontend/src/pages/Lessons/Lessons.jsx
- frontend/src/pages/Lessons/sections/PlacementTest/PlacementTest.jsx
- frontend/src/pages/Method/sections/MethodCTA/MethodCTA.jsx
- frontend/src/pages/BrazilianSoul/sections/BrazilianSoulCTA/BrazilianSoulCTA.jsx
- frontend/src/pages/BrazilianSoul/cultureData.js
- docs/final-polish-review.md

Asset moves, relative to frontend/public/:

- central-do-brasil.jpg → images/brazilian-soul/films/central-do-brasil.jpg
- cidade-de-deus.jpg → images/brazilian-soul/films/cidade-de-deus.jpg
- bacurau.jpg → images/brazilian-soul/films/bacurau.jpg
- coisa-mais-linda.jpg → images/brazilian-soul/films/coisa-mais-linda.jpg
- que-horas-ela-volta.jpeg → images/brazilian-soul/films/que-horas-ela-volta.jpeg
- diversas-criancas-lendo-livros_53876-138029.jpg.avif → images/lessons/kids-reading.avif

Removed obsolete duplicates, relative to frontend/public/:

- images/lessons/kids.jpeg
- images/method/method-class.jpeg

## Checks passed

- All six routes at 320px, 768px and 1440px: correct active desktop/mobile link, expected active styling, no horizontal overflow or broken images.
- Static and React social metadata: og:site_name present; OG description length remains 125 on every route; approved image path retained.
- All nine internal trial CTAs, including the conditional Placement Test result link: Trial preselected, booking section scrolled into view, one correct Cal.com trial iframe and one script after repeated SPA navigation.
- Direct booking URL, browser Back and normalized /ABOUT/ active matching.
- Focused browser run recorded no JavaScript exceptions.
- Production build and git diff --check.

## Unresolved external verification

The intended URL remains https://portuguesewiththais.com/images/home/hero-thais-1680.webp. Its source asset exists unchanged and is included in the production build. However, the public HTTPS request timed out during this review. Public/deployed accessibility cannot yet be confirmed while DNS is in progress, and no alternative deployment URL was supplied or invented.

After DNS and the authorized deployment are ready, verify the image returns HTTP 200 publicly, then check actual social-preview cropping/caches. Initial HTML serves Home metadata to non-JavaScript crawlers; individual-route metadata remains client-side. Existing manual Cal.com payment verification remains a separate pre-launch check; no payment was submitted here.
