import landingPage from "../pageobjects/EdWise/landingPage.js"
import selectUserPage from "../pageobjects/EdWise/selectUserPage.js"
import changeRequestsPage from "../pageobjects/EdWise/changeRequestsPage.js"

describe('To verify workflow of EdWise website', () => {
    it('Launch URL in browser', async () => {
        await landingPage.loadUrl()
        expect(await landingPage.$header()
        .isDisplayed()).withContext('Expect header is not displayed')
        .toBeTrue()
        //await browser.pause(10000)
    })

    it('Wait for spinner to close and validate "Advanced Filter" to be displayed', async () => {
        await landingPage.waitSpinnerToEnd()
        expect(await landingPage.$advancedFilter()
        .isDisplayed()).withContext('Expect "Advanced Filter" is not displayed')
        .toBeTrue()
      })

    it('Click on "Configuration" and validate "Select User" option', async () => {
        await landingPage.clickConfiguration()
        await landingPage.$selectUserOption().waitForDisplayed({timeout : 5000, timeoutMsg: 'Could not find  "Select User" option within the requested time'})
        expect(await landingPage.$selectUserOption()
        .isDisplayed()).withContext('Expect "Select User" is not displayed')
        .toBeTrue()
      })

      it('Click on Select User option and validate "Select User" dropdown is present', async () => {
        await landingPage.clickSelectUser()
        await selectUserPage.$selectUserDropDown().waitForDisplayed({timeout : 5000, timeoutMsg: 'Could not find  "Select User" dropdown within the requested time'})
        expect(await selectUserPage.$selectUserDropDown()
        .isDisplayed()).withContext('Expect "Select User" dropdown is not displayed')
        .toBeTrue()
      })

      it('Validate "Select Role" dropdown is present', async () => {
        await selectUserPage.$selectRoleDropDown().waitForDisplayed({timeout : 5000, timeoutMsg: 'Could not find  "Select Role" dropdown within the requested time'})
        expect(await selectUserPage.$selectRoleDropDown()
        .isDisplayed()).withContext('Expect "Select Role" dropdown is not displayed')
        .toBeTrue()
      })

      it('Enter values in dropdowns and click Select button', async () => {
        await selectUserPage.selectValuesFromDropdowns()
        expect(await changeRequestsPage.$selectedUserName()
        .isDisplayed()).withContext('Expect "Sachin" is not displayed as selected user')
        .toBeTrue()
      })

      it('Click on "Add Request" button', async () => {
        await changeRequestsPage.clickOnAddRequest()
        expect(await changeRequestsPage.$changeRequestsHeader()
        .isDisplayed()).withContext('Expect "Change Requests" header is not displayed')
        .toBeTrue()
      })

      it('Enter values in dropdowns in Change Requests page', async () => {
        await changeRequestsPage.clickEducationalOrganizationDropdown()
        await changeRequestsPage.$alpineHeader().waitForDisplayed({timeout : 5000, timeoutMsg: 'Could not find  "Alpine Elementary District" within the requested time'})
        expect(await changeRequestsPage.$alpineHeader()
        .isDisplayed()).withContext('Expect "Alpine Elementary District" is not displayed')
        .toBeTrue()
      })

      it('Make radio button as "future"', async () => {
        await changeRequestsPage.clickFutureRadioButton()
        //calendar enabled validation
      })

      it('Click Calendar and select date as "Aug 15, 2025"', async () => {
        await changeRequestsPage.clickCalendar()
        expect(await changeRequestsPage.$organizationCategories()
        .isDisplayed()).withContext('Expect "Organization Categories" is not displayed')
        .toBeTrue()
      })

      it('Click "Organization Categories" tab and validate selected school is displayed', async () => {
        let alpineActual= changeRequestsPage.$alpineHeader().getText()
        let alpineExpected= changeRequestsPage.$alpineElementaryDistrictHeader.getText()
        await changeRequestsPage.clickOrganizationCategories()
        expect(alpineActual).isEqual(alpineExpected)
      })

      it('Fill details in "Organization Categories"', async () => {
        await changeRequestsPage.enterValues()
        const grade1After = await changeRequestsPage.$grade1()
        const grade1Color = await grade1After.getCSSProperty('color')
        expect(grade1Color.value).toBe('rgba(255,0,0)')
        const grade2After = await changeRequestsPage.$grade2()
        const grade2Color = await grade2After.getCSSProperty('color')
        expect(grade2Color.value).toBe('rgba(255,0,0)')
      })



})
