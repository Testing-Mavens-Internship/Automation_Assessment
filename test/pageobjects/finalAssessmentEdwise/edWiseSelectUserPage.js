import Common from "./edWiseCommonPage.js";

class SelectUser extends Common
{
    constructor()
    {
        super()
        this.$selectUser=(first)=>$(`(//div[@class="rz-dropdown"])[${first}]`)
        this.$userOption=()=>$('//div[@style="display: block; box-sizing: border-box; width: 250px; z-index: 2000; left: 523.198px; top: 130px; min-width: 250px;"]//li[@aria-label="Sachin"]')
        this.$roleOption=()=>$('//div[@style="display: block; box-sizing: border-box; width: 250px; z-index: 2000; left: 785.198px; top: 218px; min-width: 250px;"]//li[@aria-label="LEA_Data_Admin"]')
        this.$cancelButton=()=>$('//div[@style="--rz-gap:10px;;flex-wrap:nowrap;"]//button[@style="background-color:#FFF !important;color:#000;"]')
        this.$selectButton=()=>$('//div[@style="--rz-gap:10px;;flex-wrap:nowrap;"]/button//span[normalize-space()="Select"]')
    }

    /**
     * Select user and role
     */
    async selectUserAndRole()
    {
        await this.$selectUser(1).click()
        await this.$userOption().scrollIntoView()
        await this.$userOption().waitForDisplayed({timeout:40000,timeoutMsg:"Header still not displayed"})
        await this.$userOption().waitForClickable();
        await this.$userOption().click()
        await this.$spinner().waitForDisplayed({timeout:60000,reverse:true})
        await this.$$selectRole(2).click()
        await this.$roleOption().waitForDisplayed({timeout:40000,timeoutMsg:"Header still not displayed"})
        await this.$roleOption().waitForClickable()
        await this.$roleOption().click()
    }

    /**
     * Click on Select Button
     */
    async clickSelectButton()
    {
        await this.$selectButton().click()
        await this.$spinner().waitForDisplayed({timeout:60000,reverse:true})
    }

}
export default new SelectUser()