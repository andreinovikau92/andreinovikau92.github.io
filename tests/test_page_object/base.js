import {test as base} from "@playwright/test";
import HomePage from "../../page_objects/hometPage";
import CreateAccountPage from "../../page_objects/createAccountPage";
import MyAccountPage from "../../page_objects/myAccountPage";
import RadiantTeePage from "../../page_objects/radiantTeePage";

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
    ],

    whatsNewPage: [
        async ({ page }, use) => {
            const homePage = new HomePage(page);
            await homePage.open();
            await homePage.clickGetWomenLink();

            await use('');
        },
        {scope: 'test'},
    ],

    shopingCart: [
        async ({ page }, use )=> {
            const homePage = new HomePage(page);
            const radiantTeePage = new RadiantTeePage(page);
            
            await homePage.open();
            await homePage.clickRadiantTeeLink();
            await radiantTeePage.clickXSsize();
            await radiantTeePage.clickBlueColor();
            await radiantTeePage.clickAddToCartButton();
            await radiantTeePage.clickShopingCartLink();

            await use('');
        },
        {scope: 'test'},
    ]    
});