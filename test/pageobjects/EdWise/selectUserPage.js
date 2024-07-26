import CommonPage from "./commonPage.js";

class SelectUserPage extends CommonPage {

    constructor()
    {
        super()
        this.$selectUserDropDown=()=> $('(//label[text()="Select User"])[1]')
        this.$selectRoleDropDown=()=> $('(//label[text()="Select Role"])[1]')
        this.$userValue=()=> $('(//li[@class="rz-dropdown-item " and @aria-label="Sachin"])[1]')
        this.$roleValue=()=> $('(//li[@class="rz-dropdown-item " and @aria-label="LEA_Data_Admin"])[2]')
        this.$selectButton=()=> $('//button[@id="zZRNqgUhHk"]')
    }

    /**
     * Select values from both dropdowns and click select
     */
    async selectValuesFromDropdowns()
    {
        await this.$selectUserDropDown().click()
        await this.$userValue().waitForDisplayed({timeout : 5000})
        await this.$userValue().click()
        await this.$selectRoleDropDown().click()
        await this.$roleValue().waitForDisplayed({timeout : 5000})
        await this.$roleValue().click()
        await this.$selectButton().click()
    }
}

export default new SelectUserPage()
