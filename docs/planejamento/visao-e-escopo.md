# Visão e escopo

## Produto

O CSS em Folhas é um portal de estudos. O aluno se matricula, acompanha o progresso na área do aluno, assiste à trilha na sala de aula e pratica na jornada (curva, quizzes e laboratório).

A metáfora do projeto é pedagógica e técnica ao mesmo tempo: **HTML é o esqueleto**; **CSS é a identidade visual**. O próprio site demonstra tokens, camadas (`@layer`), tipografia, layout e motion.

## Objetivos

1. Ensinar CSS do seletor ao projeto final, com 12 aulas em vídeo e exercícios.
2. Manter uma identidade visual coerente via tokens em `:root`, visíveis na barra de status.
3. Entregar um site estático publicável (Netlify), sem backend, com estado no `localStorage`.
4. Preservar SEO, acessibilidade e testes de auditoria.

## Fora de escopo

- Conta de usuário em servidor, autenticação ou banco de dados.
- CMS ou gerador de site estático.
- Empacotamento (bundler, TypeScript, framework).

## Princípios de organização

- A **raiz** só guarda entrada (`index.html`) e configuração.
- Cada **pasta raiz** agrupa um tipo de artefato.
- Scripts de página ficam em `js/pages/`, alinhados ao HTML em `pages/`.
- Recursos visuais experimentais (palco 3D, estúdio, atmosfera) ficam em `js/features/` e nas folhas correspondentes em `css/`.
- Documentação de engenharia vive em `docs/`; material didático público, em `docs/produto/`.
