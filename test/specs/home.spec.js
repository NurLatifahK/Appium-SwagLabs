import { $, driver, expect } from '@wdio/globals'
import scrollScreen from '../../helpers/scrollScreen.js'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js'

describe('HOME PAGE SWAGLABS', function(){
    beforeEach('User sudah harus login', async function(){
        await LoginPage.loginSetValue('standard_user', 'secret_sauce') // Login dengan mengisi username n password
        await expect(LoginPage.login).toHaveText('PRODUCTS')           // Masuk ke Home Page
    })

    afterEach(async function(){
        await driver.reloadSession()
    })

    it('User click toggle button grid to list.', async function(){
        await HomePage.toggleGridButton()
        await expect(HomePage.descProduct).toHaveText(
            expect.stringContaining('carry.allTheThings() with the sleek') // yg di expect si desc product
        )
    })

    it('User click toggle button list to grid.', async function(){
            await HomePage.toggleListButton()
            await expect(HomePage.addToCartButton).toHaveText('ADD TO CART')
        })  

//////////////// SORTING GA YAKIN soalnya yang di expect di tiap productnya, kalo productnya ganti ??
    it('User click sorting and choose by Name(Z to A).', async function(){
        await HomePage.sortZtoA()
        await expect(HomePage.lowestAlphabet).toHaveText(
            expect.stringContaining('Test.allTheThings()')
        )
    })

    it('User click sorting and choose by Price (low to high).', async function(){
        await HomePage.sortPriceLow()
        await expect(HomePage.lowestPrice).toHaveText('$7.99')
    })

    it('User click sorting and choose by Price (high to low).', async function(){
        await HomePage.sortPriceHigh()
        await expect(HomePage.highestPrice).toHaveText('$49.99')
    })
    
    it('User click sorting and choose by Name(A to Z).', async function(){
        await HomePage.sortAtoZ()
        await expect(HomePage.highestAlphabet).toHaveText('Sauce Labs Backpack')
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