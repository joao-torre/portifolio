/**
 * typing.js
 * Efeito de máquina de escrever para elementos com [data-typing].
 * Lê a frase de data-typing-text e revela caractere a caractere.
 */

(function () {
  function typeElement(el) {
    const key = el.getAttribute('data-typing-key');
    const text = key && window.portfolioI18n ? window.portfolioI18n.t(key) : (el.getAttribute('data-typing-text') || el.textContent);
    const speed = Number(el.getAttribute('data-typing-speed')) || 38;
    const startDelay = Number(el.getAttribute('data-typing-delay')) || 0;

    el.textContent = '';
    el.classList.add('hero__typing');

    let i = 0;
    function typeChar() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, speed);
      }
    }

    setTimeout(typeChar, startDelay);
  }

  function initTyping() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('[data-typing]').forEach((el) => {
      if (prefersReducedMotion) {
        const key = el.getAttribute('data-typing-key');
        el.textContent = key && window.portfolioI18n ? window.portfolioI18n.t(key) : (el.getAttribute('data-typing-text') || el.textContent);
        return;
      }
      typeElement(el);
    });
  }

  document.addEventListener('DOMContentLoaded', initTyping);
  window.addEventListener('languagechange', initTyping);
})();
