import SignupPage from '../pages/SignupPage';

describe('User Registration & Session Handling', () => {
    const signupPage = new SignupPage();

    beforeEach(() => {
        cy.session('user', () => {
            cy.registerAndLogin();
        });
    });

    it('Should register and log in a new user', () => {
        signupPage.visitHome();
        signupPage.verifyLoggedIn();
    });

    it('Should reuse session in another test', () => {
        signupPage.visitHome();
        signupPage.verifyLoggedIn();
    });
});
