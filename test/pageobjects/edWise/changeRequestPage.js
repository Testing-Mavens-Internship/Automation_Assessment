import CommonPage from "./commonPage.js";
import dataSheet from "../../testData/edWiseData.json"assert{type:'json'}

class ChangeRequestPage extends CommonPage{
    constructor(){
        super();
        this.$addRequestButton=()=>$(`//button[@class="add-request-button"]`)
        this.$dropDowns=(value)=>$(`//label[text()="${value}"]/ancestor::div[@class="rz-dropdown"]`)
        this.$eduOrganisationHeader=()=>$(`//label[text()="Select Education Organization"]`)
        this.$selectSchool=(school)=>$(`//div[@id="popup-b8L227qD-E"]//li[@class="rz-dropdown-item "]//span[text()="${school}"]`)
        this.$selectSchoolBox=()=>$(`//div[@id="b8L227qD-E"]//label`)
        this.$localAgencyBox=()=>$(`//div[@id="NazZd4RPGk"]//label`)
        this.$futureDateButton=()=>$(`//div[@id="GolMLY-wmE"]//div[@class="rz-radiobutton-box"]`)
        this.$calanderButton=()=>$(`//input[@name="DatePickerDateOnlyType"]`);
        this.$futureDate=()=>$(`//span[text()="28"]`)
        this.$menuBoxes=(boxName)=>$(`//div[@class="card-details"]//div//p[text()="${boxName}"]`)
        

    }
/**
 * Here we click on the Add Request Button
 */
    async clickAddRequest(){
        await this.$addRequestButton().click;
        await this.$eduOrganisationHeader().waitForDisplayed({timeout:dataSheet.timeout,timeoutMsg:"Element is not visible"});
    }
    /**
     * Here we are selecting the school
     * @param {string} school 
     */

    async selectSchool(school){
        await this.$dropDowns("Select Education Organization").click
        await this.$selectSchool(school).click
        await this.$selectSchoolBox().waitForDisplayed({timeout:dataSheet.timeout,timeoutMsg:"Element is not visible"});

    }
    /**
     * here we are selecting the agency.
     * @param {string} agency 
     */
    async selectAgency(agency){
        await this.$dropDowns("Select Local Education Agency").click
        await this.$selectAgency(agency).click
        await this.$selectAgencyBox().waitForDisplayed({timeout:dataSheet.timeout,timeoutMsg:"Element is not visible"});
    }
    /**
     * here we are slecting a date
     */

    async selectDate(){
        await this.$futureDateButton().click


    }
    /**
     * Here we aer selecting relationship category
     * @param {string} boxName 
     */
    async selectMenuBox(boxName){
        await this.$menuBoxes(boxName).click
    }

    

}

export default new ChangeRequestPage()
