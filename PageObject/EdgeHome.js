import BasePage from "./BasePage";

class EdgeHome extends BasePage{

    get EdgePage(){ return cy.visit('http://edge10qainterview.azurewebsites.net/')    }
    get Email(){ return cy.get('#email')    }
    get Password(){ return cy.get('#Password')  }
    get LoginBtn(){ return cy.get('.btn')  }
    get About(){ return cy.get(':nth-child(2) > a') }

    
    clickOnEdgePage(){
        this.EdgePage.click();
    }

    enterEmail(StrEmail){
        this.Email.type(StrEmail);
    }

    
    enterPassword(StrPassword){
        this.Password.type(StrPassword);
    }
    clickOnLoginbtn(){
        this.LoginBtn.click();

    }

    clickOnAbout(){
        this.About.click();

    }

    Open(applicationurl){
        cy.visit(applicationurl);
        
    }
}
    
    module.exports= new EdgeHome();

    