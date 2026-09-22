import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration for Ajay Readymade Store E2E tests.
 * Run: npx playwright test
 * Report: npx playwright show-report
 */
export default defineConfig({
  testDir: "./tests",
  /* Maximum time one test can run for. */
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  /* Limit workers to avoid overloading Next.js dev server during on-demand route compilation */
  workers: process.env.CI ? 2 : 2,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html", { open: "never" }], ["list"]],
  /* Shared settings for all the projects below. */
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
