import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Set view mode to {string}", (viewMode) => {
  cy.viewport('iphone-6')
});
