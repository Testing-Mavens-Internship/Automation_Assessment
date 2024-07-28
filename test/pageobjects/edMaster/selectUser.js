import Common from "./common.js";
import time from "../../testData/timeout.json" assert{type:"json"}

class SelectUser extends Common{
    constructor(){
        super();
        this.$selectionDropdown = (dropDown) => $(`//div[@class="rz-p-0 rz-p-md-12"]//label[text()="${dropDown}"]/ancestor::div[@class="rz-dropdown"]`);
        this.$dropDownElement = (name) => $(`//div[@class="rz-dropdown-panel rz-popup"]//span[text()="${name}"]`);
        this.$selectUser=()=>$(`//div[@class="rz-card rz-variant-filled rz-my-12 rz-mx-auto"]//label[text()="Select User"]/../..`);
        this.$selectRole=()=>$(`(//div[@class="add-request-filters-row"]//label[text()="Select Role"])[1]`);
        this.$selectingFields=()=>$(`(//div[@class="add-request-search-filters"])[1]`);
        this.$selectButton=()=>$(`//div[@class="rz-p-0 rz-p-md-12"]//span[normalize-space()="Select"]/..`);
 
 
        }
    /**
     * This function is for selecting the name and role of the user.
     * @param {string} name 
     */
    async selectDropDown(dropDown, element) {
        await this.$selectionDropdown(dropDown).click();
        await this.$dropDownElement(element).click();
        let name=await(await this.$dropDownElement(element)).getText();
        return name;
    }
    async clickingSelectButton(){
        await this.$selectButton().click();
    }
}
export default new SelectUser()