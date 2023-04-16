import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When("Load payload version {string}", (url) => {
    cy.wait(Cypress.env("defaultWait"));
    cy.visit(Cypress.env(url));
    cy.wait(Cypress.env("defaultWait"));
});

Given("Set view mode to {string}", (viewMode) => {
    cy.viewport('iphone-6')
});