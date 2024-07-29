export default class CommonPage {
    constructor(){
        this.$homeHeader=()=>$('//label[text()="Username"]'); 
        this.$filterOption=()=>$('//span[normalize-space()="Advanced Filter"]');
    }
    /**
     * Launch the url for edwise group website
     */
    async launchUrl(){
        await browser.maximizeWindow();
        await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net/');
        await this.$homeHeader().waitForDisplayed({timeout:10000,timeoutMsg:'Home page is not displayed'});
        await this.$filterOption().waitForDisplayed({timeout:30000,timeoutMsg:'filter option is not displayed'});
    }
}