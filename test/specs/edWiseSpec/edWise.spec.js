
import landObj from "../../pageobjects/edWise/edWiseLandingPage.js"
import data from "../../testData/test.json" assert {type:'json'}
import selectUserObj from "../../pageobjects/edWise/edWiseSelectUser.js"
import addRequestObj from "../../pageobjects/edWise/edWiseAddRequest.js"
const addRequestHeaders=["Education Organization","Category","Effective Date"]
const configurationOptions=["'Select User'","'Role Permission'","'User Roles'","'Section Configurations'"]
const totalEducationalOrganization =21;
describe("End to end flow for the site EdWise",()=>{
    it("Launch the url and validate landing page header",async()=>{
       await landObj.loadUrl()
       expect(await landObj.$landingPageHeader().isDisplayed()).withContext("Landing page header is not displayed").toBeTrue()
    })
     it("Click on configuration label and validate all options for configurations are present",async()=>{
        
        const respond=await landObj.clickConfiguration()
    //    for(let i=0;i<respond.length;i++)
    //    {
    //     for(let k=0;k<configurationOptions.length;k++)
    //     {
    //         expect(respond[i]).toBe(configurationOptions[k])
    //     }
    //    }
})
    it("Click on select user and validate text box headers",async()=>{
         await landObj.selectUser();
         expect(await selectUserObj.$selectUserTextBoxHeader().isDisplayed()).withContext("Header is not displayed").toBeTrue()
         expect(await selectUserObj.$selectRoleTextBoxHeader().isDisplayed()).withContext("Header is not displayed").toBeTrue()
    })
    it("Select user and role and validate headers",async()=>{
        await selectUserObj.selectUserAndRole()
        // expect(await selectUserObj.$addRequestLabel().isDisplayed()).withContext("Header is not displayed").toBeTrue()
        // expect(await selectUserObj.$approveQueueLabel().isDisplayed()).withContext("Header is not displayed").toBeTrue()
        // expect(await selectUserObj.$displayedUserName().isDisplayed()).withContext("Header is not displayed").toBeTrue()
      })
      it("Click on Add request button and validate headers",async()=>{
        await addRequestObj.clickAddRequest();
        for(let item of addRequestHeaders)
        {
            expect(addRequestObj.$addRequestPageHeader(item).isDisplayed()).withContext("Header is not displayed").toBeTrue()
        }
      })
      it("Click on input field for selecting educational organization and validate all options are listed",async()=>{
        await addRequestObj.selectOrganization()
        expect(await addRequestObj.selectOrganization()).toBe(totalEducationalOrganization)

      })
      it("Click on input field for categories and validate all options are listed",async()=>{
        await addRequestObj.selectCategory()
        
      })
      

     
})