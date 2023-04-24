///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

import data from "../fixtures/selector.json"
export class Gamification_Main {
    applist_dropdown() {
        return cy.get(data.app_drodown,{timeout:5000});
    }
    applist(){
        return cy.xpath(data.applist,{timeout:5000});
    }
    selected_app()
    {
        return cy.xpath(data.selected_app,{timeout:5000});
    }
    AppManager()
    {
        return cy.xpath(data.Appmanger)
    }
    gamification()
    {
        return cy.xpath(data.Gamification)
    }
    CreateHighlight()
    {
    return cy.contains(data.Createhighlight)
    }

    
  }