import ProductPage from '../pages/ProductPage';

describe('Product Browsing & Filtering', () => {
    const productPage = new ProductPage();

    beforeEach(() => {
        cy.session('user', () => {
            cy.registerAndLogin(); // Reuse user session
        });
    });

    it('Should filter products and verify product details', () => {
        cy.fixture('product.json').then((product) => {
            cy.verifyProduct(product.category, product.subCategory, product.expectedKeyword);
        });
    });
});
