# IASO MD — clinic website

Marketing site for **IASO MD**, a physician-led Korean dermatology and Direct
Primary Care clinic. Built with [Astro](https://astro.build) (static output) and
[Tailwind CSS v4](https://tailwindcss.com), deployed to GitHub Pages by GitHub
Actions on every push to `main`.

No JavaScript frameworks, no jQuery. The whole site ships roughly 3 KB of inline
script: a mobile menu toggle, a scroll-reveal observer, and a hero parallax —
all three disabled automatically when the visitor prefers reduced motion.

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
├─ .github/workflows/deploy.yml   Build + deploy on push to main
├─ public/                        Copied to the site root verbatim
│  ├─ CNAME                       "iasomd.com" — the custom domain
│  ├─ .nojekyll                   Stops GitHub Pages running Jekyll
│  ├─ robots.txt
│  ├─ logo.png                    Header/footer logo (logo.svg wins if present)
│  ├─ favicon.ico / favicon-32.png / apple-touch-icon.png / og-image.png
│  └─ videos/                     skin.mp4, dpc.mp4
├─ src/
│  ├─ data/site.ts                ← ALL COPY AND PLACEHOLDERS LIVE HERE
│  ├─ layouts/BaseLayout.astro    <head>, SEO, JSON-LD, header/footer, scripts
│  ├─ components/                 Header, Footer, Logo, Section, Button, PageHeader
│  ├─ sections/                   The ten page sections
│  ├─ pages/                      index, services, membership, contact, waitlist, 404
│  ├─ assets/hero.png             Hero background (optimized at build time)
│  └─ styles/global.css           Brand tokens, focus states, motion rules
└─ CONTENT-CHECKLIST.md           Every placeholder still to be filled in
```

The home page carries all ten sections as anchors (`#about`, `#services`,
`#membership`, `#how-dpc-works`, `#gallery`, `#testimonials`, `#faq`, `#contact`,
`#waitlist`). Services, Membership, Contact, and Waitlist *also* exist as their
own routes so each has its own title, meta description, and shareable URL.

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

## How the auto-deploy works

`.github/workflows/deploy.yml` runs on every push to `main` (and on demand from
the Actions tab):

1. **Build** — `withastro/action@v3` installs dependencies, runs `astro build`,
   and uploads `dist/` as a Pages artifact.
2. **Deploy** — `actions/deploy-pages@v4` publishes that artifact to GitHub Pages.

Watch it under the repository's **Actions** tab. A typical deploy takes about a
minute. If a build fails, the previous version stays live.

## GitHub Pages settings

One-time setup, in the repository on GitHub:

1. **Settings → Pages → Build and deployment → Source**: choose
   **GitHub Actions**. (Not "Deploy from a branch" — that ignores this workflow.)
2. **Settings → Pages → Custom domain**: enter `iasomd.com` and save.
3. Tick **Enforce HTTPS** once the certificate has been issued (this can take up
   to an hour after DNS resolves).

`public/CNAME` keeps the custom domain set on every deploy, so a build can never
silently reset it.

## Custom domain — read this before launch

**`iasomd.com` currently resolves through Cloudflare, not GitHub Pages.** As of
the last check its nameservers are `surina.ns.cloudflare.com` /
`brian.ns.cloudflare.com` and it serves from Cloudflare proxy IPs. Until the DNS
below is changed, this site will deploy successfully but the custom domain will
keep serving whatever Cloudflare points at.

In the **Cloudflare dashboard → DNS** for `iasomd.com`:

1. Delete the existing `A` records for the apex (`@`).
2. Add these four `A` records for `@`, each set to **DNS only** (grey cloud, not
   the orange proxy cloud):

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   Optionally add the matching `AAAA` records: `2606:50c0:8000::153`,
   `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
3. Add a `CNAME` for `www` → `jackkim1991.github.io`, also **DNS only**.
4. If a Cloudflare Pages project or Worker route is currently bound to
   `iasomd.com`, remove that binding — otherwise it keeps intercepting requests.

The proxy must stay off: with the orange cloud enabled, GitHub cannot issue or
renew the Let's Encrypt certificate for the domain and "Enforce HTTPS" will not
become available.

Propagation usually takes minutes, occasionally up to an hour. Verify with:

```bash
nslookup iasomd.com
```

You should see the `185.199.*` addresses.

## Accessibility

Built to WCAG 2.1 AA. Worth knowing if you edit the styles:

- **Gold `#C9A227` on the off-white background measures 2.2:1 and fails AA at any
  size.** It is used only decoratively — hairline rules, borders, and icons that
  carry no meaning on their own. For gold-toned *text* on a light background use
  the `gold-deep` token (`#7A5F12`, 5.5:1).
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
