# QA-Challenge-Task
**Cypress Automation Assessment**

This project is a Cypress automation test suite for [https://automationexercise.com](https://automationexercise.com).  
It covers key flows including user registration, session handling, product browsing, cart management, and checkout.

---

## Features Covered

### User Registration with Faker
- Generates random user details using the **faker** library.  
- Checks for email uniqueness to avoid duplicate registration.  
- Verifies the user is logged in after registration.  
- Stores session cookies and reuses them for future tests.

### Product Browsing and Add to Cart
- Navigates to product categories and verifies product listing.  
- Adds selected product to cart and confirms the cart update.

### Checkout Flow
- Proceeds to checkout.  
- Uses existing or default address.  
- Enters fake payment details.  
- Confirms order and validates success message.

### Negative Scenarios
- Handles existing email scenario gracefully during registration.

---

## Setup Steps
1. Clone the repository and open it in VS Code.  
2. Install project dependencies:  
   ```bash
   npm install
3. Open Cypress Test Runner:
    npx cypress open

## How to Run Tests
- After opening Cypress (`npx cypress open`), select the `.cy.js` files inside the `cypress/e2e` folder.  
- Execute tests **one by one** by clicking on the test files in the Cypress Test Runner.  

## Tools/Plugins Used
- **Cypress** – End-to-end testing framework.  
- **Faker.js** – Used for generating random user data during registration.  
- **Cypress Session** – For reusing login sessions across tests.  
- **Page Object Model (POM)** – Organizes page actions and elements into separate classes for better maintainability.  

## Known Limitations
- Some tests may fail if the website is slow or external scripts (ads) block page load.  
- Session reuse depends on site availability; tests may fail if the server is down.  
- File uploads (if used) are limited to supported formats in the test code.  
- Visual screenshot comparisons are not included.  

> **Note:** No `cy.intercept()` or API assertions are used in this project.



