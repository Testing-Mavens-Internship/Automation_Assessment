import CommonPage from "./commonPage.js";
class SelectUser extends CommonPage {
  constructor() {
    super();
    this.$landingPageFieldsPlaceholders = (label) =>
      $(
        `//div[contains(@style,"--rz-gap:1rem;flex-wrap:nowrap;")]//label[text()="${label}"]`
      );
    this.$selectOptionFromLandingPageFields = (name) =>
      $(`(//li[@aria-label="${name}"]/span)[last()]`);
    this.$selectButton = () =>
      $(
        `(//div[contains(@style,"--rz-gap:10px;;flex-wrap:nowrap;")]//button)[last()]`
      );
  }

  /**
   * Method to select the user
   * @param {*} name
   * @returns username
   */
  async selectUser(name) {
    await this.clickElementButton(
      this.$selectOptionFromLandingPageFields(name)
    );
    let username = this.$selectOptionFromLandingPageFields().getText();
    return username;
  }
  /**
   * method to select role
   * @param {*} role
   * @returns
   */
  async selectRole(role) {
    await this.clickElementButton(
      this.$selectOptionFromLandingPageFields(role)
    );
    let roll = this.$selectOptionFromLandingPageFields().getText();
    return roll;
  }
}
export default new SelectUser();
