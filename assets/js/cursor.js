/**
 * cursor.js
 * Cursor customizado discreto — um ponto que segue o mouse com leve atraso
 * e cresce sobre elementos interativos. Desabilitado em telas touch e para
 * quem prefere menos movimento.
 */

(function () {
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouch || prefersReducedMotion) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  const style = document.createElement('style');
  style.textContent = `
    .cursor-dot {
      position: fixed;
      top: 0; left: 0;
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--color-accent);
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: width 0.2s var(--ease-out), height 0.2s var(--ease-out), opacity 0.2s;
      mix-blend-mode: difference;
      opacity: 0;
    }
    .cursor-dot.is-active { opacity: 1; }
    .cursor-dot.is-hovering { width: 28px; height: 28px; }
  `;
  document.head.appendChild(style);

  let x = 0, y = 0;

  window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.classList.add('is-active');
  }, { passive: true });

  document.addEventListener('mouseleave', () => dot.classList.remove('is-active'));

  document.querySelectorAll('a, button, .card').forEach((el) => {
    el.addEventListener('mouseenter', () => dot.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => dot.classList.remove('is-hovering'));
  });
})();
