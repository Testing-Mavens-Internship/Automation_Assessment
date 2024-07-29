import CommonPage from "./commonPage.js"

class ChangeRequestPage extends CommonPage {
    constructor(){
        super()
        this.$loader=()=>$(`//div[@class="cr-loader-home"]//div[@class="lds-spinner"]`)
        this.$addRequestOption=()=>$(`//a[@href="/AddRequest"]//span`)
        this.$approvalQueueOption=()=>$(`//a[@href="/ApproverSummary"]//span`)
        this.$sachinUsernameHeader=()=>$(`//label[text()="Sachin"]`)
        this.$addRequestButton=()=>$(`(//span[text()="Add Request"]/..)[2]`)
    }

    /**
     * Click on the 'Add Request' button
     */
    async clickAddRequestButton(){
        await this.$addRequestButton().click();
    }
}
export default new ChangeRequestPage()