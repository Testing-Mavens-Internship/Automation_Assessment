import Common from "./edWiseCommonPage.js"

class Landing extends Common
{
    constructor()
    {
        super()
        this.$configurationsLabel=()=>$('//div[@class="rz-navigation-item-link"]')
        this.$selectUserLabel=()=>$('//ul[@class="rz-navigation-menu"]/li[1]')
        this.$$selectUserTextBox=(count)=>$(`(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder"][text()="Select User"])[${count}]`)
        this.$$selectRoleTextBox=(counts)=>$(`(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder"][text()="Select Role"])[${counts}]`)
    }

    /**
     * Click on configuration label
     */
    async clickConfigurations()
    {
        await this.$configurationsLabel().click()
        await this.$selectUserLabel().waitForDisplayed({timeout:40000,timeoutMsg:"Header still not displayed"})
        await this.$selectUserLabel().click()
    }

    /**
     * Text box validation
     */
    async validateTextBoxPresence()
    {
        if(await this.$$selectUserTextBox(1).isDisplayed())
        {
            if(await this.$$selectRoleTextBox(1).isDisplayed())
            {
                return true;
            }
        }
        
    }
}
export default new Landing()