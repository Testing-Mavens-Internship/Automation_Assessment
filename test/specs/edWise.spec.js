import landingPage from '../pageObjects/landing.js';
import loginPage from '../pageObjects/login.js';
import changeRequest from '../pageObjects/changeRequests.js';
import dropDown from '../testData/data.json' assert {type: 'json'};
import time from '../testData/data.json' assert {type : 'json'};
import texts from '../testData/data.json' assert {type : 'json'};

describe("End to end flow of edWise group website", ()=>{
    it("Launch the url of the website", async ()=>{
        await landingPage.loadUrl();
        expect(await landingPage.$userNameHeader().isDisplayed())
            .withContext("The website is not loaded successfully")
            .toBeTrue();
    })

    it("Click on configurations and validate the dropdown options present", async () => {
        const elements = await landingPage.clickConfigurations();
        for (let i=0; i< dropDown.options.length; i++) {
            expect(elements[i]).toBe(dropDown.options[i]) 
        }
    })

    it("Click select user option from configurations", async ()=>{
        await landingPage.$selectUser().waitForDisplayed({timeout: time.timeOutMedium, timeoutMsg: "option is not clickable"})
        await landingPage.selectUserOption();
        const count = await landingPage.validateTwoBoxesPresence();
        expect(count)
            .withContext(`Expected 2 boxes, but found ${count}.`)
            .toBe(2);
    })

    it("Select username and role and validate signing in", async ()=>{
        await loginPage.selectUserAndRole();
        expect(await loginPage.$loginHeader().isDisplayed())
             .withContext("Name is not displayed")
             .toBeTrue();
    })

    it("Should click on Add request  and validate the headers", async ()=>{
        await loginPage.addRequest();
        expect(await changeRequest.$headers(texts.headers[0]).isDisplayed())
              .withContext("Header is not displayed")
              .toBeTrue();
        expect(await changeRequest.$headers(texts.headers[1]).isDisplayed())
              .withContext("Header is not displayed")
              .toBeTrue();
        expect(await changeRequest.$headers(texts.headers[2]).isDisplayed())
              .withContext("Header is not displayed")
              .toBeTrue();

    })

    it("Should select education organization and category", async ()=>{
        await loginPage.organizationAndCategory();
        expect(await loginPage.$validateHeaderOrganization().isDisplayed())
             .withContext("Header is not displayed")
             .toBeTrue();
        expect(await loginPage.$validateHeaderCategory().isDisplayed())
             .withContext("Header is not displayed")
             .toBeTrue();

    })

    it("Should change the default option of calender to future", async ()=>{
        await loginPage.changeDefaultOption();
        const returnedAttributeValue = await loginPage.validateChange()
        expect(returnedAttributeValue)
            .withContext('The attribute does not contain "active"')
            .toContain('active');
    })

    it("Should select a date from the calender", async ()=>{
        await loginPage.selectDate();
    })




})

