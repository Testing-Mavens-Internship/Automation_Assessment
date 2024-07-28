import Common from "./common.js";
class Landingpage extends Common{
    constructor(){
        super()
        this.$configuration=()=>$(`//div[@class="rz-navigation-item-link"]`)
        this.$$lists=()=>$$(`//li[@class="rz-navigation-item config-sub-link"]`)
        this.$loading=()=>$(`//div[@class="loader-home"]/div`)
        this.$advancedFilter=()=>$(`//span[normalize-space()="Advanced Filter"]`)
        this.$logoHeader=()=>$(`//div[contains(@class,"rz-stack rz-display-")]/img`)
        

    }
    /**
     * Method to click on configuration
     */
    async clickOnConfiguration() {
        let finalList = [];
        await this.$configuration().click();
        const displayedList = await this.$$lists(); 
        for (let i = 0; i < displayedList.length; i++) { 
            const text = await displayedList[i].getText(); 
            finalList.push(text); 
        }
        if(finalList==displayedList){
            console.log("validation successfull")
        }else{
            console.error("validation failed items list is not  displayed")
        }
   

       
    }


}
export default new Landingpage