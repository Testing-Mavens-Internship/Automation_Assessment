import CommonPage from "./common.js";
class SelectUser extends CommonPage{
    constructor(){
        super();
        this.$selectUserField=()=>$('//div[@class="rz-card rz-variant-filled rz-my-12 rz-mx-auto"]//div//div//label[text()="Select User"]');
        this.$selectRoleField=()=>$('//div[@class="rz-card rz-variant-filled rz-my-12 rz-mx-auto"]//div//div//label[text()="Select Role"]');
        this.$selectUser=()=>$('(//li[@aria-label="Sachin"])[last()]');
        this.$selectRole=()=>$('//div[@class="rz-dropdown-panel rz-popup"]/div/ul/li[1]/span[text()="LEA_Data_Admin"]');
        this.$selectButton=()=>$('(//button[@class="rz-button rz-button-md rz-variant-filled rz-primary rz-shade-default cus-primary-btn"])[2]');
        this.$spinner=()=>$('//div[@class="lds-spinner"]');
    }
    /**
     * Select user name and role.Click select button and validate add request option
     */
    async selectUserDetails(){
        await this.clickButton(this.$selectUserField());
        await this.$selectUser().scrollIntoView();
        await this.clickButton(this.$selectUser());
        await this.$spinner().waitForDisplayed({reverse:true,timeout:60000,timeoutMsg:'spinner is not displayed'});
        await this.clickButton(this.$selectRoleField());
        await this.clickButton(this.$selectRole());
        await this.$spinner().waitForDisplayed({reverse:true,timeout:30000,timeoutMsg:'spinner is not displayed'});
        await this.$selectButton().waitForClickable({timeout:30000,timeoutMsg:'Select button is not clickable'});
        await this.clickButton(this.$selectButton());
        await this.$spinner().waitForDisplayed({reverse:true,timeout:30000,timeoutMsg:'spinner is not displayed'});
    }

}
export default new SelectUser();