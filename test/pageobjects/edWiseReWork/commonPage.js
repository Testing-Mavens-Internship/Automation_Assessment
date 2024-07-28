


import dataSheet from "../../testData/edWiseData.json" assert { type: 'json' };

export default class CommonPage {
    constructor() {
        this.$usernameHeader = () => $(`//label[contains(@class,'profilename')]`);
        this.$loadSpinner = () => $(`//div[@class="loader-home"]//div[@class="lds-spinner"]`);
        this.$selectUserHead = () => $(`//div[@class="rz-p-0 rz-p-md-12"]//label[text()="Select User"]`);
        this.$changeRequestHeader = () => $(`//h6[text()="Change Requests"]`);
        this.$validateUser = () => $(`//label[contains(@class,"profilename")]`);
    }
    /**
     * Here we are loading the URL and maximizing the window
     */

    async loadUrl() {
        await browser.maximizeWindow();
        await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net/');
        await this.$loadSpinner().waitForDisplayed({ timeout: 90000, reverse: true, timeoutMsg: "Spinner did not disappear in time" });
    }
/**
 * This method is used to push the elements in an array
 * @param {string} menu 
 * @returns dropdownElements
 */
    async pushToArray(menu) {
        let dropdownElements = [];
        for (let element of await menu) {
            let elementText = await element.getText();
            await dropdownElements.push(elementText);
        }
        console.log("Print", dropdownElements);
        return dropdownElements;
    }
}
