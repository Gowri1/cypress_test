import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Load URL{string}", (url) => {
  cy.wait(Cypress.env("defaultWait"));
  cy.visit(Cypress.env(url));
});

Then("end screen should be visible", () => {
  cy.getByTestId("goodbye_screen").should("be.visible");
});

Then("Thankyou screen should be visible", () => {
  cy.getByTestId("thankyou_screen").should("be.visible");
});

Then("Thankyou image should be present on Thankyou screen",()=> {
  cy.getByTestId("thankyou_screen").children().children().invoke('attr','alt').should('include','Thank you')
});

Then("goodbye image should be present on goodbye screen",()=> {
  cy.getByTestId("goodbye_screen").children().invoke('attr','alt').should('include','Good bye')
});

Then("heading should be visible", () => {
  cy.get('[data-testid="question-label"]').should("be.visible")
});