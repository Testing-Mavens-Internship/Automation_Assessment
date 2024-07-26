import Common from "./common.js";
import data from "../../../testData/data.json" assert { type: "json" };

class LandingPage extends Common {
  constructor() {
    super();
    this.$advanceFilter = () =>
      $(`//span[normalize-space()="Advanced Filter"]`);
    this.$usernameLabel = () => $(`//label[text()="Username"]`);
    this.$configurationsOption = () =>
      $(`//li[@id="kaZetNeBv0"]//span[text()="Configurations"]`);
    this.$$configurationsList = () =>
      $$(`//ul[@class="rz-navigation-menu"]//li//a//span`);
    this.$selectUserOption = () =>
      $(`//ul[@class="rz-navigation-menu"]//li//a//span[text()="Select User"]`);
  }

  /**
   * Click configurations option
   */
  async clickConfigurations() {
    await this.clickButton(this.$configurationsOption());
  }

  /**
   * Get the list of items under the configurations options
   * @returns array
   */
  async configurationsDropdownSelection() {
    let dropItems = [];
    let dropList = await this.$$configurationsList();
    for (let item of dropList) {
      await item.waitForDisplayed({
        timeout: data.times.timeout,
        timeoutMsg: "Drop list not displayed",
      });
      dropItems.push(await item.getText());
    }
    return dropItems;
  }

  /**
   * Click select user option
   */
  async clickSelectUser() {
    await this.clickButton(this.$selectUserOption());
  }
}
export default new LandingPage();
