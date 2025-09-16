import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BasePage {
    /**
     * define selectors using getter methods
     */
    //Header page elements
    get registerLink() { return $('//a[@href="/register"]') }
    get loginLink() { return $('//a[@href="/login"]') }
    get cartLink() { return $('//a[@href="/cart"]') }
    get wishListaLink() { return $('//a[@href="/wishlist"]') }
    get searchBtn() { return $('//input[@value="Search"]') }
    get searchBox() { return $('//input[@value="Search store"]') }
    get logoImg() { return $('//img[@alt="Tricentis Demo Web Shop"]') }



}

export default new BasePage();
