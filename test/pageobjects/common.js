import wait from "../../testData/time.json"assert{type:"json"}
let maxTimeout=wait.time.max 

export default class Common{
    constructor(){
        this.$loader=()=>$(`//div[@class="loader-home"]/div`)
        this.$edwiseHeader=()=>$(`//img[@src="images/logo.svg"]`)

    }
    /**
     * Method to lauch url
     */
    async loadUrl(){
        await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net/")
        await browser.maximizeWindow();
        await this.$loader().waitForDisplayed(({timeout:maxTimeout,timeoutMsg:"loader is still loading",reverse:true}))
        
    }
}