const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://clinlife.fi/sv-FI/studies-overview',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
