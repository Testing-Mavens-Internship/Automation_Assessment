import Common from "./common.js";
class SelectUser extends Common{
    constructor(){
        super()
        this.$selectUSer=()=>$(`//a[@href="/SelectUser"]`)
        this.$validatingTextbox=()=>$(`//div[@id="fErpzzbtqk"]`)
        this.$userDropdown=()=>$(`//div[@class="rz-p-0 rz-p-md-12"]/div/div/div/div//label[text()="Select User"]`)
        this.$userOption=()=>$(`(//li[@class="rz-dropdown-item "]/span[text()="Sachin"])[2]`)
        this.$roleDropdown=()=>$(`//div[@class="rz-p-0 rz-p-md-12"]/div/div/div/div//label[text()="Select Role"]`)
        this.$roleOptions=()=>$(`(//li[@class="rz-dropdown-item "]/span[text()="LEA_Data_Admin"])[2]`)
        this.$button=()=>$(`(//div[contains(@class,"rz-stack rz-display-")]/button)[2]`)
        this.$changeRequestHeader=()=>$(`//a[@href="/ChangeRequest"]`)
        this.$userIconName=()=>$(`//div[contains(@class,"rz-stack rz-display-")]/div/label[normalize-space()="Sachin"]`)
        this.$addRequestLink=()=>$(`//div[contains(@class,"rz-navigation-")]/a[@href="/AddRequest"]`)
        this.$approvalQueue=()=>$(`//div[contains(@class,"rz-navigation-")]/a[@href="/ApproverSummary"]`)
        
    }
    /**
     * Method to click on selectUSer and validate textbox
     */
    async ClickOnSelectUser(){
        await this.$selectUSer().click();
       
    }
    /**
     * Method to select values from textbox
     */
    async selectingDropDownValues(){
        await this.$userDropdown().waitForClickable();
        await this.$userDropdown().click();
        await this.$userOption().click();

        await this.$roleDropdown().waitForClickable();
        await this.$roleDropdown().click();
        await this.$roleOptions().click();
        await this.$button().click();

        await this.$addRequestLink().waitForDisplayed(({timeout:5000,timeoutMsg:"AddRequest link still not displayed"}))
        await this.$approvalQueue().waitForDisplayed(({timeout:5000,timeoutMsg:"Approval Queue link still not displayed"}))
        


    }
    /**
     * Method to check change request link is displayed or not
     * 
     */

    // async validatingChangeRequest(){
    //     await this.$changeRequestHeader().waitForDisplayed(({timeout:5000,timeoutMsg:"header still not displayed"}))
    // }
}
export default new SelectUser()