import { test, expect } from "@playwright/test";

test.describe('Analog Products', () => {
    test.beforeEach(async ({ page }) => {
        page.goto('/');
        await page.locator('#ui-id-5').hover();
        await page.locator('[class="level1 nav-3-2 category-item last parent ui-menu-item"]').hover();
        await page.locator('[class="level2 nav-3-2-1 category-item first ui-menu-item"]').click();
        await page.locator('.item.product.product-item:nth-child(2)').click();
    });

    test('Verify if the product has an analog the We found other products you might like! section is displayed below the product description.', async ({ page }) => {
        await expect(page.locator('[class="block upsell"]')).toBeVisible();
    });

    test(' Verify after clicking the product in the We found other products you might like! section navigates to the page with this product.', async({ page }) => {
        await page.locator('[class="item product product-item"]:nth-child(1)').click();
        
        await expect(page.locator('h1.page-title')).toBeVisible();
    });
});