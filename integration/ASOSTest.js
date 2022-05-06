const ASOSHOME = require ('../PageObject/ASOSHOME');
const BasePage = require ('../PageObject/BasePage');
describe ('Login to Website',function(){

    beforeEach(function(){
        
        cy.fixture('ASOSDATA').then(function(ASOSDATA){
            this.ASOSDATA=ASOSDATA
        })
    });

    it ('validate successful login',function(){
        ASOSHOME.Open(this.ASOSDATA.Website);
        ASOSHOME.clickOnHomeBtn();
        BasePage.pause(2000);
        ASOSHOME.clickOnMyAccount();
        BasePage.pause(2000);
        ASOSHOME.enterEmail(this.ASOSDATA.Email);
        BasePage.pause(2000);
        ASOSHOME.enterPassword(this.ASOSDATA.Password);
        BasePage.pause(2000);
        ASOSHOME.clickOnSignIn();
        BasePage.pause(2000);
        ASOSHOME.clickOnWomen();
        BasePage.pause(2000);
        // ASOSHOME.clickOnAsosSale();
        // BasePage.pause(2000);
        ASOSHOME.clickOnNewin();
        BasePage.pause(2000);
        ASOSHOME.clickOnClothing();
        BasePage.pause(2000);
        ASOSHOME.clickOnShoes();
        
        
    })
});
