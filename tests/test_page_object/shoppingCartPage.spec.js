import { expect } from "@playwright/test";
import { test} from './base.js';
import ShoppingCart from "../../page_objects/shopingCart";
import { EMPTY_SHOPPING_CART_MESSAGE } from "../../helpers/testData.js";

test.describe('shoppingCartPage.spec.js', () => {

    test('Verify the item is visible in the Shopping Cart page', async({ page, shopingCart }) => {
        const shoppingCart = new ShoppingCart(page);

        await expect(shoppingCart.getItemInShoppingCart).toBeVisible();
    });

    test('Verify the product is deleted from the shopping cart', async({ page, shopingCart}) => {
        const shoppingCart = new ShoppingCart(page);

        await shoppingCart.deleteProduct();

        await expect(shoppingCart.getShoppingCartEmpty).toBeVisible();
        await expect(shoppingCart.getShoppingCartEmpty).toHaveText(EMPTY_SHOPPING_CART_MESSAGE);
    });
});