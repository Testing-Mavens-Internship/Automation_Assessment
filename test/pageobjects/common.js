import data from "../../testData/data.json" assert{type:"json"}
export default class Common{
    constructor(){
        this.$usernameHeader=()=>$(`//label[text()="Username"]`)
        
    }

    /**
     * method to launch the url in the browser
     */
    async launchUrl(){
        await browser.maximizeWindow()
        await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net")
        await this.$usernameHeader().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Header is still not displayed"})
    }

    /**
     * common method for button clicks
     * @param {locator} locator 
     */
    async clickButton(locator){
        await locator.waitForDisplayed({timeout:data.timeout,timeoutMsg:"Button still not displayed"})
        // await locator.waitForClickable({timeout:data.timeout,timeoutMsg:"Button still not clicked"})
        await locator.click()
    }
    async validateDropdownList(locator){
        let list=[]
        let itemCount=await locator
        for(let item of itemCount){
            await item.waitForDisplayed({timeout:data.timeout,timeoutMsg:"List item is still not displayed"})
            list.push(await item.getText())
        }
        return list      
    }
}
