import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    //elementos mapeados da seção de registro
    get pageTitle() { return $('//div[@class="title" and contains(., "Returning Customer")]') }

    get inputEmail() { return $('#Email') }

    get inputPassword() { return $('#Password') }

    get checkRememberMe() { return $('#RememberMe') }

    get labelForgotPassword() { return $('//span[@class="forgot-password" and contains(., "Forgot password?")]') }

    get btnLogin() { return $('//div[@class="buttons"]//input[@value="Log in"]') }

    get loginError() { return $('//span[contains(text(),"Login was unsuccessful. Please correct the errors and try again.")]') }
 
    get emailError() { return $('//span[@class="field-validation-error" and contains(., "Please enter a valid email address.")]') }

    get credentialsError() { return $('//div[@class="validation-summary-errors" and contains(., "The credentials provided are incorrect")]') }

  
    
     // essa função verifica na massa de dados do registerCases.js se existem mensagens de erro vinculadas à massa de email e faz um mapping da mensagem que vai ser mostrada na tela
    getWarningByKey(key) {
        const warnings = {
            loginError: this.loginError,
            emailError: this.emailError,
            credentialsError: this.credentialsError,

        }
        return warnings[key]
    }



  
   

    
}

export default new LoginPage();
