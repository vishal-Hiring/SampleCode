const inventory =".inventory_item:nth-child(1) .btn_primary"
const cartButton =".shopping_cart_link"
const firstNAme ='[data-test="firstName"]'
const lastName ='[data-test="lastName"]'
const postalcode = '[data-test="postalCode"]'
const continuebutton = '#continue'
const finishButton ='#finish'
const checkoutButton='#checkout'

export default class order{
    addtocart()
    {
        cy.get(inventory).click();
    }
    clickCart()
    {
        cy.get(cartButton).click();
    }
    completecheckout(){
    cy.get(checkoutButton).click();
    cy.get(firstNAme).type('John');
    cy.get(lastName).type('Doe');
    cy.get(postalcode).type('12345');
    cy.get(continuebutton).click();
     cy.get(finishButton).click();
    }

}