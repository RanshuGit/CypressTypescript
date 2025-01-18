import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || 'stage'
      config.env = require(`./config/${file}.json`);
      config.baseUrl = config.env.baseUrl;
      return config;
    },
    retries: 1,
    defaultCommandTimeout: 5000,
  },
})
