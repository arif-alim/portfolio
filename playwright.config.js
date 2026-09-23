const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: 'http://127.0.0.1:3102',
    trace: 'retain-on-failure',
  },
  projects: [390, 768, 1280].flatMap((width) =>
    ['light', 'dark'].map((colorScheme) => ({
      name: `${width}-${colorScheme}`,
      use: { viewport: { width, height: 900 }, colorScheme },
    }))
  ),
  webServer: {
    command: 'npm run start -- --hostname 127.0.0.1 --port 3102',
    url: 'http://127.0.0.1:3102',
    reuseExistingServer: !process.env.CI,
  },
})
