import Common from "./common.js";
import time from "../../testData/timeout.json" assert{type:"json"}

class SelectUser extends Common{
    constructor(){
        super();
        this.$selectUser=()=>$(`(//div[@class="add-request-search-filters"]//label[text()="Select User"])[1]`);
        this.$selectRole=()=>$(`(//div[@class="add-request-filters-row"]//label[text()="Select Role"])[1]`);
        this.$selectingFields=()=>$(`(//div[@class="add-request-search-filters"])[1]`);
        this.$data=(value)=>$(`aria-label="${value}"`);
        this.$selectButton=()=>$(`(//button[@type="button"]//img[@src="images/arrow-white-right.svg"])[1]`);
    }
    /**
     * This function is for waiting for the selecting user and role fields.
     */
    async selectUser(){
        await this.$selectUser().click();
        await this.$selectUser().waitForDisplayed({timeout:time.max,timeoutMsg:"Option for select user is not yet displayed."})
        await this.$selectRole().waitForDisplayed({timeout:time.max,timeoutMsg:"Option for select role is not yet displayed."})
    }
    /**
     * This function is for selecting the name of the user.
     * @param {string} name 
     */
    async selectingUserName(name){
        await this.$selectUser().click();
        await this.$data(name).scrollIntoView();
        await this.$data(name).click();
    }
    /**
     * This function is for selecting the role of the user.
     * @param {string} role 
     */
    async selectingUserRole(role){
        await this.$selectRole().click();
        await this.$data(role).scrollIntoView();
        await this.$data(role).click();
        await this.$selectButton().click()
    }
}
export default new SelectUser()