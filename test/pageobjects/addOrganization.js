
import CommonPage from "./commonPage.js";


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
 * click on save button
 */

        async clickOnSaveButton() {
            await this.$saveButton().click();
        }

    }
export default new AddOrganizationsPage();