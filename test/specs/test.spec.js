import landingPage from "../pageobjects/landingPage.js"
import data from "../../testData/data.json" assert{type:"json"}
import selectUserPage from "../pageobjects/selectUserPage.js"
import ChangeRequestPage from "../pageobjects/ChangeRequestPage.js"
import addRequestPage from "../pageobjects/addRequestPage.js"

describe("Verifying the functionality of end to end flow of 'EdWise' application",()=>{
    it("Launch the url of 'EdWise' application in the browser",async()=>{
        await landingPage.launchUrl()
        expect(await landingPage.$usernameHeader().isDisplayed()).withContext("Header not displayed").toBeTrue()
    })

    it("Click on 'Configurations' option in the side menu",async()=>{
        await landingPage.$loader().waitForDisplayed({timeout:data.timeout,reverse:true,timeoutMsg:"Loader still displayed"})
        let list= await landingPage.clickConfigurations()
        for(let item of list){
            expect(data.configurations).toContain(item)
        }
    })

    it("Click on 'Select User' from the dropdown list",async()=>{
        await landingPage.clickSelectUser()
        await selectUserPage.$selectDropdown("Select User").waitForDisplayed({timeout:data.timeout,timeoutMsg:"Dropdown still not displayed"})
        await selectUserPage.$selectDropdown("Select Role").waitForDisplayed({timeout:data.timeout,timeoutMsg:"Dropdown still not displayed"})
        expect(await selectUserPage.$selectDropdown("Select User").isDisplayed()).withContext("Dropdown user not displayed").toBeTrue()
        expect(await selectUserPage.$selectDropdown("Select Role").isDisplayed()).withContext("Dropdown role not displayed").toBeTrue()
    })

    it("Click on 'Select User' dropdown",async()=>{
        await selectUserPage.clickSelectUser()
        expect(await selectUserPage.$optionSachin().isDisplayed()).withContext("Option not displayed").toBeTrue()
    })

    it("Select option 'Sachin'",async()=>{
        await selectUserPage.selectOptionSachin()
        expect(await selectUserPage.$selectDropdown("Select Role").isDisplayed()).withContext("Dropdown not displayed").toBeTrue()
    })

    it("Click on 'Select Role' dropdown",async()=>{
        await selectUserPage.clickSelectRole()
        expect(await selectUserPage.$optionLEA_Data_Admin().isDisplayed()).withContext("Option not displayed").toBeTrue()
    })

    it("Select option 'LEA_Data_Admin'",async()=>{
        await selectUserPage.selectOptionLEA_Data_Admin()
        expect (await selectUserPage.$selectButton().isDisplayed()).withContext("Button not displayed")
    })

    it("Click on select button",async()=>{
        await selectUserPage.clickSelectButton()
        await ChangeRequestPage.$addRequestButton().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Button still not displayed"})
        expect (await ChangeRequestPage.$addRequestButton().isDisplayed()).withContext("Button not displayed").toBeTrue()
    })

    it("Click on add Request button",async()=>{
        await ChangeRequestPage.clickAddRequestButton()
        await addRequestPage.$changeRequestHeader().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Header still not displayed"})
        expect(await addRequestPage.$changeRequestHeader().isDisplayed()).withContext("Header not displayed").toBeTrue()
    })

    it("Click on select education organization",async()=>{
        await addRequestPage.clickEducationOrganization()
        expect(await addRequestPage.$dropdownOption("Willcox Unified District").isDisplayed()).withContext("Option not displayed").toBeTrue()
    })

    it("Select option 'Willcox Unified District'",async()=>{
        await addRequestPage.selectOrganization()
        expect(await addRequestPage.$selectDropdown("School").isDisplayed()).withContext("Dropdown not displayed").toBeTrue()
    })

    it("Click on select category",async()=>{
        await addRequestPage.clickCategory()
        expect(await addRequestPage.$dropdownOption("School").isDisplayed()).withContext("Option not displayed").toBeTrue()
    })

    it("Select option 'School'",async()=>{
        await addRequestPage.selectCategoryOption()
        expect (await addRequestPage.$categoryHeader().isDisplayed()).withContext("Header not displayed").toBeTrue()
    })

    it("Click on the checkbox along with the future label",async()=>{
        await addRequestPage.clickFutureCheckbox()
        expect(await addRequestPage.$datePicker().isDisplayed()).withContext("Date input field is not enabled to click").toBeTrue()
    })

    it("Click on the date input field",async()=>{
        await addRequestPage.clickDate()
        expect(await addRequestPage.$calendar().isDisplayed()).withContext("Calendar not displayed").toBeTrue()
    })

    it("Select the date form the calendar",async()=>{
        await addRequestPage.selectDate()
       expect(await addRequestPage.$organizationCategories().isDisplayed()).withContext("Card not displayed").toBeTrue()
    })
})