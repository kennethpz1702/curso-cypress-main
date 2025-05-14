export class ThankYouForYourPurchaseElements{
    static get buttons(){
        return{
           get ok(){
            cy.contains('button', 'OK') 
           },
        }
    }

    static get icons(){
        return{
            get greenCheckMark(){
                return cy.get('.sa-success') //Logo del check
            }
        }
    }
}