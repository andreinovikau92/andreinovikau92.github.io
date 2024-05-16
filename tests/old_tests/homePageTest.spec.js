import { test, expect } from "@playwright/test";


test.describe('Home page tests', () =>{
    test('Verify logo on the home page', async({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/');

        let img = page.locator('.logo img');
        await expect(img).toHaveAttribute('src', 'https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg');
    });

    test('Verify the title is black', async({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/');
        
        let text = page.locator('h2.title');
        await expect(text).toHaveCSS('color', 'rgb(51, 51, 51)');
    });


    test('Verify the first element under Hot Sellers is Radiant Teee', async({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/');

        let text = page.locator('.product-item-details').nth(0);
        await expect(text).toContainText('Radiant Tee');
    });

    test('Verify the 3rd element has 5 sizes', async({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/');

        let element = page.locator('li.product-item:nth-child(3)');
        for(let i = 0;)

        
    });

    test('Verify the 5th element do not have sizes', async({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/');

        let element = page.locator('li.product-item:nth-child(5)');
        await expect(element).to
    });

    test('Verify the 4th element has 3 colors', async({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/');

        let element = page.locator('.product-item:nth-child(4)  > .product-item-info');
        await expect(element).toHaveClass('.swatch-option');
    });

    test('Test 6', async({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/');

        await page.locator('.swatch-opt-1812 .swatch-attribute .swatch-option#option-label-size-143-item-168').click();
        await page.locator('#option-label-color-93-item-60').click();
        await page.getByRole('button', {name: 'Add to Cart'}).nth(1).click();
        let counter = page.locator('.counter .counter-number');
        await expect(counter).toHaveText('1', {timeout: 30000});

    });
});