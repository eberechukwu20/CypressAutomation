import BasePage from "./BasePage";

class DirectoryPage extends BasePage{

    get DirectoryBtn(){ return cy.get('#menu_directory_viewDirectory')    }
    get NameTxt(){ return cy.get('input[name="searchDirectory[emp_name][empName]"]')    }
    get JobTitle(){ return cy.get('#searchDirectory_job_title')    }
    get Location(){ return cy.get('select[name="searchDirectory[location]"]')    }
    get Search(){ return cy.get('#searchBtn')    }

    clickOnDirectoryBtn(){
        this.DirectoryBtn.click();
    }

    enterNameTxt(StrName){
        this.NameTxt.clear().type(StrName);
    }

    SelectJobTitle(strJobTitle){
        this.JobTitle.select(strJobTitle,{force:true});
    }

    SelectLocation(StrLocation){
        this.Location.select(StrLocation,{force:true});
    }

    SelectSearch(){
        this.Search.click();

    }
   
}

module.exports= new DirectoryPage();