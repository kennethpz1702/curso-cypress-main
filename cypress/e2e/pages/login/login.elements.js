export class LoginElements{
    static get textboxes(){ //Esto es para el login in, son text Box donde se ingresa los datos por eso se llama así
        return{
            get username(){
                return cy.get('input#loginusername') //Se adquiere al tener la extensión
            },
            get password(){
                return cy.get('input#loginpassword') //Se adquiere al tener la extensión
            }
        };
    }

    static get buttons(){
        return{
            get close(){
                return cy.get('div[id="logInModal"] button').eq(1)
            },
            get login(){
                return cy.contains('button', 'Log in')
            }
        }
    }
}