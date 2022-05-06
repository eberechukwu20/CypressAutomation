import BasePage from "./BasePage";

class Facebook extends BasePage{

    get Facebook(){ return cy.visit('https://www.facebook.com') }
    get AcceptCookies(){  return cy.xpath('//*[text()="Nur erforderliche Cookies erlauben"]')}
    get Username(){ return cy.get('#email')    }
    get PasswordTxt(){ return cy.get('#pass')    }
    get LoginBtn(){ return cy.get('#u_0_d_WF')    }
    

    Open(applicationurl){
        cy.visit('https://www.facebook.com/');
    }

    clickOnAcceptCookies(){
        this.AcceptCookies.click();
    }

    enterUsername(StrUsername){
        this.Username.clear().type(StrUsername);
    }

    enterPasswordTxt(StrPasswordTxt){
        this.PasswordTxt.clear().type(StrPasswordTxt);
    }

    clickOnLoginbtn(){
        this.LoginBtn.click();
    }

   
}

module.exports= new Facebook();
 