import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage {
    /**
     * define selectors using getter methods
     */
    //elementos mapeados da seção de registro
    get pageTitle() { return $('.page-title') }

    get genderMale() { return $('#gender-male') }

    get genderFemale() { return $('#gender-female') }

    get firstName() { return $('#FirstName') }

    get lastName() { return $('#LastName') }

    get email() { return $('#Email') }

    get password() { return $('#Password') }

    get confirmPassword() { return $('#ConfirmPassword') }

    get btnRegister() { return $('#register-button') }

    get firstNameWarning() { return $('//span[contains(text(), "First name is required.")]') }

    get lastNameWarning() { return $('//span[contains(text(), "Last name is required.")]') }

    get emailWarning() { return $('//span[contains(text(), "Email is required.")]') }

    get emailError() { return $('//span[contains(text(), "Wrong email")]') }

    get passwordRequired() { return $('//span[@data-valmsg-for="Password"]//span[contains(text(), "Password is required.")]')}

    get passwordWrong() { return $('//span[@data-valmsg-for="Password"]//span[contains(text(), "The password should have at least 6 characters.")]')}

    get ConfirmPasswordRequired() { return $('//span[@data-valmsg-for="ConfirmPassword"]//span[contains(text(), "Password is required.")]')}

    get ConfirmPasswordMatch() { return $('//span[@data-valmsg-for="ConfirmPassword"]//span[contains(text(), "The password and confirmation password do not match.")]')}

     // essa função verifica na massa de dados do registerCases.js se existem mensagens de erro vinculadas à massa de email e faz um mapping da mensagem que vai ser mostrada na tela
    getWarningByKey(key) {
        const warnings = {
            invalidEmail: this.emailError,
            requiredEmail: this.emailWarning,
            requiredFirstName: this.firstNameWarning,
            requiredLastName: this.lastNameWarning,
            requiredPassword: this.passwordRequired,
            wrongPassword: this.passwordWrong,
            requiredConfirmPassword: this.ConfirmPasswordRequired,
            matchConfirmPassword: this.ConfirmPasswordMatch

        }
        return warnings[key]
    }



  
   

    
}

export default new RegisterPage();
