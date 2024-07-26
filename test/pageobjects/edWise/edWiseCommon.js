import data from "../../testData/test.json" assert{type:'json'}
const wait=data.waitTimes;
export default class Common
{
    constructor()
    {
        this.$landingPageHeader=()=>$('//label[@class="rz-label header-profilename"]')
        this.$landingPageLoadText=()=>$('//span[normalize-space()="Advanced Filter"]')
        this.$selectUserTextBoxHeader=()=>$('(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder"][text()="Select User"])[1]')
        this.$selectRoleTextBoxHeader=()=>$('(//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder"][text()="Select Role"])[1]')
        this.$addRequestLabel=()=>$('//span[@class="add-request-title"]')
    }

    /**
     * Launch url
     */
    async loadUrl()
    {
        await browser.maximizeWindow();
        await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net/")
        await this.$landingPageLoadText().waitForDisplayed({timeout:wait.min,timeoutMsg:"Header is still not displayed"})
    }
}