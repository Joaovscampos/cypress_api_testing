const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    experimentalRunAllSpecs: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    watchForFileChanges: false,
    video: false,
    screenshotOnRunFailure: false,
    retries: {
      runMode: 2
    },
    setupNodeEvents(on, config) {
      config.env.token = process.env.CYPRESS_TOKEN || 'token-here';
      return config; 
    },
  },
});
