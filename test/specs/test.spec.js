import landingPage from "../pageobjects/landingPage.js"
import data from "../../testData/data.json" assert{type:"json"}
import selectUserPage from "../pageobjects/selectUserPage.js";
import ChangeRequestPage from "../pageobjects/ChangeRequestPage.js";
import addRequestPage from "../pageobjects/addRequestPage.js";

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
})