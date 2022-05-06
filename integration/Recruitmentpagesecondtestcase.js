const HomePage = require ('../PageObject/HomePage');
const Recruitmentpagesecondtestcase = require ('../PageObject/Recruitmentpagesecond');
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
        Recruitmentpagesecondtestcase.clickOnRecruitmentBtn();
        BasePage.pause(1000);
        Recruitmentpagesecondtestcase.enterhiringManager(this.testdata.hiringManager);
        BasePage.pause(1000);
        Recruitmentpagesecondtestcase.Selectvacancy(this.testdata.vacancy);
        BasePage.pause(1000);
        Recruitmentpagesecondtestcase.Selectstatus(this.testdata.RecruitmentStatus);
        BasePage.pause(1000);
        
     
        Recruitmentpagesecondtestcase.clickOnfromDatepicker();
        BasePage.pause(1000);
        Recruitmentpagesecondtestcase.SelectfromMonth(this.testdata.frommonth);
        BasePage.pause(1000);
        Recruitmentpagesecondtestcase.SelectfromYear(this.testdata.toYear);
        BasePage.pause(1000);
        Recruitmentpagesecondtestcase.clickOnfromdateselect();
        BasePage.pause(1000);
        Recruitmentpagesecondtestcase.entercandidateNameTxt(this.testdata.candidateName);
        BasePage.pause(1000);
        Recruitmentpagesecondtestcase .SelectSearch();
    })
});