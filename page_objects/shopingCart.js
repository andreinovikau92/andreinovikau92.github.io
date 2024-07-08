

class ShoppingCart {
    constructor(page) {
        this.page = page;
        this.getShopingCartHeader = page.locator('h1.page-title');
        this.getItemInShoppingCart = page.locator('.cart.item');
    }
}

export default ShoppingCart;