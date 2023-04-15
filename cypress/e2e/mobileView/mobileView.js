import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Set view mode to {string}", (viewMode) => {
    cy.viewport('iphone-6')
});

When("Load payload version {string}", (url) => {
    cy.wait(Cypress.env("defaultWait"));
    cy.visit(Cypress.env(url));
    cy.wait(Cypress.env("defaultWait"));
  });
  