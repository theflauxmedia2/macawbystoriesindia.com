# Open ends — Macaw by Stories

<!--
Tracked by Flaux HQ. Rules:
- One item per line: "- [ ] text #tags"
- Priority tags: #high #medium #low (default medium)
- Other tags allowed: #mobile #blog #homepage etc.
- When fixed: tick it "- [x]" or delete the line, in the same commit as the fix.
- Or write "closes OE: <item text>" in the commit message.
- Keep the section headings exactly as they are.
-->

## Bugs
- [ ] Footer "Menu" still points at `/#menu`, but `MenuPreview` is not rendered on the homepage in `src/pages/Index.tsx`, so the link goes nowhere #medium #homepage
- [ ] Footer Facebook and Twitter icons, plus Privacy Policy, Terms of Service, and Careers, still use `href="#"` in `src/components/ui/footer.tsx` #medium
- [ ] Contact map iframes in `src/pages/Contact.tsx` use placeholder embed URLs ending in `4v1234567890` #high #contact
- [ ] `https://www.macawbystoriesindia.com/` returns HTTP 200 and does not redirect to the apex host. The canonical is the apex. This needs a Hostinger redirect #medium
- [ ] Unknown URLs return HTTP 200 from Hostinger because every path rewrites to `index.html`. The 404 screen adds `noindex` only after JavaScript #medium

## SEO
- [ ] `/chennai-packages` is a short coming-soon page (H1 is "Coming Soon") and is thin for Chennai celebration-package queries #medium #chennai
- [ ] There is no standalone page for "rooftop bar AECS Layout Bangalore" or "rooftop bar Sholinganallur OMR" beyond the shared `/locations` page #medium
- [ ] Every URL's first HTML response is the homepage shell until JavaScript runs, because this is a Vite SPA with no prerender #medium
- [ ] ESLint 10 was reverted. `eslint-plugin-react-hooks` 7 flags existing effects in `hero-section.tsx`, `carousel.tsx`, `sidebar.tsx`, and `use-mobile.tsx` #low

## Client inputs needed
- [ ] Confirm one Bengaluru street address. Footer says JP Nagar 560078 in `src/components/ui/footer.tsx`, schema says AECS Layout Bommanahalli 560068 in `src/components/seo/siteConfig.ts`, and the contact page says Hosur Service Road, Singasandra #high #locations
- [ ] Confirm one Chennai street address. Footer and schema say Sholinganallur 600119. The contact page says OMR Road, Thoraipakkam 600097 #high #contact
- [ ] Confirm opening hours. The contact page says Mon–Thu to 11:30 PM and Fri–Sun to 12:00 AM. Schema says Bengaluru until 1:00 AM and Chennai until 11:30 PM, daily #high #locations
- [ ] Confirm whether the unpublished menu prices in `src/components/ui/menu-preview.tsx` (for example Macaw's Paradise at ₹850) are real before that section is shown #high #homepage
- [ ] Provide Facebook and Twitter/X URLs if those profiles exist. Confirmed Instagram accounts are instagram.com/macawbystories and instagram.com/macawchennai #medium
- [ ] Provide privacy policy and terms text. The footer links have no pages #medium
- [ ] Provide careers text, or confirm the Careers link should be removed #low
- [ ] Provide a logo SVG. The current mark is `public/lovable-uploads/aeb86edc-b26e-4db4-a52f-ce91f9aa64d1.png` #low
- [ ] Provide Google Business Profile access for the Bengaluru and Chennai outlets #medium
- [ ] Provide Hostinger or DNS access if www should 301 to `https://macawbystoriesindia.com` #medium
- [ ] Confirm the Bengaluru package prices on `/packages` are still current (from ₹1099 per person, minimum 25 guests) #medium #packages

## Features to build
- [ ] The menu block in `src/components/ui/menu-preview.tsx` is not mounted on the homepage #medium #homepage
- [ ] The events carousel is commented out in `src/pages/Index.tsx`. The data in `src/components/ui/events-preview.tsx` is dated January 2024 #low #homepage
- [ ] Privacy policy, terms, and careers pages do not exist #medium

## Content
- [ ] Chennai celebration packages still say coming soon in `src/pages/ChennaiPackages.tsx` #medium #chennai
- [ ] The six blog posts in `src/pages/BlogDetail.tsx` are dated January 2024. Do not rewrite them until the client supplies updates #low #blog
- [ ] No testimonials are published on the site #low

## Performance & accessibility
- [ ] npm audit still has 1 high (vite <=6.4.2; the fix is Vite 8) and 3 moderate (React Router 6 open-redirect fixes need React Router 7). Do not upgrade until approved #high
- [ ] React 18 to 19 and Tailwind CSS 3 to 4 were not upgraded #medium
- [ ] No `engines.node` or `.nvmrc`. Hostinger serves the static `dist` upload and does not publish a Node version. This refresh was built with Node v24.17.0 #medium
- [ ] Google Fonts still request Cinzel 400–700 and Montserrat 300–700 from `index.html` #low
- [ ] Gallery and media images are sized in CSS and do not all set width and height attributes #low
- [ ] Seven `react-refresh/only-export-components` warnings remain in shadcn files: `badge.tsx`, `button.tsx`, `form.tsx`, `navigation-menu.tsx`, `sidebar.tsx`, `sonner.tsx`, `toggle.tsx` #low

## Launch & infra
- [ ] Merge and deploy `refresh-2026` only after review. Production must keep serving `main` until that merge #high
- [ ] Relink Hostinger from `theflauxmedia/macawbystories.com` to the new GitHub repo, with the production branch still `main` #high
- [ ] Submit `https://macawbystoriesindia.com/sitemap.xml` in Google Search Console and confirm the property is verified #medium
- [ ] Analytics check: `index.html` contains Google Ads tag `AW-17708633902` only. No GA4 measurement ID is in the repo. Confirm whether GA4 is intentionally absent #medium
- [ ] On production, submit the contact form and confirm WhatsApp opens for Bengaluru `918068507673` and Chennai `918045883769`. The form does not send email #medium #contact
- [ ] On production, open both ReserveGo booking links from the nav (Bengaluru outlet `64aa45b4c0fd5976db46b060`, Chennai outlet `66adf33263849f246eb22c00`) #medium
- [ ] Add uptime monitoring for `https://macawbystoriesindia.com` #medium
