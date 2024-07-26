
export default class CommonPage 
{
    constructor()
    {
        this.$usernameHeader = () => $('//label[text()="Username"]')
        this.$chooseFile =() =>$('(//img[@class="form-cross-icon"])[1]')
        this.$reasonText = () =>$('//textarea[@name="ReasonForChange"])[1]')
        this.$saveButton = () =>$('(//span[@class="save-title"])[1]')
        this.$errorMessageForReasonForChange =()=>$('//div[@class="rz-message rz-messages-error "]')
    
    }

    /**
     * Load the url of the EDWise Group website
     */
    async launchUrl()
    {
        await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net')
        browser.maximizeWindow();
    }

    /**
     * Generates Random Text for the 'Reason for Change' option
     * @returns {string}
     */

    async randomText()
    {
        let number=Math.floor(Math.random()*11)
        return `RANDOM${number}`
    }

    /**
     * Click on the 'Save' button
     */
    
    async clickOnSaveButton()
    {
        await this.$saveButton().click();
    }
     
}