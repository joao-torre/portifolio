# João Gabriel Torre — Portfolio

Site pessoal de João Gabriel Gomes da Torre, Data Analyst focado em Business Intelligence e Risk Analytics.

**Conceito:** Transforming Data into Strategic Decisions.

🔗 Live: _em breve (deploy na Vercel — Sprint 4)_

## Stack

- HTML5 semântico
- CSS puro (design system em variáveis, sem framework)
- JavaScript vanilla (sem build step)
- Integração com a GitHub REST API para listagem automática de projetos

## Estrutura

```
portfolio/
├── index.html
├── assets/
│   ├── css/          → variables, reset, style, components, animations, responsive
│   ├── js/            → main, github, animations, typing, cursor, particles
│   ├── images/
│   └── fonts/
└── data/               → experience.json, certifications.json, projects.json
```

## Rodando localmente

Não há build step. Basta servir a pasta com qualquer servidor estático:

```bash
npx serve .
# ou
python3 -m http.server 5500
```

## Roadmap

- [x] **Sprint 1** — Estrutura, Design System, Navbar, Hero, Loader, Footer
- [ ] **Sprint 2** — About, Skills, Timeline, Dashboard animado
- [ ] **Sprint 3** — Projetos (GitHub API), Certificações, Contato
- [ ] **Sprint 4** — SEO, responsividade fina, performance, deploy

## Design System

| Token | Valor |
|---|---|
| Background | `#020617` |
| Cards | `#071A35` |
| Primary | `#2563EB` |
| Hover | `#3B82F6` |
| Accent | `#60A5FA` |
| Text | `#F8FAFC` |
| Texto secundário | `#94A3B8` |

Tipografia: **Space Grotesk** (títulos) · **Inter** (texto) · **JetBrains Mono** (dados/código).

## Autor

João Gabriel Gomes da Torre
[LinkedIn](https://linkedin.com/in/joaogabrieltorre) · [GitHub](https://github.com/joao-torre) · joaogabrieltorre@gmail.com
