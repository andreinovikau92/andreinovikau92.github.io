import ForgotYourPasswordPage from "./forgotPasswordPage";
import HomePage from "./hometPage";

class SignInPage {

    constructor(page) {
        this.page = page;
    }

    locators = {
        getForgotPasswordLink: () => this.page.getByRole('link', {name: 'Forgot Your Password?'}),
        getPageHeader: () => this.page.locator('h1.page-title'),
        getEmailField: () => this.page.locator('#email'),
        getPasswordField: () => this.page.locator('#pass'),
        getSignInButton: () => this.page.getByRole('button', {name: 'Sign In'}),
    }

    async clickForgotPasswordLink() {
        await this.locators.getForgotPasswordLink().click();

        return new ForgotYourPasswordPage(this.page);
    }

    async fillEmailField() {
        await this.locators.getEmailField().fill('test1@test.com');

        return this;
    }

    async fillPasswordField() {
        await this.locators.getPasswordField().fill('Test2024!');

        return this;
    }

    async clickSignInButton() {
        await this.locators.getSignInButton().click();

        return new HomePage(this.page);
    }
}

export default SignInPage;