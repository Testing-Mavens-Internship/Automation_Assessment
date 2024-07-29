
import CommonPage from "./commonPage.js";
import data from "../testData/timeout.json" assert { "type" :"json"}


class AddRequestPage extends CommonPage{
    constructor()
    {
        super();
        this.$$AddRequestHeaders=()=>$$('//div[@class="add-request-search-filters"]//child::div[contains(@class,"search-education-title")]//child::span')
        this.$changeRequestHeader=()=>$('//span[text()="Change Requests"]')
        this.$futureTick=()=>$('//div[@class="rz-radiobutton-box rz-state-active"]')
        this.$organizationMain=()=>$('//div[@id="O2kQ5hGsPE"]')
        this.$categoryMain=()=>$('//div[@id="Q9wWmT8rmE"]')
        this.$OrganizationSelected=()=>$('//li[@aria-label="Fort Huachuca Accommodation District"]')
        this.$categorySelected=()=>$('//li[@aria-label="School"]')
        this.$calendarIcon=()=>$('//span[@class="rz-calendar rz-calendar-w-btn"]')
        this.$clickOrganizationCategories=()=>$('//p[text()="Organization Categories"]')
      
    }

   
/**
 * 
 * Validate the labels of the input field boxes
 */
    async validateInputHeaders()
    {
    let array=[];
      let inputHeadersOfAddRequest = await this.$$AddRequestHeaders();

      for(let item of inputHeadersOfAddRequest)
        
        {
            await item.waitForDisplayed({ timeout:data.timeoutKey.midTimeout ,timeoutMsg : "The Items are not displayed" });
            expect(await item.isDisplayed()).toBe(true);
            let itemsFetched = (await item.getText()).trim()
            array.push(itemsFetched);
        }
        return array;
    }

    /**
     * select organization 'Fort Huachuca Accommodation District'
     */
    async selectOrganization(){

        await this.$organizationMain().click();
        await this.$OrganizationSelected().click() 
        
    }
    /**
     * select category 'School'
     */
   
    async selectCategory(){

        await this.$categoryMain().click();
        await this.$categorySelected().click();   
      
    /**
     * Tick the 'future' checkbox
     */
    }
    async selectFuture(){
        await this.$futureTick().click();
      
    }
/**
 * click on the 'Calender' option
 */
  
    async clickCalendar(){
        await this.$calendarIcon().click()
    }

    /**
     * Click on 'Organizational Categories'
     */
    async clickOnOrganizationCategories()
    {
        await this.$clickOrganizationCategories().click();

    }


    }


    
  


export default new AddRequestPage();