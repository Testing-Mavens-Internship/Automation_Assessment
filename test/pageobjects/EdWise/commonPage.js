export default class CommonPage {

    constructor()
    {
        this.$header=()=> $('//label[text()="Username"]')
    }

    /**
     * Function to load the URL on the browser
     */
    async loadUrl()
    {
        await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net/')
        await browser.maximizeWindow()
    }
}
