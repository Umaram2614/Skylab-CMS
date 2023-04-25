describe('Skipping Cypress tests on first failure and save resources', () => {
it("With Error", () => {
cy.visit("https://demoqa.com/profile").screenshot();
Cypress.on("uncaught:exception", (err, runnable) => {
    console.log("Exception Handled")
    console.log("hello")
    return false;
    });
});
})