class Relationships{
    constructor(){
        this.$relationshipHeader=()=>$('//button[@class="btn btn-primary button-add-panel"]//span[normalize-space()="Add Relationship"]');
        this.$$upload=()=>$$('//img[@class="form-cross-icon"]');
        this.$okButton=()=>$('//span[@class="rz-button-box"]//span[normalize-space()="Ok"]');
    }
    /**
     * method to upload the csv file
     */
    async uploadFile(){
    await this.$chooseFile().scrollIntoView();
    const filePath = '\test\imgUpload'
    const remoteFilePath = await browser.uploadFile(filePath)
   await this.$chooseFile().setValue(remoteFilePath)
   
}
/**
 * method to click ok button
 */
async clickOk(){
    await this.$okButton().click();
}


    }

export default new Relationships()