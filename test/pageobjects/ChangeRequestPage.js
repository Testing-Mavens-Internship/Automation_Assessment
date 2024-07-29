import Common from "./common.js";

class ChangeRequestPage extends Common{
    constructor(){
        super()
        this.$addRequestButton=()=>$(`//button//span[text()="Add Request"]`)
    }

    /**
     * method to click on add request button
     */
    async clickAddRequestButton(){
        await this.clickButton(this.$addRequestButton())
    }
}
export default new ChangeRequestPage()