import { test, expect } from "@playwright/test";

test.describe('User Reviews', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        const email = 'TEST@TEST2024.test';
        const password = 'Test2024';

        await page.locator('ul li.authorization-link ').first().click();
        await page.locator('#email').fill(email);
        await page.locator('#pass[title="Password"]').fill(password);
        await page.locator('#send2.action.login').click();
        await page.locator("div[class='panel header'] span[role='button']").click();
        await page.getByRole('link', {name: 'My Account'}).click();
    });

    test('page has user reviews', async ({ page }) => {
        //await expect(page.getByRole('list', {name: 'My Product Reviews'})).toBeVisible();
        await expect(page.locator('#block-collapsible-nav ul li:nth-child(8)')).not.toBeVisible();

    });

    test('You have no stored payment methods. message is displayed', async ({ page }) => {
        await page.locator('#block-collapsible-nav ul li:nth-child(8)').click();

        await expect(page.locator('div.message.info.empty span')).toHaveText('You have no stored payment methods.');
    });

    test('page', async({ page }) => {
        await page.locator('#block-collapsible-nav ul li:nth-child(8)').click();

        await expect(page).toHaveURL('/' + 'vault/cards/listaction/');
        await expect(page.locator('h1.page-title')).not.toBeVisible();
    });
});