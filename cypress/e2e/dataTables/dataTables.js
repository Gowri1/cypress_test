import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit this page', (datatable) => {
  datatable.hashes().forEach((element) => {
  cy.visit(Cypress.env("testOne"));
  cy.get("#username").type(element.email);
  cy.get("#password").clear();
  cy.get("#password").type(element.password);
  cy.submitButton()
  });
});