

class EditMyAccountPage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('h1.page-title');
        this.changeEmailCheckbox = page.locator('[for="change-email"]');
        this.changeEmailSection = page.locator('.fieldset.password');
    }

    async clickChangeEmailCheckbox() {
        await this.changeEmailCheckbox.click();

        return this;
    }
}


export default EditMyAccountPage;