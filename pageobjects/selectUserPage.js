import CommonPage from "./commonPage.js";

class SelectUserPage extends CommonPage{
    constructor(){
        super()
        this.$selectUserDropDownsPlaceholders = (placeholdervalue)=> $(`//div[@id="HJW1caPp10"]//label[contains(@class,'rz-placeholder')][normalize-space()='${placeholdervalue}']`);
        this.$selectUserDropDownOptions = (option)=> $(`//div[@id='popup-ialhGAowKE']//li[contains(@aria-label,'${option}')]//span`);
        this.$selectRoleDropDownOptions = (option)=> $(`//div[@id='popup-oZs3Ji-j1E']//li[contains(@aria-label,'${option}')]//span`);
        this.$selectButton = ()=> $(`//button[@id='KhCkPWanaE']`);
    }

    /**
     * Select the option Sachin from the Select User dropdown and verify it is selected
     */
    async selectUser(){
        await this.$selectUserDropDownsPlaceholders("Select User").click();
        await this.$selectUserDropDownOptions("Sachin").waitForDisplayed()
        await this.$selectUserDropDownOptions("Sachin").click();
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