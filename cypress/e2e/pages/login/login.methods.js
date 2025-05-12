import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.type(username) //Acá le decimos que vaya a la clase LoginElements, busque un método
                                                        //que se llame textboxes y busque el elemento de username.
                                                        //type es un método de cypress para insertar y se le pasa el username como 
                                                        //propiedad
    }

    static insertPassword(password){
        LoginElements.textboxes.password.type(password)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }


    static login(username, password){ //Métemos todos los métodos en uno sólo.
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}