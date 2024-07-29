import CommonPage from '../pageObjects/common.js';
import chooseNameAndRole from '../testData/data.json' assert {type: 'json'}
import time from '../testData/data.json' assert {type: 'json'}
import choose from '../testData/data.json' assert {type: 'json'}

class LoginPage extends CommonPage{
    constructor(){
        super();
          this.$selectUserName=()=>$(`(//label[text()="Select User"])[1]`);
          this.$selectUserRole=()=>$(`(//label[text()="Select Role"])[1]`);
          this.$selectUserAndRole=(item)=>$(`(//li/span[text()="${item}"])[last()]`);
          this.$selectButton=()=>$(`(//button[@type="button"][@class="rz-button rz-button-md rz-variant-filled rz-primary rz-shade-default cus-primary-btn"])[2]`);
          this.$loginHeader=()=>$(`//div[@class="header-profile-menu"]`);
          this.$addRequestButton=()=>$(`//button[@class="add-request-button"]`);
          this.$organization=()=>$(`//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder"][text()="Select Education Organization"]`);
          this.$category=()=>$(`//label[@class="rz-dropdown-label rz-inputtext  rz-placeholder"][text()="Select Category"]`);
          this.$chooseOrganization=(name)=>$(`//span[text()="${name}"]`);
          this.$chooseCategory=()=>$(`(//span[text()="School"])[last()]`);
          this.$validateHeaderOrganization=()=>$(`//div[@class="rz-display-flex rz-row rz-align-items-normal rz-justify-content-normal search-result-container"]//span[text()="Tombstone Unified District"]`);
          this.$validateHeaderCategory=()=>$(`//div[@class="rz-display-flex rz-row rz-align-items-normal rz-justify-content-normal search-result-container"]//span[text()="School"]`);
          this.$changeDefaultToFuture=()=>$(`(//label[@class="rz-radiobutton-label"])[last()]`);
          this.$validateFutureButton=()=>$(`//div[@class="rz-radiobutton-box rz-state-active"]`);
          this.$clickCalender=()=>$(`//span[@class="rz-calendar rz-calendar-w-btn"]`);
          this.$clickMonth=()=>$(`(//div[@class="rz-dropdown"])[3]`);
          this.$clickYear=()=>$(`(//div[@class="rz-dropdown"])[last()]`);
          this.$selectMonth=()=>$(`//li[@aria-label="August"]`);
          this.$selectYear=()=>$(`//li[@aria-label="2025"]`);


    }
    
    /**
     * To select username and role
     */
    async selectUserAndRole(){
        await this.$selectUserName().click();
        await this.$selectUserAndRole(chooseNameAndRole.name).click();
        await this.$selectUserRole().click();
        await this.$selectUserAndRole(chooseNameAndRole.selectRole).click();
        await this.$selectButton().click();
        await this.$loginHeader().waitForDisplayed({timeout: time.timeOutMedium, timeoutMsg: "Login header is not displayed"});
        await this.$addRequestButton().waitForDisplayed({timeout: time.timeOutMedium, timeoutMsg: "Button is not displayed"});

    }
    
    /**
     * To click on add request button
     */
    async addRequest(){
        await this.$addRequestButton().click();
    }
    
    /**
     * To select an organization and a category
     */
    async organizationAndCategory(){
       await this.$organization().click();
       await this.$chooseOrganization(choose.organization).click();
       await this.$category().click();
       await this.$chooseCategory().click();
    }
    
    /**
     * To click on future option
     */
    async changeDefaultOption(){
        await this.$changeDefaultToFuture().click();
    }
    
    /**
     * To validate change of future option after clicked
     */
    async validateChange(){
        const changeAfterClicked= await this.$validateFutureButton().getAttribute('class');
        return changeAfterClicked;

    }
    
    /**
     * To click on calender and select a date
     */
    async selectDate(){
        await this.$clickCalender().click();
        await this.$clickMonth().waitForDisplayed({timeout: 5000,timeoutMsg: "Month is not displayed"});
        await this.$clickMonth().click();
        await this.$selectMonth().click();
        await this.$clickYear().click();
        await this.$selectYear().click();
    }
}
export default new LoginPage();

