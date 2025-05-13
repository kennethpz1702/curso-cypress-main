export class SignupElements{
    static get textBoxes(){
        return{
            get username(){
                //Text BOx del usuario en registro
                return cy.get('input#sign-username')
            },

            get password(){
                //Text BOx de la contraseña en registro
                return cy.get('input#sign-password')
            }
        }
    }


    static get buttons(){
        return{
            get close(){
                return cy.contains('button', 'Close').eq(1)
            },
            get signup(){
                return cy.contains('button', 'Sign up')
            }
        }
    }
}