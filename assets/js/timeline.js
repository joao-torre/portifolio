/**
 * timeline.js
 * Busca data/experience.json e renderiza a timeline vertical na seção #experience.
 * Requer que o site seja servido por HTTP (fetch falha em file:// por CORS) —
 * ver "Rodando localmente" no README.
 */

(function () {
  const list = document.querySelector('[data-timeline]');
  if (!list) return;

  async function loadExperience() {
    try {
      const response = await fetch('data/experience.json?v=8', { cache: 'no-store' });
      if (!response.ok) throw new Error(`Falha ao carregar experience.json (${response.status})`);

      const experiences = await response.json();
      render(experiences);
    } catch (error) {
      console.error('[timeline.js]', error);
      list.innerHTML = `<p class="hero__tagline" style="font-size: var(--fs-body); font-family: var(--font-body); color: var(--color-text-muted);">
        Não foi possível carregar a timeline. Sirva o projeto via HTTP (ex: <code>npx serve .</code>) para visualizar esta seção.
      </p>`;
    }
  }

  function render(experiences) {
    list.innerHTML = experiences
      .map((exp, index) => {
        const lang = window.portfolioI18n?.getLanguage() || 'pt';
        const localized = exp[lang] || exp.pt || exp;
        const stackTags = exp.stack.map((s) => `<span class="tag">${s}</span>`).join('');
        const highlights = localized.highlights.map((h) => `<li>${h}</li>`).join('');

        return `
          <li class="timeline__item${exp.current ? ' timeline__item--current' : ''}" data-reveal data-reveal-delay="${index * 80}">
            <div class="timeline__meta">
              <span>${localized.period}</span>
              <span>·</span>
              <span>${exp.location}</span>
              ${exp.current ? `<span class="timeline__badge">${window.portfolioI18n?.t('dynamic.current') || 'Atual'}</span>` : ''}
            </div>
            <h3 class="timeline__role">${localized.role}</h3>
            <p class="timeline__company">${exp.company}</p>
            ${localized.summary ? `<p class="timeline__summary">${localized.summary}</p>` : ''}
            <ul class="timeline__highlights">${highlights}</ul>
            <div class="timeline__stack">${stackTags}</div>
          </li>
        `;
      })
      .join('');

    // Reaplica o observer de reveal aos itens recém-inseridos
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    list.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', loadExperience);
  window.addEventListener('languagechange', loadExperience);
})();
