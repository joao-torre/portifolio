/**
 * certifications.js
 * Busca data/certifications.json e renderiza cards premium. Se o logo da
 * instituição não existir em assets/images/logos, cai automaticamente para
 * um badge com as iniciais — nunca mostra ícone de imagem quebrada.
 */

(function () {
  const grid = document.querySelector('[data-certifications]');
  if (!grid) return;

  function initials(name) {
    return name
      .split(' ')
      .filter((w) => w.length > 2 || w === w.toUpperCase())
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase();
  }

  async function loadCertifications() {
    try {
      const response = await fetch('data/certifications.json');
      if (!response.ok) throw new Error(`Falha ao carregar certifications.json (${response.status})`);
      const certifications = await response.json();
      render(certifications);
    } catch (error) {
      console.error('[certifications.js]', error);
      grid.innerHTML = `<p class="hero__tagline" style="font-size: var(--fs-body); font-family: var(--font-body); color: var(--color-text-muted);">
        Não foi possível carregar as certificações. Sirva o projeto via HTTP (ex: <code>npx serve .</code>) para visualizar esta seção.
      </p>`;
    }
  }

  function render(certifications) {
    grid.innerHTML = certifications
      .map((cert, index) => {
        const badgeInitials = initials(cert.institution);

        return `
          <article class="cert-card" data-reveal data-reveal-delay="${index * 70}">
            <div class="cert-card__header">
              <div class="cert-card__logo" data-fallback="${badgeInitials}">
                ${cert.logo ? `<img src="${cert.logo}" alt="${cert.institution}" loading="lazy" onerror="this.parentElement.classList.add('cert-card__logo--fallback'); this.outerHTML='<span>${badgeInitials}</span>';" />` : `<span>${badgeInitials}</span>`}
              </div>
              ${cert.hours ? `<span class="tag cert-card__hours">${cert.hours}h</span>` : ''}
            </div>
            <h3 class="cert-card__title">${cert.title}</h3>
            <p class="cert-card__institution">${cert.institution}</p>
            <span class="cert-card__category mono">${cert.category}</span>
            ${cert.credentialUrl ? `<a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="cert-card__link">Ver credencial →</a>` : ''}
          </article>
        `;
      })
      .join('');

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

    grid.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', loadCertifications);
})();
