# IASO MD — clinic website

Marketing site for **IASO MD**, a physician-led Korean aesthetics and Direct
Primary Care clinic. Built with [Astro](https://astro.build) (static output) and
[Tailwind CSS v4](https://tailwindcss.com), built and deployed by **Cloudflare
Pages** on every push to `main`. Live at <https://iasomd.com>.

No JavaScript frameworks, no jQuery, no GSAP. The site ships about 24 KB of
JavaScript in total, most of it Lenis. Everything else is a few inline scripts:
a mobile menu toggle, hash-free in-page navigation, a scroll-reveal fallback,
and the hero parallax.

### The four motion moments

Motion is deliberately limited to four effects, all of them transform and
opacity only, so they run on the compositor rather than the main thread:

1. **Hero settle** — headline and CTA fade up 12 px over 600 ms on load
2. **Section reveal** — content fades up 16 px on entry, siblings staggered 60 ms
3. **Gold hairline draw** — dividers scale from zero to full width over 800 ms
4. **Hover lift** — cards and buttons rise 2 px, 140 ms, pointer devices only

Where the browser supports `animation-timeline: view()` the reveals are driven
natively by CSS with no JavaScript at all — an inline script stamps
`html.css-scroll` and the IntersectionObserver fallback stands down. Lenis
smooth scroll loads only on desktop pointer devices.

**Every one of these is off** when the visitor prefers reduced motion, and
nothing is ever parked at `opacity: 0` — elements are only hidden after a script
has confirmed it can reveal them again. The page is fully readable with
JavaScript disabled.

---

## Run it locally

You need [Node.js](https://nodejs.org) 18.20 or newer (20+ recommended).

```bash
npm install
npm run dev
```

Then open **<http://localhost:4321>**. Saving any file reloads the browser.

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server at `localhost:4321` |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally, exactly as it will deploy |
| `npm run icons` | Regenerate the favicons and social card from `public/logo.png` |

## Project structure

```
├─ (no CI config — Cloudflare Pages builds from main)
├─ public/                        Copied to the site root verbatim
│  ├─ robots.txt
│  ├─ logo.png                    Header/footer logo (logo.svg wins if present)
│  ├─ favicon.ico / favicon-32.png / apple-touch-icon.png / og-image.png
│  └─ videos/                     skin.mp4, dpc.mp4
├─ src/
│  ├─ data/site.ts                ← ALL COPY AND PLACEHOLDERS LIVE HERE
│  ├─ layouts/BaseLayout.astro    <head>, SEO, JSON-LD, header/footer, scripts
│  ├─ components/                 Header, Footer, Logo, Section, Button
│  ├─ sections/                   The ten page sections
│  ├─ pages/                      index, 404
│  ├─ assets/hero.png             Hero background (optimized at build time)
│  └─ styles/global.css           Brand tokens, focus states, motion rules
└─ CONTENT-CHECKLIST.md           Every placeholder still to be filled in
```

### One page, clean URLs

The site is a **single continuous page**: every nav item scrolls to a section, so
you never land somewhere that runs out of content halfway down.

Links keep real `href="/#services"` anchors — they work with JavaScript off, and
they can be opened in a new tab — but a click is intercepted and turned into a
scroll, so **the address bar stays `iasomd.com` with no `#fragment`**. If a URL
does arrive carrying a hash (an old `/services` link, a shared deep link), the
page scrolls to that section on load and then strips the hash.

The trade-off: you cannot copy a link to a specific section out of the address
bar. If you ever want that back, delete the in-page navigation script in
`src/layouts/BaseLayout.astro` and anchors will behave normally.

`/services`, `/membership`, `/contact`, and `/waitlist` existed as separate
routes in an earlier build. They are now redirects (declared in
`astro.config.mjs`) to the matching section, marked `noindex`, and kept out of
the sitemap, so old links and any search-engine entries still land correctly.

## The two membership tracks

The pricing section is deliberately split into two blocks that never merge:

- **IASO Care** — Direct Primary Care. $129 / $239 / $299 per month, $149 for
  members 65 and over, founding rate held for life on every tier. HSA-eligible.
- **IASO Glow** — aesthetics. A flat $199 per month banked as credit. Billed
  separately, not HSA-eligible.

This is a legal constraint, not a layout preference. Under IRS Notice 2026-05 a
direct primary care service arrangement must cover **primary care only** to stay
HSA-qualified, and Washington's direct practice statute (RCW 48.150) draws the
same line. Folding a cosmetic service into the Care fee would put the HSA
treatment of the whole fee at risk.

What Care members *can* receive without crossing that line: medical dermatology,
an annual skin-health consultation, member rates on Glow services, and priority
booking. A discount is a price, not a service the fee purchases.

Every Care tier sits under the statutory caps — $150/month for one individual,
$300/month for an arrangement covering more than one. Family at $299 and the 65+
rate at $149 each leave **one dollar** of headroom, so re-check the caps before
ever raising them.

## Turning the forms back on

There is currently **no form backend**. The waitlist section is a "coming soon"
panel and the contact section points at your email and phone.

When you are ready to collect submissions, pick one:

**Formspree — fastest.** Create two forms at [formspree.io](https://formspree.io),
then restore a `<form action="https://formspree.io/f/YOUR_ID" method="POST">` in
`src/sections/Contact.astro`, keeping the `_gotcha` honeypot and the "do not
include medical or health information" notice. Submit the live form once and
click the confirmation email, or it stays inactive. Free tier is 50 submissions
a month.

**Cloudflare Pages Function — durable.** You are already on Cloudflare. A short
function in `functions/api/contact.ts` posting to Resend costs nothing at this
volume and keeps the data yours.

To bring the waitlist back, set `comingSoon.waitlistOpen = true` in
`src/data/site.ts` and add the form to `src/sections/ComingSoon.astro`.

**Whichever you choose:** none of these providers will sign a BAA, so the forms
must never invite clinical detail. Keep the notice, and do not add a free-text
"what brings you in?" field. Real patient communication belongs on a platform
that signs a BAA — Spruce, Hint, Elation, or Atlas MD.

## Changing text

Nearly all copy lives in **`src/data/site.ts`** — clinic details, physician bio,
services, prices, DPC steps, testimonials, FAQ, legal notices. Edit that file and
every page updates. You should rarely need to open a `.astro` file to change
words.

Start with **`CONTENT-CHECKLIST.md`**, which lists every `[PLACEHOLDER]` still on
the site and flags the ones that block launch.

## Changing images

| Image | How to replace |
| --- | --- |
| Logo | Overwrite `public/logo.png` (or add `public/logo.svg`, which takes priority), then run `npm run icons` to regenerate the favicon set and the social card. |
| Hero background | Overwrite `src/assets/hero.png`, keeping the filename. Astro re-optimizes it into responsive WebP automatically — the current 5 MB source ships as 27–111 KB. |
| Physician headshot | Save it as `public/headshot.jpg` (or `.png`/`.webp`). It replaces the placeholder frame with no code change. 4:5 portrait, 800×1000 or larger. |
| Before/after photos | Edit `src/sections/Gallery.astro` and swap the placeholder boxes for real `<img>` tags. **Never publish a patient photo without a signed media release.** |

## How the deploy works

**Cloudflare Pages serves `iasomd.com`, and it builds straight from `main`.**
There is nothing to run and nothing to click:

1. Push to `main`
2. Cloudflare Pages builds it (`npm run build` → `dist/`)
3. `iasomd.com` updates, typically in one to two minutes

Verified live: the apex domain serves this build with `/_astro/*` and
`/logo.png` resolving correctly, so the no-base-path configuration in
`astro.config.mjs` (`site: 'https://iasomd.com'`) is right for this setup — do
not add a `base`.

There is deliberately **no GitHub Actions workflow and no `public/CNAME`**. Both
existed while the site was briefly on GitHub Pages; keeping them would mean every
push triggered two competing deploys. If you ever move back, restore both.

### If a change does not appear

Filenames for CSS and JS are content-hashed, so those cache-bust themselves. The
HTML can sit in Cloudflare's edge cache for a short while.

1. Hard refresh — <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>
2. Check the build actually succeeded: Cloudflare dashboard → Workers & Pages →
   your project → **Deployments**. A failed build leaves the previous version up.
3. Still stale: Cloudflare dashboard → **Caching → Purge Everything**

## Accessibility

Built to WCAG 2.1 AA. Worth knowing if you edit the styles:

- **Gold `#C9A227` on the off-white background measures 2.2:1 and fails AA at any
  size.** It is used only decoratively — hairline rules, borders, and icons that
  carry no meaning on their own. For gold-toned *text* on a light background use
  the `gold-text` token (`#7A5F12`, 5.5:1). Secondary copy uses `neutral`
  (`#55504A`, 7.3:1) — a warm grey biased toward the accent rather than a
  default mid-grey.
- **Cormorant Garamond has extreme stroke contrast.** Below about 1.25rem its
  hairlines disappear on low-DPI screens and the type reads as broken rather
  than elegant. Display sizes only, weight 600 and up; anything smaller is Inter.
- Gold on the near-black ground measures 8.1:1 and is safe for text of any size;
  near-black on gold (the buttons) is the same 8.1:1.
- Every section is a semantic landmark, there is a skip-to-content link, focus
  rings are visible on both light and dark grounds, and the FAQ uses native
  `<details>` so it works with the keyboard and without JavaScript.
- All animation is wrapped in `prefers-reduced-motion: reduce` and switched off
  entirely for visitors who ask for that.

## Compliance notes

- The footer carries the medical disclaimer and a supervising-physician line for
  advertising compliance — fill in `legal.supervising` in `src/data/site.ts`.
- Both forms post to [Formspree](https://formspree.io) and are deliberately
  **not** a channel for health information. Each one carries the notice
  *"Please do not submit any medical or health information through this form."*
  Formspree is not HIPAA-compliant; do not remove that notice or add fields that
  would invite clinical detail.
- The before/after gallery carries a consent and results-vary notice.
