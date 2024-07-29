import CommonPage from "./commonPage.js";
import time from "../../testData/data.json" assert{type:"json"};


export class LandingPage extends CommonPage{
    constructor(){
        super();
    
    }
    /**
     * To click the configuration option in the side bar.
     */
    async clickConfiguration(){
        await this.clickOption(this.$configurationOption());
        await this.$selectUser().waitForDisplayed({timeout:time.timeout,timeoutMsg:"Option still not displayed."});
        this.$$validateSelectUserBoxes=()=>$$(`//div[@class="rz-p-0 rz-p-md-12"]//label/..`);

    }
    /**
     * To click the select user option from the configuration.
     *
     */
    async clickSelectUser(){
        await this.clickOption(this.$selectUser());

    }
    /**
     * To validate the two dropdown boxes of select users.
     * @returns number
     */
    async validateTwoBoxes() {
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