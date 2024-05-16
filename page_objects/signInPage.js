import ForgotYourPasswordPage from "./forgotPasswordPage";

class SignInPage {

    constructor(page) {
        this.page = page;
    }

    locators = {
        getForgotPasswordLink: () => this.page.getByRole('link', {name: 'Forgot Your Password?'}),
        getPageHeader: () => this.page.locator('h1.page-title')
    
    }

    async clickForgotPasswordLink() {
        await this.locators.getForgotPasswordLink().click();

        return new ForgotYourPasswordPage(this.page);
    }
}

export default SignInPage;