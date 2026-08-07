/**
 * animations.js
 * Revela elementos com [data-reveal] quando entram no viewport.
 * Suporta stagger via [data-reveal-delay] (em ms).
 */

(function () {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-reveal-delay') || 0;
          el.style.setProperty('--delay', `${delay}ms`);
          el.classList.add('reveal', 'is-visible');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();
