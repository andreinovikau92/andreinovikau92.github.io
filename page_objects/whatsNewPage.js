

class WhatsNewPage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('#page-title-heading');
        this.newInWomensSubtitle = page.locator('.categories-menu .title:nth-child(1)');
        this.newInMenSubtitle = page.locator('.categories-menu .title:nth-child(3)');
    }

}

export default WhatsNewPage;