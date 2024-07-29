import CommonPage from "./common.js";
import time from '../testData/data.json' assert {type : 'json'} 

class ChangeRequest extends CommonPage{
    constructor(){
        super();
            this.$educationHeader=()=>$(`//div[@class="search-education-title"]/span[contains(text(),"Education")]`);
            this.$categoryHeader=()=>$(`//div[@class="search-education-title"]/span[normalize-space()="Category"]`);
            this.$DateHeader=()=>$(`//div[@class="search-education-title"]/span[normalize-space()="Effective Date"]`);
            this.$organization=()=>$(`//label[text()="Select Education Organization"]`);
            this.$selectOrganization=()=>$(`//li[@aria-label="Alpine Elementary District"]`);
            this.$detailsIcon=()=>$(`//div[@class="card-details"]`);
            this.$category=()=>$(`//label[text()="School"]`);
            this.$selectCategory=()=>$(`//li[@aria-label="Charter Authorizer"]`);
            this.$clickFuture=()=>$(`(//div[@class="rz-radiobutton"])[2]`);
            this.$validateChange=()=>$(`//div[@class="rz-radiobutton-box rz-state-active"]`);
            this.$calendarIcon=()=>$(`//span[contains(@class,"calendar-w-btn")]`);
            this.$$currentDates=()=>$$(`//span[@class="rz-state-default"]`);
            this.$$previousDates=()=>$$(`//span[@class="rz-state-default rz-state-disabled"]`);
            this.$$nextMonthDates=()=>$$(`//span[@class="rz-state-default rz-datepicker-other-month"]`);
            this.$organizationalCategory=()=>$(`//p[text()="Organization Categories"]`);
    }

    /**
     * To select an educational organization from dropdown
     */
    async selectEduCationalOrganization(){
        await this.$organization().click();
        await this.$selectOrganization().click();

    }

    /**
     * To select a category from dropdown
     */
    async selectCategory(){
        await this.$category().click();
        await this.$selectCategory().click();

    }

    /**
     * To change from default
     */
    async changeDefault(){
        await this.$clickFuture().click();
        await this.$validateChange().waitForDisplayed({timeout: time.timeOutMedium});
    }

    /**
     * to validate change
     */
    async validateChange(){
        const element = await this.$validateChange()
        const attributeValue = await element.getAttribute('class');
        return attributeValue;
    }

    /**
     * To validate changes in calendar
     */
    async validateCalender(){
        await this.$calendarIcon().click();
        
        const previousDatesElements = await this.$$previousDates();
        for (let element of previousDatesElements) {
            const state = await element.getAttribute('class');
            if (state.includes('disabled')) {
                return true;
            }
        } 
    
        const nextMonthDatesElements = await this.$$nextMonthDates();
        for (let element of nextMonthDatesElements) {
            const state = await element.getAttribute('class');
            if (state.includes('other-month')) {
                return true;
            }
        }

        const currentDatesElements = await this.$$currentDates();
        for (let element of currentDatesElements) {
            const state = await element.getAttribute('class');
            if (!state.includes('disabled')) {
                return true;
            }
        }
        const currentDate = currentDatesElements[1];
        await currentDate.click();

        return true;
    }

    /**
     * To click on organizational Category icon
     */
    async clickOrganizationalCategory(){
        await this.$organizationalCategory().waitForClickable({timeout: time.timeOutMedium});
        await this.$organizationalCategory().click();
    }


}

export default new ChangeRequest();