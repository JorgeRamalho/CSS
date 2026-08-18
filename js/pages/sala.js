function agruparModulos() {
  const grupos = {};
  for (const aula of FOLHAS.aulas) {
    grupos[aula.modulo] ??= [];
    grupos[aula.modulo].push(aula);
  }
  return grupos;
}

function renderMenu(atualId) {
  const nav = document.querySelector("[data-modulos]");
  if (!nav) return;
  const estado = carregarEstado();
  const grupos = agruparModulos();
  nav.innerHTML = Object.entries(grupos)
    .map(([modulo, aulas]) => {
      const aberto = aulas.some((a) => a.id === atualId) ? "open" : "";
      const itens = aulas
        .map((a) => {
          const done = estado.aulas[a.id] ? " ✓" : "";
          const cur = a.id === atualId ? `aria-current="true"` : "";
          return `<button class="aula-item" data-aula="${a.id}" ${cur}>${a.titulo}${done}</button>`;
        })
        .join("");
      return `<details class="modulo" ${aberto}><summary>${modulo}</summary>${itens}</details>`;
    })
    .join("");

  nav.querySelectorAll("[data-aula]").forEach((btn) => {
    btn.addEventListener("click", () => abrirAula(btn.getAttribute("data-aula")));
  });
}

function abrirAula(id) {
  const aula = FOLHAS.aulas.find((a) => a.id === id) || FOLHAS.aulas[0];
  const player = document.querySelector("[data-player]");
  const titulo = document.querySelector("[data-aula-titulo]");
  const resumo = document.querySelector("[data-aula-resumo]");
  const meta = document.querySelector("[data-aula-meta]");
  if (player) {
    player.src = `https://www.youtube-nocookie.com/embed/${aula.youtube}?rel=0`;
    player.title = `Vídeo: ${aula.titulo}`;
  }
  if (titulo) titulo.textContent = aula.titulo;
  if (resumo) resumo.textContent = aula.resumo;
  if (meta) meta.textContent = `${aula.modulo} · ${aula.duracao} · ${aula.id}`;
  history.replaceState({ aula: aula.id }, "", `?aula=${aula.id}`);
  renderMenu(aula.id);
}

function aulaDaUrl() {
  const id = new URLSearchParams(location.search).get("aula");
  return FOLHAS.aulas.some((a) => a.id === id) ? id : FOLHAS.aulas[0].id;
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector("[data-player]")) return;
  abrirAula(aulaDaUrl());

  document.querySelector("[data-concluir]")?.addEventListener("click", () => {
    const id = new URLSearchParams(location.search).get("aula") || FOLHAS.aulas[0].id;
    const s = carregarEstado();
    if (!s.aulas[id]) {
      s.aulas[id] = true;
      s.xp += 25;
      salvarEstado(s);
      toast("Aula concluída. +25 XP");
    } else {
      toast("Esta aula já estava concluída.");
    }
    const idx = FOLHAS.aulas.findIndex((a) => a.id === id);
    const prox = FOLHAS.aulas[idx + 1];
    renderMenu(id);
    if (prox) abrirAula(prox.id);
  });
});
