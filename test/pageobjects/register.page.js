import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage {
    /**
     * define selectors using getter methods
     */
    //Header page elements
    get pageTitle() { return $('.page-title"]') }
    get genderMale() { return $('#gender-male') }
    get genderFemale() { return $('#gender-female"]') }
    get firstName() { return $('#FirstName') }
    get lastName() { return $('#LastName') }
    get email() { return $('#Email') }
    get password() { return $('#Password') }
    get confirmPassword() { return $('#ConfirmPassword') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
   

    
}

export default new RegisterPage();
