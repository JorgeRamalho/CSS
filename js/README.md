# js/

Scripts sem bundler, carregados por `<script>` na ordem abaixo.

```
js/
├── core/       dados globais e chrome (todas as páginas)
├── pages/      um arquivo por HTML em /pages
└── features/   recursos da home
```

| Pasta | Arquivos | Quando carrega |
| --- | --- | --- |
| [`core/`](core/README.md) | `data.js`, `app.js` | Toda página |
| [`pages/`](pages/README.md) | `matricula.js`, `aluno.js`, `sala.js`, `jornada.js` | Só a página correspondente |
| [`features/`](features/README.md) | `palco3d.js`, `estudio.js`, `atmosfera.js` | Só a home |

`data.js` define `FOLHAS` e as funções de estado; precisa vir antes de qualquer outro script.
