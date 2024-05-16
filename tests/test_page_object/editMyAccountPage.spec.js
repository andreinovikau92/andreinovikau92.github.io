import { expect } from "@playwright/test";
import { test } from "./base.js";
import EditMyAccountPage from "../../page_objects/editMyAccountPage";

test.describe('editMyAccountPage.spec', () => {
    
    test('Verify after clicking the Change Email checkbox the Change Email section is appeared', async ({ page, editMyAccount }) => {
        const editMyAccountPage = new EditMyAccountPage(page);

        await editMyAccountPage.clickChangeEmailCheckbox();

        await expect(editMyAccountPage.changeEmailSection).toBeVisible();
    });   
});