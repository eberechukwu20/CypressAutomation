const HomePage = require ('../PageObject/HomePage');
const DirectoryPage = require ('../PageObject/DirectoryPage');
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
        DirectoryPage.clickOnDirectoryBtn();
        BasePage.pause(1000);
        DirectoryPage.enterNameTxt(this.testdata.Name);
        BasePage.pause(1000);
        DirectoryPage.SelectJobTitle(this.testdata.JobTitle);
        BasePage.pause(1000);
        DirectoryPage.SelectLocation(this.testdata.Location);
        BasePage.pause(1000);
        DirectoryPage .SelectSearch();

    })

});    

        

