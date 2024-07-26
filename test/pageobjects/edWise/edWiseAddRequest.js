import Common from "./edWiseCommon.js";

class AddRequest extends Common
{
    constructor()
    {
        super()
        this.$addRequestPageHeader=(header)=>$(`//span[text()="${header}"]`)
        this.$changeRequestLabel=()=>$('//span[text()="Change Requests"]')
        this.$educationalOrganizationLabel=()=>$('(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder"])[1]')
        this.$educationOrganizationOption=()=>$('//li[@aria-label="San Simon Unified District"]')
        this.$$totalOrganizations=()=>$$('//div[@class="rz-dropdown-panel rz-popup"]/div/ul/li')
        this.$categoryLabel=()=>$('(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder"])[2]')
        this.$categoryOption=()=>$('//span[text()="Charter Authorizer"]')

    }

    /**
     * Click on add request button
     */
    async clickAddRequest()
    {
        await this.$addRequestLabel().click()
        await this.$changeRequestLabel().waitForDisplayed({timeout:5000,timeoutMsg:"Still not displayed"})
        
    }

    /**
     * Choose Educational Organization
     */
    async selectOrganization()
    {
        let count=0;
        await this.$educationalOrganizationLabel().click()
        await this.$educationOrganizationOption().waitForDisplayed({timeout:5000,timeoutMsg:"Header is still not displayed"})
        await this.$educationOrganizationOption().scrollIntoView()
        await this.$educationOrganizationOption().click()
        for(let i=1;i<=await this.$$totalOrganizations().length;i++)
        {
             count++
        }
        return count
    }

    /**
     * Choose category
     */
    async selectCategory()
    {
        await this.$categoryLabel().click()
        await this.$categoryOption().waitForDisplayed({timeout:7000,timeoutMsg:"Header still not displayed"})
        await this.$categoryOption().click()
    }

}
export default new AddRequest()