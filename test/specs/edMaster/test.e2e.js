import homePage from "../../pageobjects/edMaster/homePage.js"
import time from "../../testData/timeout.json" assert{type:"json"}
import confData from "../../testData/configurationElements.json" assert{type:"json"}
import selectUser from "../../pageobjects/edMaster/selectUser.js"
import changeRequest from "../../pageobjects/edMaster/changeRequest.js"
import requestPage from "../../pageobjects/requestPage.js"
let institution="Douglas Unified District";
describe('An end to end flow of edmaster website.', () => {
    it('Launching the url ', async () => {
        await homePage.launchUrl();
        await homePage.$homePageLogo().waitForDisplayed({timeout:time.med,timeoutMsg:"Homepage is not yet loaded."});
        await expect(homePage.$userName("Username")).toBeDisplayed();
    })

    it('Click on the Configuration tab on the left side panel', async () => {
        await homePage.clickOnConfigurationTab();
        await confData.configuration[0].waitForDisplayed({timeout:time.max,timeoutMsg:"Configuration tab values is not yet loaded."});
        for (let i=0;i<4;i++){
            await expect(homePage.$configurationValues(i)).toBe(confData.configuration[i])
        }
    })
    it('Click on the Select User from the side panel.', async () => {
        await selectUser.selectUser();
        await expect(selectUser.$selectingFields()).toBeDisplayed();
    })
    it('Selecting the user and his role from the dropdown.', async () => {
        await selectUser.selectingUserName("Sachin");
        await expect(selectUser.$data("Sachin")).toBeTrue();
        await selectUser.selectingUserRole("LEA_Data_Admin");
        await expect(selectUser.$data("LEA_Data_Admin")).toBeTrue();
        if(await selectUser.$loadingSpinner()){(await selectUser.$loadingSpinner()).waitForDisplayed({timeout:time.max,reverse:true,timeoutMsg:"Loader is still present on the screen"})}
    })
   
    it('validate and click on the add Request present on the right top of the page.', async () => {
        await changeRequest.$addRequestInPanel().toBeDisplayed();
        await changeRequest.$approvalInPanel().toBeDisplayed();
        await changeRequest.addingRequest();
        await expect(changeRequest.$educationHeader()).toBeDisplayed();
        await expect(changeRequest.$categoryHeader()).toBeDisplayed();
        await expect(changeRequest.$dateHeader()).toBeDisplayed();
    })

    it('Entering credentials to the fields.', async () => {
        await changeRequest.$addRequestButton().click();
        await changeRequest.selectingInstitution(institution);
        await changeRequest.selectingCategory("Charter Authorizer");
        await changeRequest.selectingDate("31","07","2024")
        await expect(changeRequest.$educationHeader(institution)).toBeDisplayed();
    })

    it('Click organization category and validate the header ', async () => {
        await changeRequest.$icons("Organization Categories").click()
        await changeRequest.$educationHeader(institution).waitForDisplayed({timeout:time.min,timeoutMsg:"Education name is not yet displayed on the header."})
        await expect(changeRequest.$educationHeader(institution)).toBeDisplayed();
        await changeRequest.$closeButton().click();
    })    
    it('Validate the header and click on the add request ', async () => {
        await changeRequest.$addRequestButton().click();
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

