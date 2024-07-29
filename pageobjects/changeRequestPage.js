import CommonPage from "./commonPage.js";

class ChangeRequestPage extends CommonPage {
  constructor() {
    super();
    this.$addRequestMenu = () => $(`//a[@href='/AddRequest']`);
    this.$approvalQueueMenu = () => $(`//a[@href='/ApproverSummary']`);
    this.$changeRequestFieldsLabel = (label) =>
      $(`//span[normalize-space()='${label}']`);
    this.$changeRequestFields = (field) =>
      $(`//label[normalize-space()='${field}']`);
    this.$selectEducationalOrganizationOption = (option) =>
      $(`//li[@aria-label="${option}"]`);
    this.$categoryOption = (item) =>
      $(
        `//li[@aria-label="Charter Authorizer"]/parent::ul/li/span[text()="${item}"]`
      );
    this.$futureDate = () => $(`//label[normalize-space()='Future']`);
    this.$calender = () => $(`//input[@id='DatePickerDateOnlyType']`);
    this.$pastDate = () => $(`//span[normalize-space()='25']`);
    this.$calenderArrowButton = (direction) =>
      $(`//span[contains(@class,'rz-datepicker-${direction}-icon')]`);
    this.$date = () => $(`//span[normalize-space()='15']`);
    this.$month = () =>
      $(
        `//div[@style="height:auto;width:120px;margin-top:5px;text-align:left;"]/label`
      );
    this.$desiredMonthOrYear = (monthOrYear) =>
      $(`//span[normalize-space()='${monthOrYear}']`);
    this.$year = () =>
      $(
        `//div[@style="height:auto;width:80px;margin-top:5px;text-align:left;"]/label`
      );
    this.$addRequestOrganizationName = () =>
      $(`//span[@class='add-request-organization-name']`);
    this.$organizationCategory = () => $(`//span[contains(text(),'School')]`);
    this.$organisationCategoryMenu = () =>
      $(`//p[text()="Organization Categories"]`);

    this.$changeRequestPageHeader = () =>
      $(`//h6[normalize-space()='Change Requests']`);
    this.$addRequestButton = () =>
      $(`//button[contains(@class,'add-request-button')]`);
    this.$reasonForChange = () =>
      $(`(//textarea[@name="ReasonForChange" ])[1]`);
    this.$saveButton = () => $(`//button[contains(@class,'save-button')]`);
    this.$uploadFileButton = () => $(`(//div/input[@type="file"])[1]`);
    this.$operationalStatus = () =>
      $(
        `//div[@class="organizationCategoryDetails-form"]//label[text()="Active"]`
      );
    this.$operationalStatusOption = (option) =>
      $(`(//li[@aria-label="${option}"]/span)[last()]`);
    this.$organizationalCategoryPopupHeader = () =>
      $(`(//span[text()="Organization Category Details"])[last()]`);
    this.$schoolCategoryDropdown = () => $(`(//label[text()="All Levels"])[1]`);
    this.$categoryOptions = (option) =>
      $(`(//span[text()="${option}"])[last()]`);
  }

  async validateChangeRequestHeaders(organization, category) {
    let status = false;
    let organizationName = await this.$addRequestOrganizationName().getText();
    let categoryName = await this.$organizationCategory().getText();
    if (organizationName === organization || categoryName === category) {
      status = true;
    }
    return status;
  }

  /**
   * Method to pick a Date
   */
  async pickADate() {
    let status = false;
    await this.clickElementButton(await this.$date());
    if (await this.$calenderArrowButton("next").isDisplayed()) {
      status = true;
    }
    let currentMonth = await this.$month().getText();
    let currentYear = await this.$year().getText();
    if (currentYear !== "2025" || currentMonth !== "August") {
      await this.clickElementButton(await this.$month());
      await this.clickElementButton(await this.$desiredMonthOrYear("August"));
      await this.clickElementButton(await this.$year());
      await this.clickElementButton(await this.$desiredMonthOrYear("2025"));
    }
    await this.clickElementButton(await this.$date());
    return status;
  }
/**
 * Method to fill details in organization category popup
 */
  async fillDetails() {
    await this.$operationalStatus().click();
    await this.$operationalStatusOption().waitForDisplayed({
      timeout: 250000,
      timeoutMsg: "option is not displayed",
    });
    await this.$operationalStatusOption().click();
    await this.$schoolCategoryDropdown().click();
    await this.$categoryOption("Elementary School").click();
  }
}
export default new ChangeRequestPage();
