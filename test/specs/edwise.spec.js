import addRequest from "../pageobjects/addRequest.js";
import landingPage from "../pageobjects/landingPage.js";
import selectUser from "../pageobjects/selectUser.js";
describe("end to end flow of edwise webpage",()=>{
    it("launch the url",async()=>{
        await landingPage.loadUrl();

    })

    it("Clicking on configuration link",async()=>{
        await landingPage.clickOnconfiguration();
    })
    it("Clicking on selectUser",async()=>{
        await selectUser.ClickOnSelectUser();
        expect(await selectUser.$validatingTextbox().isDisplayed()).withContext("textbox is not displayed").toBeTrue();
    })

    it("Selecting dropdwon values",async()=>{
        await selectUser.selectingDropDownValues();
        expect(await selectUser.$validatingTextbox().isDisplayed()).withContext("textboox is not displayed").toBeTrue();
    })
    it("validating the change request link is displayed or not",async()=>{
        await selectUser.validatingChangeRequest();
        expect(await selectUser.$changeRequestHeader().isDisplayed()).withContext("change request link no not displayed");
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


   




})