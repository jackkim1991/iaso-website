/**
 * Single source of truth for every piece of copy on the site.
 *
 * Anything in [SQUARE BRACKETS] still needs a real value — CONTENT-CHECKLIST.md
 * lists them all. Edit this file and the whole site updates; you should rarely
 * need to open a .astro file to change words, prices, or contact details.
 */

export const site = {
  name: 'IASO MD',
  legalName: 'IASO MD',
  url: 'https://iasomd.com',
  tagline: 'Korean skincare science, led by your physician.',
  description:
    'IASO MD is a physician-led Direct Primary Care and Korean aesthetics clinic blending K-beauty skincare science with unhurried, membership-based primary care.',
  /* Named for Iaso, the Greek goddess of healing and recovery. */
  motto: 'Healing is a process.',
  mottoAttribution: 'Iaso — Greek goddess of recovery',
  openingStatus: 'Opening [MONTH YEAR] in [CITY], Washington.',
};

export const contact = {
  phone: '[PHONE]',
  /* Digits only, e.g. tel:+12065550100 — leave bracketed until real. */
  phoneHref: 'tel:[PHONE-DIGITS]',
  email: '[EMAIL]',
  streetAddress: '[STREET ADDRESS, SUITE]',
  addressLocality: '[CITY]',
  addressRegion: 'WA',
  postalCode: '[ZIP]',
  addressCountry: 'US',
  mapQuery: '[STREET ADDRESS, CITY, WA ZIP]',
  hours: [
    { days: 'Monday – Thursday', time: '[9:00 AM – 5:00 PM]' },
    { days: 'Friday', time: '[9:00 AM – 3:00 PM]' },
    { days: 'Saturday', time: '[By appointment]' },
    { days: 'Sunday', time: 'Closed' },
  ],
  social: [
    { label: 'Instagram', href: '[INSTAGRAM URL]' },
    { label: 'Facebook', href: '[FACEBOOK URL]' },
    { label: 'LinkedIn', href: '[LINKEDIN URL]' },
  ],
};

/**
 * Every nav item scrolls to a section on "/". A click handler in BaseLayout
 * turns these into a scroll without writing a #fragment into the address bar.
 */
export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Membership', href: '/#membership' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Results', href: '/#gallery' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export const physician = {
  name: '[PHYSICIAN NAME], MD',
  /* Carried over from the previous site — confirm spelling and preferred form. */
  knownName: 'Jin Bum (Jack) Kim, MD',
  credentials: '[BOARD CERTIFICATION, e.g. Board-Certified in Family Medicine]',
  role: 'Founding Physician',
  license: '[WA MEDICAL LICENSE #]',
  hometown: 'Burnaby, British Columbia, Canada',
  undergrad: 'University of British Columbia',
  medicalSchool: 'University College Dublin',
  residency: '[RESIDENCY PROGRAM]',
  headshotAlt: 'Portrait of [PHYSICIAN NAME], MD, founding physician of IASO MD',
  philosophy: [
    'Korean skincare is built on patience, barrier health, and consistency — not on chasing one dramatic result. Primary care, done properly, works the same way: you get further with a physician who knows your history than with a stranger who has eleven minutes.',
    'IASO MD exists to put those two disciplines under one roof. The physician who manages your blood pressure and reads your labs also builds your skin protocol, because your skin is not separate from the rest of you.',
    '[ADD ONE OR TWO SENTENCES IN YOUR OWN VOICE ABOUT WHY YOU STARTED IASO MD.]',
  ],
  whyFamilyMedicine:
    'Family medicine lets me combine the interdisciplinary breadth of medicine with the diagnostic rigor of internal medicine, and to work alongside patients and their families over years rather than minutes. Its emphasis on prevention and longitudinal care is where my passion lies.',
  personal:
    'Outside the clinic: the gym, photography, music, baking, travel, and camping.',
};

/* -------------------------------------------------------------------------- */
/*  Trust                                                                      */
/* -------------------------------------------------------------------------- */

