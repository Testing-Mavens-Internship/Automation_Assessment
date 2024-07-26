import Common from "./common.js";
import time from "../../testData/timeout.json" assert{type:"json"}
class ChangeRequest extends Common{
    constructor(){
        super();
        this.$addRequestInPanel=()=>$(`//a[@href="/AddRequest"]`);
        this.$approvalInPanel=()=>$(`//a[@href="/ApproverSummary"]`);
        this.$addRequestButton=()=>$(`//span[@class="add-request-title"]`);
        this.$educationHeader=()=>$(`//span[contains(text(),"Organization")]`);
        this.$categoryHeader=()=>$(`//span[contains(text(),"Category")]`);
        this.$dateHeader=()=>$(`//span[contains(text(),"Date")]`);
        this.$selectingCategoryDropdown=()=>$(`//span[contains(text(),"Category")]/../following-sibling::div//label`);
        this.$selectingEducationDropdown=()=>$(`//span[contains(text(),"Education")]/../following-sibling::div//label`);
        this.$selectingFromDropdown=(institution)=>$(`//li[@aria-label="${institution}"]`);
        this.$futureButton=()=>$(`//div[@class="rz-radio-btn"]/following-sibling::div`);
        this.$dateButton=()=>$(`//button[contains(@class,"rz-datepicker-trigger rz-calendar-button")]`);
        this.$monthTab=()=>$(`(//div[@class="rz-datepicker-title"]//label[contains(@class,"rz-dropdown-label rz-inputtext ")])[1]`);
        this.$month=(month)=>$(`//li[@aria-label="${month}"]`);
        this.$yearTab=()=>$(`(//div[@class="rz-datepicker-title"]//label[contains(@class,"rz-dropdown-label rz-inputtext ")])[2]`);
        this.$year=()=>$(`(//div[@class="rz-datepicker-title"]//label[contains(@class,"rz-dropdown-label rz-inputtext ")])[2]`);
        this.$day=(day)=>$(`//span[contains(text(),"${day}")]`);
        this.$icons=(name)=>$(`//p[text()="${name}"]`);
        this.$educationHeader=()=>$(`(//span[text()="Douglas Unified District"])[1]`);
        this.$closeButton=()=>$(`(//span[text()=" Close"])[1]`);
    }

    /**
     * This function is for clicking the add request Button and waiting for the page to get load.
     */
    async addingRequest(){
        await this.$addRequestButton().click();
        await this.$educationHeader().waitForDisplayed({timeout:time.med,timeoutMsg:"Field for selecting education is not yet displayed."});
        await this.$categoryHeader().waitForDisplayed({timeout:time.med,timeoutMsg:"Field for selecting category is not yet displayed."});
        await this.$dateHeader().waitForDisplayed({timeout:time.med,timeoutMsg:"Field for selecting date is not yet displayed."});
    }

    /**
     * This function is for selecting the educational institution.
     * @param {string} education 
     */
    async selectingInstitution(education){
        await this.$selectingEducationDropdown().click();
        await this.$selectingEducation(education).click();
    }

    /**
     * This function is for selecting the category.
     * @param {string} category 
     */
    async selectingCategory(category){
        await this.$selectingEducationDropdown().click();
        await this.$selectingEducation(category).click();
    }

    /**
     * This function is for selecting the date.
     */
    async selectingDate(date,month,year){
        await this.$futureButton().click();
        await this.$monthTab().click();
        let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
        let selectingMonth=months[month-1];
        await this.$month(selectingMonth).click();
        await this.$yearTab().click();
        await this.$year(year);
        await this.$date(date).click();
    }
    async clickingOnOrganizationCategoryIcon(name){
        await this.$icons(name).click();
    }
}
export default new ChangeRequest();