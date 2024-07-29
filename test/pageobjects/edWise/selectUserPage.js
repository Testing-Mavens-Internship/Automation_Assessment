import CommonPage from "./commonPage.js";
import userName from "../../testData/data.json" assert{type:"json"};
import time from"../../testData/data.json" assert{type:"json"};


export class SelectUserPage extends CommonPage{
    constructor(){
        super();

        this.$$allUserNameDropDown=()=>$$(`//div[@class="rz-p-0 rz-p-md-12"]//label[text()="Select User"]/ancestor::div[@class="rz-dropdown"]`)
        this.$userDropdown = (dropDown) => $(`//div[@class="rz-p-0 rz-p-md-12"]//label[text()="${dropDown}"]/ancestor::div[@class="rz-dropdown"]`);
        this.$$allRoleDropDown=()=>$$(`//div[@class="rz-p-0 rz-p-md-12"]//label[text()="Select Role"]/ancestor::div[@class="rz-dropdown"]`)
        this.$dropDownElement = (name) => $(`//div[@class="rz-dropdown-panel rz-popup"]//span[text()="${name}"]`);
        this.$selectButton=()=>$(`//span[normalize-space()="Select"]//ancestor::button`);

}
    
/**
 * To select a username from the dropdown and validate the dropdown.
 * @returns text
 */
async selectUserName(){
    await this.clickOption(this.$userDropdown(userName.select));
    await this.clickOption(this.$dropDownElement(userName.name));
    const text = [];
    const options = await this.$$allUserNameDropDown();
    const count = options.length;

    for (let i = 0; i < count; i++) {
        const optionText = await options[i].getText();
        console.log(optionText);
        text.push(optionText);
    }

    return text;
}
/**
 * To validate and select a role from the dropdown.
 * @returns text
 */
async selectRole(){
    await this.clickOption(this.$userDropdown(userName.role));
    await this.clickOption(this.$dropDownElement(userName.selectRole));
    const text = [];
    const options = await this.$$allRoleDropDown();
    const count = options.length;

    for (let i = 0; i < count; i++) {
        const optionText = await options[i].getText();
        console.log(optionText);
        text.push(optionText);
    }

    return text;
}

/**
 * To click the select button
 */
async clickSelectButton(){
    await this.clickOption(this.$selectButton());
    await this.$educationOrganizationHeader().waitForDisplayed({timeOut:time.timeout,timeOutMsg:"Header still not displayed."});

}
}
export default new SelectUserPage();