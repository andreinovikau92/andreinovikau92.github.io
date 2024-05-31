import CreateAccountPage from "./createAccountPage.js";
import SignInPage from "./signInPage.js";
import WhatsNewPage from "./whatsNewPage.js";
import NewYogaCollectionPage from "./newYogaCollectionPage.js";
import RadiantTeePage from "./radiantTeePage.js";

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
        getWhatsNewLink: () => this.page.locator('#ui-id-3'),
        getWomenLink: () => this.page.getByRole('link', {name: 'Women'}),
        getMenLink: () => this.page.locator('#ui-id-5'),
        getShopNewYogaButton: () => this.page.locator('[class="action more button"]'),
        getHotSellers: () => this.page.locator('.content-heading h2.title'),
        getRadiantTeeLink: () => this.page.locator('[class="product-item"]:nth-child(1)')
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

    async clickGetWomenLink() {
        await this.locators.getWhatsNewLink().click();

        return new WhatsNewPage(this.page);
    }

    async clickShopNewYogaButton() {
        await this.locators.getShopNewYogaButton().click()

        return new NewYogaCollectionPage(this.page)
    }

    async clickRadiantTeeLink() {
        await this.locators.getRadiantTeeLink().click()

        return new RadiantTeePage(this.page)
    }
}

export default HomePage;