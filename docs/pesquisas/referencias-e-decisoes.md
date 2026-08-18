# Referências e decisões

Síntese do que o portal aplica e do porquê da estrutura atual. Não substitui a apostila em [`../produto/css3-referencia.html`](../produto/css3-referencia.html).

## Pesquisa de produto

| Tema | Conclusão aplicada no portal |
| --- | --- |
| Papel de HTML e CSS | HTML semântico nas páginas; CSS só na apresentação (`css/`). |
| Cascata previsível | `@layer reset, base, layout, components, pages, utilities` em `base.css`. |
| Identidade | Tokens em `tokens.css`; a barra de status lê as custom properties ao vivo. |
| Layout | Grid no chrome (header, hero, sala); Flexbox em navegação e chips. |
| Tipografia | Syne (display), Figtree (UI), Fraunces (serif), JetBrains Mono (código). |
| Motion | Palco 3D com `perspective` / `preserve-3d`; `prefers-reduced-motion` no JS do palco. |
| Acessibilidade | Skip link, `lang="pt-BR"`, um `h1` por página, `aria-current` na navegação. |
| SEO | Canonical, Open Graph, JSON-LD `Course`, `robots.txt`, `sitemap.xml`. |
| Privacidade na matrícula | Bloco LGPD e campos de consentimento no formulário. |

## Decisões de estrutura (2026)

| Decisão | Motivo |
| --- | --- |
| `index.html` permanece na raiz | É a entrada do site e o `publish` do Netlify aponta para `.`. |
| Páginas internas em `pages/` | A raiz deixa de misturar rotas de produto com configuração. |
| Caminhos absolutos a partir da raiz (`/css/...`, `/js/...`) | HTML em `pages/` e na raiz resolvem os mesmos assets. |
| JavaScript em `core/`, `pages/` e `features/` | Cada arquivo fica na pasta do seu papel, sem um único diretório plano. |
| Apostila em `docs/produto/` | Separa material didático público de planejamento e inventário. |
| Redirects 301 no `netlify.toml` | URLs antigas (`/matricula.html`, `/docs/css3-referencia.html`) continuam válidas. |
| Sem bundler | O curso ensina CSS e HTML nativos; scripts são globais via `<script>`. |
| Estado em `localStorage` (`folhas-aluno-v1`) | Permite matrícula e progresso sem servidor. |

## Referências técnicas usadas no código

- Custom properties e `@property` — tokens e palco 3D.
- `:has()` — estados de formulário e layout da sala.
- `@layer` — ordem explícita da cascata.
- `color-mix()` / `oklch` — identidade em `tokens.css`.
- ViaCEP — preenchimento de endereço na matrícula.
- YouTube nocookie — player da sala.
- Playwright — auditoria em dois viewports (desktop Chrome e iPhone).
