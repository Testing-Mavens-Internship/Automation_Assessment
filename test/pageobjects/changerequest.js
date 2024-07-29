import Common from "./common.js";

class ChangeRequest extends Common
{
    constructor()
    {
        super()
        this.$addRequest=()=>$(`//li[@id="hgUTgvx7uU"]/div/a`)
        this.$changeRequestHeader=()=>$(`//span[text()='Change Requests']`)
        this.$educationalOrganizationField=()=>$(`//div[@id="MSFX16TbyE"]`)
        this.$educationalOrganization=()=>$(`//div[@id="popup-MSFX16TbyE"]/div/ul/child::li[@aria-label="St David Unified District"]`)
        this.$categoryField=()=>$(`//div[@id="0Do9IFT-9k"]`)
        this.$category=()=>$(`//div[@id="popup-0Do9IFT-9k"]/div/ul/child::li[@aria-label="School"]`)
        this.$future=()=>$(`//div[@id="6JldYSmEGU"]/div[@id="A0zs5GtsJ0"]/div/child::div[@class="rz-radiobutton-box"]`)
        this.$calendar=()=>$(`//span[@class='rz-calendar rz-calendar-w-btn']/button`)
        this.$calendarBox=()=>$(`//table[@class="rz-datepicker-calendar"]`)
        this.$monthDropdown=()=>$(`//label[text()='July']/following-sibling::div/span`)
        this.$month=()=>$(`//li[@aria-label="August"]`)
        this.$yearDropDown=()=>$(`//label[text()='2024']/following-sibling::div/span`)
        this.$year=()=>$(`//li[@aria-label="2025"]`)
        this.$date=()=>$(`//table[@class="rz-datepicker-calendar"]/tbody/tr[3]/td/span[text()='15']`)
        this.$educationalOrganizationValidate=()=>$(`//div[@class="add-request-organization-section"]/span[text()='St David Unified District']`)
        this.$categoryValidate=()=>$(`//div[@class="add-request-organization-section-category-name"]/span[text()='School']`)
        this.$organizationCategory=()=>$(`//div[@class="add-request-new-data"]/div[@class="add-request-navigation-icons"]/div/div[4]`)
    }

    /**
     * Method to click on Add Request option
     */
    async clickAddRequest()
    {
        await this.$addRequest().click()
    }

    /**
     * Select Educational organization
     */
    async addRequestEducationalOrganization()
    {
        // Set 'St. David Unified District' as Educational Organization
        await this.$educationalOrganizationField().waitForClickable({timeout:8000,timeoutMsg:'Field not yet clickable'})
        await this.$educationalOrganizationField().click()
        await this.$educationalOrganization().scrollIntoView()
        await this.$educationalOrganization().click()

    }

    /**
     * Select Category
     */
    async addRequestCategory()
    {
        // Set 'School' as Category
        await this.$categoryField().waitForClickable({timeout:8000,timeoutMsg:'Field not yet clickable'})
        await this.$categoryField().click()
        await this.$category().scrollIntoView()
        await this.$category().click()
    }

    /**
     * Set Date as 15 August 2025
     */
    async addRequestDate()
    {
        await this.$future().click()
        await this.$calendar().click()
        await this.$calendarBox().waitForDisplayed({timeout:8000,timeoutMsg:'Calendar not yet displayed'})
        await this.$monthDropdown().click()
        await this.$month().scrollIntoView()
        await this.$month().click()
        await this.$yearDropdown().click()
        await this.$year().scrollIntoView()
        await this.$year().click()
        await this.$date().click()
    }

    /**
     * Select Organization categories 
     */
    async selectOrganizationCategory()
    {
        await this.$organizationCategory().waitForClickable({timeout:8000,timeoutMsg:'Organization Categories box not yet clickable'})
        await this.$organizationCategory().click()
    }
}
export default new ChangeRequest()