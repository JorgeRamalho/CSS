# pages/

Páginas internas do portal. A home permanece em `/index.html`.

| Arquivo | Rota | Responsabilidade |
| --- | --- | --- |
| `matricula.html` | `/pages/matricula.html` | Formulário de cadastro e LGPD |
| `aluno.html` | `/pages/aluno.html` | Área do aluno |
| `sala.html` | `/pages/sala.html` | Player e módulos (`?aula=css-06`) |
| `jornada.html` | `/pages/jornada.html` | Curva, exercícios (`#exercicios`) e laboratório |

Cada HTML carrega `/js/core/data.js`, `/js/core/app.js` e o script correspondente em `js/pages/`.

Redirects de produção: `/matricula.html` → esta pasta (veja `netlify.toml`).
