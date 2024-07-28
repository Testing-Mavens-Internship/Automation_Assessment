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
        this.$selectingDropdown=(name)=>$(`//span[contains(text(),"${name}")]/../following-sibling::div//label`);
        this.$selectingFromDropdown=(institution)=>$(`//li[@aria-label="${institution}"]`);
        this.$institutionName=()=>$(`//span[@class="add-request-organization-name"]`);
        this.$futureButton=()=>$(`//div[@class="rz-radio-btn"]/following-sibling::div`);
        this.$dateButton=()=>$(`//button[contains(@class,"rz-datepicker-trigger rz-calendar-button")]/..`);
        this.$monthTab=()=>$(`//li[@aria-label="July"]//ancestor::div[@class="rz-dropdown"]`);
        this.$month=(month)=>$(`//li[@aria-label="${month}"]`);
        this.$yearTab=()=>$(`(//div[@class="rz-datepicker-title"]//label[contains(@class,"rz-dropdown-label rz-inputtext ")])[2]`);
        this.$year=()=>$(`(//div[@class="rz-datepicker-title"]//label[contains(@class,"rz-dropdown-label rz-inputtext ")])[2]`);
        this.$day=(day)=>$(`//span[contains(text(),"${day}")]`);
        this.$icons=(name)=>$(`//p[text()="${name}"]`);
        this.$educationHeader=()=>$(`//div[@class="search-education-title"]/span[contains(text(),"Education")]`);
        this.$closeButton=()=>$(`//div[@class="rz-card rz-variant-text"]/following-sibling::div[@class="approval-button-actions"]//span[normalize-space()="Close"]`);
        this.$calendarButton=()=>$(`//span//input[@class="rz-inputtext  rz-readonly"]`);
        this.$calenderDates=(day)=>$(`//span[text()="${day}"]/parent::td`);
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
        await this.$selectingDropdown("Education").click();
        await this.$selectingFromDropdown(education).click();
        await this.$institutionName().waitForDisplayed({timeout:time.med,timeoutMsg:"Institution name is not displayed."})
    }

    /**
     * This function is for selecting the category.
     * @param {string} category 
     */
    async selectingCategory(category){
        await this.$selectingDropdown("Category").click();
        await this.$selectingFromDropdown(category).click();
    }


    /**
     * This function is for selecting the date.
     */
    async selectDate() {
        await this.$futureButton().click()
        await this.$calendarButton().click();
        let previousDays = [];
        let dateFunction = new Date();
        let currentDay = dateFunction.getDate();
   
        for (let day = 1; day < currentDay; day++) {
            previousDays.push(day);
        }
   
        console.log(previousDays);
        await this.$calenderDates(currentDay + 1).click();
   
        return previousDays;
    }
 
    async clickingOnOrganizationCategoryIcon(name){
        await this.$icons(name).click();
    }
    async closing(){
        await this.$closeButton().scrollIntoView();
        await this.$closeButton().click();

    }

 
}
export default new ChangeRequest();