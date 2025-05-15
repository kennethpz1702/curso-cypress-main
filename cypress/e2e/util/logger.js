export class Logger{
    static stepNumber(number){
        const text = `Step # ${number}` //Alt + 96: ``
        cy.log(text)
        cy.allure().step(text)
    }

    static step(description){
        const text = `Step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static verification(description){
        const text = `Step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subStep(description){
        const text = `Step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subVerification(description){
        const text = `Step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
}