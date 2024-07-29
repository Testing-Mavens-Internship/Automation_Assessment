import CommonPage from "./common.js";
class AddRequest extends CommonPage{
    constructor(){
        super();
        this.$requestBox=()=>$('//div[@class="add-request-search-filters"]');
        this.$selectFields = (name) => $(`//label[text()="${name}"]/following-sibling::div[@class="rz-dropdown-trigger  rz-corner-right"]`);
        this.$organisation=()=>$('//li[@aria-label="Concho Elementary District"]');
        this.$$requestCards=()=>$$(`//p[@class="navigation-content"]`);
        this.$requestcard=(index)=>$(`(//p[@class="navigation-content"])[${index}]`)
        this.$category=()=>$('//li[@aria-label="Charter Authorizer"]');
        this.$$categoryCard=()=>$$(' //p[@class="navigation-content"]')
        this.$categoryCards=(index)=>$(`(//p[@class="navigation-content"])[${index}]`);
        this.$future=()=>$('//div[@class="rz-radiobutton-box"]');
        this.$calender=()=>$('//input[@name="DatePickerDateOnlyType"]');
        this.$date=(date)=>$(`//span[text()="${date}"]`);
        this.$submit=()=>$('//button[text()="Review and Submit"]');
        this.$organisationCategory=(name)=>$(`//p[text()="${name}"]`);
        this.$relationship=()=>$(`//span[@class='sub-relationships-form']`)
        this.$addRelationship=()=>$('//div[@class="relationships-form"]/div[@class="form-row mbt-1"][1]//div[@class="add-panel"]/button[@class="btn btn-primary button-add-panel"]')
        this.$organisationRequired=()=>$(`//span[@class='rz-cell-data']/div[@class='rz-message rz-messages-error']`);
        this.$relationTypeRequired=()=>$(`//span[@class='rz-cell-data']/div[@class='rz-message rz-messages-error xh-highlight']`);
        this.$relationTypeOptions=()=>$(`//span[@class='rz-cell-data']//div/label[@class="rz-dropdown-label rz-inputtext xh-highlight"]`)
        this.$organisationName=()=>$(`//div[@class='relationships-form-select']//div/span[@class="rz-dropdown-trigger-icon rzi rzi-chevron-down xh-highlight"]`)
        this.$selectType=(type)=>$(`//li[@aria-label="${type}"]`);
        this.$spinner=()=>$('//div[@class="lds-spinner"]');

        this.$reasonForChange=()=>$(`(//textarea[@name="ReasonForChange"])[1]`)
        this.$uploadIcon=()=>$(`(//label[@for="docsUpload"])[1]`)
        this.$inputFile=()=>$(`(//div[contains(@class,"upload-file-sec")]//following::input[@id="docsUpload"])[1]`)
        this.$alertPopupMessage=()=>$(`(//div[@class="rz-dialog-content"]//p[@class="rz-dialog-alert-message"])[1]`)
        this.$alertOkButton=()=>$(`(//div[@class="rz-dialog-alert-buttons"]//button)[1]`)
        this.$saveButton=()=>$(`//span[text()="Save"]/..`)


    }

    /**
     * Select Cochise elementary district organisation
     */
    
    async selectOrganisation(){
        await this.$selectFields('Select Education Organization').click();
        await this.$organisation().click();

        let list=[]
            let itemCount=await this.$$requestCards()
            for(let item of itemCount){
                await item.waitForDisplayed({timeout:data.timeout,timeoutMsg:"List item is still not displayed"})
                list.push(await item.getText())
            }
            return list 

    }

    /**
     * Select category
     * @return array of category
     */
    async selectCategory(){
        await this.$selectFields('Select Category').click();
        await this.$category().click();
        let arrayCategory=[];
        for (let i=0;i<await this.$$categoryCard().length;i++){
            //await this.$categoryCards(i).waitForDisplayed({timeout:30000,timeoutMsg:'category cards are not displayed'});
            arrayCategory.push(await this.$categoryCards(i).getText())
        }
        return arrayCategory;
        

    }
    /**
     * Select a future Date
     */
    async selectTime(){
        await this.$future().click();
        await this.$calender().waitForClickable({timeout:10000,timeoutMsg:'Calender is not clickable'});
        await this.$calender().click();
        await this.$date(28).click();
        //await this.$organisationCategory().waitForDisplayed({timeout:10000,timeoutMsg:'organisation category is not displayed'})
        // await this.$submit().click();
    }
    /**
     * Click on organisation category in request cards under Charter Authorizer session
     */
    async selectOrganisationCategory(name){
        await this.$organisationCategory(name).click();
        await this.$spinner().waitForDisplayed({reverse:true,timeoutMsg:'spinner is not displayed'});

        await this.$relationship().waitForDisplayed({timeout:30000,timeoutMsg:'add relationship button is not displayed'});
    }
    /**
     * Method to click on add relationship and validate the Error message
     */
    async clickAddRelationship(){
        await this.$addRelationship().click();

        await this.$organisationRequired().waitForDisplayed({timeout:30000,timeoutMsg:'organisation required message is not displayed'});
        await this.$relationTypeRequired().waitForDisplayed({timeout:30000,timeoutMsg:'relation type required message is not displayed'});
    }
    /**
     * Select relationship type and Select organisation name
     */
    async selectType(type,name){
        await this.$relationTypeOptions().click();
        await this.$selectType(type).waitForDisplayed({timeout:30000,timeoutMsg:'select type is not displayed'});
        await this.$selectType(type).click();
    
        await this.$organisationName().click();
        await this.$selectType(name).waitForDisplayed({timeout:30000,timeoutMsg:'select type is not displayed'});
        await this.$selectType(name).click();
    }
    /**
     * Enterimg the reason for change
     */
    async enterReasonForChange(reason){
    
        await this.$reasonForChange().setValue(reason)
        await this.$uploadIcon().waitForDisplayed({timeout:30000,timeoutMsg:"Upload icon still not displayed"})
    }
    /**
     * Method to upload files
     */
    async uploadFile(path){
        await this.$uploadIcon().click();
        const filePath = 'path'
        const remoteFilePath = await browser.uploadFile(filePath);
        await this.$chooseFile().setValue(remoteFilePath);

    }
    /**
     * Click on the ok option in alert message
     */
    async clickAlertOk(){
        await this.$alertOkButton().click();
    }








}
export default new AddRequest();