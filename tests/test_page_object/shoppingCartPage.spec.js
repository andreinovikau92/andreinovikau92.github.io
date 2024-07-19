import { expect } from "@playwright/test";
import { test} from './base.js';
import ShoppingCart from "../../page_objects/shopingCart";
import { EMPTY_SHOPPING_CART_MESSAGE } from "../../helpers/testData.js";

test.describe('shoppingCartPage.spec.js', () => {

    test('Verify the item is visible in the Shopping Cart page', async({ page, shoppingCartPage }) => {
        const shoppingCart = new ShoppingCart(page);

        await expect(shoppingCart.getItemInShoppingCart).toBeVisible();
    });

    test('Verify the product is deleted from the shopping cart', async({ page, shoppingCartPage}) => {
        const shoppingCart = new ShoppingCart(page);

        await shoppingCart.deleteProduct();

        await expect(shoppingCart.getShoppingCartEmpty).toBeVisible();
        await expect(shoppingCart.getShoppingCartEmpty).toHaveText(EMPTY_SHOPPING_CART_MESSAGE);
    });

    test('Verify the QTY is changed in the Shopping Cart Page', async({ page, shoppingCartPage}) => {
        const shoppingCart = new ShoppingCart(page);

        await shoppingCart.changeQTY();
        await shoppingCart.clickUpdateShoppingCartButton();

        await expect(shoppingCart.getDuplicatedPrice).toHaveText('$44.00');
    });

    test('Verify the Summary section is visible', async({ page, shoppingCartPage }) => {
        const shoppingCart = new ShoppingCart(page);

        await expect(shoppingCart.getSummarySection).toBeVisible();
    });
    
    test('Verify the Summary section has below Country, State/Province, Zip/Postal Code fields and below Flat Rate, Best Way checkboxes', async({ page, shoppingCartPage}) => {
        const shopingCart = new ShoppingCart(page);

        await shopingCart.clicEstimateShippingAndTax();

        await expect(shopingCart.getCountryDropdown).toBeVisible();
        await expect(shopingCart.getStateProvinceDropdown).toBeVisible();
        await expect(shopingCart.getZipPostalCodeField).toBeVisible();
    });
});