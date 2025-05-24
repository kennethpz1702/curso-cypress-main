import { CommonPageMethods } from "../common-page/common-page.methods";
import { CartElements } from "./cart.elements";

export class CartMethos{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click()
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }

    static verifyCartPageIsShown(){
        cy.url().should('include', 'cart.html')
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click()
    }

     /*
    static emptyCart(username, password){
        CommonPageMethods.navigateToDemoBlaze()
        //Método logout: ....  
    }*/
}