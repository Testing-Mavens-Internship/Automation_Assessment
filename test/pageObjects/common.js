import time from '../testData/data.json' assert {type: 'json'}
export default class CommonPage{
    constructor(){
        this.$landingPageLoader=()=>$(`//div[@class="loader-home"]//div[@class="lds-spinner"]`);
    }

    /**
     * To load url of the eduWise website
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url(`https://web-edmaster-test-wtus-ui-01.azurewebsites.net/`);
        await this.$landingPageLoader().waitForDisplayed({timeout:time.timeOutMax,reverse:true})
    }
}