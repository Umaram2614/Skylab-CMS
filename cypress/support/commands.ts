// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
///<reference types="cypress"/>
///<reference types="cypress-xpath"/>
require('cypress-xpath')

///
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
var LOCAL_STORAGE_MEMORY :any= {};
Cypress.Commands.add("mSaveLocalStorage", function () {
    Object.keys(localStorage).forEach(function (key) {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});
Cypress.Commands.add("mRestoreLocalStorage", function () {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(function (key) {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});
  
Cypress.Commands.add("addition", (a,b)=>{
  let c= a+b  
  console.log("Addition "+c)
});
Cypress.Commands.add("xlread", (sheetnumber:number,row:number,col:number)=>{
  let path = "../fixtures/Book.xlsx";
      let reader = require("xlsx");
      var file = reader.readFile(path);
      var data:any = [];
      var sheets = file.SheetNames;
      if (sheets.length > sheetnumber) {
        var temp = reader.utils.sheet_to_json(
          file.Sheets[file.SheetNames[sheetnumber]]
        );
        temp.forEach(function (res:any) {
          data.push(res);
        });
      } else {
        console.log("Invalid sheet number");
      }
      //Searching row and column
      var value2 = Object.values(data[row]);
      return value2[col];
});
Cypress.Commands.add("beforetest",()=>{
  if ( Cypress.browser.isHeaded ) {
    cy.clearCookie('shouldSkip')
  } 
  else {
    cy.getCookie('shouldSkip').then(cookie => {
      if (
        cookie && 
        typeof cookie === 'object' && 
        cookie.value === 'true'
      ) {
        Cypress.runner.stop();
      }
    });
  }





});
