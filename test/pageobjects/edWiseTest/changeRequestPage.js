import commonPage from "./commonPage.js";
import testData from "../../testData/edWiseData.json"assert{type:'json'}

class ChangeRequestPage extends commonPage {
    constructor(){
        super();
        this.$usernameHeader=()=>$(`//label[@class="rz-label header-profilename"]`)
        this.$addRequestButton=()=>$(`//ul[@class="rz-panel-menu"]//span[text()="Add Request"]/ancestor::li`)
        this.$dropDownsChangeRequest = (dropDown) => $(`//span[text()="${dropDown}"]/parent::div/following-sibling::div`);
        this.$dropDownElementSelect = (element) => $(`//div[@class="rz-dropdown-panel rz-popup"]//ul/li//span[text()="${element}"]`);
        this.$$homeScreenBoxes=()=>$$(`//div[@class="card-details"]//div`)
        this.$futureButton=()=>$(`//label[text()="Future"]/ancestor::div[@class="rz-radio-btn"]/div`)
        this.$calendarButton=()=>$(`//span//input[@class="rz-inputtext  rz-readonly"]`)
        this.$calendarMonth=()=>$(`(//div[@class="rz-datepicker-title"]//div[@class="rz-dropdown"])[1]`)
        this.$calenderYear=()=>$(`(//div[@class="rz-datepicker-title"]//div[@class="rz-dropdown"])[2]`)
        this.$calenderElement=(date)=>$(`//div[@class="rz-dropdown-items-wrapper"]//ul//span[text()="${date}"]/..`)
        this.$daySelector=(day)=>$(`//table[@class="rz-datepicker-calendar"]//span[text()="${day}"]/..`)
        this.$selectMenuBox=(boxName)=>$(`//div[@class="card-details"]/div//p[text()="${boxName}"]/parent::a/parent::div`)
        this.$schoolName=()=>$(`//span[@class="add-request-organization-name"]`)
        this.$categoryName=()=>$(`//div[@class="add-request-organization-section-category-name"]//span`)
        this.$formBoxName=()=>$(`(//span[@class="sub-organizationCategoryDetails-form"])[1]`)
        this.$formCategory=()=>$(`(//span[@class="sub-organizationCategoryDetails-form"])[2]`)
        this.$formSchoolName=()=>$(`(//div[@class="cr-header-university"])[1]`)
        this.$formFields=(number)=>$(`(//div[@class="rz-dropdown valid w-100"])[${number}]`)
        this.$formValues=(value)=>$(`(//li[@class="rz-dropdown-item "]//span[text()="${value}"])[2]`)
        this.$checkBox=(grade)=>$(`(//label[text()="${grade}"]//ancestor::div[@class="rz-checkbox grade-checkbox-label"]/div)[1]`)

    }
/**
 * Here we are clicking the add request Button
 */
    async clickAddRequest(){
        await this.$addRequestButton().click();
        await this.$changeRequestPageHeader().waitForDisplayed({ timeout: testData.timeout, timeoutMsg: "Element is not visible" });

    }
/**
 * Here we are selecting the dropdown and selecting the value 
 * @param {string} dropDown 
 * @param {string} element 
 * @returns array
 */
    async selectDropDown(dropDown, element) {
        await this.$dropDownsChangeRequest(dropDown).click();
        await this.$dropDownElementSelect(element).click();
        let boxName=await this.$dropDownsChangeRequest(dropDown).getText();
        let boxCount=await this.$$homeScreenBoxes().length;
        return [boxName,boxCount];

    }
    /**
     * Here clicking on the future button of calander
     */

    async clickFuture() {
        await this.$futureButton().click();
        let calendarBox = await this.$calendarButton();
        await calendarBox.waitForEnabled({ timeout: 5000, timeoutMsg: 'Calendar box is not enabled within 5 seconds' });
    }
/**
 * 
 * @param {string} month 
 * @param {string} year 
 * @param {string} day 
 */
    async selectDate(month,year,day){
        await this.$calendarButton().click();
        await this.$calendarMonth().click();
        await this.$calenderElement(month).click();
        await this.$calenderYear().click();
        await this.$calenderElement(year).click();
        await this.$daySelector(day).click()
        
    }
/**
 * Here we are selecting the menu box
 * @param {string} boxName 
 */

    async clickMenuBox(boxName){
        await this.$selectMenuBox(boxName).click();
        await this.$formBoxName().waitForDisplayed({ timeout: testData.timeout, timeoutMsg: "Element is not visible" });
    }
/**
 * Here we are filling the form
 * @param {array} data 
 */
    async fillForm(data){
        let formData=data;
        for(let formNumber=1;formNumber<=6;formNumber++){
            await this.$formFields(formNumber).click()
            let currentValue= formData[formNumber-1];
            await this.$formValues(currentValue)

        }
    }
    /**
     * here we are clicking the checkboxes
     * @param {array} grade 
     */
    async selectCheckBox(grade){
        
        for(let grades of grade){
            await this.$checkBox(grades).click()
        }
    }
}
export default new ChangeRequestPage()