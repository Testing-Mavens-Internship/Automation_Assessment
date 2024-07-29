import CommonPage from "./common.js";
class ChangeRequest extends CommonPage{
    constructor(){
        super();
        this.$changeRequestHeader=()=>$('//div[@class="wizard-steps"]');
        this.$addRequestIcon=()=>$('//img[@class="add-request-icon"]');
        this.$addRequestOption=()=>$('//a[@href="/AddRequest"]');
        this.$spinner=()=>$('//div[@class="lds-spinner"]')
    }
    /**
     * Click on add request option
     */
    async clickAddRequest(){
        
        await this.$addRequestOption().click();
        await this.$spinner().waitForDisplayed({reverse:true,timeout:30000,timeoutMsg:'spinner is not displayed'});
    }
}

export default new ChangeRequest();