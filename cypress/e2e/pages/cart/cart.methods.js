import { CartElements } from "./cart.elements";

export class CartMethos{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click()
    }
}