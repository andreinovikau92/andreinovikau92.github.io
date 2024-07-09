import { expect } from "@playwright/test";
import { test} from './base.js';
import ShoppingCart from "../../page_objects/shopingCart";

test.describe('shoppingCartPage.spec.js', () => {

    test('Verify the item is visible in the Shopping Cart page', async({ page, shopingCart }) => {
        const shoppingCart = new ShoppingCart(page);

        await expect(shoppingCart.getItemInShoppingCart).toBeVisible();
    });
});