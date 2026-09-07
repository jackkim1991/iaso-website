/**
 * Single source of truth for every piece of copy on the site.
 *
 * Anything wrapped in [SQUARE BRACKETS] is a placeholder that still needs real
 * information — see CONTENT-CHECKLIST.md for the full list. Edit this file and
 * the whole site updates; you should rarely need to touch a .astro file to
 * change words, prices, or contact details.
 */

export const site = {
  name: 'IASO MD',
  legalName: 'IASO MD',
  url: 'https://iasomd.com',
  /* Shown under the logo in the hero. */
  tagline: 'Korean skincare science, led by your physician.',
  /* One-line description reused for meta descriptions and schema.org. */
  description:
    'IASO MD is a physician-led Direct Primary Care and Korean dermatology clinic blending K-beauty skincare science with unhurried, membership-based primary care.',
  /* Named for Iaso, the Greek goddess of healing and recovery. */
  motto: 'Healing is a process.',
  mottoAttribution: 'Iaso — Greek goddess of recovery',
  openingStatus: 'Now forming our founding membership. Opening [MONTH YEAR].',
};

export const contact = {
  phone: '[PHONE]',
  /* href-safe version of the phone number, e.g. tel:+12065550100 */
  phoneHref: 'tel:[PHONE-DIGITS]',
  email: '[EMAIL]',
  streetAddress: '[STREET ADDRESS, SUITE]',
  addressLocality: '[CITY]',
  addressRegion: 'WA',
  postalCode: '[ZIP]',
  addressCountry: 'US',
  /* Used for the map embed / directions link once the address is real. */
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
 * Formspree endpoints. Create two forms at https://formspree.io, then paste the
 * form IDs here. Until then the forms are visibly disabled rather than silently
 * posting into a void.
 */
export const forms = {
  contactId: '[FORM_ID]',
  waitlistId: '[WAITLIST_FORM_ID]',
};

export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/services' },
  { label: 'Membership', href: '/membership' },
  { label: 'How DPC Works', href: '/#how-dpc-works' },
  { label: 'Results', href: '/#gallery' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
];

export const physician = {
  name: '[PHYSICIAN NAME], MD',
  /* Carried over from the previous site — confirm spelling and preferred form. */
  knownName: 'Jin Bum (Jack) Kim, MD',
  credentials: '[BOARD CERTIFICATION, e.g. Board-Certified in Family Medicine]',
  role: 'Founding Physician',
  license: '[STATE MEDICAL LICENSE #]',
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

export type Service = {
  title: string;
  summary: string;
  points: string[];
  /* Optional short clip already sitting in /public/videos */
  video?: string;
};

export const services: Service[] = [
  {
    title: 'Korean Dermatology',
    summary:
      'Barrier-first medical dermatology in the Korean tradition: treat the cause, protect the skin, then refine. [DESCRIPTION — ONE OR TWO SENTENCES ABOUT YOUR APPROACH.]',
    points: [
      'Acne and rosacea protocols',
      'Pigmentation and melasma',
      'Eczema and barrier repair',
    ],
    video: '/videos/skin.mp4',
  },
  {
    title: 'Botox & Neuromodulators',
    summary:
      'Conservative, anatomy-led dosing for expression lines — the goal is a rested face, not a still one. [DESCRIPTION — INCLUDE PRODUCTS OFFERED AND TYPICAL UNIT RANGES.]',
    points: [
      'Glabella, forehead, and crow’s feet',
      'Masseter and jawline slimming',
      'Hyperhidrosis',
    ],
  },
  {
    title: 'Laser Treatments',
    summary:
      'Device-based resurfacing and vascular work, selected for the skin type in front of us. [DESCRIPTION — LIST THE DEVICES AND PLATFORMS YOU WILL OFFER.]',
    points: [
      'Pigment and vascular lasers',
      'Resurfacing and texture',
      'Structured post-treatment care',
    ],
  },
  {
    title: 'Skin Boosters',
    summary:
      'Injectable hydration and biostimulation aimed at skin quality rather than volume. [DESCRIPTION — NAME THE BOOSTERS AND THE EXPECTED SERIES LENGTH.]',
    points: [
      'Polynucleotide and PDRN',
      'Hyaluronic skin boosters',
      'Microneedling with actives',
    ],
  },
  {
    title: 'Facials & Glass Skin',
    summary:
      'The signature multi-step ritual: deep cleanse, gentle exfoliation, extraction, infusion, and a finish that reads as lit from within. [DESCRIPTION — TREATMENT LENGTH AND WHAT IS INCLUDED.]',
    points: [
      'Glass-skin signature facial',
      'Hydrating and calming protocols',
      'Event-ready preparation',
    ],
  },
  {
    title: 'K-Beauty Skincare Consultation',
    summary:
      'A physician-built routine using products you can actually sustain, with the reasoning behind every step. [DESCRIPTION — CONSULT LENGTH AND FOLLOW-UP CADENCE.]',
    points: [
      'Full routine build',
      'Ingredient and layering guidance',
      'Seasonal adjustments',
    ],
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

export type Tier = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  featured?: boolean;
  includes: string[];
};

export const tiers: Tier[] = [
  {
    name: 'Individual',
    /* Carried over from the previous site — confirm before launch. */
    price: '$99',
    cadence: '/ month',
    blurb: 'One member, one physician, unlimited access.',
    featured: true,
    includes: [
      'Unlimited office and video visits',
      'Direct text and email to your physician',
      'Same-day or next-day appointments',
      'Annual comprehensive physical',
      'Wholesale labs, imaging, and medications',
      '[MEMBER PRICING ON AESTHETIC SERVICES — %]',
    ],
  },
  {
    name: 'Couple',
    price: '[$X]',
    cadence: '/ month',
    blurb: 'Two adults in the same household.',
    includes: [
      'Everything in Individual, for two members',
      'Shared household scheduling',
      'Coordinated preventive planning',
      '[ADDITIONAL COUPLE BENEFIT]',
    ],
  },
  {
    name: 'Family',
    price: '[$X]',
    cadence: '/ month',
    blurb: 'Two adults plus dependents [UP TO N CHILDREN].',
    includes: [
      'Everything in Couple, plus dependents',
      'Pediatric well-child visits [AGES COVERED]',
      'School and sports physicals',
      '[ADDITIONAL FAMILY BENEFIT]',
    ],
  },
];

export const enrollmentNotes = [
  'A one-time enrollment fee of [$X] applies per member.',
  'Month to month. Cancel any time with [N] days’ notice.',
  'Aesthetic and dermatology procedures are billed separately from membership.',
];

export const dpcSteps = [
  {
    title: 'Join',
    body: 'Choose a membership tier and enroll online in a few minutes. No insurance card, no referral, no gatekeeping.',
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

export const gallery = [
  {
    label: 'Acne protocol — [N] months',
    alt: 'Before and after placeholder for an acne treatment course',
  },
  {
    label: 'Melasma & pigment — [N] months',
    alt: 'Before and after placeholder for a pigmentation treatment course',
  },
  {
    label: 'Glass-skin facial series',
    alt: 'Before and after placeholder for a facial treatment series',
  },
  {
    label: 'Neuromodulator — [N] weeks',
    alt: 'Before and after placeholder for a neuromodulator treatment',
  },
];

export const testimonials = [
  {
    quote: '[TESTIMONIAL — ONE OR TWO SENTENCES IN THE PATIENT’S OWN WORDS.]',
    attribution: '[FIRST NAME, LAST INITIAL]',
    context: '[MEMBER SINCE YEAR]',
  },
  {
    quote: '[TESTIMONIAL — ONE OR TWO SENTENCES IN THE PATIENT’S OWN WORDS.]',
    attribution: '[FIRST NAME, LAST INITIAL]',
    context: '[SERVICE RECEIVED]',
  },
  {
    quote: '[TESTIMONIAL — ONE OR TWO SENTENCES IN THE PATIENT’S OWN WORDS.]',
    attribution: '[FIRST NAME, LAST INITIAL]',
    context: '[MEMBER SINCE YEAR]',
  },
];

export const faqs = [
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
    q: 'Are aesthetic treatments included in my membership?',
    a: '[ANSWER — CLARIFY WHAT MEMBERSHIP COVERS VERSUS WHAT IS BILLED PER TREATMENT, AND ANY MEMBER DISCOUNT.]',
  },
  {
    q: 'How large is the patient panel?',
    a: '[ANSWER — STATE YOUR PANEL CAP, e.g. "We cap the practice at [N] members so access stays real."]',
  },
  {
    q: 'When does IASO MD open?',
    a: '[ANSWER — OPENING TIMELINE AND WHAT JOINING THE WAITLIST GETS THEM, e.g. FOUNDING-MEMBER PRICING.]',
  },
];

export const legal = {
  disclaimer:
    'This website is for general information only and is not medical advice. IASO MD is a Direct Primary Care practice and is not health insurance.',
  supervising:
    'Medical services are provided under the supervision of [SUPERVISING PHYSICIAN NAME, MD] — [STATE] license [LICENSE #].',
  results:
    'Photographs are of actual patients, published with written consent. Individual results vary and no outcome is guaranteed.',
  phi: 'Please do not submit any medical or health information through this form.',
};
