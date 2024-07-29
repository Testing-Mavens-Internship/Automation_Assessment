import CommonPage from "./common.js";
class ReviewChangeRequest extends CommonPage{
    constructor(){
        super();
        this.$reviewCategory=()=>$('//span[@class="review-category-name"]');
        this.$reviewOrganisation=()=>$('//span[@class="review-draft-organization-name"]');
        this.$close=()=>$('//button[@class="button-close-panel"]');
    }
    /**
     * Get the organisation name to review
     * @returns organisation name
     */
    async reviewOrganisation(){
        let organisationName=await this.$reviewOrganisation().getText();
        await this.$reviewCategory().waitForDisplayed({timeout:10000,timeoutMsg:'review category name is not displayed'});
        return organisationName;
       
    }
    /**
     * Get the category name to review
     * @returns category name
     */
    async reviewCategory(){
        let categoryName=await this.$reviewCategory().getText();
        //await this.$close().waitForDisplayed({timeout:10000,timeoutMsg:'close button is not displayed'});
        return categoryName;
    }
    /**
     * Click on the close button
     */
    async clickCloseButton(){
        await this.$close().click();
    }
}
export default new ReviewChangeRequest();