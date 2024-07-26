import data from "../../../testData/data.json" assert { type: "json" };

export default class Common {
  constructor() {}

  /**
   * Launch the url in the browser
   */
  async launchUrl() {
    await browser.url("https://web-edmaster-test-wtus-ui-01.azurewebsites.net");
    await browser.maximizeWindow();
  }

  /**
   * Common function for button clicks
   * @param {locator} locator
   */
  async clickButton(locator) {
    await locator.waitForDisplayed({
      timeout: data.times.timeout,
      timeoutMsg: "Button is still not displayed",
    });
    await locator.waitForClickable({
      timeout: data.times.timeout,
      timeoutMsg: "Button is still not clicked",
    });
    await locator.click();
  }
}
