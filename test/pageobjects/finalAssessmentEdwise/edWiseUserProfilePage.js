import Common from "./edWiseCommonPage.js";

class UserProfile extends Common
{
    constructor()
    {
        super()
        this.$userProfileName=()=>$('//label[@class="rz-label header-profilename"]')
        this.$addRequestButton=()=>$('//div[@class="rz-navigation-item-wrapper rz-navigation-item-wrapper-active"]')
        this.$dropdownHeader=(header)=>$(`//span[text()="${header}"]`)
        this.$detailsDropDown=(dropDownName)=>$(`//span[text()="${dropDownName}"]/parent::div/following-sibling::div/label`)
        this.$educationOrganizationOption=()=>$('//li[@aria-label="San Simon Unified District"]')
        this.$categoryOption=()=>$('//li[@aria-label="School"]')
        this.$organizationNameDisplayed=()=>$('//span[@class="add-request-organization-name"]')
        this.$categoryNameDisplayed=()=>$('//div[@class="add-request-organization-section-category-name"]/span[@class="add-request-organization-id"]')
        this.$futureDateCheckBox=()=>$('//div[@class="rz-radio-button-list-horizontal"]//label[text()="Future"]')
        this.$calendar=()=>$('//input[@name="DatePickerDateOnlyType"]')
        this.$yearLabel=()=>$('//div[@style="height:auto;width:80px;margin-top:5px;text-align:left;"]')
        this.$yearSelect=()=>$('//span[text()="2025"]')
        this.$monthLabel=()=>$('//div[@style="height:auto;width:120px;margin-top:5px;text-align:left;"]')
        this.$monthSelect=()=>$('//li[@aria-label="August"]')
        this.$date=()=>$('//span[@class="rz-state-default"][text()="15"]')
        this.$websiteText=()=>$('//p[@class="navigation-content"][text()="Website"]')
    }

    /**
     * Click on Add Request Button
     */
    async clickAddRequestButton()
    {
        await this.$addRequestButton().click()
        await this.$dropdownHeader("Education Organization").waitForDisplayed({timeout:40000,timeOutMsg:"Header still not displayed"})

    }

    /**
     * Select School and Category
     */
    async selectSchoolAndCategory()
    {
        await this.$detailsDropDown("Education Organization").click()
        await this.$educationOrganizationOption().scrollIntoView();
        await this.$educationOrganizationOption().waitForClickable();
        await this.$educationOrganizationOption().click()
        await this.$detailsDropDown("Category").waitForClickable()
        await this.$detailsDropDown("Category").click()
        await this.$categoryOption().scrollIntoView()
        await this.$categoryOption().waitForClickable()
        await this.$categoryOption().click()
        await this.$organizationNameDisplayed().waitForDisplayed({timeout:40000,timeOutMsg:"Header still not displayed"})
    }

    /**
     * Validate School name and category
     */
    async validateNameAndCategory(school,category)
    {
        const name=await this.$organizationNameDisplayed().getText()
        const type=await this.$categoryNameDisplayed().getText()
        if(name==school)
        {
            if(category==type)
            {
                return true;
            }
        }
        else
        {
            return false
        }
    }

    /**
     * Click on future and select date
     */
    async selectDate()
    {
        await this.$futureDateCheckBox().click()
        const status=await this.$calendar().getAttribute('tabindex')
        await this.$calendar().waitForClickable()
        return status
        
    }

    /**
     * Select Date
     */
    async selectDateFromCalender()
    {
        await this.$calendar().click()
        await this.$monthLabel().waitForClickable()
        await this.$monthLabel().click()
        await this.$monthSelect().scrollIntoView()
        await this.$monthSelect().waitForClickable()
        await this.$monthSelect().click()
        await this.$yearLabel().waitForClickable()
        await this.$yearSelect().waitForClickable()
        await this.$yearSelect().click()
        await this.$date().waitForClickable()
        await this.$date().click()
    }
}
export default new UserProfile()