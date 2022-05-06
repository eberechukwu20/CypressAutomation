import BasePage from "./BasePage";

class ASOSHOME extends BasePage{
 
    get ASOSHOME(){ return cy.visit('https://www.asos.com/') }
    get HomeBtn(){ return cy.xpath('//*[@id="myAccountDropdown"]/button/span') }
    get MyAccount(){ return cy.get('#myaccount-dropdown') }
    get Email(){ return cy.get('#EmailAddress') }
    get Password(){ return cy.get('#Password') }
    get SignIn(){ return cy.get('#signin') }
    get Women(){ return cy.get('#women-floor') }
    // get AsosSale(){ return cy.xpath('//*[@id="chrome-sticky-header"]/div[2]/div[1]/nav/div/div/button[1]/span')   }
    get Newin(){ return cy.xpath('//*[@id="chrome-sticky-header"]/div[2]/div[1]/nav/div/div/button[2]/span/span')   }
    get Clothing(){ return cy.xpath('//*[@id="chrome-sticky-header"]/div[2]/div[1]/nav/div/div/button[3]/span/span')    }
    get Shoes(){ return cy. xpath('//*[@id="chrome-sticky-header"]/div[2]/div[1]/nav/div/div/button[4]/span/span')  }
    



    clickOnHomeBtn(){
        this.HomeBtn.click();
    }

    clickOnMyAccount(){
        this.MyAccount.click();
    }

    enterEmail(StrEmail){ 
        this.Email.clear().type(StrEmail,{force:true});
        ;
    }

    enterPassword(StrPassword){
        this.Password.clear().type(StrPassword,{force:true});
        ;
    }

    clickOnSignIn(){
        this.SignIn.click();

    }
    clickOnWomen(){
        this.Women.click();
    }
    // clickOnAsosSala(){
    //     this.AsosSale.click();
    // }

    clickOnNewin(){
        this.Newin.click();
    }

    clickOnClothing(){
        this.Clothing.click();
    }

    clickOnShoes(){
        this.Shoes.click();
    }

        Open(applicationurl){
        cy.visit('https://www.asos.com/');
    
    }
}

module.exports= new ASOSHOME();