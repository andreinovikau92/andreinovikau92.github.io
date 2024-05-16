import { test, expect} from "@playwright/test"; 

test.describe('Create New Customer page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/');
        // await page.getByRole('link', {name: 'Sign In'}).click();
        // await page.locator('#email').fill('TEST@TEST2024.test');
        // await page.locator('#pass').fill('Test2024');
        // await page.getByRole('button', { name: 'Sign In' }).click();
    });

    test('Verify Create New Customer Account page presents an empty forms for Personal Information and Sign-in Information', async ({ page }) => {
        await page.getByRole('link', {name: 'Create an Account'}).click();

        await expect(page.locator('#firstname')).toBeEmpty();
        await expect(page.locator('#lastname')).toBeEmpty();
        await expect(page.locator('#email_address')).toBeEmpty();
        await expect(page.locator('.field.password.required .control #password')).toBeEmpty();
        await expect(page.locator('#password-confirmation')).toBeVisible();
    });

    test.only('sdf', async ({ page }) => {
        await page.getByRole('link', {name: 'Create an Account'}).click();

        // await page.locator('#firstname').fill('Test');
        // await page.locator('#lastname').fill('Test');
        // await page.locator('#email_address').fill('test@test.com');
        await page.locator('.field.password.required .control #password').fill('Test2024');
        await page.locator('#password-confirmation').fill('Test2025');
        await page.getByRole('button', {name: 'Create an Account'}).click();

        await expect(page.locator('#password-confirmation-error')).toHaveText('Please enter the same value again.');
    });

    test('Verify', async({ page }) => {
        const shopCartIcon =  page.locator('.showcart ');
        const crossIcon = page.locator('#btn-minicart-close');

        shopCartIcon.click();
        crossIcon.click();

        await expect(page.locator('ui-id-1')).not.toBeVisible();
    });

    test('payments methods', async({ page }) => {
        await page.locator('[type="button"]').first().click();
        await page.getByRole('link', {name: 'My Account'}).click();

    });

    test('forgot pasword linl', async({ page }) => {
        await page.getByRole('link', {name: 'Sign In'}).click();
        await page.getByRole('link', {name: 'Forgot Your Password?'}).click();

        //await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/forgotpassword/');
        await expect(page.locator('h1.page-title')).not.toBeVisible();
    });

    test('The Please enter a valid email address (Ex: johndoe@domain.com). error message appears below the Email field after entering the incorrect email', async ({ page }) => {
        await page.getByRole('link', {name: 'Sign In'}).click();
        await page.getByRole('link', {name: 'Forgot Your Password?'}).click();
        await page.locator('#email_address').fill('qee@q');
        await page.locator('.action.submit.primary').click();

        await expect(page.locator('#email_address-error')).toHaveText('Please enter a valid email address (Ex: johndoe@domain.com).');
    });

    test('sdfd', async ({ page }) => {
        function generateRandomEmail() {
            const mailbox = Math.random().toString(36).substring(2, 10);
            const domain = "example.com";
            return `${mailbox}@${domain}`;
          }

        const email = generateRandomEmail();
        await page.getByRole('link', {name: 'Sign In'}).click();
        await page.getByRole('link', {name: 'Forgot Your Password?'}).click();
        await page.locator('#email_address').fill(email);
        await page.locator('.action.submit.primary').click();

        await expect(page.getByRole('alert').first()).toHaveText(`If there is an account associated with ${email} you will receive an email with a link to reset your password.`);
    
    });

    test('this field is required', async ({ page }) => {
        

        await page.getByRole('link', {name: 'Sign In'}).click();
        await page.getByRole('link', {name: 'Forgot Your Password?'}).click();
        await page.locator('.action.submit.primary').click();

        await expect(page.locator('#email_address-error')).toHaveText('This is a required field.');
    });

    test('sdfdf', async({ page }) => {
        function generateRandomEmail() {
            const mailbox = Math.random().toString(36).substring(2, 10);
            const domain = "example.com";
            return `${mailbox}@${domain}`;
          }

        const email = generateRandomEmail();
        await page.getByRole('link', {name: 'Sign In'}).click();
        await page.getByRole('link', {name: 'Forgot Your Password?'}).click();
        await page.locator('#email_address').fill(email);
        await page.locator('.action.submit.primary').click();

        await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/');
        await expect(page.locator('h1.page-title')).toHaveText('Customer Login');
    });
});