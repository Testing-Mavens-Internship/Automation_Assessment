import CommonPage from "./common.js";
class AddRequest extends CommonPage{
    constructor(){
        super();
        this.$requestBox=()=>$('//div[@class="add-request-search-filters"]');
        this.$selectFields=(name)=>$(`//span[text()="${name}"]/parent::div/following-sibling::div`);
        this.$organisation=()=>$('//li[@aria-label="Concho Elementary District"]');
        this.$requestCards=()=>$(`//div[@class="add-request-navigation-icons"]`);
        this.$category=()=>$('//li[@aria-label="Charter Authorizer"]');
        this.$categoryCards=(index)=>$(`(//p[@class="navigation-content"])${index}`);
        this.$future=()=>$('//div[@class="rz-radiobutton-box"]');
        this.$calender=()=>$('//input[@name="DatePickerDateOnlyType"]');
        this.$date=(date)=>$(`//span[text()="${date}"]`);
        this.$submit=()=>$('//button[text()="Review and Submit"]');
        this.$organisationCategory=()=>$('//p[text()="Organization Categories"]');
    }
    /**
     * Select Cochise elementary district organisation
     */
    async selectOrganisation(){
        await this.$requestBox().waitForDisplayed({timeout:10000,timeoutMsg:'Request fields are not displayed'});
        await this.$selectFields('Education Organization').click();
        await this.$organisation().click();

    }

    /**
     * Select category
     * @return array of category
     */
    async selectCategory(){
        await this.$organisation().waitForDisplayed({timeout:10000,timeoutMsg:'Request fields are not displayed'});
        await this.$selectFields('Category').click();
        await this.$category().click();
        let arrayCategory=[];
        for (let i=0;i<await this.$requestCards().length;i++){
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
        await this.$submit().click();
    }
    /**
     * Click on organisation category in request cards under Charter Authorizer session
     */
    async selectOrganisation(){
        await this.$organisationCategory().waitForDisplayed({{timeout:10000,timeoutMsg:'organisation category is not displayed'}})
        await this.$organisationCategory().click();
    }
    /**
     * Get the attribute value for category
     */
    async getAttribute(){
        let category=await this.$category();
        let categoryAttribute= category.getAttribute('aria-label');
        return categoryAttribute
    }


}
export default new AddRequest();