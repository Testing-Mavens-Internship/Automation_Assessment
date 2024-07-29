import Common from "./common.js";
import data from "../../testData/data.json" assert{type:"json"}
class ChangeRequest extends Common{
    constructor(){
        super();
        this.$addRequestButton=()=>$(`//button//span[normalize-space()="Add Request"]/..`);
        this.$fieldHeaders=(data)=>$(`//span[normalize-space()="${data}"]/..`);
        this.$fields=(data)=>$(`//span[normalize-space()="${data}"]/../following-sibling::div`);
        this.$fieldValue=(name)=>$(`//li//span[normalize-space()="${name}"]/..`);
        this.$date=(date)=>$(`//span[text()="${date}"]`);
        this.$futureButton=()=>$(`//span[normalize-space()="Effective Date"]/../following-sibling::div//label[text()="Future"]/..`);
        this.$calendarButton=()=>$(`//span[normalize-space()="Effective Date"]/../following-sibling::div//div[@class="add-input"]`);
        this.$yearTab=()=>$(`(//div[@class="rz-datepicker-title"]//label[@class="rz-dropdown-label rz-inputtext "]/..)[2]`);
        this.$monthTab=()=>$(`(//div[@class="rz-datepicker-title"]//label[@class="rz-dropdown-label rz-inputtext "]/..)[1]`);
        this.$dropdownValue=(value)=>$(`//li[@aria-label="${value}"]`);
        this.$organizationAndCategoryValidationLocator=(value)=>$(`//div[@class="add-request-navigation-data"]//span[text()="${value}"]`);
        this.$organizationCategoriesIcon=()=>$(`//p[text()="Organization Categories"]/../..`);
        this.$popUpHeaders=(value)=>$(`(//div[@class="rz-dialog-content"]//span[text()="${value}"]/..)[1]`);
        this.$popUpFields=(value)=>$(`(//label[text()="${value}"]/following-sibling::div)[1]`);
        this.$popUpFieldValues=(value)=>$(`(//span[text()="${value}"]/..)[2]`);
        this.$submitButton=()=>$(`(//button[@type="submit"])[1]`);
    }
     /**
     * This function is for clicking the Add Request button.
     */
    async clickingAddRequest(){
        await this.$addRequestButton().click();
    }
    /**
     * This function is for entering values to the fields.
     * @param {string} organisation 
     * @param {string} category 
     * @param {number} expectDate 
     */
    async enteringValuesToFields(organisation,category,expectDate){
        await this.$fields("Education Organization").click()
        await this.$fieldValue(organisation).click();
        await this.$fields("Category").click()
        await this.$fieldValue(category).click();
        await this.$futureButton().click();
        await this.$calendarButton().click();
        await this.$monthTab().click();
        let expectedDate=new Date(expectDate);
        console.log("date ",expectedDate)
        let expectedMonth=expectedDate.getMonth()+1;
        console.log("month ",expectedMonth)
        let date=expectedDate.getDate();
        let expectedYear=expectedDate.getFullYear();
        let month=data.months[expectedMonth];
        console.log("month:: ",month)
        await this.$dropdownValue(month).scrollIntoView();
        await this.$dropdownValue(month).click();
        await this.$yearTab().click();
        await this.$dropdownValue(expectedYear).scrollIntoView();
        await this.$dropdownValue(expectedYear).click();
        await this.$date(date).click();
    }
    /**
     * This function is for clicking the Organization categories Icon.
     */
    async clickingOrganizationCategoryIcon(){
        await this.$organizationCategoriesIcon().click();
    }
     /**
     * This function is for entering values.
     */
    async enteringValuesInBox(){
        let length=data.popupFields.length
        for(let i=0;i<length;i++){
            await this.$popUpFields(data.popupFields[i]).click();
            await this.$popUpFieldValues(data.popupValues[i]).click();
        }
        await this.$popUpFields("ReasonForChange").setValue("test");
        await this.$submitButton().click();
    }
}
export default new ChangeRequest();