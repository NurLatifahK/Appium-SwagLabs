import { $, driver, expect } from '@wdio/globals'
import scrollScreen from '../../helpers/scrollScreen.js'
import LoginPage from '../pageobjects/login.page.js'
import ProductPage from '../pageobjects/product.page.js'

describe('DETAIL PRODUCT PAGE', function(){
    beforeEach('User sudah harus login dan pilih product', async function(){
        await LoginPage.loginSetValue('standard_user', 'secret_sauce') // Login dengan mengisi username n password
        await ProductPage.selectProduct()                              // select 1 product
        await expect(ProductPage.pageProduct1).toBeDisplayed()         // menampilkan halaman detail product
    })

    afterEach(async function(){
        await driver.reloadSession()
    })

    it('User select product then add to cart', async function(){
        await scrollScreen(600, 100)
        await ProductPage.addToCart()
        await expect(ProductPage.removeButton).toBeDisplayed()
    })

    it('User remove product and back to home page ', async function(){
        await scrollScreen(600, 100)
        await ProductPage.addToCart()
        await ProductPage.removeCart()
        await expect(LoginPage.login).toHaveText('PRODUCTS')
    })
})

