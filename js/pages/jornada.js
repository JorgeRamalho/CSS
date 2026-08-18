function curvaPath(pct) {
  const p = Math.max(2, Math.min(100, pct));
  return `M 20 160 C 80 160, 90 ${160 - p}, 160 ${140 - p * 0.7} S 280 ${40 + (100 - p) * 0.3}, 380 ${30 + (100 - p) * 0.15}`;
}

function renderCurva(estado) {
  const svg = document.querySelector("[data-curva]");
  if (!svg) return;
  const pct = conclusaoPct(estado);
  svg.innerHTML = `
    <defs>
      <linearGradient id="curvaG" x1="0" x2="1">
        <stop offset="0" stop-color="#5eead4"/>
        <stop offset="0.5" stop-color="#a78bfa"/>
        <stop offset="1" stop-color="#f472d0"/>
      </linearGradient>
    </defs>
    <text x="20" y="24" fill="#9aa8c7" font-size="12" font-family="JetBrains Mono, monospace">iniciante</text>
    <text x="168" y="24" fill="#9aa8c7" font-size="12" font-family="JetBrains Mono, monospace">intermediário</text>
    <text x="310" y="24" fill="#9aa8c7" font-size="12" font-family="JetBrains Mono, monospace">avançado</text>
    <path d="M 20 160 C 80 160, 90 150, 160 120 S 280 70, 380 44" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="10" stroke-linecap="round"/>
    <path d="${curvaPath(pct)}" fill="none" stroke="url(#curvaG)" stroke-width="6" stroke-linecap="round"/>
    <circle cx="${20 + pct * 3.6}" cy="${160 - pct * 1.15}" r="8" fill="#5eead4"/>
  `;
}

function renderQuiz(estado) {
  const box = document.querySelector("[data-quiz]");
  if (!box) return;
  box.innerHTML = FOLHAS.exercicios
    .map((ex) => {
      const resp = estado.quizzes[ex.id];
      const ops = ex.opcoes
        .map((op, i) => {
          let state = "";
          if (resp !== undefined) state = i === ex.certa ? "certo" : i === resp ? "errado" : "";
          return `<button type="button" data-ex="${ex.id}" data-i="${i}" data-state="${state}">${op}</button>`;
        })
        .join("");
      return `<article class="card atividade"><header><h3>${ex.titulo}</h3><span class="kicker">${ex.nivel}</span></header><p>${ex.enunciado}</p><div class="quiz">${ops}</div></article>`;
    })
    .join("");

  box.querySelectorAll("button[data-ex]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-ex");
      const i = Number(btn.getAttribute("data-i"));
      const ex = FOLHAS.exercicios.find((e) => e.id === id);
      const s = carregarEstado();
      if (s.quizzes[id] !== undefined) return;
      s.quizzes[id] = i;
      if (i === ex.certa) {
        s.xp += 15;
        toast("Resposta certa. +15 XP");
      } else {
        toast("Quase. Confira a alternativa destacada.");
      }
      salvarEstado(s);
      renderQuiz(s);
      renderCurva(s);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const estado = carregarEstado();
  renderCurva(estado);
  renderQuiz(estado);

  const lab = document.querySelector("[data-lab]");
  const preview = document.querySelector("[data-preview]");
  if (lab && preview) {
    const aplicar = () => {
      preview.setAttribute("style", lab.value);
    };
    lab.addEventListener("input", aplicar);
    aplicar();
  }
});
