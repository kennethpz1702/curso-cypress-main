import { HomeElements } from "./home.elements";

export class HomeMethods{
    //En home page vamos a poder hacer click en las categorías como phones, laptops, monitor
    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phones.click()
    }

    static clickOnLaptopsOption(){
        HomeElements.categoriesMenu.laptops.click()
    }

    static clickOnMonitorsOption(){
        HomeElements.categoriesMenu.monitors.click()
    }

    static clickOnProductLink(productName){ //Le hace clik a cualquier producto pero nosotros le debemos pasar el producto.
        HomeElements.product(productName).click()
    }
}