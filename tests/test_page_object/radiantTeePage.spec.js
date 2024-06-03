import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/hometPage";
import RadiantTeePage from "../../page_objects/radiantTeePage";

test.describe('radiantTeePage.spec', () => {

    test.beforeEach(async({ page }) => {
        const homePage = new HomePage(page);
        
        await homePage.open();
        await homePage.clickRadiantTeeLink();
    });

    test('Verify Add Your Review is visible', async({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await expect(radiantTeePage.addYourReviewLink).toHaveText('Add Your Review');
    });

    test('Verify after clicking Add Your Review Link navigates to the Add Yoour Review section', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await radiantTeePage.clickYourReviewLink();

        await expect(radiantTeePage.getYouAreReviewingRadiantTee).toHaveText("You're reviewing:Radiant Tee");
    });

    test('Verify the review is added', async ({ page }) => {
        const radiantTeePage = new RadiantTeePage(page);

        await radiantTeePage.clickYourReviewLink();
        await radiantTeePage.clickRatingStar();
    })
});