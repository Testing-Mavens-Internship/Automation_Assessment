import landingPage from "../../test/pageObjects/edWise/landingPage.js";
import selectUserPage from "../../test/pageObjects/edWise/selectUserPage.js";
import allUsers from "../testData/data.json" assert{type:"json"};
import roles from "../testData/data.json" assert{type:"json"};
import changeRequest from "../pageObjects/edWise/changeRequestPage.js";



describe('End to end flow of "EDWISE" web application.',()=>{
    it('Launch the url of the website in the browser.',async()=>{
        await landingPage.loadUrl();
        expect(await landingPage.$userIconHeader().isDisplayed()).withContext("Header not displayed.").toBeTrue();
        expect(await landingPage.$configurationOption().isDisplayed()).withContext("Option not displayed.").toBeTrue();
    })

    it('Click on configuration option.',async()=>{
        await landingPage.clickConfiguration();
        expect(await landingPage.$selectUser().isDisplayed()).withContext("Option not displayed.").toBeTrue();
        
    })

    it('Click on select user option from the side bar and validate the two boxes..',async()=>{
        await landingPage.clickSelectUser();
        const count = await landingPage.validateTwoBoxes();
        expect(count).withContext(`Expected 2 boxes, but found ${count}.`).toBe(2);
    })

    it('Validate the dropdown And select a username from the select user option',async()=>{
        await selectUserPage.selectUserName();
        for (let i = 0; i < allUsers.userNames.length; i++) {
            expect(optionsDisplayed[i])
                .withContext(`Option at index ${i} does not match.`)
                .toBe(allUsers.userNames[i]);
        }
    })

   it('Validate the dropdown And select a role from the select role option',async()=>{
            await selectUserPage.selectRole();
            for (let i = 0; i < roles.allRoles.length; i++) {
                expect(optionsDisplayed[i])
                    .withContext(`Option at index ${i} does not match.`)
                    .toBe(roles.allRoles[i]);
            }
    })

    it('Click the select button',async()=>{
        await selectUserPage.clickSelectButton();
        expect(await selectUserPage.$educationOrganizationHeader().isDisplayed()).withContext("Header not displayed.").toBeTrue();
    })

    it('Click on education organization',async()=>{
        await changeRequest.clickEducationOrganization();
        expect(await changeRequest.$selectOrganization().isDisplayed()).withContext("Option not displayed.").toBeTrue();
    })
    it('Click on Mcnary elementary district.',async()=>{
        await changeRequest.clickMcnaryDistrict();
        expect(await changeRequest.$categoryHeader().isDisplayed()).withContext("Header not displayed.").toBeTrue();
    })
    
    it('Click on Organization category.',async()=>{
        await changeRequest.clickOrganizationCategory();
        expect(await changeRequest.$selectCategory().isDisplayed()).withContext("Option not displayed.").toBeTrue();
    })
})