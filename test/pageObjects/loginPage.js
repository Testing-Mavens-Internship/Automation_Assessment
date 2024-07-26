import CommonPage from "./common.js";
import userName from '../testData/data.json' assert {type: 'json'};

class LoginPage extends CommonPage{
    constructor(){
        super();
            this.$userDropDown=(select)=>$(`(//label[text()="${select}"])[1]`);
            this.$selectNameAndRole=(name)=>$(`(//li[@aria-label="${name}"])[2]`);
            this.$selectButton=()=>$(`(//span[normalize-space()="Select"])[1]`);

    }

    /**
     * To select user and role and to click submit button
     */
    async clickSelectUserDropdown(){
        await this.$userDropDown("Select User").setValue(userName.select).click();
        await this.$selectNameAndRole("Sachin").setValue(userName.name).click();
        await this.$userDropDown("Select Role").setValue(userName.role).click();
        await this.$selectNameAndRole("LEA_Data_Admin").setValue(userName.role).click();
        await this.$selectButton().click();


    }
}
export default new LoginPage;