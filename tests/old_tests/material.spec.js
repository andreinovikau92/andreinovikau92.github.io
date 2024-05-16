import {test, expect} from "@playwright/test";

test.describe('Bags Page', () => {
    
    // test.beforeEach(async, ({ page }) => {
    //     await page.goto('https://magento.softwaretestingboard.com/gear/bags.html'); // BASE_URL 
    // });

    test.beforeEach(async ({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/gear/bags.html');
    });

    test('Verify after expanding the Material dropdown all items are visible', async ({ page }) => {
        
        await page.getByText('Material').click();
        //const option = page.locator('.filter-options-content ol.items').nth(4);
        const option = page.$$('.filter-options-content ol.items');
        console.log(option);
        //await expect(option).toHaveCount(9);
        const expectedSubMenuItems = [
            'Burlap',
            'Canvas',
            'Cotton',
            'Leather',
            'Mesh',
            'Nylon',
            'Polyester',
            'Rayon',
            'Suede'
        ];
        
    });

    
});