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
 */
export function useGlobalScrollReveal() {
  useEffect(() => {
    const attach = () => {
      const elements = document.querySelectorAll('[data-reveal]');
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
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    const obs = attach();
    return () => obs?.disconnect();
  }, []);
}
