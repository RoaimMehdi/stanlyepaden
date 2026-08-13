import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attach to any container ref.
 * Adds 'revealed' class to children with [data-reveal] attribute
 * as they enter the viewport.
 */
export function useScrollReveal(containerRef) {
  useEffect(() => {
    const elements = containerRef?.current
      ? containerRef.current.querySelectorAll('[data-reveal]')
      : document.querySelectorAll('[data-reveal]');

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef]);
}

/**
 * useGlobalScrollReveal — call this once at App level
 * to observe ALL [data-reveal] elements site-wide.
 *
 * Pass a `dep` (e.g. the current route path) so the observers are
 * re-attached whenever new pages mount their own [data-reveal] nodes.
 */
export function useGlobalScrollReveal(dep) {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const attach = () => {
      const elements = document.querySelectorAll('[data-reveal]');
      if (!elements.length) return;

      // Respect reduced-motion: show everything immediately.
      if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
        elements.forEach((el) => el.classList.add('revealed'));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    // Reveal anything already in the viewport, then keep listening.
    const obs = attach();
    const revealVisible = () => {
      document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 30) {
          el.classList.add('revealed');
        }
      });
    };
    revealVisible();

    return () => obs?.disconnect();
  }, [dep]);
}
