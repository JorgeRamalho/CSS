const { test, expect } = require("@playwright/test");

const paginas = ["/", "/pages/matricula.html", "/pages/aluno.html", "/pages/sala.html", "/pages/jornada.html"];

test.describe("SEO e estrutura semântica", () => {
  for (const path of paginas) {
    test(`${path} tem idioma, título, descrição e um h1`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
      const title = await page.title();
      expect(title.length).toBeGreaterThan(12);
      expect(title).toMatch(/CSS em Folhas/i);
      const desc = page.locator('meta[name="description"]');
      await expect(desc).toHaveAttribute("content", /CSS/i);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator(".skip-link")).toBeAttached();
      await expect(page.locator("header.site-header")).toBeVisible();
      await expect(page.locator(".status-bar")).toBeVisible();
      await expect(page.locator("footer.site-footer")).toBeVisible();
      await expect(page.locator("nav.nav-principal a")).toHaveCount(5);
    });
  }
});

test.describe("Identidade visual e tipografia", () => {
  test("home usa tokens, display Syne e kicker em caixa alta", async ({ page }) => {
    await page.goto("/");
    const display = page.locator("h1");
    await expect(display).toBeVisible();
    const font = await display.evaluate((el) => getComputedStyle(el).fontFamily);
    expect(font.toLowerCase()).toContain("syne");
    await expect(page.locator(".kicker").first()).toBeVisible();
    await expect(page.locator(".texto-gradiente").first()).toBeVisible();
    const chips = page.locator("[data-status-track] .var-chip");
    await expect(chips.first()).toBeVisible();
    expect(await chips.count()).toBeGreaterThan(12);
  });
});

test.describe("Matrícula e usabilidade", () => {
  test("formulário cobre identificação, endereço, trilha e LGPD", async ({ page }) => {
    await page.goto("/pages/matricula.html");
    for (const name of [
      "nomeCompleto",
      "cpf",
      "email",
      "cep",
      "trilha",
      "turno",
      "motivacao",
      "lgpd"
    ]) {
      await expect(page.locator(`[name="${name}"]`)).toBeVisible();
    }
    const required = await page.locator("#form-matricula [required]").count();
    expect(required).toBeGreaterThan(18);
  });
});

test.describe("Header: documentação e exercícios", () => {
  test("oferece download da documentação CSS3 e atalho para exercícios", async ({ page }) => {
    await page.goto("/");
    const download = page.locator("nav.nav-principal a[data-download-docs]");
    await expect(download).toBeVisible();
    await expect(download).toHaveAttribute("download", /CSS3/i);
    await expect(download).toHaveAttribute("href", /css3-referencia/);
    await expect(download).toHaveAttribute("aria-label", /documentação CSS3/i);
    await expect(page.locator("nav.nav-principal a[href='/pages/jornada.html#exercicios']")).toHaveText("Exercícios");

    const [arquivo] = await Promise.all([
      page.waitForEvent("download"),
      download.click()
    ]);
    expect(arquivo.suggestedFilename()).toMatch(/CSS3/i);
  });

  test("exercícios abrem a âncora da jornada", async ({ page }) => {
    await page.goto("/pages/jornada.html#exercicios");
    await expect(page.locator("#exercicios")).toBeVisible();
    await expect(page.locator("[data-quiz]")).toBeVisible();
  });
});

test.describe("Sala, jornada e funcionabilidade", () => {
  test("sala lista módulos e carrega player", async ({ page }) => {
    await page.goto("/pages/sala.html");
    await expect(page.locator("[data-modulos] details")).toHaveCount(4);
    await expect(page.locator("[data-player]")).toHaveAttribute("src", /youtube-nocookie/);
    await page.locator("[data-concluir]").click();
    await expect(page.locator(".toast")).toContainText(/XP/i);
  });

  test("jornada renderiza curva e quizzes", async ({ page }) => {
    await page.goto("/pages/jornada.html");
    await expect(page.locator("[data-curva] path")).toHaveCount(2);
    await expect(page.locator("[data-quiz] .atividade")).toHaveCount(5);
    await expect(page.locator("[data-lab]")).toBeVisible();
  });
});

test.describe("Responsividade", () => {
  test("layout empilha no viewport estreito", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const hero = page.locator(".hero");
    const cols = await hero.evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(" ").length);
    expect(cols).toBe(1);
    await expect(page.locator(".status-bar")).toBeVisible();
    const overflowX = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 8);
    expect(overflowX).toBeTruthy();
  });
});
