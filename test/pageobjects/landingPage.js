import Common from "./common.js";
import wait from "../../testData/time.json"assert{type:"json"}
let minTimeout=wait.time.min;
let midTimeout=wait.time.mid;
let maxTimeout=wait.time.max 
class LandingPage extends Common{
    constructor(){
        super()
        this.$configurationLink=()=>$(`//div[@class="rz-navigation-item-link"]`)
        this.$selectUserHeader=()=>$(`//a[@href="/SelectUser"]`)
        this.$selectUserLink=()=>$(`//a[@href="/SelectUser"]`)
        this.$dropdownBox=()=>$(`//div[@class="rz-p-0 rz-p-md-12"]//div[contains(@class,"-flex-start rz-p-4")]`)
    }
    /**
     * Method to click on configuration Link
     */
    async clickOnConfigurationsLink(){
        await this.$configurationLink().waitForClickable()
        await this.$configurationLink().click();
    }
    /**
     * Method to click on select user link 
     */
    async clickOnselectUserLink(){
        await this.$selectUserLink().click();
        await this.$dropdownBox().waitForDisplayed(({timeout:midTimeout,timeoutMsg:"Dropdown boxs still no displayed"})) 
    }
    
}
export default new LandingPage();