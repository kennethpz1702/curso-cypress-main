import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignupElements } from "./signup.elements";

export class SignupMethods{
    static insertUsername(username){
        SignupElements.textBoxes.username.invoke("val",username)
    }

    static insertPassword(password){
        SignupElements.textBoxes.password.invoke("val", password)
    }

    static clickSignupButton(){
        SignupElements.buttons.signup.click()
    }

    static signup(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickSignupButton()
    }

    //Verifica que se muestre la alerta al registrar usuario
    static verifySigUpSuccessfulMessageDisplayed(){
        CommonPageMethods.verifyAlert('Sign up successful.')
    }

    //Este método verifica que se muestre una alerta cuando se inicie sesión
    //con datos inválidos, en este caso un usuario ya existente.
    static verifyThatThisUserAlredyExistMessageIsDisplay(){
        CommonPageMethods.verifyAlert('This user already exist.')
    }
}