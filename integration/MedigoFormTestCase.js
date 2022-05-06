const MedigoHomepage = require ('../PageObject/MedigoHomepage');
const MedigoFillForm = require ('../PageObject/MedigoFillForm');
const BasePage = require ('../PageObject/BasePage');

describe ('User details',function(){

    beforeEach(function(){
        
        cy.fixture('MedigoFormData').then(function(MedigoFormData){
            this.MedigoFormData=MedigoFormData
        })
    });

    it ('validate successful form filling',function(){
        MedigoHomepage.Open(this.MedigoFormData.Website);
        MedigoFillForm.enterOnName(this.MedigoFormData.Name);
        BasePage.pause(1000);
        MedigoFillForm.enterEmailaddress(this.MedigoFormData.Emailaddress);
        BasePage.pause(1000);
        MedigoFillForm.enterYourcompany(this.MedigoFormData.Yourcompany);
        BasePage.pause(1000);
        MedigoFillForm.enterPhoneNumber(this.MedigoFormData.PhoneNumber);
        BasePage.pause(1000);
        MedigoFillForm.typeComment(this.MedigoFormData.Comment);
        BasePage.pause(1000);
        MedigoFillForm.enterTerms(this.MedigoFormData.Terms);
        BasePage.pause(1000);

    })

});
        
        

