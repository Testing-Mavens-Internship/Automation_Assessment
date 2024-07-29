import landingPage from "../../pageobjects/edMaster/landingPage.js"
import time from "../../testData/timeout.json" assert{type:"json"}
import configurationElement from "../../testData/configurationElements.json" assert{type:"json"}
import data from "../../testData/data.json" assert{type:"json"}
import changeRequest from "../../pageobjects/edMaster/changeRequest.js";
let user="Sachin";
let Organization="Douglas Unified District";
let Category="School";
let date="2025-07-15"
let iconName="Organization Category Details"
describe("An end to end flow of Edmaster website.",()=>{
    it("Launching the url",async()=>{
        await landingPage.launchingTheUrl();
        expect(await landingPage.$logo().isDisplayed()).withContext("Landing page logo is not yet displayed.").toBeTrue();
        expect(await landingPage.$selectedUSer("Username").isDisplayed()).withContext("Username must be displayed as the selected user.").toBeTrue();
    })
    it("Clicking the configuration tab and validating that the other four options are present inside that tab.",async()=>{
        await landingPage.selectingConfigurationsTab();
        for(let value of configurationElement.configuration){
            await (await landingPage.$optionInsideConfigurationTab(value)).waitForDisplayed({timeout:time.max,timeoutMsg:"Elements inside configuration tab is not yet displayed."})
            expect(await landingPage.$optionInsideConfigurationTab(value).isDisplayed()).withContext("Options inside the configuration tab is not yet displayed").toBeTrue();
        }
    })
    it("Click on the select user and validate.",async()=>{
        await landingPage.selectUserTab();
        expect(await landingPage.$inputBoxes("Select User").isDisplayed()).withContext("Input box for Selecting the user is not yet displayed.").toBeTrue();
        expect(await landingPage.$inputBoxes("Select Role").isDisplayed()).withContext("Input box for Selecting the user role is not yet displayed.").toBeTrue();
    })

    it("Selecting the user and his role.",async()=>{
        await landingPage.selectUserAndRole();
        expect(await landingPage.$selectedUSer(user).isDisplayed()).withContext("User is not selected as "+user+".").toBeTrue();
    })
    it("Clicking the add request button.",async()=>{
        await changeRequest.clickingAddRequest();
        for(let value of data.headers){
            await (await changeRequest.$fieldHeaders(value)).waitForDisplayed({timeout:time.max,timeoutMsg:"Field headers are not yet displayed."})
            expect(await changeRequest.$fieldHeaders(value).isDisplayed()).withContext("Field headers are not there.").toBeTrue();
        }   
     })
     it("Entering values into the fields.",async()=>{
        await changeRequest.enteringValuesToFields(Organization,Category,date);
        expect(await changeRequest.$organizationAndCategoryValidationLocator(Organization).isDisplayed()).withContext("Organization is not selected.").toBeTrue();
        expect(await changeRequest.$organizationAndCategoryValidationLocator(Category).isDisplayed()).withContext("Category is not selected.").toBeTrue();
    })
    it("Clicking the Organization icon",async()=>{
        await changeRequest.clickingOrganizationCategoryIcon();
        await changeRequest.$popUpHeaders(iconName).waitForDisplayed({timeout:time.max,timeoutMsg:"Box is not still displayed"})
        expect(await changeRequest.$popUpHeaders("Organization Category Details").isDisplayed()).withContext("Organization Category Details header is not displayed.").toBeTrue();
        expect(await changeRequest.$popUpHeaders(Organization).isDisplayed()).withContext("Organization name is not displayed.").toBeTrue();
        expect(await changeRequest.$popUpHeaders(Category).isDisplayed()).withContext("Category name is not displayed.").toBeTrue();
    })
    it("Entering values inside the box which had appeared..",async()=>{
        await changeRequest.enteringValuesInBox();
        expect(await changeRequest.$popUpFields("ReasonForChange").isDisplayed()).withContext("Reson for change box is there").toBeTrue();
    })
})