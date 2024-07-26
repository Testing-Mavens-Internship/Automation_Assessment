import homePage from "../pageObjects/edwise/homePage.js";
import selectUserPage from "../pageObjects/edwise/selectUserPage.js";
import changeRequestPage from "../pageObjects/edwise/changeRequestPage.js";
import addRequestPage from "../pageObjects/edwise/addRequest.js";
import organisation from "../pageObjects/edwise/organisationPage.js";

let name=await organisation.getCategoryName();
let actualName=await addRequestPage.getAttribute();

describe('An end to end flow of edwise group website',()=>{
    it('Launch the url for edwise group website',async()=>{
        await homePage.launchUrl();
        expect (await homePage.$homeHeader().isDisplayed())
        .withContext('Home page is not displayed')
        .toBe(true);
    })

    it('Click on configuration option and validate the dropdown elements',async()=>{
        let element =await homePage.clickConfiguration();
        expect (element).toContain('Select User','Role Permission','User Roles','Section Configurations')
        .withContext('Elements are not matching')
        .toBeTrue();
    })

    it('Click on select user',async()=>{
        await homePage.clickSelectUser();
        expect (await selectUserPage.$selectUserField().isDisplayed())
        .withContext('Select user field is not displayed')
        .toBe(true);
        expect (await selectUserPage.$selectRoleField().isDisplayed())
        .withContext('Select role field is not displayed')
        .toBeTrue();
    })

    it('Select user name and role.Click select button and validate add request option',async()=>{
        await selectUserPage.selectUserDetails();
        expect (await changeRequestPage.$addRequest().isDisplayed())
        .withContext('Add request button is not displayed')
        .toBeTrue();
    })

    it('Click on add request option',async()=>{
        await changeRequestPage.clickAddRequest();
        expect(await addRequestPage.$requestBox().isDisplayed())
        .withContext('Request fields are not displayed')
        .toBeTrue();

    })

    it('Select education organization',async()=>{
        await addRequestPage.selectOrganisation();
        expect(await addRequestPage.$requestCards().isDisplayed())
        .withContext('Request cards are not displayed')
        .toBeTrue();
    })

    it('Select category',async()=>{
        let categoryCards=await addRequestPage.selectCategory();
        expect( categoryCards).toContain('Organization Categories','Relationships','Networks','Programs','Documents')
        .withContext('Elements are not matching')
        .toBeTrue();
    })

    it('Select a future date and validate that the date selected is future date in that month',async()=>{
        await addRequestPage.selectTime();
        expect(await addRequestPage.$calender().isEnabled())
        .withContext('Calender is not enabled')
        .toBeTrue();

    })

    it('Click on organisation category',async()=>{
        await addRequestPage.selectOrganisation();
        expect (name).toEqual(actualName);

    })

})