
import wait from"../../testData/time.json"assert{type:"json"}
import addrequest from "../pageobjects/addrequest.js";
import landingPage from "../pageobjects/landingPage.js"
import selectuser from "../pageobjects/selectuser.js";

let minTimeout=wait.time.min;
let midTimeout=wait.time.mid;
let maxTimeout=wait.time.max 
describe("End to End flow of Edwise webpage",()=>{
    it("launching url",async()=>{
        await landingPage.loadUrl();
        expect(await landingPage.$edwiseHeader().isDisplayed()).withContext("Edwise header is not displayed").toBeTrue();
    })

    it("Clicking on configuration link",async()=>{
        await landingPage.clickOnConfigurationsLink();
        expect(await landingPage.$selectUserHeader().isDisplayed()).withContext("selectUser link is not displayed").toBeTrue();
    })
    it("Clicking on select user",async()=>{
        await landingPage.clickOnselectUserLink()
        expect(await landingPage.$dropdownBox().isDisplayed()).withContext("dropdown boxes is not displayed").toBeTrue();

    })
    it("Selecting dropdown options form select user",async()=>{
        await selectuser.selectingDropdownFromSelectUser();
        expect(await selectuser.$dropdownBox().isDisplayed()).withContext("dropdown boxes is not displayed").toBeTrue();
    })
    
    it("Selecting dropdown Optons from select role",async()=>{
        await  selectuser.selectingDropdownfromSelectRole();
        expect(await selectuser.$dropdownBox().isDisplayed()).withContext("dropdown boxes is not displayed").toBeTrue();
        await browser.pause(5000)
    })
    it("Clicking on select button",async()=>{
        await selectuser.clickOnSelectButton();
        expect(await selectuser.$userIcon().isDisplayed()).withContext("Usericon is not displayed").toBeTrue();

    })

    it("Clicking on addrequest link",async()=>{
        await addrequest.clickOnAddRequest();
        expect(await addrequest.$headerChange().isDisplayed()).withContext(" header is not displayed").toBeTrue();

    })
    it("Selecting Education organization dropdown options",async()=>{
        await addrequest.selectingOptionFromEducationOrganizationDropDown();
        expect(await addrequest.$educationTextboxValue().isDisplayed()).withContext("Education name is not displayed in textbox").toBeTrue();
    })
    it("Selecting select category dropdown options",async()=>{
        await addrequest.selectingoptionFromCategoryDropdown();
        expect(await addrequest.$categoryTextboxValue().isDisplayed()).withContext("School label is not displayed").toBeTrue();
    })
    it("Selecting effective future date checkbox",async()=>{
        await addrequest.selectingEffectiveDateCheckbox();
        expect(await addrequest.$enabledCalender().isDisplayed()).withContext("Calender is not enabled").toBeTrue();
    })
    it("clicking on Calendar",async()=>{
        await addrequest.clickingOnCalendar();
        expect(await addrequest.$datePicker().isDisplayed()).withContext("Date picker window is not displayed").toBeTrue();
    })
    it("selecting date and month",async()=>{
        await addrequest.selectingDate();
      
        expect(await addrequest.$finalDate().isDisplayed()).withContext("Date picker window is not displayed").toBeTrue();

    })

    it("clicking on organiization category",async()=>{
        await addrequest.clickOnOrganizationCategory()
        
        
    })
})