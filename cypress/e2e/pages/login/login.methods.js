import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val',username) //Acá le decimos que vaya a la clase LoginElements, busque un método
                                                        //que se llame textboxes y busque el elemento de username.
                                                        //type es un método de cypress para insertar y se le pasa el username como 
                                                        //propiedad
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val',password)
    }

    static clickOnLoginButton(){
    LoginElements.buttons.login
        .should('be.visible')
        .click({ force: true });
    }


    static login(username, password){ //Métemos todos los métodos en uno sólo.
        Logger.subStep('Insertar username')
        this.insertUsername(username)
        Logger.subStep('Insertar password')
        this.insertPassword(password)
        Logger.subStep('Click on Login')
        this.clickOnLoginButton()
    }

    static verifyWrongPasswordMessage(){
        CommonPageMethods.verifyAlert("Wrong password.")
    }
}