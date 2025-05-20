export class CommonPageElements{
    static get topMenu(){ //Menú del header
        return{
            get home(){
                return cy.get('li.active a') //Pestaña Home
            },

            get contact(){
                return cy.get('a[data-target="#exampleModal"]')
            },

            get aboutUs(){
                return cy.get('a[data-target="#videoModal"]')
            },

            get cart(){
                return cy.contains('a', 'Cart')
            },

            get logIn(){
                return cy.get('a[data-target="#logInModal"]')
            },

            get signUp(){
                return cy.get('a[data-target="#signInModal"]')
            }
        }
    }


    static get signedUser(){
        return cy.get('a#nameofuser')
    }
}