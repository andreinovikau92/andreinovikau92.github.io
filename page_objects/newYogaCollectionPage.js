

class NewYogaCollectionPage {
    constructor(page){
        this.page = page;
        this.pageHeader = page.locator('h1#page-title-heading');
    }
}

export default NewYogaCollectionPage;