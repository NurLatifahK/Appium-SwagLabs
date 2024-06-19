import { $ } from '@wdio/globals'

class ProductPage {
    // element locator
    get product1() { return $('//*[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]') }
    get pageProduct1() { return $('//*[@content-desc="test-Inventory item page"]') }
    get removeButton() { return $('//*[@content-desc="test-REMOVE"]') } 
    get addToCartButton() { return $('//*[@content-desc="test-ADD TO CART"]')}
    get backToHome() { return $('~test-BACK TO PRODUCTS')}


    // action
    async selectProduct(){
        await this.product1.click()
    }
    async addToCart(){
        await this.addToCartButton.click()
    }
    async removeCart(){
        await this.removeButton.click()
        await this.backToHome.click()
    }
}

export default new ProductPage()