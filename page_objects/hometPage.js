import { name } from "../playwright.config.js";
import CreateAccountPage from "./createAccountPage.js";
import SignInPage from "./signInPage.js";

class HomePage {

    constructor(page) {
        this.page = page;
    }

    locators = {
        getSignInLink: () => this.page.getByRole('link', {name: 'Sign In'}),
        getCreateAccountLink: () => this.page.getByRole('link', {name: 'Create an Account'}),
        getCartIcon: () => this.page.locator('[class="action showcart"] span.text'),
        getCartBanner: () => this.page.locator('#minicart-content-wrapper'),
        getSearchField: () => this.page.locator('#search'),
        //getWhatsNewLink: () => this.page.locator('[class="ui-menu ui-widget ui-widget-content ui-corner-all"]'),
        getWomenLink: () => this.page.getByRole('link', {name: 'Women'})
    }

    async open() {
        await this.page.goto('/');
    }

    async clickSignInLink() {
        await this.locators.getSignInLink().click();

        return new SignInPage(this.page);
    }

    async clickCreateAccountLink() {
        await this.locators.getCreateAccountLink().click();

        return new CreateAccountPage(this.page);
    }

    async clickCartIcon() {
        await this.locators.getCartIcon().click();

        return this;
    }

}

export default HomePage;