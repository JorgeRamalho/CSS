const CLASSES_ARTE = [
  "on-cena", "on-ceu", "on-disco", "on-disco-nitido", "on-disco-spin",
  "on-petalas", "on-petalas-mix", "on-anel", "on-anel-spin",
  "on-orbe", "on-glow", "on-3d", "on-titulo", "on-faixa", "on-spark", "on-legenda"
];

const ARTES = [
  {
    id: "folha",
    nome: "Folha",
    arquivo: "folha.css",
    titulo: "CSS3",
    legenda: "folha viva · conic-gradient",
    roteiro: [
      { log: "/* CSS em Folhas — folha.css */", kind: "c", wait: 360 },
      { log: "@layer arte {", kind: "k" },
      { log: "  .cena { isolation: isolate;", kind: "s", cls: "on-cena" },
      { log: "    background: radial-gradient(#1a2544, #070b16); }", kind: "p", cls: "on-ceu" },
      { log: "  .disco {", kind: "s" },
      { log: "    background: conic-gradient(#5eead4, #60a5fa, #f472d0, #e4c36a, #5eead4);", kind: "p", cls: "on-disco" },
      { log: "    filter: saturate(1.5);", kind: "p", cls: "on-disco-nitido" },
      { log: "    animation: girar 14s linear infinite; }", kind: "p", cls: "on-disco-spin" },
      { log: "  .petala { mix-blend-mode: screen;", kind: "s", cls: "on-petalas" },
      { log: "    background: linear-gradient(#5eead4, #f472d0); }", kind: "p", cls: "on-petalas-mix" },
      { log: "  .anel { border: 2px dashed #e4c36a;", kind: "s", cls: "on-anel" },
      { log: "    animation: girar 10s linear infinite reverse; }", kind: "p", cls: "on-anel-spin" },
      { log: "  .orbe { box-shadow: 0 0 40px #f472d0;", kind: "s", cls: "on-orbe" },
      { log: "    transform: rotateX(18deg) rotateY(-22deg); }", kind: "p", cls: "on-glow" },
      { log: "  h2 { background-clip: text; color: transparent; }", kind: "p", cls: "on-titulo" },
      { log: "  .faixa { clip-path: polygon(0 40%, 100% 0, 100% 60%, 0 100%); }", kind: "p", cls: "on-faixa" },
      { log: "  .faisca { box-shadow: 8rem -5rem 0 1px #fff; }", kind: "p", cls: "on-spark" },
      { log: "  figcaption { font-style: italic; }", kind: "p", cls: "on-legenda" },
      { log: "}", kind: "k", wait: 700 },
      { log: "/* folha compilada */", kind: "c", wait: 1200 }
    ]
  },
  {
    id: "aurora",
    nome: "Aurora",
    arquivo: "aurora.css",
    titulo: "AURORA",
    legenda: "filter · blur · mix-blend",
    roteiro: [
      { log: "/* CSS em Folhas — aurora.css */", kind: "c", wait: 360 },
      { log: ".ceu { background: radial-gradient(#042f2e, #020617); }", kind: "p", cls: "on-ceu" },
      { log: ".faixa {", kind: "s" },
      { log: "  background: linear-gradient(90deg, #22d3ee, #a3e635, #c084fc);", kind: "p", cls: "on-disco" },
      { log: "  filter: blur(18px) saturate(1.4);", kind: "p", cls: "on-disco-nitido" },
      { log: "  animation: deslocar 9s ease-in-out infinite; }", kind: "p", cls: "on-disco-spin" },
      { log: ".onda { mix-blend-mode: screen; opacity: 0.85; }", kind: "p", cls: "on-petalas" },
      { log: ".onda:nth-child(odd) { filter: blur(12px); }", kind: "p", cls: "on-petalas-mix" },
      { log: ".lua {", kind: "s", cls: "on-orbe" },
      { log: "  background: radial-gradient(circle at 30% 30%, #fff, #94a3b8);", kind: "p", cls: "on-glow" },
      { log: "  box-shadow: 0 0 50px #67e8f9; }", kind: "p" },
      { log: "h2 { letter-spacing: 0.18em; }", kind: "p", cls: "on-titulo" },
      { log: ".estrelas { box-shadow: 6rem -4rem 0 1px #fff; }", kind: "p", cls: "on-spark" },
      { log: "figcaption { color: #99f6e4; }", kind: "p", cls: "on-legenda" },
      { log: "/* aurora compilada */", kind: "c", wait: 1200 }
    ]
  },
  {
    id: "neon",
    nome: "Neon",
    arquivo: "neon.css",
    titulo: "NEON",
    legenda: "repeating-linear-gradient · glow",
    roteiro: [
      { log: "/* CSS em Folhas — neon.css */", kind: "c", wait: 360 },
      { log: "body { background: #05010a; }", kind: "p", cls: "on-ceu" },
      { log: ".grade {", kind: "s" },
      { log: "  background: repeating-linear-gradient(#f472d022, #f472d022 1px, transparent 1px 28px);", kind: "p", cls: "on-disco" },
      { log: "  transform: perspective(400px) rotateX(62deg);", kind: "p", cls: "on-disco-nitido" },
      { log: "  animation: pulse 3s ease-in-out infinite; }", kind: "p", cls: "on-disco-spin" },
      { log: ".trilha { box-shadow: 0 0 16px #22d3ee; }", kind: "p", cls: "on-petalas" },
      { log: ".placa {", kind: "s", cls: "on-orbe" },
      { log: "  border: 2px solid #f472d0;", kind: "p", cls: "on-glow" },
      { log: "  text-shadow: 0 0 12px #f472d0; }", kind: "p", cls: "on-3d" },
      { log: "h2 { color: #5eead4; text-shadow: 0 0 18px #5eead4; }", kind: "p", cls: "on-titulo" },
      { log: ".scan { height: 2px; background: #5eead4; }", kind: "p", cls: "on-faixa" },
      { log: "figcaption { font-family: ui-monospace, monospace; }", kind: "p", cls: "on-legenda" },
      { log: "/* neon compilado */", kind: "c", wait: 1200 }
    ]
  },
  {
    id: "onda",
    nome: "Onda",
    arquivo: "onda.css",
    titulo: "CLAMP",
    legenda: "sin via animation-delay · flex",
    roteiro: [
      { log: "/* CSS em Folhas — onda.css */", kind: "c", wait: 360 },
      { log: ".mar { background: linear-gradient(#0f172a, #082f49); }", kind: "p", cls: "on-ceu" },
      { log: ".sol { background: radial-gradient(#fde68a, #fb7185); }", kind: "p", cls: "on-disco" },
      { log: ".sol { filter: blur(2px); }", kind: "p", cls: "on-disco-nitido" },
      { log: ".barra {", kind: "s", cls: "on-petalas" },
      { log: "  animation: sobe 1.6s ease-in-out infinite;", kind: "p", cls: "on-petalas-mix" },
      { log: "  animation-delay: calc(var(--i) * 120ms); }", kind: "p" },
      { log: ".boia { border-radius: 50%; background: #5eead4; }", kind: "p", cls: "on-orbe" },
      { log: ".boia { box-shadow: 0 0 30px #22d3ee; }", kind: "p", cls: "on-glow" },
      { log: "h2 { font-variation-settings: \"wght\" 800; }", kind: "p", cls: "on-titulo" },
      { log: ".espuma { clip-path: ellipse(70% 40% at 50% 100%); }", kind: "p", cls: "on-faixa" },
      { log: "figcaption { letter-spacing: 0.08em; }", kind: "p", cls: "on-legenda" },
      { log: "/* onda compilada */", kind: "c", wait: 1200 }
    ]
  },
  {
    id: "vitral",
    nome: "Vitral",
    arquivo: "vitral.css",
    titulo: "@LAYER",
    legenda: "clip-path · color-mix",
    roteiro: [
      { log: "/* CSS em Folhas — vitral.css */", kind: "c", wait: 360 },
      { log: ".nave { background: #140c08; }", kind: "p", cls: "on-ceu" },
      { log: ".rosácea {", kind: "s", cls: "on-disco" },
      { log: "  background: conic-gradient(#f59e0b, #ef4444, #8b5cf6, #0ea5e9, #f59e0b);", kind: "p", cls: "on-disco-nitido" },
      { log: "  clip-path: polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%); }", kind: "p" },
      { log: ".vidro { clip-path: polygon(50% 0, 100% 100%, 0 100%); }", kind: "p", cls: "on-petalas" },
      { log: ".vidro { mix-blend-mode: plus-lighter; }", kind: "p", cls: "on-petalas-mix" },
      { log: ".aro { border: 3px solid #e4c36a; }", kind: "p", cls: "on-anel" },
      { log: ".joia { background: radial-gradient(#fff7ed, #b45309); }", kind: "p", cls: "on-orbe" },
      { log: ".joia { box-shadow: 0 0 28px #f59e0b; }", kind: "p", cls: "on-glow" },
      { log: "h2 { font-family: Fraunces, serif; }", kind: "p", cls: "on-titulo" },
      { log: "figcaption { font-style: italic; }", kind: "p", cls: "on-legenda" },
      { log: "/* vitral compilado */", kind: "c", wait: 1200 }
    ]
  }
];

