class SignupPage {
    visitHome() {
        cy.visit('https://automationexercise.com/');
    }

    clickSignupLogin() {
        cy.get("a[href='/login']").click();
    }

    fillInitialForm(name, email) {
        cy.get("input[placeholder='Name']").clear().type(name);
        cy.get("input[data-qa='signup-email']").clear().type(email);
        cy.get("button[data-qa='signup-button']").click();
    }

    handleExistingEmail(name) {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Email Address already exist!')) {
                const newEmail = Cypress._.uniqueId('user_') + '@mail.com';
                this.fillInitialForm(name, newEmail);
                return newEmail;
            }
        });
    }

    fillAdditionalDetails(password) {
        cy.get('#id_gender2').check();
        cy.get('#password').type(password);
        cy.get('#days').select('10');
        cy.get('#months').select('May');
        cy.get('#years').select('1995');
        cy.get('#newsletter').check();
        cy.get('#optin').check();
        cy.get('#first_name').type('Rita');
        cy.get('#last_name').type('Dahal');
        cy.get('#company').type('Intuji');
        cy.get('#address1').type('Balkumari, Lalitpur');
        cy.get('#country').select('India');
        cy.get('#state').type('Bagmati');
        cy.get('#city').type('Kathmandu');
        cy.get('#zipcode').type('44600');
        cy.get('#mobile_number').type('9800000000');
        cy.get("button[data-qa='create-account']").click();
    }

    verifyAccountCreated() {
        cy.contains('Account Created!').should('be.visible');
        cy.get("a[data-qa='continue-button']").click();
    }

    verifyLoggedIn() {
        cy.contains('Logged in as').should('be.visible');
    }
}

export default SignupPage;
