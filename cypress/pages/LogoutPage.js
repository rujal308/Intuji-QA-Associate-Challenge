export default class LogoutPage {
    logout() {
        cy.get("a[href='/logout']").click();
    }

    verifyLoggedOut() {
        cy.url().should('include', '/login');
    }
}
