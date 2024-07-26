
import CommonPage from "./commonPage.js";
import data from '../testData/timeout.json' assert {"type":"json"}

class SelectUserPage extends CommonPage{

    constructor()
    {
        super();
        
        this.$selectUserText = () =>$('(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder" and text()="Select User"])[1]')
        this.$selectRoleText = () =>$('(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder" and text()="Select Role"])[1]')
        this.$userSachin = () =>$('(//span[text()="Sachin"])[2]')
        this.$dataAdmin = () =>$('(//label[text()="LEA_Data_Admin"])[1]')
        this.$selectButton = () =>$('//button[@id="Ut0zBFHWYk"]')

    }

    /**
     * choose appropriate options for the Select User DropDown
     */
   
    async fillUserDetails()

    {
        await this.$selectUserText().waitForClickable({timeout :data.timeoutKey.maxTimeout,timeoutMsg :"The element is not clickable"});
       await this.$selectUserText().click();
       await this.$userSachin().waitForClickable({timeout :data.timeoutKey.maxTimeout,timeoutMsg :"The element is not clickable"});
       await  this.$userSachin().click();
       await this.$selectRoleText().waitForClickable({timeout :data.timeoutKey.maxTimeout,timeoutMsg :"The element is not clickable"});    
       await this.$selectRoleText().click();
       await this.$dataAdmin().waitForClickable({timeout :data.timeoutKey.maxTimeout,timeoutMsg :"The element is not clickable"});
       await this.$dataAdmin().click();
       await this.$selectButton().click()

    }

    /**
     * select the user icon
     */

    async userIcon()
    {
        await this.$selectUserIcon().click();
        
    }

}

export default new SelectUserPage();