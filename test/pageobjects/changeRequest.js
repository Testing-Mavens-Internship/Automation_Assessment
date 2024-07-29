import Common from "./common.js";

class ChangeRequest extends Common{
    constructor(){
        super()
        this.$loader=()=>$(`//div[@class="cr-loader-home"]//div[@class="lds-spinner"]`)
        this.$addRequestMenu=()=>$(`//a[@href="/AddRequest"]//span`)
        this.$approvalMenu=()=>$(`//a[@href="/ApproverSummary"]//span`)
        this.$usernameHeader=()=>$(`//label[text()="Sachin"]`)
        this.$addRequestButton=()=>$(`(//span[text()="Add Request"]/..)[last()]`)
    }
    /**
     * method To Click AddRequestButton
     */
    async clickAddRequestButton(){
        await this.clickButton(this.$addRequestButton())
    }

    }

export default new ChangeRequest();