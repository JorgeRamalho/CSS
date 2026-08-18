# js/core/

Núcleo compartilhado. Presente em `index.html` e em todas as páginas de `pages/`.

| Arquivo | Função |
| --- | --- |
| `data.js` | Catálogo da trilha (`FOLHAS`), XP, streak, `localStorage` (`folhas-aluno-v1`) |
| `app.js` | Barra `:root`, item atual da navegação, download da apostila, menu |

Evento interno: `folhas:update` dispara quando o estado é salvo; a barra de status escuta esse evento.
