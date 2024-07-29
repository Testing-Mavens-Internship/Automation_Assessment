import Common from "./common.js";
import time from "../../testData/timeout.json" assert{type:"json"}
class LandingPage extends Common{
    constructor(){
        super();
        this.$configurationsTab=()=>$(`//span[text()="Configurations"]/parent::div/parent::div`);
        this.$optionInsideConfigurationTab=(tab)=>$(`//span[text()="${tab}"]/../..`);
        this.$inputBoxes=(values)=>$(`//div[@class="rz-card rz-variant-filled rz-my-12 rz-mx-auto"]//label[normalize-space()="${values}"]/../..`);
        this.$userAndRoleSelecting=(username)=>$(`//div[@class="rz-dropdown-panel rz-popup"]//span[text()="${username}"]/..`);
        this.$button=(button)=>$(`//div[contains(@class," rz-justify-content-flex-end")]//button/span[normalize-space()="${button}"]/..`);

    }
    /**
     * This function is for selecting the configuration tab and validating the below options which displays after clicking.
     */
    async selectingConfigurationsTab(){
        await this.$configurationsTab().click();
    }
     /**
     * This function is for selecting the Select User tab.
     */
     async selectUserTab(){
        await this.$optionInsideConfigurationTab("Select User").click();
        await this.$inputBoxes("Select User").waitForDisplayed({timeout:time.med,timeoutMsg:"Page is not yet loaded."});
        await this.$inputBoxes("Select Role").waitForDisplayed({timeout:time.med,timeoutMsg:"Page is not yet loaded."});
    }
    /**
     * This function is for selecting the User and his role.
     */
    async selectUserAndRole(){
        await this.$inputBoxes("Select User").click();
        await this.$userAndRoleSelecting("Sachin").click()
        await this.$loadingSpinner().waitForDisplayed({timeout:time.med,reverse:true,timeoutMsg:"Spinner is still on the screen."})
        await this.$inputBoxes("Select Role").click();
        await this.$userAndRoleSelecting("LEA_Data_Admin").click()
        await this.$loadingSpinner().waitForDisplayed({timeout:time.med,reverse:true,timeoutMsg:"Spinner is still on the screen."})
        await this.$button("Select").click();
    }
    
}
export default new LandingPage();