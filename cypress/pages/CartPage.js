class CartPage {
    viewCart() {
        cy.get("p[class='text-center'] a").click({ force: true });
    }

    verifyNumberOfProducts(expectedCount) {
        cy.get('tbody tr').should('have.length', expectedCount);
    }

    verifyProductQuantity(rowIndex, expectedQty) {
        cy.get('tbody tr').eq(rowIndex).find('button.disabled')
            .should('contain.text', expectedQty);
    }

    removeProduct(rowIndex) {
        cy.get('tbody tr').eq(rowIndex).find('.cart_delete a').click();
    }
}

export default CartPage;
