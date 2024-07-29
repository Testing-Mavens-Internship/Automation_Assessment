import Common from "./common.js";
import data from "../../testData/data.json" assert{type:"json"}

class SelectUserPage extends Common{
    constructor(){
        super()
        this.$selectDropdown=(text)=>$(`//div[contains(@class,"rz-p-md-12")]//label[text()="${text}"]`)
        this.$optionSachin=()=>$(`(//div//ul//li[@aria-label="Sachin"]//span)[2]`)
        this.$loader=()=>$(`//div[@class="view-cr-loader"]//child::div[@class="lds-spinner"]`)
        this.$optionLEA_Data_Admin=()=>$(`(//div//ul//li[@aria-label="LEA_Data_Admin"]//span)[2]`)
        this.$selectButton=()=>$(`(//span[normalize-space()="Select"]/..)[1]`)
    }

    /**
     * method to click on select user dropdown
     */
    async clickSelectUser(){
        await this.clickButton(await this.$selectDropdown("Select User"))
        await this.$optionSachin().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Option still not displayed"})
    }

    /**
     * method to select option sachin
     */
    async selectOptionSachin(){
        await this.clickButton(this.$optionSachin())
        await this.$loader().waitForDisplayed({timeout:data.timeout,reverse:true,timeoutMsg:"loader still displayed"})
        await this.$selectDropdown("Select Role").waitForDisplayed({timeout:data.timeout,timeoutMsg:"Dropdoen still not displayed"})
    }

    /**
     * method to click on select role dropdown
     */
    async clickSelectRole(){
        await this.clickButton(await this.$selectDropdown("Select Role"))
        await this.$optionLEA_Data_Admin().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Option still not displayed"})
    }

    /**
     * method to select  option LEA_Data_Admin
     */
    async selectOptionLEA_Data_Admin(){
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