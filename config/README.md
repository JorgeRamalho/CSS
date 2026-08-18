# config/

Configuração de desenvolvimento. Não é conteúdo do site.

| Arquivo | Função |
| --- | --- |
| `serve.json` | Servidor local: rewrites da home/SEO e redirects das URLs antigas |
| `playwright.config.js` | Auditoria em Chrome desktop e WebKit mobile |

Scripts em `package.json`:

- `npm run dev` → `serve -c config/serve.json`
- `npm test` → `playwright test -c config/playwright.config.js`
