import Common from "./common.js";
import wait from "../../testData/time.json"assert{type:"json"}
let minTimeout=wait.time.min;
let midTimeout=wait.time.mid;
let maxTimeout=wait.time.max 
class SelectUSer extends Common{
    constructor(){
        super()
        this.$dropdownBox=()=>$(`//div[@class="rz-p-0 rz-p-md-12"]//div[contains(@class,"-flex-start rz-p-4")]`)
        this.$selectUserDropdown=()=>$(`//div[@class="rz-p-0 rz-p-md-12"]//div[contains(@class,"-flex-start rz-p-4")]//label[normalize-space()="Select User"]`)
        this.$dropdownOptions=()=>$(`(//div[@class="rz-p-0 rz-p-md-12"]//following::div/ul/li/span[normalize-space()="Sachin"])[last()]`)
        this.$selectRoleDropdown=()=>$(`//div[@class="rz-p-0 rz-p-md-12"]//div[contains(@class,"-flex-start rz-p-4")]//label[normalize-space()="Select Role"]`)
        this.$roleDropdowOption=()=>$(`(//div[@class="rz-p-0 rz-p-md-12"]//following::div/ul/li/span[normalize-space()="LEA_Data_Admin"])[last()]`)
        this.$selectButton=()=>$(`//div[contains(@class,"rz-justify-content-flex-end")]/button/span[normalize-space()="Select"]/parent::button`)

        this.$loaderIcon=()=>$(`//div[@class="lds-spinner"]`)
        this.$userIcon=()=>$(`//div[@class="header-profile-menu"]//label[normalize-space()="Sachin"]`)

    }
    /**
     * Method to click on select user dropdown and select option
     */
    async selectingDropdownFromSelectUser(){
        await this.$selectUserDropdown().click();
        await this.$dropdownOptions().click();

    }

    /**
     * Method to click on select role dropdown and select option
     */
    async selectingDropdownfromSelectRole(){
        await this.$selectRoleDropdown().click();
        await this.$roleDropdowOption().click();
    }
    /**
     * Method to click select button
     */
    async clickOnSelectButton(){
        await this.$selectButton().waitForClickable();
        await this.$selectButton().click();
        await this.$loaderIcon().waitForDisplayed(({timeout:midTimeout,timeoutMsg:"Loader is still loading",reverse:true}))
    }


}
export default new SelectUSer()