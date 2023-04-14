import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given('fetching the list of customers', () => {
  cy.request("GET", "https://jsonplaceholder.cypress.io/comments", {
  }).then((response) => {
     expect(response.status).to.eq(200)
     expect(response).to.have.property('headers')
     expect(response).to.have.property('duration')
  });
})