export const trust = {
  credentials: [
    { label: 'Physician', value: '[PHYSICIAN NAME], MD' },
    { label: 'Board certification', value: '[BOARD CERTIFICATION]' },
    { label: 'Medical school', value: 'University College Dublin' },
    { label: 'Residency', value: '[RESIDENCY PROGRAM]' },
  ],
  /**
   * Washington requires direct practices to register with the Office of the
   * Insurance Commissioner under RCW 48.150. Leave this null until the
   * registration is actually granted — the line is hidden while it is null.
   */
  waRegistration: null as string | null,
  waRegistrationTemplate:
    'Registered Washington Direct Practice (RCW 48.150) — [REGISTRATION DATE]',
  injectables:
    'We use only FDA-approved injectables, including Skinvive and Botox.',
  reviews: [
    { quote: '[REVIEW — ONE OR TWO SENTENCES IN THE PATIENT’S OWN WORDS.]', attribution: '[FIRST NAME, LAST INITIAL]' },
    { quote: '[REVIEW — ONE OR TWO SENTENCES IN THE PATIENT’S OWN WORDS.]', attribution: '[FIRST NAME, LAST INITIAL]' },
    { quote: '[REVIEW — ONE OR TWO SENTENCES IN THE PATIENT’S OWN WORDS.]', attribution: '[FIRST NAME, LAST INITIAL]' },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */

export type Service = {
  title: string;
  summary: string;
  points: string[];
  video?: string;
};

export const services: Service[] = [
  {
    title: 'Korean Aesthetics',
    summary:
      'Barrier-first aesthetic care in the Korean tradition: treat the cause, protect the skin, then refine. [DESCRIPTION — ONE OR TWO SENTENCES ABOUT YOUR APPROACH.]',
    points: ['Acne and rosacea protocols', 'Pigmentation and melasma', 'Eczema and barrier repair'],
    video: '/videos/skin.mp4',
  },
  {
    title: 'Botox & Neuromodulators',
    summary:
      'Conservative, anatomy-led dosing for expression lines — the goal is a rested face, not a still one. [DESCRIPTION — INCLUDE PRODUCTS OFFERED AND TYPICAL UNIT RANGES.]',
    points: ['Glabella, forehead, and crow’s feet', 'Masseter and jawline slimming', 'Hyperhidrosis'],
  },
  {
    title: 'Laser Treatments',
    summary:
      'Device-based resurfacing and vascular work, selected for the skin type in front of us. [DESCRIPTION — LIST THE DEVICES AND PLATFORMS YOU WILL OFFER.]',
    points: ['Pigment and vascular lasers', 'Resurfacing and texture', 'Structured post-treatment care'],
  },
  {
    title: 'Skin Boosters',
    summary:
      'Injectable hydration and biostimulation aimed at skin quality rather than volume. [DESCRIPTION — NAME THE BOOSTERS AND THE EXPECTED SERIES LENGTH.]',
    points: ['Polynucleotide and PDRN', 'Hyaluronic skin boosters', 'Microneedling with actives'],
  },
  {
    title: 'Facials & Glass Skin',
    summary:
      'The signature multi-step ritual: deep cleanse, gentle exfoliation, extraction, infusion, and a finish that reads as lit from within. [DESCRIPTION — TREATMENT LENGTH AND WHAT IS INCLUDED.]',
    points: ['Glass-skin signature facial', 'Hydrating and calming protocols', 'Event-ready preparation'],
  },
  {
    title: 'K-Beauty Skincare Consultation',
    summary:
      'A physician-built routine using products you can actually sustain, with the reasoning behind every step. [DESCRIPTION — CONSULT LENGTH AND FOLLOW-UP CADENCE.]',
    points: ['Full routine build', 'Ingredient and layering guidance', 'Seasonal adjustments'],
  },
  {
    title: 'Primary Care & DPC Membership',
    summary:
      'Unlimited, unhurried access to your own physician — chronic disease management, urgent concerns, and prevention, without a clock running in the corner.',
    points: [
      'Unlimited visits and telehealth',
      'Wholesale labs, imaging, and medications',
      'Annual comprehensive physical',
    ],
    video: '/videos/dpc.mp4',
  },
];

/* -------------------------------------------------------------------------- */
/*  Track one — IASO Care (Direct Primary Care, HSA-eligible)                  */
/* -------------------------------------------------------------------------- */

export type CareTier = {
  name: string;
  price: string;
  cadence: string;
  covers: string;
  featured?: boolean;
  /** Founding-member rate, held for life. */
  founding: string;
};

export const careTiers: CareTier[] = [
  {
    name: 'Individual',
    price: '$129',
    cadence: '/ month',
    covers: 'One adult, 18–64',
    featured: true,
    founding: '$99',
  },
  {
    name: 'Couple',
    price: '$239',
    cadence: '/ month',
    covers: 'Two adults',
    founding: '[FOUNDING COUPLE PRICE]',
  },
  {
    name: 'Family',
    price: '$299',
    cadence: '/ month',
    covers: 'Two adults + up to 3 children',
    founding: '[FOUNDING FAMILY PRICE]',
  },
];

export const care = {
  name: 'IASO Care',
  kicker: 'Direct Primary Care',
  intro:
    'Your medical home. One flat monthly fee covers the primary care relationship in full — no copays, no per-visit charge, no surprise billing.',
  /* Single exception line beneath the table — deliberately not a second grid. */
  seniorNote: 'Members 65 and over: $149 / month.',
  enrollment: 'One-time enrollment fee of [ENROLLMENT_FEE] per member.',
  hsaBadge:
    'HSA-eligible — under the $150/mo individual cap (IRS Notice 2026-05).',
  hsaDetail:
    'Because IASO Care covers primary care only, it qualifies as a direct primary care service arrangement, and you can pay for it with pre-tax HSA dollars.',
  founding: {
    label: 'Founding 100',
    body:
      'The first 100 members hold their founding rate for life, and the enrollment fee is waived. Available on every tier — Individual, Couple, and Family.',
  },
  includes: [
    'Unlimited office and video visits',
    'Direct text and email access to your physician',
    'Same-day or next-day appointments',
    'Annual comprehensive physical',
    'Wholesale labs, imaging, and medications',
    'Medical dermatology — acne, rosacea, eczema, skin checks, lesion evaluation and removal',
    'Annual skin-health consultation',
    'Member rates on all IASO Glow services',
    'Priority IASO Glow booking',
  ],
  legal: 'Direct Primary Care is not health insurance.',
};

/* -------------------------------------------------------------------------- */
/*  Track two — IASO Glow (aesthetics, billed separately)                      */
/* -------------------------------------------------------------------------- */

export const glow = {
  name: 'IASO Glow',
  kicker: 'Aesthetics Program',
  intro:
    'Everything cosmetic, on its own membership. Your monthly fee banks as credit you spend on whatever your skin needs that season.',
  price: '$199',
  cadence: '/ month',
  priceNote: 'Banked as credit toward any IASO Glow service or retail product.',
  includes: [
    { label: 'Monthly credit', value: '$199, yours to spend on any Glow service' },
    { label: 'Rollover', value: 'Unused credit rolls over up to [12] months' },
    { label: 'Member neurotoxin', value: '$[13–14] per unit — non-members $[16–18]' },
    { label: 'Packages', value: '15% off laser and skin-booster series' },
    { label: 'Booking', value: 'Priority scheduling alongside Care members' },
  ],
  legal: 'Cosmetic services are not covered by DPC or HSA funds.',
};

/**
 * Why the two tracks are billed separately. This sits between the two blocks —
 * it is the single most important explanation on the pricing page.
 */
export const trackSplit =
  'IASO Care and IASO Glow are billed separately and governed by separate agreements. That is deliberate: a direct primary care arrangement must cover primary care only to stay HSA-eligible under IRS Notice 2026-05 and to remain a registered direct practice under Washington law. Keeping cosmetic services on their own membership protects the tax treatment of your Care fee.';

/* -------------------------------------------------------------------------- */
/*  How it works                                                               */
/* -------------------------------------------------------------------------- */

export const careSteps = [
  {
    title: 'Join',
    body: 'Choose a tier and enroll in a few minutes. No insurance card, no referral, no gatekeeping.',
  },
  {
    title: 'Meet your physician',
    body: 'Your first visit is a [LENGTH]-minute conversation — full history, goals for your health and your skin, and a plan written together.',
  },
  {
    title: 'Unlimited access',
    body: 'Text, email, or video your physician directly, and come in the same day when you need to. No copays, no per-visit charge.',
  },
  {
    title: 'Wholesale labs & medications',
    body: 'Common labs, imaging, and generic medications at our negotiated cost — often a fraction of what the same test bills through insurance.',
  },
];

export const glowSteps = [
  {
    title: 'Consult',
    body: 'A physician-led skin assessment: barrier health, pigment, texture, and what is realistic over the next twelve months.',
  },
  {
    title: 'Bank your credit',
    body: 'Your monthly fee accrues as credit. Spend it as treatments come due rather than committing to a package up front.',
  },
  {
    title: 'Treat and adjust',
    body: 'Come in as your plan calls for it. We reassess each season and change the protocol when your skin changes.',
  },
];

/* -------------------------------------------------------------------------- */
/*  Gallery, FAQ, legal                                                        */
/* -------------------------------------------------------------------------- */

export const gallery = [
  { label: 'Acne protocol — [N] months', alt: 'Before and after placeholder for an acne treatment course' },
  { label: 'Melasma & pigment — [N] months', alt: 'Before and after placeholder for a pigmentation treatment course' },
  { label: 'Glass-skin facial series', alt: 'Before and after placeholder for a facial treatment series' },
  { label: 'Neuromodulator — [N] weeks', alt: 'Before and after placeholder for a neuromodulator treatment' },
];

export const testimonials = [
  { quote: '[TESTIMONIAL — ONE OR TWO SENTENCES IN THE PATIENT’S OWN WORDS.]', attribution: '[FIRST NAME, LAST INITIAL]', context: '[MEMBER SINCE YEAR]' },
  { quote: '[TESTIMONIAL — ONE OR TWO SENTENCES IN THE PATIENT’S OWN WORDS.]', attribution: '[FIRST NAME, LAST INITIAL]', context: '[SERVICE RECEIVED]' },
  { quote: '[TESTIMONIAL — ONE OR TWO SENTENCES IN THE PATIENT’S OWN WORDS.]', attribution: '[FIRST NAME, LAST INITIAL]', context: '[MEMBER SINCE YEAR]' },
];

export const faqs = [
  {
    q: 'Is my DPC membership HSA-eligible?',
    a: 'Yes. As of January 1, 2026 (IRS Notice 2026-05 under the One Big Beautiful Bill Act), direct primary care fees up to $150 per month for an individual and $300 per month for an arrangement covering more than one person are HSA-qualified. Every IASO Care tier stays within these limits. Aesthetic and cosmetic services are billed separately and are NOT HSA-eligible.',
  },
  {
    q: 'Are aesthetic treatments included in membership?',
    a: 'No — they are billed separately to keep your Care membership HSA-eligible and compliant with Washington law. IASO Care members do receive member rates on every IASO Glow service, an annual skin-health consultation, and priority booking.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'No. By stepping outside insurance billing we keep pricing transparent, spend real time with you, and avoid surprise bills. We recommend members carry a high-deductible or catastrophic plan for hospitalizations and emergencies.',
  },
  {
    q: 'What happens if I need to go to the hospital?',
    a: 'Your insurance takes over for the hospital stay itself. We stay involved — communicating with the hospitalists, advocating for you, and handling the transition of care when you are discharged.',
  },
  {
    q: 'Is Direct Primary Care the same as concierge medicine?',
    a: '[ANSWER — EXPLAIN THE DIFFERENCE AS YOU PRACTICE IT: NO INSURANCE BILLING, FLAT MONTHLY FEE, SMALL PANEL SIZE.]',
  },
  {
    q: 'How large is the patient panel?',
    a: '[ANSWER — STATE YOUR PANEL CAP, e.g. "We cap the practice at [N] members so access stays real."]',
  },
  {
    q: 'When does IASO MD open?',
    a: '[ANSWER — OPENING TIMELINE AND WHAT FOUNDING MEMBERSHIP GETS THEM.]',
  },
];

export const legal = {
  disclaimer:
    'This website is for general information only and is not medical advice. IASO MD is a Direct Primary Care practice and is not health insurance.',
  supervising:
    'Medical services are provided under the supervision of [SUPERVISING PHYSICIAN NAME, MD] — Washington license [LICENSE #].',
  results:
    'Photographs are of actual patients, published with written consent. Individual results vary and no outcome is guaranteed.',
  agreement:
    'This agreement does not provide comprehensive health insurance coverage. It provides only the health care services specifically described.',
};

/* -------------------------------------------------------------------------- */
/*  Coming soon — stands in for the waitlist until a form backend is wired up  */
/* -------------------------------------------------------------------------- */

export const comingSoon = {
  eyebrow: 'Coming soon',
  title: 'IASO MD is not open yet.',
  body:
    'We are building a practice small enough that your physician knows your name and your history. Founding membership opens [MONTH YEAR].',
  /* Flip to true and restore the form once a backend is chosen. */
  waitlistOpen: false,
};
