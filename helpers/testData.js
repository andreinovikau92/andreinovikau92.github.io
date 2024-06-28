
// URL
export const BASE_URL = 'https://magento.softwaretestingboard.com';
export const FORGOT_YOUR_PASSWORD_PAGE_END_POINT = '/customer/account/forgotpassword/';
export const LOGIN_PAGE = '/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/';
export const CREATE_ACCOUNT_PAGE = '/customer/account/create/';
export const MY_ACCOUNT_PAGE = '/customer/account/';
export const EDIT_MY_ACCOUNT = '/customer/account/edit/'; 

// testdata
export const FORGOT_YOUR_PASSWORD_PAGE_HEADER = 'Forgot Your Password?';
export const ERROR_MESSAGE_WHEN_THE_USER_ENTER_INVALID_PASSWORD = 'Please enter a valid email address (Ex: johndoe@domain.com).';
export const SIGN_IN_PAGE_HEADER = 'Customer Login';


function generateRandomEmail() {
    const mailbox = Math.random().toString(36).substring(2, 10);
    const domain = "example.com";
    return `${mailbox}@${domain}`;
}

export const WRONG_EMAIL = 'dfdf@ee';
export const EMAIL = generateRandomEmail();
export const MESSAGE_WHEN_THE_USER_ENTER_VALID_PASSWORD = `If there is an account associated with ${EMAIL} you will receive an email with a link to reset your password.`;
export const FIRST_NAME = 'Test';
export const LAST_NAME = 'Test';
export const PASSWORD = 'Test2024';
export const NEW_IN_WOMENS_LIST = ['Hoodies & Sweatshirts', 'Jackets', 'Tees', 'Bras & Tanks', 'Pants', 'Shorts'];
export const ADD_YOUR_REVIEW = 'Add Your Review';
export const YOUR_ARE_REVIEWING_RADIANT_TEE = "You're reviewing:Radiant Tee";
export const FILL_NICKNAME_FIELD = 'Test';
export const FILL_SUMMARY_FIELD = 'Test';
export const FILL_REVIEW_FIELD = 'Test';
export const ALERT_MESSAGE_FROM_RADIANT_TEE_PAGE = 'You submitted your review for moderation.'; 
export const BLUE_COLOR = 'Blue';
export const IN_STOCK_LABEL = 'In stock';
export const SKU_RADIANT_TEE_PAGE = 'SKU WS12';
export const CUSTOMER_REVIEWS_HEADER = 'Customer Reviews';
export const QTY_GREATER_THEN_0_ERROR_MESSAGE = 'Please enter a quantity greater than 0.';
export const QTY_EMPTY_FIELD_ERROR_MESSAGE = 'Please enter a valid number in this field.';
export const PRODUCT_IN_THE_CART_ALERT = 'You added Radiant Tee to your shopping cart.';
export const SHOPPING_CART_HEADER = 'Shopping Cart';