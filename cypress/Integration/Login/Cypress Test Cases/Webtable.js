// describe("Web table",() =>{

//     it("Sample Webtable",() =>{
//         cy.visit("https://www.w3schools.com/html/html_tables.asp")
//         cy.get("#customers tbody tr td:nth-child(1)").as("WebTable")

//         cy.get("@WebTable").each(($el,index,$list)=>{
//             const companyDetails=$el.text()
//             cy.log("Company Details "+companyDetails)
//             if(companyDetails.includes("Ernst Handel")){
//                 const contact=cy.get("@WebTable").eq(index).next().then(function(contact){
//                     cy.log("The Contact of Ernst Handel is "+contact.text())
//                 })
//             }

//          })  
//     }) 
// })