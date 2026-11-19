import process from "node:process";
import { defineConfig } from "@playwright/test";

const baseURL = "http://127.0.0.1:4179";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL,
    reducedMotion: "reduce",
    serviceWorkers: "block",
    launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH },
  },
  webServer: {
    command: "npm run dev -- --host 127.0.0.1 --port 4179 --strictPort",
    url: baseURL,
    reuseExistingServer: false,
  },
});
