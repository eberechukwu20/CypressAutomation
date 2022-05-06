const Bozmie = require ('../PageObject/Bozmie');
const BasePage = require ('../PageObject/BasePage');
describe ('Login to Website',function(){

    beforeEach(function(){
        
        cy.fixture('BozmiesData').then(function(BozmiesData){
            this.BozmiesData=BozmiesData
        })
    });

    it ('validate successful login',function(){
        Bozmie.Open(this.BozmiesData.website);
        Bozmie.clickOnlogninBtn();
        // Bozmie.clickOnAcceptCookies();
        Bozmie.enterEMail(this.BozmiesData.EMail);
        Bozmie.enterPassword(this.BozmiesData.Password);
        Bozmie.clickOnEnterBtn();
        Bozmie.clickOnSearch();
        Bozmie.clickOnMan();
        Bozmie.clickOnWoman();
        BasePage.pause(1000);
        Bozmie.clickOnfromAgeMin(this.BozmiesData.fromAgeMin);
        BasePage.pause(1000);
        Bozmie.clickOnfromAgeMax(this.BozmiesData.fromAgeMax);
       // Bozmie.clickOnfromYearRange(this.BozmiesData.fromYearMax);
        
    })
});
