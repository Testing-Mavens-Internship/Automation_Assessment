import landingPage from "../pageobjects/edwise/landingPage.js";
import selectUserPage from "../pageobjects/edwise/selectUserPage.js";
import changeRequestPage from "../pageobjects/edwise/changeRequestPage.js";
import data from "../../testData/data.json" assert { type: "json" };

describe("Verifying the functionality of end to end flow of 'EdWise' application", () => {
  it("Launch the url of 'EdWise' application in the browser", async () => {
    await landingPage.launchUrl();
    await landingPage
      .$usernameLabel()
      .waitForDisplayed({
        timeout: data.times.timeout,
        timeoutMsg: "username label is still not displayed",
      });
    expect(await landingPage.$usernameLabel().isDisplayed())
      .withContext("username label is not displayed")
      .toBeTrue();
  });

  it("Click on the 'configurations' option and validate four sub options are displayed", async () => {
    await landingPage.clickConfigurations();
    let list = await landingPage.configurationsDropdownSelection();
    let compareList = [
      "Select User",
      "Role Permission",
      "User Roles",
      "Section Configurations",
    ];
    expect(list).toContains(compareList);
  });

  it("Click select user from the dropdown list", async () => {
    await landingPage.clickSelectUser();
    await selectUserPage
      .$selectUserPlaceholder("mZFqsm2aWk", "Select User")
      .waitForDisplayed({
        timeout: data.times.timeout,
        timeoutMsg: "Select User is still not displayed",
      });
    await selectUserPage
      .$selectUserPlaceholder("6DpMa9wHv0", "Select Role")
      .waitForDisplayed({
        timeout: data.times.timeout,
        timeoutMsg: "Select Role is still not displayed",
      });
    expect(
      await selectUserPage
        .$selectUserPlaceholder("mZFqsm2aWk", "Select User")
        .isDisplayed()
    )
      .withContext("Select User is not displayed")
      .toBeTrue();
    expect(
      await selectUserPage
        .$selectUserPlaceholder("6DpMa9wHv0", "Select Role")
        .isDisplayed()
    )
      .withContext("Select Role is not displayed")
      .toBeTrue();
  });

  it("Click on select user", async () => {
    await selectUserPage.selectUser();
    expect(
      await selectUserPage
        .$selectDataOption("popup-y964vaLN60", "Sachin")
        .isDisplayed()
    )
      .withContext("Option sachin is not displayed")
      .toBeTrue();
  });

  it("Select option 'sachin'", async () => {
    await selectUserPage.selectSachin();
    expect(
      await selectUserPage.$selectUserPlaceholder("6DpMa9wHv0", "Select Role"),
      isDisplayed()
    )
      .withContext("Select role option is not displayed")
      .toBeTrue();
  });

  it("Click on select role", async () => {
    await selectUserPage.selectUserRole();
    expect(
      await selectUserPage
        .$selectDataOption("popup-7ZcuhPwg2U", "LEA_Data_Admin")
        .isDisplayed()
    )
      .withContext("LEA_Data_Admin option is not displayed")
      .toBeTrue();
  });

  it("Select option 'LEA_Data_Admin'", async () => {
    await selectUserPage.selectLEADataAdmin();
    expect(await selectUserPage.$selectButton().isDisplayed())
      .withContext("Select button is not displayed")
      .toBeTrue();
  });

  it("Click on select button", async () => {
    await selectUserPage.clickSelectButton();
    await changeRequestPage
      .$addRequestOption()
      .waitForDisplayed({
        timeout: data.times.timeout,
        timeoutMsg: "Add request option is still not displayed",
      });
    await changeRequestPage
      .$approvalOption()
      .waitForDisplayed({
        timeout: data.times.timeout,
        timeoutMsg: "Approval option is still not displayed",
      });
    await changeRequestPage
      .$labelSachin()
      .waitForDisplayed({
        timeout: data.times.timeout,
        timeoutMsg: "label sachin is still not displayed",
      });
    expect(await changeRequestPage.$addRequestOption().isDisplayed())
      .withContext("Add request option is not displayed")
      .toBeTrue();
    expect(await changeRequestPage.$approvalOption().isDisplayed())
      .withContext("Approval option is not displayed")
      .toBeTrue();
    expect(await changeRequestPage.$labelSachin().isDisplayed()).withContext(
      "label sachin is not displayed"
    ),
      toBeTrue();
  });

  it("Click on add request button", async () => {
    await changeRequestPage.clickAddRequestButton();
    expect(await changeRequestPage.$educationOrganizationLabel().isDisplayed())
      .withContext("label is not displayed")
      .toBeTrue();
    expect(await changeRequestPage.$categoryLabel().isDisplayed())
      .withContext("label is not displayed")
      .toBeTrue();
    expect(await changeRequestPage.$effectiveDateLabel().isDisplayed())
      .withContext("label is not displayed")
      .toBeTrue();
  });

  it("Click on select education organization",async()=>{
    await changeRequestPage.clickEducationOrganization()
    expect(await changeRequestPage.$organizationName().isDisplayed()).withContext("Option is not displayed").toBeTrue()
  })

  it("Select 'Willcox Unified District' from the drop down list and validate",async()=>{
    await changeRequestPage.selectOrganizationName()
    expect(await changeRequestPage.$category().isDisplayed()).withContext("Option not displayed").toBeTrue()  
  })

  it("Click on category",async()=>{
    await changeRequestPage.clickCategory()
    expect(await changeRequestPage.$categoryName().isDisplayed()).withContext("Option is not displayed").toBeTrue() 
  })

  it("Select 'Charter Authorizer' from the drop down list and validate",async()=>{
    
  })

  it("Click on future option",async()=>{

  })

  it("Verify date icon is enabled",async()=>{

  })

  it("Click on review & submit button",async()=>{

  })

  it("Validate the category name",async()=>{

  })

  it("Click on close button",async()=>{

  })

});
