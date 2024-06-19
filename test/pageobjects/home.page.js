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
    get menuButton() { return $('//*[@content-desc="test-Menu"]') }
    get closeButton() { return $('//*[@content-desc="test-Close"]') }


    // actions
    async chageLayout(){
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
}
export default new HomePage()