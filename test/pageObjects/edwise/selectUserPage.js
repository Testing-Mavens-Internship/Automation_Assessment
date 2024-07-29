import CommonPage from "./common.js";
class SelectUser extends CommonPage{
    constructor(){
        super();
        this.$selectUserField=()=>$('(//div[@class="rz-dropdown"]//label[text()="Select User"])[1]');
        this.$selectRoleField=()=>$('(//label[text()="Select Role"])[1]');
        this.$selectUser=()=>$('(//li[@aria-label="Sachin"])[2]');
        this.$selectRole=()=>$('//div[@class="rz-dropdown-panel rz-popup"]/div/ul/li[1]/span[text()="LEA_Data_Admin"]');
        this.$selectButton=()=>$('(//button[@class="rz-button rz-button-md rz-variant-filled rz-primary rz-shade-default cus-primary-btn"])[2]');
        this.$spinner=()=>$('//div[@class="lds-spinner"]')
    }
    /**
     * Select user name and role.Click select button and validate add request option
     */
    async selectUserDetails(){
        await this.$selectUserField().click();
        await this.$selectUser().scrollIntoView();
        await this.$selectUser().click();
        await this.$spinner().waitForDisplayed({reverse:true,timeout:30000,timeoutMsg:'spinner is not displayed'});
        await this.$selectRoleField().click();
        await this.$selectRole().click();
        await this.$spinner().waitForDisplayed({reverse:true,timeout:30000,timeoutMsg:'spinner is not displayed'});
        await this.$selectButton().waitForClickable({timeout:30000,timeoutMsg:'Select button is not clickable'});
        await this.$selectButton().click();
        await this.$spinner().waitForDisplayed({reverse:true,timeout:30000,timeoutMsg:'spinner is not displayed'});
    }

}
export default new SelectUser();