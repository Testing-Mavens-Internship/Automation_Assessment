import dataSheet from "../../testData/edWiseData.json"assert{type:'json'}
import commonPage from "../edWise/commonPage.js"

class LandingPage extends commonPage{
    constructor(){
        super();
        this.$usernameHeading=()=>$(`//label[@class="rz-label header-profilename"]`);
        this.$configButton=()=>$(`//span[text()="Configurations"]/parent::div`);
        this.$$configMenuCount=()=>$$(`//li[@class="rz-navigation-item config-sub-link"]`)
        this.$configEachElement=(index)=>$(`(//li[@id="WzL8ZlXk-E"]//li[@class="rz-navigation-item config-sub-link"])[${index}]`)
        this.$selectUser=(element)=>$(`//span[text()="${element}"]/ancestor::li[@class="rz-navigation-item config-item"]`);

    }
    /**
     * This function is to load the Url and maximize the window
     */

    async loadUrl(){
        await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net/') ;
        await browser.maximizeWindow();
        await this.$usernameHeading().waitForDisplayed({timeout:dataSheet.timeout,timeoutMsg:"Header is not visible"})
    }

    /**
     * 
     * @param {string} $element 
     */

    async clickConfig($element){

        await this.$configButton().click
        let configElements=[]

        
        let count = await this.$$configMenuCount().length;

        // for(let i=1;i<=count;i++){
        //     let elementText=await this.$configEachElement(i).getText();
        //     configElements.push(elementText);
        
        // }
        // await this.$selectUser($element).waitForDisplayed({timeout:dataSheet.timeout,timeoutMsg:"Element is not visible"});
        // return configElements;
    }
    /**
     * 
     * @param {string} $element
     */

    async clickUser($element)
    {
        await this.$selectUser($element).click
        
    
    }



}
export default new LandingPage()