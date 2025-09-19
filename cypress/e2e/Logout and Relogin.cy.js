import LoginPage from '../pages/LoginPage';

describe('Logout and Relogin', () => {
  it('Logs out and logs in again', () => {
    const loginPage = new LoginPage();

    // Load saved user credentials
    cy.fixture('user').then((user) => {
      const email = user.email;
      const password = user.password;

      // Visit login page
      loginPage.visit();

      // Login using fixture data
      loginPage.login(email, password);

      cy.contains('Logged in as').should('be.visible');

      // Logout
      cy.get("a[href='/logout']").click({ force: true });

      // Verify login page is displayed
      cy.url().should('include', '/login');

      // Login again
      loginPage.login(email, password);
      cy.contains('Logged in as').should('be.visible');
    });
  });
});
