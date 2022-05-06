const HomePage = require ('../PageObject/HomePage');
const PimPage = require ('../PageObject/PimPage');
const BasePage = require ('../PageObject/BasePage');

describe ('User Management',function(){

    beforeEach(function(){
        
        cy.fixture('testdata').then(function(testdata){
            this.testdata=testdata
        })
    });

    it ('validate successful login',function(){
        HomePage.Open(this.testdata.website);
        HomePage.enterUsername(this.testdata.username);
        HomePage.enterPassword(this.testdata.password);
        HomePage.clickOnLoginbtn();
        PimPage.clickOnPimBtn();
        BasePage.pause(1000);
        PimPage.enteridTxt(this.testdata.id);
        BasePage.pause(1000);
        PimPage.SelectJobTitle(this.testdata.PIMJobTitle);
        BasePage.pause(1000);
        PimPage.SelectEmploymentStatus(this.testdata.EmploymentStatus);
        BasePage.pause(1000);
        PimPage.SelectSubUnit(this.testdata.SubUnit);
        BasePage.pause(1000);
        PimPage.enterSupervisorName(this.testdata.SupervisorName);
        BasePage.pause(1000);
        PimPage.SelectSearch();
    })

});