class LoginPage{


    loginTothepage(data){
        cy.get("#input-email").type(data.email)
        cy.get("#input-password").type(data.password)
        cy.get("#form-login > .btn").click()
    }

}
export default LoginPage