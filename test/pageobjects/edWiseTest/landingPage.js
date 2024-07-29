import commonPage from "./commonPage.js";
import testData from "../../testData/edWiseData.json"assert{type:'json'}

class landingPage extends commonPage {
    constructor(){
        super();
        this.$configButton=()=>$(`//span[text()="Configurations"]/ancestor::div[@class="rz-navigation-item-link"]`);
        this.$selectUserButton=()=>$(`//span[text()="Select User"]//ancestor::li[@class="rz-navigation-item config-sub-link"]`)
        this.$$dropDowns=()=>$$(`//div[@class="rz-p-0 rz-p-md-12"]//div[@class="rz-dropdown"]`)
        this.$selectionDropdown = (dropDown) => $(`//div[@class="rz-p-0 rz-p-md-12"]//label[text()="${dropDown}"]/ancestor::div[@class="rz-dropdown"]`);
        this.$dropDownElement = (name) => $(`//div[@class="rz-dropdown-panel rz-popup"]//span[text()="${name}"]`);
        this.$selectButton = () => $(`//div[@class="rz-p-0 rz-p-md-12"]//button//span[normalize-space()="Select"]/parent::button`);

    }
/**
 * Here we are clicking on configuration button
 */
    async clickConfiguration(){
        await this.$configButton().click();
        await this.$selectUserButton().waitForDisplayed({ timeout: testData.timeout, timeoutMsg: "Element is not visible" });
        
    }

    /**
     * Here we are clicking on select user Button
     */
    async selectUserClick(){
        await this.$selectUserButton().click();
        for(let dropdown of await this.$$dropDowns()){
            await dropdown.waitForDisplayed({timeout:testData.timeout,timeoutMsg:"Element is not visible"});
        }
    }
    /**
     * Here we are selecting the dropdown and selecting the dropdown value
     * @param {string} dropDown 
     * @param {string} element 
     */

    async selectDropDown(dropDown, element) {
        await this.$selectionDropdown(dropDown).click();
        await this.$dropDownElement(element).click();
        
    }
    /**
     * Here we are clicking the select Button
     */
    async clickSelect() {
        await this.$selectButton().click();
        await this.$changeRequestHeader().waitForDisplayed({ timeout: testData.timeout, timeoutMsg: "Element is not visible" });
    }
    

    

}
export default new landingPage()