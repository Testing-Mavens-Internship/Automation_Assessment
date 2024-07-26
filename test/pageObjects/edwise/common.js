export default class CommonPage {
    constructor(){
        this.$homeHeader=()=>$('//label[text()="Username"]'); 
    }
    /**
     * Launch the url for edwise group website
     */
    async launchUrl(){
        await browser.maximizeWindow();
        await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net/');
        await this.$homeHeader().waitForDisplayed({timeout:10000,timeoutMsg:'Home page is not displayed'});
    }
}