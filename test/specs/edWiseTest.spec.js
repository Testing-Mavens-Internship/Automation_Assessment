import landingPage from "../pageobjects/edWiseTest/landingPage.js";
import changeRequestPage from "../pageobjects/edWiseTest/changeRequestPage.js";
import testData from "../testData/edWiseData.json"assert{type:'json'}
let boxName1="";
let boxCount1="";
let boxName2="";
let boxCount2=""
let organizationName=""
let catagory=""

describe("Automating an End to End flow of edWise website",()=>{
    it("In this test we are loading the url and maximizing the window",async()=>{
 
        await landingPage.loadUrl();
        expect(await landingPage.$usernameHeader().isDisplayed())
        .withContext("Header is not displayed")
        .toBeTrue()
    })
    it("Click on the Configuration Button",async()=>{
        await landingPage.clickConfiguration();
        expect(await landingPage.$selectUserButton().isDisplayed())
        .withContext("Element is not visible")
        .toBeTrue();

    })
    it("Click on the select User button",async()=>{
        await landingPage.selectUserClick();
        for(let dropdown of await landingPage.$$dropDowns()){
            expect(await dropdown.isDisplayed())
            .withContext("Element is not visible")
            .toBeTrue();
        }
        
    })

    it("Click on the select user dropdown and select Sachin",async()=>{
        await landingPage.selectDropDown("Select User","Sachin")
        

    })

    it("Click on the role dropdown and select LEA_Data_Admin",async()=>{
        await landingPage.selectDropDown("Select Role","LEA_Data_Admin")
    })
   
    it("Click on the Select Button",async()=>{
        await landingPage.clickSelect();
        expect(await landingPage.$usernameHeader().getText()).toEqual("Sachin")
    })

    it("Click on the add request button",async()=>{
        await changeRequestPage.clickAddRequest();
        expect(await landingPage.$changeRequestPageHeader().isDisplayed())
        .withContext("Element is not visible")
        .toBeTrue()
    })
    it("Here we are choosing the educational dropdown and selecting the Bisbee unified school", async () => {
        [boxName1,boxCount1]=await changeRequestPage.selectDropDown("Education Organization", "Bisbee Unified District");
        organizationName=await changeRequestPage.$schoolName().getText()
        expect(boxName1).toEqual(organizationName);
    });

    it("Here we are choosing the Catogory and Education agency", async () => {
        [boxName2,boxCount2]=await changeRequestPage.selectDropDown("Category", "School");
        catagory=await changeRequestPage.$categoryName().getText()
        expect(boxName2).toEqual(catagory)
        expect(boxCount1).not.toEqual(boxCount2)
    })

    it("Select the future button", async () => {
        await changeRequestPage.clickFuture();
        expect(await changeRequestPage.$calendarButton().isEnabled())
    })

    it("Click on the calender button and select 15 Aug 2025",async()=>{
        await changeRequestPage.selectDate("August","2025","15")

    })
    it("Click on the Organization Categories",async()=>{
        await changeRequestPage.clickMenuBox("Organization Categories");
        let boxName="Organization Categories"
        expect(await changeRequestPage.$formBoxName().getText()).toContain(boxName)
        expect(await changeRequestPage.$formCategory().getText()).toContain(catagory)
        expect(await changeRequestPage.$formSchoolName().getText()).toEqual(organizationName)
    })

    it("Fill the form",async()=>{
        await changeRequestPage.fillForm(testData.dropDownValues)
    })

    it("Deselect check boxes 1,2",async()=>{
        let deselectGrade=["Grade 1","Grade 2"]
        await changeRequestPage.selectCheckBox(deselectGrade)
    })

    it("Select checkboxes 6,7",async()=>{
        let deselectGrade=["Grade 6","Grade 7"]
        await changeRequestPage.selectCheckBox(deselectGrade)
    })
})