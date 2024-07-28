import landingPage from "../pageobjects/landingPage.js"
import data from "../../testData/data.json" assert{type:"json"}
import selectUserPage from "../pageobjects/selectUserPage.js";
import ChangeRequestPage from "../pageobjects/ChangeRequestPage.js";
import addRequestPage from "../pageobjects/addRequestPage.js";
import reviewRequest from "../pageobjects/reviewRequest.js";

describe("Verifying the end to end flow of 'EdWise' application",()=>{
    it("Launch the url of 'EdWise' application in the browser",async()=>{
        await landingPage.launchUrl();
        expect (await landingPage.$usernameHeader().isDisplayed()).withContext("Header is not displayed").toBeTrue()
    })

    it("Click on 'Configurations' and validate all items in the dropdown list",async()=>{
        await landingPage.$loader().waitForDisplayed({timeout:data.timeout,reverse:true,timeoutMsg:"loader still displayed"})
        await landingPage.clickConfigurations()
        let list= await landingPage.validateConfigurationsList()
        for(let item of list){
            expect(data.configurations).toContain(item)
        }
    })

    it("Click on 'Select User' menu",async()=>{
        await landingPage.clickSelectUser()
        await selectUserPage.$selectUserLabel().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Label still not displayed"})
        await selectUserPage.$selectRoleLabel().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Label still not displayed"})
        expect (await selectUserPage.$selectUserLabel().isDisplayed()).withContext("Label is not displayed").toBeTrue()
        expect (await selectUserPage.$selectRoleLabel().isDisplayed()).withContext("Label is not displayed").toBeTrue()
    })

    it("Click on 'Select User' input field",async()=>{
        let sachinOption=await selectUserPage.clickSelectUserInput()
        expect(sachinOption).toEqual("Sachin")
    })

    it("Click on option 'Sachin'",async()=>{
        await selectUserPage.clickOptionSachin()
        await selectUserPage.$loader().waitForDisplayed({timeout:data.timeout,reverse:true,timeoutMsg:"Loader still displayed"})
        await selectUserPage.$selectRoleLabel().waitForDisplayed({timeout:data.timeout,timeoutMsg:"select Role label still not displayed"})
        expect(await selectUserPage.$selectRoleLabel().isDisplayed()).withContext("Select Role is not displayed ").toBeTrue()
    })

    it("Click on 'Select Role' input field",async()=>{
        let LEA_Data_Admin=await selectUserPage.clickSelectRoleInput()
        expect(LEA_Data_Admin).toEqual("LEA_Data_Admin")
    })

    it("Select option 'LEA_Data_Admin'",async()=>{
        await selectUserPage.clickOptionEA_Data_Admin()
        expect(await selectUserPage.$selectButton().isDisplayed()).withContext("Button is not displayed").toBeTrue()
    })

    it("Click on 'Select' button",async()=>{
        await selectUserPage.clickSelectButton()
        await selectUserPage.$loader().waitForDisplayed({timeout:data.timeout,reverse:true,timeoutMsg:"Loader still displayed"})
        await ChangeRequestPage.$loader().waitForDisplayed({timeout:data.timeout,reverse:true,timeoutMsg:"Loader still displayed"})
        await ChangeRequestPage.$usernameHeader().waitForDisplayed({timeout:data.timeout,timeoutMsg:"username header still not displayed"})
        await ChangeRequestPage.$addRequestMenu().waitForDisplayed({timeout:data.timeout,timeoutMsg:"label still not displayed"})
        await ChangeRequestPage.$approvalMenu().waitForDisplayed({timeout:data.timeout,timeoutMsg:"label still not displayed"})
        let addRequest=await ChangeRequestPage.$addRequestMenu().getText()
        let approval=await ChangeRequestPage.$approvalMenu().getText()
        expect(await ChangeRequestPage.$usernameHeader().isDisplayed()).withContext("Header is not displayed").toBeTrue()
        expect(data.changeRequest).toContain(addRequest)
        expect(data.changeRequest).toContain(approval)
    })

    it("Click on add request button and validate all the labels",async()=>{
        await ChangeRequestPage.clickAddRequestButton()
        let filterLabels=await addRequestPage.validateSearchFilterLabels()
        for(let item of filterLabels){
            expect(data.filterLabels).toContain(item)
        }
    })

    it("Click on select education organization and validate all items in the dropdown list",async()=>{
        let list=await addRequestPage.clickOrganization()
        for(let item of list){
            expect(data.educationOrganization).toContain(item)
        }
    })

    it("Select 'Willcox Unified District' option and validate organizations details cards",async()=>{
        let list=await addRequestPage.selectOrganization()
        for(let item of list){
            expect(data.organizationDetails).toContain(item)
        }
    })

    it("Click on select category and validate all items in the dropdown list",async()=>{
        let list = await addRequestPage.clickCategory()
        for(let item of list){
            expect(data.categoryList).toContain(item)
        }
  
    })

    it("Select Charter Authorizer option and validate category details cards",async()=>{
        let list = await addRequestPage.selectCategory()
        await addRequestPage.$activeYellow().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Yellow color still not displayed"})
        for(let item of list){
            expect(data.categoryCards).toContain(item)
        }
        expect (await addRequestPage.$activeYellow().isDisplayed()).withContext("Yellow color not displayed").toBeTrue()
    })

    it("Click on future and validate calendar is enabled",async()=>{
        await addRequestPage.selectFuture()
        expect (await addRequestPage.$calendarIcon().isDisplayed()).withContext("Calendar is not displayed").toBeTrue()
    })

    it("Click on calendar",async()=>{
        await addRequestPage.clickCalendar()
        await addRequestPage.$calendar().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Calendar still not displayed"})
        expect (await addRequestPage.$calendar().isDisplayed()).withContext("Calendar is not displayed").toBeTrue()
    })

    it("Select the date",async()=>{
        let day= await addRequestPage.selectDate(data.date)
        expect(day.includes(data.date)).toBeTrue()
    })

    it("Click on organizations categories",async()=>{
        await addRequestPage.clickOrganizationCategories()
        await reviewRequest.$loader().waitForDisplayed({timeout:data.timeout,reverse:true,timeoutMsg:"loader  still displayed"})
        await reviewRequest.$categoryValue().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Value still not displayed"})
        expect(await reviewRequest.$categoryValue().isDisplayed()).withContext("Value not displayed").toBeTrue()
    })

    it("Click on close button",async()=>{
        await reviewRequest.clickCloseButton()
        await ChangeRequestPage.$changeRequestHeader().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Header still not displayed"})
        expect(await ChangeRequestPage.$changeRequestHeader().isDisplayed()).withContext("Header not displayed").toBeTrue()
    })

    it("Click on add request button and validate all the labels",async()=>{
        await ChangeRequestPage.clickAddRequestButton()
        let filterLabels=await addRequestPage.validateSearchFilterLabels()
        for(let item of filterLabels){
            expect(data.filterLabels).toContain(item)
        }
    })

    it("Click on select education organization and validate all items in the dropdown list",async()=>{
        let list=await addRequestPage.clickOrganization()
        for(let item of list){
            expect(data.educationOrganization).toContain(item)
        }
    })

    it("Select 'Willcox Unified District' option and validate organizations details cards",async()=>{
        let list=await addRequestPage.selectOrganization()
        for(let item of list){
            expect(data.organizationDetails).toContain(item)
        }
    })

    it("Click on select category and validate all items in the dropdown list",async()=>{
        let list = await addRequestPage.clickCategory()
        for(let item of list){
            expect(data.categoryList).toContain(item)
        }
  
    })

    it("Select Charter Authorizer option and validate category details cards",async()=>{
        let list = await addRequestPage.selectCategory()
        await addRequestPage.$activeYellow().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Yellow color still not displayed"})
        for(let item of list){
            expect(data.categoryCards).toContain(item)
        }
        expect (await addRequestPage.$activeYellow().isDisplayed()).withContext("Yellow color not displayed").toBeTrue()
    })

    it("Click on future and validate calendar is enabled",async()=>{
        await addRequestPage.selectFuture()
        expect (await addRequestPage.$calendarIcon().isDisplayed()).withContext("Calendar is not displayed").toBeTrue()
    })

    it("Click on calendar",async()=>{
        await addRequestPage.clickCalendar()
        await addRequestPage.$calendar().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Calendar still not displayed"})
        expect (await addRequestPage.$calendar().isDisplayed()).withContext("Calendar is not displayed").toBeTrue()
    })

    it("Select the date",async()=>{
        let day= await addRequestPage.selectDate(data.date)
        expect(day.includes(data.date)).toBeTrue()
    })

    it("Click on option relationship",async()=>{
        await addRequestPage.clickRelationshipOption()
        await addRequestPage.$addRelationshipButton().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Button still not displayed"})
        expect(await addRequestPage.$addRelationshipButton().isDisplayed()).withContext("Button not displayed").toBeTrue()
    })

    it("Click on add relationship button",async()=>{
        let messages = await addRequestPage.clickAddRelationshipButton()
        for(let item of messages){
            expect(data.warningMessages).toContain(item)
        }
    })

    it("Click on relationship type input field",async()=>{
        await addRequestPage.clickRelationshipTypeInput()
        expect(await addRequestPage.$authorizesOption().isDisplayed()).withContext("Option not displayed")
    })

    it("Select option authorizes",async()=>{
        await addRequestPage.selectAuthorizes()
        await addRequestPage.$loader().waitForDisplayed({timeout:data.timeout,reverse:true,timeoutMsg:"loader still displayed"})
        await addRequestPage.$organizationNameInput().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Input field still not displayed"})
        expect (await addRequestPage.$organizationNameInput().isDisplayed()).withContext("Input filed not displayed")
    })

    it("Click on organization name input field",async()=>{
        await addRequestPage.clickOrganizationNameInput()
        expect(await addRequestPage.$selectedOrganizationName().isDisplayed()).withContext("Option not displayed")
    })

    it("Select first organization name",async()=>{
        await addRequestPage.selectOrganizationName()
        expect(await addRequestPage.$reasonForChange().isDisplayed()).withContext("Textarea not displayed")
    })

    it("Enter the reason for change",async()=>{
        await addRequestPage.enterReasonForChange(data.reasonForChange)
        expect(await addRequestPage.$uploadIcon().isDisplayed()).withContext("Upload icon not displayed")
    })

    it("Upload file csv file",async()=>{
        await addRequestPage.fileUpload()
    })

})