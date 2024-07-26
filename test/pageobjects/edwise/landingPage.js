import Common from "../edwise/common.js";
class Landing extends Common{
    constructor(){
        super()
        this.$usernameHeader=()=>$('//label[text()="Username"]');
        this.$configuration=()=>$('//div[@class="rz-navigation-item-link"]');
        this.$elementsHeader=()=>$('//ul[@class="rz-navigation-menu"]');
        this.$selectUser=()=>$('//span[normalize-space()="Select User"]');
        this.$$selectUserText=()=>$$('//label[normalize-space()="Select User"]');
        this.$$selectRoleText=()=>$$('//label[normalize-space()="Select Role"]');
        this.$$selectUserDropDown=()=>$(`(//span[@class="rz-dropdown-trigger-icon  rzi rzi-chevron-down"])[${index}`);
        this.$$selectTextDropDown=()=>(`(//div[@class="rz-dropdown-trigger  rz-corner-right"])[${index}]`);
        this.$select=()=>('//button[@id="ioQ3g0mCpk"]');
        
    }
    /**
     * method to click configuration
     */
    async clickConfiguration(){
        await this.$configuration().click();
    }
    /**
     * method to click select user option
     */
    async clickSelectUser(){
        await this.$selectUser().click();
    }
    /**
     * method to choose dropDowns after clicking selectUser
     */

    async chooseDropDown(){
        await this.$$selectUserDropDown.click();
        await this.$$selectTextDropDown.click();
    }
    /**
     * method to click select button
     */
    async clickSelectButton(){
        await this.$select.click();
    }
}
export default new Landing()