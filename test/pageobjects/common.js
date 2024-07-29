import data from "../testData/timeout.json" assert{type:"json"}
export default class Common{
    constructor(){
        this.$usernameHeader=()=>$(`//label[text()="Username"]`)
    }
    /**
     * method to launch url of the website
     */
    async launchUrl(){
        await browser.maximizeWindow()
        await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net")
    }
    /**
     * method to clickButton
     * @param {locator} locator 
     */
    async clickButton(locator){
        await locator.click();
    }
    /**
     * method to validateDropdownList
     * @param {locator} locator 
     * @returns array 
     */
    async validateDropdownList(locator){
        let list=[]
        let itemCount=await locator
        for(let item of itemCount){
            await item.waitForDisplayed({timeout:data.time,timeoutMsg:"List item is still not displayed"})
            list.push(await item.getText())
        }
        return list      
    }
}




