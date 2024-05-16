import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/hometPage";

test.describe('homePage.spec', () => {

    test.beforeEach(async ({ page }) =>{
        const homePage = new HomePage(page);
        homePage.open();
    });

    test('Verify the cart is on the Home page', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.clickCartIcon();
    });

    test('dfd', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.clickCartIcon();
        await expect(homePage.locators.getCartBanner()).toBeVisible();
    })

});