const FACES_ORDEM = ["frente", "tras", "dir", "esq", "topo", "base"];

const FALLBACK_ATMOSFERA = {
  tecnicas: [
    {
      id: "blur",
      nome: "filter: blur()",
      kicker: "Ofuscar a camada",
      resumo: "blur() + opacity transformam o cubo em atmosfera, sem pintar a seção.",
      amostra: "filter: blur(var(--eco-blur))",
      faces: ["blur()", "opacity", "saturate()", "layer", "fundo", "canvas"],
      vars: {
        "--eco-blur": "22px",
        "--eco-mix": "plus-lighter",
        "--eco-opacidade": "0.42"
      }
    }
  ]
};

async function carregarCatalogo() {
  try {
    const resposta = await fetch("data/css3-atmosfera.json", { cache: "no-store" });
    if (!resposta.ok) throw new Error("Catálogo indisponível");
    return await resposta.json();
  } catch {
    return FALLBACK_ATMOSFERA;
  }
}

function aplicarTecnica(secao, tecnica, refs) {
  secao.dataset.tecnica = tecnica.id;
  Object.entries(tecnica.vars).forEach(([chave, valor]) => {
    secao.style.setProperty(chave, valor);
  });

  refs.kicker.textContent = tecnica.kicker;
  refs.titulo.textContent = tecnica.nome;
  refs.resumo.textContent = tecnica.resumo;
  refs.amostra.textContent = tecnica.amostra;

  refs.chips.forEach((botao) => {
    botao.setAttribute("aria-pressed", String(botao.dataset.tecnicaId === tecnica.id));
  });

  refs.nucleoFaces.forEach((face, indice) => {
    face.textContent = tecnica.faces[indice] ?? FACES_ORDEM[indice];
  });
}

function montarChips(tecnicas, alvo, aoEscolher) {
  alvo.replaceChildren();
  return tecnicas.map((tecnica, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "tecnica-chip";
    botao.dataset.tecnicaId = tecnica.id;
    botao.setAttribute("aria-pressed", indice === 0 ? "true" : "false");
    botao.textContent = tecnica.nome;
    botao.addEventListener("click", () => aoEscolher(tecnica));
    alvo.append(botao);
    return botao;
  });
}

function ligarOlhar(secao) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  secao.addEventListener("pointermove", (evento) => {
    const caixa = secao.getBoundingClientRect();
    const x = ((evento.clientX - caixa.left) / caixa.width) * 100;
    const y = ((evento.clientY - caixa.top) / caixa.height) * 100;
    secao.style.setProperty("--olho-x", `${x.toFixed(2)}%`);
    secao.style.setProperty("--olho-y", `${y.toFixed(2)}%`);
    secao.style.setProperty("--olhar-x", `${((x / 100 - 0.5) * 16).toFixed(2)}deg`);
    secao.style.setProperty("--olhar-y", `${((0.5 - y / 100) * 10).toFixed(2)}deg`);
  });

  secao.addEventListener("pointerleave", () => {
    secao.style.setProperty("--olho-x", "48%");
    secao.style.setProperty("--olho-y", "42%");
    secao.style.setProperty("--olhar-x", "0deg");
    secao.style.setProperty("--olhar-y", "0deg");
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const secao = document.querySelector("[data-atmosfera]");
  if (!secao) return;

  const refs = {
    chipsAlvo: secao.querySelector("[data-tecnica-chips]"),
    kicker: secao.querySelector("[data-tecnica-kicker]"),
    titulo: secao.querySelector("[data-tecnica-titulo]"),
    resumo: secao.querySelector("[data-tecnica-resumo]"),
    amostra: secao.querySelector("[data-tecnica-amostra]"),
    nucleoFaces: [...secao.querySelectorAll("[data-cubo-nucleo] .face")]
  };

  if (!refs.chipsAlvo || !refs.titulo) return;

  const catalogo = await carregarCatalogo();
  const tecnicas = catalogo.tecnicas ?? FALLBACK_ATMOSFERA.tecnicas;

  const escolher = (tecnica) => aplicarTecnica(secao, tecnica, refs);
  refs.chips = montarChips(tecnicas, refs.chipsAlvo, escolher);
  escolher(tecnicas[0]);
  ligarOlhar(secao);
});
