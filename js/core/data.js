const FOLHAS = {
  aulas: [
    {
      id: "css-01",
      modulo: "Iniciante",
      titulo: "O que CSS faz — e o que o HTML faz",
      youtube: "1Rs2ND1ryYc",
      duracao: "12 min",
      resumo: "HTML é o esqueleto (estrutura semântica). CSS é a voz visual: cor, ritmo, hierarquia e layout."
    },
    {
      id: "css-02",
      modulo: "Iniciante",
      titulo: "Anatomia de uma regra e a cascata",
      youtube: "OXGznpTZVsk",
      duracao: "18 min",
      resumo: "Seletor, propriedade, valor. Origem, especificidade, ordem e herança decidem o vencedor."
    },
    {
      id: "css-03",
      modulo: "Iniciante",
      titulo: "Seletores, especificidade e herança",
      youtube: "1PnVor36_40",
      duracao: "16 min",
      resumo: "Do elemento à pseudo-classe. Quando usar classe, quando evitar !important."
    },
    {
      id: "css-04",
      modulo: "Iniciante",
      titulo: "Box model, display e fluxo",
      youtube: "rIOWuFiUaNY",
      duracao: "20 min",
      resumo: "content, padding, border, margin. block, inline, inline-block e box-sizing."
    },
    {
      id: "css-05",
      modulo: "Iniciante",
      titulo: "Cor, unidades e tipografia",
      youtube: "Qhaz36TZG5Y",
      duracao: "22 min",
      resumo: "oklch, rem, clamp(), famílias, peso, leading e hierarquia editorial."
    },
    {
      id: "css-06",
      modulo: "Intermediário",
      titulo: "Flexbox: eixos, alinhamento e wrapping",
      youtube: "JJSoEo8JSrs",
      duracao: "24 min",
      resumo: "justify-content, align-items, gap e componentes de uma dimensão."
    },
    {
      id: "css-07",
      modulo: "Intermediário",
      titulo: "CSS Grid e áreas nomeadas",
      youtube: "jV8B24rSN5o",
      duracao: "28 min",
      resumo: "Trilhas, fr, minmax, auto-fit e layouts de página inteira."
    },
    {
      id: "css-08",
      modulo: "Intermediário",
      titulo: "Responsividade, fluid type e container queries",
      youtube: "srvUrASNj0s",
      duracao: "21 min",
      resumo: "Mobile-first, breakpoints, clamp() e consultas ao container, não só à viewport."
    },
    {
      id: "css-09",
      modulo: "Intermediário",
      titulo: "Variáveis CSS, temas e tokens",
      youtube: "PHO6TBqoiMw",
      duracao: "19 min",
      resumo: "Custom properties no :root, herança e a barra de status deste portal."
    },
    {
      id: "css-10",
      modulo: "Avançado",
      titulo: "Transições, transforms e animações",
      youtube: "zHUpxkmjdjQ",
      duracao: "26 min",
      resumo: "Motion com propósito. prefers-reduced-motion e performance em GPU."
    },
    {
      id: "css-11",
      modulo: "Avançado",
      titulo: "Seletores modernos, :has() e @layer",
      youtube: "hn3YFZ7sS0I",
      duracao: "18 min",
      resumo: "Camadas de cascata, estilizar o pai a partir do filho e arquitetura previsível."
    },
    {
      id: "css-12",
      modulo: "Conclusão",
      titulo: "Identidade visual, UX e projeto final",
      youtube: "1Rs2ND1ryYc",
      duracao: "30 min",
      resumo: "Unir tokens, tipografia, acessibilidade e layout num portal completo — como este."
    }
  ],
  exercicios: [
    {
      id: "ex-1",
      nivel: "Iniciante",
      titulo: "Pintar com tokens",
      enunciado: "Qual unidade é a melhor para o tamanho-base da tipografia acessível?",
      opcoes: ["px fixo em todos os títulos", "rem a partir do root", "cm para impressão de tela", "vw sem clamp em textos longos"],
      certa: 1
    },
    {
      id: "ex-2",
      nivel: "Iniciante",
      titulo: "Esqueleto vs. estilo",
      enunciado: "O que descreve corretamente o papel de HTML e CSS?",
      opcoes: [
        "CSS estrutura o documento; HTML só pinta cores",
        "HTML estrutura o conteúdo; CSS controla a apresentação visual",
        "Os dois fazem a mesma coisa no navegador",
        "CSS substitui tags semânticas como heading"
      ],
      certa: 1
    },
    {
      id: "ex-3",
      nivel: "Intermediário",
      titulo: "Eixo principal",
      enunciado: "Em Flexbox, justify-content age principalmente sobre:",
      opcoes: ["o eixo cruzado", "o eixo principal", "a especificidade", "a cascata"],
      certa: 1
    },
    {
      id: "ex-4",
      nivel: "Intermediário",
      titulo: "Grid honesto",
      enunciado: "Qual declaração cria colunas fluidas que cabem sozinhas?",
      opcoes: [
        "grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr))",
        "display: inline",
        "position: absolute",
        "float: left"
      ],
      certa: 0
    },
    {
      id: "ex-5",
      nivel: "Avançado",
      titulo: "Camadas",
      enunciado: "Para que serve @layer no CSS moderno?",
      opcoes: [
        "Para carregar fontes",
        "Para ordenar a cascata de forma explícita e previsível",
        "Para substituir o HTML",
        "Para desativar o box model"
      ],
      certa: 1
    }
  ],
  conquistas: [
    { id: "c1", nome: "Primeira folha", precisa: { aulas: 1 } },
    { id: "c2", nome: "Box model", precisa: { aulas: 4 } },
    { id: "c3", nome: "Layout fluído", precisa: { aulas: 8 } },
    { id: "c4", nome: "Token master", precisa: { xp: 120 } },
    { id: "c5", nome: "Trilha completa", precisa: { aulas: 12 } }
  ],
  tokensStatus: [
    ["--azul", "cor"],
    ["--ciano", "cor"],
    ["--violeta", "cor"],
    ["--magenta", "cor"],
    ["--coral", "cor"],
    ["--ouro", "cor"],
    ["--lima", "cor"],
    ["--ink-950", "cor"],
    ["--papel", "cor"],
    ["--texto", "cor"],
    ["--fonte-display", "texto"],
    ["--fonte-ui", "texto"],
    ["--fonte-serif", "texto"],
    ["--fonte-codigo", "texto"],
    ["--tamanho-display", "texto"],
    ["--tamanho-titulo", "texto"],
    ["--tamanho-corpo", "texto"],
    ["--tracking-kicker", "texto"],
    ["--gutter", "medida"],
    ["--raio-l", "medida"],
    ["--header-altura", "medida"],
    ["--status-altura", "medida"],
    ["--easing", "motion"],
    ["--conclusao", "aluno"],
    ["--xp-aluno", "aluno"],
    ["--nivel-aluno", "aluno"],
    ["--trilha-aluno", "aluno"]
  ]
};

