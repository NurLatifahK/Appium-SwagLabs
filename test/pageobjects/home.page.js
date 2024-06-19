import { $,driver } from '@wdio/globals'
import scrollScreen from '../../helpers/scrollScreen.js'

class HomePage {
    // element locator
    get toggleButton() { return $('//*[@content-desc="test-Toggle"]') }
    get descProduct() { return  $('//*[@content-desc="test-Item description" and @text="carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."]') }

    get allProducts() { return $$('//*[@content-desc="test-Item title"]') }
    get productName() { return $$('//*[@content-desc="test-Item"]') }
    get productPrice() { return $$('//*[@content-desc="test-Price"]')}

    get addToCartButton() { return $('//*[@text="ADD TO CART"]') }
    get sortingButton() { return $('//*[@content-desc="test-Modal Selector Button"]') }
    get ZtoAButton() { return $('//*[@text="Name (Z to A)"]') }
    get lowestAlphabet() { return $('//*[@content-desc="test-Item title" and @text="Test.allTheThings() T-Shirt (Red)"]') }
    get AtoZButton() { return $('//*[@text="Name (A to Z)"]') }
    get highestAlphabet() { return $('//*[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]') }
    get priceLow() { return $('//*[@text="Price (low to high)"]') }
    get lowestPrice() { return $('//*[@content-desc="test-Price" and @text="$7.99"]') }
    get priceHigh() { return $('//*[@text="Price (high to low)"]') }
    get highestPrice() { return $('//*[@content-desc="test-Price" and @text="$49.99"]') }
    get addToCartButton() { return $('//*[@text="ADD TO CART"]') }
    get cartButton() { return $('//*[@content-desc="test-Cart"]') }
    get menuButton() { return $('//*[@content-desc="test-Menu"]') }
    get closeButton() { return $('//*[@content-desc="test-Close"]') }


    // actions
    async chageLayout(){
        await this.toggleButton.click()
    }

    async scrollAllProduct(){
        for (let index = 0; index < 10; index++) {
            let a = await this.productName
            // console.log(this.productName.length)
            if(a.length === 6) {
                break
            }
            await scrollScreen(600,500)
        }
    }

    async getAllProductsName(){
        const allProductsName = [] 
        const all = await this.allProducts

        for (const product of all) {
            const productNameText = await product.getText()
            allProductsName.push(productNameText)
        }
        return allProductsName
    }

    async getAllProductsPrice(){
        const allProductPrice = []
        const all = await this.productPrice

        for (const product of all) {
            const productPriceNumber = await product.getText()
            allProductPrice.push(productPriceNumber)
        }
        return allProductPrice
    }

    async sortZtoA(){
        await this.sortingButton.click()
        await this.ZtoAButton.click()
    }

    async sortAtoZ(){
        await this.sortingButton.click()
        await this.AtoZButton.click()
    }

    async sortPriceLow(){
        await this.sortingButton.click()
        await this.priceLow.click()
    }

    async sortPriceHigh(){
        await this.sortingButton.click()
        await this.priceHigh.click()
    }

    async selectAddToCartButton(){
        await this.addToCartButton.click()
    }

    async selectMenuButton(){
        await this.menuButton.click()
    }

    async selectCartButton(){
        await this.cartButton.click()
    }
}
export default new HomePage()