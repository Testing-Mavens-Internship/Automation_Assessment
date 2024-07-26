class Change{
    constructor(){
        this.$header=()=>$('//img[@id="AS0ylP7tm0"]');
        this.$newRequest=()=>$('Automation_Assessment/test/pageobjects/changeRequest.js');
        this.$loginedUserHeader=()=>$('//label[normalize-space()="Sachin"]');
        
    }
    /**
     * method to create new request
     */
    async addNewRequest(){
        await this.$newRequest().click();
    }
}
export default new Change();