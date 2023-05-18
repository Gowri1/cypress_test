import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Load payload version {string}", (url) => {
    cy.visit(Cypress.env(url));
    cy.wait(Cypress.env("defaultWait"));
});

When("Set view mode to mobile", () => {
    cy.viewport('iphone-4')
});

Then("Validate the heading", () => {
    cy.title().should('eq', 'npm')
});