import Common from "./edWiseCommon.js";

class SelectUser extends Common
{
    constructor()
    {
        super()
        this.$selectUserInput=()=>$('(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder"][normalize-space()="Select User"])[1]')
        this.$selectRoleInput=()=>$('(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder"][normalize-space()="Select Role"])[1]')
        this.$selectUser=()=>$('(//li[@aria-label="Sachin"])[2]')
        this.$selectRole=()=>$('(//li[@aria-label="LEA_Data_Admin"])[2]')
        this.$selectButton=()=>$('(//button[@type="button"])[2]')
        
        this.$approveQueueLabel=()=>$('(//span[text()="Approval Queue"])[1]')
        this.$displayedUserName=()=>$('//label[text()="Sachin"]')
    }

    /**
     * Select User and role
     */
    async selectUserAndRole()
    {
        await this.$selectUserInput().click()
        await this.$selectUser().scrollIntoView()
        await this.$selectUser().click()
        await this.$selectRoleInput().waitForClickable()
        await this.$selectRoleInput().click()
        await this.$selectRole().click()
        await this.$selectButton().waitForClickable()
        await this.$selectButton().click()
    }
}
export default new SelectUser()