export default class CommonPage {
    constructor(){
        this.$homeHeader=()=>$('//label[text()="Username"]');
        this.$spinner=()=>$('//div[@class="lds-spinner"]');
       
    }
    /**
     * Launch the url for edwise group website
     */
    async launchUrl(){
        await browser.maximizeWindow();
        await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net/');
        await this.$homeHeader().waitForDisplayed({timeout:10000,timeoutMsg:'Home page is not displayed'});
        await this.$spinner().waitForDisplayed({reverse:true,timeout:30000,timeoutMsg:'Spinner is not displayed'});
       
    }
    /**
     * Method to click on button
     * @param {string} locator 
     */

    async clickButton(locator){
        // await locator.scrollIntoView();
        // await locator.waitForDisplayed({timeout:10000,timeoutMsg:'Button is not displayed'});
        await locator.click()
    }
}