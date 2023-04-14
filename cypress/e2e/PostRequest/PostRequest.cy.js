import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given('getting the questions per market', () => {
  cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "title #101",
    body: "post #101",
    userId: 101,
  }).then((response) => {
    cy.log("response", response);
    expect(response.status).to.eq(201)
  });
});