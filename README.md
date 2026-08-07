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

## Deploy na Vercel

Não preciso rodar nenhum build — é HTML/CSS/JS puro, então a Vercel serve direto.

1. Suba o repositório pro GitHub (`git push origin main`).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Em **Framework Preset**, selecione **Other** (ou deixe a detecção automática — ela reconhece como site estático).
4. **Build Command**: deixe vazio. **Output Directory**: deixe vazio (raiz do projeto).
5. Clique em **Deploy**.

Depois do primeiro deploy, a Vercel te dá uma URL tipo `seu-projeto.vercel.app`. Troque `https://joaogabrieltorre.vercel.app` pela URL real (ou pelo domínio customizado, se configurar um) nestes arquivos:

- `index.html` — tags `canonical`, `og:url`, `og:image`, `twitter:image` e o JSON-LD
- `robots.txt` — linha `Sitemap:`
- `sitemap.xml` — tag `<loc>`

Depois é só re-fazer o commit — a Vercel re-deploya automaticamente a cada push na branch principal.

## SEO

- Meta tags completas (description, keywords, Open Graph, Twitter Card)
- Imagem de OG gerada sob medida (`assets/images/background/og-image.jpg`, 1200×630) — troque por uma com foto real quando tiver
- Dados estruturados (`schema.org/Person`) no `<head>`, pra buscadores entenderem que a página é sobre uma pessoa e sua atuação profissional
- `sitemap.xml` e `robots.txt`
- Página 404 customizada (`404.html`)

## Acessibilidade & performance

- Skip-link ("Pular para o conteúdo") pra quem navega por teclado
- `prefers-reduced-motion` respeitado em todas as animações (loader, partículas, contadores, scroll reveal)
- Fallback via `<noscript>` — sem JS, a página ainda carrega legível (só perde os efeitos)
- Fontes carregadas com `font-display: swap` (texto aparece antes da fonte terminar de carregar)
- Cache agressivo pra assets estáticos configurado em `vercel.json`

## Roadmap

- [x] **Sprint 1** — Estrutura, Design System, Navbar, Hero, Loader, Footer
- [x] **Sprint 2** — About, Skills, Timeline, Dashboard animado
- [x] **Sprint 3** — Projetos (GitHub API), Certificações, Contato
- [x] **Sprint 4** — SEO, responsividade fina, performance, deploy

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
