const Healthpage = require ('../PageObject/Healthpage');
const BasePage = require ('../PageObject/BasePage');

describe ('Login to website2',function(){

    beforeEach(function(){
        
        cy.fixture('testdata').then(function(testdata){
            this.testdata=testdata
        })
    });

    it ('validate successful login',function(){
        Healthpage.Open(this.testdata.website2);
        Healthpage.clickOnAcceptCookies();
        Healthpage.clickOnLoginbtn();
        Healthpage.enterEmailTxt(this.testdata.EmailTxt);
        Healthpage.enterPasswordTxt(this.testdata.PasswordTxt);
        Healthpage.clickOnlogInenter();
        Healthpage.clickOnNuffieldHealth();
      
    })
});