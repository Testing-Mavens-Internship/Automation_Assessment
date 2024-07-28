import Common from "./common.js";
import path from 'path';
import os from 'os';
class RequestPage extends Common{
    constructor(){
        super();
        this.$uploadField=()=>$(`(//form[@class="rz-form w-100"]//img[@src="images/doc-upload.svg"])[1]`)
        this.$reasonForChangeField=()=>$(`(//textarea[@aria-label="TextArea"])[1]`)
        this.$alertMsg=()=>$(`(//p[@class="rz-dialog-alert-message"])[1]`)
    }
    async upload1(){
    // const homeDir = os.homedir();
    // const filepath=path.join(homeDir, 'Downloads', MockData.xlsx);
    const filepath='Automation_Assessment/test/MockData.csv'
    const remoteFilePath = await browser.uploadFile(filepath);
    await this.$uploadField().setValue(remoteFilePath);
    }

    async upload2(){
    const filepath=`./test/Manual.xlsx`;
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