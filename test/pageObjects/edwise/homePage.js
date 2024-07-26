import CommonPage from "./common.js";
class HomePage extends CommonPage {
    constructor() {
        super();
        
        this.$configuration=()=>$('//span[text()="Configurations"]');
        this.$filterOption=()=>$('//a[@title="Expand"]');
        this.$$elements=()=>$$('//span[@class="rz-navigation-item-text"]');
        this.$element=(index)=>$(`(//span[@class="rz-navigation-item-text"])${index}`);
        this.$selectUser=()=>$('//span[text()="Select User"]');
    }
    /**
     * Click on configuration and validate the dropdown elements
     * @returns array of dropDown elements
     */
    async clickConfiguration(){
        await this.$filterOption().waitForDisplayed({timeout:30000,timeoutMsg:'filter option is not displayed'});
        await this.$configuration().waitForClickable({timeout:30000,timeoutMsg:'configuration is not clickable'});
        await this.$configuration().click();
        let arrayElements=[]
        for(let i=0;i<await this.$$elements().length;i++){
            arrayElements.push(await this.$element(i).getText())
        }
        console.log(arrayElements)
        return arrayElements
    }

/**
 * Click on select user 
 */
    async clickSelectUser(){
        await this.$selectUser().waitForDisplayed({timeout:10000,timeoutMsg:'select user is not displayed'});
        await this.$selectUser().click();
    }
}
export default new HomePage();