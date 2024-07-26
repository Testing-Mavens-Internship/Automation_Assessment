import landingPage from "../pageobjects/edwise/landingPage.js";
import changeRequest from "../pageobjects/edwise/changeRequest.js";
import addRequest from "../pageobjects/edwise/addRequest.js";
import relationship from "../pageobjects/edwise/relationship.js";
import data from "../testData/timeout.json" assert{type:"json"};
describe("edwise group application flow",()=>{
    it("should launch the url",async()=>{
        await landingPage.loadUrl()
        await landingPage.waitForDisplayed({timeout:data.time,timeoutMsg:"header is not yet displayed"})
        expect(await landingPage.$usernameHeader().isDisplayed()).withContext("username text should not be visisble").toBeTrue;
    })
    it("click on configuration and validate the 4 elements present over there",async()=>{
        await landingPage.clickConfiguration()
        await landingPage.waitForDisplayed({timeout:data.time,timeoutMsg:"header is not yet displayed"})
        expect(await landingPage.$elementsHeader().isDisplayed()).withContext("all the elemets should not be visible").toBeTrue;
    })
    it("click on select users and validate the 2 boxes present on clicking select user option",async()=>{
        await landingPage.clickSelectUser()
        await landingPage.$header().waitForDisplayed({timeout:data.time,timeoutMsg:"header is not yet displayed"})
        expect(await landingPage.$$selectUserDropDown().isDisplayed()).withContext("text should not be visible").toBeTrue;
        expect(await landingPage.$$selectUserDropDown().isDisplayed()).withContext("text should not be visible").toBeTrue;

    })
    it("select options from the dropdown and click select",async()=>{
        await landingPage.chooseDropDown();
        await landingPage.clickSelectButton();
        await landingPage.$header().waitForDisplayed({timeout:data.time,timeoutMsg:"header is not yet displayed"})
        expect(await changeRequest.$newRequest().isDisplayed()).withContext("header should not be visible").toBeTrue;

    })
    it("click to add new request",async()=>{
        await changeRequest.addNewRequest();
        await changeRequest.$header().waitForDisplayed({timeout:data.time,timeoutMsg:"header is not yet displayed"})
        expect(await changeRequest.$usernameHeader().isDisplayed()).withContext("header should not be visible").toBeTrue;
        
    })
    it("choose educational organization,category and effective date",async()=>{
        await addRequest.checkBoxFuture();
        expect(await addRequest.$usernameHeader().isDisplayed()).withContext("header should not be displayed").toBeTrue;

    })
    it("choose a date from the effective date",async()=>{
    
    })
    it("click on the relationship element",async()=>{
        await addRequest.selectRelationship();
        expect(await relationship.$relationshipHeader().isDisplayed()).withContext("headers should not be displayed").toBeTrue;

    })
    it("upload the csv file and validate the header",async()=>{
        await relationship.uploadFile();
        expect(await relationship.$warningHeader().isDisplayed()).withContext("warning message should not be displayed").toBeTrue;


    })
    it("upload the png file and click ok button ",async()=>{
        await relationship.uploadFile();
        await relationship.$okButton();
        except(await relationship)

    })
})
    
    

   

    
    





        
      
     
    

    





