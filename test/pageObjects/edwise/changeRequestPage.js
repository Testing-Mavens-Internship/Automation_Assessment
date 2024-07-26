import CommonPage from "./common.js";
class ChangeRequest extends CommonPage{
    constructor(){
        super();
        this.$addRequestIcon=()=>$('//img[@class="add-request-icon"]');
        this.$addRequestOption=()=>$('//a[@href="/AddRequest"]');
    }
    /**
     * Click on add request option
     */
    async clickAddRequest(){
        await this.$addRequestOption().waitForDisplayed({timeout:10000,timeoutMsg:'Add request option is not displayed'});
        await this.$addRequestOption().click();
    }
}

export default new ChangeRequest();