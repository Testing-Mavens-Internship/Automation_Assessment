import Common from "./common.js";
import data from "../../testData/data.json" assert{type:"json"}

class LandingPage extends Common{
    constructor(){
        super()
        this.$loader=()=>$(`//div[@class="loader-home"]//div[@class="lds-spinner"]`)
        this.$configurationOption=()=>$(`//span[text()="Configurations"]/../.`)
        this.$$configurationList=()=>$$(`//ul[@class="rz-navigation-menu"]//li//a//span`)
        this.$selectUserOption=()=>$(`//span[text()="Select User"]/..`)
    }

    /**
     * method to click on configurations menu
     */
    async clickConfigurations(){
        await this.clickButton(this.$configurationOption())
    }

    /**
     * method to get the list of items under the configurations menu
     * @returns array contains list items under the configurations menu item
     */
    async validateConfigurationsList(){
        let listItems= await this.validateDropdownList(this.$$configurationList())
        return listItems
    }

    /**
     * method to click on select user menu
     */
    async clickSelectUser(){
        await this.clickButton(this.$selectUserOption())
    }
    
}
export default new LandingPage()