# CSS em Folhas

Portal estático de estudos de CSS: HTML estrutura o conteúdo; CSS define a identidade visual.

A home (`index.html`) fica na raiz. O restante do site vive em pastas.

## Entrada rápida

| Comando | Função |
| --- | --- |
| `npm run dev` | Servidor local em `http://127.0.0.1:4173` |
| `npm test` | Auditoria Playwright (SEO, matrícula, sala, jornada, responsividade) |

## Raiz

| Arquivo | Por que fica aqui |
| --- | --- |
| `index.html` | home do portal |
| `package.json` / `package-lock.json` | npm |
| `netlify.toml` | deploy (Netlify lê na raiz) |
| `.gitignore` | Git |
| `README.md` | entrada do repositório |

## Pastas

| Pasta | Conteúdo |
| --- | --- |
| [`pages/`](pages/README.md) | Páginas internas (matrícula, aluno, sala, jornada) |
| [`css/`](css/README.md) | Folhas de estilo |
| [`js/`](js/README.md) | Scripts (core, pages, features) |
| [`assets/`](assets/README.md) | Marca e mídia |
| [`data/`](data/README.md) | Catálogos JSON |
| [`seo/`](seo/README.md) | `robots.txt` e `sitemap.xml` (URL pública na raiz) |
| [`config/`](config/README.md) | Playwright e `serve` |
| [`docs/`](docs/README.md) | Planejamento, pesquisas, estrutura, organização e apostila |
| [`tests/`](tests/README.md) | Auditoria Playwright |

Documentação completa: [`docs/README.md`](docs/README.md).
