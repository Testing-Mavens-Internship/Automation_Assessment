import CommonPage from "./commonPage.js";

class SelectUserPage extends CommonPage{
    constructor(){
        super()
        this.$selectUserDropDownsPlaceholders = (placeholdervalue)=> $(`(//div[@class="rz-dropdown"]/child::label[text()="${placeholdervalue}"])[1]`);
        this.$selectUserDropDownOptions = (option)=> $(`(//ul[@role="listbox"]//li[@aria-label='${option}'])[1]`);
        this.$selectRoleDropDownOptions = (option)=> $(`//div[@id='popup-oZs3Ji-j1E']//li[contains(@aria-label,'${option}')]//span`);
        this.$selectButton = ()=> $(`//button[@id='KhCkPWanaE']`);
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
    async selectRole(){
        await this.$selectUserDropDownsPlaceholders("Select Role").click();
        await this.$selectRoleDropDownOptions("LEA_Data_Admin").waitForDisplayed()
        await this.$selectRoleDropDownOptions("LEA_Data_Admin").click();
    }
} export default new SelectUserPage();