import data from "../testData/timeout.json" assert {"type":"json"}
import landingPage from "../pageobjects/landingPage.js"
import selectUserPage from "../pageobjects/selectUserPage.js"
import ChangeRequestsPage from "../pageobjects/ChangeRequestsPage.js"
import addRequestPage from "../pageobjects/addRequestPage.js"
import addOrganization from "../pageobjects/addOrganization.js"


let text = await addOrganization.randomText();


let ErrorForReasonForChange = "Reason for the change is required";

let AddRequestHeaderInputFields=["Education Organization","Category","Effective Date"]

describe("An End-to-End Flow on the EDwise Website ", () => {
    it("Launch the URL of  the EDWise Group Website and Validate the icon 'username'", async () => {
        await  landingPage.launchUrl();
        await landingPage.$usernameHeader().waitForDisplayed({timeout :data.timeoutKey.midTimeout,timeoutMsg : "The 'username' header is not displayed" })
        expect(await landingPage.$usernameHeader().isDisplayed()).withContext(" The 'username' header is not displayed").toBeTrue()
    })

    it("Click on the 'Configurations' option" ,async () => {
        await landingPage.clickOnConfigurations();
        expect(await landingPage.$configurationOption().isDisplayed()).withContext(" The icon is not displayed").toBe(true)
    })


    it("Validate the Dropdown list of the 'Configurations' option",async()=>{

        await landingPage.$loader().waitForDisplayed({timeout:data.timeoutKey.maxTimeout,reverse:true,timeoutMsg:"loader is displayed"})
        await landingPage.fetchConfigurationsDropdownItems()
        let dropDownSelectionItems = [
            "Select User",
            "Role Permission",
            "User Roles",
            "Section Configurations"
          ];
    
          for (let item of items) {
            expect(dropDownSelectionItems).toContain(item);
          }
       
    
    })

    it("Click on 'Select User' input field",async()=>{
        await landingPage.clickSelectUser();
        await browser.url('https://web-edmaster-test-wtus-ui-01.azurewebsites.net/SelectUser')
        expect(await selectUserPage.$selectUserLabel().isDisplayed()).withContext("The Select User input box is not displayed").toBeTrue();
        expect(await selectUserPage.$selectRoleLabel().isDisplayed()).withContext("The Select Role input box is not displayed").toBeTrue();
    })

    it("Fill Details in the select user page ",async()=>{
        await selectUserPage.selectionOnSelectUserPage();
       
    })

   
    it("Validate The Presence of 'Username' icon and the dropdowns ",async()=>{
       
        await  ChangeRequestsPage.$loader().waitForDisplayed({timeout:data.timeoutKey.maxTimeout,reverse:true,timeoutMsg:"Loader is displayed"})
        await  ChangeRequestsPage.$sachinUsernameHeader().waitForDisplayed({timeout:data.timeoutKey.maxTimeout,timeoutMsg:"The user name is not 'sachin'"})

        await ChangeRequestsPage.$addRequestOption().waitForDisplayed({timeout:data.timeout,timeoutMsg:" Option Not displayed"})
        await ChangeRequestsPage.$approvalQueueOption().waitForDisplayed({timeout:data.timeout,timeoutMsg:"Label not displayed"})

    })

    it("Click on add request button and validate all the labels",async()=>{
        await ChangeRequestsPage.clickAddRequestButton()

       
    })
    it("Click on add request button and validate all the labels",async()=>{
        await ChangeRequestsPage.clickAddRequestButton()
       
    })

    it("validate all the labels of the InputBoxes",async() =>{
        let labels=await addRequestPage.validateInputHeaders()
        for(let item of labels){
            expect(AddRequestHeaderInputFields).toContain(item)
        }
    })

it("Select organization 'Fort Huachuca Accommodation District",async() =>{
        await addRequestPage.selectOrganization();
})

it("Select category 'school'",async() =>{
    await addRequestPage.selectCategory();
})

it("Tick the 'Future' option in the Effective Date section",async() =>{
 await addRequestPage.selectFuture();

})

it("Click on the calender option in the Effective Date section",async() =>{
    await addRequestPage.clickCalendar();
})

it("Click on 'Organizational Categories'",async() =>{
await addRequestPage.clickOnOrganizationCategories();
})


it("Fill the Reasons for Change' " ,async () => {
    await addOrganization.fillReasonText(text)
})

it("Upload a CSV file and Validate the error message 'file type cannot be uploaded' " ,async () => {
 await addOrganization.fileUploadOneForOrganizations()
})
it("Upload a Valid file and Validate that the 'Relationship' component in the 'Add Request' page changes its Color on the Top Banner of the Component " ,async () => {
    await addOrganization.fileUploadTwoForOrganizations();
})
it("Click on the 'Save' Button without giving data and Validate the Required Field Error Message 'Reason for the change is required'" ,async () => {

    await addOrganization.clickOnSaveButton();
    let error = addOrganization.$errorMessageForReasonForChange().getText();
    expect(error).isEqual(ErrorForReasonForChange)

})
})