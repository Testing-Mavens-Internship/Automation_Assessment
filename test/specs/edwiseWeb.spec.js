import landingPageObj from "../../pageobjects/landingPage.js";
import selectUserPageObj from "../../pageobjects/selectUserPage.js";
import changeRequestPageObj from "../../pageobjects/changeRequestPage.js";


describe("End to end flow of Edwise web application", () => {
  it("Launch Edwise web application", async () => {
    await landingPageObj.launchUrl();
    expect(
      await landingPageObj
        .$landingPageHeader()
        .waitForDisplayed({
          timeout: 5000,
          timeoutMsg: "landing page header not displayed",
        })
    ).toBe(true);
  });
  it("Click on configurations menu", async () => {
    await landingPageObj.$configurationsMenu().click();
    let arr = ["Select User","Role Permission","User Roles","Section Configurations"];
    // for (let i = 0; i < arr.length; i++) {
    //   expect(
    //     await landingPageObj
    //       .$configurationsMenuOptions(arr[i])
    //       .isDisplayed({
    //         timeout: 10000,
    //         timeoutMsg: "landing page header not displayed",
    //       })
    //   ).toBe(true);
    // }
  });
  it("Select the select user option from the Configurations menu", async () => {
    await landingPageObj.$configurationsMenuOptions().click();
    expect(await selectUserPageObj.$selectUserDropDownsPlaceholders("Select User")
        .waitForDisplayed({timeout: 10000,timeoutMsg: "Select User dropdown placeholder not displayed",}))
        .toBe(true);

    expect(await selectUserPageObj.$selectUserDropDownsPlaceholders("Select Role")
          .waitForDisplayed({timeout: 10000,timeoutMsg: "Select Role dropdown placeholder not displayed",}))
          .toBe(true);

  });

  it("Select the option Sachin from the Select User dropdown and verify it is selected", async () => {
    await selectUserPageObj.selectUser();
    expect(await selectUserPageObj.$selectUserDropDownOptions("Sachin").toBeSelected()).toBe(true);
  })

  it('Select the option LEA_Data_Admin from the Select Role dropdown and verify it is selected', async () => {
    await selectUserPageObj.selectRole();
    expect(await selectUserPageObj.$selectUserDropDownOptions("LEA_Data_Admin").toBeSelected()).toBe(true);
  })
  it('Click on the select Button', async () => {
    await selectUserPageObj.clickElementButton(await selectUserPageObj.$selectButton());
    expect(await changeRequestPageObj.$addRequestMenu().isDisplayed()).toBe(true);
    expect(await changeRequestPageObj.$approvalQueueMenu().isDisplayed()).toBe(true);
})
it('Click on the Add Request Menu', async () => {
    let labelArray = ["Education Organization", "Category", "Effective Date"];
    await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$addRequestMenu());
    for (let i = 0; i < labelArray.length; i++) {
        expect(await changeRequestPageObj.changeRequestFieldsLabel(labelArray[i]).isDisplayed()).toBe(true);
    }
})
it('Click on Educational Organization Dropdown', async () => {
    await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$changeRequestFields("Select Education Organization"));
    let extractedTextArray = await changeRequestPageObj.extractTextFromElements();
    expect(extractedTextArray.length).toBeGreaterThan(0);
})
it('Select Sierra Vista Unified District as Educational Organization', async () => { 
    await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$selectEducationalOrganizationOption());
    let cardTextArray = await changeRequestPageObj.validateChangeRequestCard();
    expect(cardTextArray.length).toBeGreaterThan(0);
})
it('Click on category dropdown', async () => {
    await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$changeRequestFields('Charter Authorizer'));
    let categoryTextArray = await changeRequestPageObj.validateCategoryOptions();
    expect(categoryTextArray.length).toBeGreaterThan(0);
})
it('Select Charter Authorizer as Category', async () => {
    await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$categoryOption(1));
    let cardTextArray = await changeRequestPageObj.validateChangeRequestCard();
    expect(cardTextArray.length).toBeGreaterThan(0);
})
it('Check the future date and verify that the calender is clickable', async () => {
    await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$futureDate());
    expect(await changeRequestPageObj.$calender().isEnabled()).toBe(true);
})
it('Click on calender', async () => {
    await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$calender());
    let date = await changeRequestPageObj.$pastDate();
    let Clickable = false;
    if(date.isClickable()){
        Clickable = true;
} 
    expect(Clickable).toBe(false);
})
it('Pick a date from the calender', async () => {
    await changeRequestPageObj.pickADate();
})
it('click on organizational categories', async () => {
    await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$organizationCategoryDiv());
    let status = await changeRequestPageObj.reviewChangerequest();
    expect(status).toBe(true);
})
it('click on close button', async () => {
    await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$closeButton());
    expect(await changeRequestPageObj.$changeRequestPageHeader().isDisplayed());
})
it('click on add request', async () => {
    await changeRequestPageObj.clickElementButton(await changeRequestPageObj.$addRequestButton());
})


});

