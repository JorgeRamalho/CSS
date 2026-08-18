function toast(msg) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    document.body.append(el);
  }
  el.textContent = msg;
  el.classList.add("visivel");
  window.setTimeout(() => el.classList.remove("visivel"), 2800);
}

function atualizarStatusBar(estado) {
  const root = document.documentElement;
  const feitos = aulasFeitas(estado);
  const pct = conclusaoPct(estado);
  const nivel = nivelDe(estado.xp);
  const trilha = estado.matricula?.trilha || "visitante";

  root.style.setProperty("--xp-aluno", String(estado.xp));
  root.style.setProperty("--nivel-aluno", String(nivel));
  root.style.setProperty("--conclusao", `${pct}%`);
  root.style.setProperty("--modulos-feitos", String(feitos));
  root.style.setProperty("--aulas-feitas", String(feitos));
  root.style.setProperty("--streak-aluno", String(estado.streak));
  root.style.setProperty("--trilha-aluno", `"${trilha}"`);

  const track = document.querySelector("[data-status-track]");
  if (track) {
    const cs = getComputedStyle(root);
    const chips = FOLHAS.tokensStatus
      .map(([nome, tipo]) => {
        const valor = cs.getPropertyValue(nome).trim() || "—";
        const isCor = tipo === "cor" && (valor.startsWith("#") || valor.startsWith("rgb") || valor.startsWith("oklch") || valor.startsWith("color") || valor.startsWith("hsl"));
        const swatch = isCor ? `<i class="swatch" style="background:${valor}"></i>` : "";
        const visivel = tipo === "texto" && valor.includes(",") ? valor.split(",")[0].replace(/['"]/g, "").trim() : valor;
        const curto = visivel.length > 22 ? `${visivel.slice(0, 20)}…` : visivel;
        return `<span class="var-chip" title="${tipo}: ${nome} = ${valor}">${swatch}<b>${nome}</b> ${curto}</span>`;
      })
      .join("");
    track.innerHTML = `
      <div class="status-marquee">
        <div class="status-marquee-set">${chips}</div>
        <div class="status-marquee-set" aria-hidden="true">${chips}</div>
      </div>
    `;
  }

  const aluno = document.querySelector("[data-status-aluno]");
  if (aluno) {
    aluno.innerHTML = `
      <span>XP ${estado.xp}</span>
      <span>Nível ${nivel} · ${nomeNivel(nivel)}</span>
      <span class="conclusao">Conclusão ${pct}%</span>
      <span>Aulas ${feitos}/${FOLHAS.aulas.length}</span>
      <span>Streak ${estado.streak}d</span>
      <span>Trilha ${trilha}</span>
    `;
  }

  const nomeAluno = document.querySelector("[data-nome-header]");
  if (nomeAluno) {
    nomeAluno.textContent = estado.matricula?.nomeCompleto?.split(" ")[0] || "Entrar";
  }
}

function nomeArquivo(caminho) {
  const limpo = String(caminho || "").split("#")[0].split("?")[0];
  const partes = limpo.split("/").filter(Boolean);
  const nome = partes.pop() || "index";
  return nome.replace(/\.html$/i, "") || "index";
}

function marcarNavegacao() {
  const arquivo = nomeArquivo(location.pathname);
  document.querySelectorAll(".nav-principal a").forEach((a) => {
    if (a.hasAttribute("download")) return;
    const href = nomeArquivo(a.getAttribute("href") || "");
    if (href === arquivo) {
      a.setAttribute("aria-current", "page");
    }
  });
}

async function baixarDocumentacao(evento) {
  const ancora = evento.currentTarget;
  const href = ancora.getAttribute("href");
  const nome = ancora.getAttribute("download") || "CSS-em-Folhas-documentacao-CSS3.html";
  if (!href) return;

  evento.preventDefault();
  try {
    const resposta = await fetch(href);
    if (!resposta.ok) throw new Error("Falha ao obter a documentação");
    const blob = await resposta.blob();
    const url = URL.createObjectURL(blob);
    const temporario = document.createElement("a");
    temporario.href = url;
    temporario.download = nome;
    temporario.click();
    URL.revokeObjectURL(url);
  } catch {
    window.location.assign(href);
  }
}

document.addEventListener("folhas:update", (ev) => atualizarStatusBar(ev.detail));

document.addEventListener("DOMContentLoaded", () => {
  marcarNavegacao();
  const estado = registrarStreak(carregarEstado());
  salvarEstado(estado);
  atualizarStatusBar(estado);

  document.querySelectorAll("[data-download-docs]").forEach((ancora) => {
    ancora.addEventListener("click", baixarDocumentacao);
  });

  const menuBtn = document.querySelector("[data-menu]");
  const nav = document.querySelector(".nav-principal");
  menuBtn?.addEventListener("click", () => {
    const aberto = nav.toggleAttribute("data-aberto");
    menuBtn.setAttribute("aria-expanded", String(aberto));
  });
});
