import BasePage from "./BasePage";

class AdminPage extends BasePage{

    get AdminBtn(){ return cy.get('#menu_admin_viewAdminModule')    }
    get AdminUserNameTxt(){ return cy.get('#searchSystemUser_userName')    }
    get UserRole(){ return cy.get('#searchSystemUser_userType')    }
    get EmployeeName(){ return cy.get('input[name="searchSystemUser[employeeName][empName]"]')    }
    get Status(){ return cy.get('#searchSystemUser_status')    }

    get StatusOne(){ return cy.xpath('//ul[@class="todo-list"]//li')    }
    
    clickOnAdminBtn(){
        this.AdminBtn.click();
    }

    enterAdminUserNameTxt(StrAdminUserName){
        this.AdminUserNameTxt.clear().type(StrAdminUserName);
    }

    SelectUserRole(struserrole){
        this.UserRole.select(struserrole,{force:true});
    }

    enterEmployeeName(StrEmployeename){
        this.EmployeeName.clear().type(StrEmployeename);
    }

    SelectStatus(strstatus){
        this.Status.select(strstatus,{force:true});
    }
   
}

module.exports= new AdminPage();