import CommonPage from "./commonPage.js";
import time from "../../testData/data.json" assert{type:"json"};

export class ChangeRequest extends CommonPage{
    constructor(){
        super();
        this.$selectOrganization=()=>$(`//li[@aria-label="Mcnary Elementary District"]`);
        this.$organizationCategory=()=>$(`//label[text()="Organization Category"]`)
        this.$selectCategory=()=>$(`//li[@aria-label="School"]`)
    }
    /**
     * To click on the education organization option.
     */
    async clickEducationOrganization(){
        await this.clickOption(this.$educationOrganizationHeader());
        await this.$selectOrganization().waitForDisplayed({timeOut:time.timeout,timeOutMsg:"Option still not displayed"});
    }
    /**
     * To click on Mcnary district from the dropdown.
     */
    async clickMcnaryDistrict(){
        await this.clickOption(this.$selectOrganization());
        await this.$categoryHeader().waitForDisplayed({timeOut:time.timeout,timeOutMsg:"Header still not displayed."});

    }
    /**
     * To click on organization category.
     */
    async clickOrganizationCategory(){
        await this.clickOption(this.$categoryHeader());
        await this.$selectCategory().waitForDisplayed({timeOut:time.timeout,timeOutMsg:"Header still not displayed."});
    }
}
export default new ChangeRequest();