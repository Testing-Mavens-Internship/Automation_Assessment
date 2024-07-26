export default class Common{
    constructor(){
        this.$header=()=>$('//img[@id="AS0ylP7tm0"]');

    }
    /**
     * method to launch the url of the website
     */
    async loadUrl(){
        await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net/");
        await browser.maximizeWindow()
    }
}