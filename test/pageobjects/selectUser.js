import Common from "./common.js";
import data from "../testData/timeout.json" assert{type:"json"};
class SelectUser extends Common{
    constructor(){
        super()
        this.$selectUserLabel=()=>$(`(//label[text()="Select User"])[last()]`)
        this.$selectRoleLabel=()=>$(`(//label[text()="Select Role"])[last()]`)
        this.$optionSachin=(name)=>$(`(//div//ul//li[@aria-label="${name}"]//span)[last()]`)
        this.$loader=()=>$(`//div[@class="view-cr-loader"]//child::div[@class="lds-spinner"]`)
        this.$optionLEA_Data_Admin=(role)=>$(`(//div//ul//li[@aria-label="${role}"]//span)[last()]`)
        this.$selectButton=()=>$(`(//span[normalize-space()="Select"]/..)[last()]`)
    }
    /**
     * method To Click selectUserInput
     * @param {name} name 
     * @returns string
     */
    async clickSelectUserInput(name){
        await this.clickButton(this.$selectUserLabel())
        await this.$optionSachin(name).waitForDisplayed({timeout:data.time,timeoutMsg:"Option sachin still not displayed"})
        let name=await this.$optionSachin().getText()
        return name
    }
    /**
     * method To Click OptionSachin
     */
    async clickOptionSachin(){
        await this.clickButton(this.$optionSachin())
    }
    /**
     * method To Click selectRoleInput
     * @param {role} role 
     * @returns string
     */
    async clickSelectRoleInput(role){
        await this.clickButton(this.$selectRoleLabel())
        await this.$optionLEA_Data_Admin(role).waitForDisplayed({timeout:data.time,timeoutMsg:"Option LEA_Data_Admin still not displayed"})
        let role=await this.$optionLEA_Data_Admin().getText()
        return role
    }
    /**
     * method To Click OptionEA_Data_Admin
     */
    async clickOptionEA_Data_Admin(){
        await this.clickButton(this.$optionLEA_Data_Admin())
        await this.$selectButton().waitForDisplayed({timeout:data.time,timeoutMsg:"Button still not displayed"})
    }
    /**
     * Click selectButton Option
     */
    async clickSelectButton(){
        await this.clickButton(this.$selectButton())
    }

     }

export default new SelectUser();