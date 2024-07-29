import homePage from "../pageObjects/edwise/homePage.js";
import selectUserPage from "../pageObjects/edwise/selectUserPage.js";
import changeRequestPage from "../pageObjects/edwise/changeRequestPage.js";
import addRequestPage from "../pageObjects/edwise/addRequest.js";
import reviewChangeRequest from "../pageObjects/edwise/reviewChangeRequest.js";
import data from "../testData/requestArray.json"assert {type:"json"};



describe('An end to end flow of edwise group website',()=>{
    it('Launch the url for edwise group website',async()=>{
        await homePage.launchUrl();
        expect (await homePage.$homeHeader().isDisplayed())
        .withContext('Home page is not displayed')
        .toBe(true);
    })

    it('Click on configuration option and validate the dropdown elements',async()=>{
        let element =await homePage.clickConfiguration();
        const expectedValues = ['Select User', 'Role Permission', 'User Roles', 'Section Configurations'];
        expectedValues.forEach(expectedValue => {
            expect(element).toContain(expectedValue)
        });
        expect (await homePage.$homeHeader().isDisplayed())
        .withContext('Home page is not displayed')
        .toBe(true);

    })

    it('Click on select user',async()=>{
        await homePage.clickSelectUser();
        expect (await selectUserPage.$selectUserField().isDisplayed())
        .withContext('Select user field is not displayed')
        .toBeTrue();
        expect (await selectUserPage.$selectRoleField().isDisplayed())
        .withContext('Select role field is not displayed')
        .toBeTrue();
    })

    it('Select user name and role.Click select button and validate add request icon',async()=>{
        await selectUserPage.selectUserDetails();
        expect (await changeRequestPage.$addRequestIcon().isDisplayed())
        .withContext('Add request button is not displayed')
        .toBeTrue();

    })

    it('Click on add request option and validate if the user is Sachin',async()=>{
        await changeRequestPage.clickAddRequest()

        expect(await addRequestPage.$requestBox().isDisplayed())
        .withContext('Request fields are not displayed')
        .toBeTrue();

     })

    it('Select education organization',async()=>{
       let actualRequestCards= await addRequestPage.selectOrganisation();
       expect(actualRequestCards).toEqual(data.requestArray)
        .withContext('elements are not displayed')
        .toBeTrue();
    })

    it('Select category',async()=>{
        let categoryCards=await addRequestPage.selectCategory();
        let expectedValues = ['Organization Categories', 'Relationships', 'Networks', 'Programs', 'Documents'];
        expectedValues.forEach(expectedValue => {
            expect(categoryCards).toContain(expectedValue)
            .withContext('category cards are not displayed')
            .toBeTrue()
        });
    })

    it('Select a future date and validate that the date selected is future date in that month',async()=>{
        await addRequestPage.selectTime();
        expect(await addRequestPage.$calender().isEnabled())
        .withContext('Calender is not enabled')
        .toBeTrue();

    })

    it('Click on organisation category',async()=>{
        await addRequestPage.selectOrganisationCategory('Organization Categories');
        await reviewChangeRequest.$reviewOrganisation().waitForDisplayed({timeout:10000,timeoutMsg:'review organisation is not displayed'});
        let organisationName=await reviewChangeRequest.reviewOrganisation();
        let categoryName=await reviewChangeRequest.reviewCategory();
        
        expect(organisationName).toEqual('Cochise Elementary District')
        .withContext('Organisation name is not matching')
        .toBeTrue();
        expect(categoryName).toBe('Charter Authorizer')
        .withContext('Category name is not matching')
        .toBeTrue();

    })

    it('Click on close button',async()=>{
        await reviewChangeRequest.clickCloseButton();
        expect (await changeRequestPage.$changeRequestHeader().isDisplayed())
        .withContext('Change request page is not displayed')
        .toBeTrue();
    })

    it('Click on add request option and validate if the user is Sachin',async()=>{
        await changeRequestPage.clickAddRequest();
    

        expect(await addRequestPage.$requestBox().isDisplayed())
        .withContext('Request fields are not displayed')
        .toBeTrue();

     })

    it('Select education organization',async()=>{
        let actualRequestCards=await addRequestPage.selectOrganisation();
        expect(actualRequestCards).toContain(data.requestArray)
        .withContext('elements are not matching')
        .toBeTrue();
    })

    it('Select category',async()=>{
        let categoryCards=await addRequestPage.selectCategory();
        let expectedValues = ['Organization Categories', 'Relationships', 'Networks', 'Programs', 'Documents'];
        expectedValues.forEach(expectedValue => {
            expect(categoryCards).toContain(expectedValue)
            .withContext('category cards are not displayed')
            .toBeTrue()
        });
    })

    it('Select a future date and validate that the date selected is future date in that month',async()=>{
        await addRequestPage.selectTime();
        await addRequestPage.$calender().waitForDisplayed({timeout:data.timeout,timeoutMsg:'calender is not displayed'});
        expect(await addRequestPage.$calender().isEnabled())
        .withContext('Calender is not enabled')
        .toBeTrue();

    })

    it('Click on organisation category',async()=>{
        await addRequestPage.selectOrganisationCategory('Relationships');
        expect (await addRequestPage.$addRelationship().isDisplayed())
        .withContext('Add relationship button is not displayed')
        .toBeTrue();
        
    })

    it('Click on the add relationship option and validate the error message',async()=>{
        await addRequestPage.clickAddRelationship();
        expect(await addRequestPage.$relationTypeRequired().isDisplayed())
        .withContext('Relationship type error message is not displayed')
        .toBeTrue();
        expect(await addRequestPage.$organisationRequired().isDisplayed())
        .withContext('Organisation error message is not displayed')
        .toBeTrue();
    })

    it('Select relationship name and organiation type',async()=>{
        await addRequestPage.selectType('Authorizes','Arizonans For Children - East Valley Cen');
        expect (await addRequestPage.$reasonForChange().isDisplayed())
        .withContext('Reason for change is not displayed')
        .toBeTrue();

    })

    it('Enter the reason for change',async()=>{
        await addRequestPage.enterReasonForChange('test');
        expect (await addRequestPage.$uploadIcon().isDisplayed())
        .withContext('Upload icon is not displayed')    
        .toBeTrue();
    })

    it('click on the upload icon and upload a csv file',async()=>{
        await addRequestPage.uploadFile('test/testData/upload.csv');
        await addRequestPage.$alertPopupMessage().waitForDisplayed({timeout:data.timeout,timeoutMsg:'alert popup is not displayed'})
        expect (await addRequestPage.$alertPopupMessage().isDisplayed())
        .withContext('alert popup is not displayed')
        .toBeTrue();

    })

    it('Click on the ok button in the alert popup',async()=>{
        await addRequestPage.clickAlertOk();
        expect (await addRequestPage.$uploadIcon().isDisplayed())
        .withContext('upload icon is not displayed')
        .toBeFalse();
    })

    it('click on the upload icon and upload a pdf file',async()=>{
        await addRequestPage.uploadFile('test/testData/pdf.pdf');
        await addRequestPage.$alertPopupMessage().waitForDisplayed({timeout:data.timeout,timeoutMsg:'alert popup is not displayed'})
        expect (await addRequestPage.$alertPopupMessage().isDisplayed())
        .withContext('alert popup is not displayed')
        .toBeTrue();

    })

    
})

