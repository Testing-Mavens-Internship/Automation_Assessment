import homePage from "../pageObjects/edwise/homePage.js";
import selectUserPage from "../pageObjects/edwise/selectUserPage.js";
import changeRequestPage from "../pageObjects/edwise/changeRequestPage.js";
import addRequestPage from "../pageObjects/edwise/addRequest.js"

import data from "../testData/requestArray.json"assert{type:"json"};

describe('End to end flow for edwise group website', () => {
    it('Launch the url for edwise group website', async () => {
        await homePage.launchUrl();
        expect (await homePage.$homeHeader().isDisplayed())
        .withContext('Home header is not displayed')
        .toBeTrue();
    })

    it('Click on configuration option and validate the dropdown elements',async()=>{
        let element =await homePage.clickConfiguration();
        const expectedValues = data.configurationDropDown;
        expectedValues.forEach(expectedValue => {
        expect(element).toContain(expectedValue)
         });
        expect (await homePage.$homeHeader().isDisplayed())
        .withContext('Home page is not displayed')
        .toBeTrue();
    })

    it('Click on the "Select User" option in the home page',async()=>{
        await homePage.clickSelectUser();
        expect (await selectUserPage.$selectUserField().isDisplayed())
         .withContext('Select user field is not displayed')
         .toBeTrue();
         expect (await selectUserPage.$selectRoleField().isDisplayed())
         .withContext('Select role field is not displayed')
         .toBeTrue();
    })

    it('Select user name and role and validate add request icon',async()=>{
        await selectUserPage.selectUserDetails();
        await changeRequestPage.$addRequestIcon().waitForDisplayed({timeout:data.timeout,timeoutMsg:'Request icon is not displayed' })
         expect (await changeRequestPage.$addRequestIcon().isDisplayed())
        .withContext('Add request button is not displayed')
        .toBeTrue();
    })

    it('Click on add request option',async()=>{

        await changeRequestPage.clickAddRequest()
        expect(await addRequestPage.$pageHeader().isDisplayed())
        .withContext('Request fields are not displayed')
        .toBeTrue();  
    })

    it('Select the eductaional organisation as Cochise elementary district and category as school',async()=>{
        await addRequestPage.selectOrganisation();
        let actualOrganisationName=await addRequestPage.$organisationHeading().getText();
        expect(actualOrganisationName).toBe('Cochise Elementary District')
        
       
    })

    it('Select a future date',async()=>{
        await addRequestPage.selectFutureDate('August');
        let actualCategoryName=await addRequestPage.$categoryHeading().getText();
        expect (actualCategoryName).toBe('School');


    })

    it('Click on organisation category',async()=>{
        await addRequestPage.$organisationCategory();
        // let actualHeading= await addRequestPage.$organisationHeading();
        // expect (actualHeading).toBe('Organization Category Details');
    })

    it('Enter the details',async()=>{
        await addRequestPage.$spinner().waitForDisplayed({reverse:true,timeout:data.timeout,timeoutMsg:"spinner is still displayed"});
        await addRequestPage.fillDetails();

    })

       

    
})


