
export default class Common{
    constructor(){
        this.$logo=()=>$(`//img[@src="images/logo.svg"]/parent::div`);
        this.$advancedFilterOption=()=>$(`//span[normalize-space()="Advanced Filter"]`);
        this.$selectedUSer=(user)=>$(`//label[text()="${user}"]`);
        this.$loadingSpinner=()=>$(`//div[@class="lds-spinner"]`);
    }
    /**
     * This function is for launching the url.
     */
    async launchingTheUrl(){
        await browser.maximizeWindow();
        await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net/");
        await this.$advancedFilterOption().waitForDisplayed({timeout:60000,timeoutMsg:"Page is not yet loaded."});
    }
}