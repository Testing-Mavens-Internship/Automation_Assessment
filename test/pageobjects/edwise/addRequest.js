class AddRequest{
    constructor(){
        this.$educationalOrganization=()=>$('//span[normalize-space()="Education Organization"]');
        this.$selectCategory=()=>$('//span[normalize-space()="Category"]');
        this.$effectiveDate=()=>$('//span[normalize-space()="Effective Date"]');
        this.$chooseEducationalOrganization=()=>$('//label[normalize-space()="Cochise Elementary District"]');
        this.$chooseCategory=()=>$('//label[normalize-space()="School"]');
        this.$checkBoxFuture=()=>$('//span[@class="rz-radiobutton-icon"]');
        this.$relationshipSelect=()=>$('//p[normalize-space()="Relationships"]');
    }
    /**
     * method to shift the chechbox from immediate to future
     */
    async checkBoxFuture(){
        await this.$chooseEducationalOrganization().getText();
        await this.$chooseCategory().getText();
        await this.$checkBoxFuture().click();
    }
    async selectRelationship(){
        await this.$relationshipSelect().click();
    }
}
export default new AddRequest()