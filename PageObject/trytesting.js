import BasePage from "./BasePage";

class Trytesting extends BasePage{
 
    get Trytesting(){ return cy.visit('https://trytestingthis.netlify.app/')   }
    get UserName(){ return cy.get('#uname')    }
    get Password(){ return cy.get('#pwd')    }
    get LoginBtn(){ return cy.xpath('/html/body/div[3]/div[1]/fieldset/form/div/input[3]')    }
    get hereBtn(){ return cy.xpath('/html/body/div[3]/h4')    }

    enterUserName(StrUserName){ 
        this.UserName.clear().type(StrUserName);
    }

    enterPassword(StrPassword){
        this.Password.clear().type(StrPassword);
    }

    clickOnLoginBtn(){
        this.LoginBtn.click();
    }

    clickOnhereBtn(){
        this.hereBtn.click();

    }
        Open(applicationurl){
        cy.visit(applicationurl);
    }
}

module.exports= new Trytesting();