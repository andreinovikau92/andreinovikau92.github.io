import{test, expect} from "@playwright/test";
import { hasUncaughtExceptionCaptureCallback } from "process";

test.describe('Methods and locators', () => {
    const BASE_URL = 'https://magento.softwaretestingboard.com';
    const CREATE_ACCOUNT_URL = 'https://magento.softwaretestingboard.com/customer/account/create/';

    test('link and heading', async ({ page }) => {
        await page.goto('https://openweathermap.org/');

        await page.getByRole('link', { name: 'Guide'}).click();
        
        await expect(page.getByRole('heading', { name: 'Guide'})).toBeVisible();
        await expect(page).toHaveURL('https://openweathermap.org/guide');
    });

    test('textbox and button, getByText()', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');

        await page.getByRole('textbox', {name: 'username'}).fill('tomsmith');
        await page.getByRole('textbox', {name: 'password'}).fill('SuperSecretPassword!');
        await page.getByRole('button', {name: ' Login'}).click();

        await expect(page.getByText('You logged into a secure area!')).toBeVisible();
        await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    });

    test('checkbox and .check()', async ({ page }) => {
        await page.goto('https://home.openweathermap.org/users/sign_in');

        await page.getByRole('checkbox', {name: 'Remember me'}).check();

        const checkBox = page.getByRole('checkbox', {name: 'Remember me'});
        await expect(checkBox).toBeChecked();
    });

    test('radio button', async ({ page }) => {
        await page.goto('https://home.openweathermap.org/questions');

        await page.getByLabel('Yes').check();

        await expect(page.getByLabel('Yes')).toBeChecked();
    });

    test('checkbox-2 and textContent()/.innerText()', async ({ page }) => {
        await page.goto('https://demoqa.com/automation-practice-form');

        const text = await page.locator('h1.text-center').textContent();
        console.log(text);
        //await expect()
        //await page.getByLabel('Sports').check();
        // const checkbox = page.getByRole('checkbox', {name: 'Sports'});
        // await checkbox.check({force: true});
        //await page.getByText('Sports', {exact: true}).check();
        await page.locator('[for="hobbies-checkbox-1"]').check();
    });

    test('method .hover()', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/hovers');

        //await page.locator('.figure').nth(1).hover();
        await page.getByAltText('User Avatar').first().hover();

        await expect(page.getByText('name: user1')).toBeVisible();
    });

    test('checkbox-3, first(), last(), and .nth(q1)', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/checkboxes');

        await page.getByRole('checkbox').first().check();
        await expect(page.getByRole('checkbox').first()).toBeChecked();

        await page.getByRole('checkbox').last().uncheck();
        await expect(page.getByRole('checkbox').last()).not.toBeChecked();
    });

    test('.getByRole("listitem") and methods .filter() and .all()', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/disappearing_elements');
        
        // await page.locator('ul li:nth-child(1)').click();
    
        // const button = page.locator('h1.heading');
        // await expect(button).toBeVisible();
        
        const buttons = page.getByRole('listitem');
        await buttons.filter({hasText: 'Home'}).click();
    });

    test('selectOption()', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');

        const selectMenu = page.locator('#dropdown');

        await selectMenu.selectOption('Option 1');

        //await expect(selectMenu).toHaveText('Option 1');
        await expect(selectMenu).toHaveValue('1');
        await expect(selectMenu.locator('option:checked')).toHaveText('Option 1');
        await expect(selectMenu.getByText('Option 1')).toHaveAttribute('selected', 'selected');
    });

    test('Multiselect drop down and setTimeout() in console', async ({ page }) => {
        await page.goto('https://demoqa.com/select-menu');

        await page.locator('.css-2b097c-container').last().click();
        // await multiDropdown.click();
        // await page.getByText('Select...').click();
        // await page.locator('#react-select-4-option-0').click();
        // await page.locator('#react-select-4-option-2').click();

        //await expect(page.locator('.css-1rhbuit-multiValue')).toHaveText(['Green', 'Black']);
    });

    test('Vetify the Create an account link is displayed on the main page in the header', async ({ page }) => {

        await page.goto('https://magento.softwaretestingboard.com/');

        const createAccount = page.getByRole('link', {name: 'Create an Account'});
        await expect(createAccount).not.toBeVisible();
    });

    test('Verify after clicking Create an account navigates to the Customer acount page', async ({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com/');

        await page.getByRole('link', {name: 'Create an Account'}).click();
        
        const createAccountPage = page.locator('h1.page-title');
        await expect(createAccountPage).toBeVisible();
        await expect(page).toHaveURL(BASE_URL + '/customer/account/create/');
        
    });

    test('Verify Create New Customer Account page presents an empty forms for Personal Information and Sign-in Information.', async ({ page }) => {
        await page.goto('https://magento.softwaretestingboard.com');

        await page.getByRole('link', {name: 'Create an Account'}).click();

        await expect(page.locator('#firstname')).toBeEmpty()
        await expect(page.locator('#lastname')).toBeEmpty();
        await expect(page.locator('#email_address')).toBeEmpty()
        await expect(page.locator('.field.password.required .control #password')).toBeEmpty();
        await expect(page.locator('#password-confirmation')).toBeVisible();
    });

});