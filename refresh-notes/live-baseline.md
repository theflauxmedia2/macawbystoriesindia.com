# Live baseline — Macaw by Stories

Recorded 2026-09-27 from the live site (not from git). Production domain: `https://macawbystoriesindia.com`.

## Stack

| Item | Value |
| --- | --- |
| Framework | Vite 5 + React 18 + TypeScript SPA (`react-router-dom` 6) |
| UI | Tailwind CSS 3 + shadcn/ui |
| Package manager | npm (`package-lock.json`, newer than leftover `bun.lockb`) |
| Local Node | v24.17.0 (no `engines` field, no `.nvmrc`) |
| Hosting | Hostinger (`platform: hostinger`, `panel: hpanel`, `server: hcdn`). Static files. `public/.htaccess` SPA fallback is copied into `dist` on build. `vercel.json` exists but is not what serves production. |
| Tests | None |
| Env vars | None. No `.env` files. Production build does not need `.env.local`. |

## Git vs what is actually live

`origin/main` is `ead31fe` (2026-06-10, "revamped the whole website"). Hostinger `last-modified` on HTML, CSS, and sitemap is **2026-07-29**.

The Jul 29 deploy is **not fully committed**. Live JavaScript and the homepage JSON-LD use ReserveGo:

- Bengaluru: `https://widget.reservego.co/reserveOutlets/64aa45b4c0fd5976db46b060`
- Chennai: `https://widget.reservego.co/reserveOutlets/66adf33263849f246eb22c00`

Committed `main` still points reservations at `webbook.wegsoft.com`. Those ReserveGo edits were sitting uncommitted in the working tree and were stashed before this branch was cut (`stash@{0}`: "wip: uncommitted reservego booking changes"). The live sitemap `lastmod` dates (`2026-07-29`) match that stash, not `main` (`2026-06-10`).

`main` on this branch's parent is therefore **not byte-identical to production**. Pushing or deploying `main` as committed would roll reservations back to Wegsoft.

## Redirects

| Request | Result |
| --- | --- |
| `http://macawbystoriesindia.com/` | 301 → `https://macawbystoriesindia.com/` |
| `http://macawbystoriesindia.com` | 301 → `https://macawbystoriesindia.com/` |
| `http://www.macawbystoriesindia.com/` | 301 → `https://www.macawbystoriesindia.com/` |
| `https://www.macawbystoriesindia.com/` | **200** (does not redirect to apex). Rendered canonical is `https://macawbystoriesindia.com` |
| `https://macawbystories.com/` and `https://www.macawbystories.com/` | 403 from Cloudflare (not this site) |
| Trailing slash (`/about-us/`, `/contact/`) | HTTP 200. Rendered canonical has **no** trailing slash |
| `/blog` | HTTP 200. Client `<Navigate>` to `/media`. Rendered canonical `https://macawbystoriesindia.com/media` |
| `/events` | HTTP 200. Client `<Navigate>` to `/packages`. Rendered canonical `https://macawbystoriesindia.com/packages` |
| Unknown path | HTTP **200** (SPA rewrite). After JS: 404 screen, `noindex, nofollow`, canonical `https://macawbystoriesindia.com/404` |

Canonical host style: **non-www**. Inner pages: **no trailing slash**. Homepage is mixed: the HTML shell and sitemap use `https://macawbystoriesindia.com/`; client JS rewrites the homepage canonical to `https://macawbystoriesindia.com` (no slash).

No `noindex` on any content page. The only `noindex` is the client 404 for unknown URLs.

## robots.txt (live)

```
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

Sitemap: https://macawbystoriesindia.com/sitemap.xml
Host: macawbystoriesindia.com
```

## sitemap.xml (live)

HTTP 200, `content-type: application/xml`. URLs (all `https://macawbystoriesindia.com`, no trailing slash except homepage):

