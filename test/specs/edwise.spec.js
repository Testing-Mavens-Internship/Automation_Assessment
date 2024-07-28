import addRequest from "../pageobjects/addRequest.js";
import landingPage from "../pageobjects/landingPage.js";
import selectUser from "../pageobjects/selectUser.js";
describe("end to end flow of edwise webpage",()=>{
    it("launch the url",async()=>{
        await landingPage.loadUrl();
      await landingPage.$loading().waitForDisplayed(({timeout:50000,timeoutMsg:"still loading",reverse:true}))

    })

    it("Clicking on configuration link",async()=>{
        await landingPage.clickOnConfiguration();
        expect(await landingPage.$logoHeader().isDisplayed()).withContext("Logo is not displayed").toBeTrue();
    })
    it("Clicking on selectUser",async()=>{
        await selectUser.ClickOnSelectUser();
        expect(await landingPage.$logoHeader().isDisplayed()).withContext("Logo is not displayed").toBeTrue();
      
    })
 
    it("Selecting dropdwon values",async()=>{
        await selectUser.selectingDropDownValues();
        expect(await selectUser.$userIconName().isDisplayed()).withContext("userIconName is not displayed").toBeTrue();
    })

    it("Clicking on add request",async()=>{
        await addRequest.clickOnAddRequestLink();
        expect(await addRequest.$educationLabel().isDisplayed()).withContext("Education label is not displayed").toBeTrue();
        expect(await addRequest.$categoryLabel().isDisplayed()).withContext("Category label is not displayed").toBeTrue();
        expect(await addRequest.$dateLabel().isDisplayed()).withContext("date label is not displayed").toBeTrue();
    })

    it("selecting education organization from drop down",async()=>{
        await addRequest.selectionOptionEducationOrganization();
        expect(await addRequest.$educationTextboxValue().isDisplayed()).withContext("value is not dispayed").toBeTrue();
    })

    it("selecting category dropdown",async()=>{
        await addRequest.SelectCategory();
        expect(await addRequest.$categoryTextboxValue().isDisplayed()).withContext("Value is not displayed").toBeTrue();
    })

    it("Clickong on effective date",async()=>{
        await addRequest.SelectingEffectiveDate();
        expect(await addRequest.$calendar().isDisplayed()).withContext("Calender is not enabled").toBeTrue();
    })
    it("Clicking on calender",async()=>{
        await addRequest.clickingOncalendar();
        expect(await addRequest.$calendar().isDisplayed()).withContext("Calender is not enabled").toBeTrue();
    })

    it("clicking on organization category",async()=>{
        await addRequest.clickingOnOrganizationCategory();
        expect(await addRequest.$headerChange().isDisplayed()).withContext("change request is not displayed").toBeTrue();
        

    })

    it("clicking on change Request link",async()=>{
        await addRequest.clickOnChangeRequestLink();
        expect(await addRequest.$changeReqHeader().isDisplayed()).withContext("change request is not displayed").toBeTrue();

    })

    it("clicking on addRequest",async()=>{
        await addRequest.clickaddRequest();
        expect(await addRequest.$headerChange().isDisplayed()).withContext("change request is not displayed").toBeTrue();
        
})

it("selecting education oraganization  from dropdown",async()=>{
    await  addRequest.selectionOptionEducationOrganization();
    expect(await addRequest.$educationTextboxValue().isDisplayed()).withContext("value is not dispayed").toBeTrue();

})
it("Selecting category dropdown",async()=>{
    await addRequest.SelectCategory();
    expect(await addRequest.$categoryTextboxValue().isDisplayed()).withContext("Value is not displayed").toBeTrue();
})
it("selecting effective date checkbox",async()=>{
    await addRequest.SelectingEffectiveDate();
    expect(await addRequest.$calendar().isDisplayed()).withContext("Calender is not enabled").toBeTrue();
})
it("clicking on calender and selecting date",async()=>{
    await addRequest.clickingOncalendar();
    expect(await addRequest.$calendar().isDisplayed()).withContext("Calender is not enabled").toBeTrue();
})

it("clicking on relationship link",async()=>{
    await addRequest.clickingOnRelationShipLink();
})

it("clicking on Add relationship button",async()=>{
    await addRequest.clickOnAddRelationshipButton();
    expect(await addRequest.$nameRequiredMessage().isDisplayed()).withContext("message is not displayed").toBeTrue();

})

it("Selecting organization name",async()=>{
    await addRequest.selectNamFromDropdown();
})
it("Entering inputs into reason textbox",async()=>{
    await addRequest.enteringReason();
})

it("Clicking on uploadFile",async()=>{
    await addRequest.clickOnUploadFile();
})



   




})