import { browser, expect } from '@wdio/globals'
import basePage from '../pageobjects/base.page.js'
import registerPage from '../pageobjects/register.page.js'
import Page from '../pageobjects/page.js';
import dados from '../data/registerCases.js';


describe('Register scenarios', () => {
    dados.forEach((caso) => {
        it(caso.case, async () => {
            await Page.open(dados[0].path)
            await basePage.registerLink.click()
            await expect(registerPage.pageTitle.isDisplayed())
            await registerPage.genderMale.click()
            await registerPage.firstName.setValue(dados[0].firstName)
            await registerPage.lastName.setValue(dados[0].lastName)
            await registerPage.email.setValue(dados[0].email)
            await registerPage.password.setValue(dados[0].password)
            await registerPage.confirmPassword.setValue(dados[0].confirmPassword)

            await browser.pause(3000)

        })
    })
})