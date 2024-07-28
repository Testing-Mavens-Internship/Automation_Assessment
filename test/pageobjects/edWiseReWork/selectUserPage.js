

import CommonPage from "./commonPage.js";
import dataSheet from "../../testData/edWiseData.json" assert { type: 'json' };

class SelectUser extends CommonPage {
    constructor() {
        super();
        this.$selectionDropdown = (dropDown) => $(`//div[@class="rz-p-0 rz-p-md-12"]//label[text()="${dropDown}"]/ancestor::div[@class="rz-dropdown"]`);
        this.$dropDownElement = (name) => $(`//div[@class="rz-dropdown-panel rz-popup"]//span[text()="${name}"]`);
        this.$$userNames = () => $$(`//div[@class="rz-dropdown-panel rz-popup"]//span`);
        this.$$roleNames = () => $$(`//div[@class="rz-dropdown-panel"]//span[text()="LEA_Data_Admin"]//ancestor::ul//li`);
        this.$selectButton = () => $(`//div[@class="rz-p-0 rz-p-md-12"]//button//span[normalize-space()="Select"]/parent::button`);
    }
/**
 * This method is used to select the dropdown and select the element
 * @param {string} dropDown 
 * @param {string} element 
 */
    async selectDropDown(dropDown, element) {
        await this.$selectionDropdown(dropDown).click();
        await this.$dropDownElement(element).click();
        
    }
/**
 * This method is used to click on the select button
 */
    async clickSelect() {
        await this.$selectButton().click();
        await this.$changeRequestHeader().waitForDisplayed({ timeout: dataSheet.timeout, timeoutMsg: "Element is not visible" });
    }
}

export default new SelectUser();
