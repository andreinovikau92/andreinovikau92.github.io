

class ShoppingCart {
    constructor(page) {
        this.page = page;
        this.getShopingCartHeader = page.locator('h1.page-title');
        this.getItemInShoppingCart = page.locator('.cart.item');
        this.getDeleteIcon = page.locator('.action.action-delete');
        this.getShoppingCartEmpty = page.locator('.cart-empty');
    }

    async deleteProduct() {
        await this.getDeleteIcon.click();

        return this;
    }
}

export default ShoppingCart;