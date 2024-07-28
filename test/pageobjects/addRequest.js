import Common from "./common.js";
class AddRequest extends Common{
    constructor(){
        super()
        this.$addRequestLink=()=>$(`//a[@href="/AddRequest"]`)
        this.$headerChange=()=>$(`//span[@class="back-change-requests"]`)
        this.$educationLabel=()=>$(`//span[text()="Education Organization"]`)
        this.$categoryLabel=()=>$(`//span[text()="Category"]`)
        this.$dateLabel=()=>$(`//span[text()="Effective Date"]`)
        this.$educationDropDown=()=>$(`//div[contains(@class,"add-request-")]//div/label[normalize-space()="Select Education Organization"]`)
        this.$educationOption=()=>$(`//li[@class="rz-dropdown-item "]/span[text()="Bowie Unified District"]`)
        this.$educationTextboxValue=()=>$(`//label[text()="Bowie Unified District"]`)
        this.$category=()=>$(`//div[contains(@class,"add-request-")]//div/label[normalize-space()="Select Category"]`)
        this.$categoryOption=()=>$(`//li[@aria-label="School"]`)
        this.$categoryTextboxValue=()=>$(`//label[text()="School"]`)
        this.$futureDateCheckbox=()=>$(`//div[contains(@class,"add-request-")]//div/label[normalize-space()="Future"]`)
        this.$calendar=()=>$(`//span[@class="rz-calendar rz-calendar-w-btn"]`)
        this.$date=()=>$(`//table[@class="rz-datepicker-calendar"]//tr/td/span[@class="rz-state-default" and text()="30"]`)
        this.$clickCalendar=()=>$(`//div[@class="add-input"]`)
        this.$$schollInfo=()=>$$(`//div[@class="add-request-card "]//img/following::p`)
        this.$organizationCategory=()=>$(`//div[@class="add-request-card "]//p[normalize-space()="Organization Categories"]`)
        this.$organizationHeader=()=>$(`(//div[@class="cr-header-university"])[1]`)
        this.$organizationcloseButton=()=>$(`(//div[@class="button-form-Actions"]/button[@class="save-button close-button"])[1]`)
        this.$loadIcon=()=>$(`(//div[@class="loader-home form-loading custom-loading"]/div[@class="lds-spinner"])[1]`)
        this.$changeRequestLink=()=>$(`//div[@class="rz-sidebar rz-sidebar-expanded sidebar"]//a[@href="/ChangeRequest"]`)
        this.$changeReqHeader=()=>$(`//div[@class="wizard-steps"]`)
        this.$relationshipLink=()=>$(`//div[@class="add-request-card "]//p[normalize-space()="Relationships"]`)
        this.$addRelationshipButton=()=>$(`(//div[@class="add-panel"]/button)[1]`)
        this.$nameRequiredMessage=()=>$(`//div[@class="rz-message rz-messages-error" and text()="Organization Name is required"]`)
        this.$loader=()=>$(`//div[@class="lds-spinner"]`)
        this.$organizationNameDropdown=()=>$(`//div[@class="rz-dropdown rz-state-empty rz-clear w-100"]`) 
        this.$organizationNameDropdownOption=()=>$(`//li[@class="rz-dropdown-item "]/span[normalize-space()="Bowie Unified District"]`)
        this.$reasonTextbox=()=>$(`(//textarea[@name="ReasonForChange"])[1]`)
        this.$upload=()=>$(`//div[1]/div[1]/div/div/div/div/div/form/div[1]/div[2]/div[6]/div/div/div[2]/label/img`)






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
        let infoList=[]
        const details=await this.$$schollInfo();
        for(let i=0;i<details.length;i++){
            const alldetails=await details[i].getText();
            infoList=push(alldetails)
            console.log(infoList);
        }
        if(infoList.length==details.length){
            console.log("All info are dispayed")
        }else{
            console.error("All info are not dislayed")
        }


    }

    /**
     * Method to select Category
     */
    async SelectCategory(){
        await this.$category().click();
        await this.$categoryOption().click();
    }

    /**
     * MEthod to select Effective Date
     */
    async SelectingEffectiveDate(){
        await this.$futureDateCheckbox().click(); 
        await this.$calendar().waitForDisplayed(({timeout:10000,timeOutMsg:"Calender still not enabled"}))
    }
    /**
     * Method to pic future date
     */

    async clickingOncalendar(){
        await this.$clickCalendar().click()
        await this.$date().waitForClickable();
        await this.$date().click();
        await browser.pause(5000)

    }
    /**
     * Method to click on Organization category
     */
    async clickingOnOrganizationCategory(){
        await this.$organizationCategory().click();
        await this.$loadIcon().waitForDisplayed(({timeout:5000,timeoutMsg:"still loading"}))
        await this.$organizationcloseButton().click()

    }
    /**
     * method to click on change request link
     */
    async clickOnChangeRequestLink(){
        await this.$changeRequestLink().click();
    }
    /**
     * Method to click on addRequest link
     */
    async clickaddRequest(){
        await this.$addRequestLink().click();
        await this.$headerChange().waitForDisplayed(({timeout:10000,timeoutMsg:"Header is still not displayed"}))
    }
    /**
     * Methood to select education organization adn validate the info details
     */
    async selectionOptionEducationOrganization(){
        await this.$educationDropDown().click();
        await this.$educationOption().click();
        let infoList=[]
        const details=await this.$$schollInfo();
        for(let i=0;i<details.length;i++){
            const alldetails=await details[i].getText();
            infoList=push(alldetails)
            console.log(infoList);
        }
        if(infoList.length==details.length){
            console.log("All info are dispayed")
        }else{
            console.error("All info are not dislayed")
        }


    }
    /**
     * Method to select Category
     */
    async SelectCategory(){
        await this.$category().click();
        await this.$categoryOption().click();
    }

     /**
     * MEthod to select Effective Date
     */
     async SelectingEffectiveDate(){
        await this.$futureDateCheckbox().click(); 
        await this.$calendar().waitForDisplayed(({timeout:10000,timeOutMsg:"Calender still not enabled"}))
    }

    /**
     * Method to pic future date
     */

    async clickingOncalendar(){
        await this.$clickCalendar().click()
        await this.$date().waitForClickable();
        await this.$date().click();
        await browser.pause(5000)

    }
    /**
     * Method to click on relationship link
     */
    async  clickingOnRelationShipLink(){
        await this.$relationshipLink().click();
    }

    /**
     * Method too click on Add relationship button
     */
    async clickOnAddRelationshipButton(){
        await this.$addRelationshipButton().click();
        await this.$loader().waitForDisplayed(({timeout:15000,timeOutMsg:"loader is still loading"}))
        await this.$nameRequiredMessage().waitForDisplayed(({timeout:5000,timeoutMsg:"Organization Name is required message still not displayed"}))

    }

    /**
     * Method to select organization from relationship modal
     */
    async selectNamFromDropdown(){
        await this.$organizationNameDropdown().click();
        await this.$organizationNameDropdownOption().click();
    }
    /**
     * Method to enter iputs into reason textbox
     */
    async enteringReason(){
        await this.$reasonTextbox().setValue("Transportation problem");
    }

    /**
     * MEthod to upload file
     */
    async clickOnUploadFile(){

        const filepath='./files/assessment.txt'
        const remoteFilePath=await browser.uploadFile(filepath)
        await this.$upload().setValue(remoteFilePath)
        await browser.pause(10000)
        // await this.$upload().click();
        // await browser.pause(10000)
    }    
}
export default new AddRequest()