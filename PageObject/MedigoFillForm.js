import BasePage from "./BasePage";

class MedigoFillForm extends BasePage{

    get Name(){ return cy.get('#et_pb_contact_name_0')    }
    get Emailaddress(){ return cy.get('#et_pb_contact_email_0') }
    get Yourcompany(){ return cy.get('#et_pb_contact_company_0')    }
    get PhoneNumber(){ return cy.get('#et_pb_contact_phone_0')  }
    get Comment(){ return cy.get('#et_pb_contact_message_0')    }
    get Terms(){ return cy.get('#et_pb_contact_consent_5_0')    }

    enterName(StrName){
        this.Name.clear().type(StrName);
    }

    enterEmailaddress(StrEmailaddress){
        this.Emailaddress.clear().type(StrEmailaddress);
    }

    enterYourcompany(StrYourcompany){
        this.Yourcompany.clear().type(StrYourcompany);
    }

    enterPhoneNumber(StrPhoneNumber){
        this.PhoneNumber.clear().type(StrPhoneNumber);
    }

    typeComment(StrComment){
        this.Comment.clear().type(StrComment);
    }

    clickOnTerms(){
        this.Terms.click();

    
    }
}

module.exports= new MedigoFillForm();



