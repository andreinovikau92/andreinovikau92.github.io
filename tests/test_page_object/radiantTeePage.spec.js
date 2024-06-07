import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/hometPage";
import RadiantTeePage from "../../page_objects/radiantTeePage";
import { ADD_YOUR_REVIEW, 
    ALERT_MESSAGE_FROM_RADIANT_TEE_PAGE, 
    BLUE_COLOR, 
    IN_STOCK_LABEL, 
    SKU_RADIANT_TEE_PAGE, 
    YOUR_ARE_REVIEWING_RADIANT_TEE } from "../../helpers/testData";

test.describe('radiantTeePage.spec', () => {

    test.beforeEach(async({ page }) => {
        const homePage = new HomePage(page);
        
        await homePage.open();
        await homePage.clickRadiantTeeLink();
    });

    test('Verify Add Your Review is visible', async({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await expect(radiantTeePage.addYourReviewLink).toHaveText(ADD_YOUR_REVIEW);
    });

    test('Verify after clicking Add Your Review Link navigates to the Add Yoour Review section', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await radiantTeePage.clickYourReviewLink();

        await expect(radiantTeePage.getYouAreReviewingRadiantTee).toHaveText(YOUR_ARE_REVIEWING_RADIANT_TEE);
    });

    test('Verify the review is added', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await radiantTeePage.clickYourReviewLink();
        await radiantTeePage.clickRatingStar();
        await radiantTeePage.fillNickNameField();
        await radiantTeePage.fillSummaryField();
        await radiantTeePage.fillReviewField();
        await radiantTeePage.clickSubmitReviewButton();

        await expect(radiantTeePage.getAlertMessage).toBeVisible();
        await expect(radiantTeePage.getAlertMessage).toHaveText(ALERT_MESSAGE_FROM_RADIANT_TEE_PAGE);
    });

    test('Veify after selecting blue color the blue color is shown', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await radiantTeePage.clickBlueColor();

        await expect(radiantTeePage.getColorName).toHaveText(BLUE_COLOR);
    });

    test('Veify after selecting blue color the blue photo is shown', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await radiantTeePage.clickBlueColor();

        await expect(radiantTeePage.getBluePhoto).toBeVisible();
    });

    test('Verify the Radian Tee page has In Stock label', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await expect(radiantTeePage.getInStockLabel).toHaveText(IN_STOCK_LABEL);
    });

    test('Verify the Radiant Tee page has SKU', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await expect(radiantTeePage.getSku).toHaveText(SKU_RADIANT_TEE_PAGE);
    });
});