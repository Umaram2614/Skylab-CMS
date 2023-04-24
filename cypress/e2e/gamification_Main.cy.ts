import { after } from "node:test";
import {gamificationMain} from "../support/gamificationMain_Feature.cy"
import {login} from "../support/login_feature.cy"
describe('Login Feature', () => {
    before(()=>{
        login.visit()
        login.login("valid")      
    });
    afterEach(()=>{
        cy.mSaveLocalStorage()
    });
    beforeEach(()=>{
        cy.mRestoreLocalStorage();
    });
it('Calling select app', () => {
    gamificationMain.selectapp()
            })
it('Gamification', () => {
    gamificationMain.createhighlight()
    })
    
})
