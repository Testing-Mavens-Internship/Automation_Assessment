import Common from "./common.js";
import data from "../../testData/data.json" assert{type:"json"}


class AddRequestPage extends Common{
    constructor(){
        super()
        this.$$searchFilterLabels=()=>$$(`//div[@class="add-request-search-filters"]//child::div[contains(@class,"search-education-title")]//child::span`)
        this.$organization=()=>$(`//label[text()="Select Education Organization"]`)
        this.$category=()=>$(`//span[text()="Category"]/..//following-sibling::div`)
        this.$futureCheckbox=()=>$(`//div[@class="rz-radiobutton-box"]`)
        this.$$organizationList=()=>$$(`//label[text()="Select Education Organization"]//ancestor::div//following::div[contains(@class,"popup")]//div//ul//li//span`)
        this.$selectedOrganization=()=>$(`//div//ul//li[@aria-label="Willcox Unified District"]`)
        this.$organizationCardsSection=()=>$(`//div[@class="add-request-new-data"]`)
        this.$$selectedOrganizationDetails=()=>$$(`//div[@class="add-request-new-data"]//div[@class="card-details"]//div//a//p`)
        this.$$categoryList=()=>$$(`//span[text()="Category"]//ancestor::div//following::div[contains(@id,"popup")][5]//div//ul//li//span`)
        this.$selectedCategory=()=>$(`//div//ul//li[@aria-label="Charter Authorizer"]`)
        this.$activeYellow=()=>$(`//div[@class="add-request-card progress-active-sections"]`)
        this.$calendarIcon=()=>$(`//span[@class="rz-calendar rz-calendar-w-btn"]`)
        this.$calendar=()=>$(`//div[@class="rz-datepicker-group"]`)
        this.$pickDate=(date)=>$(`//td[not(contains(@class, 'rz-datepicker-other-month'))]//span[not(contains(@class, 'rz-state-disabled')) and text()="${date}"]`)
        this.$inputSelector=()=>$(`#DatePickerDateOnlyType`)
        this.$organizationCategories=()=>$(`//p[text()="Organization Categories"]/../..`)
        this.$relationshipOption=()=>$(`//p[text()="Relationships"]/../..`)
        this.$addRelationshipButton=()=>$(`//span[normalize-space()="Add Relationship"]/..`)
        this.$$warningMessages=()=>$$(`//div[contains(@class,"rz-messages-error")]`)
        this.$relationshipTypeInput=()=>$(`(//div[@class="relationships-form-select"]//child::div)[1]`)
        this.$authorizesOption=()=>$(`//div//ul//li//span[text()="Authorizes"]`)
        this.$loader=()=>$(`//div[@class="loader-home form-loading custom-loading"]//div[@class="lds-spinner"]`)
        this.$organizationNameInput=()=>$(`(//div[@class="relationships-form-select"]//child::div)[4]`)
        this.$selectedOrganizationName=()=>$(`//div//ul//li[@aria-label="Arizonans For Children - East Valley Cen"]`)
        this.$reasonForChange=()=>$(`(//textarea[@name="ReasonForChange"])[1]`)
        this.$uploadIcon=()=>$(`(//label[@for="docsUpload"])[1]`)
        this.$inputFile=()=>$(`(//div[contains(@class,"upload-file-sec")]//following::input[@id="docsUpload"])[1]`)
        this.$alertPopupMessage=()=>$(`(//div[@class="rz-dialog-content"]//p[@class="rz-dialog-alert-message"])[1]`)
        this.$alertOkButton=()=>$(`(//div[@class="rz-dialog-alert-buttons"]//button)[1]`)
        this.$saveButton=()=>$(`//span[text()="Save"]/..`)
    }

    /**
     * method to validate labels in add request page
     * @returns array
     */
    async validateSearchFilterLabels(){
        let filterLabels = await this.validateDropdownList(this.$$searchFilterLabels())
        return filterLabels
    }

