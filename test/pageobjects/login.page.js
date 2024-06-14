import { $ } from '@wdio/globals'

class loginPage {
    // element locator
    get usernameInput() { return $('~test-Username')}
    get passwordInput() { return $('~test-Password')}
    get loginButton() { return $('~test-LOGIN')}
    get login() { return $('//*[@text="PRODUCTS"]')}
    get errorMessageUsername() { return $('//*[@text="Username is required"]')}
    get errorMessagePassword() { return $('//*[@text="Password is required"]')}
    get standardUserButton() { return $('//*[@text="standard_user"]')}
    get errorMessage() { return $('//*[@content-desc="test-Error message"]/android.widget.TextView')}
    get lockUserOutButton() { return $('//*[@content-desc="test-locked_out_user"]')}
    get errorMessageLocked() { return $('//*[@text="Sorry, this user has been locked out."]')}
    get problemUserButton() { return $('//*[@text="problem_user"]')}
    
    // page action
    async loginSetValue(username, password) {
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }

    async loginLockedOutUser(){
        await this.lockUserOutButton.click()
        await this.loginButton.click()
    }
    
    async loginStandardUser(){
        await this.standardUserButton.click()
        await this.loginButton.click()
    }

    async loginProblemUser(){
        await this.problemUserButton.click()
        await this.loginButton.click()
    }


}
export default new loginPage()