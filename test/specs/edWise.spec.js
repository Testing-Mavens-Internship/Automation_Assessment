import landingPage from "../pageobjects/edWise/landingPage.js"
import dataSheet from "../testData/edWiseData.json"assert{type:'json'}
import selectUserPage from "../pageobjects/edWise/selectUserPage.js";
import changeRequestPage from "../pageobjects/edWise/changeRequestPage.js";
import organizationCatPage from "../pageobjects/edWise/organizationCatPage.js"; 

let configMenu=[];

describe("Automating an End to End flow of edWise website",()=>{
    it("In this test we are loading the url and maximizing the window",async()=>{
        
        await landingPage.loadUrl();
        expect(await landingPage.$usernameHeading().isDisplayed())
        .withContext("Header is not displayed")
        .toBeTrue()
    })

    it("In this test we click on the config button",async()=>{
        configMenu=await landingPage.clickConfig("Select User");
        // expect(await configMenu.toEqual(dataSheet.configMenuElements));
    })

    it("In this test we are clicking the select user menu",async()=>{
        await landingPage.clickUser("Select User");

    })
    
    it("In this test we are clicking the select user menu and select Sachin",async()=>{
    await selectUserPage.selectUserDropDown("Select User","Sachin");
    expect(await selectUserPage.$labelinDropBox().getText()).toEqual("Sachin");
    })

    it("In this test we are clicking the select role menu",async()=>{
        await selectUserPage.selectRoleDropDown("Select Role","LEA_Data_Admin");
        expect(await selectUserPage.$labelinDropBox().getText()).toEqual("LEA_Data_Admin")
        .withContext("Both are not equal")
        .toBeTrue()
    })

    it("In this test we are clicking the select button",async()=>{
        await selectUserPage.selectButton("Sachin");
        await changeRequestPage.$changeRequestHeader().waitForDisplayed({timeout:dataSheet.timeout,timeoutMsg:"Element is not visible"});

    })

    it("Click on the Request Button",async()=>{
        await changeRequestPage.clickRequestButton();
        expect(await changeRequestPage.$eduOrganisationHeader().isDisplayed())
        .withContext("Element is not visible")
        .toBeTrue()
    })

    it("Select the school",async()=>{
        await changeRequestPage.selectSchool("Bisbee Unified District");
        expect(await changeRequestPage.$selectSchoolBox().getText()).toEqual("Bisbee Unified District")
        .withContext("Both are not equal")
        .toBeTrue()
    })

    it("select the local education agency",async()=>{
        await changeRequestPage.selectAgency("Charter Authorizer");
        expect(await changeRequestPage.$selectAgencyBox().getText()).toEqual("Charter Authorizer")
    })

    it("Select the date",async()=>{
        await changeRequestPage.selectDate();
        
    })

    it("select the organization category",async()=>{
        await changeRequestPage.selectMenuBox("Organization Category");
        expect(await organizationCatPage.$categoryName().getText()).toEqual("Charter Authorizer")
        .withContext("Both are not equal")
        .toBeTrue()
        
    })

    it("Click on the close button",async()=>{
        await organizationCatPage.closeButton();
        expect(await changeRequestPage.$changeRequestHeader().isDisplayed())
        .withContext("Element is not visible")
        .toBeTrue
    })
    
    it("Click on the Request Button",async()=>{
        await changeRequestPage.clickRequestButton();
        expect(await changeRequestPage.$eduOrganisationHeader().isDisplayed())
        .withContext("Element is not visible")
        .toBeTrue()
    })

    it("Select the school",async()=>{
        await changeRequestPage.selectSchool("Bisbee Unified District");
        expect(await changeRequestPage.$selectSchoolBox().getText()).toEqual("Bisbee Unified District")
        .withContext("Both are not equal")
        .toBeTrue()
    })

    it("select the local education agency",async()=>{
        await changeRequestPage.selectAgency("Charter Authorizer");
        expect(await changeRequestPage.$selectAgencyBox().getText()).toEqual("Charter Authorizer")
    })

    it("Select the date",async()=>{
        await changeRequestPage.selectDate();
        
    })

    it("select the Relationship",async()=>{
        await changeRequestPage.selectMenuBox("Relationships");
        expect(await organizationCatPage.$relationHeader().isDisplayed()
        .withContext("Element is not visible")
        .toBeTrue())
    })

    it("Click add request button",async()=>{
        
    })




})