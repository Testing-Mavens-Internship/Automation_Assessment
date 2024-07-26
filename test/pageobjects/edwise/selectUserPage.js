import data from "../../../testData/data.json" assert { type: "json" };
import Common from "./common.js";

class SelectUserPage extends Common {
  constructor() {
    super();
    this.$selectUserPlaceholder = (id, label) =>
      $(`//div[@id="${id}"]//label[text()="${label}"]`);
    this.$selectDataOption = (id, label) =>
      $(`//div[@id="${id}"]//li[@aria-label="${label}"]`);
    this.$selectButton = () => $(`//button[@id="IOkKshk9L0"]`);
  }

  /**
   * Click on select user
   */
  async selectUser() {
    await this.$selectUserPlaceholder("mZFqsm2aWk", "Select User").click();
  }

  /**
   * Click on option sachin
   */
  async selectSachin() {
    await this.$selectDataOption("popup-y964vaLN60", "Sachin").click();
  }

  /**
   * Click on select role
   */
  async selectUserRole() {
    await this.$selectUserPlaceholder("6DpMa9wHv0", "Select Role").click();
  }

  /**
   * Click on LEA_Data_Admin option
   */
  async selectLEADataAdmin() {
    await this.$selectDataOption("popup-7ZcuhPwg2U", "LEA_Data_Admin").click();
  }

  /**
   * Click on the select button
   */
  async clickSelectButton() {
    await this.clickButton(this.$selectButton());
  }
}
export default new SelectUserPage();
