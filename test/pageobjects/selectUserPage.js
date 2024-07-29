
import CommonPage from "./commonPage.js";


class SelectUserPage extends CommonPage{

    constructor()
    {
        super();
        this.$optionSachin=()=>$(`(//div//ul//li[@aria-label="Sachin"]//span)[2]`)
        this.$LEA_Data_Admin=()=>$(`(//div//ul//li[@aria-label="LEA_Data_Admin"]//span)[2]`)
        this.$selectButton = () =>$('//button[@id="Ut0zBFHWYk"]')
        this.$selectUserLabel=()=>$(`(//label[text()="Select User"])[1]`)
        this.$selectRoleLabel=()=>$(`(//label[text()="Select Role"])[1]`)
        this.$selectButton=()=>$(`(//span[normalize-space()="Select"]/..)[1]`)
       
     
       
    }

   
    /**
     * select the user icon
     */

    async userIcon()
    {
        await this.$selectUserIcon().click();
        
    }
    
    /**
     * select the user details from the 'select user page '
     */
   

    async selectionOnSelectUserPage(){

        await this.$selectUserLabel().click();
        await this.$optionSachin().click();

        await this.$selectRoleLabel().click();
        await this.$LEA_Data_Admin().click();

        await this.$selectButton().click();
       
       
        
    }

}

export default new SelectUserPage();