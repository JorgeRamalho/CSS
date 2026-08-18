const path = require("path");
const { defineConfig, devices } = require("@playwright/test");

const raiz = path.join(__dirname, "..");

module.exports = defineConfig({
  testDir: path.join(raiz, "tests"),
  fullyParallel: true,
  timeout: 30000,
  use: {
    baseURL: "http://127.0.0.1:4173",
    locale: "pt-BR"
  },
  webServer: {
    command: "npx --yes serve --listen tcp://127.0.0.1:4173 -c config/serve.json .",
    cwd: raiz,
    url: "http://127.0.0.1:4173",
    reuseExistingServer: true,
    timeout: 120000
  },
  projects: [
    { name: "chromium-desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "webkit-mobile", use: { ...devices["iPhone 13"] } }
  ]
});
