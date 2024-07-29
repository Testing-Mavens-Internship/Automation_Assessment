import CommonPage from "./common.js";

class HomePage extends CommonPage {
    constructor() {
        super();
        
        this.$configuration=()=>$('//div[@class="rz-navigation-item-link"]'); 
        this.$$elements=()=>$$('//li[@class="rz-navigation-item config-sub-link"]//span[@class="rz-navigation-item-text"]');
        this.$element=(index)=>$(`(//li[@class="rz-navigation-item config-sub-link"]//span[@class="rz-navigation-item-text"])[${index}]`);
        this.$selectUser=()=>$('//a[@href="/SelectUser"]');

    }
    /**
     * Click on configuration and validate the dropdown elements
     * @returns array of dropDown elements
     */
    async clickConfiguration(){
        
        await this.clickButton(this.$configuration());
        let dropDownElements=[]
        for(let i=1;i<=await this.$$elements().length;i++){
            dropDownElements.push(await this.$element(i).getText())
        }
         await this.$selectUser().waitForDisplayed({timeout:30000,timeoutMsg:'select user is not displayed'});
        return dropDownElements;
        
    }
    /**
    * Click on select user 
    */
    async clickSelectUser(){
        await this.clickButton(this.$selectUser());
    }
}
export default new HomePage();