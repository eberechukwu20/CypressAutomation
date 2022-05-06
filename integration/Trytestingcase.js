const Trytesting = require ('../PageObject/Trytesting');



describe ('Login to Website',function(){

    beforeEach(function(){
        
        cy.fixture('TrytestingData').then(function(TrytestingData){
            this.TrytestingData=TrytestingData
        })
    });

    it ('validate successful login',function(){
        Trytesting.Open(this.TrytestingData.Website);
        Trytesting.enterUserName(this.TrytestingData.UserName);
        Trytesting.enterPassword(this.TrytestingData.Password);
        Trytesting.clickOnLoginBtn();
        Trytesting.clickOnhereBtn();
    })
});