import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/hometPage";
import RadiantTeePage from "../../page_objects/radiantTeePage";
import { ADD_YOUR_REVIEW, 
    ALERT_MESSAGE_FROM_RADIANT_TEE_PAGE, 
    BLUE_COLOR, 
    CUSTOMER_REVIEWS_HEADER, 
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

    test('Verify after clicking Reviews option Customer Reviews are displayed', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await radiantTeePage.clickReviews();

        await expect(radiantTeePage.getCustomerReviewsHeader).toBeVisible();
        await expect(radiantTeePage.getCustomerReviewsHeader).toHaveText(CUSTOMER_REVIEWS_HEADER);
    });

    test('Verify the More Information section is visible', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await radiantTeePage.clicMoreInformationSection();

        await expect(radiantTeePage.getMoreInformationSectionContent).toBeVisible();
    });

    test('Verify the Details section is visible', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await expect(radiantTeePage.getDetailsSection).toBeVisible();
    });

    test('Verify the product is added to the comparison list', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await radiantTeePage.clickAddToCompare();

        await expect(radiantTeePage.getComparisonListAlert).toHaveText('You added product Radiant Tee to the comparison list.');
    });

    test('Verify the product is not added to cart when the size and color are not selected', async({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await radiantTeePage.clickAddToCartButton();

        await expect(radiantTeePage.getErrorMessageSizeIsNotSelected).toBeVisible();
        await expect(radiantTeePage.getErrorMessageColorIsNotSelected).toBeVisible()
    });

    test('Verify the product is not added to the cart when the QTY is 0', async({ page}) => {
        const radiantTeePage = new RadiantTeePage(page);

        await radiantTeePage.clickXSsize();
        await radiantTeePage.clickBlueColor();
        await radiantTeePage.clearQTY();
        await radiantTeePage.fillQTY();
        await radiantTeePage.clickAddToCartButton();

        await expect(radiantTeePage.getQtyErrorMessage).toBeVisible();
    })
});