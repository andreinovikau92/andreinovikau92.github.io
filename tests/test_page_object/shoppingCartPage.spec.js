import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/hometPage";
import RadiantTeePage from "../../page_objects/radiantTeePage";
import ShoppingCart from "../../page_objects/shopingCart";

test.describe('shoppingCartPage.spec.js', () => {

    test.beforeEach(async({ page }) => {
        const homePage = new HomePage(page);
        const radiantTeePage = new RadiantTeePage(page);
        
        await homePage.open();
        await homePage.clickRadiantTeeLink();
        await radiantTeePage.clickXSsize();
        await radiantTeePage.clickBlueColor();
        await radiantTeePage.clickAddToCartButton();
        await radiantTeePage.clickShopingCartLink();

    });

    test('Verify the item is visible in the Shopping Cart page', async({ page }) => {
        const shoppingCart = new ShoppingCart(page);

        await expect(shoppingCart.getItemInShoppingCart).toBeVisible();
    });
});