import {test, expect} from "@playwright/test";

test.describe('Watch Category', () => {
    test.beforeEach(async ({ page }) => {
        page.goto('/');
    });

    test('Clear All', async ({ page }) => {
        await page.locator('[class="level0 nav-4 category-item level-top parent ui-menu-item"]').hover();
        await page.locator('[class="level1 nav-4-3 category-item last ui-menu-item"]').click();
        //await page.locator('[class="filter-options-item"]:nth-child(1)').click();
        //await page.locator('[class="filter-options-item allow active"] .items .item:nth-child(1)').click();

        //await expect(page.locator('[class="filter-value"]')).toHaveText('Electronic');
    });
});