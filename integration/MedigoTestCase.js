const MedigoHomepage = require ('../PageObject/MedigoHomepage');
const BasePage = require ('../PageObject/BasePage');
describe ('Login to Website',function(){

    beforeEach(function(){
        
        cy.fixture('MedigoData').then(function(MedigoData){
            this.MedigoData=MedigoData
        })
    });

    it ('validate successful Login',function(){
        MedigoHomepage.Open(this.MedigoData.Website);
        MedigoHomepage.clickOnContactUSBtn();
        MedigoHomepage.clickOnJoinourTeamBtn();
        MedigoHomepage.clickOnOurnetworkBtn();
        MedigoHomepage.clickOnAboutUSBtn();
        
        


        
    })
});