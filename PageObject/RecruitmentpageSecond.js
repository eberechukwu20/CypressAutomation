import BasePage from "./BasePage";

class RecruitmentpageSecond extends BasePage{

    get RecruitmentBtn(){ return cy.get('#menu_recruitment_viewRecruitmentModule')    }
    get candidateNameTxt(){ return cy.get('#candidateSearch_candidateName')     }
    get vacancy(){ return cy.get('#candidateSearch_jobVacancy')    }
    get status(){ return cy.get('#candidateSearch_status')     }
    get hiringManager(){ return cy.get('select[name="candidateSearch[hiringManager]"]')     }
    get dateofApplication(){ return cy.get('#candidateSearch_fromDate')     }
    get Search(){ return cy.get('#btnSrch')     }

    get fromDatepicker(){ return cy.get('input[name="candidateSearch[dateApplication][from]"]')     }
    get fromMonth(){ return cy.get('select[class="ui-datepicker-month"]')     }
    get fromYear(){ return cy.get('select[class="ui-datepicker-year"]')     }
    get fromdateselect(){ return cy.get('table tbody tr:nth-child(2) td:nth-child(4) > a.ui-state-default')     }


    clickOnfromDatepicker(){
        this.fromDatepicker.click();
    }

    clickOnfromdateselect(){
        this.fromdateselect.click();
    }

    SelectfromMonth(strfromMonth){
        this.fromMonth.select(strfromMonth,{force:true});
    }

    SelectfromYear(strfromYear){
        this.fromYear.select(strfromYear,{force:true});
    }

    clickOnRecruitmentBtn(){
        this.RecruitmentBtn.click();
    }

    entercandidateNameTxt(StrcandidateName){
        this.candidateNameTxt.clear().type(StrcandidateName);
    }

    Selectvacancy(strvacancy){
        this.vacancy.select(strvacancy,{force:true});
    }

    Selectstatus(Strstatus){
        this.status.select(Strstatus,{force:true});
    }

    enterhiringManager(StrhiringManager){
        this.hiringManager.select(StrhiringManager,{force:true});
    }

    SelectdateofApplication(StrDateofApplication){
        this.dateofApplication.select(StrdateofApplication,{force:true});
    }

    SelectSearch(){
        this.Search.click();

    }
   
}

module.exports= new RecruitmentpageSecond();