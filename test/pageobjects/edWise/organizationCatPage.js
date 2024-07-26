import CommonPage from "./commonPage.js";
import dataSheet from "../../testData/edWiseData.json"assert{type:'json'}

class OrganizationCatPage extends CommonPage{
    constructor(){
        super();
        this.$closeButton=()=>$(`//button[@class="button-close-panel"]`)
        this.$categoryName=()=>$(`//span[@class="review-category-name"]`)
        this.$closeButton=()=>$(`//button[@class="button-close-panel"]`)
        
    }

    async closeButton(){
        await this.$closeButton().click;
    }
}

export default new OrganizationCatPage()