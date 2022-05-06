import BasePage from "./BasePage";

class PimPage extends BasePage{

    get PimBtn(){ return cy.get('#menu_pim_viewPimModule')    }
    get idTxt(){ return cy.get('input[id="empsearch_id"]')    }
    get JobTitle(){ return cy.get('select[id="empsearch_job_title"]')    }
    get EmploymentStatus(){ return cy.get('select[id="empsearch_employee_status"]')    }
    get SubUnit(){ return cy.get('select[id="empsearch_sub_unit"]')    }
    get SupervisorName(){ return cy.get('input[id="empsearch_supervisor_name"]')   }
    get Search(){ return cy.get('input[id="searchBtn"]')   }

    clickOnPimBtn(){
        this.PimBtn.click();
    }

    enteridTxt(Strid){
        this.idTxt.clear().type(Strid);
    }

    SelectJobTitle(strJobTitle){
        this.JobTitle.select(strJobTitle,{force:true});
    }

    SelectEmploymentStatus(StrEmploymentStatus){
        this.EmploymentStatus.select(StrEmploymentStatus,{force:true});
    }

    SelectSubUnit(strSubUnit){
        this.SubUnit.select(strSubUnit,{force:true});
    }

    enterSupervisorName(strSupervisorName){
        this.SupervisorName.clear().type(strSupervisorName);
    }

    SelectSearch(){
        this.Search.click();

    }
   
}

module.exports= new PimPage();