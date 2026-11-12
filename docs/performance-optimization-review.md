# Focused performance optimization review

Local implementation only. No commit, push or deployment. Existing uncommitted work was preserved. No frontend dependencies or architecture changes were introduced.

## Actual size changes

| Item | Before | After |
| --- | ---: | ---: |
| Production directory | 15.26 MB | 10.44 MB |
| Emitted fonts | 2.398 MB / 10 TTFs | 0.894 MB / 7 WOFF2s |
| Favicon | 770,439 bytes, PNG mislabeled SVG | 4,502 bytes, correctly labeled 64×64 PNG |
| Home 960px photograph | 270,962 bytes | 193,978 bytes |
| About hero selected at 390px/DPR 2 | 417,610-byte 2560px image | 118,704-byte 1440px image |
| Largest Lessons hero | 771,186 bytes | 578,172 bytes |

The new responsive candidates add files intentionally while reducing the bytes needed for an individual viewport. All image processing is deterministic resizing/encoding; no artwork was generated. ICC profiles were retained during WebP encoding. The approved social-sharing image, images/home/hero-thais-1680.webp, is byte-identical to the original.

## Controlled mobile comparison

Both saved before and optimized production builds were served locally by the same server, using identical Brotli compression settings. Chrome: 390×844, DPR 2, 1.6 Mbps download, 150ms latency, 4× CPU slowdown, disabled browser cache and a 15-second observation window. These are single cold-cache lab runs, not Lighthouse scores, field measurements or deployed improvements.

| Route | FCP before → after | LCP before → after | Transfer before → after | Observed CLS before → after |
| --- | --- | --- | --- | --- |
| Home | 1.600s → 1.060s | 7.776s → 4.864s | 1,802,139 → 852,407 bytes | 0.00412 → 0.00412 |
| About | 0.996s → 0.992s | 9.340s → 4.484s | 2,190,368 → 971,575 bytes | 0.00630 → 0.00630 |

Initial compressed font transfer changed from 656,182 to 533,448 bytes on Home, and 897,565 to 727,712 bytes on About under this server configuration. Production hosting compression can yield different transfer values.

## Implementation

- Favicon: resized the existing brand artwork, preserved transparency, centered it on a 64×64 canvas, removed the mislabeled original and changed the HTML reference to image/png.
- Fonts: losslessly converted the seven faces used by the website. Font-family names, declared weights/styles and font-display remain unchanged. Verified matching complete character maps, glyph order, horizontal advance metrics and all variable-font axes. Confirmed English and Portuguese accented characters in all seven faces. No subsetting was performed.
- Removed 187 TTF files only after checking that application references had been replaced or were absent: seven converted sources and 180 unused variants. Retained license/readme files. Bodoni Moda and Italiana declarations were removed because those families had no application usage. Conversion tools were installed temporarily under /private/tmp, outside the repository; package.json and lockfile are unchanged.
- Responsive photographs: high-quality re-encoding of the eight largest applicable active sources; new candidates for Home, About and below-fold photography. About gains a 1440px candidate; Home and Lessons gain 1200px/1280px candidates. Existing object-fit, object-position and crop/container rules remain unchanged.
- Verified LCP images on Home, About, Lessons and Brazilian Soul remain eager and now use fetchPriority="high". Below-fold images remain lazy. Added intrinsic dimensions and corresponding auto-height rules where needed to retain the loaded layout while reserving space.
- Removed four images confirmed absent from application/metadata references: images/about/about-lifestyle.jpg, images/home/about-hero.jpg, images/about/about-pandeiro-1536.webp and images/social/portuguese-with-thais-social.jpg. The approved social image remains present and unchanged.
- Added one small shared near-viewport hook for the two embeds. Spotify mounts within 300px of its reserved 352px player container. Cal.com is deferred on a generic booking-page visit; selected-plan and #booking arrivals load immediately. The existing JavaScript bootstrap, detached mount cleanup, namespace reuse, event URLs and duplicate-embed fix remain in place.

## Files changed in this pass

- frontend/index.html
- frontend/public/favicon.svg removed; frontend/public/favicon.png added
- frontend/src/styles/fonts.css and the font assets under frontend/src/assets/fonts/
- frontend/src/hooks/useNearViewport.js added
- frontend/src/components/sections/home/Hero/Hero.jsx
- frontend/src/components/sections/home/BeyondClassroom/BeyondClassroom.jsx
- frontend/src/pages/About/sections/AboutHero/AboutHero.jsx
- frontend/src/pages/About/sections/AboutStory/AboutStory.jsx
- frontend/src/pages/Lessons/Lessons.jsx and Lessons.module.css
- frontend/src/pages/BrazilianSoul/sections/BrazilianSoulHero/BrazilianSoulHero.jsx and BrazilianSoulHero.module.css
- frontend/src/pages/BrazilianSoul/sections/MusicSection/MusicSection.jsx and MusicSection.module.css
- frontend/src/pages/BookLesson/sections/BookingEmbed/BookingEmbed.jsx
- Optimized/generated WebP files in public/images/home/, public/images/about/ and public/images/lessons/
- Four unused images listed above removed
- docs/performance-optimization-review.md

## Verification

- Production build and git diff --check.
- Before/after comparisons of all six routes at 320px, 768px and 1440px. No horizontal overflow, missing images or font loading errors. Every heading height matched exactly. No image width/height difference exceeded one pixel of resize rounding.
- Reviewed representative Home, About and Lessons screenshots. Seven WOFF2 faces loaded successfully with Portuguese/English test text. Complete source character coverage, glyph order, advance widths and variable axes were verified programmatically.
- All application image references resolve. The social portrait SHA-256 matches the before snapshot.
- Spotify initial iframe count 0; near viewport 1. Generic booking entry initially creates neither Cal script nor iframe. All five selected plans produce exactly one correct iframe and one shared script. Three SPA route returns retain one Trial iframe. Cross-route hash navigation and focus offset passed.
- The temporary preview server serves the favicon as image/png and fonts as font/woff2, based on the actual file formats/extensions.

## Remaining review

- Throttled mobile LCP is substantially better but still above 2.5 seconds in these tests. Preserved full-coverage variable fonts still transfer about 533–728 KB on the measured routes. Large high-resolution photo candidates remain available where the crop/pixel density needs them.
- Confirm final appearance on real iOS Safari/Android Chrome, including font rendering and photographic detail, before publishing. The existing manually verified Cal.com payment/confirmation requirements still apply; no payment was submitted.
- The optimized files are not deployed. Re-run the production measurements and MIME/cache checks after an authorized release. The current Vercel site retains its prior assets until then.
