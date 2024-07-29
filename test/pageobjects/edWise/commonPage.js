import time from "../../testData/data.json" assert {type:"json"};


export default class CommonPage{
    constructor(){
        this.$landingPageSpinner=()=>$(`//div[@class="loader-home"]//div[@class="lds-spinner"]`);
        this.$userIconHeader=()=>$(`//label[@class="rz-label header-profilename"]`);
        this.$configurationOption=()=>$('//div[@class="rz-navigation-item-link"]');
        this.$educationOrganizationHeader=()=>$(`//label[text()="Select Education Organization"]`);
        this.$categoryHeader=()=>$(`//div[@class="search-education-title"]/span[normalize-space()="Category"]`);

    }
    /**
     * Method to load the url of the website in the browser.
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net/");
        await this.$landingPageSpinner().waitForDisplayed({timeout:time.timeout,reverse:"True"});
        await this.$userIconHeader().waitForDisplayed({timeout:time.timeout,timeoutMsg:"Header still not displayed."});
        await this.$configurationOption().waitForDisplayed({timeout:time.timeout,timeoutMsg:"Option still not displayed."});
        

    }
    /**
     * To perform the click function in other methods.
     * @param {*} locator 
     */
    async clickOption(locator){
        await locator.scrollIntoView();
        await locator.waitForClickable({timeout:time.timeout,timeoutMsg:"Option still not clickable"});
        await locator.click()
    }

}