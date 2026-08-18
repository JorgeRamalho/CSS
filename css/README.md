# css/

Folhas de estilo do portal. A ordem dos `<link>` no HTML é a ordem da cascata.

| Arquivo | Papel |
| --- | --- |
| `tokens.css` | Variáveis em `:root` (cor, tipo, espaço, motion, aluno) |
| `base.css` | Declara `@layer`; reset e fundamentos |
| `layout.css` | Chrome: header, navegação, status bar, footer |
| `components.css` | Peças reutilizáveis (botão, card, form, toast) |
| `pages.css` | Composições específicas de cada tela |
| `efeito-3d.css` | Palco 3D (home) |
| `estudio.css` | Estúdio ao vivo (home) |

Editar identidade visual: começar por `tokens.css`. A barra de status lê essas custom properties em tempo real.
