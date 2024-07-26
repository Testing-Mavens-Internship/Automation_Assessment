import Common from "./edMaster/common.js";

class RequestPage extends Common{
    constructor(){
        super();
        this.$uploadField=()=>$(`(//img[@src="images/doc-upload.svg"])[1]`)
        this.$reasonForChangeField=()=>$(`(//textarea[@aria-label="TextArea"])[1]`)
        this.$alertMsg=()=>$(`(//p[@class="rz-dialog-alert-message"])[1]`)
    }
    async upload1(){
    const filepath=`MockData.csv`;
    const remoteFilePath = await browser.uploadFile(filepath);
    await this.$uploadField().setValue(remoteFilePath);
    }

    async upload2(){
    const filepath=`Manual.csv`;
    const remoteFilePath = await browser.uploadFile(filepath);
    await this.$uploadField().setValue(remoteFilePath);
    }
    
    async reasonForChange(){
        await this.$reasonForChangeField().click();
        let randomDigits=Math.floor(Math.random() * 100);
        await this.$reasonForChangeField().setValue("Solomon test "+randomDigits);

    }
}
export default new RequestPage();