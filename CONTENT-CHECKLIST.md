# Content checklist — IASO MD

Everything below is a `[PLACEHOLDER]` currently on the live site. Almost all of
them live in one file: **`src/data/site.ts`**. Edit that file, save, and the whole
site updates.

To find every remaining placeholder at any time:

```bash
grep -rn "\[" src/data/site.ts
```

Items marked **LAUNCH BLOCKER** will visibly break or mislead visitors if the site
goes live without them.

---

## 1. Practice identity

| Item | Where | Status |
| --- | --- | --- |
| Clinic name — currently **IASO MD** (the old site said "IASO Medical") | `site.name`, `site.legalName` | Confirm which is legally correct |
| Tagline — "Korean skincare science, led by your physician." | `site.tagline`, and the two-line headline in `src/sections/Hero.astro` | Confirm or replace |
| `[MONTH YEAR]` opening date | `site.openingStatus` | **LAUNCH BLOCKER** |

Alternate taglines if you want to swap: *"Physician-led skin, unhurried care."* ·
*"Where Korean skincare meets your primary care."* · *"Healing, refined."*

## 2. Physician

| Item | Where |
| --- | --- |
| `[PHYSICIAN NAME], MD` — the old site says **Jin Bum (Jack) Kim, MD** (kept in `physician.knownName`); set `physician.name` to the form you want published | `physician.name` |
| `[BOARD CERTIFICATION]` — e.g. "Board-Certified in Family Medicine" | `physician.credentials` |
| `[STATE MEDICAL LICENSE #]` | `physician.license` |
| `[RESIDENCY PROGRAM]` | `physician.residency` |
| `[ADD ONE OR TWO SENTENCES IN YOUR OWN VOICE…]` — why you started IASO MD | `physician.philosophy[2]` |
| Professional headshot — save as `public/headshot.jpg` (or `.png`/`.webp`) and it replaces the placeholder frame automatically. Aim for a 4:5 portrait, at least 800×1000. | `public/` |

## 3. Contact / NAP — **LAUNCH BLOCKER**

These feed the footer, the contact page, **and** the `MedicalClinic` schema.org
block that Google reads, so wrong values here propagate.

| Item | Where |
| --- | --- |
| `[STREET ADDRESS, SUITE]`, `[CITY]`, `[ZIP]` (state is already `WA`) | `contact.streetAddress`, `.addressLocality`, `.postalCode` |
| `[PHONE]` (display) and `[PHONE-DIGITS]` (the `tel:` link, e.g. `tel:+12065550100`) | `contact.phone`, `contact.phoneHref` |
| `[EMAIL]` | `contact.email` |
| `[STREET ADDRESS, CITY, WA ZIP]` for the directions link | `contact.mapQuery` |
| Opening hours — four rows, all bracketed | `contact.hours` |
| `[MAP EMBED]` — the map is a styled placeholder box; drop in a Google Maps iframe once the address is public | `src/sections/Contact.astro` |
| `[INSTAGRAM URL]`, `[FACEBOOK URL]`, `[LINKEDIN URL]` — delete any row you will not use | `contact.social` |

## 4. Forms — **LAUNCH BLOCKER**

Create two forms at <https://formspree.io> and paste their IDs. Until you do,
both forms post to `https://formspree.io/f/[FORM_ID]` and **submissions are
lost**. A reminder shows in `npm run dev` but never in production.

| Item | Where |
| --- | --- |
| `[FORM_ID]` — contact form | `forms.contactId` |
| `[WAITLIST_FORM_ID]` — waitlist capture | `forms.waitlistId` |

Both forms deliberately collect no health information and carry the notice
*"Please do not submit any medical or health information through this form."*
Keep it that way — Formspree is not a HIPAA-compliant channel.

## 5. Services

Seven cards in `services`. Each has a `[DESCRIPTION …]` prompt to replace:

- Korean Dermatology — your approach, 1–2 sentences
- Botox & Neuromodulators — products offered and typical unit ranges
- Laser Treatments — the devices/platforms you will offer
- Skin Boosters — booster names and expected series length
- Facials & Glass Skin — treatment length and what is included
- K-Beauty Skincare Consultation — consult length and follow-up cadence
- Primary Care & DPC Membership — already written, confirm it is accurate

Two cards reuse the videos from the old site (`public/videos/skin.mp4`,
`public/videos/dpc.mp4`). Replace or remove via the `video:` field.

## 6. Pricing — **LAUNCH BLOCKER**

| Item | Where |
| --- | --- |
| Individual `$99/mo` — carried over from the old site, **confirm before launch** | `tiers[0].price` |
| Couple `[$X]` | `tiers[1].price` |
| Family `[$X]` — plus `[UP TO N CHILDREN]` and `[AGES COVERED]` | `tiers[2].price`, `.blurb`, `.includes` |
| `[MEMBER PRICING ON AESTHETIC SERVICES — %]` | `tiers[0].includes` |
| `[ADDITIONAL COUPLE BENEFIT]`, `[ADDITIONAL FAMILY BENEFIT]` | `tiers[1..2].includes` |
| `[$X]` enrollment fee, `[N]` days cancellation notice | `enrollmentNotes` |

## 7. How DPC works

- `[LENGTH]`-minute first visit → `dpcSteps[1].body`

## 8. Before & after gallery

- Four `[IMAGE]` slot pairs and their `[N] months` / `[N] weeks` labels → `gallery`
- Replace the placeholder boxes in `src/sections/Gallery.astro` with real `<img>`
  tags once you have consented photos. **Do not publish any patient photograph
  without a signed, treatment-specific media release.**

## 9. Testimonials

- Three `[TESTIMONIAL …]` quotes plus `[FIRST NAME, LAST INITIAL]`,
  `[MEMBER SINCE YEAR]`, `[SERVICE RECEIVED]` → `testimonials`
- Check your state's rules on advertising testimonials before publishing.

## 10. FAQ

Two answers are already real (insurance, hospitalization). Four need writing:

- Is DPC the same as concierge medicine?
- Are aesthetic treatments included in membership?
- How large is the patient panel? (`[N]` cap)
- When does IASO MD open?

## 11. Legal / compliance — **LAUNCH BLOCKER**

| Item | Where |
| --- | --- |
| `[SUPERVISING PHYSICIAN NAME, MD]`, `[STATE]`, `[LICENSE #]` in the footer | `legal.supervising` |
| Medical disclaimer — already written, confirm the wording suits your state | `legal.disclaimer` |
| Results/consent notice on the gallery | `legal.results` |

## 12. Images

| Item | Where |
| --- | --- |
| `public/logo.png` — currently the logo from the old site. Replacing it? Drop in the new file (or `logo.svg`, which wins if present) then run `npm run icons` to regenerate the favicon set and the social card. | `public/` |
| **Wordmark conflict:** the logo image has "IASO **medical**" baked into it, while the site name beside it reads "IASO **MD**". Either commission a logo without text (best), or drop the text wordmark from `src/components/Logo.astro`. | `public/logo.png`, `src/components/Logo.astro` |
| `src/assets/hero.png` — the hero background, reused from the old site. Replace the file, keep the name. | `src/assets/` |
| `public/og-image.png` — generated; regenerate with `npm run icons` | `public/` |

## 13. Domain — **LAUNCH BLOCKER**

`iasomd.com` currently resolves through **Cloudflare**, not GitHub Pages. See the
"Custom domain" section of `README.md` for the DNS records to change before the
custom domain will serve this site.
