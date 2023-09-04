import {Given ,When ,Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../pages/LoginPage"
const Lp =new LoginPage()

Given("User Visits Login Page",()=>{
    cy.visit("/")
})
When ("User enters correct creds",()=>{
  Lp.submitLogin('standard_user','secret_sauce')
})
Then("user should be able to Login",()=>{
  Lp.Success()
})