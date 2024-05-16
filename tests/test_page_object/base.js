import {test as base} from "@playwright/test";
import HomePage from "../../page_objects/hometPage";
import CreateAccountPage from "../../page_objects/createAccountPage";
import MyAccountPage from "../../page_objects/myAccountPage";

export const test = base.extend ({
    createAccount: [
        async ({ page }, use) => {
            const homePage = new HomePage(page);
            await homePage.open();
            await homePage.clickCreateAccountLink();

            await use('');
        },
        {scope: 'test'},
    ],
    
    editMyAccount: [
        async ({ page }, use) => {
            const homePage = new HomePage(page);
            const createAccountPage = new CreateAccountPage(page);
            const myAccountPage = new MyAccountPage(page);
            await homePage.open();
            await homePage.clickCreateAccountLink();
            await createAccountPage.fillAllFields();
            await myAccountPage.clickContactInformationEdit();

            await use('');
        },

        {scope: 'test'},
    ]
});