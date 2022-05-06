const Facebook = require ('../PageObject/Facebook');

describe ('Login to User FACEBOOK',function(){

    beforeEach(function(){
        
        cy.fixture('testdata').then(function(testdata){
            this.testdata=testdata
        })
    });

    it ('validate successful login',function(){
        Facebook.Open(this.testdata.FACEBOOK);
        Facebook.clickOnAcceptCookies();
        Facebook.enterUsername(this.testdata.Username);
        Facebook.enterPasswordTxt(this.testdata.password);
        Facebook.clickOnLoginbtn();
    })
});
