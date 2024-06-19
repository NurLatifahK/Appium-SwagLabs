import { $, driver, expect } from '@wdio/globals'
import scrollScreen from '../../helpers/scrollScreen.js'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'
import { isAscendingProduct, isDescendingProduct, isAscendingPrice, isDescendingPrice } from '../../helpers/sortingButton.js'

describe('HOME PAGE SWAGLABS', function(){
    beforeEach('User sudah harus login', async function(){
        await LoginPage.loginSetValue('standard_user', 'secret_sauce') // Login dengan mengisi username n password
        await expect(LoginPage.login).toHaveText('PRODUCTS')           // Masuk ke Home Page
    })

    afterEach(async function(){
        await driver.reloadSession()
    })

    it('User click change layout.', async function(){
        await HomePage.chageLayout()
        await expect(HomePage.descProduct).toHaveText(
            expect.stringContaining('carry.allTheThings() with the sleek') // yg di expect si desc product
        )
    })  

    it('User click sorting and choose by Name(A to Z).', async () => {
        await HomePage.sortAtoZ()
        await HomePage.scrollAllProduct()
        const productsAtoZ = await HomePage.getAllProductsName()
        const isProductSortedAsc = isAscendingProduct(productsAtoZ)
        await expect(isProductSortedAsc).toBe(true)
    })

    it('User click sorting and choose by Name(Z to A).', async () => {
        await HomePage.sortZtoA()
        await HomePage.scrollAllProduct()
        const productsZtoA = await HomePage.getAllProductsName()
        const isProductSortedDes = isDescendingProduct(productsZtoA)
        await expect(isProductSortedDes).toBe(true)
    })

    it('User click sorting and choose by Price (low to high).', async () => {
        await HomePage.sortPriceLow()
        await HomePage.scrollAllProduct()
        const priceLowtoHigh = await HomePage.getAllProductsPrice()
        const isProductSortedLowtoHigh = isAscendingPrice(priceLowtoHigh)
        await expect (isProductSortedLowtoHigh).toBe(true)
    })
    
    it('User click sorting and choose by Price (high to low).', async () => {
        await HomePage.sortPriceHigh()
        await HomePage.scrollAllProduct()
        const priceHightoLow = await HomePage.getAllProductsPrice()
        const isProductSortedHightoLow = isDescendingPrice(priceHightoLow)
        await expect (isProductSortedHightoLow).toBe(true)
    })

    it('User select 1 product', async function(){
        await HomePage.selectAddToCartButton()
        await expect(HomePage.cartButton).toBeEnabled()
    })

    it('User scroll and select product', async function(){
        await scrollScreen(600, 100) 
        await HomePage.selectAddToCartButton()
        await expect(HomePage.cartButton).toBeEnabled()     
    })
    
    it('User click menu button', async function(){
        await HomePage.selectMenuButton()
        await expect(HomePage.closeButton).toBeDisplayed()
    })

})