///<reference types="cypress"/>
import { LoginPage as Login } from "../pom_file/login_Page";
import data from "../fixtures/example.json"
let obj=new Login()
export const login = {
visit() {
    cy.visit(Cypress.env("BaseUrl"))
    cy.title().should('eq', 'Skylab Command Center')
    cy.wait(2000).then(()=>{
    
    fetch('https://csa-new-qa2.skylab.world/')
    .then((res) =>res.json())
    .then((data) =>{
    console.log('This is your response json'+ data)
    })
    cy.screenshot("Login Screen");
    console.log("Login Succefully")
  })
  },
login(status:string): void {  
if (status=="valid"){
  obj.getUserName()
  .should('be.visible')
  .type(data.valid.UserName)
  obj.getPassword()
   .should('be.visible')
   .type(data.valid.Password)
   obj.getLoginButton().click()

}
else if (status=="Invalid"){
  obj.getUserName()
  .should('be.visible')
  .type(data.Invalid.UserName)
  obj.getPassword()
   .should('be.visible')
   .type(data.valid.Password)
   cy.mSaveLocalStorage();
}
else if (status=="Blank"){
  obj.getUserName()
  .should('be.visible')
  .type(data.Blank.UserName).clear
  obj.getPassword()
   .should('be.visible')
   .type(data.valid.Password).clear
   obj.getLoginButton()
  .should('be.visible').last()
  .click()
  obj.snackbar().should('be.visible').click()
  obj.snackbar_2().should('be.visible').click()
  }
else
  {
    console.log("Unformatted test data")
  }
}}