import Common from "./edWiseCommonPage.js";

class Organization extends Common
{
    constructor()
    {
        super()
        this.$organizationCategoryLabel=()=>$('//p[text()="Organization Categories"]')
    }

    /**
     * Click on Organization Categories
     */
    async clickOrganizationCategories()
    {
        await this.$organizationCategoryLabel().click()
        await this.$spinner().waitForDisplayed({timeout:40000,timeoutMsg:"Header still not displayed"})
    }
}
export default new Organization()