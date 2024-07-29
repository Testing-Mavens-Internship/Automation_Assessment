import Common from "./common.js";
class Landing extends Common{
    constructor(){
        super()
        this.$loader=()=>$(`//div[@class="loader-home"]//div[@class="lds-spinner"]`)
        this.$configurationOption=()=>$(`//span[text()="Configurations"]/../.`)
        this.$$configurationList=()=>$$(`//ul[@class="rz-navigation-menu"]//li//a//span`)
        this.$selectUserOption=()=>$(`//span[text()="Select User"]/..`)
    }
    /**
     * method To click Configuration
     */
    async clickConfigurations(){
        await this.clickButton(this.$configurationOption())
        }
    /**
     *  method To ValidateConfigurationList
     * @returns array Contain List Under the Configuration
      */
    async validateConfigurationsList(){
        let listItems= await this.validateDropdownList(this.$$configurationList())
        return listItems
        }
     /**
      * method To Click SelectUser
     */
    async clickSelectUser(){
        await this.clickButton(this.$selectUserOption());
    }
    
    }
    export default new Landing();


    

