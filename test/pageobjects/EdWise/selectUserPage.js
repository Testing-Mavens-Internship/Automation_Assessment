import CommonPage from "./commonPage.js";

class SelectUserPage extends CommonPage {

    constructor()
    {
        super()
        this.$selectUserDropDown=()=> $('(//label[text()="Select User"])[1]')
        this.$selectRoleDropDown=()=> $('(//label[text()="Select Role"])[1]')
        this.$userValue=()=> $('/html/body/div[4]/div/ul/li[25]')
        this.$roleValue=()=> $('/html/body/div[5]/div/ul/li[1]')
        this.$selectButton=()=> $('/html/body/div[2]/div[2]/div[2]/div/div[2]/button[2]')
    }

    /**
     * Select values from both dropdowns and click select
     */
    async selectValuesFromDropdowns()
    {
        await this.$selectUserDropDown().click()
        await this.$userValue().waitForDisplayed({timeout : 5000,timeoutMsg: 'Could not find  "Sachin" within the requested time'})
        await this.$userValue().click()
        await this.$selectRoleDropDown().click()
        await this.$roleValue().waitForDisplayed({timeout : 5000,timeoutMsg: 'Could not find  "LEA_Data_Admin" within the requested time'})
        await this.$roleValue().click()
        await this.$selectButton().click()
    }
}

export default new SelectUserPage()
