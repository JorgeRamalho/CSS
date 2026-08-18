# CSS em Folhas

Portal estático de estudos de CSS: HTML estrutura o conteúdo; CSS define a identidade visual. A raiz do repositório contém só a entrada do site e os arquivos de configuração.

## Entrada rápida

| Comando | Função |
| --- | --- |
| `npm run dev` | Servidor local em `http://127.0.0.1:4173` |
| `npm test` | Auditoria Playwright (SEO, matrícula, sala, jornada, responsividade) |

## Mapa da raiz

**Arquivos (permanecem aqui)**

- `index.html` — home do portal
- `package.json` / `package-lock.json` — scripts e dependências de desenvolvimento
- `playwright.config.js` — testes de auditoria
- `netlify.toml` — publicação, headers e redirecionamentos
- `robots.txt` / `sitemap.xml` — descoberta por buscadores
- `.gitignore` — artefatos que não entram no repositório

**Pastas**

| Pasta | Conteúdo |
| --- | --- |
| [`pages/`](pages/README.md) | Páginas internas (matrícula, aluno, sala, jornada) |
| [`css/`](css/README.md) | Folhas de estilo, na ordem da cascata |
| [`js/`](js/README.md) | Scripts por papel: núcleo, páginas, recursos |
| [`assets/`](assets/README.md) | Marca e mídia |
| [`data/`](data/README.md) | Catálogos JSON |
| [`docs/`](docs/README.md) | Planejamento, pesquisas, estrutura, organização e material didático |
| [`tests/`](tests/README.md) | Especificações Playwright |

Documentação completa: [`docs/README.md`](docs/README.md).
