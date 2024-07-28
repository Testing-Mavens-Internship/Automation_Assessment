
import dataSheet from "../../testData/edWiseData.json" assert { type: 'json' };
import CommonPage from "./commonPage.js";

class ChangeRequest extends CommonPage {
    constructor() {
        super();
        this.$addRequestButton = () => $(`//button[@class="add-request-button"]`);
        this.$addRequestHeader = () => $(`//div[@class="add-request-search-filters"]//span[text()="Education Organization"]`);
        this.$$dropBoxHeader = () => $$(`//div[@class="rz-card rz-variant-text"]//div[contains(@class, "search")]//div[contains(@class, "title") and contains(@class, "search")]//span`);
        this.$dropDownsChangeRequest = (dropDown) => $(`//span[text()="${dropDown}"]/parent::div/following-sibling::div`);
        this.$dropDownElementSelect = (element) => $(`//div[@class="rz-dropdown-panel rz-popup"]//ul/li//span[text()="${element}"]`);
        this.$$homeScreenBoxes=()=>$$(`//div[@class="card-details"]//div`)
        this.$futureButton=()=>$(`//label[text()="Future"]/ancestor::div[@class="rz-radio-btn"]/div`)
        this.$calendarButton=()=>$(`//span//input[@class="rz-inputtext  rz-readonly"]`)
        this.$calenderDates=(day)=>$(`//span[text()="${day}"]/parent::td`)
        this.$menuBoxes=(boxName)=>$(`//p[text()="${boxName}"]/ancestor::div[contains(@class,"request-card")]`)
        this.$sectionHeader=()=>$(`//p[normalize-space()="Section"]/following-sibling::p`)
        this.$closeButton=()=>$(`(//button[contains(@class,"close")])[1]`)
        this.$changeReqPageHeader=()=>$(`//SPAN[text()="Change Requests"]`)
        this.$addRelationshipButton=()=>$(`(//span[normalize-space()="Add Relationship"]/parent::button)[1]`)
        this.$$errorMessages=()=>$$(`//div[@class="rz-message rz-messages-error"]`)
        this.$relationshipTypeDropDown=()=>$('(//div[@class="relationships-form-select"]/div)[1]')
        this.$organizationNameDropDown=()=>$('(//div[@class="relationships-form-select"]/div)[2]')
        this.$authorizeElement=()=>$(`//div//ul//li//span[text()="Authorizes"]/parent::li`)
        this.$arizonaElement=()=>$(`//div//ul//li[@aria-label="Arizonans For Children - East Valley Cen"]/parent::li`)
        this.$reasonForChange=()=>$(`(//div//textarea[@name="ReasonForChange"])[1]`)
        this.$uploadButton=()=>$(`(//label[@for="docsUpload"]//*[local-name()="img"])[1]`)

}
/**
 * This method is used to click add request
 */
    async addRequest() {
        await this.$addRequestButton().click();
        await this.$addRequestHeader().waitForDisplayed({ timeout: dataSheet.timeout, timeoutMsg: "Element is not visible" });
    }
/**
 * This method is used to select the dropdown and select the element
 * @param {string} dropDown 
 * @param {string} element 
 * @returns {[boxName,boxCount]}
 */
    async selectDropDown(dropDown, element) {
        await this.$dropDownsChangeRequest(dropDown).click();
        await this.$dropDownElementSelect(element).click();
        let boxName=await this.$dropDownsChangeRequest(dropDown).getText();
        let boxCount=await this.$$homeScreenBoxes().length;
        return [boxName,boxCount];

    }
/**
 * This method is used to click on the future button
 */

    async clickFuture() {
        await this.$futureButton().click();
        let calendarBox = await this.$calendarButton();
        await calendarBox.waitForEnabled({ timeout: 5000, timeoutMsg: 'Calendar box is not enabled within 5 seconds' });
    }
    /**
     * This method is used to select the date
     * @returns {[day]}
     */

    async selectDate() {
        await this.$calendarButton().click();
        let previousDays = [];
        let dateFunction = new Date();
        let currentDay = dateFunction.getDate();
    
        for (let day = 1; day < currentDay; day++) {
            previousDays.push(day);
        }
    
        console.log(previousDays);
        await this.$calenderDates(currentDay + 1).click();
        await this.$loadSpinner().waitForDisplayed({ timeout: 50000, reverse: true, timeoutMsg: "Spinner did not disappear in time" });
    
        return previousDays;
    }
    /**
     * This method is used to click on the menu boxes
     * @param {string} boxName 
     */

    async clickMenuBoxes(boxName){
        await this.$menuBoxes(boxName).click();
        await browser.pause(2500);
        // await this.$sectionHeader().waitForDisplayed({ timeout: dataSheet.timeout, timeoutMsg: "Element is not visible" });
    }
/**
 * This method is used to click on the close button
 */
    async clickCloseButton(){
        await this.$closeButton().click();
        // await this.$changeRequestHeader().waitForDisplayed({ timeout: dataSheet.timeout, timeoutMsg: "Element is not visible" });
    }
/**
 * This method is used to click on the add relationship button
 */
    async clickAddRelationship(){
        await this.$addRelationshipButton().click();
        for(let error in this.$$errorMessages()){
            await this.$$errorMessages()[error].waitForDisplayed({timeout:dataSheet.timeout,timeoutMsg:"Element is not visible"});
        }
    }

    async selectRelationshipDropdowns(dropDown,value){
        await dropDown.click();
        await value.click();
    }

    async reasonToChangeText(reason){
        await this.$reasonForChange().setValue(reason);
    }
    async uploadFile(){
        const filePath='test/testData/new.pdf'
        const remoteFilePath= await browser.uploadFile(filePath)
        await this.$uploadButton().setValue( remoteFilePath)
    }

    
}

export default new ChangeRequest();
