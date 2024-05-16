import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/hometPage";
import CreateAccountPage from "../../page_objects/createAccountPage";
import MyAccountPage from "../../page_objects/myAccountPage";
import EditMyAccountPage from "../../page_objects/editMyAccountPage";

test.describe('myAccountPage.spec', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.clickCreateAccountLink();
    });

    test('Verify after clicking Edit link is nvigate to Edit Page', async ({ page }) => {
        const createAccountPage = new CreateAccountPage(page);
        const myAccountPage = new MyAccountPage(page);
        const editMyAccountPage = new EditMyAccountPage(page);

        await createAccountPage.fillAllFields();
        await myAccountPage.clickContactInformationEdit();

        await expect(editMyAccountPage.pageHeader).toHaveText('Edit Account Information');

    });
});

