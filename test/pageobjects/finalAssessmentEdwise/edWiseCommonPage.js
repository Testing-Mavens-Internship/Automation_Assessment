export default class Common
{
    constructor()
    {
        this.$landingPageUsernameLabel=()=>$('//label[@class="rz-label header-profilename"]')
        this.$spinner=()=>$('//div[@class="loader-home"]//div[@class="lds-spinner"]')
    }

    /**
     * Load url
     */
    async loadUrl()
    {
        await browser.maximizeWindow()
        await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net/")
        await this.$spinner().waitForDisplayed({timeout:60000,reverse:true})
    }
}