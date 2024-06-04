import { FILL_NICKNAME_FIELD, FILL_REVIEW_FIELD, FILL_SUMMARY_FIELD } from "../helpers/testData";


class RadiantTeePage {
    constructor(page) {
        this.page = page;
        this.pageHeader = page.locator('h1.page-title');
        this.addYourReviewLink = page.locator('.reviews-actions .action.add');
        this.getYouAreReviewingRadiantTee = page.locator('[class="legend review-legend"]');
        this.getRatingStar = page.locator('.control.review-control-vote .rating-2');
        this.getNickNameField = page.locator('#nickname_field');
        this.getSummaryField = page.locator('#summary_field');
        this.getReviewField = page.locator('#review_field');
        this.getSubmitReviewButton = page.locator('[class="action submit primary"]');
        this.getAlertMessage = page.getByRole('alert').first();
    }

    async clickYourReviewLink() {
        await this.addYourReviewLink.click();

        return this;
    }

    async clickRatingStar() {
        await this.getRatingStar.click();

        return this;
    }

    async fillNickNameField() {
        await this.getNickNameField.fill(FILL_NICKNAME_FIELD);

        return this;
    }

    async fillSummaryField() {
        await this.getSummaryField.fill(FILL_SUMMARY_FIELD);

        return this;
    }

    async fillReviewField() {
        await this.getReviewField.fill(FILL_REVIEW_FIELD);

        return this;
    }

    async clickSubmitReviewButton() {
        await this.getSubmitReviewButton.click();

        return this;
    }
}

export default RadiantTeePage;