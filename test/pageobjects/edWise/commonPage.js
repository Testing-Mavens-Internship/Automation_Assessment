export default class CommonPage{
    constructor(){
        this.$userNameOption=()=>this.$userNameOption(`//label[text()="Username"]`);

    }
    /**
     * To launch the url of the web application in the browser.
     */
    async loadUrl(){
        await browser.maximizeWindow();
        await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net/");
        await this.$userNameOption().waitForDisplayed({timeout:5000,timeoutMsg:"Option Still not displayed."});
    }
}