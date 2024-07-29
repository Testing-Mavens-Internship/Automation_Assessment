import landingPage from '../pageObjects/landing.js';
import loginPage from '../pageObjects/loginPage.js';
import userPage from '../pageObjects/userPage.js';
import changeRequestsPage from '../pageObjects/changeRequest.js'
import reviewChangePage from '../pageObjects/reviewChange.js';
import navOptions from '../testData/data.json' assert {type : 'json'};
import time from '../testData/data.json' assert {type : 'json'};

describe("End to end flow of edWise group website", ()=>{
    it("Launch the url of the website", async ()=>{
        await landingPage.launchUrl();
        expect(await landingPage.$userNameHeader().isDisplayed())
            .withContext("The website is not loaded successfully")
            .toBeTrue();
    })

    it("Click on configurations and validate the 4 options displayed", async () => {
        const optionsDisplayed = await landingPage.clickConfigurations();
        for (let i = 0; i < navOptions.options.length; i++) {
            expect(optionsDisplayed[i])
                .withContext(`Option at index ${i} does not match.`)
                .toBe(navOptions.options[i]);
        }
    });
    

    it("Click select user option from configurations", async ()=>{
        await landingPage.selectUserOption();
        const count = await landingPage.validateTwoBoxesPresence();
        expect(count)
            .withContext(`Expected 2 boxes, but found ${count}.`)
            .toBe(2);
    })

    it("Click on select user dropdown", async ()=>{
        await loginPage.clickSelectUserDropdown();
        expect(await userPage.$addRequest().isDisplayed())
            .withContext('Add Request header is not displayed')
            .toBe(true);
        expect(await userPage.$approvalQueue().isDisplayed())
            .withContext('Approval Queue header is not displayed')
            .toBe(true);   
        expect(await userPage.$profileName().isDisplayed())
            .withContext('Profile Name header is not displayed')
            .toBe(true);

    })

    it("click on add request and validate headers", async ()=>{
        await userPage.clickAddRequest();
        expect(await changeRequestsPage.$educationHeader().isDisplayed())
            .withContext('Educational Organization header is not displayed')
            .toBe(true);
        expect(await changeRequestsPage.$categoryHeader().isDisplayed())
            .withContext('Category header is not displayed')
            .toBe(true);
        expect(await changeRequestsPage.$DateHeader().isDisplayed())
            .withContext('Effective Date header is not displayed')
            .toBe(true);
    })

    it("Click on educational organizations and select one", async ()=>{
        await changeRequestsPage.selectEduCationalOrganization();
        await changeRequestsPage.$detailsIcon().waitForDisplayed({timeout: time.timeOutMedium})
        expect(await changeRequestsPage.$detailsIcon().isDisplayed())
            .withContext("The details icons are not displayed")
            .toBeTrue();
    })

    it("Select a category from the category list", async ()=>{
        await changeRequestsPage.selectCategory();
        await changeRequestsPage.$detailsIcon().waitForDisplayed({timeout: time.timeOutMedium})
        expect(await changeRequestsPage.$detailsIcon().isDisplayed())
            .withContext("The details icons are not displayed")
            .toBeTrue();
    })

    it("Change default Immediate to Future option", async ()=>{
        await changeRequestsPage.changeDefault();
        const returnedAttributeValue = await changeRequestsPage.validateChange()
        expect(returnedAttributeValue)
            .withContext('The attribute does not contain "active"')
            .toContain('active');
    })

    it("Click on calendar and validate disabled dates and select a date", async () => {
        const isValid = await changeRequestsPage.validateCalender()
        expect(isValid)
            .withContext('Calendar validation failed: Not all previous and next month dates are disabled')
            .toBeTrue();
    });

    it("Click on organizational category icon and validate the header texts", async ()=>{
        await changeRequestsPage.clickOrganizationalCategory();
        await reviewChangePage.$charterAuthorizer().waitForDisplayed({timeout : time.timeOutMedium})
        expect (await reviewChangePage.$charterAuthorizer().isDisplayed())
            .withContext('Charter Authorizer header is not displayed')
            .toBeTrue();
        await reviewChangePage.$organizationCategory().waitForDisplayed({timeout : time.timeOutMedium})
        expect (await reviewChangePage.$organizationCategory().isDisplayed())
            .withContext('Organizational Category header is not displayed')
            .toBeTrue();
    
    })

    it("To click close button and validate Change Request's header", async ()=>{
        await reviewChangePage.clickCloseButton();
        await reviewChangePage.$changeRequestHeader().waitForDisplayed({timeout : time.timeOutMedium})
        expect (await reviewChangePage.$changeRequestHeader().isDisplayed())
            .withContext('Change Request header is not displayed')
            .toBeTrue();
    })

})