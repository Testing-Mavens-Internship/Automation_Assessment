import changerequest from "../pageobjects/changerequest.js";
import homepage from "../pageobjects/homepage.js";
import obj from "../testData/data.json" assert { type: "json" };

let values = [
  "Select User",
  "Role Permission",
  "User Roles",
  "Section Configurations",
];

describe("End to End flow for Edwise Group website", () => {
  it("Launch URL and validate username heading", async () => {
    await homepage.launchURL();
    expect(await homepage.$heading().isDisplayed())
      .withContext("Username heading not displayed")
      .toBeTrue();
  });

  it("Click on Configuration option and validate dropdown options", async () => {
    await homepage.clickConfiguration();
    let a = await homepage.validateDropdown();
    for (let i = 1; i <= 4; i++) {
      expect(a[i]).toEqual(values[i]);
    }
  });

  it("Click on Select User option and validate username heading", async () => {
    await homepage.selectUser();
    expect(await homepage.$heading().isDisplayed())
      .withContext("Username heading not displayed")
      .toBeTrue();
  });

  it('Select "Sachin" from Select User dropdown and "LEA_Data_Admin" from Select Role dropdown and click on Select button and validate if username "Sachin" is displayed', async () => {
    await homepage.selectDropdownValues();
    expect(await homepage.$label().isDisplayed())
      .withContext("Username Sachin is not displayed")
      .toBeTrue();
  });

  it("Click on Add request option and validate change request header", async () => {
    await changerequest.clickAddRequest();
    expect(await changerequest.$changeRequestHeader().isDisplayed())
      .withContext("Change Request header is not displayed")
      .toBeTrue();
  });

  it('Select "St. David Unified District" as Educational organization and validate Educational organization displayed matches the selected Educational Organization', async () => {
    await changerequest.addRequestEducationalOrganization();
    expect(await changerequest.$educationalOrganizationValidate().isDisplayed())
      .withContext("Educational organization name St. David Unified District is not displayed")
      .toBeTrue();
  });

  it('Select Category as "School" and validate category displayed matches the selected category', async () => {
    await changerequest.addRequestCategory();
    expect(await changerequest.$categoryValidate().isDisplayed())
      .withContext("Category name School is not displayed")
      .toBeTrue();
  });

  it('Set Date to "August 15 2025" and validate date displayed', async () => {
    await changerequest.addRequestDate();
  });

  it('Select "Organization Categories" box and validate Educational Organization name, Category and Date displayed', async () => {
    await changerequest.selectOrganizationCategory()
    let e = obj.details.educational_organization;
    let c = obj.details.category;
    let d = obj.details.date;
  });

  it('Fill details in the form and set "Operation Status" to "Future", "School category" to "Elementary School", "School type" as "Alternative", "Medium of Instruction" as "Face to Face", "Title" as "Missing" and "Accreditation status" as "Not State Accredited" ', async () => {


  });

  it("Uncheck Grade 1 and Grade 2 checkbox and validate red color of text", async () => {


  });

  it("Select Grade 6 and Grade 7 checkbox and validate blue color of text", async () => {


  });

  it("Click on Save button and validate error message displayed", async () => {


  });

  it("Enter value in Reason for the change field", async () => {


  });

  it('Click on Save button and validate yellow border displayed on "Organization Categories" box', async () => {


  });

  it('Select "Organization Categories" box', async () => {


  });

  it("Click on Delete button and validate popup message displayed", async () => {

    
  });
});
