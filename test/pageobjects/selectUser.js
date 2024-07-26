import Common from "./common";
class SelectUser extends Common{
    constructor(){
        super()
        this.$selectUSer=()=>$(`//a[@href="/SelectUser"]`)
        this.$validatingTextbox=()=>$(`//div[@id="fErpzzbtqk"]`)
        this.$userDropdown=()=>$(`//div[@id="qS3odNAE-k"]`)
        this.$userOption=()=>$(`(//li[@class="rz-dropdown-item "]/span[text()="Sachin"])[2]`)
        this.$roleDropdown=()=>$(`//div[@id="MCO8bEL6Pk"]`)
        this.$roleOptions=()=>$(`(//li[@class="rz-dropdown-item "]/span[text()="LEA_Data_Admin"])[2]`)
        this.$button=()=>$(`//button[@id="cjZtyeDMGk"]`)
        this.$changeRequestHeader=()=>$(`//a[@href="/ChangeRequest"]`)
    }
    /**
     * Method to click on selectUSer and validate textbox
     */
    async ClickOnSelectUser(){
        await this.$selectUSer().click();
        await this.$validatingTextbox().waitForDisplayed(({timeout:5000,timeoutMsg:"headers still not displayed"}))
    }
    /**
     * Method to select values from textbox
     */
    async selectingDropDownValues(){
        await this.$userDropdown().click()
        await this.$userOption().click();

        await this.$roleDropdown().click();
        await this.$roleOptions().click();
        await this.$button().click();
    }
    /**
     * Method to check change request link is displayed or not
     * 
     */

    async validatingChangeRequest(){
        await this.$changeRequestHeader().waitForDisplayed(({timeout:5000,timeoutMsg:"header still not displayed"}))
    }
}
export default new SelectUser()