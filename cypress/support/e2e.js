
import '@testing-library/cypress/add-commands'
// Import commands.js using ES2015 syntax:
import './commands';
//import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
// Import commands.js using ES2015 syntax:
// Alternatively you can use CommonJS syntax:
// require('./commands')
//For connecting to SQL Server
// For visual regression
//addMatchImageSnapshotCommand(); // For snapshot testing
after(() => {
// cy.task('generateReport')
})
