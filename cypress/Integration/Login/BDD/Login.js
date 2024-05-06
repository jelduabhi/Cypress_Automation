import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import { default as LoginPage } from "../POM/LoginPage"

let testdata

    let loginPage=new LoginPage()

before(function(){
    cy.fixture("example").then(function(data){
    testdata=data
    })
})

Given("I launch the application",()=>{
cy.visit("https://demo.opencart.com/index.php?route=account/login&language=en-gb")
})

When("I enter user name and password",()=>{
    loginPage.loginTothepage(testdata)
})

Then("I should be able to Login",()=>{
    console.log("Logs")
})
