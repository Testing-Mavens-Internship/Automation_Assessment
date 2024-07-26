export default class Common{
    constructor(){
        this.$header=()=>(`//div[@id="header-profile-menu"]`)


    }
    async loadUrl(){
    await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net/")
    await  browser.maximizeWindow();    
    await this.$header().waitForDisplayed(({timeout:5000,timeoutMsg:"Header is still not displayed"}))
    }
}