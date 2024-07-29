import CommonPage from "./common.js";
import time from "../testData/data.json" assert {type: 'json'};

class LandingPage extends CommonPage{
    constructor(){
        super();
            this.$userNameHeader=()=>$(`//div[@id="header-profile-menu"]`);
            this.$configurations=()=>$(`//div[@class="rz-navigation-item-link"]`);
            this.$$optionsAvailable=()=>$$(`//ul[@class="rz-navigation-menu"]//li//a//span`);
            this.$selectUser=()=>$(`//span[text()="Select User"]/../..`);
            this.$$validateSelectUser=()=>$$(`//div[@class="rz-p-0 rz-p-md-12"]//label/..`);
    }

    /**
     * To click on configurations and validate the options displayed
     * @returns string
     */
    async clickConfigurations() {
        await this.$configurations().click();
    
        const text = [];
        const options = await this.$$optionsAvailable();
        const count = options.length;
    
        for (let i = 0; i < count; i++) {
            const optionText = await options[i].getText();
            console.log(optionText);
            text.push(optionText);
        }
    
        return text;
    }
    
    /**
     * To click on select user option from configurations
     */
    async selectUserOption(){
        await this.$selectUser().click();
     
    }

    /**
     * To validate the presence of two boxes
     */
    async validateTwoBoxesPresence() {
        const elements = await this.$$validateSelectUser();
        const count = elements.length;
        if (count === 2) {
            console.log('Two boxes are present.');
        } else {
            console.error(`Expected 2 boxes, but found ${count}.`);
        }
        return count;
    }

}

export default new LandingPage();