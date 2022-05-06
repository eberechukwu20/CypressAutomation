const AutomationBro = require ('../PageObject/AutomationBro');
const BasePage = require ('../PageObject/BasePage');
describe ('Login to Website',function(){

    beforeEach(function(){
        
        cy.fixture('AutomationBroData').then(function(AutomationBroData){
            this.AutomationBroData=AutomationBroData
        })
    });

    it ('validate successful Login',function(){
        AutomationBro.Open(this.AutomationBroData.website);
        AutomationBro.clickOnResources();
        AutomationBro.clickOnPracticeE();
        AutomationBro.clickOnGetStarted();


    })
});