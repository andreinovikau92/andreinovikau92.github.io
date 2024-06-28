

class ShopingCart {
    constructor(page) {
        this.page = page;
        this.getShopingCartHeader = page.locator('h1.page-title');
    }
}

export default ShopingCart;