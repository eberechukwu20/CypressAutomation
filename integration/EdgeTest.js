const EdgeHome = require ('../PageObject/EdgeHome');

describe ('Login to User Edge',function(){

    beforeEach(function(){
        
        cy.fixture('Edgedata').then(function(Edgedata){
            this.Edgedata=Edgedata
        })
    });

    it ('validate successful login',function(){
        EdgeHome.Open(this.Edgedata.Website);
        EdgeHome.enterEmail(this.Edgedata.Email);
        EdgeHome.enterPassword(this.Edgedata.Password);
        EdgeHome.clickOnLoginbtn();
        EdgeHome.clickOnAbout();


    })
});



