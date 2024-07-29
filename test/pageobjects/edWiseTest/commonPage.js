
import dataSheet from "../../testData/edWiseData.json" assert { type: 'json' };

export default class CommonPage {
    constructor() {
        this.$usernameHeader = () => $(`//label[contains(@class,'profilename')]`);
        this.$loadSpinner = () => $(`//div[@class="loader-home"]//div[@class="lds-spinner"]`);
        this.$changeRequestHeader = () => $(`//h6[text()="Change Requests"]`);
        this.$usernameHeader=()=>$(`//label[@class="rz-label header-profilename"]`)
        this.$changeRequestPageHeader=()=>$(`//span[text()="Change Requests"]`)

    }
    /**
     * Here we are loading the URL and maximizing the window
     */

    async loadUrl() {
        await browser.maximizeWindow();
        await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net/');
        await this.$loadSpinner().waitForDisplayed({ timeout: 90000, reverse: true, timeoutMsg: "Spinner did not disappear in time" });
    }

}
