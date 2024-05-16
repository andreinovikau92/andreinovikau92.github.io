import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/hometPage.js";
import SignInPage from "../../page_objects/signInPage.js";
import { 
    BASE_URL, 
    FORGOT_YOUR_PASSWORD_PAGE_END_POINT, 
    FORGOT_YOUR_PASSWORD_PAGE_HEADER, 
    ERROR_MESSAGE_WHEN_THE_USER_ENTER_INVALID_PASSWORD,
    EMAIL,
    SIGN_IN_PAGE_HEADER
} from "../../helpers/testData.js";
import ForgotYourPasswordPage from "../../page_objects/forgotPasswordPage.js";



test.describe('Forgot Password Page', () => {
    test.beforeEach(async ({ page }) => {
        const hometPage = new HomePage(page);     
        await hometPage.open();
        await hometPage.clickSignInLink();
    });
    
    test('Verify the Forgot Your Password link redirects to the Forgot Your Password page', async ({ page }) => {  
        const signInPage = new SignInPage(page);  
        const forgotPassword = new ForgotYourPasswordPage(page);
        
        await signInPage.clickForgotPasswordLink();

        await expect(page).toHaveURL(BASE_URL + FORGOT_YOUR_PASSWORD_PAGE_END_POINT);
        await expect(forgotPassword.locators.getPageHeader()).toHaveText(FORGOT_YOUR_PASSWORD_PAGE_HEADER);
    });

    test('The error message appears below the Email field after entering the incorrect email', async ({ page }) => {
        const signInPage = new SignInPage(page);
        const forgotPassword = new ForgotYourPasswordPage(page);
        
        await signInPage.clickForgotPasswordLink();
        await forgotPassword.fillPasswordField2();
        await forgotPassword.clickResetMyPasswordButton();

        await expect(forgotPassword.locators.gerErrorMessege()).toHaveText(ERROR_MESSAGE_WHEN_THE_USER_ENTER_INVALID_PASSWORD);
    });
    
    test('If there is an account associated with … (here your email)... displays if the user enters valid data', async ({ page }) => {
        
        const signInPage = new SignInPage(page);
        const forgotPassword =  new ForgotYourPasswordPage(page);

        await signInPage.clickForgotPasswordLink();
        await forgotPassword.fillPasswordField();
        await forgotPassword.clickResetMyPasswordButton();

        await expect(forgotPassword.locators.getBanner()).toHaveText(`If there is an account associated with ${EMAIL} you will receive an email with a link to reset your password.`);
    });

    test('After entering a valid email to the Email field and clicking the Reset My Password button the Customer Login page opens', async({ page }) => {
        // function generateRandomEmail() {
        //     const mailbox = Math.random().toString(36).substring(2, 10);
        //     const domain = "example.com";
        //     return `${mailbox}@${domain}`;
        //   }

        // const email = generateRandomEmail();
        // await page.locator('#email_address').fill(email);
        // await page.locator('.action.submit.primary').click();

        // await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');
        // await expect(page.locator('h1.page-title')).toHaveText('Customer Login');
        const signInPage = new SignInPage(page);
        const forgotPassword =  new ForgotYourPasswordPage(page);

        await signInPage.clickForgotPasswordLink();
        await forgotPassword.fillPasswordField();
        await forgotPassword.clickResetMyPasswordButton();

        //await expect(page).toHaveURL(BASE_URL + LOGIN_PAGE);
        await expect(signInPage.locators.getPageHeader()).toHaveText(SIGN_IN_PAGE_HEADER);

    });
});