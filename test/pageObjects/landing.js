import CommonPage from "./common.js";

class landingPage extends CommonPage{
    constructor(){
        super();
         this.$userNameHeader=()=>$(`//div[@class="header-profile-menu"]`);
         this.$configurations=()=>$(`//div[contains(@class,"item-link")]`);
         this.$$dropDownMenu=()=>$$(`//ul[@class="rz-navigation-menu"]//span`);
         this.$selectUser=()=>$(`//a[@href="/SelectUser"]`);
         this.$$validateSelectUser=()=>$$(`//div[@class="add-request-search-filters"]`);

    }
    
    /**
     * To get the texts of dropDown elements of configurations
     * @returns string
     */
    async clickConfigurations() {
        await this.$configurations().click();
       
        let dropDownElements = await this.$$dropDownMenu();
        const elementsOfDropDown = [];
        for (let i = 0; i < dropDownElements.length; i++) {
            const text = await dropDownElements[i].getText();
            elementsOfDropDown.push(text);
        }
        return elementsOfDropDown;
    }
    
    /**
     * To click on select user option from the dropdown menu
     */
    async selectUserOption(){
        await this.$selectUser().click();
    }
    
    /**
     * To validate the presence of two boxes for selecting user 
     */
    async validateTwoBoxesPresence() {
        const elements = await this.$$validateSelectUser();
        const count = elements.length;
        if (count === 2) {
            console.log('Two boxes are present.');
        } else {
            console.error(`Expected 2 boxes, but found ${count}.`);
        }
        return count;
    }


}
export default new landingPage();