import CommonPage from "./common.js";

class ChangeRequest extends CommonPage{
    constructor(){
        super();
            this.$$headerTexts=()=>$$(`//div[@class="search-education-title"]`);
            this.$organization=()=>$(`//label[text()="Select Education Organization"]`);
            this.$selectOrganization=()=>$(`//li[@aria-label="Alpine Elementary District"]`);
            this.$detailsIcon=()=>$(`//div[@class="card-details"]`);
            this.$category=()=>$(`//label[text()="School"]`);
            this.$selectCategory=()=>$(`//li[@aria-label="Charter Authorizer"]`);
            this.$change=()=>$(`(//div[@class="rz-radiobutton"])[2]`);
            this.$validateChange=()=>$(`//div[@class="rz-radiobutton-box rz-state-active"]`);

    }

    /**
     * To validate the texts displayed after clicking add request
     * @returns string
     */
    async validateHeaderTexts(){
        const count = await this.$$headerTexts().length;
        const texts = [];
        for(let i=0;i<count;i++){
        texts= await this.$$headerTexts[i].getText();
        }
        return texts;
    }

    /**
     * To select an educational organization from dropdown
     */
    async selectEduCationalOrganization(){
        await this.$organization().click();
        await this.$selectOrganization().click();

    }

    /**
     * To select a category from dropdown
     */
    async selectCategory(){
        await this.$category().click();
        await this.$selectCategory().click();

    }

    /**
     * To change from default
     */
    async changeDefault(){
        await this.$change().click();
    }

    /**
     * to validate change
     */
    async validateChange(){
       const change = await this.$validateChange().getAttribute();
       expect(await change(toContain('active')));
    }
}

export default new ChangeRequest();