import CommonPage from "./commonPage.js"
import data from "../testData/timeout.json" assert {"type" :"json"}


class LandingPage extends CommonPage{
    constructor(){
        super()
        this.$loader = () => $('//div[@class="loader-home"]//div[@class="lds-spinner"]');
        this.$configurationOption=()=>$(`//span[text()="Configurations"]/../.`)
        this.$$configurationList=()=>$$(`//ul[@class="rz-navigation-menu"]//li//a//span`)
        this.$selectUserOption=()=>$(`//span[text()="Select User"]/..`)
    }

    /**
     * click on the configurations option
     */
    async clickOnConfigurations(){
        await this.$configurationOption().click()
    }

   
    /**
     * Fetch the elements in the configurations dropdown section
     * @returns {array}
     */
        async fetchConfigurationsDropdownItems()
        {
            let array=[];
        
            let items=await this.$$configurationList();
        
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
 * click the 'select user' icon
 */
        async clickSelectUser(){
            await this.$selectUserOption();
        }
       
    }

    

export default new LandingPage()