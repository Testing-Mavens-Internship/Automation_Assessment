import Common from "./common.js";

class ReviewRequest extends Common{
    constructor(){
        super()
        this.$loader=()=>$(`//div[@class="view-cr-loader"]//div[@class="lds-spinner"]`)
        this.$categoryValue=()=>$(`//span[text()="Charter Authorizer"]`)
        this.$closeButton=()=>$(`//span[text()=" Close"]`)
    }

    /**
     * method to click on close button
     */
    async clickCloseButton(){
        await this.clickButton(this.$closeButton())
    }
}
export default new ReviewRequest()