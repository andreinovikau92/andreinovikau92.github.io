

class ShoppingCart {
    constructor(page) {
        this.page = page;
        this.getShopingCartHeader = page.locator('h1.page-title');
        this.getItemInShoppingCart = page.locator('.cart.item');
        this.getDeleteIcon = page.locator('.action.action-delete');
        this.getShoppingCartEmpty = page.locator('.cart-empty');
        this.getQTY = page.getByLabel('QTY');
        this.getUpdateShoppingCartButton = page.getByTitle('Update Shopping Cart');
        this.getDuplicatedPrice = page.locator('.col.subtotal span.price-excluding-tax');
        this.getSummarySection = page.locator('.cart-summary');
    }

    async deleteProduct() {
        await this.getDeleteIcon.click();

        return this;
    }

    async changeQTY() {
        await this.getQTY.fill('2');

        return this;
    }

    async clickUpdateShoppingCartButton() {
        await this.getUpdateShoppingCartButton.click();

        return this;
    }
}

export default ShoppingCart;