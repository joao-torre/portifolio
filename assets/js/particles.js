/**
 * particles.js
 * Renderiza uma rede de nós conectados no <canvas id="network-canvas">,
 * simulando conexões de dados. Estética discreta, pensada para não competir
 * com o conteúdo do hero.
 */

(function () {
  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const config = {
    nodeColor: 'rgba(148, 163, 184, 0.55)',
    lineColor: 'rgba(96, 165, 250, 0.12)',
    activeLineColor: 'rgba(96, 165, 250, 0.35)',
    nodeRadius: 1.6,
    linkDistance: 140,
    density: 18000, // px² por nó — quanto maior, menos nós
    speed: 0.15,
  };

  let width, height, nodes, dpr;
  let animationFrame;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initNodes();
  }

  function initNodes() {
    const count = Math.max(24, Math.floor((width * height) / config.density));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    // Atualiza posição
    for (const node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
    }

    // Desenha conexões
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.linkDistance) {
          const opacity = 1 - dist / config.linkDistance;
          ctx.strokeStyle = config.lineColor.replace('0.12', (opacity * 0.3).toFixed(2));
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Desenha nós
    ctx.fillStyle = config.nodeColor;
    for (const node of nodes) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, config.nodeRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    animationFrame = requestAnimationFrame(step);
  }

  function start() {
    resize();
    if (!prefersReducedMotion) {
      step();
    } else {
      // Frame estático para quem prefere menos movimento
      step();
      cancelAnimationFrame(animationFrame);
    }
  }

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      cancelAnimationFrame(animationFrame);
      resize();
      if (!prefersReducedMotion) step();
    }, 200);
  });

  document.addEventListener('DOMContentLoaded', start);
})();
