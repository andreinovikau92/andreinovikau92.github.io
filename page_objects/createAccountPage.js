import { EMAIL, FIRST_NAME, LAST_NAME, PASSWORD } from "../helpers/testData";
import MyAccountPage from "./myAccountPage";


class CreateAccountPage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('h1.page-title');
        this.firstNameField = page.locator('#firstname');
        this.lastNameField = page.locator('#lastname');
        this.emailField = page.locator('#email_address');
        this.passwordField = page.locator('input#password');
        this.confirmPasswordField = page.locator('#password-confirmation');
        this.createAccountButton = page.locator('button[class="action submit primary"]');
    }

    async fillAllFields() {
        await this.firstNameField.fill(FIRST_NAME);
        await this.lastNameField.fill(LAST_NAME);
        await this.emailField.fill(EMAIL);
        await this.passwordField.fill(PASSWORD);
        await this.confirmPasswordField.fill(PASSWORD);
        await this.createAccountButton.click();

        return new MyAccountPage(this.page);
    }


//     locators = {
//         getPageHeader: () => this.page.locator('h1.page-title')
//     }
}

export default CreateAccountPage;