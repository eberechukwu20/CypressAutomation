const HomePage = require ('../PageObject/HomePage');
const AdminPage = require ('../PageObject/AdminPage');
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
        AdminPage.clickOnAdminBtn();
        BasePage.pause(1000);
        AdminPage.enterAdminUserNameTxt(this.testdata.AdminUsername);
        BasePage.pause(1000);
        AdminPage.SelectUserRole(this.testdata.UserRole);
        BasePage.pause(1000);
        AdminPage.enterEmployeeName(this.testdata.Employeename);
        BasePage.pause(1000);
        AdminPage.SelectStatus(this.testdata.Status);
    })
});
