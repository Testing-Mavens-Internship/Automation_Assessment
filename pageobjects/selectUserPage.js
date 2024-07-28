import CommonPage from "./commonPage.js";

class SelectUserPage extends CommonPage{
    constructor(){
        super()
        this.$selectUserDropDownsPlaceholders = (placeholdervalue)=> $(`(//div[@class="rz-dropdown"]/child::label[text()="${placeholdervalue}"])[1]`);
        this.$selectUserDropDownOptions = (option)=> $(`(//ul[@role="listbox"]//li/span[text()="${option}"])[2]`);
        this.$selectRoleDropDownOptions = (option)=> $(`(//li[@aria-label='${option}']//span)[last()]`);
        this.$selectButton = ()=> $(`(//div[@style="max-width: 60%"]//button)[last()]`);
    }

    /**
     * Select the option Sachin from the Select User dropdown and verify it is selected
     */
    async selectUser(name) {
        console.log("Clicking on the 'Select User' dropdown");
        await this.$selectUserDropDownsPlaceholders("Select User").click();
    
        console.log(`Waiting for the option '${name}' to be displayed`);
        await this.$selectUserDropDownOptions(name).waitForDisplayed({
          timeout: 16000,
          timeoutMsg: "Select User dropdown option not displayed",
        });
    
        console.log(`Clicking on the option '${name}'`);
        await this.$selectUserDropDownOptions(name).click();
      }

    /**
     * Select the option Admin from the Select Role dropdown and verify it is selected
     */
    async selectRole(role){
        await this.$selectUserDropDownsPlaceholders("Select Role").click();
        await this.$selectRoleDropDownOptions(role).waitForDisplayed({timeout: 10000, timeoutMsg: "Select Role dropdown option not displayed"});
        await this.$selectRoleDropDownOptions(role).click();
    }
} export default new SelectUserPage();