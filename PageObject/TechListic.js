import BasePage from "./BasePage";

class TechListic extends BasePage{

    get site(){ return cy.visit('https://www.techlistic.com/p/selenium-practice-form.html')  }
    get cookies(){ return cy.xpath('//*[@id="ez-accept-all"]')  }
    get firstname(){ return cy.xpath('//*[@id="post-body-3077692503353518311"]/div[1]/div/div/h2[2]/div[1]/div/div[2]/input')  }
    get lastname(){ return cy.xpath('//*[@id="post-body-3077692503353518311"]/div[1]/div/div/h2[2]/div[1]/div/div[5]/input')  }
    get gender(){ return cy. get('#sex-0')  }
    get yearsexperience(){ return cy.get('#exp-0')  }
    get date(){ return cy.get('#datepicker')}
    get Profession(){ return cy.get('#profession-0')  }
    get Automationtools(){ return cy.get('#tool-0')  }
    get Continent(){ return cy.get('#continents')  }
    get continentdropdown(){ return cy.xpath('//*[@id="continents"]')    }
    get multiplecommands(){ return cy.get('#selenium_commands')  }
    get commanddropdown(){ return cy.xpath('//*[@id="selenium_commands"]')   }
    get image(){ return cy. get('#photo')  }
    get Submit(){ return cy. get('#submit')  }


    clickOnsite(){
        this.site.click();
    }

    clickOncookies(){
        this.cookies.click();
    }

    enterfirstname(Strfirstname){
        this.firstname.type(Strfirstname);
    }

    enterlastname(Strlastname){
        this.lastname.type(Strlastname);
    }

    selectgender(Strgender){
        this.gender.click();
    }

    selectyearsexperience(Streyearsexperience){
        this.yearsexperience.click();
    }

    enterdate(strdate){
        this.date.clear().type(strdate);
    }
    selectProfession(StrProfession){
        this.Profession.click();
    }

    selectAutomationtools(StrAutomationtools){
        this.Automationtools.click();
    }

    // selectContinent(StrContinent){
    //     this.Continent.select();
    // }

    // selectcontinentdropdown(strcontinentdropdown){
    //     this.continentdropdown.select(strcontinentdropdown);
    // }

    // selectmultiplecommands(Strmultiplecommands){
    //     this.multiplecommands.select();
    // }

    // selectcommanddropdown(Strcommanddropdown){
    //     this.commanddropdown.clear().select(Strcommanddropdown); 
    // }

    // clickOnimage(){
    //     this.image.click();
    // }

    clickSubmitt(){
        this.Submit.click();
    }

    Open(applicationurl){
        cy.visit(applicationurl);

    }
}

module.exports= new TechListic();




    



    



