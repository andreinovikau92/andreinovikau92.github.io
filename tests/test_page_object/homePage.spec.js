import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/hometPage";
import NewYogaCollectionPage from "../../page_objects/newYogaCollectionPage";

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

    test('Verify the Men link is visible', async ({ page }) => {
        const homePage = new HomePage(page);

        const menLink = await homePage.locators.getMenLink();
        await expect(menLink).toHaveText('Men');
        await expect(menLink).toBeVisible();
    });

    test('Verify after clicking the Shop New Yoga button the New Luma Yoga Collection page is opened', async ({ page }) => {
        const homePage = new HomePage(page);
        const newYogaCollectionPage = new NewYogaCollectionPage(page);

        await homePage.clickShopNewYogaButton();

        await expect(newYogaCollectionPage.pageHeader).toBeVisible();
        await expect(newYogaCollectionPage.pageHeader).toHaveText('New Luma Yoga Collection');
    });

    test('Verify the Hot Sellers section is visible', async ({ page }) => {
        const homePage = new HomePage(page);

        await expect(homePage.locators.getHotSellers()).toBeVisible();
        await expect(homePage.locators.getHotSellers()).toHaveText('Hot Sellers');
    });

    test('Verify after clicking Rdiant Tee the Radiant Tee page is opened', async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.clickRadiantTeeLink();
    });
});