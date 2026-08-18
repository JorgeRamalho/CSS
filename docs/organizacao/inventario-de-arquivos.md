# Inventário de arquivos

Cada arquivo do projeto, na pasta em que deve viver. Itens gerados (`node_modules/`, `test-results/`) não entram neste catálogo.

## Raiz

| Arquivo | Função |
| --- | --- |
| `index.html` | Home: palco 3D, estúdio, atmosfera |
| `README.md` | Mapa curto da raiz e comandos |
| `package.json` | Scripts `dev`, `test`, `test:seo` |
| `package-lock.json` | Trava das versões de desenvolvimento |
| `netlify.toml` | Publish `.`, headers, rewrites de SEO e redirects 301 |
| `.gitignore` | `node_modules`, relatórios Playwright, `.netlify` |

## `pages/`

| Arquivo | Função | Script |
| --- | --- | --- |
| `matricula.html` | Cadastro completo + LGPD | `js/pages/matricula.js` |
| `aluno.html` | Painel, progresso, conquistas, notas | `js/pages/aluno.js` |
| `sala.html` | 12 aulas em vídeo, query `?aula=` | `js/pages/sala.js` |
| `jornada.html` | Curva, quizzes, laboratório | `js/pages/jornada.js` |
| `README.md` | Este agrupamento |

## `css/`

| Arquivo | Camada / papel |
| --- | --- |
| `tokens.css` | Custom properties da marca |
| `base.css` | `@layer`, reset, tipografia, utilitários |
| `layout.css` | Header, status bar, footer, grids do chrome |
| `components.css` | Botões, cards, formulário, toast, player |
| `pages.css` | Home, sala, jornada, aluno, matrícula |
| `efeito-3d.css` | Palco 3D da home |
| `estudio.css` | Estúdio ao vivo da home |
| `README.md` | Ordem de carga |

## `js/core/`

| Arquivo | Função |
| --- | --- |
| `data.js` | `FOLHAS` (aulas, exercícios, tokens da barra), persistência |
| `app.js` | Status bar, `aria-current`, download da apostila, menu |

## `js/pages/`

| Arquivo | Página |
| --- | --- |
| `matricula.js` | Validação, ViaCEP, gravação da ficha |
| `aluno.js` | Preenche o painel a partir do estado |
| `sala.js` | Menu de módulos, player, conclusão de aula |
| `jornada.js` | SVG da curva, quizzes, laboratório |

## `js/features/`

| Arquivo | Recurso | Folha |
| --- | --- | --- |
| `palco3d.js` | Olhar do palco segue o ponteiro | `css/efeito-3d.css` |
| `estudio.js` | Log de código + preview de artes | `css/estudio.css` |
| `atmosfera.js` | Técnicas CSS3 no cubo (JSON) | `css/efeito-3d.css` |

## `assets/`

| Arquivo | Função |
| --- | --- |
| `logo.svg` | Favicon, avatar padrão, marca no header |

## `data/`

| Arquivo | Consumidor |
| --- | --- |
| `css3-atmosfera.json` | `js/features/atmosfera.js` |

## `seo/`

| Arquivo | URL pública |
| --- | --- |
| `robots.txt` | `/robots.txt` |
| `sitemap.xml` | `/sitemap.xml` |

## `config/`

| Arquivo | Função |
| --- | --- |
| `serve.json` | Rewrites da home/SEO e redirects das rotas antigas |
| `playwright.config.js` | Dois projetos + comando do servidor local |

## `docs/`

| Arquivo | Função |
| --- | --- |
| `README.md` | Índice da documentação |
| `planejamento/visao-e-escopo.md` | Produto, objetivos, limites |
| `pesquisas/referencias-e-decisoes.md` | Pesquisa e decisões |
| `estrutura/arquitetura-de-pastas.md` | Diagrama e contratos |
| `organizacao/inventario-de-arquivos.md` | Este arquivo |
| `produto/css3-referencia.html` | Apostila CSS3 para download |
| `produto/README.md` | Papel da apostila |

## `tests/`

| Arquivo | Função |
| --- | --- |
| `auditoria.spec.js` | SEO, tipografia, matrícula, header, sala/jornada, viewport estreito |
| `README.md` | Como rodar |

## Convenção de caminhos

Todo HTML do site usa URLs a partir da raiz (`/pages/...`, `/css/...`, `/js/...`). Assim a pasta do arquivo HTML não altera a resolução de CSS, JS ou dados.
