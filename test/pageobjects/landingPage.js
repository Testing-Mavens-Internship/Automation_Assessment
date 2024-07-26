import CommonPage from "./commonPage.js";
import data from '../testData/timeout.json' assert {"type":"json"}

class LandingPage extends CommonPage{

    constructor()
    {
        super();
        this.$configurationsIcon = () =>$('//div[@class="rz-navigation-item-link"]')
        this.$$configurationsDropDowns = () =>$$('//li[@class="rz-navigation-item config-sub-link"]')
        this.$selectUserIcon = () =>$('//span[@class="rz-navigation-item-text" and text()="Select User"]')
        this.$selectUserText = () =>$('(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder" and text()="Select User"])[1]')
        this.$selectRoleText = () =>$('(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder" and text()="Select Role"])[1]')

    }

    /**
     *  select the 'Configurations' option from landingPage
     */

     async selectConfigurations()
     {
        await this.$configurationsIcon().waitForDisplayed({timeout :data.timeoutKey.midTimeout, timeoutMsg : "The Icon is not displayed"})
        await this.$configurationsIcon().waitForClickable({timeout :data.timeoutKey.midTimeout, timeoutMsg : "The Icon is not displayed"})
        await this.$configurationsIcon().click();

    }
    /**
     * Fetch the items in the Configurations Dropdown
     * @returns {array}
     */

    async fetchConfigurationsDropdownItems()
    {
        let array=[];

        let items=await this.$$configurationsDropDowns();

        for(let item of items)

        {
            await item.waitForDisplayed({ timeout:data.timeoutKey.midTimeout ,timeoutMsg : "The Items are not displayed" });
            expect(await item.isDisplayed()).toBe(true);
            let itemsFetched = (await item.getText()).trim()
            array.push(itemsFetched);
        }
        return array;

        
    }

    /**
     * click on the 'Select User' Icon 
     */

    async getTextOfInputBoxes()
    {
        await this.$selectUserIcon().click();
    }

}

export default new LandingPage();