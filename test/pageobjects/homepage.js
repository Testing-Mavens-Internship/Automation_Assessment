import Common from "./common.js";

class HomePage extends Common
{
    constructor()
    {
        super()
        this.$configuration=()=>$(`//li[@id="T-sqLcz15k"]/div[@class="rz-navigation-item-wrapper"]`)
        this.$$options=()=>$$(`//ul[@class="rz-navigation-menu"]/li/div/a/span`)
        this.$user=()=>$(`//a[@href="/SelectUser"]`)
        this.$clickUser=()=>$(`//div[@id="DDigNvQYUU"]`)
        this.$userSachin=()=>$(`(//ul[@class="rz-dropdown-items rz-dropdown-list"]/li[@aria-label="Sachin"])[last()]`)
        this.$clickRole=()=>$(`//div[@id="cZz1S-KSkk"]`)
        this.$role=()=>$(`(//ul[@class="rz-dropdown-items rz-dropdown-list"]/li[@aria-label="LEA_Data_Admin"])[last()]`)
        this.$label=()=>$(`//label[text()='Sachin']`)
        this.$select=()=>$(`//button[@id="IYeqCESyP0"]`)
    }

    
    /**
     * Click on configuration option
     */
    async clickConfiguration()
    {
        await this.$configuration().waitForClickable({timeout:8000,timeoutMsg:'Configuration option not yet clickable'})
        await this.$configuration().click()
    }


    /**
     * Validate dropdown items displayed on clicking configuration option
     * @returns x(array)
     */
    async validateDropdown()
    {
        let x=[]
        for(let item of await this.$$options())
        {
            x.push(await item.getText())
        }
        return x
    }


    /**
     * Click on Select User dropdown option 
     */
    async selectUser()
    {
        await this.$user().click()
        await this.$user().waitForDisplayed({timeout:5000,timeoutMsg:'Select User dropdown option not yet displayed'})
    }


    /**
     * Select 'Sachin' from Select User dropdown
     * Select 'LEA_Data_Admin' from Select Role dropdown
     */
    async selectDropdownValues()
    {
        // Select User dropdown
        await this.$clickUser().waitForClickable({timeout:5000,timeoutMsg:'Click user dropdown cannot be clicked'})
        await this.$clickUser().click()
        await this.$userSachin().scrollIntoView()
        await this.$userSachin().click()

        // Select Role dropdown
        await this.$clickRole().waitForClickable({timeout:5000,timeoutMsg:'Click role dropdown cannot be clicked'})
        await this.$clickRole().click()
        await this.$role().scrollIntoView()
        await this.$role().click()

        await this.$select().click()
    }
}
export default new HomePage()