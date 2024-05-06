// describe("Data Driven",() =>{

//     let testData

//     before(() => {
//         cy.fixture("example").then(function(data){
//             testData=data
//         })
//       })

//     it("Create an Account",() =>{
//         cy.visit("https://demo.opencart.com/index.php?route=account/register&language=en-gb")
//         cy.get("#input-firstname").type(testData.fname)
//         cy.get("#input-lastname").type(testData.lname)
//         cy.get("#input-email").type(testData.email)
//         cy.get("#input-password").type(testData.password)
//         cy.screenshot()   
//     }) 

//     it("Login to the Account",() =>{
//         cy.visit("https://demo.opencart.com/index.php?route=account/login&language=en-gb")
//         cy.get("#input-email").type(testData.email)
//         cy.get("#input-password").type(testData.password) 
//         cy.screenshot()       
//     }) 
// })