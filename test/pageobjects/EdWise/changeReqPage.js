import CommonPage from "./commonPage.js";

class ChangeReqPage extends CommonPage {

    constructor()
    {
        super()
        this.$selectedUserName=()=> $('//label[text()="Sachin"]')
        this.$addReqOption=()=> $('//a[@href="/AddRequest"]')
        this.$approvalQueueOption=()=> $('//a[@href="/ApproverSummary"]')
        this.$roleValue=()=> $('(//li[@class="rz-dropdown-item " and @aria-label="LEA_Data_Admin"])[2]')
        this.$selectButton=()=> $('//button[@id="zZRNqgUhHk"]')
        this.$eduOrgText=()=> $('//span[text()="Education Organization"]')
        this.$categoryText=()=> $('//span[text()="Category"]')
        this.$effectiveDateText=()=> $('//span[text()="Effective Date"]')
        this.$eduOrgDropdown=()=> $('//label[text()="Select Education Organization"]')
        this.$categoryDropdown=()=> $('//label[text()="Select Category"]')
        this.$futureRadioButton=()=> $('//label[text()="Future"]')
        this.$calendar=()=> $('//input[@id="DatePickerDateOnlyType"]')
        this.$eduOrgOption=()=> $('//li[@aria-label="Alpine Elementary District"]')
        this.$categoryOption=()=> $('//li[@aria-label="Charter Authorizer"]')
    }

    /**
     * Click on "Add Request" option
     */
    async clickOnAddReq()
    {
        await this.$addReqOption().click()
    }

    /**
     * Click on Education Organization dropdown
     */
    async clickEduOrgDropdown()
    {
        await this.$eduOrgDropdown().click()
        await this.$eduOrgOption().waitForDisplayed({timeout : 5000})
    }

    /**
     * Select "Alpine Elementary District" option from Education Organization dropdown
     */
    async selectEduOrgOption()
    {
        await this.$eduOrgOption().click()
    }

    /**
     * Click on Category dropdown
     */
    async clickEduOrgDropdown()
    {
        await this.$categoryDropdown().click()
        await this.$categoryOption().waitForDisplayed({timeout : 5000})
    }

    /**
     * Select "Charter Authorizer" option from Category dropdown
     */
    async selectCategoryOption()
    {
        await this.$categoryOption().click()
    }

    /**
     * Select Effective Date as "future"
     */
    async clickFutureRadioButton()
    {
        await this.$futureRadioButton().click()
    }

    /**
     * Click on calender
     */
    async clickCalendar()
    {
        await this.$calendar().click()
    }


}

export default new ChangeReqPage()
