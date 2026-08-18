function viaCep(cep) {
  const limpo = cep.replace(/\D/g, "");
  if (limpo.length !== 8) return;
  fetch(`https://viacep.com.br/ws/${limpo}/json/`)
    .then((r) => r.json())
    .then((data) => {
      if (data.erro) return toast("CEP não encontrado.");
      document.querySelector("[name=logradouro]").value = data.logradouro || "";
      document.querySelector("[name=bairro]").value = data.bairro || "";
      document.querySelector("[name=cidade]").value = data.localidade || "";
      document.querySelector("[name=uf]").value = data.uf || "";
    })
    .catch(() => toast("Não foi possível consultar o CEP agora."));
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-matricula");
  if (!form) return;

  const estado = carregarEstado();
  if (estado.matricula) {
    Object.entries(estado.matricula).forEach(([k, v]) => {
      const campo = form.elements[k];
      if (!campo || campo.type === "file" || campo.type === "password") return;
      if (campo.type === "checkbox") campo.checked = Boolean(v);
      else campo.value = v ?? "";
    });
  }

  form.elements.cep?.addEventListener("blur", (e) => viaCep(e.target.value));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    if (form.elements.email.value !== form.elements.email2.value) {
      toast("Os e-mails não coincidem.");
      form.elements.email2.focus();
      return;
    }
    if (form.elements.senha.value !== form.elements.senha2.value) {
      toast("As senhas não coincidem.");
      form.elements.senha2.focus();
      return;
    }

    const dados = Object.fromEntries(new FormData(form).entries());
    delete dados.senha;
    delete dados.senha2;
    dados.lgpd = form.elements.lgpd.checked;
    dados.newsletter = form.elements.newsletter.checked;
    dados.matriculadoEm = new Date().toISOString();
    dados.protocolo = `CSS-${Date.now().toString(36).toUpperCase()}`;

    const atual = carregarEstado();
    atual.matricula = dados;
    atual.xp += atual.xp >= 20 ? 0 : 20;
    salvarEstado(atual);
    toast("Matrícula registrada neste navegador.");
    window.setTimeout(() => {
      location.href = "aluno.html";
    }, 700);
  });
});