    /**
     * method to click on select education organization input field and validate the dropdown list items
     * @returns array
     */
    async clickOrganization(){
        await this.clickButton(this.$organization())
        let list = await this.validateDropdownList(this.$$organizationList())
        return list
    }

    /**
     * method to select Willcox Unified District option and validate the card details
     * @returns  array
     */
    async selectOrganization(){
        await this.clickButton(this.$selectedOrganization())
        await this.$organizationCardsSection().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Cards section is still not displayed"})
        let list = await this.validateDropdownList(this.$$selectedOrganizationDetails())
        return list 
    }

    /**
     * method to click on select category and validate the dropdown list items
     * @returns array
     */
    async clickCategory(){
        await this.clickButton(this.$category())
        let list = await this.validateDropdownList(this.$$categoryList())
        return list
    }

    /**
     * method to select Charter authorizer and validate cards
     * @returns array
     */
    async selectCategory(){
        await this.clickButton(this.$selectedCategory())
        await this.$organizationCardsSection().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Cards section is still not displayed"})
        let list = await this.validateDropdownList(this.$$selectedOrganizationDetails())
        return list 
    }

    /**
     * method to select future option
     */
    async selectFuture(){
        await this.clickButton(this.$futureCheckbox())
        await this.$calendarIcon().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Calendar still not displayed"})
    }

    /**
     * method to click on calendar
     */
    async clickCalendar(){
        await this.clickButton(this.$calendarIcon())
    }

    /***
     * method to select a date from the calendar
     */
    async selectDate(date){
        await this.clickButton(await this.$pickDate(date))
        let day = await this.$inputSelector().getValue();
        return day
    }

    /**
     * method to click on organization categories
     */
    async clickOrganizationCategories(){
        await this.clickButton(this.$organizationCategories())
    }

    /**
     * method to click on relationship 
     */
    async clickRelationshipOption(){
        await this.clickButton(this.$relationshipOption())
    }

    /**
     * method to click on add relationship button
     * @returns array
     */
    async clickAddRelationshipButton(){
        await this.clickButton(this.$addRelationshipButton())
        let warnings = await this.validateDropdownList(this.$$warningMessages())
        return warnings
    }
    /**
     * method to click on relationship type input field
     */
    async clickRelationshipTypeInput(){
        await this.clickButton(this.$relationshipTypeInput())
        await this.$authorizesOption().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Option still not displayed"})
    }

    /**
     * method to select the authorizes option
     */
    async selectAuthorizes(){
        await this.clickButton(this.$authorizesOption())
    }

    /**
     * method to click on organization name input field
     */
    async clickOrganizationNameInput(){
        await this.clickButton(this.$organizationNameInput())
        await this.$selectedOrganizationName().waitForDisplayed({timeout:data.timeout,timeoutMsg:"option still  not displayed"})
    }

    /**
     * method to select organization name
     */
    async selectOrganizationName(){
        await this.clickButton(this.$selectedOrganizationName())
        await this.$reasonForChange().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Textarea still not displayed"})
    }

    /**
     * method to enter reason for change
     * @param {string} data 
     */
    async enterReasonForChange(data){
        await this.$reasonForChange().setValue(data)
        await this.$uploadIcon().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Upload icon still not displayed"})
    }

    /**
     * method to click on upload icon
     */
    async clickUploadIcon(){
        await this.clickButton(this.$uploadIcon())
    }
    /**
     * method to upload file
     */
    async fileUpload(){
        let file ="D:/Automation_EdWise/Automation_Assessment/testData/test.csv"
        let  filePath=await browser.uploadFile(file)
        await this.$inputFile().setValue(filePath)
    }

    /**
     * method to click on OK button
     */
    async clickAlertOkButton(){
        await this.clickButton(this.$alertOkButton())
        await this.$uploadIcon().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Icon still not displayed"})
    }
}
export default new AddRequestPage()