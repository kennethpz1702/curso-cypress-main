import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elements";

export class ThankYouForYourPurchaseMethods{
    //Método botón de "ok"
    static clickOnOkButton(){
        cy.wait(1000)
        ThankYouForYourPurchaseElements.buttons.ok.click()
    }

    //Verificar el check verde
    static verifyGreenCheckMarkIsDisplay(){
        cy.wait(3000)
        ThankYouForYourPurchaseElements.icons.greenCheckMark.should('be.visible', { timeout: 10000})
    }
}