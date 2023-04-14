  // ***********************************************
  // This example commands.js shows you how to
  // create various custom commands and overwrite
  // existing commands.
  // For more comprehensive examples of custom
  // commands please read more here:
  // https://on.cypress.io/custom-commands
  // ***********************************************
  //import * as question from '../../fixtures/example.json'
  // -- This is a parent command --
  // Cypress.Commands.add("login", (email, password) => { ... })
  // -- This is a child command --
  // Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... }
  // -- This is a dual command --
  // Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
  // -- This will overwrite an existing command --
  // Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

  //For File Download
  import "cypress-downloadfile/lib/downloadFileCommand";

  
 Cypress.Commands.add("pageLoading", () => {
    cy.wait(Cypress.env("pageLoadWait"));
  });

  Cypress.Commands.add("selectProduct", (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        
     })
}) 

  Cypress.Commands.add("getByTestId", (selector) => {
    return cy.get(`[data-testid=${selector}]`);
  });

  Given("set view mode of screen to {string}", (viewMode) => {
    cy.viewport(viewMode)
  });
