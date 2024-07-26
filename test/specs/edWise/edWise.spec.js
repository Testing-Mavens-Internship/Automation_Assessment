import landingPage from "../../pageobjects/edWise/landingPage.js";


describe('End to end flow of "EDWISE" web application.',()=>{
    it('Launch the Url of the web application in the browser.',async()=>{
        await landingPage.loadUrl();
        expect(await landingPage.$userNameOption().isDisplayed()).withContext("Username option not displayed.").toBeTrue();
    });
    it('Click on the configuration option present in the sidebar of the web application.',async()=>{
        await landingPage.clickConfiguration();
        expect(await landingPage.$$configurationSubCategories().isDisplayed()).withContext("Sub categories not displayed.").toBeTrue();
    });
    it('Click on the select user option from the configuration category.',async()=>{
        await landingPage.clickSelectUser();
        expect(await landingPage.$$DropdownHeaders().isDisplayed()).withContext("Dropdown headers not displayed.").toBeTrue();
    });
    it('Click on the select user dropdown option.',async()=>{
        await landingPage.clickSelectUserDropDown();
        expect(await landingPage.$nameSachin().isDisplayed()).withContext("Name is not displayed in the dropdown.");
    });
    it('Click on a name from the select user dropdown option.',async()=>{
        await landingPage.$nameSachin();
        expect(await landingPage.$selectUserHeaderChange().isDisplayed()).withContext("Dropdown header not displayed.").toBeTrue();
    });
    it('click on the select role dropdown option.',async()=>{
        await landingPage.clickSelectRoleDropDown();
        expect(await landingPage.$firstRole().isDisplayed()).withContext("Role is not displayed.").toBeTrue();
    });
    it('Click on the first role from the dropdown.',async()=>{
        await landingPage.clickFirstRole();
        expect(await landingPage.$selectRoleHeaderChange().isDisplayed()).withContext("Dropdown header not displayed.").toBeTrue();
    });
    it('Click on the select button.',async()=>{
        await landingPage.clickSelectButton();
        expect(await landingPage.$addRequestButton().isDisplayed()).withContext("Button not displayed.").toBeTrue();
    });
    it('Click on the add request option present in the side bar.',async()=>{
        await landingPage.clickAddRequest();
        expect(userName).toEqual(userIconName);
        expect(await landingPage.$$requestFieldHeaders().isDisplayed()).withContext("Headers not displayed.").toBeTrue();

    });
    it(`Click on the education organization field and validate its dropdown option.`,async()=>{
        await landingPage.clickEducationOrganization();
        expect(await landingPage.$mcnaryDistrict().isDisplayed()).withContext("Option not displayed.").toBeTrue();
    });
    it('Select Mcnary elementary district from the dropdown.',async()=>{
        await landingPage.clickMcnaryDistrict();
        expect(await landingPage.$educationOrgHeaderChange().isDisplayed()).withContext("Header not displayed.").toBeTrue();
        
    });
    it(`Click on the category field and validate its dropdown option.`,async()=>{
        await landingPage.clickCategory();
        expect(await landingPage.$charterAuthorizerOption().isDisplayed()).withContext("Option not displayed.").toBeTrue();
       
    });
    it(`Click on the charter authorizer from the dropdown.`,async()=>{
        await landingPage.clickCharterAuthorizer();
        expect(await landingPage.$categoryHeaderChange().isDisplayed()).withContext("Header not displayed.").toBeTrue();
        
    });
    it(`Click on future from the effective date tab and validate that the date option is enabled.`,async()=>{
        await landingPage.clickFuture();
        expect(await landingPage.$futureOption().isEnabled()).withContext("Not enabled").toBeTrue();

    })

    
    
})