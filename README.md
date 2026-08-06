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

## Curando um projeto no GitHub

A seção de Projetos puxa automaticamente todos os repositórios públicos via GitHub API — não precisa tocar em código pra um projeto novo aparecer.

Para enriquecer um card específico com objetivo, desafios e aprendizados, adicione uma entrada em `data/projects.json` com o campo `repo` igual ao nome exato do repositório:

```json
{
  "repo": "nome-exato-do-repositorio",
  "title": "Nome de exibição (opcional)",
  "objective": "O que o projeto resolve.",
  "challenges": "O que foi difícil.",
  "learnings": "O que ficou de aprendizado.",
  "stack": ["Python", "Power BI"],
  "image": "assets/images/projects/nome.png"
}
```

Repositórios sem entrada correspondente ainda aparecem — só que com a descrição padrão do GitHub, no lugar de objetivo/desafios/aprendizados.

## Roadmap

- [x] **Sprint 1** — Estrutura, Design System, Navbar, Hero, Loader, Footer
- [x] **Sprint 2** — About, Skills, Timeline, Dashboard animado
- [x] **Sprint 3** — Projetos (GitHub API), Certificações, Contato
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
