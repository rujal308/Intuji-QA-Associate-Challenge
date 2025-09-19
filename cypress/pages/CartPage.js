class CartPage {
    viewCart() {
        cy.get("p.text-center a").click({ force: true });
    }

    verifyProductCount(expectedCount) {
        cy.get('tbody tr').should('have.length', expectedCount);
    }

 verifyProductQuantity(productName, expectedQty) {
  cy.get('tbody tr').each(($row) => {
    // check if this row has the product name
    cy.wrap($row).within(() => {
      cy.get('td').first().then(($td) => {
        if ($td.text().includes(productName)) {
          cy.get('button.disabled').should('contain.text', expectedQty);
        }
      });
    });
  });
}

    removeProduct(rowIndex) {
        cy.get('tbody tr').eq(rowIndex).find('.cart_delete a').click();
    }

    //Checkout part

    proceedToCheckout() {
        cy.get('.btn.btn-default.check_out').click();
    }

    placeOrder() {
        cy.get('.btn.btn-default.check_out').click({ force: true });
    }

    fillPaymentDetails({ name, cardNumber, cvc, expiryMonth, expiryYear }) {
        cy.get("input[name='name_on_card']").type(name);
        cy.get("input[name='card_number']").type(cardNumber);
        cy.get("input[name='cvc']").type(cvc);
        cy.get("input[placeholder='MM']").type(expiryMonth);
        cy.get("input[placeholder='YYYY']").type(expiryYear);
        cy.get('#submit').click();
    }

    verifyOrderSuccess() {
        cy.get("h2.title.text-center b").should('contain', 'Placed');
    }
}

export default CartPage;
