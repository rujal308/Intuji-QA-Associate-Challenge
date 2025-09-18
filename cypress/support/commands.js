// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker';
import SignupPage from '../pages/SignupPage';

Cypress.Commands.add('registerAndLogin', () => {
    const signupPage = new SignupPage();

    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password();

    signupPage.visitHome();
    signupPage.clickSignupLogin();
    signupPage.fillInitialForm(randomName, randomEmail);
    signupPage.handleExistingEmail(randomName);  // ensure unique email
    signupPage.fillAdditionalDetails(randomPassword);
    signupPage.verifyAccountCreated();
    signupPage.verifyLoggedIn();

    // Save credentials for other tests
    cy.writeFile('cypress/fixtures/user.json', {
        name: randomName,
        email: randomEmail,
        password: randomPassword
    });
});

Cypress.Commands.add('loginUser', () => {
    const signupPage = new SignupPage();

    cy.fixture('user.json').then((user) => {
        signupPage.visitHome();
        signupPage.clickSignupLogin();
        cy.get("input[data-qa='login-email']").type(user.email);
        cy.get("input[data-qa='login-password']").type(user.password);
        cy.get("button[data-qa='login-button']").click();
        signupPage.verifyLoggedIn();
    });
});

