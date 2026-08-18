function preencherPerfil(estado) {
  const m = estado.matricula;
  const vazio = document.querySelector("[data-sem-matricula]");
  const painel = document.querySelector("[data-com-matricula]");
  if (!m) {
    vazio.hidden = false;
    painel.hidden = true;
    return;
  }
  vazio.hidden = true;
  painel.hidden = false;

  const set = (sel, val) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = val || "—";
  };

  set("[data-nome]", m.nomeCompleto);
  set("[data-social]", m.nomeSocial || "não informado");
  set("[data-email]", m.email);
  set("[data-cpf]", m.cpf);
  set("[data-rg]", m.rg);
  set("[data-nasc]", m.dataNascimento);
  set("[data-genero]", m.genero);
  set("[data-civil]", m.estadoCivil);
  set("[data-nascional]", m.nacionalidade);
  set("[data-tel]", m.telefone);
  set("[data-cel]", m.celular);
  set("[data-end]", `${m.logradouro}, ${m.numero} ${m.complemento || ""} — ${m.bairro}, ${m.cidade}/${m.uf} · CEP ${m.cep}`);
  set("[data-esc]", m.escolaridade);
  set("[data-trilha]", m.trilha);
  set("[data-turno]", m.turno);
  set("[data-prot]", m.protocolo);
  set("[data-xp]", String(estado.xp));
  set("[data-nivel]", nomeNivel(nivelDe(estado.xp)));
  set("[data-pct]", `${conclusaoPct(estado)}%`);

  const avatar = document.querySelector("[data-avatar]");
  if (avatar) {
    if (estado.avatar) avatar.src = estado.avatar;
    avatar.alt = `Foto de ${m.nomeCompleto}`;
  }
}

function renderConquistas(estado) {
  const box = document.querySelector("[data-conquistas]");
  if (!box) return;
  const feitos = aulasFeitas(estado);
  box.innerHTML = FOLHAS.conquistas
    .map((c) => {
      const ok = (c.precisa.aulas ? feitos >= c.precisa.aulas : true) && (c.precisa.xp ? estado.xp >= c.precisa.xp : true);
      return `<article class="badge" data-locked="${!ok}"><strong>${ok ? "★" : "☆"}</strong>${c.nome}</article>`;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const estado = carregarEstado();
  preencherPerfil(estado);
  renderConquistas(estado);

  document.querySelector("[name=notas]") && (document.querySelector("[name=notas]").value = estado.notas || "");
  document.querySelector("[name=notas]")?.addEventListener("input", (e) => {
    const s = carregarEstado();
    s.notas = e.target.value;
    salvarEstado(s);
  });

  document.querySelector("[name=avatar]")?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const s = carregarEstado();
      s.avatar = reader.result;
      salvarEstado(s);
      document.querySelector("[data-avatar]").src = reader.result;
      toast("Foto atualizada neste dispositivo.");
    };
    reader.readAsDataURL(file);
  });

  document.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-tab");
      document.querySelectorAll("[data-tab]").forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
      document.querySelectorAll("[data-painel]").forEach((p) => {
        p.hidden = p.getAttribute("data-painel") !== id;
      });
    });
  });
});
