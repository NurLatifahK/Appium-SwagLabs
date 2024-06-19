import { $, driver, expect } from '@wdio/globals'
import scrollScreen from '../../helpers/scrollScreen.js'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import CartPage from '../pageobjects/cart.page.js'
import swipeScreen from '../../helpers/swipeScreen.js'

describe('CART PAGE', function(){
    beforeEach('User sudah harus login and select Add To Cart button', async function(){
        await LoginPage.loginSetValue('standard_user', 'secret_sauce') // Login dengan mengisi username n password
        await HomePage.selectAddToCartButton()                         // add to cart
        await HomePage.selectCartButton()                              // klik menu keranjang
        expect(HomePage.cartButton).toBeEnabled()                      // menampilkan halaman keranjang
    })

    afterEach(async function(){
        await driver.reloadSession()
    })

    it('user checkout 1 product', async function(){
        await scrollScreen(450, 100)
        await CartPage.checkoutButton()
        await expect(CartPage.checkoutInfo).toBeDisplayed()
    })

    it('User remove product and continue shop', async function(){
        await CartPage.removeAndContinue()
        await expect(LoginPage.login).toHaveText('PRODUCTS')
    })

    it('User delete product and continue shop', async function(){
        await swipeScreen(700, 100)
        await CartPage.deleteAndContinue()
        await expect(LoginPage.login).toHaveText('PRODUCTS')
    })

})