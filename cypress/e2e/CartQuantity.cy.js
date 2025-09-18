import CartPage from '../pages/CartPage';

describe('Cart and Quantity Management', () => {
    const cartPage = new CartPage();

    beforeEach(() => {
        cy.session('user', () => {
            cy.registerAndLogin();
        });
        cy.visit('https://automationexercise.com/');
        cy.contains('Logged in as').should('be.visible');
    });

    it('should add, update, and remove items from the cart', () => {
        // Add products
        cy.addProductToCart('Women', 'Dress');
        cy.addProductToCart('Men', 'Tshirts');
        cy.addProductToCart('Kids', 'Tops & Shirts', 3);

        // View Cart
        cartPage.viewCart();

        // Verify cart contains 3 items
        cartPage.verifyNumberOfProducts(3);

        // Verify third product has quantity 3
        cartPage.verifyProductQuantity(2, 3);

        // Remove second product
        cartPage.removeProduct(1);

        // Verify only 2 remain
        cartPage.verifyNumberOfProducts(2);
    });
});
