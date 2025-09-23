import { browser, expect } from '@wdio/globals'
import BasePage from '../pageobjects/base.page.js'
import RegisterPage from '../pageobjects/register.page.js'
import LoginPage from '../pageobjects/login.page.js';
import Page from '../pageobjects/page.js';
import RegisterCases from '../data/registerCases.js';
import LoginCases from '../data/loginCases.js';

describe('Register link scenarios', () => {

    RegisterCases.forEach((caso) => {
        it(caso.case, async () => {
            await Page.open(caso.path)

            await BasePage.registerLink.click()

            await expect(RegisterPage.pageTitle.isDisplayed())

            if (caso.gender === "male") {
                await RegisterPage.genderMale.click()
            }
            if (caso.gender === "female") {
                await RegisterPage.genderFemale.click()
            }

            if (caso.firstName.name) await RegisterPage.firstName.setValue(caso.firstName.name)

            if (caso.lastName.name) await RegisterPage.lastName.setValue(caso.lastName.name)
        
            if (caso.email.data) await RegisterPage.email.setValue(caso.email.data)

            if (caso.password.data) await RegisterPage.password.setValue(caso.password.data)

            if (caso.confirmPassword.data) await RegisterPage.confirmPassword.setValue(caso.confirmPassword.data)

            await RegisterPage.btnRegister.click()

            //nesse trecho é feita a verificação na massa e nas mensagens de erro caso existam.
            if (caso.email.warningKey) {
                    const warningElement = RegisterPage.getWarningByKey(caso.email.warningKey)
                    await expect(warningElement).toBeDisplayed()
                }
            if (caso.firstName.warningKey) {
                    const warningElement = RegisterPage.getWarningByKey(caso.firstName.warningKey)
                    await expect(warningElement).toBeDisplayed()
                }
            if (caso.lastName.warningKey) {
                    const warningElement = RegisterPage.getWarningByKey(caso.lastName.warningKey)
                    await expect(warningElement).toBeDisplayed()
                }
            if (caso.password.warningKey) {
                    const warningElement = RegisterPage.getWarningByKey(caso.password.warningKey)
                    await expect(warningElement).toBeDisplayed()
                }
            if (caso.confirmPassword.warningKey) {
                    const warningElement = RegisterPage.getWarningByKey(caso.confirmPassword.warningKey)
                    await expect(warningElement).toBeDisplayed()
                }

        })
    })
})

describe('Login link scenarios', () => {

    LoginCases.forEach((caso) => {
        it(caso.case, async () => {
            await Page.open(caso.path)

            await BasePage.loginLink.click()

            await expect(LoginPage.pageTitle.isDisplayed())
            
            if (caso.firstName.name) await RegisterPage.firstName.setValue(caso.firstName.name)


            //nesse trecho é feita a verificação na massa e nas mensagens de erro caso existam.
            if (caso.email.warningKey) {
                    const warningElement = RegisterPage.getWarningByKey(caso.email.warningKey)
                    await expect(warningElement).toBeDisplayed()
                }


        })
    })
})