const STORAGE_KEY = "folhas-aluno-v1";
const STORAGE_KEY_LEGADO = "cascata-aluno-v1";

function estadoPadrao() {
  return {
    matricula: null,
    aulas: {},
    quizzes: {},
    xp: 0,
    streak: 0,
    ultimoDia: null,
    notas: "",
    avatar: ""
  };
}

function carregarEstado() {
  try {
    const bruto = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY_LEGADO);
    return bruto ? { ...estadoPadrao(), ...JSON.parse(bruto) } : estadoPadrao();
  } catch {
    return estadoPadrao();
  }
}

function salvarEstado(estado) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
  document.dispatchEvent(new CustomEvent("folhas:update", { detail: estado }));
}

function aulasFeitas(estado) {
  return Object.values(estado.aulas).filter(Boolean).length;
}

function conclusaoPct(estado) {
  return Math.round((aulasFeitas(estado) / FOLHAS.aulas.length) * 100);
}

function nivelDe(xp) {
  if (xp >= 300) return 3;
  if (xp >= 120) return 2;
  return 1;
}

function nomeNivel(n) {
  return ["", "Iniciante", "Intermediário", "Avançado"][n];
}

function registrarStreak(estado) {
  const hoje = new Date().toISOString().slice(0, 10);
  if (estado.ultimoDia === hoje) return estado;
  const ontem = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  estado.streak = estado.ultimoDia === ontem ? estado.streak + 1 : 1;
  estado.ultimoDia = hoje;
  return estado;
}
