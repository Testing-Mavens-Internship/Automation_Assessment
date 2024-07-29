import CommonPage from "./common.js";

class ReviewChange extends CommonPage{
    constructor(){
        super();
            this.$charterAuthorizer=()=>$(`//span[text()="Charter Authorizer"]`);
            this.$organizationCategory=()=>$(`//p[text()="Organization Category Details"]`);
            this.$closeButton=()=>$(`//button[contains(@class,"button-close")]`);
            this.$changeRequestHeader=()=>$(`//h6[text()="Change Requests"]`);

    }

    /**
     * To click close button
     */
    async clickCloseButton(){
        await this.$closeButton().click();
    }
}

export default new ReviewChange();