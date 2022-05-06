import BasePage from "./BasePage";

class Bozmie extends BasePage{
 
    get Bozmie(){ return cy.visit('www.https://www.bozmie.com/') }
    get logninBtn(){ return cy.xpath('//*[@id="pjaxcontainer"]/div[4]/div/div[1]/div/div[2]/div/a[1]')     }
    // get AcceptCookies(){ return cy.xpath('//*[@id="uc-center-container"]/div[2]/div/div/div/button[3]')       }
    get EMail(){ return cy.get('#email')    }
    get Password(){ return cy.get('#password')    }
    get EnterBtn(){ return cy.xpath('//*[@id="main_page"]/div/div[2]/div[2]/div[1]/form/div[3]/div/button')    }
    get Search(){ return cy.xpath( '//*[@id="activities_search_item"]')   }
    //get Man(){ return cy.xpath('//*[@id="looking_user_type_cbox"]/div[1]/div[1]')    }
    //get Woman(){ return cy.xpath('//*[@id="looking_user_type_cbox"]')    }
    get Gender(){ return cy.xpath('//*[@id="looking_user_type_cbox"]') }
    get woman (){return cy.get("div [class = '']").contains("gid female").Gender()}
  
    // get Age(){  return cy.get('#age_min') }
    get fromAgeMin(){ return cy.get('#age_min')     }
    //get fromYearRange(){ return cy.get('select[class="ui-datepicker-month"]')     }
    get fromAgeMax(){ return cy.get('#age_max')     }
    // get fromdateselect(){ return cy.get('table tbody tr:nth-child(2) td:nth-child(4) > a.ui-state-default')     }
    
    
    
    clickOnlogninBtn(){
        this.logninBtn.click();
    }

    clickOnAcceptCookies(){
        this.AcceptCookies.click();
    }

    enterEMail(StrEMail){ 
        this.EMail.clear().type(StrEMail);
    }

    enterPassword(StrPassword){
        this.Password.clear().type(StrPassword);
    }

    clickOnEnterBtn(){
        this.EnterBtn.click();
    }

    clickOnSearch(){
        this.Search.click();
    }

    clickOnMan(){
        this.Man.click();
    }

    clickOnfromAgeMin(ageMin){
        this.fromAgeMin.select(ageMin,{force:true});
    }

    clickOnfromAgeMax(ageMax){
        this.fromAgeMax.select(ageMax,{force:true});
        ;
    }

    Open(applicationurl){
        cy.visit('https://www.bozmie.com/');
    }
}

module.exports= new Bozmie();