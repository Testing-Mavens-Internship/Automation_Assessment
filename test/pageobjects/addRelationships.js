
import CommonPage from "./commonPage.js";
import data from '../testData/timeout.json' assert {"type":"json"}

class AddRelationshipsPage extends CommonPage{

    constructor()
    {
        super();
       
        
    }
/**
 * Fill Reason for change
 * @param {string} text 
 */
    async fillReasonTextInRelationShip(text)
    {
    await this.$reasonText().setValue(text)
    }


      /**
     * upload csv file
     */
      async fileUploadOneForRelationShips() {

        const filePath = 'upload/test.csv';
        const remoteFilePath = await browser.uploadFile(filePath)
        await this.$chooseFile().setValue(remoteFilePath)
        
        }
/**
 * upload a normal file
 */
    async fileUploadTwoForRelationShips() {

            const filePath = 'upload/sample.pdf';
            const remoteFilePath = await browser.uploadFile(filePath)
            await this.$chooseFile().setValue(remoteFilePath)
            
            }

            /**
             * upload a large file which is greater than 10mb
             */

         async fileUploadThreeForRelationShips() {

                const filePath = 'upload/largeFile.pdf';
                const remoteFilePath = await browser.uploadFile(filePath)
                await this.$chooseFile().setValue(remoteFilePath)
                
                }
  

   
    

}

export default new AddRelationshipsPage();