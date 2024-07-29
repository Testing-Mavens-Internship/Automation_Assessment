import {browser} from "@wdio/globals"
export default class Common
{
    constructor()
    {
        this.$heading=()=>$(`//label[text()='Username']`)
        this.$spinner=()=>$(`//div[@class="loader-home"]/div[@class="lds-spinner"]`)
    }

    /**
     * Method to launch URL
     */
    async launchURL()
    {
        await this.$spinner().waitForDisplayed({reverse:true})
        await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net/')
        await browser.maximizeWindow()
    }
}