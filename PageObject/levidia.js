import BasePage from "./BasePage";

class levidia extends BasePage{

    get levidia(){ return cy.visit('https://www.levidia.ch/a') }
    get LoginBtn(){ return cy.xpath('//*[@id="headercontainer"]/div[1]/ul[2]/li[2]/a')     }
    // get EmailTxt(){ return cy.get('#email')    }
    // get PasswordTxt(){ return cy.get('#password')    }
    // get logInenter(){  return cy.xpath('//button[@id="next"]')     }

    // get AcceptCookies(){  return cy.xpath('//button[@id="ccc-notify-accept"]/span')     }
    // get NHealth(){ return cy.get('class[name="nav__logo"]') }
    // get NuffieldHealth(){ return cy.get('#main')     }
    
    
    clickOnlevidia(){
        this.levidia.click()
    }

    clickOnLoginBtn(){
        this.LoginBtn.click();
    }

    // clickOnAcceptCookies(){
    //     this.AcceptCookies.click();
    // }

    // enterEmailTxt(StrEmailTxt){
    //     this.EmailTxt.clear().type(StrEmailTxt);
    // }

    // enterPasswordTxt(StrPasswordTxt){
    //     this.PasswordTxt.clear().type(StrPasswordTxt);
    // }

    // clickOnLoginbtn(){
    //     this.LoginBtn.click();
    // }

    // clickOnlogInenter(){
    //     this.logInenter.click();
    // }

    Open(applicationurl){
        cy.visit(applicationurl);
    }
}

module.exports= new levidia();
 