import { default as Example3 } from "./Example3"

describe("My Second test Suite",() =>{
    

let testdata
    before(function(){
        cy.fixture("SampleCheckBoxes").then(function(data){
        testdata=data
        })
    })

    it("Check check boxes",() =>{
        cy.visit("https://omayo.blogspot.com/")
        let obj=new Example3()
        cy.log("Addition is"+ obj.addition())

    }) 
})