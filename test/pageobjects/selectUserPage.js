import Common from "./common.js";
import data from "../../testData/data.json" assert{type:"json"}

class SelectUserPage extends Common{
    constructor(){
        super()
        this.$selectUserLabel=()=>$(`(//label[text()="Select User"])[1]`)
        this.$selectRoleLabel=()=>$(`(//label[text()="Select Role"])[1]`)
        this.$optionSachin=()=>$(`(//div//ul//li[@aria-label="Sachin"]//span)[2]`)
        this.$loader=()=>$(`//div[@class="view-cr-loader"]//child::div[@class="lds-spinner"]`)
        this.$optionLEA_Data_Admin=()=>$(`(//div//ul//li[@aria-label="LEA_Data_Admin"]//span)[2]`)
        this.$selectButton=()=>$(`(//span[normalize-space()="Select"]/..)[1]`)
    }

    /**
     * method to click on select user input field
     * @returns string
     */
    async clickSelectUserInput(){
        await this.clickButton(this.$selectUserLabel())
        await this.$optionSachin().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Option sachin still not displayed"})
        let sachin=await this.$optionSachin().getText()
        return sachin
    }

    /**
     * method to select the option sachin
     */
    async clickOptionSachin(){
        await this.clickButton(this.$optionSachin())
    }

    /**
     * method to click on select role input field
     * @returns string
     */
    async clickSelectRoleInput(){
        await this.clickButton(this.$selectRoleLabel())
        await this.$optionLEA_Data_Admin().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Option LEA_Data_Admin still not displayed"})
        let LEA_Data_Admin=await this.$optionLEA_Data_Admin().getText()
        return LEA_Data_Admin
    }

    /**
     * method to select the option LEA_Data_Admin 
     */
    async clickOptionEA_Data_Admin(){
        await this.clickButton(this.$optionLEA_Data_Admin())
        await this.$selectButton().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Button still not displayed"})
    }
    
    /**
     * method to click on select button
     */
    async clickSelectButton(){
        await this.clickButton(this.$selectButton())
    }
}
export default new SelectUserPage()