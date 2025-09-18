class ProductPage {
    visitProductsPage() {
        cy.visit('https://automationexercise.com/products');
    }

    filterCategory(category, subCategory) {
        cy.contains(category).click();
        cy.contains(subCategory).click();
    }

    verifyFilteredProducts(expectedKeyword) {
        cy.get('.features_items').should('contain.text', expectedKeyword);
        cy.get('.features_items .product-image-wrapper').should('exist');
    }

    clickFirstProduct() {
       cy.get('.features_items .choose a').contains('View Product').first().click();
    }

    verifyProductDetails(expectedNameKeyword) {
        cy.get('.product-information h2').should('contain.text', expectedNameKeyword);
        cy.get('.product-information span span').should('contain.text', 'Rs.');
        cy.get('.product-information p').should('contain.text', 'Availability: In Stock');
    }

    
}

export default ProductPage;
