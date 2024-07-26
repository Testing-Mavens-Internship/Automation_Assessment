import data from "../../../testData/data.json" assert { type: "json" };
import Common from "./common.js";

class ChangeRequest extends Common {
  constructor() {
    super();
    this.$addRequestOption = () =>
      $(`//li[@id="xD9WfeYZyk"]//span[text()="Add Request"]`)
    this.$approvalOption = () =>
      $(`//li[@id="50mZvyuvSU"]//span[text()="Approval Queue"]`)
    this.$labelSachin = () => $(`//label[text()="Sachin"]`)
    this.$changeRequestHeader = () => $(`//h6[text()="Change Requests"]`)
    this.$addRequestButton = () => $(`//button//span[text()="Add Request"]`)
    this.$educationOrganizationLabel = () =>
      $(`//span[text()="Education Organization"]`)
    this.$categoryLabel = () => $(`//span[text()="Category"]`)
    this.$effectiveDateLabel = () => $(`//span[text()="Effective Date"]`)
    this.$organization=()=>$(`//label[text()="Select Education Organization"]`)
    this.$category=()=>$(`//label[text()="Select Category"]`)
    this.$organizationName=()=>$(`//span[text()="Willcox Unified District"]`)
    this.$categoryName=()=>$(`//span[text()="Charter Authorizer"]`)
  }

  /**
   * Click add request button
   */
  async clickAddRequestButton() {
    await this.clickButton(this.$addRequestButton());
    await this.$educationOrganizationLabel().waitForDisplayed({
      timeout: data.times.timeout,
      timeoutMsg: "label is still not displayed",
    })
    await this.$categoryLabel().waitForDisplayed({
      timeout: data.times.timeout,
      timeoutMsg: "label is still not displayed",
    });
    await this.$effectiveDateLabel().waitForDisplayed({
      timeout: data.times.timeout,
      timeoutMsg: "label is still not displayed",
    })
  }

  /**
   * Click on the select education organization 
   */
  async clickEducationOrganization(){
    await this.$organization().click()
    await this.$organizationName().waitForDisplayed({timeout:data.times.timeout,timeoutMsg:"Option still not displayed"})
  }

  async selectOrganizationName(){
    await this.$organizationName().click()
    await this.$category().waitForDisplayed({timeout:data.times.timeout,timeoutMsg:"Option still not displayed"})
  }

  async clickCategory(){
    await this.$category().click()
    await this.$categoryName().waitForDisplayed({timeout:data.times.timeout,timeoutMsg:"Option still not displayed"})
  }

}
export default new ChangeRequest();
