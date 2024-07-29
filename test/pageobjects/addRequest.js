import Common from "./common.js";
import wait from "../../testData/time.json"assert{type:"json"}
let minTimeout=wait.time.min;
let midTimeout=wait.time.mid;
let maxTimeout=wait.time.max 
class AddRequest extends Common{
    constructor(){
        super()
        this.$addRequestLink=()=>$(`//a[@href="/AddRequest"]`)
        this.$headerChange=()=>$(`//span[@class="back-change-requests"]`)
        this.$educationDropDown=()=>$(`//div[contains(@class,"add-request-")]//div/label[normalize-space()="Select Education Organization"]`)
        this.$educationOption=()=>$(`//li[@class="rz-dropdown-item "]/span[normalize-space()="Bowie Unified District"]`)
        this.$educationTextboxValue=()=>$(`//label[text()="Bowie Unified District"]`)
        this.$category=()=>$(`//div[@class="rz-dropdown"]//label[normalize-space()="Select Category"]`)
        this.$categoryOption=()=>$(`//li[@aria-label="School"]`)
        this.$categoryTextboxValue=()=>$(`//label[text()="School"]`)
        this.$futureDateCheckbox=()=>$(`//div[contains(@class,"add-request-")]//div/label[normalize-space()="Future"]`)
        this.$enabledCalender=()=>$(`//span[@class="rz-calendar rz-calendar-w-btn"]`)
        this.$calendar=()=>$(`//span[@class="rz-calendar rz-calendar-w-btn"]`)
        this.$datePicker=()=>$(`//div[@class="rz-datepicker rz-popup"]`)
        this.$monthDropdown=()=>$(`(//div[@class="rz-datepicker-group"]//following-sibling::div[@class="rz-datepicker-title"]/div)[1]`)
        this.$monthSelect=()=>$(`//div[@class="rz-dropdown-items-wrapper"]/ul/li/span[normalize-space()="August"]`)
        this.$yearDropdown=()=>$(`(//div[@class="rz-datepicker-group"]//following-sibling::div[@class="rz-datepicker-title"]/div)[last()]`)
        this.$yearSelect=()=>$(`//div[@class="rz-dropdown-items-wrapper"]/ul/li/span[normalize-space()="2025"]`)
        this.$date=()=>$(`//table[@class="rz-datepicker-calendar"]/thead/following::tbody/tr/td[normalize-space()="15"]`)
        this.$organizationCategorylink=()=>$(`//div[@class="add-request-navigation-icons"]//div[@class="add-request-card "]/a//p[normalize-space()="Organization Categories"]`)
        this.$organizationLoader=()=>$(`(//div[@class="lds-spinner"])[1]`)
        this.$finalDate=()=>$(`//input[@name="DatePickerDateOnlyType"]`)
       
    }

    /**
     * Method to click on Add request
     */
    async clickOnAddRequest(){
        await this.$addRequestLink().click();
    }
    /**
     * Method to select dropdown options from education organization
     */

    async selectingOptionFromEducationOrganizationDropDown(){
        await this.$educationDropDown().click()
        await this.$educationOption().click();
        await this.$educationTextboxValue().waitForDisplayed(({timeout:maxTimeout,timeoutMsg:"Name is still no displayed"}))
    }
    /**
     * Method to select dropdown options from select category
     */
    async selectingoptionFromCategoryDropdown(){
        await this.$category().click();
        await this.$categoryOption().click();
        await this.$categoryTextboxValue().waitForDisplayed(({timeout:maxTimeout,timeoutMsg:"School label is still no displayed"}))
    }
    /**
     * Method to select Effective date checkbox
     */
    async selectingEffectiveDateCheckbox(){
        await this.$futureDateCheckbox().click()
        await this.$enabledCalender().waitForDisplayed(({timeout:minTimeout,timeoutMsg:"Calender is still no Enabled"}))
    }
    /**
     * Method to click on calender
     */
    async clickingOnCalendar(){
        await this.$calendar().click();
    }
    /**
     * Method to select date
     */
    async selectingDate(){
        await this.$monthDropdown().click();
        await  this.$monthSelect().click();
         await  this.$yearDropdown().click();
         await this.$yearSelect().click();
         await this.$date().click()

        
    }
    /**
     * Method to click on organization category
     */
    async clickOnOrganizationCategory(){
        await this.$organizationCategorylink().click();
        await this.$organizationLoader().waitForDisplayed(({timeout:midTimeout,timeoutMsg:"Loadeer is still loading",reverse:true}))
    }
    
}
export default  new AddRequest()