import { $, driver, expect } from '@wdio/globals'
import scrollScreen from '../../helpers/scrollScreen.js'
import loginPage from '../pageobjects/login.page.js'

describe('LOGIN SWAGLABS', function () {
    it('User coba scroll ke atas bawah', async function () {
        await scrollScreen(600, 100)
        await scrollScreen(100, 600)
        await driver.pause(2000)
    })

    it('User login dengan username dan password benar',  async function () {        
        await loginPage.loginSetValue('standard_user', 'secret_sauce')
        await expect(loginPage.login).toHaveText('PRODUCTS')
        await driver.back()
    })

    it('User login dengan username yang benar tapi password salah',  async function () {
        await loginPage.loginSetValue('standard_user', 'ASALAJA')
        await expect(loginPage.errorMessage).toHaveText('Username and password do not match any user in this service.')
    })

    it('User login dengan username salah tapi password benar',  async function () {
        await loginPage.loginSetValue('ASALAJA', 'secret_sauce')
        await expect(loginPage.errorMessage).toHaveText('Username and password do not match any user in this service.')
    })

    it('User login dengan tekan tombol standard_user', async function () {
        await scrollScreen(1000, 100)
        await loginPage.loginStandardUser()
        await expect(loginPage.login).toHaveText('PRODUCTS')
        await driver.back()
    })
    
    it('User login dengan tekan tombol locked_out_user', async function () {
        await scrollScreen(600, 100)
        await loginPage.loginLockedOutUser()
        await scrollScreen(600, 1000)
        await expect(loginPage.errorMessageLocked).toHaveText('Sorry, this user has been locked out.')
    })

})