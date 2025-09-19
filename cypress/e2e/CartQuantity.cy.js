import { faker } from '@faker-js/faker';
import CartPage from '../pages/CartPage';

describe('Cart and Quantity Management + Checkout', () => {
    const cartPage = new CartPage();

    const randomName = faker.person.fullName();
    const randomNumber = faker.finance.creditCardNumber();
    const randomCVV = faker.finance.creditCardCVV();
    const expiryMonth = faker.date.future().getMonth() + 1;
    const expiryYear = faker.date.future().getFullYear();

    beforeEach(() => {
        cy.session('user', () => {
            cy.registerAndLogin();
        });
        cy.visit('https://automationexercise.com/');
        cy.contains('Logged in as').should('be.visible');
    });

    it('Add multiple products, update quantity, remove item, and checkout', () => {
        // Add 3 products
        cy.addProductToCart('Women', 'Dress');
        cy.addProductToCart('Men', 'Tshirts');
        cy.addProductToCart('Kids', 'Tops & Shirts', 3);

        // View Cart
        cartPage.viewCart();

        // Verify 3 products
        cartPage.verifyProductCount(3);

        // Verify quantity of third product is 3
        cartPage.verifyProductQuantity('Blue Top', 3);

        // Remove the second product
        cartPage.removeProduct(1);

        // Verify only 2 remain
        cartPage.verifyProductCount(2);

        // Checkout & fake payment
        cartPage.proceedToCheckout();
        cartPage.placeOrder();
        cartPage.fillPaymentDetails({
            name: randomName,
            cardNumber: randomNumber,
            cvc: randomCVV,
            expiryMonth,
            expiryYear
        });
        cartPage.verifyOrderSuccess();
    });
});
