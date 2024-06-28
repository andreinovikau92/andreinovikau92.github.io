import { FILL_NICKNAME_FIELD, FILL_REVIEW_FIELD, FILL_SUMMARY_FIELD } from "../helpers/testData";
import ShopingCart from "./shopingCart";


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
        this.getBlueColor = page.locator('#option-label-color-93-item-50');
        this.getColorName = page.locator('.swatch-attribute.color .swatch-attribute-selected-option');
        this.getBluePhoto = page.locator('[href^="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/d34482110da20c5e24f97c38fb219fb3/w/s/ws12-blue_main_1.jpg"]');
        this.getInStockLabel = page.locator('.stock.available span');
        this.getSku = page.locator('.product.attribute.sku');
        this.getReviews = page.locator('#tab-label-reviews');
        this.getCustomerReviewsHeader = page.locator('#customer-reviews .block-title');
        this.getMoreInformationSection = page.locator('#tab-label-additional');
        this.getMoreInformationSectionContent = page.locator('#additional [class="additional-attributes-wrapper table-wrapper"]');
        this.getDetailsSection = page.locator('#description .product.attribute.description');
        this.getAddToCompare = page.locator('.action.tocompare');
        this.getComparisonListAlert = page.locator('.page.messages');
        this.getAddToCartButton = page.locator('#product-addtocart-button');
        this.getErrorMessageSizeIsNotSelected = page.locator('[id="super_attribute[143]-error"]');
        this.getErrorMessageColorIsNotSelected = page.locator('[id="super_attribute[93]-error"]');
        this.getXSSize = page.locator('#option-label-size-143-item-166');
        this.getQTY = page.locator('#qty');
        this.getQtyErrorMessage = page.locator('#qty-error');
        this.getYouAddedRadiantTeeToYourShoppingCartMessage = page.locator('.page.messages');
        this.getShopingCartLink = page.locator('.page.messages a');
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

    async clickBlueColor() {
        await this.getBlueColor.click();

        return this;
    }

    async clickReviews() {
        await this.getReviews.click();
    }

    async clicMoreInformationSection() {
        await this.getMoreInformationSection.click();
    }

    async clickAddToCompare() {
        await this.getAddToCompare.click();

        return this;
    }

    async clickAddToCartButton() {
        await this.getAddToCartButton.click();

        return this;
    }

    async clearQTY() {
        await this.getQTY.clear();

        return this;
    }

    async fillQTY() {
        await this.getQTY.fill('0');

        return this;
    }

    async clickXSsize() {
        await this.getXSSize.click();

        return this;
    }

    async clickShopingCartLink() {
        await this.getShopingCartLink.click();

        return ShopingCart;
    }
}

export default RadiantTeePage;