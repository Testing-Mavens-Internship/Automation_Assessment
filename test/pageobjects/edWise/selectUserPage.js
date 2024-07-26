import dataSheet from "../../testData/edWiseData.json"assert{type:'json'}
import commonPage from "../edWise/commonPage.js"

class SelectUserPage extends commonPage{
    constructor(){
        super();
        this.$dropDownBars=(index)=>(`//div[@class="rz-p-0 rz-p-md-12"]//label[text()="${index}"]`);
        this.$selectUserDropdown=(user)=>(`//div[@id="popup-cNSNuu0QOE"]//li[@aria-label="${user}"]`)
        this.$labelinDropBox=()=>(`//div[@class="rz-p-0 rz-p-md-12"]//label[@class="rz-dropdown-label rz-inputtext "]`)
        this.$selectButton=()=>(`//button[@id="EmOXY35PV0"]`)

    }
    /**
     * Here we select user dropdown and select the user
     * @param {string} $dropDown 
     * @param {string} user 
     */

    async selectUserDropDown($dropDown,user){

        await this.$dropDownBars($dropDown).click;
        await this.$selectUserDropdown(user).waitForDisplayed({timeout:dataSheet.timeout,timeoutMsg:"Element is not visible"});
        await this.$selectUserDropdown(user).click;
        let selectedUser=await this.$labelinDropBox().getText();
        await selectedUser.toEqual(user);

    }
    /**
     * Here we select role dropdown and select the role
     * @param {string} $dropDown 
     * @param {string} role 
     */
    async selectRoleDropDown($dropDown,role){
        await this.$dropDownBars($dropDown).click;
        await this.$selectUserDropdown(role).waitForDisplayed({timeout:dataSheet.timeout,timeoutMsg:"Element is not visible"});
        await this.$selectUserDropdown(role).click;
        let selectedRole=await this.$labelinDropBox().getText();
        await selectedRole.toEqual(role);
    }
    /**
     * 
     * @param {string} name 
     */
    async selectButton(name){
        await this.selectButton().click
        let adminName=await this.$adminName().getText();
        await adminName.toEqual(name);
    }

}
export default new SelectUserPage()