import BasePage from "./BasePage";

class Healthpage extends BasePage{

    get Healthpage(){ return cy.visit('https://my.nuffieldhealth.com/') }
    get LoginBtn(){ return cy.xpath('//*[@data-ga-category="Account login"]')     }
    get EmailTxt(){ return cy.get('#email')    }
    get PasswordTxt(){ return cy.get('#password')    }
    get logInenter(){  return cy.xpath('//button[@id="next"]')     }

    get AcceptCookies(){  return cy.xpath('//button[@id="ccc-notify-accept"]/span')     }
    get NHealth(){ return cy.get('class[name="nav__logo"]') }
    get NuffieldHealth(){ return cy.get('#main')     }
    
    

    clickOnNuffieldHealth(){
        this.NuffieldHealth.click();
    }

    clickOnAcceptCookies(){
        this.AcceptCookies.click();
    }

    enterEmailTxt(StrEmailTxt){
        this.EmailTxt.clear().type(StrEmailTxt);
    }

    enterPasswordTxt(StrPasswordTxt){
        this.PasswordTxt.clear().type(StrPasswordTxt);
    }

    clickOnLoginbtn(){
        this.LoginBtn.click();
    }

    clickOnlogInenter(){
        this.logInenter.click();
    }

    Open(applicationurl){
        cy.visit(applicationurl);
    }
}

module.exports= new Healthpage();
 