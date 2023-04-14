const { defineConfig } = require('cypress')
const environment = require('./cypress.env.json')

module.exports = defineConfig({ 
  //reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 4000,
  video: false,
  env: JSON.parse(JSON.stringify(environment)),
  retries: {  
    runMode: 1,
  },
  projectId: '12345',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: ["cypress/e2e/RunFirst.cy.js","cypress/e2e/**/*.feature"],
  }
})
