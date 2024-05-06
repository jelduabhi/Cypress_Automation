import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user launch the application", () => {
    cy.visit("https://www.duckduckgo.com");
  });

  When("user enters valid credentials",()=>{
    cy.get("").type("")
    cy.get("").type("")
  })
  
  Then("user should be able to login", () => {
    cy.get().should("ha")
  });