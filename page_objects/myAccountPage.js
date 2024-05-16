


class MyAccountPage {

    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('h1.page-title');
        this.alert = page.getByRole('alert').first();
        this.contactInformation = page.locator('[class="box box-information"]');
        this.contactInformationEdit = page.locator('[class="box box-information"] [class="action edit"]');
    }

    async clickContactInformationEdit() {
        await this.contactInformationEdit.click();
    }

}

export default MyAccountPage;