import CommonPage from "./common.js";
import time from "../testData/data.json" assert {type: "json"}

class User extends CommonPage{
    constructor(){
        super();
             this.$addRequest=()=>$(`//a//span[text()="Add Request"]`);
             this.$approvalQueue=()=>$(`//a//span[text()="Approval Queue"]`);
             this.$profileName=()=>$(`//label[contains(@class,"header-profilename")]`);
             this.$addRequestButton=()=>$(`//button[@class="add-request-button"]`);

    }

    /**
     * To click add request button
     */
    async clickAddRequest(){
        await this.$addRequestButton().click();
    }


}
export default new User();