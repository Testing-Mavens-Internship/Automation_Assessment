
import dataSheet from "../testData/edWiseData.json" assert { type: 'json' };
import landingPage from "../pageobjects/edWiseReWork/landingPage.js";
import selectUserPage from "../pageobjects/edWiseReWork/selectUserPage.js";
import changeRequestPage from "../pageobjects/edWiseReWork/changeRequestPage.js";

let userDropDownElements = [];
let roleDropDownElements = [];
let boxCount1=0;
let boxCount2=0;
let boxName1="";
let boxName2="";
let previousDays=[]

describe("Here we are automating an End to End flow of EdWise website", () => {
    it("Here we are loading the URL and maximizing the window", async () => {
        await landingPage.loadUrl();
        expect(await landingPage.$usernameHeader().isDisplayed())
            .withContext("Header is not displayed")
            .toBeTrue();
    });

    it("Here we are clicking on the config button", async () => {
        let configElements = await landingPage.clickConfig();
        expect(configElements).toEqual(dataSheet.configMenuElements);
    });

    it("In this test we are clicking on the select user menu", async () => {
        await landingPage.clickConfigElement("Select User");
        expect(await selectUserPage.$selectUserHead().isDisplayed())
            .withContext("Element is not visible")
            .toBeTrue();
    });

    it("In this test we are click on the select user and select Sachin", async () => {
        let usernameElements = await selectUserPage.$$userNames();
        userDropDownElements = await selectUserPage.selectDropDown("Select User", "Sachin", usernameElements);//ecpect
    });

    it("In this test we are click on the select role and select LEA_Data_Admin", async () => {
        let roleElements = await selectUserPage.$$roleNames();
        roleDropDownElements = await selectUserPage.selectDropDown("Select Role", "LEA_Data_Admin", roleElements);//ecpect
    });

    it("In this test we are clicking on the select button", async () => {
        await selectUserPage.clickSelect();
        expect(await selectUserPage.$changeRequestHeader().isDisplayed())
            .withContext("Element is not visible")
            .toBeTrue();
        expect(await selectUserPage.$validateUser().getText()).toEqual("Sachin");
    });

    it("Here we are clicking the add request button", async () => {
        await changeRequestPage.addRequest();//ecpect
    });

    it("Here we are choosing the educational dropdown and selecting the Bisbee unified school", async () => {
        [boxName1,boxCount1]=await changeRequestPage.selectDropDown("Education Organization", "Bisbee Unified District");
        expect(boxName1).toEqual("Bisbee Unified District");
    });

    it("Here we are choosing the Catogory and Education agency", async () => {
        [boxName2,boxCount2]=await changeRequestPage.selectDropDown("Category", "Charter Authorizer");
        expect(boxName2).toEqual("Charter Authorizer")
        expect(boxCount1).not.toEqual(boxCount2)
    })

    it("Select the future button", async () => {
        await changeRequestPage.clickFuture();
        expect(await changeRequestPage.$calendarButton().isEnabled())
    })

    it("Here we are selecting the date", async () => {
        previousDays=await changeRequestPage.selectDate();

        for(let day of previousDays){
            expect(await changeRequestPage.$calenderDates(day).isClickable()).toBeFalse();
        }
    });

    it("In this test we are clicking the Organization Categories button", async () => {
        await changeRequestPage.clickMenuBoxes("Organization Categories");
        // let categoryName=await changeRequestPage.$sectionHeader().getText()
        // expect(categoryName).toContain("Organization")
        
    })

    it("In this test we are clicking the Close button", async () => {
        await changeRequestPage.clickCloseButton();
        // expect(await changeRequestPage.$changeRequestHeader().isDisplayed())
        //     .withContext("Header is not displayed")
        //     .toBeTrue();
    })

    it("Here we are clicking the add request button", async () => {
        await changeRequestPage.addRequest();//ecpect
    });

    it("Here we are choosing the educational dropdown and selecting the Bisbee unified school", async () => {
        [boxName1,boxCount1]=await changeRequestPage.selectDropDown("Education Organization", "Bisbee Unified District");
        expect(boxName1).toEqual("Bisbee Unified District");
    });

    it("Here we are choosing the Catogory and Education agency", async () => {
        [boxName2,boxCount2]=await changeRequestPage.selectDropDown("Category", "Charter Authorizer");
        expect(boxName2).toEqual("Charter Authorizer")
        expect(boxCount1).not.toEqual(boxCount2)
    })

    it("Select the future button", async () => {
        await changeRequestPage.clickFuture();
        expect(await changeRequestPage.$calendarButton().isEnabled())
    })

    it("Here we are selecting the date", async () => {
        previousDays=await changeRequestPage.selectDate();

        for(let day of previousDays){
            expect(await changeRequestPage.$calenderDates(day).isClickable()).toBeFalse();

        }
    });

    it("In this test we are clicking the Organization Categories button", async () => {
        await changeRequestPage.clickMenuBoxes("Relationships");
        // let categoryName=await changeRequestPage.$sectionHeader().getText()
        // expect(categoryName).toContain("Organization")
        
    })

    it("Click on the add relationship button", async () => {
        await changeRequestPage.clickAddRelationship();
        for(let error in changeRequestPage.$$errorMessages()){
            expect(await changeRequestPage.$$errorMessages()[error].isDisplayed())
            .withContext("Element is not visible")
            .toBeTrue();
        }
    })
    
    it("Click on the first dropdown and click Authorize", async () => {
        let relationDrop=await changeRequestPage.$relationshipTypeDropDown();
        let authorize=await changeRequestPage.$authorizeElement();
        await changeRequestPage.selectRelationshipDropdowns(relationDrop,authorize);
    })

    it("Click on the secound dropdown and click Arizona School", async () => {
        let organizationDrop=await changeRequestPage.$organizationNameDropDown();
        let arizonaSchool=await changeRequestPage.$arizonaElement();
        await changeRequestPage.selectRelationshipDropdowns(organizationDrop,arizonaSchool);
    })

    it("Click on the reason for change and enter reason", async () => {
        await changeRequestPage.reasonToChangeText(dataSheet.reasonToChange);
    })
    it("Click on the upload button and upload a file", async () => {
        await changeRequestPage.uploadFile();
    })

});
