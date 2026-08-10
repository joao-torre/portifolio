/**
 * typing.js
 * Efeito de máquina de escrever para elementos com [data-typing].
 * Lê a frase de data-typing-text e revela caractere a caractere.
 */

(function () {
  // Controla qual é a execução "atual" de digitação para cada elemento.
  // Isso evita que um loop antigo (de um clique anterior no seletor de idioma)
  // continue escrevendo caracteres depois que uma nova execução começou,
  // o que intercalava os textos e quebrava a frase.
  const runTokens = new WeakMap();

  function typeElement(el) {
    const key = el.getAttribute('data-typing-key');
    const text = key && window.portfolioI18n ? window.portfolioI18n.t(key) : (el.getAttribute('data-typing-text') || el.textContent);
    const speed = Number(el.getAttribute('data-typing-speed')) || 38;
    const startDelay = Number(el.getAttribute('data-typing-delay')) || 0;

    // Invalida qualquer execução anterior deste elemento.
    const myToken = {};
    runTokens.set(el, myToken);

    el.textContent = '';
    el.classList.add('hero__typing');

    let i = 0;
    function typeChar() {
      // Se uma nova execução foi iniciada para este elemento, este loop para aqui.
      if (runTokens.get(el) !== myToken) return;
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
