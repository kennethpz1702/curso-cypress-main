import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    //Método que navega la aplicación
    static navigateToDemoBlaze(){
        cy.visit(CommonPageData.url) //La url está en la clase Data
    }

    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.cilck()
    }

    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click()
    }

    static clickOnAboutUsOption(){
        CommonPageElements.topMenu.aboutUs.click()
    }

    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click()
    }

    static clickOnLogInOption(){
        CommonPageElements.topMenu.logIn.click()
    }

    static clickOnSignUpOption(){
        CommonPageElements.topMenu.signUp.click()
    }
}