/**
 * dashboard.js
 * Alimenta o dashboard de demonstração: contadores animados nos KPIs e
 * gráficos SVG (barra / linha) desenhados em JS puro, sem bibliotecas.
 * Tudo dispara quando a seção entra no viewport.
 */

(function () {
  const dashboard = document.querySelector('.dashboard');
  if (!dashboard) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- */
  /* KPI COUNTERS                                                      */
  /* ---------------------------------------------------------------- */
  function animateCounter(el) {
    const to = parseFloat(el.getAttribute('data-counter-to'));
    const suffix = el.getAttribute('data-counter-suffix') || '';
    const decimals = to % 1 !== 0 ? 1 : 0;
    const duration = 1400;

    if (prefersReducedMotion) {
      el.textContent = `${to.toFixed(decimals)}${suffix}`;
      return;
    }

    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = to * eased;
      el.textContent = `${current.toFixed(decimals)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  /* ---------------------------------------------------------------- */
  /* BAR CHART                                                         */
  /* ---------------------------------------------------------------- */
  function renderBarChart(container) {
    const values = container.getAttribute('data-chart-values').split(',').map(Number);
    const labels = container.getAttribute('data-chart-labels').split(',');

    const width = 460;
    const height = 200;
    const padding = { top: 10, bottom: 28, left: 8, right: 8 };
    const chartHeight = height - padding.top - padding.bottom;
    const barWidth = (width - padding.left - padding.right) / values.length;
    const max = 70;

    const bars = values
      .map((v, i) => {
        const barHeight = (v / max) * chartHeight;
        const x = padding.left + i * barWidth + barWidth * 0.2;
        const y = padding.top + (chartHeight - barHeight);
        const w = barWidth * 0.6;

        return `
          <rect class="chart-bar" x="${x}" y="${padding.top + chartHeight}" width="${w}" height="0" rx="3">
            <animate attributeName="y" from="${padding.top + chartHeight}" to="${y}" dur="0.8s" begin="${i * 0.08}s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1"/>
            <animate attributeName="height" from="0" to="${barHeight}" dur="0.8s" begin="${i * 0.08}s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1"/>
          </rect>
          <text class="chart-bar-value" x="${x + w / 2}" y="${y - 6}" text-anchor="middle">${v}%</text>
          <text class="chart-axis-label" x="${x + w / 2}" y="${height - 6}" text-anchor="middle">${labels[i]}</text>
        `;
      })
      .join('');

    container.innerHTML = `
      <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Recuperação por faixa de atraso">
        ${bars}
      </svg>
    `;
  }

  /* ---------------------------------------------------------------- */
  /* LINE CHART                                                        */
  /* ---------------------------------------------------------------- */
  function renderLineChart(container) {
    const values = container.getAttribute('data-chart-values').split(',').map(Number);
    const labels = container.getAttribute('data-chart-labels').split(',');

    const width = 460;
    const height = 200;
    const padding = { top: 16, bottom: 28, left: 8, right: 8 };
    const chartHeight = height - padding.top - padding.bottom;
    const chartWidth = width - padding.left - padding.right;

    const min = Math.min(...values) - 4;
    const max = Math.max(...values) + 4;
    const stepX = chartWidth / (values.length - 1);

    const points = values.map((v, i) => {
      const x = padding.left + i * stepX;
      const y = padding.top + chartHeight - ((v - min) / (max - min)) * chartHeight;
      return { x, y, v };
    });

    const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    const areaPath = `${linePath} L ${points[points.length - 1].x} ${padding.top + chartHeight} L ${points[0].x} ${padding.top + chartHeight} Z`;

    const totalLength = 1000; // aproximação suficiente para o efeito de desenho

    const dots = points
      .map(
        (p, i) => `
          <circle class="chart-line-dot" cx="${p.x}" cy="${p.y}" r="3.5" opacity="0">
            <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="${0.9 + i * 0.08}s" fill="freeze"/>
          </circle>
          <text class="chart-axis-label" x="${p.x}" y="${height - 6}" text-anchor="middle">${labels[i]}</text>
        `
      )
      .join('');

    container.innerHTML = `
      <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolução da eficiência operacional">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#60A5FA" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#60A5FA" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <path class="chart-line-area" d="${areaPath}" opacity="0">
          <animate attributeName="opacity" from="0" to="0.5" dur="0.6s" begin="0.6s" fill="freeze"/>
        </path>
        <path class="chart-line-path" d="${linePath}" stroke-dasharray="${totalLength}" stroke-dashoffset="${totalLength}">
          <animate attributeName="stroke-dashoffset" from="${totalLength}" to="0" dur="1s" begin="0s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1"/>
        </path>
        ${dots}
      </svg>
    `;
  }

  /* ---------------------------------------------------------------- */
  /* TRIGGER ON VIEWPORT ENTRY                                         */
  /* ---------------------------------------------------------------- */
  let hasRun = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasRun) {
          hasRun = true;

          dashboard.querySelectorAll('[data-counter]').forEach(animateCounter);

          const barChart = dashboard.querySelector('[data-chart="bar"]');
          const lineChart = dashboard.querySelector('[data-chart="line"]');
          if (barChart) renderBarChart(barChart);
          if (lineChart) renderLineChart(lineChart);

          observer.unobserve(dashboard);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(dashboard);
})();
