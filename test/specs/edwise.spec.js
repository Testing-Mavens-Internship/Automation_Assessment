import data from '../testData/timeout.json' assert {"type":"json"}
import landingPage from "../pageobjects/landingPage.js"; 
import selectUserPage from '../pageobjects/selectUserPage.js';
import addOrganization from '../pageobjects/addOrganization.js';
import addRelationships from '../pageobjects/addRelationships.js';
import ChangeRequestsPage from '../pageobjects/ChangeRequestsPage.js';
import organizationCategoriesPage from '../pageobjects/organizationCategoriesPage.js';

let text = await addOrganization.randomText();
let texts =await addRelationships.randomText();
let ErrorForReasonForChange = "Reason for the change is required";

let displayedUser = "Select User";
let displayedRole = "Select Role";

describe("A flow on the EDWise Group Website ", () => {

it("Launch the URL of  the EDWise Group Website and Validate the icon 'username'", async () => {
    await  landingPage.launchUrl();
    await landingPage.$usernameHeader().waitForDisplayed({timeout :data.timeoutKey.midTimeout,timeoutMsg : "The 'username' header is not displayed" })
    expect(await landingPage.$usernameHeader().isDisplayed()).withContext(" The 'username' header is not displayed")

})

it("Click on the 'Configurations' option" ,async () => {
    await landingPage.selectConfigurations();
    expect(await landingPage.$configurationsIcon().isDisplayed()).toBe(true)
})

it("After Clicking the 'Configuration' option and Validate the presence of the DropDown icons", async () => {

    let items=await landingPage.fetchConfigurationsDropdownItems(); 
    expect(await landingPage.items.isDisplayed())
    let dropDownSelectionItems = [
        "Select User",
        "Role Permission",
        "User Roles",
        "Section Configurations"
      ];

      for (let item of items) {
        expect(dropDownSelectionItems).toContain(item);
      }

  });

it("Click on the 'Select User' icon and Validate the Presence of the Input Boxes " ,async () => {
    await landingPage.getTextOfInputBoxes()
    let userText =selectUserPage.$selectUserText().getText();
    let roleText = selectUserPage.$selectRoleText().getText();
    expect(userText).toBe(displayedUser)
    expect(roleText).toBe(displayedRole)

})
it("Choose an option from  the 'Select user' and  'Select Role' DropDowns and validate the presence of the 'Add Request' and 'Approve Queue' DropDown options " ,async () => {
 await selectUserPage.fillUserDetails();
})
it("Click on 'Add Request' and Validate the InputBox Headers in the 'Add Request' Page and Validate if the Logged user is 'Sachin' " ,async () => {
})

it("Click on the 'Educational Organization' and validate the Drop Downs and Choose the Organization  'Fort Huachuca Accommodation District'  " ,async () => {
})
it("Click on the 'Category' and validate the Drop Downs and choose the category 'Charter Authorizer' " ,async () => {
})
 it("Click on 'Effective Date' and enable the 'Future' option also validate the Date and Pick a Date" ,async () => {
 })

 it("Click on the 'Organization Categories' and Validate the 'Category' and 'Section' Headers" ,async () => {
})
it("Click on the 'Add Request' on the Left Side of the Dashboard and Add New Change Request again." ,async () => {
})
it("Click on the 'Educational Organization' and validate the Drop Downs and Choose the Organization  'Fort Huachuca Accommodation District'  " ,async () => {
})
it("Click on the 'Category' and validate the Drop Downs and choose the category 'Charter Authorizer' " ,async () => {
})
 it("Click on 'Effective Date' and enable the 'Future' option also validate the Date and Pick a Date" ,async () => {
 })

 it(" Validate the 'Category' and 'Section' Headers of the Organizational Categories" ,async () => {
})
it("Click on 'RelationShips' and Validate the 'Add Relationship' Button" ,async () => {
})
it("Click 'Add Relationship' Button without entering the data and Validate the Required Field Error Message" ,async () => {
})
it("Click 'Add Relationship' Button without entering the data and Validate the Required Field Error Message" ,async () => {
})
it("Click 'Add Relationship' Button and Set Value to the DropDowns " ,async () => {
})

it("Click on the 'Save' Button without uploading the File and Validate the Required Field Error Message 'Reason for the change is required' " ,async () => {
    await addRelationships.clickOnSaveButton();
    let error = addRelationships.$errorMessageForReasonForChange().getText();
    expect(error).isEqual(ErrorForReasonForChange)

})

it("Fill the Reasons for Change' " ,async () => {
    await addOrganization.fillReasonText(text)
})

it("Upload a CSV file and Validate the error message 'file type cannot be uploaded' " ,async () => {
 await addOrganization.fileUploadOneForOrganizations()
})
it("Upload a file more then 10MB and Validate the error message  " ,async () => {
    await addOrganization.fileUploadThreeForOrganizations();
})
it("Upload a Valid file and Validate that the 'Relationship' component in the 'Add Request' page changes its Color on the Top Banner of the Component " ,async () => {
    await addOrganization.fileUploadTwoForOrganizations();
})
it("Click on the Network Component on the 'Add Request' Page and Click on the 'Add request' Option" ,async () => {
})

it("Click on the Network Component and Validate the 'Network Page' Header" ,async () => {
})
it("Click on the 'Save' Button without giving data and Validate the Required Field Error Message 'Reason for the change is required'" ,async () => {
    await addOrganization.clickOnSaveButton();
    let error = addOrganization.$errorMessageForReasonForChange().getText();
    expect(error).isEqual(ErrorForReasonForChange)
})
it("Fill the 'Reason For change' Required Field " ,async () => {
    await addRelationships.fillReasonTextInRelationShip(texts)
})

it("Upload a CSV file and Validate the error message 'file type cannot be uploaded' " ,async () => {
    await addRelationships.fileUploadOneForRelationShips();
})
it("Upload a file more then 10MB and Validate the error message  " ,async () => {
    await addRelationships.fileUploadThreeForRelationShips();
})
it("Upload a Valid file and Validate the Message 'No changes have been made to any of the fields.'" ,async () => {
    await addRelationships.fileUploadTwoForRelationShips();
})












})





    
