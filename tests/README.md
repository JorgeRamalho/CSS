# tests/

Auditoria de qualidade do portal (não é suíte unitária).

| Arquivo | Cobertura |
| --- | --- |
| `auditoria.spec.js` | Idioma, título, descrição, um `h1`, skip link, header/footer; tipografia da home; campos da matrícula; download CSS3; âncora `#exercicios`; sala e jornada; overflow no viewport 390×844 |

## Como rodar

```bash
npm test
```

O Playwright sobe `npx serve -l 4173 .` e visita as URLs públicas (`/`, `/pages/matricula.html`, …). Relatórios ficam em `test-results/` (gitignored).
