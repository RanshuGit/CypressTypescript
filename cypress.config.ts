import { defineConfig } from 'cypress'
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config, {
        resultsDir: "./reports/allure-results",
      });
      const file = config.env.configFile || 'stage'
      config.env = require(`./config/${file}.json`);
      config.baseUrl = config.env.baseUrl;
      return config;
    },
    // reporter: 'mochawesome',
    // reporterOptions: {
    //   charts: true,
    //   reportDir: './reports/',
    //   reportFilename: 'mochawesome_report',
    //   overwrite: true
    // },
    retries: 1,
    defaultCommandTimeout: 5000,
  },
})
