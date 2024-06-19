import { $,driver } from '@wdio/globals'

class HomePage {
    // element locator
    get toggleButton() { return $('//*[@content-desc="test-Toggle"]') }
    get descProduct() { return  $('//*[@content-desc="test-Item description" and @text="carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."]') }
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

    get cartPage() { return $('//*[@text="YOUR CART"]') }
    get checkout() { return $('~test-CHECKOUT') }
    get removeButton() { return $('//*[@content-desc="test-REMOVE"]')}
    get continueButton() { return $('//*[@content-desc="test-CONTINUE SHOPPING"]') }
    get checkoutInfo() { return $('//*[@text="CHECKOUT: INFORMATION"]') }


    get menuButton() { return $('//*[@content-desc="test-Menu"]') }
    get closeButton() { return $('//*[@content-desc="test-Close"]') }


    // actions
    async toggleGridButton(){
        await this.toggleButton.click()
    }

    async toggleListButton(){
        await this.toggleButton.click()
        await this.toggleButton.click()
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

    // async checkoutButton(){
    //     await this.checkout.click()
    // }

    // async removeAndContinue(){
    //     await this.removeButton.click()
    //     await this.continueButton.click()
    // }

    // async select1Product(){
    //     await this.highestAlphabet.click()
    // }

    // async detailProduct(){
    //     await this.addToCartButton.click()
    //     await driver.pause(2000)
    //     await this.removeButton.click()
    // }

}
export default new HomePage()