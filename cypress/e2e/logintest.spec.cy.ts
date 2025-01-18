import { loginPage } from "../support/pageObjects/LoginPage";

const {
  USERNAME: username,
  PASSWORD: password,
  INVALID_USERNAME: invalidUsername,
  INVALID_PASSWORD: invalidPassword,
} = Cypress.env();

describe('Login Page Tests', () => {
  
  beforeEach(() => {
    cy.visit("/");
    loginPage.verifyLoginPage();
  });

  it('Validate username field required', () => {
    loginPage.enterPassword(password);
    loginPage.submitLogin();
    cy.get('h3').should('have.text', 'Epic sadface: Username is required');
  });

  it('Validate password field required', () => {
    loginPage.enterUsername(username);
    loginPage.submitLogin();
    cy.get('h3').should('have.text', 'Epic sadface: Password is required');
  });

  it('Login with invalid credentials', () => {
    loginPage.login(invalidUsername, invalidPassword);
    cy.get('h3').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Login with valid credentials', () => {
    loginPage.login(username, password);
    cy.url().should('include', '/inventory.html');
    cy.get('.product_label').should('have.text', 'Products');
  });
});
