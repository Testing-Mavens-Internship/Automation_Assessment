

import CommonPage from "./commonPage.js";
import data from '../testData/timeout.json' assert {"type":"json"}

class AddOrganizationsPage extends CommonPage{

    constructor()
    {
        super();
      
       
    }

   
/**
 * Fill the Reason for Change
 * @param {string} text 
 */
    async fillReasonText(text)
    {
    await this.$reasonText().setValue(text)
    }

    /**
     * upload csv file
     */
    async fileUploadOneForOrganizations() {

        const filePath = 'upload/test.csv';
        const remoteFilePath = await browser.uploadFile(filePath)
        await this.$chooseFile().setValue(remoteFilePath)
        
        }
/**
 * upload a normal file
 */
    async fileUploadTwoForOrganizations() {

            const filePath = 'upload/sample.pdf';
            const remoteFilePath = await browser.uploadFile(filePath)
            await this.$chooseFile().setValue(remoteFilePath)
            
            }

            /**
             * upload a large file which is greater than 10mb
             */

         async fileUploadThreeForOrganizations() {

                const filePath = 'upload/largeFile.pdf';
                const remoteFilePath = await browser.uploadFile(filePath)
                await this.$chooseFile().setValue(remoteFilePath)
                
                }

                
  
    

}

export default new AddOrganizationsPage();