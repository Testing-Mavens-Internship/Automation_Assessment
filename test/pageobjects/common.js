import {browser} from "@wdio/globals"
export default class Common
{
    constructor()
    {
        this.$username=()=>$(`//label[text()='Username']`)
        this.$config=()=>$(`//div[@class="rz-navigation-item-link"]`)
        this.$spinner=()=>$(`//div[@class="loader-home"]/div[@class="lds-spinner"]`)
        this.$add_req=()=>$(`//a[@href="/AddRequest"]`)
    }
    async launchURL()
    {
        await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net/')
        await browser.maximizeWindow()
        await this.$spinner().waitForDisplayed({reverse:true})
    }
    async clickConfiguration()
    {
        await this.$config().waitForDisplayed({timeout:3000})
        await this.$config().click()
    }
}