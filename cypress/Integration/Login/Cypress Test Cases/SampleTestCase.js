/// <reference types="Cypress" />

import { default as LoginPage } from "../POM/LoginPage"

describe("My first test Suite",() =>{
    let testdata

    let loginPage=new LoginPage()

    before(function(){
        cy.fixture("example").then(function(data){
        testdata=data
        })
    })
    beforeEach(function(){
        cy.visit(Cypress.env("QA_ENV"))
    })

    it("Login Functionality",() =>{
       
        loginPage.loginTothepage(testdata)
       
    })

    it("Login Functionality 2",() =>{
       
        loginPage.loginTothepage(testdata)
       
    })

    
    it("Login Functionality 3",() =>{
       
        loginPage.loginTothepage(testdata)
       
    })

})
