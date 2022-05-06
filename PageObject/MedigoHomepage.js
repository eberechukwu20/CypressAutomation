import BasePage from "./BasePage";

class MedigoHomepage extends BasePage{


    get MedigoHome(){ return cy.visit('https://www.medigo.com/') }
    get ContactUSBtn(){ return cy.xpath('//*[@id="menu-menu"]/li[4]') }
    get JoinourTeamBtn(){ return cy.xpath('//*[@id="menu-menu"]/li[3]/a')   }
    get OurnetworkBtn(){ return cy.xpath('//*[@id="menu-menu"]/li[2]')  }
    get AboutUSBtn(){ return cy.xpath('//*[@id="menu-menu"]/li[1]') }
   




     
    clickOnContactUSBtn(){
        this.ContactUSBtn.click();
    }

    clickOnJoinourTeamBtn(){
        this.JoinourTeamBtn.click(); 
    }
    
    clickOnOurnetworkBtn(){
        this.OurnetworkBtn.click(); 
    }

    clickOnAboutUSBtn(){
        this.AboutUSBtn.click();
    }

    


     
    







    Open(applicationurl){
        cy.visit('https://www.medigo.com/');
    }
}

module.exports= new MedigoHomepage();