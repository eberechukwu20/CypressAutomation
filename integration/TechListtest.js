const TechListic = require ('../PageObject/TechListic');
const BasePage = require ('../PageObject/BasePage');

describe ('Login toWebsite',function(){

    beforeEach(function(){
        
        cy.fixture('TechListdata').then(function(TechListdata){
            this.TechListdata=TechListdata
        })
    });

    it ('validate successful login',function(){
        TechListic.Open(this.TechListdata.Website);
        TechListic.clickOncookies();
        TechListic.enterfirstname(this.TechListdata.firstname);
        TechListic.enterlastname(this.TechListdata.lastname);
        TechListic.selectgender(this.TechListdata.gender);
        TechListic.selectyearsexperience(this.TechListdata.yearsexperience);
        TechListic.enterdate(this.TechListdata.date);
        TechListic.selectProfession(this.TechListdata.Profession);
        TechListic.selectAutomationtools(this.TechListdata.Automationtools);
        // TechListic.selectContinent(this.TechListdata.Continent);
        // TechListic.selectcontinentdropdown(this.TechListdata.continentdropdown);
        // TechListic.selectmultiplecommands(this.TechListdata.multiplecommands);
        // TechListic.selectcommanddropdown(this.TechListdata.commanddropdown);
        // TechListic.clickOnimage();
        
       
    })
});