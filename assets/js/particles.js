/**
 * particles.js
 * Renderiza uma rede de nós conectados no <canvas id="network-canvas">,
 * simulando conexões de dados. Estética discreta, pensada para não competir
 * com o conteúdo do hero.
 *
 * Além dos nós "flutuantes" espalhados por toda a seção, existe um nó fixo
 * ("hub") ancorado no lado direito — que é onde o hero_content não ocupa
 * espaço — para garantir que aquela área sempre tenha uma composição visual
 * visível, em vez de depender só da aleatoriedade da distribuição.
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
    linkDistance: 150,
    density: 13000, // px² por nó — quanto maior, menos nós
    speed: 0.15,
    hub: {
      // Posição relativa (0–1) dentro do canvas. Fica no vazio à direita
      // do texto do hero, só é ativado em telas largas o bastante.
      xRatio: 0.80,
      yRatio: 0.42,
      minWidth: 980,
      radius: 3.4,
      linkDistance: 220,
      color: 'rgba(96, 165, 250, 0.9)',
      glow: 'rgba(96, 165, 250, 0.55)',
    },
  };

  let width, height, nodes, dpr, hub;
  let animationFrame, pulseT = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initNodes();
    initHub();
  }

  function initNodes() {
    const count = Math.max(28, Math.floor((width * height) / config.density));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * config.speed,
      vy: (Math.random() - 0.5) * config.speed,
    }));
  }

  function initHub() {
    hub = width >= config.hub.minWidth
      ? { x: width * config.hub.xRatio, y: height * config.hub.yRatio }
      : null;
  }

  function step() {
    ctx.clearRect(0, 0, width, height);
    pulseT += 0.02;

    // Atualiza posição
    for (const node of nodes) {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
    }

    // Desenha conexões entre nós flutuantes
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

    // Desenha o hub fixo e suas conexões com os nós próximos
    if (hub) {
      for (const node of nodes) {
        const dx = node.x - hub.x;
        const dy = node.y - hub.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.hub.linkDistance) {
          const opacity = 1 - dist / config.hub.linkDistance;
          ctx.strokeStyle = config.activeLineColor.replace('0.35', (opacity * 0.4).toFixed(2));
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(hub.x, hub.y);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }
      }

      const pulse = (Math.sin(pulseT) + 1) / 2; // 0 → 1
      const glowRadius = config.hub.radius * (2.2 + pulse * 1.4);

      const gradient = ctx.createRadialGradient(hub.x, hub.y, 0, hub.x, hub.y, glowRadius);
      gradient.addColorStop(0, config.hub.glow);
      gradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(hub.x, hub.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = config.hub.color;
      ctx.beginPath();
      ctx.arc(hub.x, hub.y, config.hub.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Desenha nós flutuantes
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
