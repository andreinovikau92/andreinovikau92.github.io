import CreateAccountPage from "./createAccountPage.js";
import SignInPage from "./signInPage.js";

class HomePage {

    constructor(page) {
        this.page = page;
    }

    locators = {
        getSignInLink: () => this.page.getByRole('link', {name: 'Sign In'}),
        getCreateAccountLink: () => this.page.getByRole('link', {name: 'Create an Account'}),
        getCartIcon: () => this.page.locator('a[class="action showcart"][href="https://magento.softwaretestingboard.com/checkout/cart/"]'),
        getCartBanner: () => this.page.locator('#minicart-content-wrapper')
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