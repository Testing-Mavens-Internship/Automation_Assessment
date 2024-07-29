import CommonPage from "./common.js";

class AddRequest extends CommonPage{
    constructor(){
        super();
        this.$pageHeader=()=>$('//a[@class="add-request-cursor-pointer"]')
        this.$selectFields = (name) => $(`//label[text()="${name}"]/following-sibling::div[@class="rz-dropdown-trigger  rz-corner-right"]`);
        this.$organisation=()=>$('//li[@aria-label="Cochise Elementary District"]');
        this.$category=()=>$('//li[@aria-label="School"]');
        this.$organisationHeading=()=>$('//span[@class="add-request-organization-name"]');
        this.$categoryHeading=()=>$('//div[@class="add-request-organization-section-category-name"]/span');
        this.$future=()=>$('//div[@class="rz-radiobutton-box"]');
        this.$calender=()=>$('//button[@class="rz-datepicker-trigger rz-calendar-button rz-button rz-button-icon-only"]');
        this.$yearField=()=>$('//label[@class="rz-dropdown-label rz-inputtext "][text()="2024"]');
        this.$year=(year)=>$(`//li[@aria-label="${year}}"]`)
        this.$monthField=()=>$('//label[@class="rz-dropdown-label rz-inputtext "][text()="July"]');
        this.$month=(month)=>$(`//li[@aria-label="${month}"]`);
        this.$day=()=>$('//span[text()="25"]');
        this.$organisationCategory=()=>$('//p[text()="Organization Categories"]');
        this.$organisationCategoryHeading=()=>$('(//span[@class="sub-organizationCategoryDetails-form"])[1]');
        this.$spinner=()=>$('//div[@class="lds-spinner"]');

        this.$detailsField=(field)=>$(`(//label[text()="${field}"]/following-sibling::div)[1]`);
        this.$futureStatus=()=>$(`(//li[@aria-label="Future"])[last()]`)


        
    }

    
    /**
     * Select Cochise elementary district organisation and school as category
     */
    
    async selectOrganisation(){
        await this.clickButton(this.$selectFields('Select Education Organization'));
        await this.$organisation().scrollIntoView();
        await this.$organisation().waitForDisplayed({timeout:10000,timeoutMsg:'organisation is not displayed'});
        await this.clickButton(this.$organisation());

        await this.clickButton(this.$selectFields('Select Category'));
        await this.$category().waitForDisplayed({timeout:10000,timeoutMsg:'organisation category is not displayed'});
        await this.$category().click();
    }
    /**
     * Select future date
     */
    async selectFutureDate(month){
        await this.clickButton(this.$future());
        await this.clickButton(this.$calender());
        await this.$monthField().waitForDisplayed({timeout:30000,timeoutMsg:'calender is not displayed'});
        await this.clickButton(this.$yearField());
        await this.clickButton(this.$year(2025));
        await this.clickButton(this.$monthField());
        await this.$month(month).scrollIntoView();
        await this.clickButton(this.$month());
        await this.clickButton(this.$day());

    }
    /**
     * Click on organisation category
     */
    async clickOrganisationCategory(){
        await this.clickButton(this.$organisationCategory());

    }
    /**
     * Method to fill the Fields
     */
    async fillDetails(){
        await this.clickButton(this.$detailsField('Operational Status'));
        await this.$futureStatus().waitForDisplayed({timeout:30000,timeoutMsg:"future status is not displayed"});
        await this.clickButton(this.$futureStatus())
    }

}
export default new AddRequest();
