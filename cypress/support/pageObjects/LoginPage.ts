class LoginPage {
  userNameField = 'input#user-name';
  passwordField = 'input#password';
  loginButton = 'input#login-button';

  enterUsername(username) {
    cy.get(this.userNameField).clear().type(username);
  }
  enterPassword(password) {
    cy.get(this.passwordField).clear().type(password);
  }
  submitLogin() {
    cy.get(this.loginButton).click();
  }
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.submitLogin();
  }
  verifyLoginPage() {
    cy.url().should('include', '/v1');
    cy.get(this.userNameField).should('be.visible');
    cy.get(this.passwordField).should('be.visible');
    cy.get(this.loginButton).should('be.visible');
  }
}

export const loginPage = new LoginPage();