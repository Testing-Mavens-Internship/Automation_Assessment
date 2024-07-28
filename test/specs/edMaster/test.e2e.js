import homePage from "../../pageobjects/edMaster/homePage.js"
import time from "../../testData/timeout.json" assert{type:"json"}
import confData from "../../testData/configurationElements.json" assert{type:"json"}
import selectUser from "../../pageobjects/edMaster/selectUser.js"
import changeRequest from "../../pageobjects/edMaster/changeRequest.js"
import requestPage from "../../pageobjects/edMaster/requestPage.js"
let institution="Douglas Unified District";
describe('An end to end flow of edmaster website.', () => {
    it('Launching the url ', async () => {
        await homePage.launchUrl();
        await homePage.$homePageLogo().waitForDisplayed({timeout:time.med,timeoutMsg:"Homepage is not yet loaded."});
        await expect(homePage.$userName("Username")).toBeDisplayed();
        await homePage.$advancedFilter().waitForDisplayed({timeout:60000,timeoutMsg:"Advance filter message is not displayed on the screen"})
    })

    it('Click on the Configuration tab on the left side panel', async () => {
        await homePage.clickOnConfigurationTab();
        await homePage.$selectUser().waitForDisplayed({timeout:time.max,timeoutMsg:"Configuration tab values is not yet loaded."});
        for (let i=0;i<4;i++){
            let values=await (await homePage.$configurationValues(i+1)).getText();
            await expect(values).toBe(confData.configuration[i])
            console.log(values);
        }
    })

    it('Selecting the user and his role from the dropdown.', async () => {
        let name=await selectUser.selectDropDown("Select User","Sachin")
        // await expect(name).toEqual("Sachin");
        await selectUser.$defaultLoadingSpinner().waitForDisplayed({timeout:time.med,reverse:true,timeoutMsg:"Loader is still displayed."})
        let role=await selectUser.selectDropDown("Select Role","LEA_Data_Admin")
        // await expect(role).toEqual("LEA_Data_Admin");
        await selectUser.$defaultLoadingSpinner().waitForDisplayed({timeout:time.med,reverse:true,timeoutMsg:"Loader is still displayed."})
        await selectUser.clickingSelectButton();
        await selectUser.$defaultLoadingSpinner().waitForDisplayed({timeout:time.med,reverse:true,timeoutMsg:"Loader is still displayed."})
    })
   
    it('validate and click on the add Request present on the right top of the page.', async () => {
        await expect(changeRequest.$addRequestInPanel()).toBeDisplayed();
        await expect(changeRequest.$approvalInPanel()).toBeDisplayed();
        await changeRequest.addingRequest();
        await expect(changeRequest.$educationHeader()).toBeDisplayed();
        await expect(changeRequest.$categoryHeader()).toBeDisplayed();
        await expect(changeRequest.$dateHeader()).toBeDisplayed();
    })

    it('Entering credentials to the fields.', async () => {
        await changeRequest.selectingInstitution(institution);
        await changeRequest.selectingCategory("Charter Authorizer");
        // await changeRequest.selectingDate("31","07","2024")
        await changeRequest.selectDate();
        await expect(changeRequest.$educationHeader(institution)).toBeDisplayed();
    })

    it('Click organization category and validate the header ', async () => {
        await changeRequest.$icons("Organization Categories").click()
        await changeRequest.$educationHeader(institution).waitForDisplayed({timeout:time.min,timeoutMsg:"Education name is not yet displayed on the header."})
        await expect(changeRequest.$educationHeader(institution)).toBeDisplayed();
        await changeRequest.closing();
    })    
    it('Validate the header and click on the add request ', async () => {
        await changeRequest.addingRequest();
        await changeRequest.selectingInstitution(institution);
        await changeRequest.selectingCategory("Charter Authorizer");
        await changeRequest.selectDate();
        await expect(changeRequest.$educationHeader(institution)).toBeDisplayed();
        await changeRequest.$icons("Relationships").click()
        await requestPage.reasonForChange();
        await requestPage.upload1();
        await requestPage.upload2();
        await expect(requestPage.$alertMsg()).toBeDisplayed();
    })    
    it('Enter the same data and selecting relationship icon.', async () => {
       
    })  
     
    it('Validate the require message and enter the credentials.', async () => {
       
    }) 

    it('upload files and validate and save.', async () => {
       
    }) 

    it('Enter the same data and selecting network icon.', async () => {
       
    }) 

    it('Validate the required message while clicking save without entering values into any fields.', async () => {
       
    })  
})

