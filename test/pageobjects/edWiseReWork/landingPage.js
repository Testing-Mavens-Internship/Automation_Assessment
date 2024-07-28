
import CommonPage from "./commonPage.js";
import dataSheet from "../../testData/edWiseData.json" assert { type: 'json' };

class LandingPage extends CommonPage {
    constructor() {
        super();
        this.$configurationButton = () => $(`//span[text()="Configurations"]/ancestor::div[@class="rz-navigation-item-wrapper"]`);
        this.$$configMenuCount = () => $$(`//ul//ul[@class="rz-navigation-menu"]//li//span`);
        this.$configEachElement = (index) => $(`(//ul//ul[@class="rz-navigation-menu"]//li//span)[${index}]`);
        this.$configElementBlock = (blockName) => $(`//span[text()="${blockName}"]/ancestor::li[@class="rz-navigation-item config-sub-link"]`);
    }
/**
 * 
 * @returns {array}
 */
    async clickConfig() {
        await this.$configurationButton().click();
        let elementCount = await this.$$configMenuCount();
        let configElements = await this.pushToArray(elementCount);
        return configElements;
    }
/**
 * 
 * @param {string} blockName 
 */
    async clickConfigElement(blockName) {
        await this.$configElementBlock(blockName).click();
        await this.$selectUserHead().waitForDisplayed({ timeout: dataSheet.timeout, timeoutMsg: "Element is not visible" });
    }
}

export default new LandingPage();
