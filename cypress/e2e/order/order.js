import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
const lp =new LoginPage()
import order from '../../pages/orderPage';
const od = new order()
Given('I visit the Sauce Demo website', () => {
  cy.visit('/');
});

When('I log in with valid credentials', () => {
    lp.submitLogin('standard_user','secret_sauce')
  
});

And('I add one item to the cart', () => {
    od.addtocart()
  
});

And('I proceed to the cart', () => {
  od.clickCart()
});

And('I complete the checkout process', () => {
  od.completecheckout()
});

Then('I should see the order confirmation page', () => {
  cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');
});
