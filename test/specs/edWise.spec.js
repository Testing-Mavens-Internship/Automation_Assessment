import landingPage from '../pageObjects/landing.js';
import loginPage from '../pageObjects/loginPage.js';
import userPage from '../pageObjects/userPage.js';
import changeRequestsPage from '../pageObjects/changeRequest.js'
import navOptions from '../testData/data.json' assert {type : 'json'};

describe("End to end flow of edWise group website", ()=>{
    it("Launch the url of the website", async ()=>{
        await landingPage.launchUrl();
        expect(await landingPage.$userNameHeader().isDisplayed())
            .withContext("The website is not loaded successfully")
            .toBeTrue();
    })

    it("Click on configurations and validate the 4 options displayed", async ()=>{
        const optionsDisplayed=await landingPage.clickConfigurations();
        for(let i=0; i<navOptions.count; i++){
            await expect(optionsDisplayed[i]).toBe(navOptions.options[i]);
        }
    })

    it("Click select user option from configurations", async ()=>{
        await landingPage.selectUserOption();
        expect(await landingPage.$validateSelectUser().isDisplayed())
            .withContext("The user cannot click on select user option")
            .toBeTrue();
    })

    it("Click on select user dropdown", async ()=>{
        await loginPage.clickSelectUserDropdown();
        expect(await userPage.validateUserPage())
            .withContext("The user cannot login by selecting username")
            .toBeTrue();

    })

    it("click on add request and validate headers", async ()=>{
        await userPage.clickAddRequest();
        const textsDisplayed = await changeRequestsPage.validateHeaderTexts();
        expect(textsDisplayed.isDisplayed()).toBeTrue();
    })

    it("Click on educational organizations and select one", async ()=>{
        await changeRequestsPage.selectEduCationalOrganization();
        expect(await changeRequestsPage.$detailsIcon().isDisplayed())
            .withContext("The details icons are not displayed")
            .toBeTrue();
    })

    it("Select a category from the category list", async ()=>{
        await changeRequestsPage.selectCategory();
        expect(await changeRequestsPage.$detailsIcon().isDisplayed())
            .withContext("The details icons are not displayed")
            .toBeTrue();
    })

    it("Change default Immediate to Future option", async ()=>{
        await changeRequestsPage.changeDefault();
        expect(await changeRequestsPage.validateChange()).toBeTrue();
    })

    it("Click on calender and validate disabled dates", async ()=>{
        await changeRequestsPage.validateCalender();
    
    })

    it("Click one date from the Calender", async ()=>{
        await changeRequestsPage.clickCalender();
    
    })

    it("Click Organizational Category", async ()=>{
        await changeRequestsPage.organizationalCategory();
    
    })

})