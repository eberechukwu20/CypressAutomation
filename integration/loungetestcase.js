const zalandolounge = require ('../PageObject/zalandolounge');
const BasePage = require ('../PageObject/BasePage');


describe ('Login to User zalandolounge',function(){

    beforeEach(function(){
        
        cy.fixture('testdata').then(function(testdata){
            this.testdata=testdata
        })
    });

    it ('validate successful login',function(){
        zalandolounge.open(this.testdata.zalandolounge)
        zalandolounge.clickOnaccountlogin();
        BasePage.pause(1000);
        zalandolounge.clickOnloginBtn
        BasePage.pause(1000);

        zalandolounge.enterEmailTxt(this.testdata.Email);
        zalandolounge.enterPassword(this.testdata.Password);
        zalandolounge.clickOnfurther();
    })

});