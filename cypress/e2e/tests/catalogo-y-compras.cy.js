import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { Logger } from "../util/logger";
import { LoginMethods } from "../pages/login/login.methods";
import { LoginData } from "../pages/login/login.data";
import { HomeMethods } from "../pages/home/home.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { CartMethos } from "../pages/cart/cart.methods";

const user = LoginData.validCredentials
const product = 'ASUS Full HD'

describe(CommonPageData.testSuites.catalogoYCompras, ()=>{
    it('Navegar por categorías', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado')
        Logger.subStep('Navegar a la aplicación DemoBlaze')
        CommonPageMethods.navigateToDemoBlaze()

        Logger.subStep('Dar click en "Log in"')
        CommonPageMethods.clickOnLogInOption()
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnMonitorsOption()
        Logger.verification('Verificar que se muestra la lista de productos correspondientes a la categoría seleccionada')
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        HomeMethods.verifyProductDisplayed('ASUS Full HD')
        cy.wait(8000)
    })

    
    //Caso de prueba: Agregar producto al carrito.
     it('Agregar producto al carrito.', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado')
        Logger.subStep('Navegar a la aplicación DemoBlaze')
        CommonPageMethods.navigateToDemoBlaze()

        Logger.subStep('Dar click en "Log in"')
        CommonPageMethods.clickOnLogInOption()
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación.')
        HomeMethods.clickOnMonitorsOption()
        

        Logger.stepNumber(4)
        Logger.step('Hacer click en un producto específico.')
        HomeMethods.clickOnProductLink(product)

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra la página de detalles del producto.')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed()

        Logger.stepNumber(6)
        Logger.step('Hacer clicck en "Add to cart"')
        ProductDetailsMethods.clickOnAddToCartButton()

        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito.')
        ProductDetailsMethods.verifyProductAddedMessage()
        CommonPageMethods.clickOnCartOption()
        CartMethos.verifyProductAdded(product)
    })
}) 