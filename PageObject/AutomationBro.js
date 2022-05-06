import BasePage from "./BasePage";

class AutomationBro extends BasePage{
 
    get AutomationBro(){ return cy.visit('https://automationbro.com//') }
    // get SearchBtn(){ return cy.get('#ocean-search-form-1') }
    get Resources(){ return cy.xpath('//*[@id="menu-item-962"]/a/span') }
    get PracticeE(){ return cy.xpath('//*[@id="menu-item-962"]')    }
    get GetStarted(){ return cy.get('#get-started') }


    clickOnResources(){
        this.Resources.click();

    }
    
    clickOnPracticeE(){
        this.PracticeE.click();
            
        
    }
    
    clickOnGetStarted(){
        this.GetStarted.click();

    }

    
    Open(applicationurl){
        cy.visit('https://automationbro.com/');
    }
}

module.exports= new AutomationBro();