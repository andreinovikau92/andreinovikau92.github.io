import {test, expect} from "@playwright/test";
import HomePage from "../../page_objects/hometPage";
import WhatsNewPage from "../../page_objects/whatsNewPage";


test.describe('whatsNewPage.spec.js', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.clickGetWomenLink();
    });

    test('Verify the Whats New Link', async ({ page }) => {
        const whatsNewLink = new WhatsNewPage(page);
        
        expect(whatsNewLink.pageHeader).toBeVisible();
    });
});