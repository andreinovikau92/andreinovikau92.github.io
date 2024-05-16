//import SignInPage from "./signInPage";

import { EMAIL, WRONG_EMAIL } from "../helpers/testData";

class ForgotYourPasswordPage {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getPageHeader: () => this.page.getByRole('heading').first(),
        getPasswordField: () => this.page.locator('#email_address'),
        getResetMyPasswordButton: () => this.page.locator('.action.submit.primary'),
        gerErrorMessege: () => this.page.locator('#email_address-error'),
        getBanner: () => this.page.getByRole('alert').first()
    
    }

    async fillPasswordField() {
        await this.locators.getPasswordField().fill(EMAIL);

        return this;
    }

    async fillPasswordField2() {
        await this.locators.getPasswordField().fill(WRONG_EMAIL);

        return this;
    }

    async clickResetMyPasswordButton() {
        await this.locators.getResetMyPasswordButton().click()

        return this;
    }
}    

export default ForgotYourPasswordPage;