///<reference types="cypress"/>
import { Gamification_Main as Gami_Main } from "../pom_file/gamification_MainPage";
import data from "../fixtures/example.json"
let obj=new Gami_Main()
export const gamificationMain = {
selectapp() :any {
    cy.wait(5000)
    cy.mRestoreLocalStorage();
    cy.visit(Cypress.env("Dashboard"))
    cy.title().should('eq', 'Skylab Command Center')
    cy.wait(2000).then(()=>{   
    })
    var applist = [];
    let i=0
       obj.applist_dropdown().should('be.visible').click()
       obj.applist().each(function($ele){
        applist[i]= $ele.text()
        if($ele.text()==data.appname){
        obj.selected_app().contains(data.appname).last().click()
        cy.log(data.appname +" Selected Successfully") 
        }
        i++;
    })
    cy.task("log","Application Selected")
},
createhighlight():any{
//Create Highlight Page Navigation
//Navigating App Manger 
cy.wait(5000)
cy.visit(Cypress.env("Dashboard"))
obj.AppManager().should('be.visible')
obj.AppManager().xpath("./div[5]").click()
//Clicking Gamification 
cy.wait(5000)
obj.gamification().contains("Gamification").click()
//Clicking Create Highlight
cy.wait(3000)
obj.CreateHighlight().click({force: true})
//*[@id="menu-"]/div[3]/ul
//cy.get('[style="width: 250px;"] > [data-testid="dropid"] > #custom-dropdown-select').should('be.visible').click()
}

}

    