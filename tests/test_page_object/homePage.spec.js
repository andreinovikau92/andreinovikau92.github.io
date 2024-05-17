import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/hometPage";

test.describe('homePage.spec', () => {

    test.beforeEach(async ({ page }) =>{
        const homePage = new HomePage(page);
        await homePage.open();

    });

    test('Verify the cart is on the Home page', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.clickCartIcon();
    });

    test('Verify the Whats new link is visible', async ({ page }) => {
        const homePage = new HomePage(page);

        const whatsNewLink = await homePage.locators.getWhatsNewLink();
        await expect(whatsNewLink).toBeVisible();
    });

    test('Verify the Women link is visible', async ({ page }) => {
        const homePage = new HomePage(page);

        const womenLink = await homePage.locators.getWomenLink();
        await expect(womenLink).toBeVisible();
    });
});