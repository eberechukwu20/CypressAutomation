import BasePage from "./BasePage";

class FlaconiHomePage extends BasePage{
 
    get FlaconiHomePage(){ return cy.visit('www.flaconi.de') }
    get AcceptCookies(){ return cy.get('[uc-accept-all-button]') }
    get LoginBtn(){ return cy.get("accountIcon")     }
    get EMail(){ return cy.get('#email')    }
    get Password(){ return cy.get('#password')    }
    get RegistrationBtn(){ return cy.xpath('//*[@id="control"]/form/div[4]/button')    }
    // ['data-testid="uc-accept-all-button"']

    
 

    clickOnAcceptCookies(){
        this.AcceptCookies.click({ force: true });
    }
    clickOnLoginBtn(){
        this.LoginBtn.click();
    }

    enterEMail(StrEMail){ 
        this.EMail.clear().type(StrEMail);
    }

    enterPassword(StrPassword){
        this.Password.clear().type(StrPassword);
    }

    clickOnRegistrationBtn(){
        this.RegistrationBtn.click();
    }

    Open(applicationurl){
        cy.visit('www.flaconi.de');
    }
}

module.exports= new FlaconiHomePage();