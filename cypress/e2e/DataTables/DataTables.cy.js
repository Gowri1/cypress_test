import { When } from "@badeball/cypress-cucumber-preprocessor";

When('I visit this page', (datatable) => {
  datatable.hashes().forEach((element) => {
  cy.visit(Cypress.env(element.url));
    //  cy.get("#email").clear();
    //  cy.get("#username").type(element.email);
    //  cy.get("#password").clear();
    //  cy.get("#password").type(element.password);
    //  cy.contains("submit").click();
  });
});