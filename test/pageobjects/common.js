export default class Common{
    constructor(){
        this.$header=()=>(`//div[@id="header-profile-menu"]`)


    }
    async loadUrl(){
    await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net/")
    await  browser.maximizeWindow();    
    }
}