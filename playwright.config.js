const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  timeout: 30000,
  use: {
    baseURL: "http://127.0.0.1:4173",
    locale: "pt-BR"
  },
  webServer: {
    command: "npx --yes serve -l 4173 .",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: true,
    timeout: 120000
  },
  projects: [
    { name: "chromium-desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "webkit-mobile", use: { ...devices["iPhone 13"] } }
  ]
});
