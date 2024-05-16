import { expect } from "@playwright/test";
import { test } from "./base.js";
import CreateAccountPage from "../../page_objects/createAccountPage";
import { BASE_URL, CREATE_ACCOUNT_PAGE, MY_ACCOUNT_PAGE, } from "../../helpers/testData";
import MyAccountPage from "../../page_objects/myAccountPage";

test.describe('createAccounts.spec', () => {

    test('Veify Create New Customer Account page is opened', async ({ page, createAccount }) => {
        const createAccountPage = new CreateAccountPage(page);

        await expect(page).toHaveURL(BASE_URL + CREATE_ACCOUNT_PAGE);
        await expect(createAccountPage.pageHeader).toHaveText('Create New Customer Account');
    });

    test('Verify the First Name and Last Name fields are in the Create New Customer Account page', async({ page, createAccount }) => {
        const createAccountPage = new CreateAccountPage(page);

        await expect(createAccountPage.firstNameField).toBeVisible();
        await expect(createAccountPage.lastNameField).toBeVisible();
        await expect(createAccountPage.emailField).toBeVisible();
        await expect(createAccountPage.passwordField).toBeVisible();
        await expect(createAccountPage.confirmPasswordField).toBeVisible();
        await expect(createAccountPage.createAccountButton).toBeVisible();
    });

    test('Verify the account is created', async({ page, createAccount}) => {
        const createAccountPage = new CreateAccountPage(page);
        const myAccountPage = new MyAccountPage(page);

        await createAccountPage.fillAllFields();

        await expect(page).toHaveURL(BASE_URL + MY_ACCOUNT_PAGE);
        await expect(myAccountPage.pageHeader).toHaveText('My Account');
        await expect(myAccountPage.alert).toHaveText('Thank you for registering with Main Website Store.');
        await expect(myAccountPage.contactInformation).toBeVisible();

    });

});