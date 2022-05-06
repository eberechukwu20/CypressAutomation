import BasePage from "./BasePage";



class zalandolounge extends BasePage{


    get zalandolounge(){ return cy.visit('https://www.zalando-lounge.de') }
    get accountlogin(){ return cy.get('#topbar-cta-btn') }
    get loginBtn(){ return cy.get('#sso-login-lounge')     }
    get EmailTxt(){ return cy.xpath('//*[@id="form-email"]')    }
    get Password(){ return cy.get('#form-password') }
    get further(){ return cy.get('#login-form-submit')   }

    clickOnaccountlogin(){
        this.accountlogin.click();
    }

    clickOnloginBtn(){
        this.loginBtn.click();
    }

    enterEmailTxt(StrEmailTxt){
        this.EmailTxt.clear().type(StrEmailTxt);
    }

    enterPassword(strPassword){
        this.Password.type(strPassword,{force:true});
    }

    clickOnfurther(){
        this.further.click();
    }

    
    open(applicationurl){
        cy.visit(applicationurl);

    }
   
}

module.exports= new zalandolounge();
