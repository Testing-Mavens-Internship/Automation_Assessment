import landingPage from "../pageobjects/EdWise/landingPage.js"
import selectUserPage from "../pageobjects/EdWise/selectUserPage.js"
import changeReqPage from "../pageobjects/EdWise/changeReqPage.js"


describe('To verify workflow of EdWise website', () => {

    it('Launch URL in browser', async () => {
        await landingPage.loadUrl()
        expect(await landingPage.$header()
        .isDisplayed()).withContext('Expect header is not displayed')
        .toBeTrue()
    })

    it('Click on "Configuration" and validate 4 options are displayed', async () => {
       await landingPage.clickConfiguration()
       //validate 4 options
     })

    it('Click on "Select User" option from landing page and validate user and role dropdowns', async () => {
        await landingPage.clickSelectUser()
        expect(await selectUserPage.$selectUserDropDown()
        .isDisplayed()).withContext('Expect "Select User" dropdown is not displayed')
        .toBeTrue()
        expect(await selectUserPage.$selectRoleDropDown()
        .isDisplayed()).withContext('Expect "Select Role" dropdown is not displayed')
        .toBeTrue()
    })

    it('Select values from both dropdowns', async () => {
        await selectUserPage.selectValuesFromDropdowns()
        expect(await changeReqPage.$selectedUserName()
        .isDisplayed()).withContext('Expect selected username "Sachin" is not displayed')
        .toBeTrue()
        expect(await changeReqPage.$addReqOption()
        .isDisplayed()).withContext('Expect "Add Request" option is not displayed')
        .toBeTrue()
        expect(await changeReqPage.$approvalQueueOption()
        .isDisplayed()).withContext('Expect "Approval Queue" option is not displayed')
        .toBeTrue()
    })

    it('Click on "Add Request" option and validate texts', async () => {
        await changeReqPage.clickOnAddReq()
        expect(await changeReqPage.$eduOrgText()
        .isDisplayed()).withContext('Expect "Education Organization" is not displayed')
        .toBeTrue()
        expect(await changeReqPage.$categoryText()
        .isDisplayed()).withContext('Expect "Category" is not displayed')
        .toBeTrue()
        expect(await changeReqPage.$effectiveDateText()
        .isDisplayed()).withContext('Expect "Effective Date" is not displayed')
        .toBeTrue()
    })

    it('Click on "Education Organization" dropdown and validate all options from dropdown', async () => {
        await changeReqPage.clickEduOrgDropdown()
        //validate all dropdown options
    })

    it('Select "Alpine Elementary District" from Education Organization dropdown ', async () => {
        await changeReqPage.selectEduOrgOption()
        //validate Address, Phone etc boxes came or not
    })

    it('Click "Category" dropdown and validate all options from dropdown', async () => {
        await changeReqPage.clickEduOrgDropdown()
        //validate all dropdown options
    })

    it('Select "Charter Authorizer" from Category dropdown ', async () => {
        await changeReqPage.selectCategoryOption()
        //validate Relationships, Networks etc boxes came or not
    })

    it('Select Effective Date as "future" and validate calendar icon is enabled', async () => {
        await changeReqPage.clickFutureRadioButton()
        expect(await changeReqPage.$calendar()
        .isDisplayed()).withContext('Expect calendar icon is not displayed')
        .toBeTrue()
    })

    it('Click on calendar and validate previous and future month dates are disabled', async () => {
        await changeReqPage.clickCalendar()
        //validate previous and future month dates are disabled
    })

    it('Pick a date from calendar', async () => {
        await changeReqPage.pickDate()
        //no validation
    })

    it('Click on "Organization Categories" box and validate "Category" and "Section" are same as selected', async () => {
        await changeReqPage.clickOrgCategories()
        expect(await changeReqPage.$category()
        .isDisplayed()).withContext('Expect category is not same as selected from dropdown')
        .toBeTrue()
        expect(await changeReqPage.$section()
        .isDisplayed()).withContext('Expect section is not same as selected from dropdown')
        .toBeTrue()
    })

    it('Click "Close" and validate "Change Requests" header', async () => {
        await changeReqPage.clickCloseButton()
        expect(await changeReqPage.$changeRequestHeader()
        .isDisplayed()).withContext('Expect "Change Requests" header is not displayed ')
        .toBeTrue()
    })

    it('Click on "Add Request" option again and validate texts', async () => {
        await changeReqPage.clickOnAddReq()
        expect(await changeReqPage.$eduOrgText()
        .isDisplayed()).withContext('Expect "Education Organization" is not displayed')
        .toBeTrue()
        expect(await changeReqPage.$categoryText()
        .isDisplayed()).withContext('Expect "Category" is not displayed')
        .toBeTrue()
        expect(await changeReqPage.$effectiveDateText()
        .isDisplayed()).withContext('Expect "Effective Date" is not displayed')
        .toBeTrue()
    })

    it('Click on "Education Organization" dropdown again and validate all options from dropdown', async () => {
        await changeReqPage.clickEduOrgDropdown()
        //validate all dropdown options
    })

    it('Select "Alpine Elementary District" from Education Organization dropdown ', async () => {
        await changeReqPage.selectEduOrgOption()
        //validate Address, Phone etc boxes came or not
    })

    it('Click "Category" dropdown again and validate all options from dropdown', async () => {
        await changeReqPage.clickEduOrgDropdown()
        //validate all dropdown options
    })

    it('Select "Charter Authorizer" from Category dropdown ', async () => {
        await changeReqPage.selectCategoryOption()
        //validate Relationships, Networks etc boxes came or not
    })

    it('Select Effective Date as "future" and validate calendar icon is enabled', async () => {
        await changeReqPage.clickFutureRadioButton()
        expect(await changeReqPage.$calendar()
        .isDisplayed()).withContext('Expect calendar icon is not displayed')
        .toBeTrue()
    })

    it('Click on calendar and validate previous and future month dates are disabled', async () => {
        await changeReqPage.clickCalendar()
        //validate previous and future month dates are disabled
    })

    it('Pick a date from calendar', async () => {
        await changeReqPage.pickDate()
        //no validation
    })

    it('Click on "Relationships" box and validate "Add Relationships" button is present', async () => {
        await changeReqPage.clickRelationships()
        expect(await changeReqPage.$addRelationshipButton()
        .isDisplayed()).withContext('Expect "Add Relationships" button is not present')
        .toBeTrue()
    })

    it('Click on "Add Relationships" button validate warning messages', async () => {
        await changeReqPage.clickAddRelationshipsButton()
        //validate warnings
    })

})
