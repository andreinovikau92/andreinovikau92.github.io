import { expect } from "@playwright/test";
import { test } from "./base";
import WhatsNewPage from "../../page_objects/whatsNewPage";


test.describe('whatsNewPage.spec.js', () => {

    test('Verify the Whats New Link is navigates to the Whats New Page', async ({ page, whatsNewPage }) => {
        const whatsNewLink = new WhatsNewPage(page);
        
        expect(whatsNewLink.pageHeader).toBeVisible();
    });

    test('Verify the New in Womens subtitle is visible in the page', async ({ page, whatsNewPage }) => {
        const whatsNewLink = new WhatsNewPage(page);

        await expect(whatsNewLink.newInWomensSubtitle).toBeVisible();
        await expect(whatsNewLink.newInWomensSubtitle).toHaveText("New in women's");
    });

    test('Verify the New in Mens subtitle is visible in the page', async ({ page, whatsNewPage }) => {
        const whatsNewLink = new WhatsNewPage(page);

        await expect(whatsNewLink.newInMenSubtitle).toBeVisible();
        await expect(whatsNewLink.newInMenSubtitle).toHaveText("New in men's");
    });
});