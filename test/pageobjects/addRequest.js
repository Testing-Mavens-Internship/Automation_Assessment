import Common from "./common";
class AddRequest extends Common{
    constructor(){
        super()
        this.$addRequestLink=()=>$(`//a[@href="/AddRequest"]`)
        this.$headerChange=()=>$(`//span[@class="back-change-requests"]`)
        this.$educationLabel=()=>$(`//span[text()="Education Organization"]`)
        this.$categoryLabel=()=>$(`//span[text()="Category"]`)
        this.$dateLabel=()=>$(`//span[text()="Effective Date"]`)
        this.$educationDropDown=()=>$(`//div[@id="JiPA4qqvXU"]`)
        this.$educationOption=()=>$(`//li[@class="rz-dropdown-item "]/span[text()="Bowie Unified District"]`)
        this.$educationTextboxValue=()=>$(`//label[text()="Bowie Unified District"]`)
        this.$category=()=>$(`//div[@id="ZkENMq-X00"]`)
        this.$categoryOption=()=>$(`//li[@aria-label="School"]`)
        this.$categoryTextboxValue=()=>$(`//label[text()="School"]`)
        this.$futureDate=()=>$(`//div[@id="W--sIqa9hk"]`)



    }
    /**
     * Method to click on AddRequest Link
     */
    async clickOnAddRequestLink(){
        await this.$addRequestLink().click();
        await this.$headerChange().waitForDisplayed(({timeout:10000,timeoutMsg:"Header is still not displayed"}))
    }

    /**
     * Method to select option from education organization
     */
    async selectionOptionEducationOrganization(){
        await this.$educationDropDown().click();
        await this.$educationOption().click();

    }

    /**
     * Method to select Category
     */
    async SelectCategory(){
        await this.$category.click();
        await this.$categoryOption.click();
    }

    /**
     * MEthod to select Effective Date
     */
    async SelectingEffectiveDate(){
        await this.$futureDate().click(); 
    }
}
export default new AddRequest()