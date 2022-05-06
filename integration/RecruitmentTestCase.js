const HomePage = require ('../PageObject/HomePage');
const RecruitmentPage = require ('../PageObject/RecruitmentPage');
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
        RecruitmentPage.clickOnRecruitmentBtn();
        BasePage.pause(1000);
        RecruitmentPage.enterHiringManager(this.testdata.HiringManager);
        BasePage.pause(1000);
        RecruitmentPage.SelectVacancy(this.testdata.Vacancy);
        BasePage.pause(1000);
        RecruitmentPage.SelectStatus(this.testdata.RecruitmentStatus);
        BasePage.pause(1000);
        
     
      RecruitmentPage.clickOnfromDatepicker();
      BasePage.pause(1000);
      RecruitmentPage.SelectfromMonth(this.testdata.Frommonth);
      BasePage.pause(1000);
      RecruitmentPage.SelectfromYear(this.testdata.ToYear);
      BasePage.pause(1000);
      RecruitmentPage.clickOnfromdateselect();
        BasePage.pause(1000);
        RecruitmentPage.enterCandidateNameTxt(this.testdata.CandidateName);
        BasePage.pause(1000);
        RecruitmentPage .SelectSearch();
    })
});