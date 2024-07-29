import Common from "./common.js";
import data from "../../testData/data.json" assert{type:"json"}

class AddRequestPage extends Common{
    constructor(){
        super()
        this.$changeRequestHeader=()=>$(`//span[text()="Change Requests"]`)
        this.$selectDropdown=(text)=>$(`//label[text()="${text}"]/..`)
        this.$dropdownOption=(label)=>$(`//div//ul//li[@aria-label="${label}"]`)
        this.$organizationNameHeader=()=>$(`//div[@class="add-request-organization-section"]//span[text()="Willcox Unified District"]`)
        this.$categoryHeader=()=>$(`//span[@class="add-request-organization-id" and text()="School"]`)
        this.$futureCheckbox=()=>$(`//div[@class="rz-radiobutton-box"]`)
        this.$datePicker=()=>$(`//span[@class="rz-calendar rz-calendar-w-btn"]`)
        this.$calendar=()=>$(`//div[@class="rz-datepicker-group"]`)
        this.$monthSelector=()=>$(`//div[@class="rz-datepicker-title"]//div`)
        this.$month=()=>$(`//div//ul//li[@aria-label="August"]`)
        this.$yearSelector=()=>$(`(//div[@class="rz-datepicker-title"]//child::div)[4]`)
        this.$year=()=>$(`//div//ul//li[@aria-label="2025"]`)
        this.$day=()=>$(`//td//span[text()="25"]`)
        this.$organizationCategories=()=>$(`//div[@class="add-request-new-data"]//p[text()="Organization Categories"]`)
    }

    /**
     * method to click on select education organization dropdown
     */
    async clickEducationOrganization(){
        await this.clickButton(await this.$selectDropdown("Select Education Organization"))
        await this.$dropdownOption("Willcox Unified District").waitForDisplayed({timeout:data.timeout,timeoutMsg:"Option still not displayed"})
    }

    /**
     * method to select the option "Willcox Unified District"
     */
    async selectOrganization(){
        await this.clickButton(await this.$dropdownOption("Willcox Unified District"))
        await this.$selectDropdown("School").waitForDisplayed({timeout:data.timeout,timeoutMsg:"Option still not displayed"})
    }

    /**
     * method to click on select category
     */
    async clickCategory(){
        await this.clickButton(await this.$selectDropdown("School"))
        await this.$dropdownOption("School").waitForDisplayed({timeout:data.timeout,timeoutMsg:"Option still not displayed"})
    }

    /**
     * method to select the option "School"
     */
    async selectCategoryOption(){
        await this.clickButton(await this.$dropdownOption("School"))
        await this.$categoryHeader().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Category header still not displayed"})
    }

    /**
     * method to click on the checkbox
     */
    async clickFutureCheckbox(){
        await this.clickButton(this.$futureCheckbox())
        await this.$datePicker().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Date input field still not enabled to click"})
    }

    /**
     * method to click on the date input field
     */
    async clickDate(){
        await this.clickButton(this.$datePicker())
        await this.$calendar().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Calendar still not displayed"})
    }

    /**
     * method to select the date
     */
    async selectDate(){
        await this.clickButton(this.$monthSelector())
        await this.clickButton(this.$month())
        await this.clickButton(this.$yearSelector())
        await this.clickButton(this.$year())
        await this.clickButton(this.$day())
        await this.$organizationCategories().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Card still not displayed"})
    }
}
export default new AddRequestPage()