import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { SignupMethods } from "../pages/signup/signup.methods";
import { Logger } from "../util/logger";
const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7); //De 7 caracteres.
const existingUser = 'random01'

describe(CommonPageData.testSuites.registro, ()=>{
    it("Registro de usuario válido", () =>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la página de inicio ")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Sing Up" en la barra de navegación ')
        CommonPageMethods.clickOnSignUpOption()

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida')
        SignupMethods.insertUsername(user)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Sing up" para registrar el usuario')
        SignupMethods.clickSignupButton();
        cy.wait(5000)

        Logger.stepNumber(5)
        Logger.step('Verificar que se redirige al usuario a la página de inicio de sesión')
        SignupMethods.verifySigUpSuccessfulMessageDisplayed();
    });

    //Segundo caso de prueba, ingresar un usuario inválido.
    it("Registro de usuario inválido", () =>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la página de inicio ")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en "Sing Up" en la barra de navegación ')
        CommonPageMethods.clickOnSignUpOption()

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información inválida')
        SignupMethods.insertUsername(existingUser)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer click en "Sing up" para registrar el usuario')
        SignupMethods.clickSignupButton();
        cy.wait(5000)

        Logger.stepNumber(5)
        Logger.step('Verificar que se muestre un mensaje de error indicando los campos inválidos')
        SignupMethods.verifyThatThisUserAlredyExistMessageIsDisplay();

        cy.wait(5000)
    });
})