import { $,driver } from '@wdio/globals'

class CartPage{
    // element locator
    get cartPage() { return $('//*[@text="YOUR CART"]') }
    get checkout() { return $('~test-CHECKOUT') }
    get removeButton() { return $('//*[@content-desc="test-REMOVE"]')}
    get continueButton() { return $('//*[@content-desc="test-CONTINUE SHOPPING"]') }
    get checkoutInfo() { return $('//*[@text="CHECKOUT: INFORMATION"]') }
    get deleteButton() { return $('//*[@content-desc="test-Delete"]') }

    // actions
    async checkoutButton(){
        await this.checkout.click()
    }

    async removeAndContinue(){
        await this.removeButton.click()
        await this.continueButton.click()
    }

    async deleteAndContinue(){
        await this.deleteButton.click()
        // await driver.pause(1000)
        await this.continueButton.click()
    }
}
export default new CartPage()
