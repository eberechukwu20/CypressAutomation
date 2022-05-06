const FlaconiHomePage = require ('../PageObject/FlaconiHomePage');

describe ('Login to Website',function(){

    beforeEach(function(){
        
        cy.fixture('FlaconiData').then(function(FlaconiData){
            this.FlaconiData=FlaconiData
        })
    });

    it ('validate successful login',function(){
        FlaconiHomePage.Open(this.FlaconiData.website);
        FlaconiHomePage.clickOnAcceptCookies();
        FlaconiHomePage.clickOnLoginBtn();
        
        FlaconiHomePage.enterEMail(this.FlaconiData.EMail);
        FlaconiHomePage.enterPassword(this.FlaconiData.password);
        FlaconiHomePage.clickOnRegistrationBtn();
    })
});
