import CommonPage from "./common.js";
class SelectUser extends CommonPage{
    constructor(){
        super();
        this.$selectUserField=()=>$('//div[@id="UZfJ2ksadU"]');
        this.$selectRoleField=()=>$('//div[@id="ZW-k2co1jk"]');
        this.$selectUser=()=>$('(//li[@aria-label="Sachin"])[2]');
        this.$selectRole=()=>$('(//li[@aria-label="LEA_Data_Admin"])[2]');
        this.$selectButton=()=>$('//button[@id="0KOJ40u7UE"]');
    }
    /**
     * Select user name and role.Click select button and validate add request option
     */
    async selectUserDetails(){
        await this.$selectUserField().click();
        await this.$selectUser().scrollIntoView();
        await this.$selectUser().click();
        await this.$selectRole().waitForClickable({timeout:30000,timeoutMsg:'Role field is not clickable'});
        await this.$selectRole().click();
        await this.$selectUser().click();
    }

}
export default new SelectUser();