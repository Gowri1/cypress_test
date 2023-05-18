import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the url", ()=>{
    cy.visit("https://gtk-gowri.swstage.store/admin#/login")
})

When("I enter the email,password and click login", ()=>{
    cy.get('#sw-field--username').type('cloud@shopware.com')
    cy.get('#sw-field--password').type('Shopware123!')
    cy.get('.sw-button').click()
})

// Given('fetch the list of orders', () => {
//     cy.request("POST", "https://gtk-gowri.swstage.store/api/search/order", {
//     }).then((response) => {
//           expect(response.status).to.eq(200)
//      });
//   })