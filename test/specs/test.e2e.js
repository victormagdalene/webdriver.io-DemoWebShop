import { browser, expect } from '@wdio/globals'
import BasePage from '../pageobjects/base.page.js'
import RegisterPage from '../pageobjects/register.page.js'
import Page from '../pageobjects/page.js';
import dados from '../data/registerCases.js';


describe('Register link scenarios', () => {

    dados.forEach((caso) => {
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

            if (caso.firstName) await RegisterPage.firstName.setValue(caso.firstName)

            if (caso.lastName) await RegisterPage.lastName.setValue(caso.lastName)

            if (caso.email) {
                await RegisterPage.email.setValue(caso.email.data)
            }
            if (caso.password) await RegisterPage.password.setValue(caso.password)

            if (caso.confirmPassword) await RegisterPage.confirmPassword.setValue(caso.confirmPassword)

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

            await browser.pause(3000)

        })
    })
})