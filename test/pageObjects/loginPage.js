import CommonPage from "./common.js";
import userName from '../testData/data.json' assert {type: 'json'};

class LoginPage extends CommonPage{
    constructor(){
        super();
            this.$userDropdown = (dropDown) => $(`//div[@class="rz-p-0 rz-p-md-12"]//label[text()="${dropDown}"]/ancestor::div[@class="rz-dropdown"]`);
            this.$dropDownElement = (name) => $(`//div[@class="rz-dropdown-panel rz-popup"]//span[text()="${name}"]`);
            this.$selectButton=()=>$(`(//span[normalize-space()="Select"]//ancestor::button)[1]`);

    }

    /**
     * To select user and role and to click submit button
     */
    async clickSelectUserDropdown(){
        await this.$userDropdown(userName.select).click();
        await this.$dropDownElement(userName.name).click();
        await this.$userDropdown(userName.role).click();
        await this.$dropDownElement(userName.selectRole).click();
        await this.$selectButton().click();
    }
}
export default new LoginPage;