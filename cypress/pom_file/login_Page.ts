///<reference types="cypress"/>
import data from "../fixtures/selector.json"
export class LoginPage {
  getUserName() {
      return cy.get(data.user_name);
  }
  getPassword(){
      return cy.get(data.pass_word);
  }
  getLoginButton(){
      return cy.get(data.login_button);
  }
  snackbar(){
    return cy.contains("Invalid E-mail ID");
  }
  snackbar_2(){
    return cy.contains("Password required");
  }
}