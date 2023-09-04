const username="#user-name"
const passwordInput= "#password"
const loginBtn= "#login-button"
const errorMessage = '[class="error-button"]'
const Success ='[class="app_logo"]'
export default class LoginPage {
 
  typeUsername(usernames) {
    cy.get(username).type(usernames)
  }

  typePassword(passwords) {
    cy.get(passwordInput).type(passwords)
  }

  clickLogin() {
    cy.get(loginBtn).click()
  }
  errorMessage(){
    cy.get(errorMessage).should('be.visible')
  }
  Success(){
    cy.get(Success).should('be.visible')
  }

  submitLogin(usernames,passwords){
    cy.get(username).type(usernames)
    cy.get(passwordInput).type(passwords)
    cy.get(loginBtn).click()
  }
}