- `/` (lastmod 2026-07-29)
- `/about-us`
- `/locations`
- `/gallery`
- `/packages`
- `/chennai-packages`
- `/media`
- `/contact`
- `/media/blog/5-must-try-cocktails-at-macaw` (lastmod 2024-01-15)
- `/media/blog/behind-the-design-the-story-of-our-tropical-paradise` (2024-01-12)
- `/media/blog/how-to-host-the-perfect-corporate-event-in-bangalore` (2024-01-10)
- `/media/blog/spotlight-on-our-signature-sushi-platters` (2024-01-08)
- `/media/blog/weekend-vibes-best-times-to-visit-macaw-chennai` (2024-01-05)
- `/media/blog/the-art-of-rooftop-entertainment` (2024-01-03)

`/blog` and `/events` are client redirects and are not in the sitemap.

## HTML shell (every route, before JS)

Hostinger serves the same `index.html` for all app routes.

| Field | Value |
| --- | --- |
| HTTP | 200 `text/html` |
| Title | Macaw by Stories — Rooftop Bar & Fine Dining in Bangalore & Chennai |
| Description | Macaw by Stories — iconic rooftop bars in Bengaluru (AECS Layout) and Chennai (OMR). Signature cocktails, live DJs, fine dining & nightlife. Book your table today. |
| Canonical | `https://macawbystoriesindia.com/` |
| Robots | `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1` |
| H1 | none in the shell |

## Rendered pages (after JS)

Values below are what a browser shows. Titles and H1s are set client-side.

| Path | HTTP | Title | Description | Canonical | H1 | Robots |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 200 | Rooftop Bar & Fine Dining in Bangalore & Chennai \| Macaw by Stories | Macaw by Stories — iconic rooftop bars in Bengaluru (AECS Layout) and Chennai (OMR). Signature cocktails, live DJs, fine dining & nightlife. Book your table today. | `https://macawbystoriesindia.com` | Macaw: Two Cities,One Iconic Nightlife Vibe | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/about-us` | 200 | About Us — Rooftop Dining & Nightlife Brand \| Macaw by Stories | Discover the story behind Macaw by Stories — tropical luxury meets urban sophistication across rooftop venues in Bengaluru and Chennai. Craft cocktails, live music & unforgettable vibes. | `https://macawbystoriesindia.com/about-us` | About Macaw by Stories | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/locations` | 200 | Locations — Bangalore (AECS Layout) & Chennai (OMR) Rooftop \| Macaw by Stories | Visit Macaw by Stories in Bengaluru (AECS Layout, Hosur Road) and Chennai (Sholinganallur, OMR). Rooftop dining, cocktails, live music & nightlife. Get directions and reserve. | `https://macawbystoriesindia.com/locations` | Our Locations | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/gallery` | 200 | Gallery — Rooftop Ambience, Food & Nightlife Photos \| Macaw by Stories | Explore Macaw by Stories through photos — rooftop ambience, signature cocktails, gourmet food, DJ nights and celebration moments at our Bengaluru and Chennai venues. | `https://macawbystoriesindia.com/gallery` | Gallery | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/packages` | 200 | Bengaluru Celebration & Event Packages \| Macaw by Stories | Macaw by Stories Bengaluru event packages from ₹1099/person. Curated appetizers, mains, mocktails & desserts for birthdays, corporate events & group celebrations. Min 25 guests. | `https://macawbystoriesindia.com/packages` | Celebration Packages | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/chennai-packages` | 200 | Chennai Celebration Packages — Coming Soon \| Macaw by Stories | Exciting celebration packages coming soon to Macaw by Stories Chennai (Sholinganallur, OMR). Contact us for private dining, corporate events & group bookings. | `https://macawbystoriesindia.com/chennai-packages` | Coming Soon | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/media` | 200 | Media, Press & Blog — News & Stories \| Macaw by Stories | Latest press coverage, media features and blog stories from Macaw by Stories. News from The Hindu, Economic Times & more about our Bangalore and Chennai rooftops. | `https://macawbystoriesindia.com/media` | Media & Press | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/media/blog/5-must-try-cocktails-at-macaw` | 200 | 5 Must-Try Cocktails at Macaw \| Macaw by Stories | Discover our signature cocktails that perfectly capture the essence of tropical luxury and urban sophistication. | `https://macawbystoriesindia.com/media/blog/5-must-try-cocktails-at-macaw` | 5 Must-Try Cocktails at Macaw | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/media/blog/behind-the-design-the-story-of-our-tropical-paradise` | 200 | Behind the Design: The Story of Our Tropical Paradise \| Macaw by Stories | Take a journey through the creative process behind our stunning rooftop designs that blend nature with luxury. | `https://macawbystoriesindia.com/media/blog/behind-the-design-the-story-of-our-tropical-paradise` | Behind the Design: The Story of Our Tropical Paradise | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/media/blog/how-to-host-the-perfect-corporate-event-in-bangalore` | 200 | How to Host the Perfect Corporate Event in Bangalore \| Macaw by Stories | Planning a corporate event? Discover why Macaw Bangalore is the perfect venue for business celebrations. | `https://macawbystoriesindia.com/media/blog/how-to-host-the-perfect-corporate-event-in-bangalore` | How to Host the Perfect Corporate Event in Bangalore | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/media/blog/spotlight-on-our-signature-sushi-platters` | 200 | Spotlight on Our Signature Sushi Platters \| Macaw by Stories | Explore the artistry behind our Japanese-inspired cuisine that perfectly complements our tropical ambiance. | `https://macawbystoriesindia.com/media/blog/spotlight-on-our-signature-sushi-platters` | Spotlight on Our Signature Sushi Platters | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/media/blog/weekend-vibes-best-times-to-visit-macaw-chennai` | 200 | Weekend Vibes: Best Times to Visit Macaw Chennai \| Macaw by Stories | From sunset sessions to late-night DJ sets, discover the perfect time to experience our Chennai location. | `https://macawbystoriesindia.com/media/blog/weekend-vibes-best-times-to-visit-macaw-chennai` | Weekend Vibes: Best Times to Visit Macaw Chennai | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/media/blog/the-art-of-rooftop-entertainment` | 200 | The Art of Rooftop Entertainment \| Macaw by Stories | Learn about our approach to creating unforgettable entertainment experiences across both locations. | `https://macawbystoriesindia.com/media/blog/the-art-of-rooftop-entertainment` | The Art of Rooftop Entertainment | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |
| `/contact` | 200 | Contact & Table Reservations — Bangalore & Chennai \| Macaw by Stories | Book a table at Macaw by Stories — rooftop dining, cocktails & nightlife in Bengaluru and Chennai. Call, WhatsApp or enquire for reservations, private dining & corporate events. | `https://macawbystoriesindia.com/contact` | Contact Us | index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1 |

