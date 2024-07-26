import Common from "./edWiseCommon.js";

class Landing extends Common
{
    constructor()
    {
        super()
        this.$configurationLabel=()=>$(`//div[@class="rz-navigation-item-link"]`)
        this.$options=(option)=>$(`(//li[@class="rz-navigation-item config-sub-link"])[${option}]`)
        this.$$totalOptions=()=>$$(`//ul[@class="rz-navigation-menu"]//span[@class="rz-navigation-item-text"]`)
        this.$selectUserOption=()=>$(`(//a[@class="rz-navigation-item-link"])[2]`)
        
    }

    /**
     * Click on configuration
     */
    async clickConfiguration()
    {
        
        // await this.$configurationLabel().waitForClickable();
        await this.$configurationLabel().click();
        const optionArray=[]
        const totalOptions=await this.$$totalOptions().length;
        for(let i=1;i<=totalOptions;i++)
        {
           const value=await this.$options(i).getText()
           const option=value.replace("account_circle\n","")
            optionArray.push(option)
        }
        console.log("aaaa",optionArray)

    }

    /**
     * Select user Option
     */
    async selectUser()
    {
        await this.$selectUserOption().click()
    }
}
export default new Landing()