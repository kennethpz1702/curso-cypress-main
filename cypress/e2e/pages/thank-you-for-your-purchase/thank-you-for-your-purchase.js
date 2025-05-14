import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elements";

export class ThankYouForYourPurchaseMethods{
    //Método botón de "ok"
    static clickOnOkButton(){
        ThankYouForYourPurchaseElements.buttons.ok.click()
    }

    //Verificar el check verde
    static verifyGreenCheckMarkIsDisplay(){
        ThankYouForYourPurchaseElements.icons.greenCheckMark.should('exist')
    }
}