import CommonPage from "./common.js"
class OrganisationPage extends CommonPage{
    constructor(){
        super();
        this.$category=()=>$('//span[@class="review-category-name"]');
    }
    /**
     * Get the category name displayed in the organisation page
     */

    async getCategoryName(){
        await this.$category().waitForDisplayed({timeout:30000,timeoutMsg:'category is not displayed'});
        let categoryName= await this.$category().getText();
        return categoryName;
    }
}
export default new OrganisationPage();