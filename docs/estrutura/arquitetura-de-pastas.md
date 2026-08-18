# Arquitetura de pastas

## Diagrama

```
Projeto-CSS/
├── index.html                 home do portal
├── package.json
├── package-lock.json
├── netlify.toml
├── .gitignore
├── README.md
│
├── pages/                     páginas internas
├── css/                       folhas (ordem da cascata)
├── js/
│   ├── core/                  dados + chrome do portal
│   ├── pages/                 um script por página em pages/
│   └── features/              palco 3D, estúdio, atmosfera
├── assets/                    mídia
├── data/                      JSON
├── seo/                       robots.txt e sitemap.xml
├── config/                    serve.json e playwright.config.js
├── docs/
│   ├── planejamento/
│   ├── pesquisas/
│   ├── estrutura/
│   ├── organizacao/
│   └── produto/
└── tests/                     auditoria Playwright
```

`node_modules/` e `test-results/` existem em desenvolvimento e não fazem parte da arquitetura publicada.

A raiz contém a home (`index.html`) e os arquivos que o Git, o npm e o Netlify precisam no topo do repositório.

## Contratos entre pastas

| Origem | Destino | Como se referencia |
| --- | --- | --- |
| `index.html` e `pages/*.html` | `css/`, `js/`, `assets/` | Caminho absoluto: `/css/tokens.css` |
| `js/features/atmosfera.js` | `data/css3-atmosfera.json` | `fetch("/data/css3-atmosfera.json")` |
| Navegação | `pages/*.html` | `/`, `/pages/matricula.html`, `/pages/sala.html?aula=` |
| Download CSS3 | `docs/produto/css3-referencia.html` | `/docs/produto/css3-referencia.html` |
| SEO | `seo/robots.txt`, `seo/sitemap.xml` | `/robots.txt`, `/sitemap.xml` (rewrite) |
| Testes | as mesmas URLs públicas | `config/playwright.config.js` sobe `serve` na raiz |

## Ordem de carga do CSS

1. `tokens.css` — variáveis
2. `base.css` — reset, tipografia, `@layer`
3. `layout.css` — header, status bar, footer, grids de página
4. `components.css` — botões, cards, formulário
5. `pages.css` — ajustes por tela
6. `efeito-3d.css` e `estudio.css` — só a home precisa destes dois

## Ordem de carga do JS

1. `js/core/data.js` — catálogo `FOLHAS` e `localStorage`
2. `js/core/app.js` — barra de status, navegação, download da apostila
3. Script da página (`js/pages/...`) **ou** recursos da home (`js/features/...`)

## URLs públicas

| URL | Arquivo |
| --- | --- |
| `/` | `index.html` |
| `/index.html` | `index.html` |
| `/pages/matricula.html` | `pages/matricula.html` |
| `/pages/aluno.html` | `pages/aluno.html` |
| `/pages/sala.html` | `pages/sala.html` |
| `/pages/jornada.html` | `pages/jornada.html` |
| `/docs/produto/css3-referencia.html` | `docs/produto/css3-referencia.html` |
| `/robots.txt` | `seo/robots.txt` |
| `/sitemap.xml` | `seo/sitemap.xml` |

Em produção e no `serve` local, `/matricula.html`, `/aluno.html`, `/sala.html`, `/jornada.html`, `/pages/index.html` e `/docs/css3-referencia.html` continuam válidos (rewrite ou 301).
