import Common from "./common.js";
import data from "../testData/timeout.json" assert{type:"json"};
class AddRequest extends Common{
      constructor(){
        super()
        this.$changeRequestHeader=()=>$(`//span[text()="Change Requests"]`)
        this.$organization=()=>$(`//label[text()="Select Education Organization"]`)
        this.$category=()=>$(`//span[text()="Category"]/..//following-sibling::div`)
        this.$ConchoElementaryDistrict=()=>$('//div[@class="add-request-organization-section"]/span[text()="Concho Elementary District"]')
        this.$futureCheckbox=()=>$(`//div[@class="rz-radiobutton-box"]`)
        this.$$organizationList=()=>$$(`//label[text()="Select Education Organization"]//ancestor::div//following::div[contains(@class,"popup")]//div//ul//li//span`)
        this.$selectedOrganization=()=>$('//div//ul//li[@aria-label="Concho Elementary District"]')
        this.$$selectedOrganizationDetails=()=>$$(`//div[@class="add-request-new-data"]//div[@class="card-details"]//div//a//p`)
        this.$$categoryList=()=>$$(`//span[text()="Category"]//ancestor::div//following::div[contains(@id,"popup")][5]//div//ul//li//span`)
        this.$selectedCategory=()=>$('//div//ul//li[@aria-label="School"]')
        this.$activeYellow=()=>$(`//div[@class="add-request-card progress-active-sections"]`)
        this.$calendarIcon=()=>$(`//span[@class="rz-calendar rz-calendar-w-btn"]`)
        this.$calendar=()=>$(`//div[@class="rz-datepicker-group"]`)
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
     * method to select Concho Elementary District option and validate the card details
     * @returns  array
     */
    async selectOrganization(){
        await this.clickButton(this.$selectedOrganization())
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

}
export default new AddRequest();