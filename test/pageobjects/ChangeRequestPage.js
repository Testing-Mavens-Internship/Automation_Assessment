import Common from "./common.js";

class ChangeRequest extends Common{
    constructor(){
        super()
        this.$changeRequestHeader=()=>$(`//h6[text()="Change Requests"]`)
        this.$loader=()=>$(`//div[@class="cr-loader-home"]//div[@class="lds-spinner"]`)
        this.$addRequestMenu=()=>$(`//a[@href="/AddRequest"]//span`)
        this.$approvalMenu=()=>$(`//a[@href="/ApproverSummary"]//span`)
        this.$usernameHeader=()=>$(`//label[text()="Sachin"]`)
        this.$addRequestButton=()=>$(`(//span[text()="Add Request"]/..)[2]`)
    }

    /**
     * method to click on add request button
     */
    async clickAddRequestButton(){
        await this.clickButton(this.$addRequestButton())
    }
}
export default new ChangeRequest()