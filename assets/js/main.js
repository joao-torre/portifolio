/**
 * main.js
 * Ponto de entrada do site. Orquestra loader, navbar e menu mobile.
 * Os demais efeitos (typing, particles, animations, cursor) vivem em
 * seus próprios arquivos e se auto-inicializam.
 */

(function () {
  /* ---------------------------------------------------------------- */
  /* LOADER                                                            */
  /* ---------------------------------------------------------------- */
  const loader = document.querySelector('[data-loader]');

  window.addEventListener('load', () => {
    if (!loader) return;
    setTimeout(() => {
      loader.classList.add('loader--hidden');
      document.body.classList.remove('is-loading');
    }, 900);
  });

  /* ---------------------------------------------------------------- */
  /* NAVBAR — estado de scroll                                        */
  /* ---------------------------------------------------------------- */
  const navbar = document.querySelector('[data-navbar]');

  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------------------------------------------------------- */
  /* NAVBAR — menu mobile                                             */
  /* ---------------------------------------------------------------- */
  const toggle = document.querySelector('[data-nav-toggle]');
  const links = document.querySelector('[data-nav-links]');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.classList.toggle('is-active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* NAVBAR — link ativo conforme seção visível                       */
  /* ---------------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.navbar__link');
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            navLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === id);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* ---------------------------------------------------------------- */
  /* CONTACT — copiar e-mail                                          */
  /* ---------------------------------------------------------------- */
  const copyBtn = document.querySelector('[data-copy-email]');

  if (copyBtn) {
    const label = copyBtn.querySelector('[data-copy-label]');
    const originalText = label ? label.textContent : '';

    copyBtn.addEventListener('click', async () => {
      const email = copyBtn.getAttribute('data-email');
      try {
        await navigator.clipboard.writeText(email);
        if (label) label.textContent = 'E-mail copiado ✓';
      } catch {
        if (label) label.textContent = email;
        window.location.href = `mailto:${email}`;
      }
      setTimeout(() => {
        if (label) label.textContent = originalText;
      }, 2200);
    });
  }

  /* ---------------------------------------------------------------- */
  /* FOOTER — ano corrente                                            */
  /* ---------------------------------------------------------------- */
  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
