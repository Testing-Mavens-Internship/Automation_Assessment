export default class Common {
    constructor(){
        this.$homePageLogo=()=>$(`//img[@src="images/logo.svg"]`);
        this.$userName=(userName)=>$(`//label[text()="${userName}"]`);
        this.$defaultLoadingSpinner=()=>$(`//div[@class="lds-spinner"]/..`);
        this.$advancedFilter=()=>$(`//span[contains(.,"Advanced Filter")]`);
    }
    /**
     * It if for loading the url.
     */
    async launchUrl(){
        await browser.maximizeWindow();
        await browser.url(`https://web-edmaster-test-wtus-ui-01.azurewebsites.net/`)
    }
}