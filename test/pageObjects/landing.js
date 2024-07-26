import CommonPage from "./common.js";
import time from "../testData/data.json" assert {type: 'json'};

class LandingPage extends CommonPage{
    constructor(){
        super();
            this.$userNameHeader=()=>$(`//div[@id="header-profile-menu"]`);
            this.$configurations=()=>$(`//div[@class="rz-navigation-item-link"]`);
            this.$$optionsAvailable=()=>$$(`//ul[@class="rz-navigation-menu"]//div//span`);
            this.$selectUser=()=>$(`//span[text()="Select User"]`);
            this.$validateSelectUser=()=>$(`(//div[@class="add-request-search-filters"])[1]`);
    }

    /**
     * To click on configurations and validate the options displayed
     * @returns string
     */
    async clickConfigurations(){
        await this.$configurations().waitForDisplayed({timeout: time.timeOutMin});
        await this.$configurations().click();
        const text =[];
        const count = await this.$$optionsAvailable().length;
        for(let i=0; i<count; i++){
            text= await this.$$optionsAvailable()[i].geText();
        }
        return text();
    }
    
    /**
     * To click on select user option from configurations
     */
    async selectUserOption(){
        await this.$selectUser().click();
        await this.$userNameHeader().waitForDisplayed({timeout: time.timeOutMin});
    }

}

export default new LandingPage();