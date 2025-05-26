import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    //Método que navega la aplicación
    static navigateToDemoBlaze(){
        cy.clearAllCookies()
        cy.clearLocalStorage()
        cy.visit(CommonPageData.url) //La url está en la clase Data
    }

    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click()
    }

    static waitForModalToClose() {
        cy.get('#logInModal').should('not.exist')
    }



    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click()
    }

    static clickOnAboutUsOption(){
        CommonPageElements.topMenu.aboutUs.click()
    }

    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click();
        Cypress.on('uncaught:exception', (err, runnable) =>{
            //Return false here prevent Cypress from
            //falling the test
            return false
        })
    }

    static clickOnLogInOption(){
        CommonPageElements.topMenu.logIn.click()
    }

    static clickOnSignUpOption(){
        CommonPageElements.topMenu.signUp.click()
    }

    static verifyAlert(expectedMessage){
        cy.on('window:alert', (str)=>{
            expect(str).to.equal(expectedMessage)
        })
    }

    //Para generar usuarios random a la hora de probr
    static generateRandomString(lenght = 10) {
        let result = "";
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLenght = characters.length;
        let counter = 0;
        while (counter < lenght) {
            result += characters.charAt(Math.floor(Math.random()* charactersLenght))
            counter += 1;
        }
        return result;
    }

    static verifySignedUer(username){
        CommonPageElements.signedUser.should('have.text', `Welcome ${username}`);
    }

    static Logout(){
        cy.get('body').then($body=>{
            if ($body.find('#logout2').lenght>0) {
                CommonPageElements.topMenu.logOut.click()
            }
        })
    }
}