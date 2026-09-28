/**
 * Site motion. GSAP + ScrollTrigger, with Lenis smooth scroll on desktop.
 *
 * Nothing here runs when the visitor prefers reduced motion, and nothing is
 * hidden until this module has confirmed it can reveal it again — so the
 * page reads fully with JavaScript off or if this bundle fails to load.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

declare global {
  interface Window {
    __lenis?: { scrollTo: (target: Element, opts?: { offset?: number }) => void };
  }
}

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');
const DESKTOP = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');

async function init() {
  if (REDUCED.matches) return;

  const root = document.documentElement;
  // GSAP owns every reveal from here; retire the CSS-only paths.
  root.classList.remove('css-scroll');
  root.classList.add('gsap');

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: 'power3.out' });

  /* ---------------------------------------------------- smooth scroll */
  if (DESKTOP.matches) {
    const { default: Lenis } = await import('lenis');
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    window.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* ------------------------------------------------------ header state */
  const header = document.querySelector('header');
  if (header) {
    ScrollTrigger.create({
      start: 'top -48',
      end: 'max',
      toggleClass: { targets: header, className: 'is-scrolled' },
    });
  }

  /* ------------------------------------------------------------- hero */
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (hero) {
    const pre = hero.querySelectorAll('[data-hero-pre]');
    const words = hero.querySelectorAll('[data-word]');
    const post = hero.querySelectorAll('[data-hero-post]');

    // The entrance is built only once the page is actually on screen. A link
    // opened in a background tab would otherwise play to nobody and, until the
    // tween is created, the hero stays fully visible at rest.
    const playEntrance = () => {
      gsap
        .timeline({ delay: 0.1 })
        .from(pre, { y: 16, opacity: 0, duration: 0.7, stagger: 0.1 })
        .from(
          words,
          { yPercent: 110, rotateX: -40, opacity: 0, duration: 1, stagger: 0.055, transformOrigin: '50% 100%' },
          '-=0.35'
        )
        .from(post, { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.55');
    };

    if (document.visibilityState === 'visible') {
      playEntrance();
    } else {
      document.addEventListener(
        'visibilitychange',
        () => {
          if (document.visibilityState === 'visible') playEntrance();
        },
        { once: true }
      );
    }

    const plate = hero.querySelector('[data-hero-plate]');
    const content = hero.querySelector('[data-hero-content]');
    if (plate) {
      gsap.to(plate, {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      });
    }
    if (content) {
      gsap.to(content, {
        yPercent: -14,
        opacity: 0.1,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      });
    }

    const cue = hero.querySelector('.scroll-cue');
    if (cue) gsap.fromTo(cue, { scaleY: 0.2, opacity: 0.4 }, { scaleY: 1, opacity: 1, duration: 1.4, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: '50% 0%' });
  }

  /* ------------------------------------------ section heading word-ins */
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((heading) => {
    const words = heading.querySelectorAll('[data-word]');
    if (!words.length) return;
    gsap.from(words, {
      yPercent: 105,
      opacity: 0,
      duration: 0.9,
      stagger: 0.04,
      scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
    });
  });

  /* ------------------------------------------------- staggered reveals */
  const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  gsap.set(reveals, { opacity: 0, y: 28 });
  ScrollTrigger.batch(reveals, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: 1, stagger: 0.09, overwrite: true }),
  });

  /* ----------------------------------------------------- hairline draw */
  gsap.utils.toArray<HTMLElement>('[data-draw]').forEach((rule) => {
    gsap.fromTo(
      rule,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power2.inOut', scrollTrigger: { trigger: rule, start: 'top 92%', once: true } }
    );
  });

  /* ------------------------------------------------------ number counts */
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const prefix = el.dataset.prefix ?? '';
    const suffix = el.dataset.suffix ?? '';
    const state = { value: 0 };
    gsap.to(state, {
      value: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(state.value)}${suffix}`;
      },
    });
  });

  /* ------------------------------------------ how-it-works progress line */
  gsap.utils.toArray<HTMLElement>('[data-progress]').forEach((line) => {
    const list = line.parentElement;
    if (!list) return;
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        transformOrigin: '50% 0%',
        scrollTrigger: { trigger: list, start: 'top 72%', end: 'bottom 58%', scrub: 0.4 },
      }
    );
  });

  gsap.utils.toArray<HTMLElement>('[data-step]').forEach((step) => {
    gsap.fromTo(
      step,
      { opacity: 0.25, x: -14 },
      { opacity: 1, x: 0, ease: 'none', scrollTrigger: { trigger: step, start: 'top 82%', end: 'top 58%', scrub: 0.4 } }
    );
  });

  /* ------------------------------------- dark bands drift very slightly */
  gsap.utils.toArray<HTMLElement>('[data-drift]').forEach((band) => {
    const inner = band.querySelector('[data-drift-inner]');
    if (!inner) return;
    gsap.fromTo(
      inner,
      { yPercent: 6 },
      { yPercent: -6, ease: 'none', scrollTrigger: { trigger: band, start: 'top bottom', end: 'bottom top', scrub: true } }
    );
  });

  /* ----------------------------------------------------------- refresh */
  if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

init();
