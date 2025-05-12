const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer'); //Enlace de Cypress allure report

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    allureWriter(on, config);
      return config; //También se consigue en cypress allure report
    },
  },
});