## Code baseline (`main` @ `ead31fe`, before this branch's commits)

- `npm ci`: succeeded. npm reported 14 vulnerabilities (1 low, 7 moderate, 6 high) and a deprecated `glob@10.5.0` warning.
- `npm run lint`: **fails**. 3 errors, 9 warnings.
  - Errors: `src/components/ui/command.tsx` and `src/components/ui/textarea.tsx` (`no-empty-object-type`); `tailwind.config.ts` (`no-require-imports`).
  - Warnings: react-hooks/exhaustive-deps in `PageHead.tsx` and `events-preview.tsx`; react-refresh/only-export-components in several shadcn files.
- `npm run build`: **succeeds** (Vite 5.4.21).
- Tests: none.

## Secrets scan

Working tree and full git history (8 commits): no `.env` files, no private keys, no AWS/Stripe/GitHub/Slack/Supabase/Firebase/SMTP secrets. The only filename match was `src/vite-env.d.ts` (Vite types, not a secret).

Public IDs in source (not secrets, do not rotate as credentials): Google tag `AW-17708633902` in `index.html`; ReserveGo outlet IDs in the live bundle.

## Forms

Contact form (`src/pages/Contact.tsx`) opens WhatsApp (`wa.me`) to the location phone. It does not post to an API. Table booking on the **live** site opens ReserveGo. Committed `main` still uses Wegsoft plus a WhatsApp booking modal.
