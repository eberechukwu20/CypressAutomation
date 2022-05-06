const levidia = require ('../PageObject/levidia');
const BasePage = require ('../PageObject/BasePage');

describe ('Login to website',function(){

    beforeEach(function(){
        
        cy.fixture('levidiaData').then(function(levidiaData){
            this.levidiaData=levidiaData
        })
    });

    it ('validate successful login',function(){
        levidia.Open(this.levidiaData.website);
        // levidia.clickOnAcceptCookies();
        levidia.clickOnLoginBtn();
        // levidia.enterEmailTxt(this.levidiaData.EmailTxt);
        // levidia.enterPasswordTxt(this.levidiaData.PasswordTxt);
        // levidia.clickOnlogInenter();
        // levidia.clickOnNuffieldHealth();
      
    })
});