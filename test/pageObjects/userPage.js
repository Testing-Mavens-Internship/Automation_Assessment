import CommonPage from "./common.js";

class User extends CommonPage{
    constructor(){
        super();
             this.$addRequest=()=>$(`//span[contains(@class,"item-text")][text()="Add Request"]`);
             this.$approvalQueue=()=>$(`//span[contains(@class,"item-text")][text()="Approval Queue"]`);
             this.$profileName=()=>$(`//label[contains(@class,"header-profilename")]`);
             this.$addRequestButton=()=>$(`//button[@class="add-request-button"]`);

    }

    /**
     * To validate add request, approval queue and profile name is displayed
     */
    async validateUserPage(){
        await this.$addRequest().isDisplayed();
        await this.$approvalQueue().isDisplayed();
        await this.$profileName().isDisplayed();

    }

    /**
     * To click add request button
     */
    async clickAddRequest(){
        await this.$addRequestButton().click();
    }


}
export default new User();