import {test, expect} from "@playwright/test";
import HomePage from "../../page_objects/hometPage";
import WhatsNewPage from "../../page_objects/whatsNewPage";
import { NEW_IN_WOMENS_LIST } from "../../helpers/testData";


test.describe('whatsNewPage.spec.js', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.clickGetWomenLink();
    });

    test('Verify the Whats New Link is navigates to the Whats New Page', async ({ page }) => {
        const whatsNewLink = new WhatsNewPage(page);
        
        expect(whatsNewLink.pageHeader).toBeVisible();
    });

    test('Verify the New in Womens subtitle is visible in the page', async ({ page }) => {
        const whatsNewLink = new WhatsNewPage(page);

        await expect(whatsNewLink.newInWomensSubtitle).toBeVisible();
        await expect(whatsNewLink.newInWomensSubtitle).toHaveText("New in women's");
    });

    test('Verify the New in Mens subtitle is visible in the page', async ({ page }) => {
        const whatsNewLink = new WhatsNewPage(page);

        await expect(whatsNewLink.newInMenSubtitle).toBeVisible();
        await expect(whatsNewLink.newInMenSubtitle).toHaveText("New in men's");
    });

    test('sfdf', async ({ page }) => {
        const whatsNewLink = new WhatsNewPage(page);

        await expect(whatsNewLink.newInWomensList).toHaveText(NEW_IN_WOMENS_LIST);
    });
});