function pintarLinha(texto, kind) {
  const span = document.createElement("span");
  span.className = `ln ${kind || ""}`;
  if (kind === "p") {
    const partes = texto.split(":");
    if (partes.length > 1) {
      span.innerHTML = `<span class="p">${partes[0]}:</span><span class="v">${partes.slice(1).join(":")}</span>`;
      return span;
    }
  }
  span.textContent = texto;
  return span;
}

function iniciarEstudio() {
  const log = document.querySelector("[data-log]");
  const arte = document.querySelector("[data-arte]");
  const meta = document.querySelector("[data-live-meta]");
  const metaPreview = document.querySelector("[data-preview-meta]");
  const nomeArquivo = document.querySelector("[data-log-arquivo]");
  const tituloEl = document.querySelector("[data-arte-titulo]");
  const legendaEl = document.querySelector("[data-arte-legenda]");
  if (!log || !arte) return;

  const cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.setAttribute("aria-hidden", "true");

  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const estado = {
    modo: "loop",
    indice: 0,
    passo: 0,
    timer: 0
  };

  const arteAtual = () => ARTES[estado.indice];

  function limparCena() {
    CLASSES_ARTE.forEach((c) => arte.classList.remove(c));
    arte.style.removeProperty("--ceu");
  }

  function aplicarTema() {
    const atual = arteAtual();
    arte.dataset.tema = atual.id;
    if (tituloEl) tituloEl.textContent = atual.titulo;
    if (legendaEl) legendaEl.textContent = atual.legenda;
    if (nomeArquivo) nomeArquivo.textContent = `${atual.arquivo} — log`;
    if (metaPreview) metaPreview.textContent = atual.nome;
    document.querySelectorAll("[data-arte-id]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-arte-id") === atual.id));
    });
  }

  function pintarTudo() {
    const atual = arteAtual();
    limparCena();
    aplicarTema();
    log.replaceChildren();
    atual.roteiro.forEach((passo) => {
      log.append(pintarLinha(passo.log, passo.kind));
      passo.cls && arte.classList.add(passo.cls);
      passo.run?.(arte);
    });
  }

  function proximoIndice() {
    if (estado.modo === "random") {
      if (ARTES.length < 2) return estado.indice;
      let n = estado.indice;
      while (n === estado.indice) n = Math.floor(Math.random() * ARTES.length);
      return n;
    }
    return (estado.indice + 1) % ARTES.length;
  }

  function rodar() {
    const atual = arteAtual();
    if (estado.passo === 0) {
      log.replaceChildren();
      limparCena();
      aplicarTema();
      if (meta) meta.dataset.estado = "compilando";
    }

    const passo = atual.roteiro[estado.passo];
    log.append(pintarLinha(passo.log, passo.kind));
    log.append(cursor);
    log.scrollTop = log.scrollHeight;
    passo.cls && arte.classList.add(passo.cls);
    passo.run?.(arte);

    estado.passo += 1;
    if (estado.passo >= atual.roteiro.length) {
      estado.passo = 0;
      estado.indice = proximoIndice();
    }
    estado.timer = window.setTimeout(rodar, passo.wait ?? 110);
  }

  function tocar(id) {
    window.clearTimeout(estado.timer);
    const achada = ARTES.findIndex((a) => a.id === id);
    if (achada >= 0) estado.indice = achada;
    estado.passo = 0;
    if (reduzir) {
      pintarTudo();
      return;
    }
    rodar();
  }

  document.querySelectorAll("[data-modo]").forEach((btn) => {
    btn.addEventListener("click", () => {
      estado.modo = btn.getAttribute("data-modo");
      document.querySelectorAll("[data-modo]").forEach((b) => {
        b.setAttribute("aria-pressed", String(b === btn));
      });
    });
  });

  document.querySelectorAll("[data-arte-id]").forEach((btn) => {
    btn.addEventListener("click", () => tocar(btn.getAttribute("data-arte-id")));
  });

  if (reduzir) {
    pintarTudo();
    return;
  }

  rodar();
}

document.addEventListener("DOMContentLoaded", iniciarEstudio);
