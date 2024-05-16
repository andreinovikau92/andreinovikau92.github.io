import { test, expect } from "@playwright/test";


test.describe('Book store application', () => {
    test('verify first book', async ({ page }) => {
        await page.goto('https://demoqa.com/');

        await page.locator('.card:last-of-type .avatar').click();
        await page.locator
    });
});