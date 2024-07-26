import Common from "./common.js";
class Landingpage extends Common{
    constructor(){
        super()
        this.$configuration=()=>$(`//div[@class="rz-navigation-item-link"]`)
        this.$$lists=()=>$$(`//a[@class="rz-navigation-item-link"]`)
        

    }
    /**
     * Method to click on configuration
     */
    async clickOnconfiguration(){
        let finalList=[];
        await this.$configuration().click();
        const displayedlist=await this.$$lists().getText();
        finalList.push(displayedlist);
        expect(await finalList.isDisplayed()).withContext("list is not displayed").toBeTrue();
    }


}
export default new Landingpage