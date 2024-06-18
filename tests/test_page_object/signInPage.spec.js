import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/hometPage";
import SignInPage from "../../page_objects/signInPage";

test.describe('signInPage.spec.js', () => {
    test.beforeEach(async({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
        await homePage.clickSignInLink();
    });

    test('Verify user can login', async({ page }) => {
        const signInPage = new SignInPage(page);
        const homePage = new HomePage(page);

        await signInPage.fillEmailField();
        await signInPage.fillPasswordField();
        await signInPage.clickSignInButton();

        await expect(homePage.locators.getWelcomeUser()).toBeVisible();
        await expect(homePage.locators.getWelcomeUser()).toHaveText('Welcome, Test Test!');
    });
});