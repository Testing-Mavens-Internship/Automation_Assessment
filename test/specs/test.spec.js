import data from "../testData/timeout.json" assert{type:"json"};
import landingPage from "../pageobjects/landingPage.js";
import selectUserPage from "../pageobjects/selectUser.js";
import addRequestPage from "../pageobjects/addRequest.js";
import ChangeRequestPage from "../pageobjects/changeRequest.js";

let name="sachin";
let role="LEA_Data_Admin";
describe("End To End Flow of'Edwise Group'wesite",()=>{
    it("Launch the url of 'EdWise' application in the browser",async()=>{
        await landingPage.launchUrl();
        await this.$usernameHeader().waitForDisplayed({timeout:data.time,timeoutMsg:"Header is still not displayed"});
        expect (await landingPage.$usernameHeader().isDisplayed()).withContext("Header is not displayed").toBeTrue();
    })
    it("Click on 'Configurations' and validate all items in the dropdown list",async()=>{
        await landingPage.$loader().waitForDisplayed({timeout:data.time,reverse:true,timeoutMsg:"loader still displayed"})
        await landingPage.clickConfigurations()
        let list= await landingPage.validateConfigurationsList()
        for(let item of list){
        expect(data.configurations).toContain(item);
        }
    })
    it("Click on 'Select User' menu",async()=>{
        await landingPage.clickSelectUser()
        await selectUserPage.$selectUserLabel().waitForDisplayed({timeout:data.time,timeoutMsg:"Label still not displayed"})
        await selectUserPage.$selectRoleLabel().waitForDisplayed({timeout:data.time,timeoutMsg:"Label still not displayed"})
        expect (await selectUserPage.$selectUserLabel().isDisplayed()).withContext("Label is not displayed").toBeTrue();
        expect (await selectUserPage.$selectRoleLabel().isDisplayed()).withContext("Label is not displayed").toBeTrue();
    })
    it("Click on 'Select User' input field",async()=>{
        let sachinOption=await selectUserPage.clickSelectUserInput(name)
        expect(sachinOption).toHaveText("name");
    })

    it("Click on option 'Sachin'",async()=>{
        await selectUserPage.clickOptionSachin()
        await selectUserPage.$loader().waitForDisplayed({timeout:data.time,reverse:true,timeoutMsg:"Loader still displayed"})
        await selectUserPage.$selectRoleLabel().waitForDisplayed({timeout:data.time,timeoutMsg:"select Role label still not displayed"})
        expect(await selectUserPage.$selectRoleLabel().isDisplayed()).withContext("Select Role is not displayed ").toBeTrue()
    })

    it("Click on 'Select Role' input field",async()=>{
        let LEA_Data_Admin=await selectUserPage.clickSelectRoleInput(role)
        expect(LEA_Data_Admin).toHaveText("role");
    })
    it("Click on 'Select' button",async()=>{
        await selectUserPage.clickSelectButton();
        await selectUserPage.$loader().waitForDisplayed({timeout:data.time,reverse:true,timeoutMsg:"Loader still displayed"})
        await ChangeRequestPage.$loader().waitForDisplayed({timeout:data.time,reverse:true,timeoutMsg:"Loader still displayed"})
        await ChangeRequestPage.$usernameHeader().waitForDisplayed({timeout:data.time,timeoutMsg:"username header still not displayed"})
        await ChangeRequestPage.$addRequestMenu().waitForDisplayed({timeout:data.time,timeoutMsg:"label still not displayed"})
        await ChangeRequestPage.$approvalMenu().waitForDisplayed({timeout:data.time,timeoutMsg:"label still not displayed"})
        let addRequest=await ChangeRequestPage.$addRequestMenu().getText()
        let approval=await ChangeRequestPage.$approvalMenu().getText()
        expect(await ChangeRequestPage.$usernameHeader().isDisplayed()).withContext("Header is not displayed").toBeTrue()
        expect(data.changeRequest).toContain(addRequest);
        expect(data.changeRequest).toContain(approval);
    })

    it("Click on add request button and validate all the labels",async()=>{
        await ChangeRequestPage.clickAddRequestButton()
        let Labels=await addRequestPage.validateSearchFilterLabels()
        for(let item of Labels){
        expect(data.Labels).toContain(item)
        }
    })
    it("Click on select education organization and validate all items in the dropdown list",async()=>{
        let list=await addRequestPage.clickOrganization()
        for(let item of list){
        expect(data.educationOrganizationDetails).toContain(item)
        }
    })
    it("Select 'Willcox Unified District' option and validate organizations details cards",async()=>{
        let list=await addRequestPage.selectOrganization()
        for(let item of list){
        expect(data.organizationDetails).toContain(item)
        }
    })
    it("click on select category and validate all items in the dropDown",async()=>{
    
    
    })
    
    })

