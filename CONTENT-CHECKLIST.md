# Content checklist

Everything the site still needs from you. Almost all of it lives in one file:
**`src/data/site.ts`**. Search that file for the bracketed text and replace it.

Items marked **BLOCKER** should be resolved before the site goes in front of
patients.

---

## Blockers

| What | Where | Notes |
| --- | --- | --- |
| **BLOCKER** Physician name | `physician.name`, `trust.credentials` | Appears in the About section, the Trust block, and the schema.org data. The previous site said *Jin Bum (Jack) Kim, MD* — confirm the form you want published. |
| **BLOCKER** Board certification | `physician.credentials`, `trust.credentials` | Advertising a specialty you are not board-certified in is a licensing problem in most states. |
| **BLOCKER** Supervising physician + license | `legal.supervising` | Required for advertising compliance. |
| **BLOCKER** Street address, city, ZIP | `contact.*` | Also feeds the map link and the LocalBusiness schema. |
| **BLOCKER** Phone + email | `contact.phone`, `contact.phoneHref`, `contact.email` | With no form backend, these are the only ways to reach you. `phoneHref` is digits only, e.g. `tel:+12065550100`. |
| **BLOCKER** Enrollment fee | `care.enrollment` → `[ENROLLMENT_FEE]` | |
| **BLOCKER** Founding rate, Couple and Family | `careTiers[].founding` | Individual is set at $99. Matching that 23% discount would be roughly **$183** Couple and **$229** Family — your call. |
| **BLOCKER** Opening month and year | `site.openingStatus`, `comingSoon.body` → `[MONTH YEAR]` | |

## Pricing and program details

- `[13–14]` / `[16–18]` — member and non-member neurotoxin price per unit (`glow.includes`)
- `[12]` — how many months Glow credit rolls over (`glow.includes`)
- `[LENGTH]` — length of the first Care visit, in minutes (`careSteps`)
- `[N]` — panel cap, and the durations quoted in gallery captions

## Washington direct practice registration

`trust.waRegistration` is `null`, which hides the registration line entirely.
Once the Office of the Insurance Commissioner approves the practice under
RCW 48.150, set it to the finished sentence, for example:

```ts
waRegistration: 'Registered Washington Direct Practice (RCW 48.150) — March 2027',
```

Do not publish that line before the registration is granted.

## Copy still to write

- `physician.philosophy[2]` — one or two sentences in your own voice on why you started IASO MD
- Six service descriptions — `services[].summary`, each marked `[DESCRIPTION — …]`
- Three FAQ answers — concierge vs DPC, panel size, opening timeline
- Three `[REVIEW]` quotes in `trust.reviews` and three `[TESTIMONIAL]` quotes in `testimonials`

Reviews and testimonials must be real and attributable. Fabricated patient
reviews are an FTC matter, not just a taste question.

## Images

| Asset | Where | Spec |
| --- | --- | --- |
| Corrected logo | `public/mark.svg` | **Commissioned.** Icon only, no wordmark — the site sets "IASO MD" in type beside it. Drop the file in `/public` and it is picked up automatically. Also ask for `lockup-horizontal.svg`, `lockup-stacked.svg`, and ink/cream single-colour variants. |
| Physician headshot | `public/headshot.jpg` | 4:5 portrait, 800×1000 or larger |
| Before/after photos | `src/sections/Gallery.astro` | **Never publish a patient photo without a signed media release.** |
| Hero background | `src/assets/hero.png` | Overwrite, keep the filename; Astro re-optimizes it |

After replacing the logo, run `npm run icons` to regenerate the favicon set and
the social card.

## Social

`[INSTAGRAM URL]`, `[FACEBOOK URL]`, `[LINKEDIN URL]` in `contact.social`.
Delete any row you are not going to use — an empty social link is worse than
none.

## Forms

There is **no form backend wired up**. The waitlist is a "coming soon" panel and
the contact section points at your email and phone. See *Turning the forms back
on* in the README when you are ready.

---

## Verify before launch

- [ ] A Washington healthcare attorney has reviewed the Care agreement, the Glow terms, and the HSA framing
- [ ] The HSA claim still matches current IRS guidance (Notice 2026-05 caps: $150/mo individual, $300/mo for more than one person, indexed after 2026)
- [ ] Family at $299 and the 65+ rate at $149 both remain under the $300 and $150 caps
- [ ] Direct practice registration filed with the WA Office of the Insurance Commissioner
- [ ] Every published review is real, attributable, and consented to
