import landingPageObj from "../../pageobjects/landingPage.js";
import selectUserPageObj from "../../pageobjects/selectUserPage.js";
import changeRequestPageObj from "../../pageobjects/changeRequestPage.js";

const changeRequestFieldsLabelArray = ["Education Organization", "Category", "Effective Date"]



describe("End to end flow of Edwise web application", () => {

    it("Launch Edwise web application", async () => {
        await landingPageObj.loadUrl();
        expect(await landingPageObj.$spinner().waitForDisplayed({
            timeout: 250000,
            timeoutMsg: "Spinner did not disappear",
            reverse: true,
        })).withContext("Spinner display test failed").toBe(true); 
        expect(await landingPageObj.$landingPageUsernameHeader("Username").isDisplayed()).toBe(true);})

    it("Click on Configuration Menu", async () => {
        await landingPageObj.$configurationsMenu().click();
        expect(await landingPageObj.$configurationsMenuOptions().isDisplayed()).toBe(true);
    })
    it("Click on Select User Menu", async () => {
        await landingPageObj.clickElementButton(landingPageObj.$configurationsMenuOptions());
        expect(await selectUserPageObj.$landingPageFieldsPlaceholders("Select User").isDisplayed()).withContext("Select User field").toBe(true);
        expect(await selectUserPageObj.$landingPageFieldsPlaceholders("Select User").isDisplayed()).withContext("Select Role").toBe(true);
    })
    it("click on Select User dropdown", async()=>{
        await selectUserPageObj.clickElementButton(selectUserPageObj.$landingPageFieldsPlaceholders("Select User"));
        expect(await selectUserPageObj.$selectUserName("Sachin").isDisplayed).withContext("Name is not in the option").toBeTrue();
    })
    it("Select the name Sachin from the options", async()=>{
        let selectedUsername = await selectUserPageObj.selectUser("Sachin");
        expect(selectedUsername).isEqual("Sachin");
    })
    it("click on Select Role dropdown", async()=>{
        await selectUserPageObj.clickElementButton(selectUserPageObj.$landingPageFieldsPlaceholders("Select Role"));
        expect(await selectUserPageObj.$selectUserName("LEA_Data_Admin").isDisplayed).withContext("Role is not in the option").toBeTrue();
    })
    it("Select the role LEA_Data_Admin from the options", async()=>{
        let selectedRole = await selectUserPageObj.selectRole("LEA_Data_Admin");
        expect(selectedRole).isEqual("LEA_Data_Admin");
    })
    it("Click the Select Button and verify username", async()=>{
        await selectUserPageObj.clickElementButton(await selectUserPageObj.$selectButton())
        let username = await landingPageObj.$landingPageUsernameHeader("Sachin").getText;
        expect(username).isEqual("Sachin").withContext("Username is not Displayed").toBeTrue();
    })
    it("Click on Add Request Menu", async()=>{
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$addRequestMenu())
        for(let i =0;i<changeRequestFieldsLabelArray.length;i++){
            expect(await changeRequestPageObj.$changeRequestFieldsLabel(changeRequestFieldsLabelArray[i]).isDisplayed()).withContext("Field is not displayed").toBeTrue();
        }
    })
    it("Click on Educational Organization dropdown", async()=>{
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$changeRequestFields("Select Education Organization"))
        expect(await changeRequestPageObj.$selectEducationalOrganizationOption("Sierra Vista Unified District").isDisplayed()).withContext("Educational organisation option is not displayed.").toBeTrue();
    })
    it("Select the Sierra Vista Unified District as Educational Organization",async()=>{
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$selectEducationalOrganizationOption("Sierra Vista Unified District"))
        expect(await changeRequestPageObj.$changeRequestFields("Sierra Vista Unified District").isDisplayed()).withContext("Educational organization option is not selected")
    })
    it("Click on Category dropdown and verify School category is available", async()=>{
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$changeRequestFields("Charter Authorizer"))
        expect(await changeRequestPageObj.$categoryOption("School").isDisplayed()).withContext("Category option is not available").toBeTrue()
    })
    it("Select option School as Category and verify whether the option is selected",async()=>{
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$categoryOption("School"))
        let isHeadersVisible = await changeRequestPageObj.validateChangeRequestHeaders("Sierra Vista Unified District", "School")
        expect(isHeadersVisible).withContext("Headers are not visible").toBeTrue();
    })
    it("Check Future and verify the calender is enabled or not", async()=>{
        await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$futureDate())
        expect (await changeRequestPageObj.$calender().isEnabled()).withContext("Calender is not enabled").toBeTrue();
    })
    it("Click on calender and pick a date", async()=>{
        let status = await changeRequestPageObj.pickADate();
        expect(status).withContext("Direction Button is not displayed").toBeTrue()
    })
    it("select the organisation menu",async()=>{
            await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$organisationCategoryMenu())
            expect(await changeRequestPageObj.$organizationalCategoryPopupHeader().isDisplayed()).withContext("Header is not displyed").toBeTrue();
    })
    it("Fill the details in the organizational category popup ",async()=>{
        await changeRequestPageObj.fillDetails();
    })

        
    })
