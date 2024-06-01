

class RadiantTeePage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('h1.page-title');
        this.addYourReviewLink = page.locator('.reviews-actions .action.add');
        this.getYouAreReviewingRadiantTee = page.locator('[class="legend review-legend"]');
        this.getRatingStar = page.locator('.control.review-control-vote .rating-2');
    }

    async clickYourReviewLink() {
        await this.addYourReviewLink.click();
    }

    async clickRatingStar() {
        await this.getRatingStar.click();
    }
}

export default RadiantTeePage;