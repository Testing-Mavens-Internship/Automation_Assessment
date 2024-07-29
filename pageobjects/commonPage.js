export default class CommonPage {
    constructor(){

    }
    /**
     * Method for Launching Edwise Application
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net/")
    }

    async clickElementButton($selector){
        await $selector.click();
    }
}