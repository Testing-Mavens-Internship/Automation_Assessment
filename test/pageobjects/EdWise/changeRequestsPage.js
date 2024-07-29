import CommonPage from "./commonPage.js";

class ChangeRequestsPage extends CommonPage {

    constructor()
    {
        super()
        this.$selectedUserName=()=> $('//label[text()="Sachin"]')
        this.$changeRequestsHeader=()=> $('/html/body/div[2]/div[2]/div[3]/div[1]/a/span')
        this.$addRequestButton=()=> $('//span[@class="add-request-title" and text()="Add Request"]')
        this.$educationOrganizationDropdown=()=> $('//label[text()="Select Education Organization"]')
        this.$alpineElementaryDistrict=()=> $('/html/body/div[4]/div/ul/li[1]/span')
        this.$alpineHeader=()=> $('/html/body/div[2]/div[2]/div[3]/div[3]/div/div[1]/div/span')
        this.$futureRadioButton=()=> $('//label[text()="Future"]')
        this.$calendar=()=> $('//input[@id="DatePickerDateOnlyType"]')
        this.$monthDropdown=()=> $('(//label[@class="rz-dropdown-label rz-inputtext "])[3]')
        this.$august=()=> $('/html/body/div[7]/div/ul/li[8]')
        this.$yearDropdown=()=> $('(//label[@class="rz-dropdown-label rz-inputtext "])[4]')
        this.$year2025=()=> $('/html/body/div[8]/div/ul/li[2]')
        this.$day15=()=> $('/html/body/div[6]/div/div[2]/table/tbody/tr[3]/td[5]/span')
        this.$organizationCategories=()=> $('/html/body/div[2]/div[2]/div[3]/div[3]/div/div[4]/div[1]/div/div[4]/a/p')
        this.$organizationCategoryDetailsHeader=()=> $('/html/body/div[1]/div[1]/div/div/div/div/div/div/div[1]/div/div[1]/span')
        this.$schoolHeader=()=> $('/html/body/div[1]/div[1]/div/div/div/div/div/div/div[1]/div/div[2]/span')
        this.$alpineElementaryDistrictHeader=()=> $('/html/body/div[1]/div[1]/div/div/div/div/div/div/div[2]/div/div')
        this.$operationalStatusDropdown=()=> $('/html/body/div[1]/div[1]/div/div/div/div/div/form/div[1]/div[2]/div[1]/div[2]/div')
        this.$future=()=> $('/html/body/div[10]/div/ul/li[4]')
        this.$schoolCategoryDropdown=()=> $('/html/body/div[1]/div[1]/div/div/div/div/div/form/div[1]/div[2]/div[1]/div[3]/div/div[1]/label')
        this.$elementarySchool=()=> $('/html/body/div[11]/div/ul/li[2]')
        this.$schoolTypeDropdown=()=> $('/html/body/div[1]/div[1]/div/div/div/div/div/form/div[1]/div[2]/div[1]/div[4]/div/div[1]/label')
        this.$alternative=()=> $('/html/body/div[12]/div/ul/li[2]')
        this.$mediumOfInstructionDropdown=()=> $('/html/body/div[1]/div[1]/div/div/div/div/div/form/div[1]/div[2]/div[1]/div[5]/div/div[1]/label')
        this.$faceToFaceInstruction=()=> $('/html/body/div[13]/div/ul/li[4]')
        this.$titleDropdown=()=> $('/html/body/div[1]/div[1]/div/div/div/div/div/form/div[1]/div[2]/div[1]/div[6]/div/div[1]/label')
        this.$missing=()=> $('/html/body/div[14]/div/ul/li[1]')
        this.$accreditationStatusDropdown=()=> $('/html/body/div[1]/div[1]/div/div/div/div/div/form/div[1]/div[2]/div[1]/div[7]/div/div[1]')
        this.$notStateAccredited=()=> $('/html/body/div[15]/div/ul/li[1]')
        this.$grade1=()=> $('/html/body/div[1]/div[1]/div/div/div/div/div/form/div[1]/div[2]/div[2]/div/div/div/div[1]/label')
        this.$grade2=()=> $('/html/body/div[1]/div[1]/div/div/div/div/div/form/div[1]/div[2]/div[2]/div/div/div/div[2]/label')
    }

    /**
     * Click on "Add Request" option
     */
    async clickOnAddRequest()
    {
        await this.$addRequestButton().click()
    }

    /**
     * Click on Education Organization dropdown and select "Alpine Elementary District" option
     */
    async clickEducationalOrganizationDropdown()
    {
        await this.$educationOrganizationDropdown().click()
        await this.$alpineElementaryDistrict().click()
    }

    /**
     * Select Effective Date as "future"
     */
    async clickFutureRadioButton()
    {
        await this.$futureRadioButton().click()
    }

    /**
     * Click on calender and select "Aug 15, 2025" from calendar
     */
    async clickCalendar()
    {
        await this.$calendar().click()
        await this.$monthDropdown().click()
        await this.$august().scrollIntoView()
        //await this.$august().waitForDisplayed({timeout : 5000,timeoutMsg: 'Could not find "August" within the requested time'})
        await this.$august().click()
        await this.$yearDropdown().click()
        await this.$year2025().scrollIntoView()
        //await this.$year2025().waitForDisplayed({timeout : 5000,timeoutMsg: 'Could not find "August" within the requested time'})
        await this.$year2025().click()
        await this.$day15().click()
    }

    /**
     * Click on "Organization Categories" option
     */
    async clickOrganizationCategories()
    {
        await this.$organizationCategories().click()
    }

    /**
     * Enter values in "Organization Categories"
     */
    async enterValues()
    {
        await this.$operationalStatusDropdown().click()
        await this.$future().click()
        await this.$schoolCategoryDropdown().click()
        await this.$elementarySchool().click()
        await this.$schoolTypeDropdown().click()
        await this.$alternative().click()
        await this.$mediumOfInstructionDropdown().click()
        await this.$faceToFaceInstruction().click()
        await this.$titleDropdown().click()
        await this.$missing().click()
        await this.$accreditationStatusDropdown().click()
        await this.$notStateAccredited().click()
        await this.$grade1().click()
        await this.$grade2().click()
    }



}

export default new ChangeRequestsPage()
