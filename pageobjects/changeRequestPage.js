import CommonPage from "./commonPage.js";


class ChangeRequestPage extends CommonPage{
    constructor(){
        super();

        this.$addRequestMenu = ()=> $(`//a[@href='/AddRequest']`);
        this.$approvalQueueMenu = ()=> $(`//a[@href='/ApproverSummary']`);
        this.$changeRequestFieldsLabel = (label)=> $(`//span[normalize-space()='${label}']`);
        this.$changeRequestFields = (field)=> $(`//label[normalize-space()='${field}']`);
        this.$$educationalOrganizationDropDownOptions = ()=> $$(`//div[contains(@style, "z-index: 2000")]//li/span`);
        this.$educationalOrganizationDropDownOption = (option)=> $(`(//div[contains(@style, "z-index: 2000")]//li/span)[${option}]`);
        this.$selectEducationalOrganizationOption = (option)=> $(`//li[@aria-label="${option}"]`);
        this.$$addRequestCards = ()=> $$(`//div[@class="add-request-new-data"]//child::div[@class="add-request-card "]//p`);
        this.$addRequestCard = (item)=> $(`(//div[@class="add-request-new-data"]//child::div[@class="add-request-card "]//p)[${item}]`);
        this.$$categoryOptions = ()=> $$(`//li[@aria-label="Charter Authorizer"]/parent::ul/li`);
        this.$categoryOption = (item)=> $(`(//li[@aria-label="Charter Authorizer"]/parent::ul/li)[${item}]`);
        this.$futureDate = ()=> $(`//label[normalize-space()='Future']`);
        this.$calender= ()=> $(`//input[@id='DatePickerDateOnlyType']`);
        this.$pastDate = ()=> $(`//span[normalize-space()='25']`);
        this.$date = ()=> $(`//span[normalize-space()='29']`);
        // this.CommonPageObj = new CommonPage();
        this.$organizationCategoryDiv = ()=> $(`//div[@class='add-request-card progress-active-sections']`);
        this.$categoryInReview = ()=> $(`//span[@class='review-category-name']`);
        this.$sectionInReview = ()=> $(`//p[normalize-space()='Organization Category Details']`);
        this.$closeButton = ()=> $(`//span[contains(@class,'close-panel-title')]`);
        this.$changeRequestPageHeader = ()=> $(`//h6[normalize-space()='Change Requests']`);
        this.$addRequestButton = ()=> $(`//button[contains(@class,'add-request-button')]`);
        this.$relationship = ()=> $(`//a[@class="add-request-anchor-navigation"]/p[text()="Relationships"]`);
        this.$reasonForChange = ()=> $(`(//textarea[@name="ReasonForChange" ])[1]`);
        this.$saveButton = ()=> $(`//button[contains(@class,'save-button')]`);
        this.$uploadFileButton = ()=> $(`(//div/input[@type="file"])[1]`);

    }
/**
 * 
 * Method to extract the text from the dropdown
 * returns an array
 */
    async extractTextFromElements(){
        let extractedElementsArray = [];
        for(let i = 0; i < await this.$$educationalOrganizationDropDownOptions().length; i++){
            extractedElementsArray.push(await this.$educationalOrganizationDropDownOption(i+1).getText());
        }
        return extractedElementsArray
    }
/**
 * 
 * Method to validate the change request card
 * returns an array
 */
    async validateChangeRequestCard(){
        let cardTextArray = [];
        await this.waitForElement(await this.$addRequestCard(1));
        for(let i = 0; i < await this.$$addRequestCards().length; i++){
            cardTextArray.push(await this.$addRequestCard(i+1).getText());
        }
        return cardTextArray;
    }
/**
 * 
 * @returns an array of category options
 * Method to validate the category options
 */
    async validateCategoryOptions(){
        await this.waitForElement(await this.$categoryOption(1));
        let categoryTextArray = [];
        for(let i = 0; i < await this.$$categoryOptions().length; i++){
            categoryTextArray.push(await this.$categoryOption(i+1).getText());
        }
        return categoryTextArray;
    }
/**
 * 
 * Method to pick a date from the
 */
    async pickADate(){
        // await this.clickElementButton(await this.$calender());
        await this.clickElementButton(await this.$date());
    }

    /**
     * @returns a boolean value
     * Method to validate the review
     */
    async reviewChangerequest(){
        await this.clickElementButton(await this.$organizationCategoryDiv());
        let categoryName = await this.$categoryInReview().getText();
        let sectionName = await this.$sectionInReview().getText();
        if(categoryName === "Charter Authorizer" || sectionName === "Organization Category Details"){
            return true
    }else{
        return false
    }
}

async fillRelationshipForm(reason){
    await this.$reasonForChange().setValue(reason);
    await this.uploadFile();
}

/**
 * Method to upload file
 */
async uploadFile()
{
    const filePath = '../assets/jdbc.pdf';
    const remoteFilePath = await browser.uploadFile(filePath)

    await this.$uploadFileButton().setValue(remoteFilePath)
    await browser.pause(5000);
}

    
}export default new ChangeRequestPage();
