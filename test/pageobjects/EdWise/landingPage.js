import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage {

    constructor()
    {
        super()
        this.$spinner=()=> $('/html/body/div[2]/div[2]/div[3]/div/fieldset/legend/a/div/div')
        this.$advancedFilter=()=> $('/html/body/div[2]/div[2]/div[3]/div/fieldset/legend/a/div/span[2]')
        this.$configuration=()=> $('//div[@class="rz-navigation-item-link"]')
        this.$selectUserOption=()=> $('/html/body/div[2]/div[1]/ul/li[3]/ul/li[1]/div/a')
    }

    /**
     * Wait for spinner to close and "Advance Filter" to be displayed
     */
    async waitSpinnerToEnd()
    {
        await this.$spinner().waitForDisplayed({timeout:50000, reverse:true})
    }

    /**
     * Click on "Configurations" option
     */
    async clickConfiguration()
    {
        await this.$configuration().click()
    }

    /**
     * Click on "Select User" option
     */
    async clickSelectUser()
    {
        await this.$selectUserOption().click()
    }
}

export default new LandingPage()
