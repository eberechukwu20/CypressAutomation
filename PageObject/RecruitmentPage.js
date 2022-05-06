import BasePage from "./BasePage";

class RecruitmentPage extends BasePage{

    get RecruitmentBtn(){ return cy.get('#menu_recruitment_viewRecruitmentModule')    }
    get CandidateNameTxt(){ return cy.get('#candidateSearch_candidateName')     }
    get Vacancy(){ return cy.get('#candidateSearch_jobVacancy')    }
    get Status(){ return cy.get('#candidateSearch_status')     }
    get HiringManager(){ return cy.get('select[name="candidateSearch[hiringManager]"]')     }
    get DateofApplication(){ return cy.get('#candidateSearch_fromDate')     }
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

    enterCandidateNameTxt(StrCandidateName){
        this.CandidateNameTxt.clear().type(StrCandidateName);
    }

    SelectVacancy(strVacancy){
        this.Vacancy.select(strVacancy,{force:true});
    }

    SelectStatus(StrStatus){
        this.Status.select(StrStatus,{force:true});
    }

    enterHiringManager(StrHiringManager){
        this.HiringManager.select(StrHiringManager,{force:true});
    }

    SelectDateofApplication(StrDateofApplication){
        this.DateofApplication.select(StrDateofApplication,{force:true});
    }

    SelectSearch(){
        this.Search.click();

    }
   
}

module.exports= new RecruitmentPage();