import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage {

    constructor()
    {
        super()
        this.$advancedFilter=()=> $('//span[@class="d-inline-flex align-items-center align-middle"]')
        this.$configuration=()=> $('//div[@class="rz-navigation-item-link"]')
        this.$selectUserOption=()=> $('//span[text()="Select User"]')
    }

    /**
     * Click on "Configurations" option
     */
    async clickConfiguration()
    {
        //await this.$advancedFilter().waitForDisplayed({reverse:true})
        await this.$configuration().click()
        await this.$selectUserOption().waitForDisplayed({timeout : 5000})
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
