export default class CommonPage{
    constructor(){

    }

    /**
     * To load url of the page
     */
    async launchUrl(){
        await browser.maximizeWindow();
        await browser.url(`https://web-edmaster-test-wtus-ui-01.azurewebsites.net/`);
    }
}