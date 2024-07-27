import landingPageObj from "../../pageobjects/landingPage.js";
import selectUserPageObj from "../../pageobjects/selectUserPage.js";
import changeRequestPageObj from "../../pageobjects/changeRequestPage.js";


describe("End to end flow of Edwise web application", () => {

    it("Launch Edwise web application", async () => {
        await landingPageObj.launchUrl();

        
        expect(await landingPageObj.$spinner().waitForDisplayed({
            timeout: 250000,
            timeoutMsg: "Spinner did not disappear",
            reverse: true,
        })).withContext("Spinner display test failed").toBe(true); })

    it("Click on configurations menu", async () => {
        await landingPageObj.$configurationsMenu().click();
        let arr = ["Select User", "Role Permission", "User Roles", "Section Configurations"];
        for (let i = 0; i < arr.length; i++) {
            expect(
                await landingPageObj
                    .$configurationsMenuOptions(arr[i])
                    .isDisplayed({
                        timeout: 10000,
                        timeoutMsg: "landing page header not displayed",
                    })
            ).withContext(`${arr[i]} menu option display test failed`).toBe(true);
        }
    });

    it("Select the select user option from the Configurations menu", async () => {
        await landingPageObj.$configurationsMenuOptions().click();
        expect(await selectUserPageObj.$selectUserDropDownsPlaceholders("Select User")
            .isDisplayed({ timeout: 10000, timeoutMsg: "Select User dropdown placeholder not displayed", }))
            .withContext("Select User dropdown display test failed")
            .toBe(true);

        expect(await selectUserPageObj.$selectUserDropDownsPlaceholders("Select Role")
            .isDisplayed({ timeout: 10000, timeoutMsg: "Select Role dropdown placeholder not displayed", }))
            .withContext("Select Role dropdown display test failed")
            .toBe(true);
    });

    it("Select the option Sachin from the Select User dropdown and verify it is selected", async () => {
        await selectUserPageObj.selectUser("Sachin");
        expect(await selectUserPageObj.$selectUserDropDownOptions("Sachin").isSelected());
        await browser.pause(5000);
    })

    it('Select the option LEA_Data_Admin from the Select Role dropdown and verify it is selected', async () => {
        await selectUserPageObj.selectRole();
        expect(await selectUserPageObj.$selectUserDropDownOptions("LEA_Data_Admin").isSelected());
    })
    it('Click on the select Button', async () => {
        await selectUserPageObj.clickElementButton(await selectUserPageObj.$selectButton());
        expect(await changeRequestPageObj.$addRequestMenu().isDisplayed()).withContext("Add Request Menu display test failed").toBe(true);
        expect(await changeRequestPageObj.$approvalQueueMenu().isDisplayed()).withContext("Approval Queue Menu display test failed").toBe(true);
    })
    it('Click on Add Request Menu', async () => {
        let labelArray = ["Education Organization", "Category", "Effective Date"];
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$addRequestMenu());
        for (let i = 0; i < labelArray.length; i++) {
            expect(await changeRequestPageObj.changeRequestFieldsLabel(labelArray[i]).isDisplayed()).withContext(`${labelArray[i]} label display test failed`).toBe(true);
        }
    })
    it('Click on Educational Organization Dropdown', async () => {
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$changeRequestFields("Select Education Organization"));
        let extractedTextArray = await changeRequestPageObj.extractTextFromElements();
        expect(extractedTextArray.length).toBeGreaterThan(0);
    })
    it('Select Sierra Vista Unified District as Educational Organization', async () => {
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$selectEducationalOrganizationOption());
        let cardTextArray = await changeRequestPageObj.validateChangeRequestCard();
        expect(cardTextArray.length).toBeGreaterThan(0);
    })
    it('Click on category dropdown', async () => {
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$changeRequestFields('Charter Authorizer'));
        let categoryTextArray = await changeRequestPageObj.validateCategoryOptions();
        expect(categoryTextArray.length).toBeGreaterThan(0);
    })
    it('Select Charter Authorizer as Category', async () => {
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$categoryOption(1));
        let cardTextArray = await changeRequestPageObj.validateChangeRequestCard();
        expect(cardTextArray.length).toBeGreaterThan(0);
    })
    it('Check the future date and verify that the calender is clickable', async () => {
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$futureDate());
        expect(await changeRequestPageObj.$calender().isEnabled());
    })
    it('Click on calender', async () => {
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$calender());
        let date = await changeRequestPageObj.$pastDate();
        expect(date.isClickable());
    })
    it('Pick a date from the calender', async () => {
        await changeRequestPageObj.pickADate();
    })
    it('click on organizational categories', async () => {
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$organizationCategoryDiv());
        let status = await changeRequestPageObj.reviewChangerequest();
        expect(status).toBe(true);
    })
    it('click on close button', async () => {
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$closeButton());
        expect(await changeRequestPageObj.$changeRequestPageHeader().isDisplayed()).withContext("Change Request page header display test failed").toBe(true);
    })
    it('click on add request', async () => {
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$addRequestButton());
    })


})