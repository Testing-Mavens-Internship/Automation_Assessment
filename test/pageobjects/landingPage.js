import Common from "./common.js";

class LandingPage extends Common{
    constructor(){
        super()
        this.$loader=()=>$(`//div[@class="loader-home"]//div[@class="lds-spinner"]`)
        this.$configurationOption=()=>$(`//span[text()="Configurations"]/../.`)
        this.$$configurationList=()=>$$(`//ul[@class="rz-navigation-menu"]//li//a//span`)
        this.$selectUserOption=()=>$(`//span[text()="Select User"]/..`)
    }

    /**
     * method to click on configurations option in the side menu and validate dropdown list items
     * @returns array
     */
    async clickConfigurations(){
        await this.clickButton(this.$configurationOption())
        let list = await this.validateDropdownList(this.$$configurationList())
        return list
    }

    /**
     * method to click on select user option from the dropdown list
     */
    async clickSelectUser(){
        await this.clickButton(this.$selectUserOption())
    }
}
export default new LandingPage()