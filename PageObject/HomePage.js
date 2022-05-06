import BasePage from "./BasePage";

class HomePage extends BasePage{
 
    get UserNameTxt(){ return cy.get('#txtUsername')    }
    get PasswordTxt(){ return cy.get('#txtPassword')    }
    get LoginBtn(){ return cy.get('#btnLogin')    }

    enterUsername(StrUserName){ 
        this.UserNameTxt.clear().type(StrUserName);
    }

    enterPassword(StrPassword){
        this.PasswordTxt.clear().type(StrPassword);
    }

    clickOnLoginbtn(){
        this.LoginBtn.click();
    }

    Open(applicationurl){
        cy.visit(applicationurl);
    }
}

module.exports= new HomePage();