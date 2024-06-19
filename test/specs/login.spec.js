import { $, driver, expect } from '@wdio/globals'
import scrollScreen from '../../helpers/scrollScreen.js'
import LoginPage from '../pageobjects/login.page.js'

describe('LOGIN SWAGLABS', function () {
    it('User coba scroll ke atas bawah', async function () {
        await scrollScreen(600, 100)
        await scrollScreen(100, 600)
        await driver.pause(1000)
    })

    it('User login dengan username dan password benar',  async function () {        
        await LoginPage.loginSetValue('standard_user', 'secret_sauce')
        await expect(LoginPage.login).toHaveText('PRODUCTS')
        await driver.back()
    })

    it('User login dengan username dan password kosong',  async function () {
        await LoginPage.loginSetValue()
        await expect(LoginPage.errorMessageUsername).toHaveText('Username is required')
    })

    it('User login dengan username kosong tapi password benar',  async function () {
        await LoginPage.loginSetValue('', 'secret_sauce')
        await expect(LoginPage.errorMessageUsername).toHaveText('Username is required')
    })

    it('User login dengan username benar tapi password kosong',  async function () {
        await LoginPage.loginSetValue('standard_user', '')
        await expect(LoginPage.errorMessagePassword).toHaveText('Password is required')
    })

    it('User login dengan username yang benar tapi password salah',  async function () {
        await LoginPage.loginSetValue('standard_user', 'ASALAJA')
        await expect(LoginPage.errorMessage).toHaveText('Username and password do not match any user in this service.')
    })

    it('User login dengan username salah tapi password benar',  async function () {
        await LoginPage.loginSetValue('ASALAJA', 'secret_sauce')
        await expect(LoginPage.errorMessage).toHaveText('Username and password do not match any user in this service.')
    })

    it('User login dengan tekan tombol standard_user', async function () {
        await scrollScreen(600, 100)
        await LoginPage.loginStandardUser()
        await expect(LoginPage.login).toHaveText('PRODUCTS')
        await driver.back()
    })
    
    it('User login dengan tekan tombol locked_out_user', async function () {
        await scrollScreen(600, 100)
        await LoginPage.loginLockedOutUser()
        await scrollScreen(600, 1000)
        await expect(LoginPage.errorMessageLocked).toHaveText('Sorry, this user has been locked out.')
    })

    it('User login dengan tekan tombol problem_user', async function () {
        await scrollScreen(600, 100)
        await LoginPage.loginProblemUser()
        await expect(LoginPage.login).toHaveText('PRODUCTS')
        await driver.back()
    })

})