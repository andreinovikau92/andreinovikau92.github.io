import {test, expect} from "@playwright/test";
import HomePage from "../page_objects/hometPage";


test.describe('newYogaCollectionPage.spec', () => {

    test.beforeEach(async({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.clickShopNewYogaButton();
    });
});