import Common from "./common.js";

class HomePage extends Common{
    constructor(){
        super();
        this.$configurationTab=()=>$(`//span[text()="Configurations"]`);
        this.$configurationValues=(index)=>$(`(//ul[@class="rz-navigation-menu"]//a)[${index}]`);
        this.$selectUser=()=>$(`//span[text()="Select User"]`);
    }/**
     * This function is for clicking on the configuration tab on the left side panel.
     */
    async clickOnConfigurationTab(){
        await this.$configurationTab().moveTo();
        await this.$configurationTab().click();
        await this.$selectUser().click();
    }
   
}
export default new HomePage ();