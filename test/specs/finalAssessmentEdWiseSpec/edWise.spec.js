import landObj from "../../pageobjects/finalAssessmentEdwise/edWiseLandingPage.js"
import selectUserObj from "../../pageobjects/finalAssessmentEdwise/edWiseSelectUserPage.js"
import userProfileObj from "../../pageobjects/finalAssessmentEdwise/edWiseUserProfilePage.js"
import organizationObj from "../../pageobjects/finalAssessmentEdwise/edWiseOrganizationCategories.js"
const schoolName="San Simon Unified District"
const categoryType="School"
describe("End to end flow for ED Wise site",()=>{
    it("Launch url and validate header in the landing page",async()=>{
        await landObj.loadUrl()
        expect(await landObj.$landingPageUsernameLabel().isDisplayed()).withContext("Landing page header is not displayed").toBeTrue() 
    })
    it("Click on Configuration and and  click on select user then validate the two text boxes are present",async()=>{
        await landObj.clickConfigurations()
        let respond=await landObj.validateTextBoxPresence()
        expect(await respond).withContext("Text box is not displayed").toBeTrue()
    })
    it("Select the user and user role from the dropdown",async()=>{
        await selectUserObj.selectUserAndRole()
        expect(await selectUserObj.$cancelButton().isDisplayed()).withContext("Button is not displayed").toBeTrue()
    })
    it("Click on select button and validate username",async()=>{
        await selectUserObj.clickSelectButton()
        expect(await userProfileObj.$userProfileName().isDisplayed()).withContext("User name is not displayed").toBeTrue()
    })
    it("Click on Add Request button",async()=>{
        await userProfileObj.clickAddRequestButton()
        expect(await userProfileObj.$dropdownHeader("Category").isDisplayed()).withContext("Header is not displayed").toBeTrue()
    })
    it("Select School and category then validate selected school name and category is displayed",async()=>{
        await userProfileObj.selectSchoolAndCategory()
       let validatingNames= await userProfileObj.validateNameAndCategory(schoolName,categoryType)
        expect(await validatingNames).withContext("Names are not displayed properly").toBeTrue()
    })
    it("Click on future checkbox and validate calender is clickable",async()=>{
       let actualStatus= await userProfileObj.selectDate()
        expect(await actualStatus).withContext("Calender is still not Enabled").toBe(0)
    })
    it("Set the date as 15/08/2025",async()=>{
        await userProfileObj.selectDateFromCalender()
        expect(await userProfileObj.$websiteText().isDisplayed()).withContext("Header is not displayed").toBeTrue()
    })
    it("Click on Organization Categories and validate headers",async()=>{
        await organizationObj.clickOrganizationCategories()
    })

})